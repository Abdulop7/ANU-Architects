"use client"

import ExecutiveReminder from "@/components/dashboard/executive/executiveReminder";
import UserReminders from "@/components/dashboard/reminder";
import { useRole } from "@/lib/roleContext";

export default function DashboardPage() {
  const {role} = useRole(); // get role from context

    if (!role) {
    return (
      <div className="flex items-center justify-center h-screen w-full bg-[#050505]">
        <div className="flex flex-col items-center gap-4">
          {/* Spinner */}
          <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-none animate-spin"></div>
          
          {/* Loading text */}
          <p className="text-gray-300 text-lg font-medium animate-pulse">
            Loading your Reminders...
          </p>

          {/* Sub text */}
          <p className="text-sm text-secondary">
            Please wait while we fetch your data
          </p>
        </div>
      </div>
    );
  }


  return (
    <div className="w-full">
      {role === "executive" && <ExecutiveReminder />}
      {role !== "executive" && <UserReminders />}
    </div>
  );
}
