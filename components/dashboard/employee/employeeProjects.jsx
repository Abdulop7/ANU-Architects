"use client";
import { useEffect, useState } from "react";
import { FolderOpen } from "lucide-react";
import { useRole } from "../../../lib/roleContext";

export default function EmployeeProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id, role, contextLoading, projects: userProjects } = useRole();

  useEffect(() => {
    if (contextLoading) return;

    const fetchProjects = async () => {
      try {
        if (!contextLoading && userProjects) {
          const employeeProjects = userProjects
            .map((proj) => {
              let tasks = [];
              let total = 0;
              let done = 0;

              proj.categories?.forEach((cat) => {
                cat.subcats?.forEach((sub) => {
                  sub.tasks?.forEach((task) => {
                    if (task.assignedTo?.id === id) {
                      tasks.push(task);
                      total++;
                      if (task.progress === 100) done++;
                    }
                  });
                });
              });

              if (tasks.length > 0) {
                if (done === total) return null;
                const taskDeadlines = tasks
                  .map((t) => t.deadline)
                  .filter(Boolean)
                  .map((d) => new Date(d));

                let projectDeadline = "N/A";
                if (taskDeadlines.length > 0) {
                  const latest = new Date(Math.max(...taskDeadlines.map((d) => d.getTime())));
                  projectDeadline = latest.toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                    year: "numeric"
                  });
                }

                return {
                  id: proj.id,
                  name: proj.name,
                  deadline: projectDeadline,
                  projectProgress: total > 0 ? Math.round((done / total) * 100) : 0,
                  tasks,
                };
              }

              return null;
            })
            .filter(Boolean);

          setProjects(employeeProjects);
        }
      } catch (err) {
        console.error("Error fetching projects:", err);
      } finally {
        setLoading(false);
      }
    };

    if (id && role === "employee") {
      fetchProjects();
    }
  }, [id, role, contextLoading, userProjects]);


  return (
    <div className="w-full space-y-16 lg:space-y-24">
      {/* Page Header */}
      <header className="flex flex-col gap-4 border-b border-white/5 pb-8 mt-12">
        <h1 className="headline-2 text-white uppercase tracking-[0.2em]">
          My <span className="text-accent">Projects</span>
        </h1>
        <p className="text-secondary text-sm tracking-widest uppercase">Project assignments and tracking</p>
        <div className="w-24 h-1 bg-accent mt-4"></div>
      </header>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 overflow-y-auto pr-2 pb-12">
        {loading ? (
          <div className="col-span-full animate-pulse space-y-10">
             {[...Array(3)].map((_, i) => (
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
            <p className="text-[0.7rem] font-bold uppercase tracking-[0.3em] text-white/20">No assigned projects</p>
          </div>
        ) : (
          projects.map((proj) => (
            <div key={proj.id} className="group transition-colors relative pb-8 border-b border-white/5">
              {/* Project Title & Deadline */}
              <div className="flex justify-between items-end mb-4">
                <span className="font-bold text-white uppercase tracking-widest text-sm">
                  {proj.name}
                </span>
                {proj.deadline !== "N/A" && (
                  <div className="text-right">
                    <div className="text-[0.55rem] text-secondary tracking-[0.2em] uppercase font-serif">Deadline</div>
                    <div className={`text-[0.65rem] font-black tracking-widest uppercase ${new Date(proj.deadline) < new Date() ? "text-red-500" : "text-white"}`}>
                      {proj.deadline}
                    </div>
                  </div>
                )}
              </div>

              {/* Progress Bar */}
              <div className="w-full h-1 bg-white/5 overflow-hidden mb-3">
                <div
                  className="h-1 bg-accent transition-all duration-1000"
                  style={{ width: `${proj.projectProgress}%` }}
                />
              </div>

              {/* Progress % */}
              <div className="mb-8 flex justify-between items-center text-[0.65rem] tracking-[0.2em] uppercase">
                <span className="text-secondary">Overall Progress</span>
                <span className="font-bold text-white font-serif">{proj.projectProgress}%</span>
              </div>

              {/* Assigned Tasks */}
              <div className="border-t border-white/5 pt-4">
                <p className="text-[0.55rem] tracking-[0.3em] font-bold text-white/30 uppercase mb-4">Task Manifest</p>
                {proj.tasks.map((task, idx) => (
                  <div key={idx} className="border-b border-white/5 last:border-b-0 py-4 hover:bg-[#111] transition-colors -mx-4 px-4">
                    <div className="flex justify-between items-end mb-3">
                      <span className="text-white tracking-wide uppercase text-[0.65rem] font-bold leading-relaxed w-2/3">
                        {task.title}
                      </span>
                      <span className="text-[0.55rem] text-secondary tracking-widest uppercase font-serif text-right">
                        {task.deadline
                          ? new Date(task.deadline).toLocaleDateString("en-GB", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric"
                          })
                          : "N/A"}
                      </span>
                    </div>

                    {/* Task Progress */}
                    <div className="flex justify-between items-center text-[0.6rem] tracking-[0.2em] uppercase mb-1">
                      <span className="font-bold text-accent font-serif">{task.progress ?? 0}%</span>
                    </div>
                    <div className="w-full h-[2px] bg-white/5 overflow-hidden">
                      <div
                        className="h-full bg-white/40"
                        style={{ width: `${task.progress ?? 0}%` }}
                      />
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
