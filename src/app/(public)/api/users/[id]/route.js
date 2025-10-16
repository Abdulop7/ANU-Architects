import { NextResponse } from "next/server";
import prisma from "../../../../../../lib/prisma";


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

export async function PUT(request,{params}) {
  try {
    const { id } = params;
    const data = await request.json();
    const { name, username, password, role, phone, managerId } = data;

    if (!id) {
      return NextResponse.json({ error: "User ID is required." }, { status: 400 });
    }

    // Ensure numeric ID
    const userId = parseInt(id, 10);
    if (isNaN(userId)) {
      return NextResponse.json({ error: "Invalid user ID." }, { status: 400 });
    }

    // Build update object dynamically
    const updateData = {
      name,
      username,
      role,
      phone,
      managerId: managerId || null,
    };

    // Only update password if provided
    if (password && password.trim() !== "") {
      updateData.password = password;
    }

    // Update the user in database
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: updateData,
    });

    return NextResponse.json(
      { message: "User updated successfully!", updatedUser },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating user:", error);

    if (error.code === "P2025") {
      return NextResponse.json({ error: "User not found." }, { status: 404 });
    }

    return NextResponse.json({ error: "Failed to update user." }, { status: 500 });
  }
}