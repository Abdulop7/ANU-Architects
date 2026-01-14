"use client";
import { useState } from "react";
import { Card, CardContent } from "../card";
import { Button } from "../../ui/button";

export default function ManagerTasks() {
  const [projects, setProjects] = useState([
    {
      name: "10 Marla House",
      phases: [
        {
          name: "Grey Structure",
          tasks: [
            { name: "Floor Plan", assignedTo: "Sara Khan", progress: 50 },
            { name: "Plumbing", assignedTo: "Bilal Ahmed", progress: 20 },
            { name: "Electrical Drawing", assignedTo: "Ayesha Noor", progress: 0 },
          ],
        },
        {
          name: "Finishing",
          tasks: [
            { name: "Room 1 Interior", assignedTo: "Hamza Tariq", progress: 70 },
            { name: "Room 2 Interior", assignedTo: "Ali Raza", progress: 100 },
            { name: "Lobby", assignedTo: "Sara Khan", progress: 0 },
            { name: "Garage", assignedTo: "Bilal Ahmed", progress: 10 },
            { name: "Elevation", assignedTo: "Ayesha Noor", progress: 0 },
            { name: "Mumty", assignedTo: "Ali Raza", progress: 0 },
            { name: "Drawing Room", assignedTo: "Hamza Tariq", progress: 50 },
          ],
        },
      ],
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-6">
        Manager – Assign & Monitor Tasks
      </h1>

      <div className="space-y-6">
        {projects.map((project, idx) => (
          <Card key={idx} className="rounded-2xl shadow-md">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">{project.name}</h2>

              {project.phases.map((phase, pIdx) => (
                <div key={pIdx} className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-700 mb-3">
                    {phase.name}
                  </h3>

                  <ul className="space-y-3">
                    {phase.tasks.map((task, tIdx) => (
                      <li
                        key={tIdx}
                        className="p-4 bg-gray-100 rounded-lg flex justify-between items-center"
                      >
                        <div>
                          <p className="font-medium text-gray-800">{task.name}</p>
                          <p className="text-sm text-gray-500">
                            Assigned to: {task.assignedTo}
                          </p>
                        </div>
                        <span className="text-sm font-semibold text-orange-600">
                          {task.progress}%
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <Button className="bg-orange-600 text-white mt-4">
                + Assign New Task
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
