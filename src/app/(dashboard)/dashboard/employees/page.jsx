"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent } from "../../../../../components/dashboard/card";
import { useRouter } from "next/navigation";
import { useRole } from "../../../../../lib/roleContext";

export default function EmployeesPage() {
  const [employees, setEmployees] = useState([]);
  const [openEmployee, setOpenEmployee] = useState(null);
  const [loading, setLoading] = useState(true);

  const {role} = useRole();
  const router = useRouter();

  // ✅ Redirect non-executive users
  useEffect(() => {
    if (role && role !== "executive") {
      router.replace("/dashboard");
    }
  }, [role, router]);

  useEffect(() => {
    async function fetchData() {
      try {
        // fetch users
        const usersRes = await fetch("/api/users");
        if (!usersRes.ok) throw new Error("Failed to fetch users");
        const users = await usersRes.json();

        // fetch tasks
        const tasksRes = await fetch("/api/tasks");
        if (!tasksRes.ok) throw new Error("Failed to fetch tasks");
        const tasks = await tasksRes.json();

        // filter out executives
        const filtered = users.filter((user) => user.role !== "executive");

        // map each user to include their tasks with real progress
        const formatted = filtered.map((user) => {
          const userTasks =
            user.tasksReceived?.map((t) => {
              const fullTask = tasks.find((task) => task.id === t.id);
              const projectName =
                fullTask?.subcategory?.category?.project?.name || "Unnamed Project";
              const taskName = fullTask?.title || t.title || "Unnamed Task";

              return {
                name: `${projectName} (${taskName})`,
                progress: fullTask?.progress ?? 0,
              };
            })
            .filter((task) => task.progress < 100) || [];

          return {
            id: user.id,
            name: user.name,
            role: user.role,
            department:
              user.role === "manager"
                ? "Management"
                : user.role === "employee"
                  ? "Operations"
                  : "Executive",
            projects: userTasks,
          };
        });


        setEmployees(formatted);
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const toggleEmployee = (index) => {
    setOpenEmployee(openEmployee === index ? null : index);
  };

  if (loading) {
  return (
    <div className="p-6 w-full">
      <div className="animate-pulse space-y-6">
        {/* Header skeleton */}
        <div className="flex items-center gap-3">
          <div className="h-8 w-40 bg-gray-200 rounded"></div>
          <div className="h-2 w-8 bg-orange-300 rounded-full"></div>
        </div>

        {/* Table skeleton */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          {/* Table head */}
          <div className="grid grid-cols-3 bg-gray-100">
            <div className="h-10 bg-gray-200"></div>
            <div className="h-10 bg-gray-200"></div>
            <div className="h-10 bg-gray-200"></div>
          </div>
          {/* Table rows */}
          <div className="divide-y divide-gray-200">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="grid grid-cols-3 gap-4 p-4 bg-white"
              >
                <div className="h-4 bg-gray-200 rounded w-24"></div>
                <div className="h-4 bg-gray-200 rounded w-16"></div>
                <div className="h-4 bg-gray-200 rounded w-20"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


  return (
    <Card className="rounded-2xl shadow-lg w-full border border-orange-100">
      <CardContent className="p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
            Employees
          </span>
          <span className="w-8 h-1 bg-orange-500 rounded-full"></span>
        </h1>

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
                <React.Fragment key={emp.id}>
                  {/* Employee Row */}
                  <tr
                    className="hover:bg-orange-50 transition-colors duration-200 cursor-pointer"
                    onClick={() => toggleEmployee(idx)}
                  >
                    <td className="px-6 py-4 text-gray-800 font-medium">{emp.name}</td>
                    <td className="px-6 py-4 text-gray-600 capitalize">{emp.role}</td>
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
                                  <span className="font-medium text-gray-800">{proj.name}</span>
                                  <span className="text-sm text-gray-500">{proj.progress}%</span>
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
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-gray-400 mt-4">
          Showing {employees.length} employees across all departments.
        </p>
      </CardContent>
    </Card>
  );
}
