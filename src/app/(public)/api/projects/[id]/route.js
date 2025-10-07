import { NextResponse } from "next/server";
import prisma from "../../../../../../lib/prisma";

// DELETE /api/projects/[id]
export async function DELETE(request, { params }) {
  const { id } = params;

  try {
    const projectId = parseInt(id);

    // Check if project exists
    const project = await prisma.project.findUnique({
      where: { id: projectId },
      include: {
        categories: {
          include: {
            subcats: {
              include: {
                tasks: {
                  include: { steps: true, workLogs: true },
                },
              },
            },
          },
        },
      },
    });

    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    // Delete all related data manually (due to nested relations)
    await prisma.$transaction(async (tx) => {
      // Delete WorkLogs, Steps for each Task
      for (const category of project.categories) {
        for (const subcat of category.subcats) {
          for (const task of subcat.tasks) {
            
            await tx.step.deleteMany({
              where: { taskId: task.id },
            });
          }
          // Delete Tasks
          await tx.task.deleteMany({
            where: { subcategoryId: subcat.id },
          });
        }

        // Delete Subcategories
        await tx.subcategory.deleteMany({
          where: { categoryId: category.id },
        });
      }

      // Delete Categories
      await tx.category.deleteMany({
        where: { projectId },
      });

      // Finally delete Project
      await tx.project.delete({
        where: { id: projectId },
      });
    });

    return NextResponse.json({
      message: `Project '${project.name}' and all its related data were deleted successfully.`,
    });
  } catch (error) {
    console.error("Error deleting project:", error);
    return NextResponse.json(
      { error: "Failed to delete project", details: error.message },
      { status: 500 }
    );
  }
}

// POST /api/projects/[id]/cancel
export async function POST(request, { params }) {
  const { id } = params;

  try {
    const projectId = parseInt(id);

    // ✅ Check if project exists
    const project = await prisma.project.findUnique({
      where: { id: projectId },
      include: {
        categories: {
          include: {
            subcats: {
              include: {
                tasks: {
                  include: { steps: true, workLogs: true },
                },
              },
            },
          },
        },
      },
    });

    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    // ✅ Delete all related nested data (but keep the project itself)
    await prisma.$transaction(async (tx) => {
      for (const category of project.categories) {
        for (const subcat of category.subcats) {
          for (const task of subcat.tasks) {
            // Delete all Steps and WorkLogs of each Task
            await tx.step.deleteMany({ where: { taskId: task.id } });
            await tx.workLog.deleteMany({ where: { taskId: task.id } });
          }

          // Delete all Tasks under Subcategory
          await tx.task.deleteMany({ where: { subcategoryId: subcat.id } });
        }

        // Delete all Subcategories under Category
        await tx.subcategory.deleteMany({ where: { categoryId: category.id } });
      }

      // Delete all Categories under Project
      await tx.category.deleteMany({ where: { projectId } });

      // Finally, mark the project as Cancelled
      await tx.project.update({
        where: { id: projectId },
        data: {
          status: "Cancelled"
        },
      });
    });

    return NextResponse.json({
      message: `Project '${project.name}' was cleaned up and marked as Cancelled.`,
    });
  } catch (error) {
    console.error("Error cancelling project:", error);
    return NextResponse.json(
      { error: "Failed to cancel project", details: error.message },
      { status: 500 }
    );
  }
}
