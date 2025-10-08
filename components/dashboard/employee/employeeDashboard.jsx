"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "../../../components/dashboard/card";
import { Progress } from "../../../components/dashboard/progress";
import { Activity, Bell, CheckCircle, ClipboardList, Clock, FileCheck2 } from "lucide-react";
import { useRole } from "../../../lib/roleContext";

export default function EmployeeDashboard() {

  const { id, projects, tasks, contextLoading, activity } = useRole()
  const [completedTasks, setCompletedTasks] = useState([]);
  const [myTasks, setMyTasks] = useState([]);
  const [recentActivity, setRecentActivity] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    const fetchData = async () => {
      try {
        // ✅ Fetch tasks
        // const taskRes = await fetch(`/api/tasks`);
        // const tasks = await taskRes.json();

        // Split into completed vs ongoing

        if (!contextLoading) {

          const completed = tasks.filter((t) => t.progress === 100 && t.assignedToId === id);
          const ongoing = tasks.filter((t) => t.progress < 100 && t.assignedToId === id);

          setCompletedTasks(completed);
          setMyTasks(ongoing);

          const myActivity = activity.filter(
            (a) => a.employeeId === id || a.assignedToId === id
          );

          setRecentActivity(myActivity);
          setLoading(false);
        }


      } catch (err) {
        console.error("Error loading dashboard:", err);
      }
    };

    fetchData();
  }, [contextLoading]);

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

  if (loading) {
    return (
      <div className="h-screen w-full bg-gray-50 p-8 flex flex-col space-y-6 animate-pulse">
        {/* Header */}
        <div className="h-8 w-64 bg-gray-200 rounded"></div>

        <div className="flex-1 flex flex-col space-y-6 overflow-hidden">
          {/* Completed Tasks Skeleton */}
          <Card className="flex-1 h-[30vh] rounded-xl shadow-md border border-gray-200 flex flex-col">
            <CardContent className="p-6 flex flex-col h-full space-y-4">
              <div className="h-6 w-48 bg-gray-200 rounded"></div>
              <div className="grid gap-4 md:grid-cols-2 flex-1 overflow-y-auto pr-2">
                {[...Array(2)].map((_, i) => (
                  <div
                    key={i}
                    className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm space-y-3"
                  >
                    <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
                    <div className="h-3 w-1/2 bg-gray-200 rounded"></div>
                    <div className="h-2 w-full bg-gray-200 rounded"></div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* My Tasks Skeleton */}
          <Card className="flex-1 h-[30vh] rounded-xl shadow-md border border-gray-200 flex flex-col">
            <CardContent className="p-6 flex flex-col h-full space-y-4">
              <div className="h-6 w-36 bg-gray-200 rounded"></div>
              <div className="flex-1 overflow-y-auto pr-2 space-y-4">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm space-y-3"
                  >
                    <div className="flex justify-between">
                      <div className="h-4 w-40 bg-gray-200 rounded"></div>
                      <div className="h-3 w-16 bg-gray-200 rounded"></div>
                    </div>
                    <div className="h-2 w-full bg-gray-200 rounded"></div>
                    <div className="h-3 w-20 bg-gray-200 rounded"></div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity Skeleton */}
          <Card className="flex-1 h-[20vh] rounded-xl shadow-md border border-gray-200 flex flex-col">
            <CardContent className="p-6 flex flex-col h-full space-y-4">
              <div className="h-6 w-40 bg-gray-200 rounded"></div>
              <ul className="flex-1 overflow-y-auto pr-2 space-y-3">
                {[...Array(3)].map((_, i) => (
                  <li
                    key={i}
                    className="p-3 bg-white rounded-lg border border-gray-200 shadow-sm space-y-2"
                  >
                    <div className="h-3 w-32 bg-gray-200 rounded"></div>
                    <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
                    <div className="h-3 w-28 bg-gray-200 rounded"></div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }


  return (
    <div className="h-screen w-full bg-gray-50 p-8 flex flex-col space-y-6">
      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-800">Employee Dashboard</h1>

      <div className="flex-1 flex flex-col space-y-6 overflow-hidden">



        {/* My Tasks */}
        <Card className="flex-1 h-[30vh] rounded-xl shadow-md border border-gray-200 flex flex-col">
          <CardContent className="p-6 flex flex-col h-full">
            <div className="flex items-center gap-3 mb-4">
              <ClipboardList className="text-orange-600 w-6 h-6" />
              <h2 className="text-xl font-semibold text-gray-800">My Tasks</h2>
            </div>
            <div className="flex-1 overflow-y-auto pr-2 space-y-4">
              {myTasks.length === 0 ? (
                <div className="flex flex-col items-center justify-center text-gray-400">
                  <ClipboardList className="w-10 h-10 mb-2" />
                  <p>No tasks assigned yet.</p>
                </div>
              ) : (
                myTasks.map((task) => (
                  <div
                    key={task.id}
                    className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <div>
                        <p className="font-medium text-gray-800">{task.title}</p>
                        <p className="text-sm text-gray-500">
                          Project: {task.subcategory?.category?.project?.name || "No Project"}
                        </p>
                      </div>
                      <span className="text-sm text-gray-500">
                        Due:{" "}
                        {new Date(task.deadline).toLocaleDateString("en-US", {
                          day: "numeric",
                          month: "short",
                        })}
                      </span>
                    </div>
                    <Progress
                      value={task.progress}
                      className="h-2 mt-1 bg-gray-200"
                      indicatorClassName="bg-orange-600"
                    />
                    {task.progress !== undefined && (
                      <p className="text-sm text-gray-500 mt-1">
                        Progress: {task.progress}%
                      </p>
                    )}
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="flex-1 h-[20vh] rounded-xl shadow-md border border-gray-200 flex flex-col">
          <CardContent className="p-6 flex flex-col h-full">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="text-blue-600 w-6 h-6" />
              <h2 className="text-xl font-semibold text-gray-800">
                Recent Activity
              </h2>
            </div>
            <ul className="flex-1 overflow-y-auto pr-2 space-y-3">
              {recentActivity.length === 0 ? (
                <div className="flex flex-col items-center justify-center text-gray-400">
                  <Clock className="w-10 h-10 mb-2" />
                  <p>No recent activity found.</p>
                </div>
              ) : (
                recentActivity.map((a, idx) => {
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
                })
              )}
            </ul>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
