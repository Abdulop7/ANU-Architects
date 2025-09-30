"use client";
import { useEffect, useState } from "react";
import { Card, CardContent } from "../card";
import { useRole } from "../../../lib/roleContext";
import { History } from "lucide-react";

export default function ManagerDashboard() {
  const [projects, setProjects] = useState([]);
  const [workload, setWorkload] = useState([]);
  const [activity, setActivity] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useRole();
  const managerId = id;

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        // ✅ Fetch projects
        const res = await fetch("/api/projects");
        if (!res.ok) throw new Error("Failed to fetch projects");
        const data = await res.json();

        // --- Workload + Projects calculation ---
        const managerProjects = [];
        const teamWorkload = {};

        data.forEach((proj) => {
          let isManagerProject = false;

          proj.categories.forEach((cat) => {
            cat.subcats.forEach((sub) => {
              sub.tasks.forEach((task) => {
                if (
                  task.assignedTo?.managerId === managerId ||
                  task.assignedTo?.id === managerId
                ) {
                  isManagerProject = true;

                  if (task.assignedTo) {
                    const memberName = task.assignedTo.name;
                    if (!teamWorkload[memberName])
                      teamWorkload[memberName] = { tasks: 0 };
                    teamWorkload[memberName].tasks += 1;
                  }
                }
              });
            });
          });

          if (isManagerProject) {
            managerProjects.push({
              id: proj.id,
              name: proj.name,
              progress: proj.progress ?? 0,
              deadline: proj.categories
                .flatMap((cat) =>
                  cat.subcats.flatMap((sub) =>
                    sub.tasks.map((t) => t.deadline)
                  )
                )
                .sort()[0],
            });
          }
        });

        const workloadList = Object.entries(teamWorkload).map(
          ([member, info]) => {
            let level = "Low";
            if (info.tasks >= 5) level = "High";
            else if (info.tasks >= 3) level = "Medium";
            return { member, tasks: info.tasks, workload: level };
          }
        );

        setProjects(managerProjects);
        setWorkload(workloadList);

        // ✅ Fetch activity logs from API
        const actRes = await fetch(`/api/activity/${managerId}?limit=10`);
        if (!actRes.ok) throw new Error("Failed to fetch activity");
        const actData = await actRes.json();
        setActivity(actData.activities || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (managerId) fetchDashboardData();
  }, [managerId]);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-extrabold text-gray-800">
            Manager Dashboard
          </h1>
          <p className="text-gray-500 mt-2">
            Monitor your team’s workload, projects, and recent activities.
          </p>
        </div>
      </div>

      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Team Workload */}
        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Team Workload</h2>
            {loading ? (
              <p className="text-gray-500 text-center">Loading...</p>
            ) :workload.length === 0 ? (
              // 🚫 No Workload state
              <div className="flex flex-col items-center justify-center text-gray-400 mt-6">
                <div className="p-4 rounded-full bg-orange-100 text-orange-500 shadow-sm">
                  <History size={36} />
                </div>
                <p className="mt-3 text-lg font-medium text-gray-600">
                  No workload assigned
                </p>
                <p className="text-sm text-gray-500 italic">
                  Assign tasks to your team to see workload here.
                </p>
              </div>
            ): (
              <ul className="space-y-3">
                {workload.map((w, i) => (
                  <li
                    key={i}
                    className="flex justify-between p-3 bg-gray-100 rounded-lg"
                  >
                    <span className="font-medium text-gray-800">{w.member}</span>
                    <span className="text-sm text-gray-600">
                      {w.tasks} tasks ({w.workload})
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>

        {/* Projects */}
        <Card className="rounded-2xl shadow-md lg:col-span-2">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">
              Your Projects & Team Projects
            </h2>
            {loading ? (
              <p className="text-gray-500 text-center">Loading...</p>
            ) : projects.length === 0 ? (
              // 🚫 No Projects state
              <div className="flex flex-col items-center justify-center text-gray-400 mt-6">
                <div className="p-4 rounded-full bg-orange-100 text-orange-500 shadow-sm">
                  <History size={36} />
                </div>
                <p className="mt-3 text-lg font-medium text-gray-600">
                  No active projects
                </p>
                <p className="text-sm text-gray-500 italic">
                  Create or assign projects to see them listed here.
                </p>
              </div>
            ) : (
              <div className="overflow-y-auto max-h-64 rounded-lg">
                <table className="min-w-full">
                  <thead className="bg-gradient-to-r from-orange-500 to-orange-600 text-white sticky top-0">
                    <tr>
                      <th className="px-4 py-2 text-left">Project</th>
                      <th className="px-4 py-2 text-left">Status</th>
                      <th className="px-4 py-2 text-left">Deadline</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {projects.map((p) => (
                      <tr key={p.id} className="hover:bg-orange-50">
                        <td className="px-4 py-3 font-medium text-gray-800">
                          {p.name}
                        </td>
                        <td className="px-4 py-3">
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-semibold ${p.progress === 100
                                ? "bg-green-100 text-green-700"
                                : "bg-yellow-100 text-yellow-700"
                              }`}
                          >
                            {p.progress === 100 ? "Completed" : "Pending"}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-gray-600">
                          {p.deadline
                            ? new Date(p.deadline).toLocaleDateString("en-GB", {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                            })
                            : "-"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Recent Team Activity */}
        <Card className="rounded-2xl shadow-md lg:col-span-3">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Team Activity</h2>

            {loading ? (
              <p className="text-gray-500 text-center">Loading...</p>
            ) : activity.length === 0 ? (
              // 🚫 No activity state
              <div className="flex flex-col items-center justify-center h-full text-gray-400 mt-6">
                <div className="p-4 rounded-full bg-orange-100 text-orange-500 shadow-sm">
                  <History size={36} />
                </div>
                <p className="mt-3 text-lg font-medium text-gray-600">
                  No recent activity
                </p>
                <p className="text-sm text-gray-500 italic">
                  Once employees log tasks, they’ll appear here.
                </p>
              </div>
            ) : (
              <div className="max-h-80 overflow-y-auto">
                <ul className="divide-y divide-gray-200">
                  {activity.map((a, idx) => (
                    <li key={idx} className="py-3 flex justify-between">
                      <div>
                        <p className="text-gray-800 font-medium">
                          {a.employee.name}
                        </p>
                        <p className="text-sm text-gray-600">
                          Logged {a.hours ?? "?"}h on{" "}
                          <span className="font-semibold">{a.task.title}</span>
                        </p>
                        {a.notes && (
                          <p className="text-xs text-gray-500 italic">
                            {a.notes}
                          </p>
                        )}
                      </div>
                      <span className="text-xs text-gray-500">
                        {new Date(a.workDate).toLocaleDateString("en-US", {
                          weekday: "short",
                          day: "numeric",
                          month: "short",
                        })}{" "}
                        {new Date(a.workDate).toLocaleTimeString("en-US", {
                          hour: "numeric",
                          minute: "2-digit",
                          hour12: true,
                        })}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
