"use client";
import { useEffect, useState } from "react";
import { Card, CardContent } from "../card";

function buildWeeks(dailyLevels, year, month) {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const totalDays = lastDay.getDate();

  const weeks= [];
  let week= [];

  let dayOfWeek = (firstDay.getDay() + 6) % 7; // Monday=0
  for (let i = 0; i < dayOfWeek; i++) {
    week.push(-1);
  }

  for (let day = 1; day <= totalDays; day++) {
    week.push(dailyLevels[day] ?? 0); // default 0 if no logs
    if (week.length === 7) {
      weeks.push(week);
      week = [];
    }
  }

  if (week.length > 0) {
    while (week.length < 7) {
      week.push(-1);
    }
    weeks.push(week);
  }

  return weeks;
}

export default function ProductivityHeatmap() {
  const [weeks, setWeeks] = useState([]);
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth());

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/work-logs");
      const data = await res.json();

      const now = new Date();
      const year = now.getFullYear();
      const month = now.getMonth();

      setYear(year);
      setMonth(month);

      // Group logs by date
      const logsByDate = {};
      data.forEach((log) => {
        console.log(log);
        
        const d = new Date(log.workDate);
        if (d.getFullYear() === year && d.getMonth() === month) {
          const day = d.getDate();
          if (!logsByDate[day]) logsByDate[day] = new Set();
          logsByDate[day].add(log.employeeId);
        }
      });

      const totalEmployees = 15; // static, or fetch from API
      const dailyLevels= {};

      for (let day in logsByDate) {
        const completed = logsByDate[day].size;
        const level = Math.round((completed / totalEmployees) * 5);
        dailyLevels[parseInt(day)] = level;
      }

      const weeks = buildWeeks(dailyLevels, year, month);
      setWeeks(weeks);
    }

    fetchData();
  }, []);

  const monthName = new Date(year, month).toLocaleString("default", {
    month: "long",
  });

  return (
    <Card className="rounded-2xl shadow-lg border border-orange-100">
      <CardContent className="p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
            Employee Productivity Heatmap
          </span>
          <span className="w-6 h-1 bg-orange-500 rounded-full"></span>
        </h2>

        <h3 className="text-lg font-semibold text-gray-700 mb-6 text-center">
          {monthName} {year}
        </h3>

        <div className="flex flex-col items-center gap-4">
          {weeks.map((week, weekIndex) => (
            <div
              key={weekIndex}
              className="flex items-center justify-center gap-4"
            >
              <span className="w-14 text-xs text-gray-500 font-medium text-right">
                Week {weekIndex + 1}
              </span>

              <div className="grid grid-cols-7 gap-2">
                {week.map((level, i) => {
                  const isSunday = i === 6;
                  return (
                    <div
                      key={i}
                      className="w-7 h-7 rounded-md transition-transform hover:scale-110"
                      style={{
                        backgroundColor: isSunday
                          ? "#d1d5db"
                          : level === -1
                          ? "transparent"
                          : level === 0
                          ? "#f3f4f6"
                          : `rgba(249, 115, 22, ${0.25 + level * 0.15})`,
                        border: level === -1 ? "1px dashed #e5e7eb" : "none",
                      }}
                      title={
                        isSunday
                          ? "Sunday (Off day)"
                          : level !== -1
                          ? `Productivity Level: ${level}`
                          : ""
                      }
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 w-full">
          <div className="flex justify-between items-center text-sm text-gray-500">
            <span>Low</span>
            <div className="flex flex-1 justify-center gap-1">
              {[0, 1, 2, 3, 4, 5].map((level) => (
                <div
                  key={level}
                  className="w-8 h-3 rounded"
                  style={{
                    backgroundColor:
                      level === 0
                        ? "#f3f4f6"
                        : `rgba(249, 115, 22, ${0.25 + level * 0.15})`,
                  }}
                />
              ))}
            </div>
            <span>High</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
