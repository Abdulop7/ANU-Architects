"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useRole } from "@/lib/roleContext";
import { User, ChevronDown, ChevronUp } from "lucide-react";

export default function EmployeesPage() {
  const [employees, setEmployees] = useState([]);
  const [openEmployee, setOpenEmployee] = useState(null);
  const [loading, setLoading] = useState(true);

  const { role, contextLoading, tasks, users } = useRole();
  const router = useRouter();

  useEffect(() => {
    if (role && role !== "executive") {
      router.replace("/dashboard");
    }
  }, [role, router]);

  useEffect(() => {
    if (contextLoading) return;

    if (!contextLoading && users && tasks) {
      const filtered = users.filter((user) => user.role !== "executive");

      const formatted = filtered.map((user) => {
        const userTasks =
          user.tasksReceived?.map((t) => {
            const fullTask = tasks.find((task) => task.id === t.id);
            const projectName =
              fullTask?.subcategory?.category?.project?.name || "Unknown Context";
            const taskName = fullTask?.title || t.title || "Unknown Task";

            return {
              name: `${projectName} // ${taskName}`,
              progress: fullTask?.progress ?? 0,
            };
          })
          .filter((task) => task.progress < 100) || [];

        return {
          id: user.id,
          name: user.name,
          role: user.role,
          department:
            user.role === "manager"
              ? "Management"
              : user.role === "employee"
                ? "Operations"
                : "Executive",
          projects: userTasks,
        };
      });

      setEmployees(formatted);
      setLoading(false);
    }
  }, [contextLoading, users, tasks]);

  const toggleEmployee = (index) => {
    setOpenEmployee(openEmployee === index ? null : index);
  };

  if (loading) {
    return (
      <div className="w-full h-screen animate-pulse space-y-6 pt-12">
        <div className="h-8 w-40 bg-[#111]"></div>
        <div className="h-2 w-8 bg-accent"></div>
      </div>
    );
  }

  return (
    <div className="w-full space-y-16 lg:space-y-24">
      {/* Header */}
      <header className="flex flex-col gap-4 border-b border-white/5 pb-8 mt-12">
        <h1 className="headline-2 text-white uppercase tracking-[0.2em] flex items-center gap-4">
          <User className="w-10 h-10 text-accent" />
          Operative <span className="text-accent">Index</span>
        </h1>
        <p className="text-secondary text-sm tracking-widest uppercase">System Users & Active Assignments</p>
        <div className="w-24 h-1 bg-accent mt-4"></div>
      </header>

      {/* Operatives Grid */}
      <div className="w-full">
         <div className="flex justify-between items-end border-b border-white/5 pb-4 mb-8">
           <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-white">Registry</h2>
           <span className="text-[0.65rem] text-secondary tracking-[0.2em] font-black uppercase">{employees.length} Active Operatives</span>
         </div>

         <div className="space-y-0">
           {/* Table Header mapping */}
           <div className="grid grid-cols-12 gap-4 pb-4 border-b border-white/5 text-[0.6rem] font-bold tracking-[0.3em] uppercase text-white/30 px-4">
              <div className="col-span-5">Identity</div>
              <div className="col-span-3">Role</div>
              <div className="col-span-4 text-right">Department</div>
           </div>

           {employees.map((emp, idx) => (
             <div key={emp.id} className="border-b border-white/5">
                {/* Row */}
                <div 
                  onClick={() => toggleEmployee(idx)}
                  className="grid grid-cols-12 gap-4 py-6 px-4 group hover:bg-[#111] transition-colors cursor-pointer items-center"
                >
                  <div className="col-span-5 text-[0.8rem] tracking-widest uppercase font-bold text-white flex items-center gap-4">
                     <span className="text-accent/50 group-hover:text-accent transition-colors">
                        {openEmployee === idx ? <ChevronUp className="w-4 h-4"/> : <ChevronDown className="w-4 h-4"/>}
                     </span>
                     {emp.name}
                  </div>
                  <div className="col-span-3 text-[0.65rem] font-serif uppercase tracking-widest text-secondary">{emp.role}</div>
                  <div className="col-span-4 text-[0.65rem] font-serif uppercase tracking-widest text-white/50 text-right">{emp.department}</div>
                </div>

                {/* Expanded Details */}
                {openEmployee === idx && (
                   <div className="bg-[#050505] p-8 pb-12 border-t border-white/5">
                      <h4 className="text-[0.65rem] tracking-[0.3em] uppercase font-bold text-accent mb-8">Active Assignments</h4>
                      
                      {emp.projects.length > 0 ? (
                         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                            {emp.projects.map((proj, pIdx) => (
                               <div key={pIdx} className="border-b border-white/5 pb-4">
                                  <div className="flex justify-between items-start mb-4">
                                     <span className="text-[0.7rem] uppercase tracking-widest font-bold text-white w-2/3 leading-relaxed">{proj.name}</span>
                                     <span className="text-[0.55rem] font-black text-accent tracking-[0.3em] uppercase">{proj.progress}%</span>
                                  </div>
                                  <div className="w-full h-[2px] bg-white/5 overflow-hidden">
                                     <div className="h-full bg-accent transition-all duration-1000" style={{ width: `${proj.progress}%` }}></div>
                                  </div>
                               </div>
                            ))}
                         </div>
                      ) : (
                         <p className="text-[0.65rem] tracking-[0.2em] uppercase font-serif text-white/30 italic">No assigned directives.</p>
                      )}
                   </div>
                )}
             </div>
           ))}
         </div>
      </div>
    </div>
  );
}
