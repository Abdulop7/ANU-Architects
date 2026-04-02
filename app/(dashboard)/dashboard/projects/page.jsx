"use client"
import ExecutiveProjects from "@/components/dashboard/executive/executiveProjects";
import ManagerProjects from "@/components/dashboard/manager/managerProjects";
import EmployeeProjects from "@/components/dashboard/employee/employeeProjects";
import AccountantProjects from "@/components/dashboard/accountant/accountantProjects";
import { useRole } from "@/lib/roleContext";

export default function ProjectsPage() {
  const {role} = useRole(); // get role from context

  return (
    <div className="w-full">
      {/* Role-based rendering */}
      {role === "executive" && <ExecutiveProjects />}
      {role === "manager" && <ManagerProjects />}
      {role === "employee" && <EmployeeProjects />}
      {role === "accountant" && <AccountantProjects />}

      {/* Fallback */}
      {!["executive", "manager", "employee", "accountant"].includes(
        role
      ) && <p className="text-secondary p-6">No project view available for this role.</p>}
    </div>
  );
}
