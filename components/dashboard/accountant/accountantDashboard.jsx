"use client";
import { useEffect, useState } from "react";
import { Card, CardContent } from "../card";
import { useRole } from "../../../lib/roleContext";
import { FolderOpen, History, Activity, FileCheck2, Bell, UserCheck } from "lucide-react";

export default function AccountantDashboard() {
  const { contextLoading, projects: userProjects, activity } = useRole();

  const [projects, setProjects] = useState([]);
  const [activities, setActivities] = useState([]);
  const [loadingProjects, setLoadingProjects] = useState(true);
  const [loadingActivity, setLoadingActivity] = useState(true);

  // ✅ Fetch Active Projects
  useEffect(() => {
    if (contextLoading) return;

    const loadProjects = async () => {
      try {
        const transformed = userProjects
          .filter(
            (proj) => (proj.paymentProgress ?? 0) < 100 && proj.status !== "Cancelled"
          )
          .map((proj) => ({
            name: proj.name,
            progress: proj.progress ?? 0,
            paymentProgress: proj.paymentProgress ?? 0
          }));

        setProjects(transformed);
      } catch (err) {
        console.error(err);
      } finally {
        setLoadingProjects(false);
      }
    };

    loadProjects();
  }, [contextLoading, userProjects]);

  // ✅ Fetch & Deduplicate ANNOUNCEMENTS by project
  useEffect(() => {
    if (contextLoading) return;

    const loadActivity = async () => {
      try {
        const filtered = activity.filter((a) => a.type === "ANNOUNCEMENT");

        // 🧠 Deduplicate by (projectId + assignedToId) — latest only
const uniqueByEmployeeAndProject = Object.values(
  filtered.reduce((acc, curr) => {
    const key = `${curr.projectId}-${curr.assignedToId}`;
    const existing = acc[key];

    // Keep the latest activity if duplicate
    if (!existing || new Date(curr.createdAt) > new Date(existing.createdAt)) {
      acc[key] = curr;
    }
    return acc;
  }, {})
);

setActivities(uniqueByEmployeeAndProject);

      } catch (err) {
        console.error("Error loading activity:", err);
      } finally {
        setLoadingActivity(false);
      }
    };

    loadActivity();
  }, [contextLoading, activity]);

  // ✅ Get Activity Icon
  const getActivityIcon = (a) => (
    <div className="p-2 bg-blue-100 text-blue-600 rounded-full shadow-sm">
      <Bell className="w-5 h-5" />
    </div>
  );

  return (
    <div className="p-6 space-y-6 h-screen overflow-y-hidden custom-scroll">
      {/* 🧾 Dashboard Title */}
      <div className="flex items-center justify-between p-4 rounded-2xl">
        <div className="flex items-center gap-3">
          <UserCheck className="w-7 h-7 text-orange-500" />
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Accountant Dashboard
            </h1>
          </div>
        </div>
      </div>

      {/* 📊 Projects & Activity */}
      <div className="grid grid-cols-1 gap-6">
        {/* 🧱 Active Projects */}
        <Card className="rounded-2xl shadow-md flex flex-col max-h-[40vh]">
          <CardContent className="p-6 flex flex-col h-full">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
              <FolderOpen className="w-5 h-5 text-orange-500" />
              Active Projects
            </h2>

            {loadingProjects ? (
              <p className="text-gray-500 text-center mt-4">
                Loading projects...
              </p>
            ) : projects.length === 0 ? (
              <div className="flex flex-col items-center justify-center text-gray-400 mt-10">
                <FolderOpen size={48} className="mb-3 text-orange-400" />
                <p className="text-lg font-medium">No active projects</p>
              </div>
            ) : (
              <div className="flex-1 overflow-y-auto space-y-4">
                {projects.map((project, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{project.name}</span>
                      <span className="text-sm text-gray-500">
                        {project.paymentProgress}%
                      </span>
                    </div>
                    <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-3 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full transition-all duration-500"
                        style={{ width: `${project.paymentProgress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* 🕒 Recent Activity */}
        <Card className="rounded-2xl shadow-md border border-gray-100">
          <CardContent className="p-6 flex flex-col max-h-[40vh]">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
              <History className="w-5 h-5 text-orange-500" />
              Recent Activity
            </h2>

            <div className="space-y-4 flex-1 overflow-y-auto pr-2 custom-scroll">
              {loadingActivity ? (
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
                  const icon = getActivityIcon(a);
                  return (
                    <div
                      key={idx}
                      className="flex items-start gap-3 bg-white border border-gray-100 rounded-xl p-3 shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      {icon}
                      <div className="flex-1">
                        <p className="text-gray-800 font-semibold">
                          Project Started:{" "}
                          <span className="text-orange-600">
                            {a.project?.name || "Unnamed Project"}
                          </span>
                        </p>
                      </div>
                      <span className="text-xs text-gray-400 whitespace-nowrap">
                        {new Date(a.createdAt).toLocaleDateString("en-US", {
                          weekday: "short",
                          day: "numeric",
                          month: "short",
                        })}{" "}
                        {new Date(a.createdAt).toLocaleTimeString("en-US", {
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
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
