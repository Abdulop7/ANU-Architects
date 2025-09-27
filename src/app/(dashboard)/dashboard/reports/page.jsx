"use client";
import { useEffect, useState } from "react";
import ExecutiveReports from "../../../../../components/dashboard/executive/executiveReports";
import { useRole } from "../../../../../lib/roleContext";
import { useRouter } from "next/navigation";

export default function ReportsPage() {

    const {role} = useRole(); // get role from context
      const router = useRouter();
    
      useEffect(() => {
        if(role){
          if (role !== "executive") {
            // Not executive → redirect to dashboard
            router.replace("/dashboard");
            return;
          }
        }
    
      }, [role]);


    return (
        <div className="h-screen w-full p-8 flex justify-center">
            <div className="w-full max-w-6xl">
                 <ExecutiveReports />
            </div>
        </div>
    );
}
