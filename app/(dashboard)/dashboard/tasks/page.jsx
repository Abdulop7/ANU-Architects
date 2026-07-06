"use client";

import { useState, useEffect, useRef } from "react";
import { useRole } from "@/lib/roleContext";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTitle } from "@headlessui/react";
import { ClipboardList, History, X } from "lucide-react";
import { SmoothProgressSlider } from "@/components/dashboard/progressSlider";
import posthog from "posthog-js";

export default function TasksPage() {
  const { role, id, contextLoading, projects, setProjects, workLog } = useRole();
  const router = useRouter();

  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [selectedStepIndex, setSelectedStepIndex] = useState(null);
  const [notes, setNotes] = useState("");
  const [progress, setProgress] = useState(0);
  const [previousProgress, setPreviousProgress] = useState(50);
  const sliderRef = useRef(null);
  const [customTitle, setCustomTitle] = useState("");
  const [customDescription, setCustomDescription] = useState("");
  const [isLogging, setIsLogging] = useState(false);

  // new state for side-box filter & grouped logs
  const [logRange, setLogRange] = useState(7);
  const [logsByDate, setLogsByDate] = useState({});

  useEffect(() => {
    if (!role || contextLoading) return;

    if (role === "executive") {
      router.replace("/dashboard");
      return;
    }

    const fetchTasks = async () => {
      try {
        if (!contextLoading && projects) {
          const userId = id;
          const userTasks = [];

          projects.forEach((proj) => {
            proj.categories?.forEach((cat) => {
              cat.subcats?.forEach((sub) => {
                sub.tasks?.forEach((task) => {
                  if (task.assignedTo?.id === userId) {
                    const hasIncompleteSteps = task.steps?.some((step) => !step.completed);
                    if (hasIncompleteSteps) {
                      userTasks.push({
                        projectId: proj.id,
                        projectName: proj.name,
                        taskId: task.id,
                        title: task.title,
                        deadline: task.deadline,
                        steps: task.steps || [],
                      });
                    }
                  }
                });
              });
            });
          });

          setTasks(userTasks);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, [role, contextLoading, projects, id, router]);

  useEffect(() => {
    if (contextLoading || !id || !Array.isArray(workLog)) return;

    const now = new Date();
    const start = new Date();
    start.setDate(now.getDate() - (logRange - 1));

    const byDate = {};

    workLog
      .filter((log) => log.employeeId === id)
      .forEach((log) => {
        if (!log.workDate) return;
        const dateKey = log.workDate.split("T")[0];
        const dateObj = new Date(dateKey);

        if (dateObj < start || dateObj > now) return;

        if (!byDate[dateKey]) byDate[dateKey] = [];
        byDate[dateKey].push(log);
      });

    const sorted = {};
    Object.keys(byDate)
      .sort((a, b) => new Date(b).getTime() - new Date(a).getTime())
      .forEach((key) => {
        sorted[key] = byDate[key].sort(
          (a, b) => new Date(a.workDate).getTime() - new Date(b.workDate).getTime()
        );
      });

    setLogsByDate(sorted);
  }, [workLog, id, logRange, contextLoading]);

  const openWorkLogModal = (task, stepId) => {
    const currentStep = task.steps.find((s) => s.id === stepId);
    const lastProgress = currentStep?.progress ?? 0;

    setSelectedTask(task);
    setSelectedStepIndex(stepId);
    setNotes("");
    setPreviousProgress(lastProgress);
    setProgress(lastProgress);
    setIsModalOpen(true);
  };

  const submitWorkLog = async () => {
    if (!selectedTask || !selectedStepIndex) return;
    setSubmitting(true);
    const currentStep = selectedTask.steps.find((s) => s.id === selectedStepIndex);

    try {
      const res = await fetch(`/api/tasks/${selectedTask.taskId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          stepId: currentStep.id,
          progress,
        }),
      });

      await fetch("/api/work-logs", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          taskId: selectedTask.taskId,
          stepId: currentStep.id,
          employeeId: id,
          progress,
          notes,
        }),
      });

      if (progress >= 100) {
        posthog.capture("task_completed", {
          task_title: selectedTask.title,
          project_name: selectedTask.projectName,
          step_name: currentStep.name,
        });
      } else {
        posthog.capture("task_progress_updated", {
          task_title: selectedTask.title,
          project_name: selectedTask.projectName,
          step_name: currentStep.name,
          progress,
          previous_progress: previousProgress,
        });
      }

      await res.json();
      setTasks((prev) =>
        prev.map((task) => {
          if (task.taskId === selectedTask.taskId) {
            const updatedSteps = task.steps.map((step) =>
              step.id === selectedStepIndex
                ? { ...step, completed: progress >= 100, progress }
                : step
            );
            const remainingSteps = updatedSteps.filter((s) => !s.completed);
            return { ...task, steps: remainingSteps };
          }
          return task;
        })
      );

      setProjects((prevProjects) =>
        prevProjects.map((proj) => ({
          ...proj,
          categories: proj.categories.map((cat) => ({
            ...cat,
            subcats: cat.subcats.map((sub) => ({
              ...sub,
              tasks: sub.tasks.map((t) => {
                if (t.id === selectedTask.taskId) {
                  return {
                    ...t,
                    steps: t.steps.map((step) =>
                      step.id === selectedStepIndex
                        ? { ...step, progress, completed: progress >= 100 }
                        : step
                    ),
                  };
                }
                return t;
              }),
            })),
          })),
        }))
      );
    } catch (err) {
      console.error("Error updating progress:", err);
    } finally {
      setSubmitting(false);
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.background = `linear-gradient(to right, #fb923c ${progress}%, #e5e7eb ${progress}%)`;
    }
  }, [progress]);

  useEffect(() => {
    if (isModalOpen) {
      setTimeout(() => {
        setProgress(previousProgress);
      }, 0);
    }
  }, [isModalOpen, previousProgress]);

  const handleCustomTaskSubmit = async () => {
    if (!customTitle.trim() || !customDescription.trim()) return alert("Please fill in both fields.");
    setIsLogging(true);

    try {
      await fetch("/api/custom-log", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          employeeId: id,
          title: customTitle.trim(),
          description: customDescription.trim()
        }),
      });

      posthog.capture("custom_task_logged", {
        task_title: customTitle.trim(),
      });

      setCustomTitle("");
      setCustomDescription("");
      alert("Task logged successfully!");
    } catch (err) {
      console.error("Failed to log task:", err);
      alert("Error logging task. Please try again.");
    } finally {
      setIsLogging(false);
    }
  };

  if (!role || loading) {
    return (
      <div className="flex h-screen w-full flex-col items-center justify-center">
        <div className="relative flex items-center justify-center">
          <div className="h-16 w-16 rounded-none border-4 border-white/10 border-t-accent animate-spin"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full space-y-16 lg:space-y-24 pb-20">
      <header className="flex flex-col gap-4 border-b border-white/5 pb-8 mt-12">
        <h1 className="headline-2 text-white uppercase tracking-[0.2em] flex items-center gap-4">
          <ClipboardList className="h-10 w-10 text-accent" />
          Operative <span className="text-accent">Tasks</span>
        </h1>
        <p className="text-secondary text-sm tracking-widest uppercase">System assignments & subroutines</p>
        <div className="w-24 h-1 bg-accent mt-4"></div>
      </header>

      {/* Manual Logging & Recent Work Container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative">
        <div className="w-full sticky top-8">
           <div className="flex justify-between items-end border-b border-white/5 pb-4 mb-8">
             <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-white">Manual Override Log</h2>
           </div>

           <div className="space-y-6">
             <div>
               <label className="text-[0.65rem] tracking-[0.2em] font-bold text-white/30 uppercase mb-2 block">Identifier</label>
               <input
                 type="text"
                 placeholder="Operation Title"
                 value={customTitle}
                 onChange={(e) => setCustomTitle(e.target.value)}
                 className="w-full bg-[#050505] p-4 text-sm font-serif border border-white/10 focus:border-accent text-white outline-none transition-colors"
               />
             </div>
             <div>
               <label className="text-[0.65rem] tracking-[0.2em] font-bold text-white/30 uppercase mb-2 block">Parameters</label>
               <textarea
                 rows={3}
                 placeholder="Detailed specifications"
                 value={customDescription}
                 onChange={(e) => setCustomDescription(e.target.value)}
                 className="w-full bg-[#050505] p-4 text-sm font-serif border border-white/10 focus:border-accent text-white outline-none transition-colors resize-none"
               />
             </div>
             <div className="pt-2 text-right">
               <button
                 onClick={handleCustomTaskSubmit}
                 disabled={isLogging}
                 className={`bg-[#111] hover:bg-accent border border-white/5 hover:border-accent text-white px-8 py-3 transition-colors cursor-pointer group/btn ${isLogging ? "opacity-50 pointer-events-none" : ""}`}
               >
                 <span className="text-[0.65rem] font-bold tracking-[0.2em] uppercase group-hover/btn:scale-105 transition-transform inline-block">
                    {isLogging ? "Executing..." : "Execute Log"}
                 </span>
               </button>
             </div>
           </div>
        </div>

        <div className="w-full border-l lg:border-white/5 lg:pl-16">
           <div className="flex justify-between items-end border-b border-white/5 pb-4 mb-8">
             <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-white flex items-center gap-3">
               <History className="h-4 w-4 text-accent" /> Log Archive
             </h2>
             <div className="flex items-center gap-4">
                {[7, 15, 30].map((days) => (
                  <button
                    key={days}
                    onClick={() => setLogRange(days)}
                    className={`text-[0.65rem] tracking-[0.2em] font-bold uppercase transition-colors pb-1 border-b ${logRange === days ? "text-accent border-accent" : "text-white/30 border-transparent hover:text-white"}`}
                  >
                    {days}D
                  </button>
                ))}
             </div>
           </div>

           <div className="max-h-[500px] overflow-y-auto scrollbar-none pr-4 space-y-8">
             {Object.keys(logsByDate).length === 0 ? (
                <p className="text-[0.65rem] tracking-[0.2em] uppercase text-white/30 font-serif italic py-6">No archives matched parameters.</p>
             ) : (
                Object.entries(logsByDate).map(([date, logs]) => (
                  <div key={date} className="relative">
                    <div className="sticky top-0 bg-[#050505]/90 backdrop-blur pb-2 mb-4">
                       <span className="text-[0.55rem] font-black text-accent tracking-[0.3em] uppercase">
                         {new Date(date).toLocaleDateString("en-GB", { weekday: "short", day: "2-digit", month: "short", year: "numeric" })}
                       </span>
                    </div>

                    <div className="space-y-0 text-white">
                      {logs.map((log, idx) => {
                        const isCustom = !log.task;

                        if (isCustom) {
                          return (
                            <div key={idx} className="pb-4 border-b border-white/5 mb-4 group hover:bg-[#111] transition-colors -mx-4 px-4 pt-4">
                              <div className="flex justify-between items-start mb-2">
                                <h6 className="text-[0.7rem] font-bold text-white tracking-widest uppercase">
                                  {log.title || "Custom Log"}
                                </h6>
                                <span className="text-[0.55rem] text-accent tracking-[0.2em] font-black uppercase">Custom Subroutine</span>
                              </div>
                              <p className="text-[0.65rem] text-secondary font-serif leading-relaxed mt-2 uppercase tracking-wide">
                                {log.description || "—"}
                              </p>
                              {log.notes && (
                                <p className="text-[0.55rem] italic text-white/30 mt-3 uppercase tracking-widest">
                                  [{typeof log.notes === "object" ? JSON.stringify(log.notes) : log.notes}]
                                </p>
                              )}
                            </div>
                          );
                        }

                        const projectName = log.task?.subcategory?.category?.project?.name || "—";
                        const taskName = log.task?.title || "Untitled Task";
                        const stepName = log.step?.name || "—";

                        return (
                          <div key={idx} className="pb-4 border-b border-white/5 mb-4 group hover:bg-[#111] transition-colors -mx-4 px-4 pt-4">
                            <h6 className="text-[0.7rem] font-bold text-white tracking-widest uppercase leading-relaxed mb-2">
                              {taskName}
                            </h6>
                            <div className="flex justify-between items-center text-[0.55rem] tracking-[0.2em] font-serif uppercase mb-4 text-secondary">
                              <p>Project // <span className="text-white">{projectName}</span></p>
                              <p className="text-accent">Phase // <span className="text-white">{stepName}</span></p>
                            </div>
                            
                            {typeof log.progress === "number" && (
                              <div className="flex justify-between items-center text-[0.55rem] tracking-[0.2em] font-bold uppercase mb-2">
                                 <span className="text-secondary">Progress</span>
                                 <span className="text-white flex items-center gap-2">
                                    {Math.round(log.progress)}%
                                 </span>
                              </div>
                            )}

                            {log.notes && (
                              <p className="text-[0.55rem] italic text-white/30 tracking-widest uppercase mt-3">
                                [{typeof log.notes === "object" ? JSON.stringify(log.notes) : log.notes}]
                              </p>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))
             )}
           </div>
        </div>
      </div>

      {/* Task Queue Array */}
      <div className="w-full pt-12">
         <div className="flex justify-between items-end border-b border-white/5 pb-4 mb-8">
           <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-white">Directive Queue</h2>
         </div>

         {tasks.length === 0 ? (
            <div className="py-20 flex flex-col items-center">
               <ClipboardList className="w-12 h-12 text-white/5 stroke-1 mb-6" />
               <p className="text-[0.65rem] tracking-[0.3em] text-white/20 uppercase font-black">No active directives found in stream</p>
            </div>
         ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
              {tasks.map((task) => {
                const orderedSteps = [...task.steps].sort((a, b) => a.id - b.id);
                const activeIndex = orderedSteps.findIndex((s, i) => {
                  if (s.completed) return false;
                  if (i === 0) return true;
                  return orderedSteps[i - 1].completed === true;
                });

                if (activeIndex === -1) return null;

                const activeStep = orderedSteps[activeIndex];

                return (
                  <div key={task.taskId} className="border-b border-white/5 pb-8 group transition-colors">
                     <div className="flex justify-between items-start mb-6">
                        <div className="w-2/3">
                           <h2 className="text-sm font-bold uppercase tracking-widest text-white leading-relaxed mb-2">{task.projectName}</h2>
                           <p className="text-[0.65rem] font-serif uppercase tracking-[0.2em] text-secondary">{task.title}</p>
                        </div>
                        {task.deadline && (
                           <div className="text-right">
                              <span className="block text-[0.55rem] text-secondary tracking-[0.2em] uppercase font-serif mb-1">Deadline</span>
                              <span className={`text-[0.65rem] font-black tracking-widest uppercase text-white ${new Date(task.deadline) < new Date() ? 'text-red-500' : ''}`}>
                                 {new Date(task.deadline).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}
                              </span>
                           </div>
                        )}
                     </div>

                     <div className="bg-[#111] border border-white/5 p-6 flex flex-col items-start gap-6 border-l-2 border-l-accent justify-between sm:flex-row sm:items-center">
                        <div className="w-full sm:w-auto">
                           <span className="block text-[0.55rem] tracking-[0.3em] font-bold text-white/30 uppercase mb-2">Active Phase</span>
                           <span className="text-[0.7rem] uppercase tracking-widest font-bold text-white mr-4 break-words block">{activeStep.name}</span>
                        </div>
                        <div className="flex items-center gap-6 shrink-0 mt-4 sm:mt-0 ml-auto w-full sm:w-auto">
                           <span className="text-[0.75rem] font-serif font-black text-accent">{activeStep.progress}%</span>
                           <button
                             onClick={() => openWorkLogModal(task, activeStep.id)}
                             className="text-[0.55rem] tracking-[0.2em] font-bold text-white uppercase bg-accent px-6 py-3 ml-auto sm:ml-0 hover:bg-white hover:text-black transition-colors"
                           >
                             Update
                           </button>
                        </div>
                     </div>
                  </div>
                );
              })}
            </div>
         )}
      </div>

      {/* WorkLog Modal */}
      <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)} className="fixed z-50 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen px-4">
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" />

          <div className="bg-[#050505] border border-white/20 p-8 max-w-lg w-full relative z-10 shadow-2xl">
              <button 
                onClick={() => setIsModalOpen(false)} 
                className="absolute top-8 right-8 text-white/40 hover:text-white transition-colors"
              >
                  <X className="w-5 h-5"/>
              </button>

            <DialogTitle className="text-xl font-bold uppercase tracking-widest text-white mb-8 border-b border-white/10 pb-4 pr-10">System Increment</DialogTitle>

            {selectedTask && selectedStepIndex !== null && (
               <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4 border-b border-white/5 pb-4">
                      <span className="text-[0.55rem] tracking-[0.2em] text-secondary uppercase font-bold w-16">Context</span>
                      <span className="text-[0.65rem] tracking-widest text-white uppercase">{selectedTask.projectName}</span>
                  </div>
                  <div className="flex items-center gap-4 border-b border-white/5 pb-4">
                      <span className="text-[0.55rem] tracking-[0.2em] text-secondary uppercase font-bold w-16">Task</span>
                      <span className="text-[0.65rem] tracking-widest text-white uppercase">{selectedTask.title}</span>
                  </div>
                  <div className="flex items-center gap-4">
                      <span className="text-[0.55rem] tracking-[0.2em] text-accent uppercase font-bold w-16">Phase</span>
                      <span className="text-[0.65rem] tracking-widest text-accent uppercase font-bold">{selectedTask.steps.find((s) => s.id === selectedStepIndex)?.name}</span>
                  </div>
               </div>
            )}

            <div className="space-y-4 mb-8">
               <div className="flex items-center justify-between text-[0.6rem] uppercase tracking-widest font-black">
                 <span className="text-white/40">Prev: {previousProgress}%</span>
                 <span className="text-accent">{progress}%</span>
               </div>
               
               <div className="relative w-full">
                 <SmoothProgressSlider
                   progress={progress}
                   setProgress={setProgress}
                   previousProgress={previousProgress}
                   submitWorkLog={submitWorkLog}
                 />
               </div>
            </div>

            <div className="mb-8">
               <label className="block text-[0.55rem] tracking-[0.3em] uppercase text-white/40 font-bold mb-3">Optional Notes</label>
               <textarea
                 value={notes}
                 onChange={(e) => setNotes(e.target.value)}
                 rows={3}
                 className="w-full bg-[#111] text-white p-4 text-sm font-serif border border-white/10 focus:border-accent outline-none resize-none"
                 onKeyDown={(e) => {
                   if (e.key === "Enter" && !(progress <= previousProgress)) {
                     submitWorkLog();
                   }
                 }}
                 placeholder="// Specify details here"
               />
            </div>

            <div className="flex justify-end border-t border-white/10 pt-6">
              <button
                disabled={submitting || progress <= previousProgress}
                className={`bg-accent text-white px-8 py-3 text-[0.65rem] font-bold tracking-[0.2em] uppercase transition-colors sm:w-auto w-full ${submitting || progress <= previousProgress ? "opacity-50 cursor-not-allowed" : "hover:bg-white hover:text-black cursor-pointer"}`}
                onClick={submitWorkLog}
              >
                {submitting ? "Processing..." : "Commit Update"}
              </button>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
