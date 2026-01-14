"use client";
import { useEffect, useState } from "react";
import { Card, CardContent } from "../card";
import { FolderOpen, Wallet, TrendingUp } from "lucide-react";
import { useRole } from "../../../lib/roleContext";

export default function AccountantProjects() {
  const { contextLoading, projects: userProjects } = useRole();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (contextLoading) return;

    const loadProjects = async () => {
      try {
        const activeProjects = userProjects
          .filter(
            (proj) =>
              proj.status !== "Cancelled" &&
              (proj.progress ?? 0) < 100
          )
          .map((proj) => ({
            id: proj.id,
            name: proj.name,
            progress: proj.progress ?? 0,
            paymentProgress: proj.paymentProgress ?? 0,
            status: proj.status,
          }));

        setProjects(activeProjects);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, [contextLoading, userProjects]);

  return (
    <div className="max-h-screen flex justify-center">
      <div className="w-full max-w-6xl flex flex-col">
        {/* Header */}
        <div className="mb-6 text-center">
          <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight">
            Accountant Project Summary
          </h1>
          <p className="text-gray-500 mt-2">
            Overview of all ongoing projects with their payment and work progress.
          </p>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto pr-2" style={{ maxHeight: "70vh" }}>
          {loading ? (
            <p className="text-center text-gray-500">Loading project data...</p>
          ) : projects.length === 0 ? (
            <div className="flex flex-col items-center justify-center text-gray-400 mt-10">
              <FolderOpen size={48} className="mb-3 text-orange-400" />
              <p className="text-lg font-medium">No active projects</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((proj) => (
                <Card
                  key={proj.id}
                  className="rounded-2xl shadow-md hover:shadow-lg transition-all border border-gray-100"
                >
                  <CardContent className="p-6">
                    {/* Title */}
                    <div className="flex items-center justify-between mb-3">
                      <h2 className="font-bold text-lg text-gray-800">{proj.name}</h2>
                    </div>

                    {/* Project Progress */}
                    <div className="mb-5">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2 text-gray-700 font-semibold">
                          <TrendingUp className="w-4 h-4 text-orange-500" />
                          Project Progress
                        </div>
                        <span className="text-sm text-orange-600 font-semibold">
                          {proj.progress}%
                        </span>
                      </div>
                      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full transition-all duration-500"
                          style={{ width: `${proj.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Payment Progress */}
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2 text-gray-700 font-semibold">
                          <Wallet className="w-4 h-4 text-yellow-500" />
                          Payment Progress
                        </div>
                        <span className="text-sm text-yellow-600 font-semibold">
                          {proj.paymentProgress}%
                        </span>
                      </div>
                      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-3 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full transition-all duration-500"
                          style={{ width: `${proj.paymentProgress}%` }}
                        ></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
