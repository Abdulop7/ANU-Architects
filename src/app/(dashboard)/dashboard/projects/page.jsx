"use client";
import { useEffect, useState } from "react";

import ExecutiveProjects from "../../../../../components/dashboard/executive/executiveProjects";
import ManagerProjects from "../../../../../components/dashboard/manager/managerProjects";
import EmployeeProjects from "../../../../../components/dashboard/employee/employeeProjects";

// Mock: Normally you'd get this from auth/session
const mockUser = {
  name: "Ali Raza",
  role: "employee", 
};

export default function ProjectsPage() {
  const [user,setUser] = useState(mockUser);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
          const user = JSON.parse(storedUser);
        //   setUser(user);
          setUser(mockUser)

        }
      }, []);

  return (
    <div className="p-6 w-full overflow-y-hidden">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
          Projects Dashboard
        </span>
        <span className="w-8 h-1 bg-orange-500 rounded-full"></span>
      </h1>

      {/* Role-based rendering */}
      {user.role === "executive" && <ExecutiveProjects />}
      {user.role === "manager" && <ManagerProjects />}
      {user.role === "employee" && <EmployeeProjects />}

      {/* Fallback */}
      {!["executive", "manager", "employee"].includes(
        user.role
      ) && <p className="text-gray-500">No project view available for this role.</p>}
    </div>
  );
}
