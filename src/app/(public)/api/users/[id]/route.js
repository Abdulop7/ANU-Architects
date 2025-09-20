import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";

// DELETE /api/users/[id] -> delete a user
export async function DELETE(request, { params }) {
  try {
    const { id } = params;

    // Convert id to number because your Prisma schema uses Int
    const userId = parseInt(id, 10);

    if (isNaN(userId)) {
      return NextResponse.json(
        { error: "Invalid user ID" },
        { status: 400 }
      );
    }

    // Delete user
    const deletedUser = await prisma.user.delete({
      where: { id: userId },
    });

    return NextResponse.json(
      { message: "User deleted successfully", deletedUser },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting user:", error);

    // Handle case where user does not exist
    if (error.code === "P2025") {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { error: "Failed to delete user" },
      { status: 500 }
    );
  }
}
