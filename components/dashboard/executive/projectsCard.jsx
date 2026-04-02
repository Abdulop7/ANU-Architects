"use client";
import { useEffect, useState } from "react";
import { FolderOpen } from "lucide-react";
import { useRole } from "../../../lib/roleContext";

export default function ProjectsCard() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const { contextLoading, projects: userProjects } = useRole();

  useEffect(() => {
    if (contextLoading) return;

    const fetchProjects = async () => {
      try {
        if (!contextLoading && userProjects) {
          const transformed = userProjects
            .filter((proj) => (proj.progress ?? 0) < 100 && proj.status !== "Cancelled")
            .map((proj) => ({
              name: proj.name,
              progress: proj.progress ?? 0,
            }));

          setProjects(transformed);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [contextLoading, userProjects]);

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-end border-b border-white/5 pb-4 mb-6">
        <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-white">Active Projects</h2>
        <span className="text-[0.65rem] text-accent tracking-[0.2em] font-black uppercase">Phase Index</span>
      </div>

      {loading ? (
        <div className="animate-pulse space-y-6 mt-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex flex-col gap-2">
               <div className="flex justify-between">
                  <div className="h-3 w-1/3 bg-[#111]"></div>
                  <div className="h-3 w-8 bg-[#111]"></div>
               </div>
               <div className="w-full h-1 bg-[#111]"></div>
            </div>
          ))}
        </div>
      ) : projects.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-secondary/70 py-16">
          <FolderOpen size={48} className="mb-4 text-white/5 stroke-1" />
          <p className="text-[0.7rem] uppercase tracking-widest font-bold">No active projects</p>
        </div>
      ) : (
        <div className="flex-1 overflow-y-auto space-y-6 scrollbar-none pb-4">
          {projects.map((project, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="flex justify-between items-end mb-2">
                <span className="font-bold text-sm tracking-wide text-gray-100 uppercase transition-colors group-hover:text-white">
                  {project.name}
                </span>
                <span className="text-xl font-bold font-serif text-accent">{project.progress}%</span>
              </div>
              <div className="w-full h-1 bg-white/5 overflow-hidden">
                <div
                  className="h-1 bg-accent transition-all duration-1000 ease-out"
                  style={{ width: `${project.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
