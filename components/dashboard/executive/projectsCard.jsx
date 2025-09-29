"use client";
import { useEffect, useState } from "react";
import { Card, CardContent } from "../card";

export default function ProjectsCard() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/api/projects");
        if (!res.ok) throw new Error("Failed to fetch projects");
        const data = await res.json();

        const transformed = data
          .filter((proj) => (proj.progress ?? 0) < 100)
          .map((proj) => ({
            name: proj.name,
            progress: proj.progress ?? 0,
          }));

        setProjects(transformed);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <Card className="rounded-2xl shadow-md flex flex-col h-[40vh]">
  <CardContent className="p-6 flex flex-col h-full">
    <h2 className="text-xl font-semibold mb-4">Active Projects</h2>

    {loading ? (
      <p className="text-gray-500 text-center mt-4">Loading projects...</p>
    ) : (
      <div className="flex-1 overflow-y-auto space-y-4">
        {projects.map((project, idx) => (
          <div key={idx}>
            <div className="flex justify-between mb-1">
              <span className="font-medium">{project.name}</span>
              <span className="text-sm text-gray-500">{project.progress}%</span>
            </div>
            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full transition-all duration-500"
                style={{ width: `${project.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    )}
  </CardContent>
</Card>

  );
}
