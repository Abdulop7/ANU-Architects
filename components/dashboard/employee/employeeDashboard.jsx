"use client";
import { useEffect, useState } from "react";
import { Activity, Bell, FileCheck2, ClipboardList, Clock } from "lucide-react";
import { useRole } from "../../../lib/roleContext";

export default function EmployeeDashboard() {
  const { id, tasks, contextLoading, activity } = useRole();
  const [myTasks, setMyTasks] = useState([]);
  const [recentActivity, setRecentActivity] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!contextLoading && tasks && activity) {
          const ongoing = tasks.filter((t) => (t.progress ?? 0) < 100 && t.assignedToId === id);
          setMyTasks(ongoing);

          const myActivity = activity.filter(
            (a) => a.employeeId === id || a.assignedToId === id
          );

          setRecentActivity(myActivity.sort((a,b) => new Date(b.workDate) - new Date(a.workDate)));
          setLoading(false);
        }
      } catch (err) {
        console.error("Error loading dashboard:", err);
      }
    };

    fetchData();
  }, [contextLoading, tasks, activity, id]);

  const getActivityIcon = (a) => {
    if (a.type === "ANNOUNCEMENT") {
      return <Bell className="w-4 h-4 text-white/50" />;
    } else if (a.type === "WORKLOG") {
      if (a.progress === 100) {
        return <FileCheck2 className="w-4 h-4 text-accent" />;
      } else {
        return <Activity className="w-4 h-4 text-white/30" />;
      }
    } else {
      return null;
    }
  };

  return (
    <div className="w-full space-y-16 lg:space-y-24">
      {/* Header */}
      <header className="flex flex-col gap-4 border-b border-white/5 pb-8 mt-12">
        <h1 className="headline-2 text-white uppercase tracking-[0.2em]">
          Operative <span className="text-accent">Workspace</span>
        </h1>
        <p className="text-secondary text-sm tracking-widest uppercase flex items-center gap-2">
           Terminal Status: <span className="text-green-500 font-bold blur-[0.5px]">Online</span>
        </p>
        <div className="w-24 h-1 bg-accent mt-4"></div>
      </header>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-16 lg:gap-24">
        {/* My Tasks */}
        <div className="w-full">
          <div className="flex justify-between items-end border-b border-white/5 pb-4 mb-8">
             <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-white">Active Assignments</h2>
             <span className="text-[0.65rem] text-accent tracking-[0.2em] font-black uppercase">Pending Directives</span>
          </div>

          <div className="space-y-0 max-h-[500px] overflow-y-auto scrollbar-none pr-4">
            {loading ? (
             <div className="animate-pulse space-y-6">
                 {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex justify-between items-center py-4 border-b border-white/5">
                        <div className="w-1/3 h-4 bg-[#111]"></div>
                        <div className="w-16 h-4 bg-[#111]"></div>
                    </div>
                 ))}
             </div>
            ) : myTasks.length === 0 ? (
              <div className="flex flex-col items-center justify-center text-white/20 py-20">
                <ClipboardList size={48} className="mb-4 stroke-1" />
                <p className="text-[0.7rem] uppercase tracking-widest font-bold">No tasks assigned</p>
              </div>
            ) : (
              myTasks.map((task) => (
                <div
                  key={task.id}
                  className="py-6 border-b border-white/5 group transition-colors"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-2/3">
                      <p className="font-bold text-white uppercase tracking-widest text-sm leading-relaxed mb-2">{task.title}</p>
                      <p className="text-[0.65rem] uppercase tracking-[0.2em] text-secondary font-serif">
                        <span className="text-white/40">Project //</span> {task.subcategory?.category?.project?.name || "Unassigned"}
                      </p>
                    </div>
                    <div className="text-right">
                       <div className="text-[0.55rem] text-secondary tracking-[0.2em] uppercase font-serif">Deadline</div>
                       <div className={`text-[0.65rem] font-black tracking-widest uppercase ${new Date(task.deadline) < new Date() ? "text-red-500" : "text-white"}`}>
                         {new Date(task.deadline).toLocaleDateString("en-GB", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric"
                         })}
                       </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center text-[0.65rem] tracking-[0.2em] uppercase mb-2">
                     <span className="text-secondary">Progress</span>
                     <span className="font-bold text-white font-serif">{task.progress ?? 0}%</span>
                  </div>
                  <div className="w-full h-1 bg-white/5 overflow-hidden">
                    <div
                      className="h-1 bg-accent transition-all duration-1000"
                      style={{ width: `${task.progress ?? 0}%` }}
                    />
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="w-full">
           <div className="flex justify-between items-end border-b border-white/5 pb-4 mb-8">
             <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-white w-full">Terminal Logs</h2>
           </div>

          <div className="space-y-0 border-t border-white/5 max-h-[500px] overflow-y-auto scrollbar-none pr-4">
            {loading ? (
             <div className="animate-pulse space-y-4">
                 {[...Array(3)].map((_, i) => (
                    <div key={i} className="flex gap-4 items-center py-4 border-b border-white/5">
                        <div className="w-4 h-4 bg-[#111]"></div>
                        <div className="w-2/3 h-3 bg-[#111]"></div>
                    </div>
                 ))}
             </div>
            ) : recentActivity.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-white/20">
                <Clock size={36} className="mb-4 stroke-1" />
                <p className="text-[0.65rem] uppercase tracking-widest font-bold">No terminal logs found</p>
              </div>
            ) : (
              recentActivity.map((a, idx) => {
                const icon = getActivityIcon(a);
                return (
                  <div
                    key={idx}
                    className="flex items-start gap-4 py-5 border-b border-white/5 group hover:bg-[#111] px-4 -mx-4 transition-colors"
                  >
                    <div className="mt-1 transition-transform group-hover:scale-110">
                      {icon}
                    </div>

                    <div className="flex-1">
                      {a.type === "WORKLOG" ? (
                        <>
                           <div className="flex justify-between items-center mb-1">
                             <p className="text-white font-bold tracking-widest uppercase text-[0.65rem]">{a.employee?.name || "Operative"}</p>
                             <div className="text-[0.55rem] text-secondary font-serif uppercase tracking-widest">
                                {new Date(a.workDate || a.createdAt).toLocaleDateString("en-GB", { month: "short", day: "2-digit" })}
                             </div>
                           </div>
                          <p className="text-[0.65rem] text-secondary leading-relaxed uppercase tracking-wider font-serif">
                            {a.progress === 100 ? (
                              <>
                                <span className="font-bold text-accent">Completed</span> <span className="text-white/60">"{a.task?.title}"</span>
                              </>
                            ) : (
                              <>
                                Set to <span className="font-bold text-white">{a.progress}%</span> on <span className="text-white/60">"{a.task?.title}"</span>
                              </>
                            )}
                          </p>
                          {a.notes && <p className="text-[0.6rem] text-white/30 italic mt-2 uppercase tracking-wide">[{a.notes}]</p>}
                        </>
                      ) : (
                        <>
                           <div className="flex justify-between items-center mb-1">
                             <p className="text-white font-bold tracking-widest uppercase text-[0.65rem]">Announcement</p>
                             <div className="text-[0.55rem] text-secondary font-serif uppercase tracking-widest">
                                {new Date(a.createdAt).toLocaleDateString("en-GB", { month: "short", day: "2-digit" })}
                             </div>
                           </div>
                          <p className="text-[0.65rem] text-secondary lowercase font-serif mt-1">
                             <span className="text-white font-bold uppercase track-widest">[{a.project?.name || "P"}]</span>  {" >> "}
                             <span className="font-bold text-accent uppercase tracking-widest">{a.assignedTo?.name || "ID"}</span>
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
