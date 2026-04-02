"use client";
import { useEffect, useState } from "react";
import { History, Activity, FileCheck2, Bell } from "lucide-react";
import { useRole } from "../../../lib/roleContext";

export default function RecentActivity() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const { contextLoading, activity } = useRole();

  useEffect(() => {
    if (contextLoading) return;

    const fetchActivities = async () => {
      try {
        if (!contextLoading && activity) {
          const filtered = activity.filter((a) => a.type !== "ANNOUNCEMENT");
          // ✅ Sort by workDate ascending (oldest → newest)
          const sorted = [...filtered].sort(
            (a, b) => new Date(a.workDate) - new Date(b.workDate)
          );

          // ✅ Track last progress per (employee + task)
          const lastProgressMap = new Map();

          const withDiff = sorted.map((a) => {
            const key = `${a.employeeId}-${a.stepId}`;
            const prev = lastProgressMap.get(key) || 0;
            const diff = a.progress - prev;
            lastProgressMap.set(key, a.progress);
            return { ...a, diff };
          });

          // ✅ Sort back to newest first (for display)
          setActivities(withDiff.sort((a, b) => new Date(b.workDate) - new Date(a.workDate)));
        }
      } catch (err) {
        console.error("Error fetching activities:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchActivities();
  }, [contextLoading, activity]);

  // ✅ Decide which icon to show based on progress
  const getActivityIcon = (a) => {
    if (a.type === "ANNOUNCEMENT") {
      return <Bell className="w-5 h-5 text-white/50" />;
    } else if (a.type === "WORKLOG") {
      if (a.progress === 100) {
        return <FileCheck2 className="w-5 h-5 text-accent" />;
      } else {
        return <Activity className="w-5 h-5 text-white/30" />;
      }
    } else {
      return null;
    }
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-end border-b border-white/5 pb-4 mb-6">
        <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-white flex items-center gap-3">
          <History className="w-4 h-4 text-accent" />
          Recent Activity Ledger
        </h2>
        <span className="text-[0.65rem] text-secondary tracking-[0.2em] font-black uppercase">System Feed</span>
      </div>

      <div className="space-y-0 h-[400px] overflow-y-auto scrollbar-none pr-4">
        {loading ? (
          <div className="animate-pulse space-y-0">
             {[...Array(5)].map((_, i) => (
                <div key={i} className="flex gap-6 items-center py-5 border-b border-white/5">
                   <div className="w-5 h-5 bg-[#111]"></div>
                   <div className="flex-1 space-y-2">
                       <div className="h-3 w-1/4 bg-[#111]"></div>
                       <div className="h-2 w-1/2 bg-[#111]"></div>
                   </div>
                   <div className="h-2 w-16 bg-[#111]"></div>
                </div>
             ))}
          </div>
        ) : activities.length > 0 ? (
          activities.map((a, idx) => {
            const icon = getActivityIcon(a);
            return (
              <div
                key={idx}
                className="flex items-start gap-4 md:gap-8 py-5 border-b border-white/5 group hover:bg-[#111]/50 transition-colors"
              >
                {/* 🔸 Icon */}
                <div className="mt-1 transition-transform group-hover:scale-110">
                  {icon}
                </div>

                {/* 🔹 Content */}
                <div className="flex-1">
                  {a.type === "WORKLOG" ? (
                    <>
                      <p className="text-white font-bold tracking-widest uppercase text-xs mb-2">
                        {a.employee?.name || "Unnamed"}
                      </p>
                      <p className="text-sm text-secondary leading-relaxed">
                        {a.progress === 100 ? (
                          <>
                            <span className="font-bold text-accent">Completed</span>{" "}
                            <span className="text-white">{a.task?.title}</span>
                            {a.diff > 0 && (
                              <span className="text-accent text-xs font-bold ml-2">
                                (+{a.diff}%)
                              </span>
                            )}
                            {a.step?.name && <> &mdash; <span className="text-gray-400">{a.step.name}</span></>}
                            {a.projectName && <> // <span className="text-white">{a.projectName}</span></>}
                          </>
                        ) : (
                          <>
                            Updated progress to{" "}
                            <span className="font-bold text-white">{a.progress}%</span>
                            {a.diff > 0 && (
                              <span className="text-accent text-xs font-bold ml-2">
                                (+{a.diff}%)
                              </span>
                            )}{" "}
                            on{" "}
                            <span className="text-white">{a.task?.title}</span>
                            {a.step?.name && <> &mdash; <span className="text-gray-400">{a.step.name}</span></>}
                            {a.projectName && <> // <span className="text-white">{a.projectName}</span></>}
                          </>
                        )}
                      </p>
                      {a.notes && <p className="text-xs text-white/30 italic mt-2">"{a.notes}"</p>}
                    </>
                  ) : (
                    <>
                      <p className="text-white font-bold tracking-widest uppercase text-xs mb-2">
                        Assignment
                      </p>
                      <p className="text-sm text-secondary">
                        <span className="text-white font-bold">{a.project?.name || "Project"}</span>{" "}
                        assigned to{" "}
                        <span className="text-accent font-bold">{a.assignedTo?.name || "Employee"}</span>
                      </p>
                    </>
                  )}
                </div>

                {/* 🕒 Time */}
                <div className="text-right">
                   <div className="text-[0.65rem] text-secondary tracking-widest uppercase mb-1">
                     {new Date(a.workDate || a.createdAt).toLocaleDateString("en-US", {
                       day: "2-digit",
                       month: "short",
                     })}
                   </div>
                   <div className="text-[0.55rem] text-white/30 tracking-[0.2em] font-serif uppercase">
                     {new Date(a.workDate || a.createdAt).toLocaleTimeString("en-US", {
                       hour: "2-digit",
                       minute: "2-digit",
                       hour12: false,
                     })}
                   </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-white/20 py-20">
            <History size={48} className="mb-6 stroke-1" />
            <p className="text-[0.65rem] tracking-[0.3em] font-bold uppercase mb-2">
              No recent activity
            </p>
            <p className="text-xs font-serif text-white/30 italic">
              Awaiting system logs.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
