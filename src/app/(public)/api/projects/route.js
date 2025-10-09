import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";


export async function GET() {
  try {
    const projects = await prisma.project.findMany({
      include: {
        categories: {
          include: {
            subcats: {
              include: {
                tasks: {
                  include: {
                    steps: true,
                    assignedTo: true,
                    assignedBy: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    const projectsWithProgress = projects.map((project) => {
      let totalProjectProgress = 0;

      project.categories.forEach((category) => {
        const greySubcats = category.subcats.filter((sc) => sc.name !== "Finishes");
        const finishesSubcat = category.subcats.find((sc) => sc.name === "Finishes");

        // Calculate task progress based on steps
        category.subcats.forEach((subcat) => {
          subcat.tasks.forEach((task) => {
            const totalSteps = task.steps.length;
            const completedSteps = task.steps.filter((s) => s.completed).length;
            task.progress =
              totalSteps === 0 ? 0 : Math.round((completedSteps / totalSteps) * 100);
          });
        });

        // Grey group progress
        let greyProgress = 0;
        if (greySubcats.length) {
          greyProgress = greySubcats.reduce((sum, sc) => {
            const task = sc.tasks[0]; // assuming 1 task per subcat
            return sum + (task?.progress || 0);
          }, 0);
          greyProgress = greyProgress / greySubcats.length; // average
        }

        // Finishes group progress
        let finishesProgress = 0;
        if (finishesSubcat) {
          const task = finishesSubcat.tasks[0];
          finishesProgress = task?.progress || 0;
        }

        // Adjust weighting logic dynamically
        let categoryProgress = 0;

        if (greySubcats.length && finishesSubcat) {
          // both present → 50/50
          categoryProgress = greyProgress * 0.5 + finishesProgress * 0.5;
        } else if (greySubcats.length && !finishesSubcat) {
          // only grey → full weight
          categoryProgress = greyProgress;
        } else if (!greySubcats.length && finishesSubcat) {
          // only finishes → full weight
          categoryProgress = finishesProgress;
        }

        totalProjectProgress += categoryProgress;
      });

      project.progress = Math.round(totalProjectProgress * 100) / 100;
      return project;
    });


    return NextResponse.json(projectsWithProgress);
  } catch (err) {
    console.error("prisma:error", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
