"use client";
import { Card, CardContent } from "../card";

export default function ExecutiveProjects() {
  const projects = [
    {
      name: "Corporate HQ Design",
      progress: 75,
      employees: ["Ali Raza (PM)", "Sara Khan (Architect)", "Bilal Ahmed (3D)", "Sara Khan (Architect)", "Bilal Ahmed (3D)"],
    },
    {
      name: "Luxury Villas",
      progress: 50,
      employees: ["Ayesha Noor (Junior Architect)", "Hamza Tariq (Site Engineer)"],
    },
    {
      name: "Downtown Mall",
      progress: 30,
      employees: ["Sara Khan (Architect)", "Bilal Ahmed (3D)"],
    },
    {
      name: "Smart Homes Phase II",
      progress: 90,
      employees: ["Ali Raza (PM)", "Zara Fatima (HR)", "Hamza Tariq (Engineer)"],
    },
    // repeated for demo
    {
      name: "Luxury Villas",
      progress: 50,
      employees: ["Ayesha Noor (Junior Architect)", "Hamza Tariq (Site Engineer)"],
    },
    {
      name: "Downtown Mall",
      progress: 30,
      employees: ["Sara Khan (Architect)", "Bilal Ahmed (3D)"],
    },
    {
      name: "Smart Homes Phase II",
      progress: 90,
      employees: ["Ali Raza (PM)", "Zara Fatima (HR)", "Hamza Tariq (Engineer)"],
    },
    {
      name: "Smart Homes Phase II",
      progress: 90,
      employees: ["Ali Raza (PM)", "Zara Fatima (HR)", "Hamza Tariq (Engineer)"],
    },
    // repeated for demo
    {
      name: "Luxury Villas",
      progress: 50,
      employees: ["Ayesha Noor (Junior Architect)", "Hamza Tariq (Site Engineer)"],
    },
    {
      name: "Downtown Mall",
      progress: 30,
      employees: ["Sara Khan (Architect)", "Bilal Ahmed (3D)"],
    },
    {
      name: "Smart Homes Phase II",
      progress: 90,
      employees: ["Ali Raza (PM)", "Zara Fatima (HR)", "Hamza Tariq (Engineer)"],
    },
    {
      name: "Smart Homes Phase II",
      progress: 90,
      employees: ["Ali Raza (PM)", "Zara Fatima (HR)", "Hamza Tariq (Engineer)"],
    },
    // repeated for demo
    {
      name: "Luxury Villas",
      progress: 50,
      employees: ["Ayesha Noor (Junior Architect)", "Hamza Tariq (Site Engineer)"],
    },
    {
      name: "Downtown Mall",
      progress: 30,
      employees: ["Sara Khan (Architect)", "Bilal Ahmed (3D)"],
    },
    {
      name: "Smart Homes Phase II",
      progress: 90,
      employees: ["Ali Raza (PM)", "Zara Fatima (HR)", "Hamza Tariq (Engineer)"],
    },
    {
      name: "Smart Homes Phase II",
      progress: 90,
      employees: ["Ali Raza (PM)", "Zara Fatima (HR)", "Hamza Tariq (Engineer)"],
    },
    // repeated for demo
    {
      name: "Luxury Villas",
      progress: 50,
      employees: ["Ayesha Noor (Junior Architect)", "Hamza Tariq (Site Engineer)"],
    },
    {
      name: "Downtown Mall",
      progress: 30,
      employees: ["Sara Khan (Architect)", "Bilal Ahmed (3D)"],
    },
    {
      name: "Smart Homes Phase II",
      progress: 90,
      employees: ["Ali Raza (PM)", "Zara Fatima (HR)", "Hamza Tariq (Engineer)"],
    },
    {
      name: "Smart Homes Phase II",
      progress: 90,
      employees: ["Ali Raza (PM)", "Zara Fatima (HR)", "Hamza Tariq (Engineer)"],
    },
    // repeated for demo
    {
      name: "Luxury Villas",
      progress: 50,
      employees: ["Ayesha Noor (Junior Architect)", "Hamza Tariq (Site Engineer)"],
    },
    {
      name: "Downtown Mall",
      progress: 30,
      employees: ["Sara Khan (Architect)", "Bilal Ahmed (3D)"],
    },
    {
      name: "Smart Homes Phase II",
      progress: 90,
      employees: ["Ali Raza (PM)", "Zara Fatima (HR)", "Hamza Tariq (Engineer)"],
    },
    {
      name: "Smart Homes Phase II",
      progress: 90,
      employees: ["Ali Raza (PM)", "Zara Fatima (HR)", "Hamza Tariq (Engineer)"],
    },
    // repeated for demo
    {
      name: "Luxury Villas",
      progress: 50,
      employees: ["Ayesha Noor (Junior Architect)", "Hamza Tariq (Site Engineer)"],
    },
    {
      name: "Downtown Mall",
      progress: 30,
      employees: ["Sara Khan (Architect)", "Bilal Ahmed (3D)"],
    },
    {
      name: "Smart Homes Phase II",
      progress: 90,
      employees: ["Ali Raza (PM)", "Zara Fatima (HR)", "Hamza Tariq (Engineer)"],
    },
  ];

  return (
    <div className="min-h-screen  p-8 flex justify-center overflow-y-hidden">
      {/* Centered container */}
      <div className="w-full max-w-7xl flex flex-col">
        {/* Page Header */}
        <div className="mb-6 text-center">
          <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight">
            Executive Project Overview
          </h1>
          <p className="text-gray-500 mt-2">
            A comprehensive view of all active projects and their assigned teams.
          </p>
        </div>

        {/* Scrollable Projects List */}
        <div className="flex-1 overflow-y-auto pr-2" style={{ maxHeight: "70vh" }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((proj, idx) => (
              <Card
                key={idx}
                className="rounded-2xl shadow-md hover:shadow-lg transition"
              >
                <CardContent className="p-6">
                  {/* Project Title & Progress */}
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-800">{proj.name}</span>
                    <span className="text-sm text-gray-500">{proj.progress}%</span>
                  </div>

                  <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden mb-3">
                    <div
                      className="h-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"
                      style={{ width: `${proj.progress}%` }}
                    />
                  </div>

                  {/* Employees */}
                  <div className="flex flex-wrap gap-2">
                    {proj.employees.map((emp, i) => (
                      <span
                        key={i}
                        className="text-xs font-medium px-3 py-1 bg-orange-100 text-orange-700 rounded-full"
                      >
                        {emp}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
