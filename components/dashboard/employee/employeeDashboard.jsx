"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "../../../components/dashboard/card";
import { Progress } from "../../../components/dashboard/progress";
import { CheckCircle, ClipboardList, Clock } from "lucide-react";
import { useRole } from "../../../lib/roleContext";

export default function EmployeeDashboard() {

  const { id } = useRole()
  const [completedTasks, setCompletedTasks] = useState([]);
  const [myTasks, setMyTasks] = useState([]);
  const [recentActivity, setRecentActivity] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchData = async () => {
      try {
        // ✅ Fetch tasks
        const taskRes = await fetch(`/api/tasks`);
        const tasks = await taskRes.json();

        // Split into completed vs ongoing
        const completed = tasks.filter((t) => t.progress === 100 && t.assignedToId === id);
        const ongoing = tasks.filter((t) => t.progress < 100 && t.assignedToId === id);

        setCompletedTasks(completed);
        setMyTasks(ongoing);


        // ✅ Fetch activity
        const activityRes = await fetch(`/api/activity`);
        const activity = await activityRes.json();
        const myActivity = activity.filter((a) => a.employeeId == id);
        setRecentActivity(myActivity);
      } catch (err) {
        console.error("Error loading dashboard:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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

        {/* Completed Tasks */}
        <Card className="flex-1 h-[30vh] rounded-xl shadow-md border border-gray-200 flex flex-col">
          <CardContent className="p-6 flex flex-col h-full">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="text-green-600 w-6 h-6" />
              <h2 className="text-xl font-semibold text-gray-800">
                Completed Tasks (This Week)
              </h2>
            </div>
            <div className="flex-1 overflow-y-auto pr-2 grid gap-4 md:grid-cols-2">
              {completedTasks.length === 0 ? (
                <div className="flex flex-col items-center justify-center text-gray-400 col-span-2">
                  <CheckCircle className="w-10 h-10 mb-2" />
                  <p>No completed tasks found.</p>
                </div>
              ) : (
                completedTasks.map((task) => (
                  <div
                    key={task.id}
                    className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm"
                  >
                    <p className="font-medium text-gray-800">{task.title}</p>
                    <p className="text-sm text-gray-500">
                      Project: {task.subcategory?.category?.project?.name || "No Project"}
                    </p>
                    <Progress
                      value={task.progress}
                      className="h-2 mt-2 bg-gray-200"
                      indicatorClassName="bg-green-600"
                    />
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>

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
                recentActivity.map((log) => (
                  <li
                    key={log.id}
                    className="p-3 bg-white rounded-lg border border-gray-200 shadow-sm"
                  >
                    <p className="text-sm text-gray-500">
                      Task: {log.task?.title || "No Task"}
                    </p>
                    <p className="text-gray-800 mt-1">{log.action || log.notes}</p>
                    <span className="text-sm text-gray-500">
                      {new Date(log.workDate).toLocaleDateString("en-US", {
                        weekday: "short",
                        day: "numeric",
                        month: "short",
                      })}{" "}
                      {new Date(log.workDate).toLocaleTimeString("en-US", {
                        hour: "numeric",
                        minute: "2-digit",
                        hour12: true,
                      })}
                    </span>
                  </li>
                ))
              )}
            </ul>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
