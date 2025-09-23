"use client";

import { useState, useEffect } from "react";

import ManagerTasks from "../../../../../components/dashboard/manager/managerTasks";
import EmployeeTasks from "../../../../../components/dashboard/employee/employeeTasks";
import { useRole } from "../../../../../lib/roleContext";

export default function TasksPage() {
  // Mock user role (replace this with auth/DB call)
  const role = useRole(); // get role from context

  if (!role) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-gray-500">Loading tasks...</p>
      </div>
    );
  }

  return (
    <div className="overflow-y-hidden w-full">
      {role === "manager" ? (
        <ManagerTasks />
      ) : (
        <EmployeeTasks />
      )}
    </div>
  );
}
