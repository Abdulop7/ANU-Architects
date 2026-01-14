"use client";
import { useEffect, useState } from "react";
import { Card, CardContent } from "../card";
import { useRole } from "../../../lib/roleContext";
import { Activity, Bell, CheckCircle, FileCheck2, History } from "lucide-react";

export default function ManagerDashboard() {
  const [projects, setProjects] = useState([]);
  const [workload, setWorkload] = useState([]);
  const [activity, setActivity] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id, contextLoading, projects: userProjects, activity: userActivity, users } = useRole();
  const managerId = id;

  useEffect(() => {
    if (contextLoading || !managerId) return;

    const fetchDashboardData = async () => {
      try {
        if (!contextLoading) {
          // --- Workload + Projects calculation ---
          const managerProjects = [];
          const teamWorkload = {};

          userProjects.forEach((proj) => {
            if (proj.progress === 100) return;

            let isManagerProject = false;

            proj.categories.forEach((cat) => {
              cat.subcats.forEach((sub) => {
                sub.tasks.forEach((task) => {
                  if (task.progress === 100) return;

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
          console.log(users);


          // ✅ Find all team member IDs whose manager is the current manager
          const teamMemberIds = (users)
            .filter(u => u.managerId === managerId) // adjust key if it's managerId instead of manager
            .map(u => u.id);

          // ✅ Filter activity for manager or their direct team
          const managerActivity = userActivity.filter(a => {
            const isOwnerOrTeam = a.employeeId === managerId || teamMemberIds.includes(a.employeeId);

            // Include assigned activities for manager or their team
            const isAssigned = a.assignedToId && (a.assignedToId === managerId || teamMemberIds.includes(a.assignedToId));

            return isOwnerOrTeam || isAssigned;
          });
          // ✅ Sort latest first
          const sortedActivity = managerActivity.sort(
            (a, b) => new Date(b.workDate) - new Date(a.workDate)
          );

          setActivity(sortedActivity);

          console.log(sortedActivity);

        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (managerId) fetchDashboardData();
  }, [managerId, contextLoading]);

  // ✅ Helper to get previous progress % for same user & task
  const getPreviousProgress = (currentIndex) => {
    const current = activity[currentIndex];
    // Try same step first
    for (let i = currentIndex + 1; i < activity.length; i++) {
      if (
        activity[i].employeeId === current.employeeId &&
        activity[i].taskId === current.taskId &&
        activity[i].stepId === current.stepId
      ) {
        return activity[i].progress;
      }
    }

    // Fallback to any previous step of same task
    for (let i = currentIndex + 1; i < activity.length; i++) {
      if (
        activity[i].employeeId === current.employeeId &&
        activity[i].taskId === current.taskId
      ) {
        return activity[i].progress;
      }
    }

    return null;
  };

  const getActivityIcon = (a) => {
    if (a.type === "ANNOUNCEMENT") {
      // ✅ Assignment icon
      return (
        <div className="p-2 bg-blue-100 text-blue-600 rounded-full shadow-sm">
          <Bell className="w-5 h-5" />
        </div>
      );
    } else if (a.type === "WORKLOG") {
      if (a.progress === 100) {
        return (
          <div className="p-2 bg-green-100 text-green-600 rounded-full shadow-sm">
            <FileCheck2 className="w-5 h-5" />
          </div>
        );
      } else {
        return (
          <div className="p-2 bg-orange-100 text-orange-500 rounded-full shadow-sm">
            <Activity className="w-5 h-5 animate-pulse" />
          </div>
        );
      }
    } else {
      // No icon for general announcements
      return null;
    }
  };

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
            ) : workload.length === 0 ? (
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
            ) : (
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

        {/* ✅ Recent Team Activity */}
        <Card className="rounded-2xl shadow-md lg:col-span-3">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Team Activity</h2>

            {loading ? (
              <p className="text-gray-500 text-center">Loading...</p>
            ) : activity.length === 0 ? (
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
                  {activity.map((a, idx) => {
                    const icon = getActivityIcon(a); // ✅ store once
                    return (
                      <div
                        key={idx}
                        className="flex items-start gap-3 bg-white border border-gray-100 rounded-xl p-3 shadow-sm hover:shadow-md transition-all duration-300"
                      >
                        {/* 🔸 Icon */}
                        {icon}

                        {/* 🔹 Content */}
                        <div className="flex-1">
                          {a.type === "WORKLOG" ? (
                            <>
                              <p className="text-gray-800 font-medium">{a.employee?.name || "Unnamed"}</p>
                              <p className="text-sm text-gray-600">
                                {a.progress === 100 ? (
                                  <>
                                    <span className="font-semibold text-green-600">Completed</span>{" "}
                                    <span className="text-gray-700">{a.task?.title}</span>
                                    {a.step?.name && <> — <span className="italic text-gray-700">{a.step.name}</span></>}
                                    {a.projectName && <> in <span className="font-medium text-gray-800">{a.projectName}</span></>}
                                  </>
                                ) : (
                                  <>
                                    Updated progress to <span className="font-semibold text-orange-600">{a.progress}%</span> on{" "}
                                    <span className="font-semibold text-gray-800">{a.task?.title}</span>
                                    {a.step?.name && <> — <span className="italic text-gray-700">{a.step.name}</span></>}
                                    {a.projectName && <> in <span className="font-medium text-gray-800">{a.projectName}</span></>}
                                  </>
                                )}
                              </p>
                              {a.notes && <p className="text-xs text-gray-500 italic mt-1">“{a.notes}”</p>}
                            </>
                          ) : (
                            <>
                              <p className="text-gray-800 font-semibold text-lg mb-1 flex items-center gap-2">
                                Announcement
                              </p>

                              <p className="text-sm text-gray-700">
                                <span className="font-medium text-gray-900">{a.project?.name || "Project"}</span>{" "}
                                <span className="text-gray-500">assigned to</span>{" "}
                                <span className="font-semibold text-orange-600">{a.assignedTo?.name || "Employee"}</span>
                              </p>
                            </>

                          )}
                        </div>

                        {/* 🕒 Time */}
                        <span className="text-xs text-gray-400 whitespace-nowrap">
                          {new Date(a.workDate || a.createdAt).toLocaleDateString("en-US", {
                            weekday: "short",
                            day: "numeric",
                            month: "short",
                          })}{" "}
                          {new Date(a.workDate || a.createdAt).toLocaleTimeString("en-US", {
                            hour: "numeric",
                            minute: "2-digit",
                            hour12: true,
                          })}
                        </span>
                      </div>
                    );
                  })}
                </ul>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
