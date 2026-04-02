"use client";
import { useEffect, useRef, useState } from "react";
import { useRole } from "@/lib/roleContext";
import { Network, Loader2 } from "lucide-react";

export default function AssignTasksPage() {
  const [projectName, setProjectName] = useState("");
  const [category, setCategory] = useState("");
  const [selectedTasks, setSelectedTasks] = useState([]);
  const [staffMembers, setStaffMembers] = useState([]);
  const [assignedTasks, setAssignedTasks] = useState({});
  const [loadingStaff, setLoadingStaff] = useState(false);
  const [deadline, setDeadline] = useState("");
  const [assigning, setAssigning] = useState(false);
  const { contextLoading, tasks, users } = useRole();

  const dateInputRef = useRef(null);

  const getStaff = async () => {
    setLoadingStaff(true);
    try {
      if (!contextLoading) {
        const filteredStaff = users.filter((staff) => staff.role !== "executive" && staff.role !== "accountant");

        const staffWithCounts = filteredStaff.map((staff) => {
          const activeTasks = (staff.tasksReceived || []).filter((t) => {
            const matchedTask = tasks.find((task) => task.id === t.id);
            return matchedTask && matchedTask.progress < 100;
          });

          return {
            ...staff,
            activeCount: activeTasks.length,
          };
        });

        setStaffMembers(staffWithCounts);
      }
    } catch (err) {
      console.error("Failed to fetch staff:", err);
    } finally {
      setLoadingStaff(false);
    }
  };

  useEffect(() => {
    if (contextLoading) return;
    getStaff();
  }, [contextLoading]);

  const toggleTask = (task) => {
    setSelectedTasks((prev) =>
      prev.includes(task) ? prev.filter((t) => t !== task) : [...prev, task]
    );

    if (task === "Finishes" && !selectedTasks.includes("Finishes")) {
      setAssignedTasks((prev) => ({
        ...prev,
        Finishes: {
          staff: "",
          steps: [
            { name: "3D Base Modeling", completed: false },
            { name: "Detailed Modeling", completed: false },
            { name: "Revisions", completed: false },
            { name: "Approval", completed: false },
          ],
        },
      }));
    } else if (task === "Finishes" && selectedTasks.includes("Finishes")) {
      setAssignedTasks((prev) => {
        const copy = { ...prev };
        delete copy["Finishes"];
        return copy;
      });
    }
  };

  const toggleSubtask = (subtask) => {
    setAssignedTasks((prev) => {
      if (prev[subtask]) {
        const copy = { ...prev };
        delete copy[subtask];
        return copy;
      } else {
        return {
          ...prev,
          [subtask]: {
            staff: "",
            steps: [
              { name: "Initial Drawing", completed: false },
              { name: "Revisions", completed: false },
              { name: "Approval", completed: false },
            ],
          },
        };
      }
    });
  };

  const handleTaskStaffChange = (task, staffValue) => {
    const staffId = staffValue === "" ? "" : Number(staffValue);
    setAssignedTasks((prev) => ({
      ...prev,
      [task]: {
        ...prev[task],
        staff: staffId,
      },
    }));
  };

  const handleAssign = async () => {
    setAssigning(true);
    const data = {
      projectName,
      category,
      selectedTasks,
      assignedTasks,
      deadline,
    };

    try {
      const res = await fetch("/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Failed to assign task");
      }

      await res.json();

      setProjectName("");
      setCategory("");
      setSelectedTasks([]);
      setDeadline("");
      setAssignedTasks({});

      await getStaff();
    } catch (error) {
      console.error("Error assigning task:", error);
      alert("Error assigning task: " + error.message);
    } finally {
      setAssigning(false);
    }
  };

  if (contextLoading || loadingStaff) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <Loader2 className="animate-spin text-white/20 h-10 w-10" />
      </div>
    );
  }

  return (
    <div className="w-full space-y-16 lg:space-y-24 pb-20">
      <header className="flex flex-col gap-4 border-b border-white/5 pb-8 mt-12">
        <h1 className="headline-2 text-white uppercase tracking-[0.2em] flex items-center gap-4">
          <Network className="h-10 w-10 text-accent" />
          Assign <span className="text-accent">Directives</span>
        </h1>
        <p className="text-secondary text-sm tracking-widest uppercase">Project Distribution & Worker Allocation</p>
        <div className="w-24 h-1 bg-accent mt-4"></div>
      </header>

      <div className="max-w-4xl border-b border-white/5 pb-16 space-y-16">
        
        {/* Step 1 */}
        <div>
           <h2 className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-white mb-6">
              Case Identity
           </h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="text-[0.55rem] tracking-[0.2em] font-bold text-white/30 uppercase block mb-3">Project String</label>
                <input
                  type="text"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  className="w-full bg-[#050505] p-4 text-sm font-serif border border-white/10 focus:border-accent text-white outline-none transition-colors"
                  placeholder="Enter project nomenclature"
                />
              </div>

              <div>
                <label className="text-[0.55rem] tracking-[0.2em] font-bold text-white/30 uppercase block mb-3">Category Matrix</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-[#050505] p-4 text-[0.7rem] uppercase font-bold tracking-widest border border-white/10 focus:border-accent text-white outline-none transition-colors cursor-pointer appearance-none"
                >
                  <option value="">Select Category Matrix</option>
                  <option value="Residential">Residential</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Restaurant">Restaurant</option>
                  <option value="Religious">Religious</option>
                  <option value="Educational">Educational</option>
                </select>
              </div>
           </div>
        </div>

        {/* Step 2 */}
        <div className="pt-8 border-t border-white/5">
           <h2 className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-white mb-6">
              Sector Processing
           </h2>
           
           <div className="space-y-12">
             <div>
               <label className="text-[0.55rem] tracking-[0.2em] font-bold text-white/30 uppercase block mb-4">Required Sectors</label>
               <div className="flex gap-8">
                 {["Grey", "Finishes"].map((type) => (
                   <label key={type} className="flex items-center gap-3 cursor-pointer group">
                     <div className={`w-4 h-4 border flex items-center justify-center transition-colors ${selectedTasks.includes(type) ? 'bg-accent border-accent' : 'border-white/10 group-hover:border-accent'}`}>
                        {selectedTasks.includes(type) && <div className="w-2 h-2 bg-[#111]" />}
                     </div>
                     <input
                       type="checkbox"
                       checked={selectedTasks.includes(type)}
                       onChange={() => toggleTask(type)}
                       className="hidden"
                     />
                     <span className={`text-[0.7rem] font-bold tracking-widest uppercase transition-colors ${selectedTasks.includes(type) ? 'text-white' : 'text-white/40'}`}>{type}</span>
                   </label>
                 ))}
               </div>
             </div>

             {selectedTasks.includes("Grey") && (
               <div className="bg-[#111] p-8 border border-white/5 border-l-accent space-y-8">
                 <h3 className="text-[0.65rem] tracking-[0.3em] uppercase font-bold text-white/50">Grey Structure Allocation</h3>

                 {["Structure Plan","Floor Plan", "Plumbing", "Electrical"].map((subtask) => (
                   <div key={subtask} className="border-b border-white/5 pb-6 last:border-0 last:pb-0">
                     <label className="flex items-center gap-3 mb-4 cursor-pointer group w-fit">
                       <div className={`w-3 h-3 border flex items-center justify-center transition-colors ${assignedTasks[subtask] !== undefined ? 'bg-accent border-accent' : 'border-white/20 group-hover:border-accent bg-[#050505]'}`}>
                          {assignedTasks[subtask] !== undefined && <div className="w-1.5 h-1.5 bg-[#111]" />}
                       </div>
                       <input
                         type="checkbox"
                         checked={assignedTasks[subtask] !== undefined}
                         onChange={() => toggleSubtask(subtask)}
                         className="hidden"
                       />
                       <span className={`text-[0.65rem] tracking-widest uppercase font-bold transition-colors ${assignedTasks[subtask] !== undefined ? 'text-white' : 'text-white/40'}`}>{subtask} Pipeline</span>
                     </label>

                     {assignedTasks[subtask] !== undefined && (
                       <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pl-6">
                         <select
                           value={assignedTasks[subtask]?.staff ?? ""}
                           onChange={(e) => handleTaskStaffChange(subtask, e.target.value)}
                           className="flex-1 w-full bg-[#050505] p-3 text-[0.6rem] uppercase tracking-widest border border-white/10 focus:border-accent text-white outline-none transition-colors appearance-none"
                         >
                           <option value="">Designate Worker</option>
                           {staffMembers.map((staff) => (
                             <option key={staff.id} value={staff.id}>
                               [{String(staff.id).padStart(2,'0')}] {staff.name} — ({staff.activeCount ?? 0} ACTIVE)
                             </option>
                           ))}
                         </select>

                         {assignedTasks[subtask]?.staff && (
                           <button
                             onClick={() =>
                               setAssignedTasks((prev) => {
                                 const copy = { ...prev };
                                 delete copy[subtask];
                                 return copy;
                               })
                             }
                             className="text-[0.55rem] font-bold tracking-[0.2em] text-red-500 hover:text-white uppercase transition-colors"
                           >
                             Clear
                           </button>
                         )}
                       </div>
                     )}
                   </div>
                 ))}
               </div>
             )}

             {selectedTasks.includes("Finishes") && (
               <div className="bg-[#111] p-8 border border-white/5 border-l-accent space-y-6">
                 <div className="space-y-1">
                   <h3 className="text-[0.65rem] tracking-[0.3em] uppercase font-bold text-white/50">Finishes Pipeline</h3>
                   <p className="text-[0.55rem] tracking-[0.2em] font-serif text-secondary uppercase">All interior components wrapped in single dispatch.</p>
                 </div>

                 <select
                   value={assignedTasks["Finishes"]?.staff ?? ""}
                   onChange={(e) => handleTaskStaffChange("Finishes", e.target.value)}
                   className="w-full bg-[#050505] p-3 text-[0.6rem] uppercase tracking-widest border border-white/10 focus:border-accent text-white outline-none transition-colors appearance-none"
                 >
                   <option value="">Designate Worker</option>
                   {staffMembers.map((staff) => (
                     <option key={staff.id} value={staff.id}>
                       [{String(staff.id).padStart(2,'0')}] {staff.name} — ({staff.activeCount ?? 0} ACTIVE)
                     </option>
                   ))}
                 </select>
               </div>
             )}
           </div>
        </div>

        {/* Step 3 */}
        <div className="pt-8 border-t border-white/5">
           <h2 className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-white mb-6">
              Temporal Bound
           </h2>
           
           <div className="w-full md:w-1/2">
              <label className="text-[0.55rem] tracking-[0.2em] font-bold text-white/30 uppercase block mb-3">Master Deadline</label>
              <input
                ref={dateInputRef}
                type="date"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                className="w-full bg-[#050505] p-4 text-[0.7rem] font-serif uppercase tracking-widest border border-white/10 focus:border-accent text-white outline-none transition-colors appearance-none"
                onFocus={(e) => e.target.showPicker?.()}
              />
           </div>
        </div>
        
        {/* Submit */}
        <div className="pt-12">
            <button
               onClick={handleAssign}
               disabled={assigning}
               className={`w-full md:w-auto bg-accent hover:bg-white text-white hover:text-black px-12 py-5 text-[0.65rem] font-bold tracking-[0.3em] uppercase flex justify-center items-center gap-3 transition-colors ${assigning ? 'opacity-50' : ''}`}
            >
               {assigning ? (
                 <>
                   <Loader2 className="w-4 h-4 animate-spin" /> Process Dispatch
                 </>
               ) : (
                 "Execute Directive Dispatch"
               )}
            </button>
        </div>

      </div>
    </div>
  );
}
