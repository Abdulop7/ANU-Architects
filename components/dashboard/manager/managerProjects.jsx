"use client";
import { Card, CardContent } from "../card";

export default function ManagerProjects() {
  const tasks = [
    {
      title: "Finalize Villa Floor Plans",
      progress: 65,
      deadline: "25th Sept 2025",
      team: ["Ayesha Noor", "Hamza Tariq"],
    },
    {
      title: "3D Modeling for Mall",
      progress: 40,
      deadline: "30th Sept 2025",
      team: ["Bilal Ahmed", "Sara Khan"],
    },
    {
      title: "Smart Homes Site Supervision",
      progress: 80,
      deadline: "22nd Sept 2025",
      team: ["Hamza Tariq", "Ali Raza"],
    },
    {
      title: "Corporate HQ Interior Design",
      progress: 55,
      deadline: "28th Sept 2025",
      team: ["Sara Khan", "Zara Fatima"],
    },
    {
      title: "3D Modeling for Mall",
      progress: 40,
      deadline: "30th Sept 2025",
      team: ["Bilal Ahmed", "Sara Khan"],
    },
    {
      title: "Smart Homes Site Supervision",
      progress: 80,
      deadline: "22nd Sept 2025",
      team: ["Hamza Tariq", "Ali Raza"],
    },
    {
      title: "Corporate HQ Interior Design",
      progress: 55,
      deadline: "28th Sept 2025",
      team: ["Sara Khan", "Zara Fatima"],
    },
    {
      title: "3D Modeling for Mall",
      progress: 40,
      deadline: "30th Sept 2025",
      team: ["Bilal Ahmed", "Sara Khan"],
    },
    {
      title: "Smart Homes Site Supervision",
      progress: 80,
      deadline: "22nd Sept 2025",
      team: ["Hamza Tariq", "Ali Raza"],
    },
    {
      title: "Corporate HQ Interior Design",
      progress: 55,
      deadline: "28th Sept 2025",
      team: ["Sara Khan", "Zara Fatima"],
    },
    {
      title: "3D Modeling for Mall",
      progress: 40,
      deadline: "30th Sept 2025",
      team: ["Bilal Ahmed", "Sara Khan"],
    },
    {
      title: "Smart Homes Site Supervision",
      progress: 80,
      deadline: "22nd Sept 2025",
      team: ["Hamza Tariq", "Ali Raza"],
    },
    {
      title: "Corporate HQ Interior Design",
      progress: 55,
      deadline: "28th Sept 2025",
      team: ["Sara Khan", "Zara Fatima"],
    },
    {
      title: "3D Modeling for Mall",
      progress: 40,
      deadline: "30th Sept 2025",
      team: ["Bilal Ahmed", "Sara Khan"],
    },
    {
      title: "Smart Homes Site Supervision",
      progress: 80,
      deadline: "22nd Sept 2025",
      team: ["Hamza Tariq", "Ali Raza"],
    },
    {
      title: "Corporate HQ Interior Design",
      progress: 55,
      deadline: "28th Sept 2025",
      team: ["Sara Khan", "Zara Fatima"],
    },
  ];

  return (
    <div className="h-screen p-8 flex justify-center">
      <div className="w-full max-w-6xl">
        {/* Page Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight">
            Manager Project Tasks
          </h1>
          <p className="text-gray-500 mt-2">
            Track your team’s ongoing tasks, progress, and deadlines.
          </p>
        </div>

        {/* Scrollable Task List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-h-[70vh] overflow-y-auto pr-2">
          {tasks.map((task, idx) => (
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
                <div className="mb-3 text-sm text-gray-600">
                  Progress:{" "}
                  <span className="font-medium text-orange-600">
                    {task.progress}%
                  </span>
                </div>

                {/* Team Members */}
                <div className="flex flex-wrap gap-2">
                  {task.team.map((member, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium px-3 py-1 bg-orange-100 text-orange-700 rounded-full"
                    >
                      {member}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
