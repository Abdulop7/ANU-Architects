// File: /api/tasks/[id]/route.js
import { NextResponse } from "next/server";
import prisma from "../../../../../../lib/prisma";

export async function POST(req, { params }) {
  try {
    const { id } = params; // task ID from URL
    const { stepId, progress } = await req.json();

    if (!id || !stepId) {
      return NextResponse.json({ error: "Task ID and Step ID are required" }, { status: 400 });
    }

    const taskId = Number(id);
    const stepProgress = Number(progress);

    if (isNaN(taskId) || isNaN(stepProgress)) {
      return NextResponse.json({ error: "Invalid task or progress value" }, { status: 400 });
    }

    // Fetch the target step
    const step = await prisma.step.findUnique({ where: { id: stepId } });
    if (!step) {
      return NextResponse.json({ error: "Step not found" }, { status: 404 });
    }

    // ✅ Only allow forward progress — don’t reduce progress accidentally
    const newProgress = Math.max(step.progress, stepProgress);

    // ✅ Update the step progress (mark complete if 100%)
    const updatedStep = await prisma.step.update({
      where: { id: stepId },
      data: {
        progress: newProgress,
        completed: newProgress >= 100,
      },
    });

    // ✅ Fetch the full updated task
    const updatedTask = await prisma.task.findUnique({
      where: { id: taskId },
      include: { steps: true },
    });

    const totalProgress =
      updatedTask.steps.length === 0
        ? 0
        : Math.round(
            updatedTask.steps.reduce((sum, s) => sum + (s.progress || 0), 0) /
              updatedTask.steps.length
          );

    return NextResponse.json({
      message: `Step progress updated to ${newProgress}%`,
      step: updatedStep,
      taskProgress: totalProgress,
    });
  } catch (err) {
    console.error("Error updating step progress:", err);
    return NextResponse.json(
      { error: "Failed to update step progress", details: err.message },
      { status: 500 }
    );
  }
}
