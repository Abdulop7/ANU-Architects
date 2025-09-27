import prisma from "../../../../../lib/prisma";


export async function POST(req, res) {
  try {
    const body = await req.json();
    const { taskId, employeeId, hours, notes } = body;

    if (!taskId || !employeeId || !hours) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 });
    }

    const workLog = await prisma.workLog.create({
      data: {
        taskId,
        employeeId,
        hours,
        notes,
      },
    });

    // Optionally, mark the step as completed in Task steps
    // This depends on how you track which step is completed
    // Example: await prisma.step.update({ ... });

    return new Response(JSON.stringify(workLog), { status: 201 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Failed to create work log" }), { status: 500 });
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
    console.error(error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch work logs" }),
      { status: 500 }
    );
  }
}