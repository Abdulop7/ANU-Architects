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
    const { projectName, category, selectedTasks, assignedTasks, deadline } = await req.json();

    if (!projectName || !category || !selectedTasks || !assignedTasks) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 });
    }

    // 1) find or create project
    let project = await prisma.project.findFirst({ where: { name: projectName } });
    if (!project) {
      project = await prisma.project.create({ data: { name: projectName } });
    }

    // 2) find or create category under project
    let cat = await prisma.category.findFirst({
      where: { name: category, projectId: project.id },
    });
    if (!cat) {
      cat = await prisma.category.create({ data: { name: category, projectId: project.id } });
    }

    const tasksCreated = [];

    // Iterate assignedTasks keys (each key = a task/subtask like "Plumbing" or "Finishes")
    for (const [taskName, taskData] of Object.entries(assignedTasks)) {
      // create/find subcategory for this task name under the chosen category
      let subcat = await prisma.subcategory.findFirst({
        where: { name: taskName, categoryId: cat.id },
      });
      if (!subcat) {
        subcat = await prisma.subcategory.create({ data: { name: taskName, categoryId: cat.id } });
      }

      // resolve assigned user (accept numeric id, username or name)
      const assignedToIdentifier = taskData?.staff;
      const assignedUser = await findUserByIdOrIdentifier(assignedToIdentifier);
      if (!assignedUser) {
        // skip unassigned / invalid user
        console.warn(`No user found for '${taskName}' (${assignedToIdentifier}) — skipping`);
        continue;
      }

      if (assignedUser.role === "executive") {
        // skip assigning to executives
        console.warn(`Skipping assignment of '${taskName}' to executive '${assignedUser.name}'`);
        continue;
      }

      // avoid creating duplicate identical task (same title, subcategory and assignee)
      const existingTask = await prisma.task.findFirst({
        where: {
          title: taskName,
          subcategoryId: subcat.id,
          assignedToId: assignedUser.id,
        },
      });
      if (existingTask) {
        console.warn(`Task already exists for '${taskName}' assigned to ${assignedUser.id}, skipping create`);
        continue;
      }

      // create the task
      const createdTask = await prisma.task.create({
        data: {
          title: taskName,
          subcategoryId: subcat.id,
          assignedToId: assignedUser.id,
          deadline: deadline ? new Date(deadline) : null, 
          // assignedById left null on purpose (you said you don't want it)
        },
      });

      // determine steps to create: use taskData.steps if provided, otherwise use defaultSteps[taskName] or []
      const stepsToCreate = (taskData?.steps && Array.isArray(taskData.steps) && taskData.steps.length)
        ? taskData.steps.map(s => ({ name: s.name, completed: !!s.completed }))
        : (defaultSteps[taskName] || []);

      if (stepsToCreate.length) {
        // Use createMany for efficiency
        await prisma.step.createMany({
          data: stepsToCreate.map(s => ({ taskId: createdTask.id, name: s.name, completed: !!s.completed })),
        });
      }

      // fetch full task with relations to return
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
    }

    return new Response(JSON.stringify({ message: "Tasks created", tasks: tasksCreated }), { status: 200 });
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