"use client";

import ExecutiveDashboard from "@/components/dashboard/executive/executiveDashboard";
import EmployeeDashboard from "@/components/dashboard/employee/employeeDashboard";
import ManagerDashboard from "@/components/dashboard/manager/managerDashboard";
import { useRole } from "@/lib/roleContext";
import AccountantDashboard from "@/components/dashboard/accountant/accountantDashboard";



export default function DashboardPage() {
  const {role} = useRole(); // get role from context

    if (!role) {
    return (
      <div className="flex items-center justify-center h-full w-full bg-[#050505]">
        <div className="flex flex-col items-center gap-6 animate-pulse">
          {/* Spinner */}
          <div className="w-10 h-10 border border-white/5 border-t-accent rounded-none animate-spin"></div>
          
          {/* Loading text */}
          <div className="text-center">
            <p className="text-white text-[0.65rem] tracking-[0.4em] uppercase font-bold">
              Loading Dashboard
            </p>
            <p className="text-secondary text-[0.55rem] tracking-[0.2em] font-medium mt-2 uppercase">
              Initializing Workspaces...
            </p>
          </div>
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
