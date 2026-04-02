"use client";
import { useEffect, useState } from "react";
import { Loader2, Bell, CheckSquare } from "lucide-react";
import axios from "axios";
import { useRole } from "../../lib/roleContext";

export default function UserReminders() {
  const { contextLoading, id, reminders: userReminders, setReminders: setUserReminders } = useRole();
  const [reminders, setReminders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    if (contextLoading) return;

    if (userReminders) {
      const activeReminders = userReminders.filter(
        (r) => r.userId === id && r.isDone !== "completed"
      );
      setReminders(activeReminders);
      setLoading(false);
    }
  }, [contextLoading, userReminders, id]);

  const handleComplete = async (rId) => {
    try {
      setUpdating(true);
      await axios.put("/api/reminders", { id: rId });

      setReminders((prev) => prev.filter((r) => r.id !== rId));

      setUserReminders((prev) =>
        prev.map((r) =>
          r.id === rId ? { ...r, isDone: "completed" } : r
        )
      );
    } catch (err) {
      console.error("Error marking reminder completed:", err);
    } finally {
      setUpdating(false);
    }
  };

  if (loading || contextLoading) {
    return (
      <div className="flex h-full min-h-[50vh] w-full items-center justify-center">
        <Loader2 className="animate-spin text-white/20 h-10 w-10" />
      </div>
    );
  }

  return (
    <div className="w-full space-y-16 lg:space-y-24">
      {/* Header */}
      <header className="flex flex-col gap-4 border-b border-white/5 pb-8 mt-12">
        <h1 className="headline-2 text-white uppercase tracking-[0.2em] flex items-center gap-4">
          <Bell className="text-accent h-10 w-10" />
          <span className="text-accent">Directives</span>
        </h1>
        <p className="text-secondary text-sm tracking-widest uppercase">Assigned operational tasks</p>
        <div className="w-24 h-1 bg-accent mt-4"></div>
      </header>

      {/* Reminders List */}
      <div className="w-full">
         <div className="flex justify-between items-end border-b border-white/5 pb-4 mb-8">
           <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-white">Active Feed</h2>
           <span className="text-[0.65rem] text-accent tracking-[0.2em] font-black uppercase">Pending Acknowledgement</span>
         </div>
         
        {reminders.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
            {reminders.map((r) => (
              <div
                key={r.id}
                className="group border-b border-white/5 pb-6 transition-colors"
              >
                <div className="flex justify-between items-start mb-6">
                   <h4 className="text-lg font-serif text-white leading-relaxed pr-8">
                     "{r.message}"
                   </h4>
                   <div className="text-right shrink-0">
                     <span className="block text-[0.55rem] text-secondary tracking-[0.2em] uppercase font-serif mb-1">Received</span>
                     <span className="text-[0.65rem] font-black text-white font-serif tracking-widest uppercase text-right">
                       {new Date(r.createdAt).toLocaleDateString("en-GB", { month: "short", day: "2-digit" })}
                     </span>
                   </div>
                </div>

                <div className="flex justify-end gap-2 border-t border-white/5 pt-4">
                  <button
                    onClick={() => handleComplete(r.id)}
                    disabled={updating}
                    className={`flex items-center gap-3 font-bold uppercase tracking-widest text-[0.65rem] transition-colors duration-300 ${
                      updating ? "text-white/20 cursor-not-allowed" : "text-accent hover:text-white group-hover:scale-105"
                    }`}
                  >
                    {updating ? (
                      <>
                        <Loader2 className="animate-spin w-4 h-4" />
                        <span>Processing</span>
                      </>
                    ) : (
                      <>
                        <CheckSquare className="w-5 h-5" />
                        <span>Acknowledge</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-20 border-y border-white/5 flex flex-col items-center">
            <Bell className="w-12 h-12 text-white/5 mb-6 stroke-1" />
            <p className="text-[0.65rem] tracking-[0.3em] font-bold text-white/20 uppercase">
              No active directives
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
