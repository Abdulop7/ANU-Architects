"use client";
import { useEffect, useState } from "react";
import { Card, CardContent } from "../card";
import { ChevronDown, ChevronUp } from "lucide-react"; // Arrow icons

export default function ExecutiveProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedProjects, setExpandedProjects] = useState({}); // Track which project is expanded

  useEffect(() => {
    const getProjects = async () => {
      try {
        const res = await fetch("/api/projects");
        if (!res.ok) throw new Error("Failed to fetch projects");
        const data = await res.json();

        const transformed = data
          .map((proj) => {
            const employeesSet = new Set();
            let earliestDeadline = null;
            const tasksList = [];

            proj.categories.forEach((cat) => {
              cat.subcats.forEach((sub) => {
                sub.tasks.forEach((task) => {
                  if (task.assignedTo?.name) employeesSet.add(task.assignedTo.name);

                  if (task.assignedTo?.name) {
                    const isCompleted = task.status === "Completed"; // adjust if your schema uses another field

                    tasksList.push({
                      staff: task.assignedTo.name,
                      taskName: task.title,
                      completed: isCompleted,
                      progress: task.progress ?? 0, // fallback if no value
                    });

                  }


                  if (task.deadline) {
                    const taskDeadline = new Date(task.deadline);
                    if (!earliestDeadline || taskDeadline < earliestDeadline) {
                      earliestDeadline = taskDeadline;
                    }
                  }
                });
              });
            });

            // Calculate staff-level progress
            const staffProgress = {};
            tasksList.forEach((t) => {
              if (!staffProgress[t.staff]) {
                staffProgress[t.staff] = { sum: 0, total: 0 };
              }
              staffProgress[t.staff].total++;
              staffProgress[t.staff].sum += t.progress ?? 0; // add real progress
            });


            return {
              id: proj.id,
              name: proj.name,
              progress: proj.progress ?? 0,
              employees: Object.keys(staffProgress).map((s) => ({
                name: s,
                progress: Math.round(staffProgress[s].sum / staffProgress[s].total), // average %
              })),

              deadline: earliestDeadline
                ? earliestDeadline.toISOString().split("T")[0]
                : null,
              tasksList,
            };

          })
          // ✅ exclude completed projects
          .filter((proj) => proj.progress < 100);

        setProjects(transformed);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getProjects();
  }, []);

  const toggleProject = (id) => {
    setExpandedProjects((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="min-h-screen flex justify-center ">
      <div className="w-full max-w-7xl flex flex-col">
        {/* Header */}
        <div className="mb-6 text-center">
          <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight">
            Executive Project Overview
          </h1>
          <p className="text-gray-500 mt-2">
            A comprehensive view of all active projects and their assigned teams.
          </p>
        </div>

        {/* Projects list */}
        <div
          className="flex-1 overflow-y-auto pr-2"
          style={{ maxHeight: "70vh" }}
        >
          {loading ? (
            <p className="text-center text-gray-500">Loading projects...</p>
          ) : projects.length === 0 ? (
            <p className="text-center text-gray-400">No active projects found.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((proj) => (
                <Card
                  key={proj.id}
                  className="rounded-2xl shadow-md hover:shadow-lg transition"
                >
                  <CardContent className="p-6">
                    {/* Title & progress */}
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                        {/* Project Name */}
                        <span className="font-bold text-gray-900 text-lg md:text-xl">
                          {proj.name}
                        </span>

                        {/* Deadline */}
                        {proj.deadline && (
                          <p
                            className={`mt-1 md:mt-0 text-xs font-semibold px-3 py-1 rounded-full shadow-sm
                              inline-block transition-colors duration-300
                              ${new Date(proj.deadline) < new Date()
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
                          </p>
                        )}
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500">
                          {proj.progress}%
                        </span>
                        <button
                          onClick={() => toggleProject(proj.id)}
                          className="p-1 rounded-full hover:bg-gray-100 transition"
                        >
                          {expandedProjects[proj.id] ? (
                            <ChevronUp className="w-4 h-4 text-gray-600" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-gray-600" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Progress bar */}
                    <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden mb-3">
                      <div
                        className="h-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full transition-all duration-500"
                        style={{ width: `${proj.progress}%` }}
                      />
                    </div>

                    {/* Employees badges */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {proj.employees.map((emp, i) => (
                        <span
                          key={i}
                          className={`text-xs font-medium px-3 py-1 rounded-full transition-colors duration-300 ${emp.progress === 100
                              ? "bg-green-100 text-green-700"
                              : "bg-orange-100 text-orange-700"
                            }`}
                        >
                          {emp.name} ({emp.progress}%)
                        </span>
                      ))}
                    </div>



                    {/* Staff Name (Task Name) list with dropdown */}
                    {expandedProjects[proj.id] && (
                      <div className="mt-2 border-t border-gray-200 pt-2">
                        {proj.tasksList.map((t, i) => {
                          const isDone = t.completed || t.progress === 100; // ✅ treat 100% as completed
                          return (
                            <p
                              key={i}
                              className={`text-sm py-1 border-b border-gray-200 last:border-b-0 ${isDone ? "text-green-600" : "text-gray-600"
                                }`}
                            >
                              <span className="font-medium">{t.staff}</span>{" "}
                              <span>
                                ({t.taskName} {isDone ? "Completed" : `${t.progress}%`})
                              </span>
                            </p>
                          );
                        })}
                      </div>
                    )}


                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
