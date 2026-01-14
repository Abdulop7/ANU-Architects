"use client";
import { useState } from "react";
import { Card, CardContent } from "../card";
import { Button } from "../../ui/button";

export default function EmployeeTasks() {
  const [employeeTasks, setEmployeeTasks] = useState([
    {
      project: "Luxury Villas",
      deadline: "15 Oct 2025",
      steps: [
        { name: "3D Modeling", progress: 70, status: "In Progress" },
        { name: "Site Execution", progress: 20, status: "Pending" },
      ],
    },
    {
      project: "Downtown Mall",
      deadline: "20 Nov 2025",
      steps: [
        { name: "Structural Design", progress: 50, status: "In Progress" },
        { name: "Electrical Layout", progress: 0, status: "Not Started" },
      ],
    },
  ]);

  // Handle updating progress for a specific step
  const handleProgressChange = (projIdx, stepIdx, newProgress) => {
    const updatedTasks = [...employeeTasks];
    updatedTasks[projIdx].steps[stepIdx].progress = newProgress;
    updatedTasks[projIdx].steps[stepIdx].status =
      newProgress === 100
        ? "Completed"
        : newProgress > 0
        ? "In Progress"
        : "Not Started";
    setEmployeeTasks(updatedTasks);
  };

  // Handle submit progress for a whole project
  const handleSubmit = (projIdx) => {
    const project = employeeTasks[projIdx];
    alert(
      `✅ Progress submitted for ${project.project}\n\nSteps:\n${project.steps
        .map((s) => `${s.name}: ${s.progress}% (${s.status})`)
        .join("\n")}`
    );

    // Later: Replace alert with API call to backend
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-extrabold text-gray-800">My Tasks</h1>
        <p className="text-gray-500 mt-2">
          Update your task progress at the end of the day.
        </p>
      </div>

      {/* Task List */}
      <div className="space-y-6 max-h-[70vh] overflow-y-auto pr-2">
        {employeeTasks.map((task, projIdx) => (
          <Card
            key={projIdx}
            className="rounded-2xl shadow-md hover:shadow-lg transition"
          >
            <CardContent className="p-6">
              {/* Project Header */}
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  {task.project}
                </h2>
                <span className="text-sm text-gray-500">
                  Deadline: {task.deadline}
                </span>
              </div>

              {/* Steps with Progress Update */}
              <div className="space-y-6">
                {task.steps.map((step, stepIdx) => (
                  <div key={stepIdx}>
                    {/* Step title & status */}
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-700">
                        {step.name}
                      </span>
                      <span
                        className={`text-xs px-2 py-1 rounded-full font-semibold ${
                          step.status === "Completed"
                            ? "bg-green-100 text-green-700"
                            : step.status === "In Progress"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {step.status}
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-2">
                      <div
                        className={`h-2 rounded-full ${
                          step.status === "Completed"
                            ? "bg-green-500"
                            : "bg-orange-500"
                        }`}
                        style={{ width: `${step.progress}%` }}
                      />
                    </div>

                    {/* Progress Input */}
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={step.progress}
                      onChange={(e) =>
                        handleProgressChange(
                          projIdx,
                          stepIdx,
                          Number(e.target.value)
                        )
                      }
                      className="w-full"
                    />
                    <p className="text-sm text-gray-600 mt-1">
                      {step.progress}% complete
                    </p>
                  </div>
                ))}
              </div>

              {/* Submit Progress Button */}
              <div className="mt-6 text-right">
                <Button
                  onClick={() => handleSubmit(projIdx)}
                  className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg shadow-md"
                >
                  Submit Progress
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
