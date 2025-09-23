"use client";

import { useEffect, useState } from "react";
import ExecutiveDashboard from "../../../../components/dashboard/executive/executiveDashboard";
import EmployeeDashboard from "../../../../components/dashboard/employee/employeeDashboard";
import ManagerDashboard from "../../../../components/dashboard/manager/managerDashboard";
import { useRole } from "../../../../lib/roleContext";



export default function DashboardPage() {
  const role = useRole(); // get role from context

  if (!role) return <p>Loading...</p>;

  return (
    <div className="w-full">
      {role === "executive" && <ExecutiveDashboard />}
      {role === "manager" && <ManagerDashboard />}
      {role === "employee" && <EmployeeDashboard />}
      {!role && <p>Loading dashboard...</p>}
    </div>
  );
}
