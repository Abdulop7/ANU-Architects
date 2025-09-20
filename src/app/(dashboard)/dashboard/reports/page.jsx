"use client";
import { useEffect, useState } from "react";
import ManagerReports from "../../../../../components/dashboard/manager/managerReports";
import ExecutiveReports from "../../../../../components/dashboard/executive/executiveReports";

export default function ReportsPage() {

    const [role, setRole] = useState(); // "executive" | "manager"

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            const user = JSON.parse(storedUser);
            //   setRole(user.role);
            setRole("manager")
        }
    }, []);

    return (
        <div className="h-screen w-full p-8 flex justify-center">
            <div className="w-full max-w-6xl">
                {role === "executive" ? <ExecutiveReports /> : <ManagerReports />}
            </div>
        </div>
    );
}
