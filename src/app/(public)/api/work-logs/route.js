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
        step: { select: { name: true } }, // 👈 include step name
        employee: {
          select: {
            id: true,
            name: true,
          },
        },
      },
      orderBy: { workDate: "desc" },
    });

    return new Response(JSON.stringify(workLogs), { status: 200 });
  } catch (error) {
    console.error("Error fetching work logs:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch work logs" }),
      { status: 500 }
    );
  }
}
