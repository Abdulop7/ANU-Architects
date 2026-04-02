"use client";

import { useEffect, useState } from "react";
import { Loader2, CalendarDays, User, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useRole } from "@/lib/roleContext";
import { useRouter, useSearchParams } from "next/navigation";

export default function AttendancePage() {
    const searchParams = useSearchParams();
    const initialDate = searchParams.get("date");
    const { contextLoading, workLog, users, role } = useRole();
    const [selectedDate, setSelectedDate] = useState(initialDate || null);
    const [selectedUser, setSelectedUser] = useState(null);
    const [logsByDate, setLogsByDate] = useState({});
    const [logsByUser, setLogsByUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [employeeLogsForDate, setEmployeeLogsForDate] = useState([]);
    const [workLogWithDiff, setWorkLogWithDiff] = useState([]);
    const router = useRouter();

    useEffect(() => {
        if (contextLoading) return;

        if (role && role !== "executive") {
            router.replace("/dashboard");
        }

        const byDate = {};
        const byUser = {};
        const lastProgressMap = new Map();

        const sorted = [...workLog].sort((a, b) => new Date(a.workDate) - new Date(b.workDate));

        const withDiff = sorted.map((log) => {
            const key = `${log.employeeId}-${log.taskId}-${log.stepId}`;
            const prev = lastProgressMap.get(key) || 0;
            const diff = log.progress - prev;
            lastProgressMap.set(key, log.progress);

            const dateKey = new Date(log.workDate).toISOString().split("T")[0];
            if (!byDate[dateKey]) byDate[dateKey] = new Set();
            byDate[dateKey].add(log.employeeId);

            if (!byUser[log.employeeId]) byUser[log.employeeId] = new Set();
            byUser[log.employeeId].add(dateKey);

            return { ...log, diff };
        });

        setLogsByDate(byDate);
        setLogsByUser(byUser);
        setWorkLogWithDiff(withDiff);
        setLoading(false);
    }, [workLog, contextLoading, role, router]);

    const today = new Date();
    const [month, setMonth] = useState(today.getMonth());
    const [year, setYear] = useState(today.getFullYear());

    const [userMonth, setUserMonth] = useState(today.getMonth());
    const [userYear, setUserYear] = useState(today.getFullYear());

    const handleUserPrevMonth = () => {
        setUserMonth((prev) => (prev === 0 ? 11 : prev - 1));
        if (userMonth === 0) setUserYear((prev) => prev - 1);
    };

    const handleUserNextMonth = () => {
        setUserMonth((prev) => (prev === 11 ? 0 : prev + 1));
        if (userMonth === 11) setUserYear((prev) => prev + 1);
    };

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

        if (selectedDate) {
            const logs = workLogWithDiff.filter(
                (log) =>
                    log.employeeId === user.id &&
                    log.workDate.startsWith(selectedDate)
            );
            setEmployeeLogsForDate(logs);
        } else {
            setEmployeeLogsForDate([]);
        }
    };

    if (loading || contextLoading) {
        return (
            <div className="flex h-[50vh] w-full items-center justify-center">
                <Loader2 className="animate-spin text-white/20 h-10 w-10" />
            </div>
        );
    }

    const renderCalendar = () => {
        const blanks = Array.from({ length: (firstDay + 6) % 7 }, () => null);
        const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
        const allDays = [...blanks, ...days];

        return (
            <div className="grid grid-cols-7 gap-[1px] text-center border-t border-l border-white/5 bg-white/5">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
                    <div key={d} className="text-[0.6rem] font-bold tracking-widest text-white/40 uppercase py-3 border-b border-r border-white/5 bg-[#050505]">
                        {d}
                    </div>
                ))}

                {allDays.map((day, i) => {
                    if (!day) return <div key={i} className="bg-[#050505] border-r border-b border-white/5" />;
                    const dateKey = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
                    const isLogged = logsByDate[dateKey]?.size > 0;

                    return (
                        <button
                            key={i}
                            onClick={() => handleDateClick(day)}
                            className={`py-4 text-xs font-serif transition-colors border-r border-b border-white/5 bg-[#050505]
                                ${selectedDate === dateKey
                                    ? "bg-accent text-white"
                                    : isLogged
                                        ? "text-accent bg-[#111] hover:bg-accent/20"
                                        : "text-white/40 hover:bg-[#111]"
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
        <div className="w-full space-y-16 lg:space-y-24">
            {/* Header */}
            <header className="flex flex-col gap-4 border-b border-white/5 pb-8 mt-12">
                <h1 className="headline-2 text-white uppercase tracking-[0.2em] flex items-center gap-4">
                    <CalendarDays className="h-10 w-10 text-accent" />
                    Attendance <span className="text-accent">Ledger</span>
                </h1>
                <p className="text-secondary text-sm tracking-widest uppercase">Operative Tracking & Operations</p>
                <div className="w-24 h-1 bg-accent mt-4"></div>
            </header>

            {/* Calendar Block */}
            <div className="w-full max-w-4xl border-b border-white/5 pb-16">
                <div className="flex items-center justify-between mb-8">
                     <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-white">Grid View</h2>
                     <div className="flex items-center gap-6">
                        <button
                            onClick={handlePrevMonth}
                            className="text-white/40 hover:text-accent transition-colors"
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </button>
                        <h2 className="text-xs font-bold tracking-[0.3em] text-white uppercase">
                            {monthName} {year}
                        </h2>
                        <button
                            onClick={handleNextMonth}
                            className="text-white/40 hover:text-accent transition-colors"
                        >
                            <ChevronRight className="h-5 w-5" />
                        </button>
                     </div>
                </div>
                {renderCalendar()}
            </div>

            {/* Attendance Info */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 pb-12 items-start relative">
                
                {/* Employees by Date */}
                <div className="w-full sticky top-8">
                     <div className="flex justify-between items-end border-b border-white/5 pb-4 mb-8">
                       <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-white flex items-center gap-3">
                           <User className="h-4 w-4 text-accent" /> Operations Roster
                       </h3>
                     </div>

                    <div className="space-y-4">
                        {selectedDate ? (
                            logsByDate[selectedDate]?.size > 0 ? (
                                <ul className="space-y-0 border-t border-white/5">
                                    {employees
                                        .filter((emp) => logsByDate[selectedDate]?.has(emp.id))
                                        .map((emp) => (
                                            <li
                                                key={emp.id}
                                                onClick={() => handleUserClick(emp)}
                                                className={`p-4 font-bold text-xs tracking-widest uppercase cursor-pointer border-b border-white/5 transition-colors ${selectedUser?.id === emp.id ? "bg-accent/20 text-accent" : "text-white/60 hover:bg-[#111] hover:text-white"}`}
                                            >
                                                {emp.name}
                                            </li>
                                        ))}
                                </ul>
                            ) : (
                                <p className="text-[0.65rem] tracking-[0.2em] font-serif uppercase text-white/30 italic">System idle: No operations logged.</p>
                            )
                        ) : (
                            <p className="text-[0.65rem] tracking-[0.2em] font-serif uppercase text-white/30 italic">Select grid date to inspect operations.</p>
                        )}
                        
                        {selectedUser && employeeLogsForDate.length > 0 && (
                            <div className="mt-8 border-t border-white/5 pt-8">
                                <h5 className="font-bold text-sm text-accent uppercase tracking-widest mb-6">
                                    Worklog Manifest — {selectedDate}
                                </h5>

                                <div className="space-y-0">
                                    {employeeLogsForDate.map((log, idx) => {
                                        const isCustom = !log.task;

                                        if (isCustom) {
                                            return (
                                                <div key={idx} className="pb-6 border-b border-white/5 group pt-4">
                                                    <div className="flex justify-between items-start mb-2">
                                                        <h6 className="text-[0.7rem] font-bold text-white tracking-widest uppercase">
                                                            {log.title || "Custom Operation"}
                                                        </h6>
                                                        <span className="text-[0.55rem] text-accent tracking-[0.2em] font-black uppercase">
                                                            Custom Subroutine
                                                        </span>
                                                    </div>
                                                    <p className="text-[0.65rem] text-secondary font-serif leading-relaxed mt-2 uppercase tracking-wide">
                                                        {log.description || "—"}
                                                    </p>
                                                    {log.notes && (
                                                        <p className="text-[0.55rem] italic text-white/30 mt-3 uppercase tracking-widest">
                                                            [{typeof log.notes === "object" ? JSON.stringify(log.notes) : log.notes}]
                                                        </p>
                                                    )}
                                                </div>
                                            );
                                        }

                                        return (
                                            <div key={idx} className="pb-6 border-b border-white/5 pt-4 group">
                                                <div className="flex justify-between items-start mb-4">
                                                    <div className="w-2/3">
                                                        <h6 className="text-[0.7rem] font-bold text-white tracking-widest uppercase leading-relaxed">
                                                            {log.task?.title || "Unknown Task"}
                                                        </h6>
                                                        <p className="text-[0.55rem] text-secondary tracking-[0.2em] font-serif uppercase mt-1">
                                                            Project // <span className="text-white">{log.task?.subcategory?.category?.project?.name || "—"}</span>
                                                        </p>
                                                    </div>
                                                    <div className="text-right">
                                                        <div className="text-[0.55rem] text-secondary tracking-[0.2em] font-serif uppercase">Phase</div>
                                                        <div className="text-[0.6rem] font-black text-white tracking-widest uppercase mt-1">{log.step?.name || "—"}</div>
                                                    </div>
                                                </div>

                                                <div className="flex justify-between items-center text-[0.55rem] tracking-[0.2em] font-bold uppercase mb-2">
                                                   <span className="text-secondary">Progress Increment</span>
                                                   <span className="text-accent flex items-center gap-2">
                                                       {Math.round(log.progress || 0)}%
                                                       {log.diff > 0 && <span className="text-green-500">(+{log.diff}%)</span>}
                                                   </span>
                                                </div>
                                                <div className="w-full h-[2px] bg-white/5 overflow-hidden">
                                                    <div className="h-full bg-accent transition-all duration-1000" style={{ width: `${log.progress || 0}%` }}></div>
                                                </div>

                                                {log.notes && (
                                                    <p className="text-[0.55rem] italic text-white/30 tracking-widest uppercase mt-4">
                                                        [{typeof log.notes === "object" ? JSON.stringify(log.notes) : log.notes}]
                                                    </p>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Dates by Employee */}
                <div className="w-full border-l lg:border-white/5 lg:pl-16">
                     <div className="flex justify-between items-end border-b border-white/5 pb-4 mb-8">
                       <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-white flex items-center gap-3">
                           <User className="h-4 w-4 text-accent" /> Operative Analysis
                       </h3>
                     </div>

                    <div className="space-y-4">
                        {selectedUser ? (
                            <div>
                                <div className="flex justify-between items-center mb-8">
                                    <h4 className="text-sm font-bold uppercase tracking-widest text-accent">{selectedUser.name}</h4>
                                    <button
                                        onClick={() => setSelectedUser(null)}
                                        className="text-white/40 hover:text-white transition-colors"
                                    >
                                        <X className="h-5 w-5" />
                                    </button>
                                </div>

                                {/* Month navigation for user calendar */}
                                <div className="flex items-center justify-between mb-6">
                                    <button onClick={handleUserPrevMonth} className="text-white/40 hover:text-accent transition-colors">
                                        <ChevronLeft className="h-4 w-4" />
                                    </button>
                                    <h4 className="text-[0.65rem] font-bold tracking-[0.3em] uppercase text-white">
                                        {new Date(userYear, userMonth).toLocaleString("default", { month: "long" })} {userYear}
                                    </h4>
                                    <button onClick={handleUserNextMonth} className="text-white/40 hover:text-accent transition-colors">
                                        <ChevronRight className="h-4 w-4" />
                                    </button>
                                </div>

                                <div className="flex gap-4 items-start">
                                    {/* Main Calendar (Mon–Sat) */}
                                    <div className="grid grid-cols-6 gap-[1px] flex-1 text-center bg-white/5 border-t border-l border-white/5">
                                        {Array.from({ length: new Date(userYear, userMonth + 1, 0).getDate() }, (_, i) => {
                                            const day = i + 1;
                                            const dateKey = `${userYear}-${String(userMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
                                            const logged = logsByUser[selectedUser.id]?.has(dateKey);
                                            const dayOfWeek = new Date(userYear, userMonth, day).getDay();

                                            if (dayOfWeek === 0) return null;

                                            return (
                                                <button
                                                    key={day}
                                                    onClick={() => setSelectedDate(dateKey)}
                                                    className={`py-3 text-[0.65rem] font-serif transition-colors border-b border-r border-white/5
                                                        ${logged
                                                            ? "bg-accent/20 text-accent font-bold"
                                                            : "bg-[#050505] text-white/30 hover:bg-[#111]"
                                                        } ${selectedDate === dateKey ? "bg-accent text-white" : ""}`}
                                                >
                                                    {day}
                                                </button>
                                            );
                                        })}
                                    </div>

                                    {/* Sundays Column */}
                                    <div className="w-12 shrink-0 flex flex-col gap-[1px] bg-white/5 border-t border-l border-white/5">
                                        {Array.from({ length: new Date(userYear, userMonth + 1, 0).getDate() }, (_, i) => {
                                            const day = i + 1;
                                            const date = new Date(userYear, userMonth, day);
                                            if (date.getDay() !== 0) return null;

                                            return (
                                                <div key={day} className="py-3 text-center text-[0.65rem] font-bold bg-[#111] text-white/10 border-b border-r border-white/5">
                                                    {day}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Worklog Notes for Selected Day */}
                                {selectedDate && (
                                    <div className="mt-8 border-t border-white/5 pt-8">
                                        <h5 className="font-bold text-[0.65rem] text-white uppercase tracking-widest mb-6">
                                            Log Breakdown — {selectedDate}
                                        </h5>

                                        {workLogWithDiff.filter(log => log.employeeId === selectedUser.id && log.workDate.startsWith(selectedDate)).length === 0 ? (
                                            <p className="text-[0.6rem] tracking-[0.2em] font-serif uppercase text-white/30 italic pb-8">No terminal input detected.</p>
                                        ) : (
                                            <div className="space-y-0">
                                            {workLogWithDiff
                                                .filter(log => log.employeeId === selectedUser.id && log.workDate.startsWith(selectedDate))
                                                .map((log, idx) => {
                                                    const isCustom = !log.task;

                                                    if (isCustom) {
                                                        return (
                                                            <div key={idx} className="pb-6 border-b border-white/5 pt-4">
                                                                <div className="flex justify-between items-start mb-2">
                                                                    <h6 className="text-[0.7rem] font-bold text-white tracking-widest uppercase">
                                                                        {log.title || "Custom Log"}
                                                                    </h6>
                                                                    <span className="text-[0.55rem] text-accent tracking-[0.2em] font-black uppercase">Custom</span>
                                                                </div>
                                                                <p className="text-[0.65rem] text-secondary font-serif leading-relaxed mt-2 uppercase tracking-wide">
                                                                    {log.description || "—"}
                                                                </p>
                                                                {log.notes && (
                                                                    <p className="text-[0.55rem] italic text-white/30 mt-3 uppercase tracking-widest">
                                                                        [{typeof log.notes === "object" ? JSON.stringify(log.notes) : log.notes}]
                                                                    </p>
                                                                )}
                                                            </div>
                                                        );
                                                    }

                                                    return (
                                                        <div key={idx} className="pb-6 border-b border-white/5 pt-4">
                                                            <h6 className="text-[0.7rem] font-bold text-white tracking-widest uppercase leading-relaxed mb-2">
                                                                {log.task?.title || "Unknown Task"}
                                                            </h6>
                                                            <div className="flex justify-between items-center text-[0.55rem] text-secondary tracking-[0.2em] uppercase mb-4">
                                                                <p className="font-serif">Project // <span className="text-white">{log.task?.subcategory?.category?.project?.name || "—"}</span></p>
                                                                <p className="text-accent font-bold">Phase // <span className="text-white">{log.step?.name || "—"}</span></p>
                                                            </div>

                                                            <div className="flex justify-between items-center text-[0.55rem] tracking-[0.2em] font-bold uppercase mb-2">
                                                                <span className="text-secondary">Progress</span>
                                                                <span className="text-white/60 flex items-center gap-2">
                                                                    {Math.round(log.progress || 0)}%
                                                                    {log.diff > 0 && <span className="text-green-500">(+{log.diff}%)</span>}
                                                                </span>
                                                            </div>
                                                            <div className="w-full h-1 bg-white/5 overflow-hidden">
                                                                <div className="h-full bg-white/40 transition-all duration-1000" style={{ width: `${log.progress || 0}%` }}></div>
                                                            </div>
                                                            
                                                            {log.notes && (
                                                                <p className="text-[0.55rem] italic text-white/30 tracking-widest uppercase mt-4">
                                                                    [{typeof log.notes === "object" ? JSON.stringify(log.notes) : log.notes}]
                                                                </p>
                                                            )}
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        ) : (
                             <ul className="space-y-0 border-t border-white/5">
                                 {employees.map((emp) => (
                                     <li
                                         key={emp.id}
                                         onClick={() => handleUserClick(emp)}
                                         className="p-4 font-bold text-xs tracking-widest uppercase text-white/60 cursor-pointer border-b border-white/5 transition-colors hover:bg-[#111] hover:text-white"
                                     >
                                         {emp.name}
                                     </li>
                                 ))}
                             </ul>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
