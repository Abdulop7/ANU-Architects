"use client";

import { useEffect, useState } from "react";
import ExecutiveDashboard from "../../../../components/dashboard/executive/executiveDashboard";
import EmployeeDashboard from "../../../../components/dashboard/employee/employeeDashboard";
import ManagerDashboard from "../../../../components/dashboard/manager/managerDashboard";



export default function DashboardPage() {
  const [role, setRole] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      // setRole(user.role);
      setRole("employee");
    }
  }, []);

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
