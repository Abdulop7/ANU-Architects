import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";

export async function POST(req) {
  try {
    const body = await req.json();
    const { employeeId, title, description } = body;

    // ✅ Validate required fields
    if (!employeeId || !title || !description) {
      return NextResponse.json(
        { error: "employeeId, title, and description are required." },
        { status: 400 }
      );
    }

    // ✅ Create CustomLog entry
    const customLog = await prisma.customlog.create({
      data: {
        employeeId,
        title,
        description
      },
    });

    return NextResponse.json(customLog, { status: 200 });
  } catch (error) {
    console.error("Error creating CustomLog:", error);
    return NextResponse.json(
      { error: "Internal Server Error", details: error.message },
      { status: 500 }
    );
  }
}