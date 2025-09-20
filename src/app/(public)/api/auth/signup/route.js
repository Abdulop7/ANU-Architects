import { NextResponse } from "next/server";
import prisma from "../../../../../../lib/prisma";

export async function POST(req) {
  try {
    const { name, username, password, role, managerId } = await req.json();

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
