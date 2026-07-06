import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";
import jwt from "jsonwebtoken";
import { getPostHogClient } from "@/lib/posthog-server";

const JWT_SECRET = process.env.JWT_SECRET;

// POST /api/auth/login
export async function POST(req) {
  try {
    const { username, password } = await req.json();

    if (!username || !password) {
      return NextResponse.json(
        { error: "Username and password are required" },
        { status: 400 }
      );
    }

    // Find user in DB
    const user = await prisma.user.findUnique({
      where: { username },
    });

    if (!user || user.password !== password) {
      return NextResponse.json(
        { error: "Invalid username or password" },
        { status: 401 }
      );
    }

    const token = jwt.sign(
      { id: user.id, role: user.role, username: user.username },
      JWT_SECRET
    );

    const posthog = getPostHogClient();
    posthog.capture({
      distinctId: user.username,
      event: "user_logged_in",
      properties: { role: user.role },
    });
    posthog.identify({
      distinctId: user.username,
      properties: { username: user.username, role: user.role },
    });

    const res = NextResponse.json({
      message: "Login successful",
      id: user.id,
      username: user.username,
      role: user.role
    });

    res.cookies.set("token", token, {
      httpOnly: true,
      secure: false,
      path: "/",
    });

    return res;

  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
