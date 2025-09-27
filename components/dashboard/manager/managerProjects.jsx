"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "../card";
import { useRole } from "../../../lib/roleContext";

export default function ManagerProjects() {
  const { role, id: managerId } = useRole();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const res = await fetch("/api/projects");
        if (!res.ok) throw new Error("Failed to fetch projects");
        const data = await res.json();

        const transformed = data
          .map((proj) => {
            const teamSet = new Set();
            let earliestDeadline = null;

            const managerTasks = [];

            proj.categories.forEach((cat) => {
              cat.subcats.forEach((sub) => {
                sub.tasks.forEach((task) => {
                  if (task.assignedTo?.managerId === managerId) {
                    managerTasks.push(task);

                    if (task.assignedTo?.name) teamSet.add(task.assignedTo.name);

                    if (task.deadline) {
                      const taskDeadline = new Date(task.deadline);
                      if (!earliestDeadline || taskDeadline < earliestDeadline) {
                        earliestDeadline = taskDeadline;
                      }
                    }
                  }
                });
              });
            });

            if (managerTasks.length === 0) return null;

            // ✅ Skip project if all manager tasks are completed
            const allCompleted = managerTasks.every(
              (task) => (task.progress ?? 0) >= 100
            );
            if (allCompleted) return null;

            const avgProgress =
              managerTasks.reduce((sum, t) => sum + (t.progress ?? 0), 0) /
              managerTasks.length;

            return {
              id: proj.id,
              name: proj.name,
              deadline: earliestDeadline
                ? earliestDeadline.toISOString().split("T")[0]
                : null,
              progress: Math.round(avgProgress),
              team: Array.from(teamSet),
              tasks: managerTasks, // ✅ include only this manager's team tasks
            };
          })
          .filter(Boolean);

        setProjects(transformed);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (role === "manager") {
      getProjects();
    }
  }, [role, managerId]);

  return (
    <div className="h-screen p-8 flex justify-center">
      <div className="w-full max-w-6xl">
        {/* Page Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight">
            Manager Project Tasks
          </h1>
          <p className="text-gray-500 mt-2">
            Track your team’s ongoing tasks, progress, and deadlines.
          </p>
        </div>

        {/* Scrollable Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-h-[70vh] overflow-y-auto pr-2">
          {loading ? (
            <p className="text-gray-500 col-span-full text-center">
              Loading projects...
            </p>
          ) : projects.length === 0 ? (
            <p className="text-gray-500 col-span-full text-center">
              No active projects for your team.
            </p>
          ) : (
            projects.map((proj) => (
              <Card
                key={proj.id}
                className="rounded-2xl shadow-md hover:shadow-lg transition"
              >
                <CardContent className="p-6">
                  {/* Project Title & Deadline */}
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-800">
                      {proj.name}
                    </span>
                    {proj.deadline && (
                      <span
                        className={`text-xs font-semibold px-3 py-1 rounded-full shadow-sm ${
                          new Date(proj.deadline) < new Date()
                            ? "bg-red-200 text-red-800"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        Deadline:{" "}
                        {new Date(proj.deadline).toLocaleDateString("en-GB", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                    )}
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden mb-3">
                    <div
                      className="h-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"
                      style={{ width: `${proj.progress}%` }}
                    />
                  </div>

                  {/* Progress % */}
                  <div className="mb-3 text-sm text-gray-600">
                    Progress:{" "}
                    <span className="font-medium text-orange-600">
                      {proj.progress}%
                    </span>
                  </div>

                  {/* Team Members */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {proj.team.map((member, i) => (
                      <span
                        key={i}
                        className="text-xs font-medium px-3 py-1 bg-orange-100 text-orange-700 rounded-full"
                      >
                        {member}
                      </span>
                    ))}
                  </div>

                  {/* ✅ Show manager's team tasks */}
                  <div className="border-t border-gray-200 pt-2">
                    {proj.tasks.map((task, i) => (
                      <div
                        key={i}
                        className="flex justify-between items-center py-1 text-sm border-b border-gray-100 last:border-b-0"
                      >
                        <span className="text-gray-700 font-medium">
                          {task.title}
                        </span>
                        <span className="text-xs text-gray-500">
                          {task.assignedTo?.name} ({task.progress ?? 0}%)
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
