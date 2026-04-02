"use client";
import { useEffect, useState } from "react";
import { useRole } from "../../../lib/roleContext";
import { FolderOpen, History, Bell } from "lucide-react";

export default function AccountantDashboard() {
  const { contextLoading, projects: userProjects, activity } = useRole();

  const [projects, setProjects] = useState([]);
  const [activities, setActivities] = useState([]);
  const [loadingProjects, setLoadingProjects] = useState(true);
  const [loadingActivity, setLoadingActivity] = useState(true);

  // ✅ Fetch Active Projects
  useEffect(() => {
    if (contextLoading) return;

    const loadProjects = async () => {
      try {
        if (!contextLoading && userProjects) {
          const transformed = userProjects
            .filter(
              (proj) => (proj.paymentProgress ?? 0) < 100 && proj.status !== "Cancelled"
            )
            .map((proj) => ({
              name: proj.name,
              progress: proj.progress ?? 0,
              paymentProgress: proj.paymentProgress ?? 0
            }));

          setProjects(transformed);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoadingProjects(false);
      }
    };

    loadProjects();
  }, [contextLoading, userProjects]);

  // ✅ Fetch & Deduplicate ANNOUNCEMENTS by project
  useEffect(() => {
    if (contextLoading) return;

    const loadActivity = async () => {
      try {
        if (!contextLoading && activity) {
          const filtered = activity.filter((a) => a.type === "ANNOUNCEMENT");
          const uniqueByEmployeeAndProject = Object.values(
            filtered.reduce((acc, curr) => {
              const key = `${curr.projectId}-${curr.assignedToId}`;
              const existing = acc[key];

              if (!existing || new Date(curr.createdAt) > new Date(existing.createdAt)) {
                acc[key] = curr;
              }
              return acc;
            }, {})
          );

          setActivities(uniqueByEmployeeAndProject.sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt)));
        }
      } catch (err) {
        console.error("Error loading activity:", err);
      } finally {
        setLoadingActivity(false);
      }
    };

    loadActivity();
  }, [contextLoading, activity]);

  const getActivityIcon = (a) => (
    <Bell className="w-4 h-4 text-white/50" />
  );

  return (
    <div className="w-full space-y-16 lg:space-y-24">
      {/* Header */}
      <header className="flex flex-col gap-4 border-b border-white/5 pb-8 mt-12">
        <h1 className="headline-2 text-white uppercase tracking-[0.2em] flex items-center gap-4">
          Financial <span className="text-accent">Overview</span>
        </h1>
        <p className="text-secondary text-sm tracking-widest uppercase">Ledger & Transaction status</p>
        <div className="w-24 h-1 bg-accent mt-4"></div>
      </header>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 overflow-y-auto pr-2 pb-12">
        
        {/* Active Projects Financials */}
        <div className="w-full">
           <div className="flex justify-between items-end border-b border-white/5 pb-4 mb-8">
             <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-white">Project Financials</h2>
             <span className="text-[0.65rem] text-accent tracking-[0.2em] font-black uppercase">Outstanding Balances</span>
           </div>

          <div className="space-y-0 text-white">
            {loadingProjects ? (
              <div className="animate-pulse space-y-6">
                 {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex flex-col gap-2 border-b border-white/5 pb-4">
                        <div className="flex justify-between">
                           <div className="w-1/3 h-4 bg-[#111]"></div>
                           <div className="w-8 h-4 bg-[#111]"></div>
                        </div>
                        <div className="w-full h-1 bg-[#111]"></div>
                    </div>
                 ))}
             </div>
            ) : projects.length === 0 ? (
              <div className="flex flex-col items-center justify-center text-white/20 py-20">
                <FolderOpen size={48} className="mb-4 stroke-1" />
                <p className="text-[0.7rem] uppercase tracking-[0.3em] font-bold">No active collections</p>
              </div>
            ) : (
              projects.map((project, idx) => (
                <div key={idx} className="pb-6 border-b border-white/5 group hover:bg-[#111] transition-colors -mx-4 px-4 py-4 cursor-pointer">
                  <div className="flex justify-between items-end mb-2">
                    <span className="font-bold tracking-widest uppercase text-white/90 group-hover:text-white transition-colors">{project.name}</span>
                    <span className="font-serif text-[0.7rem] font-bold text-accent">
                      {project.paymentProgress}%
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-[0.55rem] text-secondary tracking-[0.2em] uppercase font-bold mb-1 mt-2">
                     <span>Payment Recovery</span>
                  </div>
                  <div className="w-full h-[2px] bg-white/5 overflow-hidden">
                    <div
                      className="h-full bg-accent transition-all duration-1000"
                      style={{ width: `${project.paymentProgress}%` }}
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
             <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-white">Event Log</h2>
             <span className="text-[0.65rem] text-secondary tracking-[0.2em] font-black uppercase">System Announcements</span>
           </div>

          <div className="space-y-0 border-t border-white/5">
            {loadingActivity ? (
              <div className="animate-pulse space-y-4">
                 {[...Array(3)].map((_, i) => (
                    <div key={i} className="flex gap-4 items-center py-4 border-b border-white/5">
                        <div className="w-4 h-4 bg-[#111]"></div>
                        <div className="w-2/3 h-3 bg-[#111]"></div>
                    </div>
                 ))}
             </div>
            ) : activities.length > 0 ? (
              <div className="max-h-[500px] overflow-y-auto scrollbar-none pr-2 space-y-0">
                {activities.map((a, idx) => {
                  const icon = getActivityIcon(a);
                  return (
                    <div
                      key={idx}
                      className="flex items-start gap-4 py-5 border-b border-white/5 group hover:bg-[#111] transition-colors -mx-4 px-4"
                    >
                      <div className="mt-1 transition-transform group-hover:scale-110">
                        {icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <p className="text-white font-bold tracking-widest uppercase text-[0.65rem]">Project Assignment</p>
                          <div className="text-[0.55rem] text-secondary tracking-[0.2em] uppercase font-serif">
                             {new Date(a.createdAt).toLocaleDateString("en-GB", { month: "short", day: "2-digit" })}
                          </div>
                        </div>
                        <p className="text-[0.65rem] text-secondary tracking-widest leading-relaxed uppercase mt-1">
                          <span className="font-bold text-white">{a.project?.name || "Unnamed"}</span> initiated
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center text-white/20 py-20">
                <History size={48} className="mb-4 stroke-1" />
                <p className="text-[0.7rem] uppercase tracking-[0.3em] font-bold">No recent events</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
