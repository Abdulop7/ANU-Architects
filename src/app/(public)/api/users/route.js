import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";


// GET /api/users -> fetch all users
export async function GET() {
  try {
    const users = await prisma.user.findMany({
      include: {
        manager: true,        // include manager info
        employees: true,      // include employees list
        tasksAssigned: true,  // include tasks assigned by this user
        tasksReceived: true,  // include tasks assigned to this user
        workLogs: true        // include work logs
      },
    });

    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 }
    );
  }
}
