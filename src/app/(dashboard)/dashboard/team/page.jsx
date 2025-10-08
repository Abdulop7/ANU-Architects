"use client";

import { Card, CardContent } from "../../../../../components/dashboard/card";
import { Users } from "lucide-react";
import { Progress } from "../../../../../components/dashboard/progress";
import { useRole } from "../../../../../lib/roleContext";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ManagerTeamPage() {
  const { role, id ,contextLoading, tasks:userTasks} = useRole();
  const router = useRouter();

  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Replace with actual logged-in manager id
  const managerId = id;

  useEffect(() => {
    if(contextLoading) return;
    
    if (role) {
      if (role !== "manager") {
        router.replace("/dashboard");
        return;
      }

      const fetchTasks = async () => {
        try {
          if(!contextLoading){
          // const res = await fetch("/api/tasks");
          // if (!res.ok) throw new Error("Failed to fetch tasks");
          // const data = await res.json();

          // Filter tasks for manager's team only
          const teamTasks = userTasks.filter(
            (task) => task.assignedTo?.managerId === managerId && task.progress < 100
          );

          setTasks(teamTasks);
        }
        } catch (err) {
          console.error(err);
        } finally {
          setLoading(false);
        }
      };

      fetchTasks();
    }
  }, [role,contextLoading]);

  if (loading) {
  return (
    <div className="flex flex-col w-full items-center p-8 h-screen bg-gray-50">
      {/* Spinner */}
      <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mb-6"></div>

      {/* Loading text */}
      <p className="text-gray-600 font-medium mb-8">Fetching your team’s tasks...</p>

      {/* Skeleton cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl px-6">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="animate-pulse rounded-xl shadow-md border border-gray-200 bg-white p-6 space-y-4"
          >
            <div className="h-5 bg-gray-200 rounded w-2/3"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/3"></div>

            <div className="h-2 bg-gray-200 rounded w-full mt-4"></div>
            <div className="h-2 bg-gray-200 rounded w-3/4"></div>

            <div className="space-y-2 mt-3">
              <div className="h-3 bg-gray-200 rounded w-5/6"></div>
              <div className="h-3 bg-gray-200 rounded w-2/3"></div>
              <div className="h-3 bg-gray-200 rounded w-4/5"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


  return (
    <div className="min-h-screen w-full bg-gray-50 p-8">
      {/* Page Header */}
      <div className="flex items-center gap-3 mb-4">
        <Users className="w-8 h-8 text-orange-600" />
        <h1 className="text-3xl font-bold text-gray-800">Team Tasks</h1>
      </div>

      {/* Scrollable Tasks Container */}
      <div className="overflow-y-auto max-h-[80vh] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tasks.length === 0 ? (
          <p className="text-gray-500 col-span-full text-center">
            No tasks assigned to your team.
          </p>
        ) : (
          tasks.map((task) => (
            <Card
              key={task.id}
              className="rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition"
            >
              <CardContent className="p-6 space-y-4">
                {/* Task Info */}
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    {task.title}
                  </h2>
                  <p className="text-sm text-gray-500">
                    Project: {task.subcategory.category.project.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    Assigned To: {task.assignedTo?.name || "Unassigned"}
                  </p>
                </div>

                {/* Progress */}
                <div className="flex justify-between text-xs text-gray-600">
                  <span>Progress</span>
                  <span>{task.progress}%</span>
                </div>
                <Progress
                  value={task.progress}
                  className="h-2 bg-gray-200"
                  indicatorClassName="bg-orange-600"
                />

                {/* Steps */}
                <div className="mt-2 space-y-1">
                  {task.steps.map((step) => (
                    <p
                      key={step.id}
                      className={`text-sm ${step.completed
                          ? "line-through text-gray-400"
                          : "text-gray-700"
                        }`}
                    >
                      - {step.name}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
