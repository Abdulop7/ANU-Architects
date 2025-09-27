// File: /api/tasks/[id]/route.js
import { NextResponse } from "next/server";
import prisma from "../../../../../../lib/prisma";


export async function POST(req, { params }) {
  try {
    const { id } = params; // task ID from URL

    if (!id) {
      return new Response(JSON.stringify({ error: "Task ID is required" }), { status: 400 });
    }

    const taskId = Number(id);
    if (isNaN(taskId)) {
      return new Response(JSON.stringify({ error: "Invalid task ID" }), { status: 400 });
    }

    // Fetch the task along with its steps
    const task = await prisma.task.findUnique({
      where: { id: taskId },
      include: { steps: true, assignedTo: true, subcategory: true },
    });

    if (!task) {
      return new Response(JSON.stringify({ error: "Task not found" }), { status: 404 });
    }

    if (!task.steps || task.steps.length === 0) {
      return new Response(JSON.stringify({ error: "No steps found for this task" }), { status: 400 });
    }

    // Mark the first step as completed if not already completed
    const firstStep = task.steps[0];
    if (!firstStep.completed) {
      await prisma.step.update({
        where: { id: firstStep.id },
        data: { completed: true },
      });
    }

    // Re-fetch steps to calculate progress
    const updatedTask = await prisma.task.findUnique({
      where: { id: taskId },
      include: { steps: true, assignedTo: true, subcategory: true },
    });

    const totalSteps = updatedTask.steps.length;
    const completedSteps = updatedTask.steps.filter((s) => s.completed).length;
    const progress = totalSteps === 0 ? 0 : Math.round((completedSteps / totalSteps) * 100);

    // Return task info with calculated progress
    return NextResponse.json({
      message: "First step completed",
      task: { ...updatedTask, progress },
    });
  } catch (err) {
    console.error("Error completing first step:", err);
    return new Response(
      JSON.stringify({ error: "Failed to complete first step", details: err.message }),
      { status: 500 }
    );
  }
}
