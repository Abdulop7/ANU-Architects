import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";
import { getPostHogClient } from "@/lib/posthog-server";

export async function POST(req, { params }) {
  try {
    const { paymentProgress, id } = await req.json();

    // 🧩 Validate input
    if (paymentProgress < 0 || paymentProgress > 100) {
      return NextResponse.json(
        { error: "Payment progress must be between 0 and 100." },
        { status: 400 }
      );
    }

    // 🧾 Update project payment progress
    const updatedProject = await prisma.project.update({
      where: { id: Number(id) },
      data: { paymentProgress },
    });

    const posthog = getPostHogClient();
    posthog.capture({
      distinctId: "system",
      event: "payment_progress_updated",
      properties: {
        project_id: updatedProject.id,
        project_name: updatedProject.name,
        payment_progress: paymentProgress,
      },
    });

    return NextResponse.json({
      message: "Payment progress updated successfully.",
      project: updatedProject,
    });
  } catch (error) {
    console.error("❌ Error updating payment progress:", error);
    return NextResponse.json(
      { error: "Failed to update payment progress." },
      { status: 500 }
    );
  }
}