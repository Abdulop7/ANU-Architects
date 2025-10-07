"use client";
import { useEffect, useState } from "react";
import { Card, CardContent } from "../card";
import { ChevronDown, ChevronUp, Trash2 } from "lucide-react"; // Arrow icons
import { useRole } from "../../../lib/roleContext";

export default function ExecutiveProjects() {
  const { contextLoading, projects: userProjects } = useRole();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedProjects, setExpandedProjects] = useState({}); // Track which project is expanded
  const [deletingId, setDeletingId] = useState(null);

  useEffect(() => {
    if (contextLoading) return;

    const getProjects = async () => {
      try {
        // const res = await fetch("/api/projects");
        // if (!res.ok) throw new Error("Failed to fetch projects");
        // const data = await res.json();

        if (!contextLoading) {

          const transformed = userProjects
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
                status: proj.status, 
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
            .filter((proj) => proj.progress < 100 && proj.status !== "Cancelled");

          setProjects(transformed);

        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getProjects();
  }, [contextLoading]);

  const toggleProject = (id) => {
    setExpandedProjects((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const deleteProject = async (id) => {
    if (!confirm("Are you sure you want to delete this project?")) return;

    try {
      setDeletingId(id);
      const res = await fetch(`/api/projects/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete project");

      setProjects((prev) => prev.filter((p) => p.id !== id));
    } catch (err) {
      console.error(err);
      alert("Failed to delete project. Try again later.");
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="min-h-screen flex justify-center">
      <div className="w-full max-w-7xl flex flex-col">
        <div className="mb-6 text-center">
          <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight">
            Executive Project Overview
          </h1>
          <p className="text-gray-500 mt-2">
            A comprehensive view of all active projects and their assigned teams.
          </p>
        </div>

        <div className="flex-1 overflow-y-auto pr-2" style={{ maxHeight: "70vh" }}>
          {loading ? (
            <p className="text-center text-gray-500">Loading projects...</p>
          ) : projects.length === 0 ? (
            <p className="text-center text-gray-400">No active projects found.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((proj) => (
                <Card
                  key={proj.id}
                  className="rounded-2xl shadow-md hover:shadow-lg transition relative"
                >
                  <CardContent className="p-6">
                    {/* Title & Controls */}
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex flex-col md:flex-row md:items-center gap-2">
                        <span className="font-bold text-gray-900 text-lg md:text-xl">
                          {proj.name}
                        </span>
                        {proj.deadline && (
                          <p
                            className={`text-xs font-semibold px-3 py-1 rounded-full shadow-sm
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

                      {/* Action Buttons */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => deleteProject(proj.id)}
                          disabled={deletingId === proj.id}
                          className={`p-2 rounded-full transition ${deletingId === proj.id
                              ? "bg-gray-200 cursor-not-allowed"
                              : "hover:bg-red-100"
                            }`}
                        >
                          <Trash2
                            className={`w-5 h-5 ${deletingId === proj.id
                                ? "text-gray-400"
                                : "text-red-600"
                              }`}
                          />
                        </button>
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

                    {/* Tasks */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {proj.tasksList.map((task, i) => (
                        <span
                          key={i}
                          className={`text-xs font-medium px-3 py-1 rounded-full ${task.completed || task.progress === 100
                              ? "bg-green-100 text-green-700"
                              : "bg-orange-100 text-orange-700"
                            }`}
                        >
                          {task.taskName} ({task.progress}%)
                        </span>
                      ))}
                    </div>

                    {expandedProjects[proj.id] && (
                      <div className="mt-2 border-t border-gray-200 pt-2">
                        {proj.tasksList.map((t, i) => (
                          <p
                            key={i}
                            className={`text-sm py-1 border-b border-gray-200 last:border-b-0 ${t.completed || t.progress === 100
                                ? "text-green-600"
                                : "text-gray-600"
                              }`}
                          >
                            <span className="font-medium">{t.staff}</span>{" "}
                            ({t.taskName}{" "}
                            {t.completed || t.progress === 100
                              ? "Completed"
                              : `${t.progress}%`}
                            )
                          </p>
                        ))}
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
