"use client";
import { useEffect, useState } from "react";
import { Card, CardContent } from "../card";
import { useRole } from "../../../lib/roleContext";

export default function ExecutiveReports() {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const { contextLoading, projects ,users} = useRole();

  useEffect(() => {
    if (contextLoading ) return;

    const fetchReports = async () => {
      try {
        // ✅ Fetch projects
        // const resProjects = await fetch("/api/projects");
        // if (!resProjects.ok) throw new Error("Failed to fetch projects");
        // const projects = await resProjects.json();

        if (!projects || projects.length === 0) return;

        // ✅ Fetch users (exclude executives)
        // const resUsers = await fetch("/api/users");
        // if (!resUsers.ok) throw new Error("Failed to fetch users");
        // const users = await resUsers.json();

        if(!contextLoading){

        const nonExecutives = users.filter(
          (u) => u.role.toLowerCase() !== "executive"
        );
        const totalEmployees = nonExecutives.length;

        // --- Project splits ---
        const activeProjectsList = projects.filter((p) => p.progress < 100);
        const completedProjectsList = projects.filter((p) => p.progress === 100);

        const totalProjects = projects.length;
        const activeProjects = activeProjectsList.length;
        const completedProjects = completedProjectsList.length;

        // ✅ Only calculate overall progress from *active* projects
        const overallProgress =
          activeProjects === 0
            ? 0
            : Math.round(
                activeProjectsList.reduce(
                  (acc, p) => acc + (p.progress ?? 0),
                  0
                ) / activeProjects
              );


        // ✅ Track employees that actually have at least 1 active task
        let engagedEmployeesSet = new Set();

        activeProjectsList.forEach((proj) => {
          proj.categories.forEach((cat) => {
            cat.subcats.forEach((sub) => {
              sub.tasks.forEach((task) => {
                if (task.progress === 100) return; // Skip completed tasks
                if (task.assignedTo?.id) {
                  engagedEmployeesSet.add(task.assignedTo.id);
                }
              });
            });
          });
        });

        // ✅ How many are actually working on at least 1 active task
        const engagedEmployees = engagedEmployeesSet.size;

        // ✅ Utilization = % of employees who are engaged
        const employeeUtilization =
          totalEmployees === 0
            ? 0
            : Math.round((engagedEmployees / totalEmployees) * 100);

        // ✅ Set reports
        setReports([
          { title: "Overall Project Progress", value: `${overallProgress}%` },
          { title: "Active Projects", value: `${activeProjects}` },
          { title: "Completed Projects (YTD)", value: `${completedProjects}` },
          { title: "Employee Utilization", value: `${employeeUtilization}%` },
        ]);
      }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchReports();
  }, [contextLoading]);

  if (loading)
    return <p className="text-center text-gray-500 mt-10">Loading reports...</p>;

  return (
    <div className="p-8">
      {/* Page Header */}
      <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">
        Executive Reports
      </h1>
      <p className="text-gray-500 mb-10 text-center">
        A high-level view of company performance and project health.
      </p>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reports.map((rep, idx) => (
          <Card
            key={idx}
            className="rounded-2xl shadow-md hover:shadow-lg transition"
          >
            <CardContent className="p-6 text-center">
              <h2 className="text-lg font-semibold text-gray-700">
                {rep.title}
              </h2>
              <p className="text-2xl font-bold text-orange-600 mt-2">
                {rep.value}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
