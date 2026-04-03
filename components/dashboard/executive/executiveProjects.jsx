"use client";
import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp, Trash2 } from "lucide-react";
import { useRole } from "../../../lib/roleContext";

export default function ExecutiveProjects() {
  const { contextLoading, projects: userProjects } = useRole();
  const [projects, setProjects] = useState([]);
  const [expandedProjects, setExpandedProjects] = useState({});
  const [deletingId, setDeletingId] = useState(null);

  useEffect(() => {
    if (contextLoading) return;

    if (!contextLoading) {
      const transformed = userProjects
        .filter((proj) => {
          if ((proj.progress >= 100 && proj.paymentProgress >= 100) || proj.status === "Cancelled") {
            return false;
          }

          const catCount = proj.categories?.length || 0;
          if (catCount === 1) {
            const allTasks = proj.categories[0]?.subcats?.flatMap((sub) => sub.tasks || []) || [];
            const allDone = allTasks.every(
              (task) => task.progress === 100 || task.status === "Completed"
            );
            if (allDone && proj.paymentProgress >= 100) return false;
          }

          return true;
        })
        .map((proj) => {
          const employeesSet = new Set();
          let earliestDeadline = null;
          const tasksList = [];

          proj.categories.forEach((cat) => {
            cat.subcats.forEach((sub) => {
              sub.tasks.forEach((task) => {
                if (task.assignedTo?.name) employeesSet.add(task.assignedTo.name);

                const isCompleted = task.status === "Completed";

                tasksList.push({
                  staff: task.assignedTo?.name || "Unassigned",
                  taskName: task.title,
                  completed: isCompleted,
                  progress: task.progress ?? 0,
                });

                if (task.deadline) {
                  const taskDeadline = new Date(task.deadline);
                  if (!earliestDeadline || taskDeadline < earliestDeadline) {
                    earliestDeadline = taskDeadline;
                  }
                }
              });
            });
          });

          const staffProgress = {};
          tasksList.forEach((t) => {
            if (!staffProgress[t.staff]) staffProgress[t.staff] = { sum: 0, total: 0 };
            staffProgress[t.staff].total++;
            staffProgress[t.staff].sum += t.progress ?? 0;
          });

          return {
            id: proj.id,
            name: proj.name,
            status: proj.status,
            progress: proj.progress ?? 0,
            paymentProgress: proj.paymentProgress ?? 0,
            employees: Object.keys(staffProgress).map((s) => ({
              name: s,
              progress: Math.round(staffProgress[s].sum / staffProgress[s].total),
            })),
            deadline: earliestDeadline ? earliestDeadline.toISOString().split("T")[0] : null,
            tasksList,
          };
        });

      setProjects(transformed);
    }
  }, [contextLoading, userProjects]);

  const toggleProject = (id) => {
    setExpandedProjects((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const deleteProject = async (id) => {
    if (!confirm("CONFIRM DELETION OF PROJECT TRACE?")) return;

    try {
      setDeletingId(id);
      const res = await fetch(`/api/projects/${id}`, { method: "POST" });
      if (!res.ok) throw new Error("Failed to delete project");

      setProjects((prev) => prev.filter((p) => p.id !== id));
    } catch (err) {
      console.error(err);
      alert("Failed to delete project. Try again later.");
    } finally {
      setDeletingId(null);
    }
  };

  if (contextLoading) {
    return (
      <div className="flex h-64 w-full items-center justify-center">
        <span className="text-[0.65rem] tracking-[0.3em] font-black uppercase text-accent animate-pulse">Initializing Data Stream...</span>
      </div>
    );
  }

  return (
    <div className="w-full space-y-12 pb-20">
      <header className="flex flex-col gap-4 border-b border-white/5 pb-8 mt-12">
        <h1 className="headline-2 text-white uppercase tracking-[0.2em]">
          Executive <span className="text-accent">Overview</span>
        </h1>
        <p className="text-secondary text-sm tracking-widest uppercase">Global Project Trajectory Tracking</p>
        <div className="w-24 h-1 bg-accent mt-4"></div>
      </header>

      <section className="w-full relative">
        <div className="flex justify-between items-end border-b border-white/5 pb-4 mb-8">
          <h2 className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-white">
            Active Deployments
          </h2>
          <span className="text-[0.65rem] text-secondary tracking-[0.2em] font-black uppercase">{projects.length} Threads</span>
        </div>

        {projects.length === 0 ? (
          <p className="text-[0.65rem] tracking-[0.2em] font-serif text-white/30 uppercase italic">No active structural projects.</p>
        ) : (
          <div className="space-y-0 border-t border-white/5">
            {projects.map((proj) => (
              <div key={proj.id} className="border-b border-white/5 group hover:bg-[#111] transition-colors -mx-4 px-4 py-8">
                {/* Header Row */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                  
                  {/* Title & Deadline */}
                  <div className="md:col-span-5 flex flex-col gap-2">
                    <h3 className="text-[1rem] font-bold uppercase tracking-widest text-white leading-tight">
                      {proj.name}
                    </h3>
                    <div className="flex items-center gap-4 mt-2">
                      <span className="text-[0.55rem] font-black text-white/40 tracking-[0.3em] uppercase">ID: {String(proj.id).padStart(4, '0')}</span>
                      {proj.deadline && (
                        <span className={`text-[0.55rem] font-black uppercase tracking-[0.2em] px-2 py-0.5 border ${new Date(proj.deadline) < new Date() ? "text-accent border-accent" : "text-white/60 border-white/20"}`}>
                          DL: {new Date(proj.deadline).toLocaleDateString("en-GB", { day: "2-digit", month: "short" })}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Master Progress */}
                  <div className="md:col-span-4 flex flex-col gap-4 pt-2">
                    {/* Structure Progress */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[0.55rem] uppercase tracking-widest font-black text-white/50">Structure Completion</span>
                        <span className="text-[0.55rem] uppercase tracking-widest font-black text-white">{proj.progress}%</span>
                      </div>
                      <div className="w-full h-[1px] bg-white/10">
                        <div className="h-full bg-white transition-all duration-500 delay-100" style={{ width: `${proj.progress}%` }} />
                      </div>
                    </div>

                    {/* Financial Progress */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[0.55rem] uppercase tracking-widest font-black text-white/50">Financial Clearance</span>
                        <span className="text-[0.55rem] uppercase tracking-widest font-black text-accent">{proj.paymentProgress}%</span>
                      </div>
                      <div className="w-full h-[1px] bg-accent/20">
                        <div className="h-full bg-accent transition-all duration-500 delay-200" style={{ width: `${proj.paymentProgress}%` }} />
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="md:col-span-3 flex justify-end items-center gap-3 pt-2">
                    <button
                      onClick={() => toggleProject(proj.id)}
                      className="text-[0.55rem] tracking-[0.2em] font-bold uppercase border border-white/10 hover:border-white text-white px-4 py-2 transition-colors flex items-center gap-2"
                    >
                      {expandedProjects[proj.id] ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                      Index
                    </button>
                    <button
                      onClick={() => deleteProject(proj.id)}
                      disabled={deletingId === proj.id}
                      className={`px-3 py-2 border transition-colors ${deletingId === proj.id ? 'border-white/5 text-white/10' : 'border-red-500/20 text-red-500 hover:bg-red-500 hover:text-white'}`}
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                {/* Expanded Traces */}
                {expandedProjects[proj.id] && (
                  <div className="mt-8 border-t border-white/5 pt-8 pl-0 md:pl-8">
                    <h4 className="text-[0.55rem] tracking-[0.3em] font-bold uppercase text-white/30 mb-4">Task Allocation Matrix</h4>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      {proj.tasksList.map((t, i) => (
                        <div key={i} className={`p-4 border-l-2 flex justify-between items-center bg-[#050505] transition-colors ${t.completed || t.progress === 100 ? "border-l-green-500" : "border-l-white/20"}`}>
                          <div className="flex flex-col gap-1 text-left">
                             <span className="text-[0.55rem] uppercase tracking-[0.2em] font-bold text-white/40">{t.staff}</span>
                             <span className={`text-[0.65rem] uppercase tracking-widest font-black ${t.completed || t.progress === 100 ? "text-green-500" : "text-white"}`}>{t.taskName}</span>
                          </div>
                          
                          <div className="flex items-center">
                             {(t.completed || t.progress === 100) ? (
                               <span className="text-[0.55rem] uppercase tracking-widest font-bold text-green-500 bg-green-500/10 px-2 py-1">100% DONE</span>
                             ) : (
                               <span className="text-[0.55rem] uppercase tracking-widest font-bold text-white border border-white/10 px-2 py-1">{t.progress}% ACT</span>
                             )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
