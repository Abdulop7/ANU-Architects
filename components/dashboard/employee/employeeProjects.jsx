"use client";
import { useEffect, useState } from "react";
import { Card, CardContent } from "../card";
import { useRole } from "../../../lib/roleContext";


export default function EmployeeProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id, role } = useRole() ;

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/api/projects");
        const data = await res.json();

        // 🔑 filter projects by employee
        const employeeProjects = data
          .map((proj) => {
            let tasks = [];
            let total = 0;
            let done = 0;

            proj.categories.forEach((cat) => {
              cat.subcats.forEach((sub) => {
                sub.tasks.forEach((task) => {
                  if (task.assignedTo?.id === id) {
                    tasks.push(task);
                    total++;
                    if (task.progress === 100) done++;
                  }
                });
              });
            });

            if (tasks.length > 0) {
              return {
                id: proj.id,
                name: proj.name,
                deadline: proj.deadline || "N/A",
                projectProgress: total > 0 ? Math.round((done / total) * 100) : 0,
                tasks,
              };
            }
            return null;
          })
          .filter(Boolean);

        setProjects(employeeProjects);
      } catch (err) {
        console.error("Error fetching projects:", err);
      } finally {
        setLoading(false);
      }
    };

    if (id && role === "employee") {
      fetchProjects();
    }
  }, [id, role]);

  if (loading) {
    return <p className="text-center text-gray-500">Loading your projects...</p>;
  }

  return (
    <div className="h-screen p-8 flex justify-center">
      <div className="w-full max-w-4xl">
        {/* Page Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight">
            My Projects & Tasks
          </h1>
          <p className="text-gray-500 mt-2">
            Track your project progress and assigned tasks.
          </p>
        </div>

        {projects.length === 0 ? (
          <p className="text-center text-gray-400">No assigned tasks found.</p>
        ) : (
          <div className="space-y-8 max-h-[70vh] overflow-y-auto pr-2">
            {projects.map((proj) => (
              <Card
                key={proj.id}
                className="rounded-2xl shadow-md hover:shadow-lg transition"
              >
                <CardContent className="p-6">
                  {/* Project Header */}
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-lg font-bold text-gray-800">
                      {proj.name}
                    </span>
                    <span className="text-xs text-gray-500">
                      Deadline: {proj.deadline}
                    </span>
                  </div>

                  {/* Project Progress */}
                  <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden mb-4">
                    <div
                      className="h-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"
                      style={{ width: `${proj.projectProgress}%` }}
                    />
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    Project Progress:{" "}
                    <span className="font-medium text-orange-600">
                      {proj.projectProgress}%
                    </span>
                  </p>

                  {/* Assigned Tasks */}
                  <div className="space-y-4">
                    {proj.tasks.map((task, idx) => (
                      <div key={idx} className="border-t pt-3">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-gray-700">
                            {task.title}
                          </span>
                          <span className="text-xs text-gray-500">
                            Deadline: {task.deadline || "N/A"}
                          </span>
                        </div>

                        {/* Task Progress */}
                        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-1">
                          <div
                            className="h-2 bg-orange-500 rounded-full"
                            style={{ width: `${task.progress}%` }}
                          />
                        </div>
                        <p className="text-xs text-gray-600">
                          Progress:{" "}
                          <span className="font-medium text-orange-600">
                            {task.progress}%
                          </span>
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
