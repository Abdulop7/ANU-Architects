"use client";
import { useEffect, useState } from "react";
import { useRole } from "../../../lib/roleContext";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight, Grip } from "lucide-react";

function buildWeeks(dailyLevels, year, month) {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const totalDays = lastDay.getDate();

  const weeks = [];
  let week = [];

  let dayOfWeek = (firstDay.getDay() + 6) % 7; // Monday=0
  for (let i = 0; i < dayOfWeek; i++) {
    week.push(-1);
  }

  for (let day = 1; day <= totalDays; day++) {
    week.push(dailyLevels[day] ?? 0);
    if (week.length === 7) {
      weeks.push(week);
      week = [];
    }
  }

  if (week.length > 0) {
    while (week.length < 7) week.push(-1);
    weeks.push(week);
  }

  return weeks;
}

export default function ProductivityHeatmap() {
  const { contextLoading, workLog, users } = useRole();
  const [weeks, setWeeks] = useState([]);
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth());
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (contextLoading) return;

    async function fetchData() {
      try {
        if (!contextLoading && workLog && users) {
          const employees = users.filter(
            (u) => u.role !== "executive" && u.role !== "accountant"
          );
          const totalEmployees = employees.length || 1;

          const logsByDate = {};
          workLog.forEach((log) => {
            const d = new Date(log.workDate);
            if (d.getFullYear() === year && d.getMonth() === month) {
              const day = d.getDate();
              if (!logsByDate[day]) logsByDate[day] = new Set();
              logsByDate[day].add(log.employeeId);
            }
          });

          const dailyLevels = {};
          for (let day in logsByDate) {
            const completed = logsByDate[day].size;
            const level = Math.round((completed / totalEmployees) * 5);
            dailyLevels[parseInt(day)] = level;
          }

          const weeks = buildWeeks(dailyLevels, year, month);
          setWeeks(weeks);
        }
      } catch (err) {
        console.error("Error fetching heatmap data:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [contextLoading, year, month, workLog, users]);

  const monthName = new Date(year, month).toLocaleString("default", {
    month: "long",
  });

  const handlePrevMonth = () => {
    setMonth((prev) => {
      if (prev === 0) {
        setYear((y) => y - 1);
        return 11;
      }
      return prev - 1;
    });
  };

  const handleNextMonth = () => {
    setMonth((prev) => {
      if (prev === 11) {
        setYear((y) => y + 1);
        return 0;
      }
      return prev + 1;
    });
  };

  const handleDayClick = (day) => {
    if (!day || day === -1) return;
    const selectedDate = new Date(year, month, day);
    const formattedDate = `${selectedDate.getFullYear()}-${String(
      selectedDate.getMonth() + 1
    ).padStart(2, "0")}-${String(selectedDate.getDate()).padStart(2, "0")}`;
    router.push(`/dashboard/attendance?date=${formattedDate}`);
  };

  return (
    <div className="flex flex-col h-full border-l border-white/5 pl-8 lg:pl-12">
      <div className="flex justify-between items-end border-b border-white/5 pb-4 mb-8">
        <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-white">Heatmap</h2>
        <Grip size={16} className="text-white/20" />
      </div>

      <div className="flex flex-col flex-1 justify-center">
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={handlePrevMonth}
            className="p-2 transition-colors hover:text-accent group"
          >
            <ChevronLeft className="h-4 w-4 text-white/50 group-hover:text-accent transition-transform group-hover:-translate-x-1" />
          </button>
          <h3 className="text-xs uppercase tracking-[0.4em] font-bold text-white">
            {monthName} {year}
          </h3>
          <button
            onClick={handleNextMonth}
            className="p-2 transition-colors hover:text-accent group"
          >
            <ChevronRight className="h-4 w-4 text-white/50 group-hover:text-accent transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="flex flex-col items-center gap-3">
          {loading ? (
             [...Array(5)].map((_, weekIndex) => (
                <div key={weekIndex} className="flex items-center gap-6 animate-pulse">
                   <div className="font-serif text-[0.6rem] text-white/20 w-8 text-right hidden sm:block tracking-widest">W{weekIndex + 1}</div>
                   <div className="flex gap-2">
                       {[...Array(7)].map((_, i) => (
                          <div key={i} className="w-8 h-8 md:w-10 md:h-10 bg-[#111]"></div>
                       ))}
                   </div>
                </div>
             ))
          ) : weeks.length === 0 ? (
               <div className="py-10 text-[0.65rem] text-secondary tracking-widest uppercase">No Data Available</div>
          ) : (
            weeks.map((week, weekIndex) => (
              <div
                key={weekIndex}
                className="flex items-center gap-4 md:gap-6"
              >
                <span className="font-serif text-[0.6rem] text-white/20 w-8 text-right hidden sm:block tracking-widest uppercase">
                  W{weekIndex + 1}
                </span>
                <div className="flex gap-2">
                  {week.map((level, i) => {
                    const isSunday = i === 6;
                    const day =
                      weekIndex * 7 +
                      i +
                      1 -
                      ((new Date(year, month, 1).getDay() + 6) % 7);
                    const validDay =
                      day > 0 &&
                      day <= new Date(year, month + 1, 0).getDate();
                    return (
                      <div
                        key={i}
                        className="w-8 h-8 md:w-10 md:h-10 transition-transform hover:scale-105 cursor-pointer relative group"
                        style={{
                          backgroundColor: isSunday
                            ? "#050505"
                            : level === -1
                            ? "transparent"
                            : level === 0
                            ? "#111111"
                            : `rgba(255, 122, 0, ${0.15 + level * 0.17})`,
                          border:
                            level === -1 
                            ? "1px dashed rgba(255,255,255,0.05)" 
                            : isSunday ? "1px solid rgba(255,255,255,0.02)" : "1px solid transparent",
                        }}
                        onClick={() =>
                          !isSunday && level !== -1 && validDay
                            ? handleDayClick(day)
                            : null
                        }
                      >
                         {!isSunday && level !== -1 && validDay && (
                            <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-[0.55rem] font-bold px-2 py-1 uppercase tracking-widest pointer-events-none z-10 whitespace-nowrap">
                               Day {day} : Lvl {level}
                            </div>
                         )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
