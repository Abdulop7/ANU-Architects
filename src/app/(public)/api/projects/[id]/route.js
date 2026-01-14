import { NextResponse } from "next/server";
import prisma from "../../../../../../lib/prisma";

// DELETE /api/projects/[id]
export async function DELETE(request, { params }) {
  const { id } = params;

  try {
    const projectId = parseInt(id);

    // Check project existence
    const project = await prisma.project.findUnique({
      where: { id: projectId },
      select: { id: true, name: true },
    });

    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    // ✅ Delete in top-down order (no transaction, safe)
    // 1. Delete Steps & WorkLogs (via nested relation filters)
    await prisma.step.deleteMany({
      where: { task: { subcategory: { category: { projectId } } } },
    });
    await prisma.workLog.deleteMany({
      where: { task: { subcategory: { category: { projectId } } } },
    });

    // 2. Delete Tasks
    await prisma.task.deleteMany({
      where: { subcategory: { category: { projectId } } },
    });

    // 3. Delete Subcategories
    await prisma.subcategory.deleteMany({
      where: { category: { projectId } },
    });

    // 4. Delete Categories
    await prisma.category.deleteMany({
      where: { projectId },
    });

    // 5. Delete Project
    await prisma.project.delete({
      where: { id: projectId },
    });

    return NextResponse.json({
      message: `✅ Project '${project.name}' and all related data deleted successfully.`,
    });
  } catch (error) {
    console.error("❌ Error deleting project:", error);
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

    // ✅ Ensure project exists
    const project = await prisma.project.findUnique({
      where: { id: projectId },
      select: { id: true, name: true },
    });

    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    // ✅ Step 1: Delete nested data without a long transaction
    await prisma.step.deleteMany({
      where: { task: { subcategory: { category: { projectId } } } },
    });

    await prisma.workLog.deleteMany({
      where: { task: { subcategory: { category: { projectId } } } },
    });

    await prisma.task.deleteMany({
      where: { subcategory: { category: { projectId } } },
    });

    await prisma.subcategory.deleteMany({
      where: { category: { projectId } },
    });

    await prisma.category.deleteMany({
      where: { projectId },
    });

    // ✅ Step 2: Mark the project as cancelled (single atomic update)
    await prisma.project.update({
      where: { id: projectId },
      data: { status: "Cancelled" },
    });

    return NextResponse.json({
      message: `✅ Project '${project.name}' was cleaned up and marked as Cancelled.`,
    });
  } catch (error) {
    console.error("❌ Error cancelling project:", error);
    return NextResponse.json(
      { error: "Failed to cancel project", details: error.message },
      { status: 500 }
    );
  }
}