"use client";
import { useState } from "react";
import { Card, CardContent } from "../../../../../components/dashboard/card";

// Employees + Projects Data
const employees = [
  {
    name: "Ali Raza",
    role: "Project Manager",
    department: "Architecture",
    projects: [
      { name: "Corporate HQ Design", progress: 80 },
      { name: "Luxury Villas", progress: 65 },
    ],
  },
  {
    name: "Sara Khan",
    role: "Senior Architect",
    department: "Design",
    projects: [
      { name: "Smart Homes Phase II", progress: 45 },
      { name: "Green Valley Resort", progress: 70 },
    ],
  },
  {
    name: "Bilal Ahmed",
    role: "3D Visualizer",
    department: "Visualization",
    projects: [
      { name: "Downtown Mall", progress: 55 },
      { name: "Luxury Villas", progress: 30 },
    ],
  },
  {
    name: "Ayesha Noor",
    role: "Junior Architect",
    department: "Design",
    projects: [{ name: "Smart Homes Phase II", progress: 25 }],
  },
  {
    name: "Hamza Tariq",
    role: "Site Engineer",
    department: "Construction",
    projects: [
      { name: "Corporate HQ Design", progress: 80 },
      { name: "Downtown Mall", progress: 40 },
    ],
  },
  {
    name: "Zara Fatima",
    role: "HR Executive",
    department: "Administration",
    projects: [],
  },
];

export default function EmployeesPage() {
  const [openEmployee, setOpenEmployee] = useState(null);

  const toggleEmployee = (index) => {
    setOpenEmployee(openEmployee === index ? null : index);
  };

  return (
    <Card className="rounded-2xl shadow-lg w-full border border-orange-100">
      <CardContent className="p-6">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
            Employees
          </span>
          <span className="w-8 h-1 bg-orange-500 rounded-full"></span>
        </h1>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
              <tr>
                <th className="text-left px-6 py-3 text-sm font-semibold">Name</th>
                <th className="text-left px-6 py-3 text-sm font-semibold">Role</th>
                <th className="text-left px-6 py-3 text-sm font-semibold">Department</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {employees.map((emp, idx) => (
                <>
                  {/* Employee Row */}
                  <tr
                    key={idx}
                    className="hover:bg-orange-50 transition-colors duration-200 cursor-pointer"
                    onClick={() => toggleEmployee(idx)}
                  >
                    <td className="px-6 py-4 text-gray-800 font-medium">
                      {emp.name}
                    </td>
                    <td className="px-6 py-4 text-gray-600">{emp.role}</td>
                    <td className="px-6 py-4 text-gray-600">{emp.department}</td>
                  </tr>

                  {/* Expandable Projects Row */}
                  {openEmployee === idx && (
                    <tr>
                      <td colSpan={3} className="bg-gray-50 px-6 py-4">
                        {emp.projects.length > 0 ? (
                          <div className="space-y-4">
                            {emp.projects.map((proj, pIdx) => (
                              <div key={pIdx}>
                                <div className="flex justify-between mb-1">
                                  <span className="font-medium text-gray-800">
                                    {proj.name}
                                  </span>
                                  <span className="text-sm text-gray-500">
                                    {proj.progress}%
                                  </span>
                                </div>
                                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                                  <div
                                    className="h-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"
                                    style={{ width: `${proj.progress}%` }}
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <p className="text-sm text-gray-500 italic">
                            No active projects assigned.
                          </p>
                        )}
                      </td>
                    </tr>
                  )}
                </>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <p className="text-xs text-gray-400 mt-4">
          Showing {employees.length} employees across all departments.
        </p>
      </CardContent>
    </Card>
  );
}
