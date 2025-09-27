import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";


// GET /api/activity?limit=10
export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const limit = parseInt(searchParams.get("limit")) || 100;

    const worklogs = await prisma.workLog.findMany({
      take: limit,
      orderBy: { workDate: "desc" }, // ✅ sort by workDate instead of createdAt
      include: {
        employee: { select: { id: true, name: true, role: true } }, // ✅ employee, not user
        task: { select: { id: true, title: true } },
      },
    });

    return NextResponse.json(worklogs);
  } catch (error) {
    console.error("Error fetching activity logs:", error);
    return NextResponse.json(
      { error: "Failed to fetch activity logs" },
      { status: 500 }
    );
  }
}
