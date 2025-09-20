"use client";
import { Card, CardContent } from "../card";

export default function EmployeeProjects() {
  // Example: tasks assigned to a single employee
  const assignedTasks = [
    {
      title: "Villa Ground Floor Drafting",
      progress: 45,
      deadline: "22nd Sept 2025",
    },
    {
      title: "3D Visualization - Downtown Mall",
      progress: 70,
      deadline: "27th Sept 2025",
    },
    {
      title: "Site Supervision – Smart Homes",
      progress: 30,
      deadline: "20th Sept 2025",
    },
    {
      title: "Interior Layout – Corporate HQ",
      progress: 85,
      deadline: "29th Sept 2025",
    },
    {
      title: "3D Visualization - Downtown Mall",
      progress: 70,
      deadline: "27th Sept 2025",
    },
    {
      title: "Site Supervision – Smart Homes",
      progress: 30,
      deadline: "20th Sept 2025",
    },
    {
      title: "Interior Layout – Corporate HQ",
      progress: 85,
      deadline: "29th Sept 2025",
    },
    {
      title: "3D Visualization - Downtown Mall",
      progress: 70,
      deadline: "27th Sept 2025",
    },
    {
      title: "Site Supervision – Smart Homes",
      progress: 30,
      deadline: "20th Sept 2025",
    },
    {
      title: "Interior Layout – Corporate HQ",
      progress: 85,
      deadline: "29th Sept 2025",
    },
    {
      title: "3D Visualization - Downtown Mall",
      progress: 70,
      deadline: "27th Sept 2025",
    },
    {
      title: "Site Supervision – Smart Homes",
      progress: 30,
      deadline: "20th Sept 2025",
    },
    {
      title: "Interior Layout – Corporate HQ",
      progress: 85,
      deadline: "29th Sept 2025",
    },
  ];

  return (
    <div className="h-screen p-8 flex justify-center">
      <div className="w-full max-w-4xl">
        {/* Page Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight">
            My Assigned Tasks
          </h1>
          <p className="text-gray-500 mt-2">
            Stay on track with your project deadlines and progress.
          </p>
        </div>

        {/* Scrollable Task List */}
        <div className="space-y-6 max-h-[70vh] overflow-y-auto pr-2">
          {assignedTasks.map((task, idx) => (
            <Card
              key={idx}
              className="rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <CardContent className="p-6">
                {/* Task Title */}
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-gray-800">
                    {task.title}
                  </span>
                  <span className="text-xs text-gray-500">
                    Deadline: {task.deadline}
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden mb-3">
                  <div
                    className="h-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"
                    style={{ width: `${task.progress}%` }}
                  />
                </div>

                {/* Progress % */}
                <div className="text-sm text-gray-600">
                  Progress:{" "}
                  <span className="font-medium text-orange-600">
                    {task.progress}%
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
