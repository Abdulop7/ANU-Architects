"use client";

import { Card, CardContent } from "../../../components/dashboard/card";
import { Progress } from "../../../components/dashboard/progress";
import { CheckCircle, ClipboardList, Clock } from "lucide-react";

export default function EmployeeDashboard() {
  const completedTasks = [
    { id: 1, name: "Floor Plan Drafting", progress: 100 },
    { id: 2, name: "Electrical Layout", progress: 100 },
    { id: 3, name: "3D Lobby Rendering", progress: 100 },
    { id: 4, name: "Landscape Plan", progress: 100 },
    { id: 5, name: "Site Survey", progress: 100 },
    { id: 6, name: "Elevation Draft", progress: 100 },
  ];

  const myTasks = [
    { id: 1, name: "Plumbing Drawing", dueDate: "2025-09-20", progress: 60 },
    { id: 2, name: "Room 2 Interior", dueDate: "2025-09-22", progress: 30 },
    { id: 3, name: "Lobby Ceiling", dueDate: "2025-09-24", progress: 20 },
    { id: 4, name: "Garage Layout", dueDate: "2025-09-25", progress: 40 },
  ];

  const recentActivity = [
    { id: 1, action: "Submitted Floor Plan for 10 Marla Project", time: "2 hours ago" },
    { id: 2, action: "Updated progress on Room 1 Interior", time: "Yesterday" },
    { id: 3, action: "Completed Electrical Drawing", time: "3 days ago" },
    { id: 4, action: "Shared 3D rendering for Lobby", time: "5 days ago" },
    { id: 5, action: "Submitted Plumbing Layout", time: "1 week ago" },
  ];

  return (
    <div className="h-screen w-full bg-gray-50 p-8 flex flex-col space-y-6">
      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-800">Employee Dashboard</h1>

      {/* Sections */}
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
            {/* FIX: give this a flex-grow and scroll */}
            <div className="flex-1 overflow-y-auto pr-2 grid gap-4 md:grid-cols-2">
              {completedTasks.map((task) => (
                <div
                  key={task.id}
                  className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm"
                >
                  <p className="font-medium text-gray-800">{task.name}</p>
                  <Progress
                    value={task.progress}
                    className="h-2 mt-2 bg-gray-200"
                    indicatorClassName="bg-green-600"
                  />
                </div>
              ))}
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
            {/* FIX: make scrollable */}
            <div className="flex-1 overflow-y-auto pr-2 space-y-4">
              {myTasks.map((task) => (
                <div
                  key={task.id}
                  className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm"
                >
                  <div className="flex justify-between items-center">
                    <p className="font-medium text-gray-800">{task.name}</p>
                    <span className="text-sm text-gray-500">
                      Due: {task.dueDate}
                    </span>
                  </div>
                  <Progress
                    value={task.progress}
                    className="h-2 mt-2 bg-gray-200"
                    indicatorClassName="bg-orange-600"
                  />
                </div>
              ))}
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
            {/* FIX: scroll area */}
            <ul className="flex-1 overflow-y-auto pr-2 space-y-3">
              {recentActivity.map((activity) => (
                <li
                  key={activity.id}
                  className="p-3 bg-white rounded-lg border border-gray-200 shadow-sm"
                >
                  <p className="text-gray-800">{activity.action}</p>
                  <span className="text-sm text-gray-500">{activity.time}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
