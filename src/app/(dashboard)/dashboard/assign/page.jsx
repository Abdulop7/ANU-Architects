"use client";
import { useState } from "react";
import { Card, CardContent } from "../../../../../components/dashboard/card";
import { Button } from "../../../../../components/ui/button";

export default function AssignTasksPage() {
  const [projectName, setProjectName] = useState("");
  const [category, setCategory] = useState("");
  const [selectedTasks, setSelectedTasks] = useState([]);
  const [residentialFinishes, setResidentialFinishes] = useState({
    bedrooms: 0,
    kitchens: 0,
    powderRooms: 0,
    garage: 0,
    ironRoom: 0,
    basement: 0,
    pool: 0,
  });

  const toggleTask = (task) => {
    setSelectedTasks((prev) =>
      prev.includes(task)
        ? prev.filter((t) => t !== task)
        : [...prev, task]
    );
  };

  const handleAssign = () => {
    const data = {
      projectName,
      category,
      selectedTasks,
      residentialFinishes:
        category === "Residential" && selectedTasks.includes("Finishes")
          ? residentialFinishes
          : null,
    };

    console.log("Assigned Project Data:", data);
    alert("Task assigned successfully!");
  };

  return (
    <div className="min-h-screen w-full bg-gray-50 p-6">
      {/* Scrollable container */}
      <div className="max-w-5xl mx-auto h-[calc(100vh-3rem)] overflow-y-auto rounded-2xl shadow-lg border border-gray-200 bg-white">
        <Card className="border-none shadow-none">
          <CardContent className="p-8 space-y-8">
            {/* Page Title */}
            <div className="text-center sticky top-0 bg-white pb-4 z-10 ">
              <h1 className="text-4xl font-bold text-gray-800">
                Assign New Project Task
              </h1>
              <p className="text-gray-500 mt-2">
                Define the project structure, category, and assign tasks clearly.
              </p>
            </div>

            {/* Project Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Project Name
              </label>
              <input
                type="text"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                className="w-full border rounded-lg px-4 py-3 shadow-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
                placeholder="Enter project name"
              />
            </div>

            {/* Project Category */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Project Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full border rounded-lg px-4 py-3 shadow-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
              >
                <option value="">Select Category</option>
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
                <option value="Restaurant">Restaurant</option>
                <option value="Religious">Religious</option>
                <option value="Educational">Educational</option>
              </select>
            </div>

            {/* Task Types */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Select Task Types
              </label>
              <div className="flex gap-6">
                {["Grey", "Finishes"].map((type) => (
                  <label key={type} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedTasks.includes(type)}
                      onChange={() => toggleTask(type)}
                      className="w-4 h-4 text-orange-600 focus:ring-orange-500"
                    />
                    {type}
                  </label>
                ))}
              </div>
            </div>

            {/* Grey Structure Tasks */}
            {selectedTasks.includes("Grey") && (
              <div className="bg-gray-50 p-5 rounded-xl border">
                <h3 className="font-semibold text-gray-800 mb-3">
                  Grey Structure Tasks
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {["Floor Plan", "Plumbing", "Electrical"].map((task) => (
                    <label key={task} className="flex items-center gap-2">
                      <input type="checkbox" className="w-4 h-4 text-orange-600" />
                      {task}
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Residential Finishes */}
            {category === "Residential" && selectedTasks.includes("Finishes") && (
              <div className="bg-gray-50 p-5 rounded-xl border">
                <h3 className="font-semibold text-gray-800 mb-3">
                  Residential Finishes
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {Object.keys(residentialFinishes).map((key) => (
                    <div key={key}>
                      <label className="block text-sm font-medium capitalize text-gray-600">
                        {key}
                      </label>
                      <input
                        type="number"
                        min="0"
                        value={residentialFinishes[key]}
                        onChange={(e) =>
                          setResidentialFinishes((prev) => ({
                            ...prev,
                            [key]: Number(e.target.value),
                          }))
                        }
                        className="mt-1 w-full border rounded-lg px-3 py-2 shadow-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Non-Residential Finishes */}
            {category &&
              category !== "Residential" &&
              selectedTasks.includes("Finishes") && (
                <div className="bg-gray-50 p-5 rounded-xl border">
                  <h3 className="font-semibold text-gray-800 mb-2">Finishes</h3>
                  <p className="text-gray-600">
                    Whole Interior will be considered for this category.
                  </p>
                </div>
              )}

            {/* Assign Button */}
            <div className="sticky bottom-0 bg-white py-4">
              <Button
                onClick={handleAssign}
                className="w-full bg-orange-600 text-white hover:bg-orange-700 py-3 rounded-xl text-lg font-semibold shadow-md"
              >
                Assign Task
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
