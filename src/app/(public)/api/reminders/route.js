import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";

export async function POST(req) {
  try {
    const { userId, message, remindAt } = await req.json();

    // Validate required fields
    if (!userId || !message || !remindAt) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create a new reminder
    const reminder = await prisma.reminder.create({
      data: {
        userId: Number(userId),
        message,
        remindAt: new Date(remindAt),
      },
    });

    return NextResponse.json(
      { message: "Reminder created successfully", reminder },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating reminder:", error);
    return NextResponse.json(
      { error: "Something went wrong while creating reminder" },
      { status: 500 }
    );
  }
}

// Optional: GET route to fetch reminders
export async function GET() {
  try {
    const reminders = await prisma.reminder.findMany({
      where: { isDone: false },
      orderBy: { remindAt: "asc" },
      include: { user: true },
    });

    return NextResponse.json(reminders, { status: 200 });
  } catch (error) {
    console.error("Error fetching reminders:", error);
    return NextResponse.json(
      { error: "Something went wrong while fetching reminders" },
      { status: 500 }
    );
  }
}

export async function DELETE(req) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json(
        { error: "Reminder ID is required" },
        { status: 400 }
      );
    }

    const deletedReminder = await prisma.reminder.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json(
      { message: "Reminder deleted successfully", deletedReminder },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting reminder:", error);
    return NextResponse.json(
      { error: "Something went wrong while deleting reminder" },
      { status: 500 }
    );
  }
}


export async function PUT(req) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json(
        { error: "Reminder ID is required" },
        { status: 400 }
      );
    }

    // Update reminder to mark it as completed
    const updatedReminder = await prisma.reminder.update({
      where: { id: Number(id) },
      data: { isDone: true },
    });

    return NextResponse.json(
      { message: "Reminder marked as completed", updatedReminder },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error marking reminder as completed:", error);

    // Handle case where reminder does not exist
    if (error.code === "P2025") {
      return NextResponse.json(
        { error: "Reminder not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { error: "Something went wrong while updating reminder" },
      { status: 500 }
    );
  }
}
