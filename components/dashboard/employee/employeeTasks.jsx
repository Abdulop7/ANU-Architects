"use client";
import { useState } from "react";
import { ClipboardList } from "lucide-react";

export default function EmployeeTasks() {
  const [employeeTasks, setEmployeeTasks] = useState([
    {
      project: "Luxury Villas",
      deadline: "15 Oct 2025",
      steps: [
        { name: "3D Modeling", progress: 70, status: "In Progress" },
        { name: "Site Execution", progress: 20, status: "Pending" },
      ],
    },
    {
      project: "Downtown Mall",
      deadline: "20 Nov 2025",
      steps: [
        { name: "Structural Design", progress: 50, status: "In Progress" },
        { name: "Electrical Layout", progress: 0, status: "Not Started" },
      ],
    },
  ]);

  // Handle updating progress for a specific step
  const handleProgressChange = (projIdx, stepIdx, newProgress) => {
    const updatedTasks = [...employeeTasks];
    updatedTasks[projIdx].steps[stepIdx].progress = newProgress;
    updatedTasks[projIdx].steps[stepIdx].status =
      newProgress === 100
        ? "Completed"
        : newProgress > 0
        ? "In Progress"
        : "Not Started";
    setEmployeeTasks(updatedTasks);
  };

  // Handle submit progress for a whole project
  const handleSubmit = (projIdx) => {
    const project = employeeTasks[projIdx];
    alert(
      `✅ Progress status updated for ${project.project}\n\nManifest:\n${project.steps
        .map((s) => `${s.name}: ${s.progress}% (${s.status})`)
        .join("\n")}`
    );
  };

  return (
    <div className="w-full space-y-16 lg:space-y-24">
      {/* Header */}
      <header className="flex flex-col gap-4 border-b border-white/5 pb-8 mt-12">
        <h1 className="headline-2 text-white uppercase tracking-[0.2em]">
          End of Day <span className="text-accent">Log</span>
        </h1>
        <p className="text-secondary text-sm tracking-widest uppercase">System Progress Update</p>
        <div className="w-24 h-1 bg-accent mt-4"></div>
      </header>

      {/* Task List Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 overflow-y-auto pr-2 pb-12">
        {employeeTasks.length === 0 ? (
          <div className="col-span-full py-20 border-y border-white/5 text-center flex flex-col items-center text-white/20">
            <ClipboardList size={48} className="mb-4 stroke-1" />
             <p className="text-[0.7rem] font-bold uppercase tracking-[0.3em] text-white/20">System Empty</p>
          </div>
        ) : (
          employeeTasks.map((task, projIdx) => (
            <div
              key={projIdx}
              className="pb-8 border-b border-white/5 group"
            >
              {/* Project Header */}
              <div className="flex justify-between items-end mb-8">
                <h2 className="font-bold text-white uppercase tracking-widest text-sm">
                  {task.project}
                </h2>
                <div className="text-right">
                   <div className="text-[0.55rem] text-secondary tracking-[0.2em] uppercase font-serif">Deadline</div>
                   <div className="text-[0.65rem] text-white font-black tracking-widest uppercase">
                     {task.deadline}
                   </div>
                </div>
              </div>

              {/* Steps with Progress Update */}
              <div className="space-y-10 border-t border-white/5 pt-8">
                {task.steps.map((step, stepIdx) => (
                  <div key={stepIdx}>
                    {/* Step title & status */}
                    <div className="flex justify-between items-end mb-4">
                      <span className="text-white tracking-wide uppercase text-xs font-bold leading-relaxed w-2/3">
                        {step.name}
                      </span>
                      <span
                        className={`text-[0.55rem] tracking-[0.2em] font-black uppercase text-right ${
                          step.status === "Completed"
                            ? "text-accent"
                            : step.status === "In Progress"
                            ? "text-white/60"
                            : "text-white/20"
                        }`}
                      >
                        {step.status}
                      </span>
                    </div>

                    {/* Progress Slider Header */}
                    <div className="flex justify-between items-center mb-2">
                       <span className="text-[0.55rem] tracking-[0.3em] font-bold text-white/30 uppercase">Progress Setup</span>
                       <span className="font-serif text-[0.65rem] font-bold text-white">{step.progress}%</span>
                    </div>

                    {/* Progress Visualizer */}
                    <div className="w-full h-1 bg-white/5 overflow-hidden mb-4 relative">
                      <div
                        className={`absolute top-0 bottom-0 left-0 bg-accent transition-all duration-300 pointer-events-none`}
                        style={{ width: `${step.progress}%` }}
                      />
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={step.progress}
                        onChange={(e) =>
                          handleProgressChange(projIdx, stepIdx, Number(e.target.value))
                        }
                        className="w-full h-full absolute top-0 left-0 opacity-0 cursor-pointer"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Submit Progress Sequence */}
              <div className="mt-10 pt-6 border-t border-white/5 text-right">
                <button
                  onClick={() => handleSubmit(projIdx)}
                  className="bg-accent text-white px-8 py-3 hover:bg-orange-600 transition-colors cursor-pointer group/btn"
                >
                  <span className="text-[0.65rem] font-bold tracking-[0.2em] uppercase group-hover/btn:scale-105 transition-transform flex items-center justify-center gap-3">
                     Log Progress
                  </span>
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
