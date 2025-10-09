"use client";

import { useEffect, useState } from "react";
import ExecutiveDashboard from "../../../../components/dashboard/executive/executiveDashboard";
import EmployeeDashboard from "../../../../components/dashboard/employee/employeeDashboard";
import ManagerDashboard from "../../../../components/dashboard/manager/managerDashboard";
import { useRole } from "../../../../lib/roleContext";
import AccountantDashboard from "../../../../components/dashboard/accountant/accountantDashboard";



export default function DashboardPage() {
  const {role} = useRole(); // get role from context

    if (!role) {
    return (
      <div className="flex items-center justify-center h-screen w-full bg-gray-50">
        <div className="flex flex-col items-center gap-4">
          {/* Spinner */}
          <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
          
          {/* Loading text */}
          <p className="text-gray-700 text-lg font-medium animate-pulse">
            Loading your dashboard...
          </p>

          {/* Sub text */}
          <p className="text-sm text-gray-500">
            Please wait while we fetch your data
          </p>
        </div>
      </div>
    );
  }


  return (
    <div className="w-full">
      {role === "executive" && <ExecutiveDashboard />}
      {role === "manager" && <ManagerDashboard />}
      {role === "employee" && <EmployeeDashboard />}
      {role === "accountant" && <AccountantDashboard />}
    </div>
  );
}
