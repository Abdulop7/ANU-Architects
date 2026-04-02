"use client";
import { useEffect, useState } from "react";
import { useRole } from "../../../lib/roleContext";
import { Activity, Bell, FileCheck2, History } from "lucide-react";

export default function ManagerDashboard() {
  const [projects, setProjects] = useState([]);
  const [workload, setWorkload] = useState([]);
  const [activity, setActivity] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id, contextLoading, projects: userProjects, activity: userActivity, users } = useRole();
  const managerId = id;

  useEffect(() => {
    if (contextLoading || !managerId) return;

    const fetchDashboardData = async () => {
      try {
        if (!contextLoading && userProjects && userActivity && users) {
          // --- Workload + Projects calculation ---
          const managerProjects = [];
          const teamWorkload = {};

          userProjects.forEach((proj) => {
            if (proj.progress === 100) return;

            let isManagerProject = false;

            proj.categories?.forEach((cat) => {
              cat.subcats?.forEach((sub) => {
                sub.tasks?.forEach((task) => {
                  if (task.progress === 100) return;

                  if (
                    task.assignedTo?.managerId === managerId ||
                    task.assignedTo?.id === managerId
                  ) {
                    isManagerProject = true;

                    if (task.assignedTo) {
                      const memberName = task.assignedTo.name;
                      if (!teamWorkload[memberName])
                        teamWorkload[memberName] = { tasks: 0 };
                      teamWorkload[memberName].tasks += 1;
                    }
                  }
                });
              });
            });

            if (isManagerProject) {
              managerProjects.push({
                id: proj.id,
                name: proj.name,
                progress: proj.progress ?? 0,
                deadline: proj.categories
                  .flatMap((cat) =>
                    cat.subcats.flatMap((sub) =>
                      sub.tasks.map((t) => t.deadline)
                    )
                  )
                  .sort()[0],
              });
            }
          });

          const workloadList = Object.entries(teamWorkload).map(
            ([member, info]) => {
              let level = "Low";
              if (info.tasks >= 5) level = "High";
              else if (info.tasks >= 3) level = "Medium";
              return { member, tasks: info.tasks, workload: level };
            }
          );

          setProjects(managerProjects);
          setWorkload(workloadList);

          // ✅ Find all team member IDs whose manager is the current manager
          const teamMemberIds = (users)
            .filter(u => u.managerId === managerId)
            .map(u => u.id);

          // ✅ Filter activity for manager or their direct team
          const managerActivity = userActivity.filter(a => {
            const isOwnerOrTeam = a.employeeId === managerId || teamMemberIds.includes(a.employeeId);
            const isAssigned = a.assignedToId && (a.assignedToId === managerId || teamMemberIds.includes(a.assignedToId));
            return isOwnerOrTeam || isAssigned;
          });

          // ✅ Sort latest first
          const sortedActivity = managerActivity.sort(
            (a, b) => new Date(b.workDate) - new Date(a.workDate)
          );

          setActivity(sortedActivity);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (managerId) fetchDashboardData();
  }, [managerId, contextLoading, userProjects, userActivity, users]);

  const getActivityIcon = (a) => {
    if (a.type === "ANNOUNCEMENT") {
      return <Bell className="w-5 h-5 text-white/50" />;
    } else if (a.type === "WORKLOG") {
      if (a.progress === 100) {
        return <FileCheck2 className="w-5 h-5 text-accent" />;
      } else {
        return <Activity className="w-5 h-5 text-white/30" />;
      }
    } else {
      return null;
    }
  };

  return (
    <div className="w-full space-y-16 lg:space-y-24">
      {/* Header */}
      <header className="flex flex-col gap-4 border-b border-white/5 pb-8">
        <h1 className="headline-2 text-white uppercase tracking-[0.2em]">
          Manager <span className="text-accent">Overview</span>
        </h1>
        <p className="text-secondary text-sm tracking-widest uppercase">Team & Operations Control</p>
        <div className="w-24 h-1 bg-accent mt-4"></div>
      </header>

      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-16 lg:gap-24">
        {/* Projects */}
        <div className="w-full">
          <div className="flex justify-between items-end border-b border-white/5 pb-4 mb-8">
             <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-white">Active Deployments</h2>
             <span className="text-[0.65rem] text-accent tracking-[0.2em] font-black uppercase">Project Index</span>
          </div>

          {loading ? (
             <div className="animate-pulse space-y-6">
                 {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex justify-between items-center py-4 border-b border-white/5">
                        <div className="w-1/3 h-4 bg-[#111]"></div>
                        <div className="w-16 h-4 bg-[#111]"></div>
                    </div>
                 ))}
             </div>
          ) : projects.length === 0 ? (
            <div className="flex flex-col items-center justify-center text-white/20 py-20">
              <History size={48} className="mb-4 stroke-1" />
              <p className="text-[0.7rem] uppercase tracking-widest font-bold">No active projects</p>
            </div>
          ) : (
            <div className="overflow-y-auto max-h-[400px] scrollbar-none">
              <table className="w-full text-left border-collapse">
                <thead className="sticky top-0 bg-[#050505]">
                  <tr>
                    <th className="py-4 px-2 text-[0.65rem] tracking-[0.3em] uppercase text-white/50 font-bold border-b border-white/10">Project</th>
                    <th className="py-4 px-2 text-[0.65rem] tracking-[0.3em] uppercase text-white/50 font-bold border-b border-white/10 text-center">Status</th>
                    <th className="py-4 px-2 text-[0.65rem] tracking-[0.3em] uppercase text-white/50 font-bold border-b border-white/10 text-right">Deadline</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {projects.map((p) => (
                    <tr key={p.id} className="group hover:bg-[#111] transition-colors">
                      <td className="py-5 px-2 font-bold text-white tracking-widest uppercase text-xs">
                        {p.name}
                      </td>
                      <td className="py-5 px-2 text-center">
                        <span className={`px-3 py-1 text-[0.55rem] uppercase tracking-widest font-black ${p.progress === 100 ? "text-accent" : "text-white/40"}`}>
                          {p.progress === 100 ? "Completed" : "Pending"}
                        </span>
                      </td>
                      <td className="py-5 px-2 text-secondary tracking-widest text-[0.65rem] text-right font-serif uppercase">
                        {p.deadline
                          ? new Date(p.deadline).toLocaleDateString("en-GB", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          })
                          : "TBD"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Team Workload */}
        <div className="w-full border-l lg:border-white/5 lg:pl-12">
          <div className="flex justify-between items-end border-b border-white/5 pb-4 mb-8">
             <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-white">Workload</h2>
             <span className="text-[0.65rem] text-secondary tracking-[0.2em] font-black uppercase">Fleet Status</span>
          </div>

          {loading ? (
            <div className="animate-pulse space-y-4">
                 {[...Array(3)].map((_, i) => (
                    <div key={i} className="flex justify-between items-center py-4 border-b border-white/5">
                        <div className="w-1/2 h-3 bg-[#111]"></div>
                        <div className="w-8 h-3 bg-[#111]"></div>
                    </div>
                 ))}
             </div>
          ) : workload.length === 0 ? (
            <div className="flex flex-col items-center justify-center text-white/20 py-16">
              <History size={36} className="mb-4 stroke-1" />
              <p className="text-[0.65rem] font-bold tracking-[0.2em] uppercase">No assigned staff</p>
            </div>
          ) : (
            <div className="space-y-0 border-t border-white/5">
              {workload.map((w, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center py-5 border-b border-white/5 group hover:bg-[#111] px-4 -mx-4 transition-colors relative"
                >
                  <span className="font-bold text-white tracking-widest text-xs uppercase z-10">{w.member}</span>
                  <span className="text-[0.65rem] text-secondary tracking-[0.2em] uppercase font-serif z-10">
                    <span className="text-white font-bold">{w.tasks}</span> tasks ({w.workload})
                  </span>
                  {w.workload === "High" && (
                     <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent z-0"></div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ✅ Recent Team Activity */}
      <div className="w-full border-t border-white/5 pt-16">
         <div className="flex justify-between items-end border-b border-white/5 pb-4 mb-6">
           <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-white flex items-center gap-3">
             <History className="w-4 h-4 text-accent" />
             Team Operations Log
           </h2>
         </div>

        {loading ? (
             <div className="animate-pulse space-y-0">
                 {[...Array(3)].map((_, i) => (
                    <div key={i} className="flex gap-6 items-center py-5 border-b border-white/5">
                       <div className="w-5 h-5 bg-[#111]"></div>
                       <div className="flex-1 space-y-2">
                           <div className="h-3 w-1/4 bg-[#111]"></div>
                           <div className="h-2 w-1/2 bg-[#111]"></div>
                       </div>
                       <div className="h-2 w-16 bg-[#111]"></div>
                    </div>
                 ))}
             </div>
        ) : activity.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-white/20 py-20">
            <History size={48} className="mb-6 stroke-1" />
            <p className="text-[0.65rem] tracking-[0.3em] font-bold uppercase mb-2">No recent activity</p>
            <p className="text-xs font-serif text-white/30 italic">Awaiting logs.</p>
          </div>
        ) : (
          <div className="space-y-0 h-[400px] overflow-y-auto scrollbar-none pr-4">
            {activity.map((a, idx) => {
              const icon = getActivityIcon(a);
              return (
                <div
                  key={idx}
                  className="flex items-start gap-4 md:gap-8 py-5 border-b border-white/5 group hover:bg-[#111]/50 transition-colors"
                >
                  <div className="mt-1 transition-transform group-hover:scale-110">
                    {icon}
                  </div>

                  <div className="flex-1">
                    {a.type === "WORKLOG" ? (
                      <>
                        <p className="text-white font-bold tracking-widest uppercase text-xs mb-2">{a.employee?.name || "Unnamed"}</p>
                        <p className="text-sm text-secondary leading-relaxed">
                          {a.progress === 100 ? (
                            <>
                              <span className="font-bold text-accent">Completed</span>{" "}
                              <span className="text-white">{a.task?.title}</span>
                              {a.step?.name && <> &mdash; <span className="text-gray-400">{a.step.name}</span></>}
                              {a.projectName && <> // <span className="text-white">{a.projectName}</span></>}
                            </>
                          ) : (
                            <>
                              Updated progress to <span className="font-bold text-white">{a.progress}%</span> on{" "}
                              <span className="text-white">{a.task?.title}</span>
                              {a.step?.name && <> &mdash; <span className="text-gray-400">{a.step.name}</span></>}
                              {a.projectName && <> // <span className="text-white">{a.projectName}</span></>}
                            </>
                          )}
                        </p>
                        {a.notes && <p className="text-xs text-secondary/30 italic mt-2">“{a.notes}”</p>}
                      </>
                    ) : (
                      <>
                        <p className="text-white font-bold tracking-widest uppercase text-xs mb-2 flex items-center gap-2">
                          Announcement
                        </p>
                        <p className="text-sm text-secondary">
                          <span className="font-bold text-white">{a.project?.name || "Project"}</span> assigned to{" "}
                          <span className="font-bold text-accent">{a.assignedTo?.name || "Employee"}</span>
                        </p>
                      </>
                    )}
                  </div>

                  <div className="text-right">
                    <div className="text-[0.65rem] text-secondary tracking-widest uppercase mb-1">
                       {new Date(a.workDate || a.createdAt).toLocaleDateString("en-US", { day: "2-digit", month: "short" })}
                    </div>
                    <div className="text-[0.55rem] text-white/30 tracking-[0.2em] font-serif uppercase">
                       {new Date(a.workDate || a.createdAt).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: false })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
