import { NextResponse } from "next/server";
import prisma from "../../../../../../lib/prisma";

export async function POST(req) {
  try {
    const { name, username, password, role,phone, managerId } = await req.json();

    // Check if username already exists
    const existingUser = await prisma.user.findUnique({
      where: { username },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "Username already exists" },
        { status: 400 }
      );
    }


    // Create user
    const user = await prisma.user.create({
      data: {
        name,
        username,
        password,
        role,
        phone,
        managerId: managerId || null,
      },
    });

    return NextResponse.json(
      { message: "User created successfully", user: { id: user.id, username: user.username, role: user.role } },
      { status: 201 }
    );
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json(
      { error: "Something went wrong during signup" },
      { status: 500 }
    );
  }
}


export async function PUT(req) {
  try {
    const { id, phone } = await req.json();

    // Validate required fields
    if (!id || !phone) {
      return NextResponse.json(
        { error: "User ID and new phone number are required" },
        { status: 400 }
      );
    }

    // Check if user exists
    const existingUser = await prisma.user.findUnique({
      where: { id },
    });

    if (!existingUser) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    // Update user's phone number
    const updatedUser = await prisma.user.update({
      where: { id },
      data: { phone },
    });

    return NextResponse.json(
      {
        message: "Phone number updated successfully",
        user: {
          id: updatedUser.id,
          name: updatedUser.name,
          username: updatedUser.username,
          phone: updatedUser.phone,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating phone number:", error);
    return NextResponse.json(
      { error: "Something went wrong while updating phone number" },
      { status: 500 }
    );
  }
}