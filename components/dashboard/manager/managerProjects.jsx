"use client";

import { useEffect, useState } from "react";
import { FolderOpen } from "lucide-react";
import { useRole } from "../../../lib/roleContext";

export default function ManagerProjects() {
  const { role, id: managerId, contextLoading, projects: userProjects } = useRole();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (contextLoading) return;

    const getProjects = async () => {
      try {
        if (!contextLoading && userProjects) {
          const transformed = userProjects
            .map((proj) => {
              const teamSet = new Set();
              let earliestDeadline = null;

              const managerTasks = [];

              proj.categories?.forEach((cat) => {
                cat.subcats?.forEach((sub) => {
                  sub.tasks?.forEach((task) => {
                    if (task.assignedTo?.managerId === managerId) {
                      managerTasks.push(task);

                      if (task.assignedTo?.name) teamSet.add(task.assignedTo.name);

                      if (task.deadline) {
                        const taskDeadline = new Date(task.deadline);
                        if (!earliestDeadline || taskDeadline < earliestDeadline) {
                          earliestDeadline = taskDeadline;
                        }
                      }
                    }
                  });
                });
              });

              if (managerTasks.length === 0) return null;

              // ✅ Skip project if all manager tasks are completed
              const allCompleted = managerTasks.every(
                (task) => (task.progress ?? 0) >= 100
              );
              if (allCompleted) return null;

              const avgProgress =
                managerTasks.reduce((sum, t) => sum + (t.progress ?? 0), 0) /
                managerTasks.length;

              return {
                id: proj.id,
                name: proj.name,
                deadline: earliestDeadline
                  ? earliestDeadline.toISOString().split("T")[0]
                  : null,
                progress: Math.round(avgProgress),
                team: Array.from(teamSet),
                tasks: managerTasks,
              };
            })
            .filter(Boolean);

          setProjects(transformed);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (role === "manager") {
      getProjects();
    }
  }, [role, managerId, contextLoading, userProjects]);

  return (
    <div className="w-full space-y-16 lg:space-y-24">
      {/* Page Header */}
      <header className="flex flex-col gap-4 border-b border-white/5 pb-8 mt-12">
        <h1 className="headline-2 text-white uppercase tracking-[0.2em]">
          Manager <span className="text-accent">Project Tasks</span>
        </h1>
        <p className="text-secondary text-sm tracking-widest uppercase">Ongoing tasks and deployments</p>
        <div className="w-24 h-1 bg-accent mt-4"></div>
      </header>

      {/* Scrollable Projects */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 overflow-y-auto pr-2 pb-12">
        {loading ? (
          <div className="col-span-full animate-pulse space-y-10">
             {[...Array(4)].map((_, i) => (
                <div key={i} className="flex flex-col gap-4 border-b border-white/5 pb-6">
                    <div className="h-4 w-1/3 bg-[#111]"></div>
                    <div className="h-2 w-full bg-[#111]"></div>
                    <div className="h-10 w-full bg-[#111]"></div>
                </div>
             ))}
          </div>
        ) : projects.length === 0 ? (
          <div className="col-span-full py-20 border-y border-white/5 text-center flex flex-col items-center">
            <FolderOpen size={48} className="mb-4 text-white/5 stroke-1" />
             <p className="text-[0.7rem] font-bold uppercase tracking-[0.3em] text-white/20">No active projects</p>
          </div>
        ) : (
          projects.map((proj) => (
            <div key={proj.id} className="group transition-colors relative pb-8 border-b border-white/5">
              {/* Project Title & Deadline */}
              <div className="flex justify-between items-end mb-4">
                <span className="font-bold text-white uppercase tracking-widest text-sm">
                  {proj.name}
                </span>
                {proj.deadline && (
                  <div className="text-right">
                    <div className="text-[0.55rem] text-secondary tracking-[0.2em] uppercase font-serif">Deadline</div>
                    <div className={`text-[0.65rem] font-black tracking-widest uppercase ${new Date(proj.deadline) < new Date() ? "text-red-500" : "text-white"}`}>
                      {new Date(proj.deadline).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Progress Bar */}
              <div className="w-full h-1 bg-white/5 overflow-hidden mb-3">
                <div
                  className="h-1 bg-accent transition-all duration-1000"
                  style={{ width: `${proj.progress}%` }}
                />
              </div>

              {/* Progress % */}
              <div className="mb-6 flex justify-between items-center text-[0.65rem] tracking-[0.2em] uppercase">
                <span className="text-secondary">Overall Progress</span>
                <span className="font-bold text-white font-serif">{proj.progress}%</span>
              </div>

              {/* Team Members */}
              <div className="flex flex-col mb-6 gap-2">
                 <span className="text-[0.55rem] tracking-[0.3em] font-bold text-white/30 uppercase">Operatives</span>
                <div className="flex flex-wrap gap-2">
                  {proj.team.map((member, i) => (
                    <span
                      key={i}
                      className="text-[0.65rem] font-bold px-3 py-1 bg-[#111] text-accent tracking-widest uppercase"
                    >
                      {member}
                    </span>
                  ))}
                </div>
              </div>

              {/* ✅ Show manager's team tasks */}
              <div className="border-t border-white/5 pt-4 mt-6">
                <p className="text-[0.55rem] tracking-[0.3em] font-bold text-white/30 uppercase mb-4">Task Manifest</p>
                {proj.tasks.map((task, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-start py-3 text-sm border-b border-white/5 last:border-b-0 hover:bg-[#111] transition-colors -mx-4 px-4"
                  >
                    <span className="text-white tracking-wide uppercase text-xs font-bold leading-relaxed w-2/3">
                      {task.title}
                    </span>
                    <div className="text-right pl-2">
                       <span className="block text-[0.65rem] text-accent font-bold tracking-widest uppercase truncate max-w-[120px]">
                         {task.assignedTo?.name}
                       </span>
                       <span className="block text-secondary font-serif text-xs mt-1">
                          {task.progress ?? 0}%
                       </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
