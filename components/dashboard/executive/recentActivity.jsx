"use client";
import { useEffect, useState } from "react";
import { CheckCircle, History, Activity, FileCheck2, Bell } from "lucide-react";
import { Card, CardContent } from "../card";
import { useRole } from "../../../lib/roleContext";

export default function RecentActivity() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const { contextLoading, activity } = useRole();

  useEffect(() => {
    if (contextLoading) return;

    const fetchActivities = async () => {
      try {
        if (!contextLoading) {
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
          console.log(withDiff);

        }
      } catch (err) {
        console.error("Error fetching activities:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchActivities();
  }, [contextLoading]);

  // ✅ Decide which icon to show based on progress
  const getActivityIcon = (a) => {
    if (a.type === "ANNOUNCEMENT") {
      // ✅ Assignment icon
      return (
        <div className="p-2 bg-blue-100 text-blue-600 rounded-full shadow-sm">
          <Bell className="w-5 h-5" />
        </div>
      );
    } else if (a.type === "WORKLOG") {
      if (a.progress === 100) {
        return (
          <div className="p-2 bg-green-100 text-green-600 rounded-full shadow-sm">
            <FileCheck2 className="w-5 h-5" />
          </div>
        );
      } else {
        return (
          <div className="p-2 bg-orange-100 text-orange-500 rounded-full shadow-sm">
            <Activity className="w-5 h-5 animate-pulse" />
          </div>
        );
      }
    } else {
      // No icon for general announcements
      return null;
    }
  };

  return (
    <Card className="rounded-2xl shadow-md border border-gray-100">
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
          <History className="w-5 h-5 text-orange-500" />
          Recent Activity
        </h2>

        <div className="space-y-4 h-[30vh] overflow-y-auto pr-2 custom-scroll">
          {loading ? (
            [...Array(4)].map((_, i) => (
              <div
                key={i}
                className="flex items-start gap-3 animate-pulse bg-gray-50 p-3 rounded-xl"
              >
                <div className="p-2 rounded-full bg-orange-200 w-8 h-8"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/3"></div>
                </div>
              </div>
            ))
          ) : activities.length > 0 ? (
            activities.map((a, idx) => {
              const icon = getActivityIcon(a); // ✅ store once
              return (
                <div
                  key={idx}
                  className="flex items-start gap-3 bg-white border border-gray-100 rounded-xl p-3 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  {/* 🔸 Icon */}
                  {icon}

                  {/* 🔹 Content */}
                  <div className="flex-1">
                    {a.type === "WORKLOG" ? (
                      <>
                        <p className="text-gray-800 font-medium">{a.employee?.name || "Unnamed"}</p>
                        <p className="text-sm text-gray-600">
                          {a.progress === 100 ? (
                            <>
                              <span className="font-semibold text-green-600">Completed</span>{" "}
                              <span className="text-gray-700">{a.task?.title}</span>
                              {a.diff > 0 && (
                                <span className="text-green-600 text-xs font-semibold ml-1">
                                  (+{a.diff}%)
                                </span>
                              )}

                              {a.step?.name && <> — <span className="italic text-gray-700">{a.step.name}</span></>}
                              {a.projectName && <> in <span className="font-medium text-gray-800">{a.projectName}</span></>}
                            </>
                          ) : (
                            <>
                              Updated progress to{" "}
                              <span className="font-semibold text-orange-600">{a.progress}%</span>
                              {a.diff > 0 && (
                                <span className="text-green-600 text-xs font-semibold ml-1">
                                  (+{a.diff}%)
                                </span>
                              )}{" "}
                              on{" "}

                              <span className="font-semibold text-gray-800">{a.task?.title}</span>
                              {a.step?.name && <> — <span className="italic text-gray-700">{a.step.name}</span></>}
                              {a.projectName && <> in <span className="font-medium text-gray-800">{a.projectName}</span></>}
                            </>
                          )}
                        </p>
                        {a.notes && <p className="text-xs text-gray-500 italic mt-1">“{a.notes}”</p>}
                      </>
                    ) : (
                      <>
                        <p className="text-gray-800 font-semibold text-lg mb-1 flex items-center gap-2">
                          Announcement
                        </p>

                        <p className="text-sm text-gray-700">
                          <span className="font-medium text-gray-900">{a.project?.name || "Project"}</span>{" "}
                          <span className="text-gray-500">assigned to</span>{" "}
                          <span className="font-semibold text-orange-600">{a.assignedTo?.name || "Employee"}</span>
                        </p>
                      </>

                    )}
                  </div>

                  {/* 🕒 Time */}
                  <span className="text-xs text-gray-400 whitespace-nowrap">
                    {new Date(a.workDate || a.createdAt).toLocaleDateString("en-US", {
                      weekday: "short",
                      day: "numeric",
                      month: "short",
                    })}{" "}
                    {new Date(a.workDate || a.createdAt).toLocaleTimeString("en-US", {
                      hour: "numeric",
                      minute: "2-digit",
                      hour12: true,
                    })}
                  </span>
                </div>
              );
            })
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-gray-400 mt-6">
              <div className="p-4 rounded-full bg-orange-100 text-orange-500 shadow-sm">
                <History size={36} />
              </div>
              <p className="mt-3 text-lg font-medium text-gray-600">
                No recent activity
              </p>
              <p className="text-sm text-gray-500 italic">
                Once employees log tasks, they’ll appear here.
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
