"use client";

import { useEffect, useState } from "react";
import { Loader2, CalendarDays, User, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useRole } from "../../../../../lib/roleContext";
import { Card, CardContent } from "../../../../../components/dashboard/card";

export default function AttendancePage() {
    const { contextLoading, workLog, users } = useRole();
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedUser, setSelectedUser] = useState(null);
    const [logsByDate, setLogsByDate] = useState({});
    const [logsByUser, setLogsByUser] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (contextLoading) return;

        const byDate = {};
        const byUser = {};

        workLog.forEach((log) => {
            const dateKey = new Date(log.workDate).toISOString().split("T")[0];
            if (!byDate[dateKey]) byDate[dateKey] = new Set();
            byDate[dateKey].add(log.employeeId);

            if (!byUser[log.employeeId]) byUser[log.employeeId] = new Set();
            byUser[log.employeeId].add(dateKey);
        });

        setLogsByDate(byDate);
        setLogsByUser(byUser);
        setLoading(false);
    }, [workLog, contextLoading]);

    const today = new Date();
    const [month, setMonth] = useState(today.getMonth());
    const [year, setYear] = useState(today.getFullYear());

    const handlePrevMonth = () => {
        setMonth((prev) => (prev === 0 ? 11 : prev - 1));
        if (month === 0) setYear((prev) => prev - 1);
    };

    const handleNextMonth = () => {
        setMonth((prev) => (prev === 11 ? 0 : prev + 1));
        if (month === 11) setYear((prev) => prev + 1);
    };

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();
    const monthName = new Date(year, month).toLocaleString("default", { month: "long" });

    const employees = users.filter(
        (u) => u.role !== "executive" && u.role !== "accountant"
    );

    const handleDateClick = (day) => {
        const key = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
        setSelectedDate(key);
        setSelectedUser(null);
    };

    const handleUserClick = (user) => {
        setSelectedUser(user);
        setSelectedDate(null);
    };

    if (loading || contextLoading) {
        return (
            <div className="flex h-screen w-full items-center justify-center bg-gray-50">
                <Loader2 className="animate-spin text-orange-500 h-8 w-8" />
            </div>
        );
    }

    const renderCalendar = () => {
        const blanks = Array.from({ length: (firstDay + 6) % 7 }, () => null);
        const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
        const allDays = [...blanks, ...days];

        return (
            <div className="grid grid-cols-7 gap-2 text-center">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
                    <div key={d} className="text-sm font-semibold text-gray-600">
                        {d}
                    </div>
                ))}

                {allDays.map((day, i) => {
                    if (!day) return <div key={i} />;
                    const dateKey = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
                    const isLogged = logsByDate[dateKey]?.size > 0;

                    return (
                        <button
                            key={i}
                            onClick={() => handleDateClick(day)}
                            className={`p-2 rounded-lg text-sm font-medium transition-all border 
                ${selectedDate === dateKey
                                    ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white border-orange-600"
                                    : isLogged
                                        ? "bg-orange-100 text-orange-600 border-orange-200 hover:bg-orange-200"
                                        : "bg-gray-100 text-gray-600 border-gray-200 hover:bg-gray-200"
                                }`}
                        >
                            {day}
                        </button>
                    );
                })}
            </div>
        );
    };

    return (
        <div className="flex flex-col h-screen w-full bg-gray-50 p-6 space-y-6 overflow-hidden">
            {/* Header */}
            <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight flex items-center gap-3">
                <CalendarDays className="text-orange-500 h-8 w-8" />
                <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                    Attendance Tracker
                </span>
                <span className="w-10 h-1 bg-orange-500 rounded-full"></span>
            </h1>

            {/* Calendar with month navigation */}
            <Card className="border border-orange-100 rounded-2xl shadow-lg">
                <CardContent className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                        <button
                            onClick={handlePrevMonth}
                            className="p-2 hover:bg-orange-100 rounded-full transition"
                        >
                            <ChevronLeft className="h-6 w-6 text-orange-600" />
                        </button>
                        <h2 className="text-xl font-bold text-gray-700 text-center">
                            {monthName} {year}
                        </h2>
                        <button
                            onClick={handleNextMonth}
                            className="p-2 hover:bg-orange-100 rounded-full transition"
                        >
                            <ChevronRight className="h-6 w-6 text-orange-600" />
                        </button>
                    </div>
                    {renderCalendar()}
                </CardContent>
            </Card>

            {/* Attendance Info */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 overflow-y-auto flex-1 pb-6">
                {/* 👥 Employees by Date */}
                <Card className="border border-orange-100 rounded-2xl shadow-md">
                    <CardContent className="p-6 space-y-4">
                        <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                            <CalendarDays className="h-5 w-5 text-orange-500" /> Logged-in Employees
                        </h3>
                        {selectedDate ? (
                            logsByDate[selectedDate]?.size > 0 ? (
                                <ul className="space-y-2">
                                    {employees
                                        .filter((emp) => logsByDate[selectedDate]?.has(emp.id))
                                        .map((emp) => (
                                            <li
                                                key={emp.id}
                                                className="p-3 bg-orange-50 text-orange-700 rounded-lg font-medium border border-orange-100"
                                            >
                                                {emp.name}
                                            </li>
                                        ))}
                                </ul>
                            ) : (
                                <p className="text-gray-500 italic">No one logged in this day.</p>
                            )
                        ) : (
                            <p className="text-gray-500 italic">Select a date to view attendance.</p>
                        )}
                    </CardContent>
                </Card>

                {/* 🧑‍💼 Dates by Employee */}
                <Card className="border border-orange-100 rounded-2xl shadow-md">
                    <CardContent className="p-6 space-y-4">
                        <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                            <User className="h-5 w-5 text-orange-500" /> Employee Logs
                        </h3>

                        {selectedUser ? (
  <div>
    <div className="flex justify-between items-center mb-3">
      <h4 className="font-semibold text-orange-600">{selectedUser.name}</h4>
      <button
        onClick={() => setSelectedUser(null)}
        className="p-1 hover:bg-orange-100 rounded-full transition"
      >
        <X className="h-5 w-5 text-gray-600" />
      </button>
    </div>

    {/* Layout with off-days column */}
    <div className="flex flex-col lg:flex-row gap-4">
      {/* 📅 Main Calendar (Mon–Sat) */}
      <div className="grid grid-cols-6 gap-2 flex-1 text-center">
        {Array.from({ length: daysInMonth }, (_, i) => {
          const day = i + 1;
          const dateKey = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
          const logged = logsByUser[selectedUser.id]?.has(dateKey);
          const dayOfWeek = new Date(year, month, day).getDay(); // 0=Sun

          if (dayOfWeek === 0) return null; // Skip Sundays from main grid

          return (
            <div
              key={day}
              className={`p-2 rounded-md text-xs font-medium border 
                ${logged
                  ? "bg-orange-100 text-orange-600 border-orange-200"
                  : "bg-gray-100 text-gray-400 border-gray-200"
                }`}
              title={logged ? "Logged In" : "Absent"}
            >
              {day}
            </div>
          );
        })}
      </div>

      {/* 🟥 Sundays Column */}
      <div className="w-[80px] flex flex-col gap-2">
        {Array.from({ length: daysInMonth }, (_, i) => {
          const day = i + 1;
          const date = new Date(year, month, day);
          const dayOfWeek = date.getDay();
          if (dayOfWeek !== 0) return null; // Only Sundays

          return (
            <div
              key={day}
              className="p-2 text-center rounded-md text-xs font-medium border bg-red-100 text-red-600 border-red-200"
              title="Sunday (Off Day)"
            >
              {day}
            </div>
          );
        })}
      </div>
    </div>
  </div>
) : (
  <ul className="space-y-2">
    {employees.map((emp) => (
      <li
        key={emp.id}
        onClick={() => handleUserClick(emp)}
        className="p-3 bg-white hover:bg-orange-50 text-gray-700 border rounded-lg cursor-pointer transition"
      >
        {emp.name}
      </li>
    ))}
  </ul>
)}

                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
