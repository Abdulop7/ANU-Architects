// src/app/(public)/api/activity/[id]/route.js
import { NextResponse } from "next/server";
import prisma from "../../../../../../lib/prisma";


export async function GET(req, { params }) {
  try {
    const { id } = params;
    const managerId = parseInt(id, 10);

    if (isNaN(managerId)) {
      return NextResponse.json({ error: "Invalid manager id" }, { status: 400 });
    }

    // Extract query params for pagination
    const { searchParams } = new URL(req.url);
    const limit = parseInt(searchParams.get("limit") || "20", 10);
    const page = parseInt(searchParams.get("page") || "1", 10);

    // Get employees under this manager
    const employees = await prisma.user.findMany({
      where: { managerId },
      select: { id: true },
    });

    // Collect employee + manager IDs
    const employeeIds = employees.map((e) => e.id);
    employeeIds.push(managerId); // include manager’s own logs

    if (employeeIds.length === 0) {
      return NextResponse.json({ activities: [] });
    }

    // Fetch recent activity (worklogs)
    const activities = await prisma.workLog.findMany({
      where: {
        employeeId: { in: employeeIds },
      },
      include: {
        employee: { select: { id: true, name: true, role: true } },
        task: { select: { id: true, title: true } },
      },
      orderBy: { workDate: "desc" },
      skip: (page - 1) * limit,
      take: limit,
    });

    return NextResponse.json({ activities });
  } catch (error) {
    console.error("Error fetching manager activity:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
