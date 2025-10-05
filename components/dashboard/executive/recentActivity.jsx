"use client";
import { useEffect, useState } from "react";
import { CheckCircle, History } from "lucide-react";
import { Card, CardContent } from "../card";
import { useRole } from "../../../lib/roleContext";

export default function RecentActivity() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const { contextLoading, activity} = useRole();


  useEffect(() => {
    if (contextLoading ) return;

    const fetchActivities = async () => {
      try {
        // const res = await fetch("/api/activity?limit=10");
        // const data = await res.json();
        if(!contextLoading){
        setActivities(activity);
        }
      } catch (err) {
        console.error("Error fetching activities:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchActivities();
  }, [contextLoading]);

  return (
    <Card className="rounded-2xl shadow-md">
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>

        {/* ✅ Fixed height + scrollable */}
        <div className="space-y-4 h-[30vh] overflow-y-auto pr-2">
          {
            loading ? (
              // 🔄 Loading skeleton
              [...Array(4)].map((_, i) => (
                <div key={i} className="flex items-start gap-3 animate-pulse">
                  <div className="p-2 rounded-full bg-orange-200 w-8 h-8"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/3"></div>
                  </div>
                </div>
              ))
            ) :
              activities.length > 0 ? (
                activities.map((log) => (
                  <div key={log.id} className="flex items-start gap-3">
                    <div className="p-2 rounded-full bg-orange-100 text-orange-600">
                      <CheckCircle size={18} />
                    </div>
                    <div>
                      <p className="text-gray-800">
                        <span className="font-semibold">{log.employee.name}</span>{" "}
                        logged <span className="font-semibold">{log.hours}h</span>{" "}
                        on <span className="font-semibold">{log.task.title}</span>
                      </p>
                      <p className="text-sm text-gray-600 italic">{log.notes}</p>
                      <p className="text-xs text-gray-400">
                        {(() => {
                          const d = new Date(log.workDate);
                          const weekday = d.toLocaleString("en-US", { weekday: "short" }); // Mon
                          const day = d.getDate(); // 5
                          const month = d.toLocaleString("en-US", { month: "short" }); // Sep
                          const time = d.toLocaleString("en-US", {
                            hour: "numeric",
                            minute: "2-digit",
                            hour12: true,
                          }); // 3:45 PM

                          return `${weekday} ${day} ${month}, ${time}`;
                        })()}
                      </p>

                    </div>
                  </div>
                ))
              ) : (
                // 🚫 No activity state
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
