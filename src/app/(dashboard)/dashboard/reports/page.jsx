"use client";
import { useEffect, useState } from "react";
import ManagerReports from "../../../../../components/dashboard/manager/managerReports";
import ExecutiveReports from "../../../../../components/dashboard/executive/executiveReports";
import { useRole } from "../../../../../lib/roleContext";

export default function ReportsPage() {

    const role = useRole(); // get role from context


    return (
        <div className="h-screen w-full p-8 flex justify-center">
            <div className="w-full max-w-6xl">
                {role === "executive" ? <ExecutiveReports /> : <ManagerReports />}
            </div>
        </div>
    );
}
