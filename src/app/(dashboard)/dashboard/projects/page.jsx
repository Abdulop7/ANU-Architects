"use client"
import ExecutiveProjects from "../../../../../components/dashboard/executive/executiveProjects";
import ManagerProjects from "../../../../../components/dashboard/manager/managerProjects";
import EmployeeProjects from "../../../../../components/dashboard/employee/employeeProjects";
import { useRole } from "../../../../../lib/roleContext";


export default function ProjectsPage() {
  const {role} = useRole(); // get role from context

  return (
    <div className="p-6 w-full overflow-y-hidden">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
          Projects Dashboard
        </span>
        <span className="w-8 h-1 bg-orange-500 rounded-full"></span>
      </h1>

      {/* Role-based rendering */}
      {role === "executive" && <ExecutiveProjects />}
      {role === "manager" && <ManagerProjects />}
      {role === "employee" && <EmployeeProjects />}

      {/* Fallback */}
      {!["executive", "manager", "employee"].includes(
        role
      ) && <p className="text-gray-500">No project view available for this role.</p>}
    </div>
  );
}
