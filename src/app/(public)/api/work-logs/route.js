import prisma from "../../../../../lib/prisma";

export async function POST(req) {
  try {
    const body = await req.json();
    const { taskId, employeeId, stepId, progress, notes } = body;

    // ✅ Validate required fields
    if (!taskId || !employeeId || progress === undefined) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400 }
      );
    }

    // ✅ Create work log
    const workLog = await prisma.workLog.create({
      data: {
        taskId,
        employeeId,
        stepId, // 👈 now included
        progress,
        notes,
      },
    });

    return new Response(JSON.stringify(workLog), { status: 201 });
  } catch (error) {
    console.error("Error creating work log:", error);
    return new Response(
      JSON.stringify({ error: "Failed to create work log" }),
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // Fetch work logs
    const workLogs = await prisma.workLog.findMany({
      include: {
        task: {
          select: {
            title: true,
            subcategory: {
              select: {
                category: {
                  select: {
                    project: {
                      select: { name: true },
                    },
                  },
                },
              },
            },
          },
        },
        step: { select: { name: true } },
        employee: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    // Fetch custom logs
    const customLogs = await prisma.customlog.findMany({
      include: {
        employee: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    // Combine both and sort by date (latest first)
    const allLogs = [...workLogs, ...customLogs].sort(
      (a, b) => new Date(b.workDate) - new Date(a.workDate)
    );

    return new Response(JSON.stringify(allLogs), { status: 200 });
  } catch (error) {
    console.error("Error fetching logs:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch logs" }),
      { status: 500 }
    );
  }
}