import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";

const defaultSteps = {
  Finishes: [
    { name: "3D Base Modeling", completed: false },
    { name: "Detailed Modeling", completed: false },
    { name: "Revisions", completed: false },
    { name: "Approval", completed: false },
  ],
  "Floor Plan": [
    { name: "Initial Drawing", completed: false },
    { name: "Revisions", completed: false },
    { name: "Approval", completed: false },
  ],
  Plumbing: [
    { name: "Initial Drawing", completed: false },
    { name: "Revisions", completed: false },
    { name: "Approval", completed: false },
  ],
  Electrical: [
    { name: "Initial Drawing", completed: false },
    { name: "Revisions", completed: false },
    { name: "Approval", completed: false },
  ],
};

async function findUserByIdOrIdentifier(identifier) {
  if (!identifier && identifier !== 0) return null;

  // numeric id (number or numeric-string)
  const maybeNum = Number(identifier);
  if (!isNaN(maybeNum) && Number.isInteger(maybeNum) && maybeNum > 0) {
    return prisma.user.findUnique({ where: { id: maybeNum } });
  }

  // try username (unique) first
  let user = await prisma.user.findUnique({ where: { username: identifier } }).catch(() => null);
  if (user) return user;

  // fallback: search by name (may not be unique)
  user = await prisma.user.findFirst({ where: { name: identifier } }).catch(() => null);
  return user;
}

export async function POST(req) {
  try {
    const { projectName, category, selectedTasks, assignedTasks, deadline, createdById } = await req.json();

    if (!projectName || !category || !selectedTasks || !assignedTasks) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 });
    }

    // 1️⃣ Find or create project
    let project = await prisma.project.findFirst({ where: { name: projectName } });
    if (!project) {
      project = await prisma.project.create({ data: { name: projectName } });
    }

    // 2️⃣ Find or create category
    let cat = await prisma.category.findFirst({
      where: { name: category, projectId: project.id },
    });
    if (!cat) {
      cat = await prisma.category.create({ data: { name: category, projectId: project.id } });
    }

    const tasksCreated = [];
    const employeeIds = [];
    const createdAnnouncements = [];

    // 3️⃣ Create tasks
    for (const [taskName, taskData] of Object.entries(assignedTasks)) {
      let subcat = await prisma.subcategory.findFirst({
        where: { name: taskName, categoryId: cat.id },
      });
      if (!subcat) {
        subcat = await prisma.subcategory.create({ data: { name: taskName, categoryId: cat.id } });
      }

      const assignedToIdentifier = taskData?.staff;
      const assignedUser = await findUserByIdOrIdentifier(assignedToIdentifier);
      if (!assignedUser) continue;
      if (assignedUser.role === "executive") continue;

      const existingTask = await prisma.task.findFirst({
        where: {
          title: taskName,
          subcategoryId: subcat.id,
          assignedToId: assignedUser.id,
        },
      });
      if (existingTask) continue;

      const createdTask = await prisma.task.create({
        data: {
          title: taskName,
          subcategoryId: subcat.id,
          assignedToId: assignedUser.id,
          deadline: deadline ? new Date(deadline) : null,
        },
      });

      const stepsToCreate =
        (taskData?.steps && Array.isArray(taskData.steps) && taskData.steps.length)
          ? taskData.steps.map((s) => ({ name: s.name, completed: !!s.completed }))
          : defaultSteps[taskName] || [];

      if (stepsToCreate.length) {
        await prisma.step.createMany({
          data: stepsToCreate.map((s) => ({
            taskId: createdTask.id,
            name: s.name,
            completed: !!s.completed,
          })),
        });
      }

      const fullTask = await prisma.task.findUnique({
        where: { id: createdTask.id },
        include: {
          assignedTo: true,
          assignedBy: true,
          subcategory: { include: { category: { include: { project: true } } } },
          steps: true,
        },
      });

      tasksCreated.push(fullTask);
      employeeIds.push(assignedUser.id);
    }

    // 4️⃣ Create announcement for each assigned employee
    if (employeeIds.length > 0) {
      const employees = await prisma.user.findMany({
        where: { id: { in: employeeIds } },
        select: { id: true, name: true, role: true },
      });

      for (const emp of employees) {
        const ann = await prisma.announcement.create({
          data: {
            title: "Project Assignment",
            message: `${projectName || "Project"} assigned to ${emp.name}.`,
            type: "PROJECT_ASSIGNMENT",
            assignedToId: emp.id,
            projectId: project.id || null,
            createdById: createdById || null,
          },
          include: {
            assignedTo: { select: { id: true, name: true, role: true } },
            project: { select: { id: true, name: true } },
          },
        });
        createdAnnouncements.push(ann);
      }
    }

    return new Response(
      JSON.stringify({
        message: "Tasks created and announcements sent",
        tasks: tasksCreated,
        announcements: createdAnnouncements,
      }),
      { status: 200 }
    );
  } catch (err) {
    console.error("Error in /api/tasks POST:", err);
    return new Response(JSON.stringify({ error: "Failed to assign task", details: err.message }), { status: 500 });
  }
}

export async function GET() {
  try {
    const tasks = await prisma.task.findMany({
      include: {
        steps: true,
        assignedTo: true,
        subcategory: {
          include: {
            category: {
              include: { project: true },
            },
          },
        },
      },
    });

    const tasksWithProgress = tasks.map((task) => {
      const total = task.steps.length;
      const completed = task.steps.filter((s) => s.completed).length;
      const progress = total === 0 ? 0 : Math.round((completed / total) * 100);

      return { ...task, progress };
    });

    return NextResponse.json(tasksWithProgress);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to fetch tasks" }, { status: 500 });
  }
}
export async function DELETE(req) {
  try {
    // Delete all steps first to avoid foreign key constraint errors
    await prisma.step.deleteMany({});

    // Then delete all tasks
    const deletedTasks = await prisma.task.deleteMany({});

    return new Response(
      JSON.stringify({ message: 'All tasks deleted successfully', deletedCount: deletedTasks.count }),
      { status: 200 }
    );
  } catch (err) {
    console.error('Error deleting tasks:', err);
    return new Response(JSON.stringify({ error: 'Failed to delete tasks' }), { status: 500 });
  }
}