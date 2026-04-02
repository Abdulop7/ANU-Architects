"use client";
import { useEffect, useState } from "react";
import { Card, CardContent } from "../card";
import { useRole } from "../../../lib/roleContext";


export default function ManagerReports() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id, role,contextLoading, projects:userProjects  } = useRole() || {}; 

  useEffect(() => {
    if (contextLoading ) return;

    const fetchProjects = async () => {
      try {
        // const res = await fetch("/api/projects");
        // const data = await res.json(); // this is already an array

        if(!contextLoading){

        // 🔑 filter projects by manager’s team
        const filtered = userProjects.map((proj) => {
          let totalTasks = 0;
          let tasksCompleted = 0;

          proj.categories.forEach((cat) => {
            cat.subcats.forEach((sub) => {
              sub.tasks.forEach((task) => {
                // only include tasks belonging to employees under this manager
                if (task.assignedTo?.managerId === id) {
                  totalTasks++;
                  if (task.progress === 100) tasksCompleted++;
                }
              });
            });
          });

          return {
            id: proj.id,
            name: proj.name,
            deadline: proj.deadline || null, // backend doesn’t send deadline now
            totalTasks,
            tasksCompleted,
          };
        }).filter((p) => p.totalTasks > 0); // remove projects not linked to this manager’s team

        setProjects(filtered);
      }
      } catch (err) {
        console.error("Error fetching manager projects:", err);
      } finally {
        setLoading(false);
      }
    };

    if (id && role === "manager") {
      fetchProjects();
    }
  }, [id, role,contextLoading]);

  if (loading) {
    return <p className="text-center text-secondary">Loading reports...</p>;
  }

  return (
    <div>
      <h1 className="text-4xl font-extrabold text-gray-100 mb-6 text-center">
        Manager Reports
      </h1>
      <p className="text-secondary mb-10 text-center">
        Track your team’s project tasks and upcoming deadlines.
      </p>

      {projects.length === 0 ? (
        <p className="text-center text-secondary/70">No projects found.</p>
      ) : (
        <div className="space-y-6 max-h-[70vh] overflow-y-auto pr-2">
          {projects.map((proj) => (
            <Card
              key={proj.id}
              className="rounded-none   transition"
            >
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold text-gray-100">
                    {proj.name}
                  </span>
                  <span className="text-xs text-secondary">
                    Deadline: {proj.deadline || "N/A"}
                  </span>
                </div>
                <div className="text-sm text-secondary/70">
                  Tasks Completed:{" "}
                  <span className="font-medium text-accent/80">
                    {proj.tasksCompleted}/{proj.totalTasks}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
