import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";


// GET /api/activity?limit=10
export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const limit = parseInt(searchParams.get("limit")) || 100;

    // Fetch workLogs
    const worklogs = await prisma.workLog.findMany({
      take: limit,
      orderBy: { workDate: "desc" },
      include: {
        step: { select: { name: true } },
        employee: { select: { id: true, name: true, role: true } },
        task: {
          select: {
            id: true,
            title: true,
            subcategory: {
              select: {
                category: {
                  select: {
                    project: { select: { id: true, name: true } },
                  },
                },
              },
            },
          },
        },
      },
    });

    const formattedWorklogs = worklogs.map((w) => ({
      ...w,
      projectName:
        w.task?.subcategory?.category?.project?.name || "Unassigned Project",
      type: "WORKLOG", // add type for frontend distinction
    }));

    // Fetch announcements
    const announcements = await prisma.announcement.findMany({
      take: limit,
      orderBy: { createdAt: "desc" },
      include: {
        assignedTo: { select: { id: true, name: true, role: true } },
        createdBy: { select: { id: true, name: true, role: true } },
        project: { select: { id: true, name: true } },
      },
    });

    const formattedAnnouncements = announcements.map((a) => ({
      ...a,
      type: "ANNOUNCEMENT", // mark type
    }));

    // Merge and sort by date (descending)
    const merged = [...formattedWorklogs, ...formattedAnnouncements].sort(
      (a, b) => new Date(b.workDate || b.createdAt) - new Date(a.workDate || a.createdAt)
    );

    return NextResponse.json(merged);
  } catch (error) {
    console.error("Error fetching activity logs:", error);
    return NextResponse.json(
      { error: "Failed to fetch activity logs" },
      { status: 500 }
    );
  }
}


export async function POST(req) {
  try {
    const body = await req.json();
    let { message,  projectId, createdById } = body;


    // Message only required for general announcements
    if (!isAssigning && (!message || message.trim() === "")) {
      return NextResponse.json(
        { error: "Message is required for announcements" },
        { status: 400 }
      );
    }


    const announcement = await prisma.announcement.create({
        data: {
          title: "General Announcement",
          message: message.trim(),
          type: "GENERAL",
          projectId: projectId || null,
          createdById: createdById || null,
        },
        include: {
          project: { select: { id: true, name: true } },
        },
      });


    return NextResponse.json(announcement);
  } catch (error) {
    console.error("Error creating announcement:", error);
    return NextResponse.json(
      { error: "Failed to create announcement", details: error.message },
      { status: 500 }
    );
  }
}