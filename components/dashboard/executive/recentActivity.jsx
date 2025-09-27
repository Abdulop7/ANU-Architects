"use client";
import { useEffect, useState } from "react";
import { CheckCircle } from "lucide-react";
import { Card, CardContent } from "../card";

export default function RecentActivity() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const res = await fetch("/api/activity?limit=10");
        const data = await res.json();
        setActivities(data);
      } catch (err) {
        console.error("Error fetching activities:", err);
      }
    };
    fetchActivities();
  }, []);

  return (
    <Card className="rounded-2xl shadow-md">
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>

        {/* ✅ Fixed height + scrollable */}
        <div className="space-y-4 h-[30vh] overflow-y-auto pr-2">
          {activities.length > 0 ? (
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
            <p className="text-gray-500">No recent activity</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
