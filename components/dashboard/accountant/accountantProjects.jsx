"use client";
import { useEffect, useState } from "react";
import { FolderOpen } from "lucide-react";
import { useRole } from "../../../lib/roleContext";

export default function AccountantProjects() {
  const { contextLoading, projects: userProjects } = useRole();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (contextLoading) return;

    const loadProjects = async () => {
      try {
        if (!contextLoading && userProjects) {
          const activeProjects = userProjects
            .filter(
              (proj) =>
                proj.status !== "Cancelled" &&
                (proj.progress ?? 0) < 100
            )
            .map((proj) => ({
              id: proj.id,
              name: proj.name,
              progress: proj.progress ?? 0,
              paymentProgress: proj.paymentProgress ?? 0,
              status: proj.status,
            }));

          setProjects(activeProjects);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, [contextLoading, userProjects]);

  return (
    <div className="w-full space-y-16 lg:space-y-24">
      {/* Header */}
      <header className="flex flex-col gap-4 border-b border-white/5 pb-8 mt-12">
        <h1 className="headline-2 text-white uppercase tracking-[0.2em]">
          Ledger <span className="text-accent">Index</span>
        </h1>
        <p className="text-secondary text-sm tracking-widest uppercase">Ongoing operations and balance tracking</p>
        <div className="w-24 h-1 bg-accent mt-4"></div>
      </header>

      {/* Content */}
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
            <p className="text-[0.7rem] font-bold uppercase tracking-[0.3em] text-white/20">No active ledgers</p>
          </div>
        ) : (
          projects.map((proj) => (
            <div key={proj.id} className="group transition-colors relative pb-8 border-b border-white/5">
              {/* Title */}
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-bold text-lg text-white uppercase tracking-widest">{proj.name}</h2>
              </div>

              {/* Project Progress */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2 text-[0.65rem] tracking-[0.2em] uppercase">
                  <div className="font-bold text-secondary">
                    Operational Status
                  </div>
                  <span className="text-white font-serif font-bold">
                    {proj.progress}%
                  </span>
                </div>
                <div className="w-full h-1 bg-white/5 overflow-hidden">
                  <div
                    className="h-full bg-white/40 transition-all duration-1000"
                    style={{ width: `${proj.progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Payment Progress */}
              <div>
                <div className="flex items-center justify-between mb-2 text-[0.65rem] tracking-[0.2em] uppercase">
                  <div className="font-bold text-accent">
                    Payment Recovery
                  </div>
                  <span className="text-accent font-serif font-bold">
                    {proj.paymentProgress}%
                  </span>
                </div>
                <div className="w-full h-1 bg-white/5 overflow-hidden">
                  <div
                    className="h-full bg-accent transition-all duration-1000"
                    style={{ width: `${proj.paymentProgress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
