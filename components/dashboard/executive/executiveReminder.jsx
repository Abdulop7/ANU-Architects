"use client";

import { useEffect, useState } from "react";
import { Loader2, Bell, User, Send, Trash2, CheckSquare } from "lucide-react";
import axios from "axios";
import { useRole } from "../../../lib/roleContext";

export default function ExecutiveReminder() {
  const { id, contextLoading, users, reminders: userReminders, setReminders: setUserReminders } = useRole();
  const [employees, setEmployees] = useState([]);
  const [reminders, setReminders] = useState([]);
  const [myReminders, setMyReminders] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    if (!contextLoading && users?.length) {
      setEmployees(users);
      initReminders();
      setLoading(false);
    }
  }, [contextLoading, users]);

  const initReminders = () => {
    const active = userReminders.filter((r) => r.status !== "completed");
    setReminders(active);
    setMyReminders(
      active.filter((r) => r.user?.id === id)
    );
  };

  const handleAddReminder = async () => {
    if (!selectedEmployee || !message.trim()) return;
    setSending(true);
    try {
      const res = await axios.post("/api/reminders", {
        userId: selectedEmployee.id,
        message,
        remindAt: new Date().toISOString(),
      });

      const newReminder = {
        ...res.data.reminder,
        user: selectedEmployee,
      };

      setReminders((prev) => [newReminder, ...prev]);
      setUserReminders((prev) => [newReminder, ...prev]);

      setMessage("");
      setSelectedEmployee(null);
    } catch (err) {
      console.error("Error adding reminder:", err);
    } finally {
      setSending(false);
    }
  };

  const handleDelete = async (rId) => {
    try {
      await axios.delete("/api/reminders", { data: { id: rId } });
      setReminders((prev) => prev.filter((r) => r.id !== rId));
      setMyReminders((prev) => prev.filter((r) => r.id !== rId));
      setUserReminders((prev) => prev.filter((r) => r.id !== rId));
    } catch (err) {
      console.error("Error deleting reminder:", err);
    }
  };

  const handleComplete = async (rId) => {
    try {
      await axios.put("/api/reminders", { id: rId });
      setReminders((prev) => prev.filter((r) => r.id !== rId));
      setMyReminders((prev) => prev.filter((r) => r.id !== rId));
      setUserReminders((prev) => prev.filter((r) => r.id !== rId));
    } catch (err) {
      console.error("Error marking reminder completed:", err);
    }
  };

  if (loading || contextLoading) {
    return (
      <div className="flex w-full min-h-[50vh] items-center justify-center">
        <Loader2 className="animate-spin text-white/20 h-10 w-10" />
      </div>
    );
  }

  return (
    <div className="w-full space-y-16 lg:space-y-24">
      {/* Header */}
      <header className="flex flex-col gap-4 border-b border-white/5 pb-8">
        <h1 className="headline-2 text-white uppercase tracking-[0.2em] flex items-center gap-4">
          <Bell className="text-accent h-10 w-10" />
          Command <span className="text-accent">Center</span>
        </h1>
        <p className="text-secondary text-sm tracking-widest uppercase">Global Reminders & Operations</p>
        <div className="w-24 h-1 bg-accent mt-4"></div>
      </header>

      {/* Assign Reminder */}
      <div className="w-full">
         <div className="flex justify-between items-end border-b border-white/5 pb-4 mb-8">
           <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-white flex items-center gap-3">
             <Send className="w-4 h-4 text-accent" />
             Dispatch Directive
           </h2>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-0">
           <div className="lg:border-r border-b lg:border-b-0 border-white/5 bg-[#050505]">
             <select
               value={selectedEmployee?.id || ""}
               onChange={(e) => {
                 const emp = employees.find((emp) => emp.id === Number(e.target.value));
                 setSelectedEmployee(emp);
               }}
               className="w-full bg-transparent text-white p-6 outline-none appearance-none cursor-pointer uppercase tracking-widest text-[0.7rem] font-bold"
             >
               <option value="" className="bg-[#111]">SELECT OPERATIVE</option>
               {employees.map((emp) => (
                 <option key={emp.id} value={emp.id} className="bg-[#111]">
                   {emp.name} — {emp.role}
                 </option>
               ))}
             </select>
           </div>

           <div className="flex bg-[#050505] border-b border-white/5">
             <input
               type="text"
               placeholder="INPUT DIRECTIVE DETAILS..."
               value={message}
               onKeyDown={(e) => {
                 if (e.key === "Enter") handleAddReminder();
               }}
               onChange={(e) => setMessage(e.target.value)}
               className="flex-1 bg-transparent text-white p-6 outline-none placeholder:text-white/20 font-serif tracking-wide"
             />
             <button
               onClick={handleAddReminder}
               disabled={sending || !selectedEmployee || !message.trim()}
               className="bg-accent text-white px-8 lg:px-12 hover:bg-orange-600 transition-colors disabled:opacity-50 flex justify-center items-center group cursor-pointer"
             >
               {sending ? (
                 <Loader2 className="animate-spin w-5 h-5" />
               ) : (
                 <span className="text-[0.7rem] font-bold tracking-[0.3em] uppercase group-hover:scale-105 transition-transform flex items-center gap-3">
                    Deploy
                 </span>
               )}
             </button>
           </div>
         </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 lg:gap-24">
        {/* My Reminders */}
        <div className="w-full">
           <div className="flex justify-between items-end border-b border-white/5 pb-4 mb-8">
             <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-white flex items-center gap-3">
               <User className="w-4 h-4 text-accent" />
               Personal Directives
             </h2>
           </div>

          {myReminders.length > 0 ? (
            <div className="space-y-0 border-t border-white/5">
              {myReminders.map((r) => (
                <div
                  key={r.id}
                  className="p-6 border-b border-white/5 hover:bg-[#111] transition-colors flex flex-col md:flex-row gap-6 md:justify-between md:items-center group"
                >
                  <div>
                    <h4 className="text-lg font-serif text-white mb-2 leading-relaxed">
                      "{r.message}"
                    </h4>
                    <p className="text-[0.65rem] text-secondary tracking-[0.2em] uppercase">
                      Issued on {new Date(r.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  <button
                    onClick={() => handleComplete(r.id)}
                    className="flex shrink-0 items-center gap-3 text-accent hover:text-white transition-colors duration-300 font-bold uppercase tracking-widest text-[0.65rem]"
                  >
                    <CheckSquare className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span>Acknowledge</span>
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-12 border-t border-b border-white/5 text-center">
              <p className="text-[0.65rem] tracking-[0.3em] font-bold text-white/20 uppercase">No active directives</p>
            </div>
          )}
        </div>

        {/* Global Active Reminders */}
        <div className="w-full">
           <div className="flex justify-between items-end border-b border-white/5 pb-4 mb-8">
             <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-white flex items-center gap-3">
               <Bell className="w-4 h-4 text-accent" />
               Global Operations
             </h2>
           </div>

          {reminders.length > 0 ? (
            <div className="space-y-0 border-t border-white/5 h-[400px] overflow-y-auto scrollbar-none pr-4">
              {reminders.map((r) => (
                <div
                  key={r.id}
                  className="p-6 border-b border-white/5 hover:bg-[#111] transition-colors flex flex-col md:flex-row gap-6 md:justify-between md:items-start group"
                >
                  <div>
                    <p className="text-[0.7rem] font-bold text-accent tracking-[0.2em] uppercase mb-2">
                       {r.user?.name || "Unknown Operative"}
                    </p>
                    <h4 className="text-sm font-serif text-white mb-3 leading-relaxed">
                      "{r.message}"
                    </h4>
                    <p className="text-[0.55rem] text-secondary tracking-[0.2em] uppercase">
                      Issued on {new Date(r.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  <button
                    onClick={() => handleDelete(r.id)}
                    className="shrink-0 text-white/20 hover:text-red-500 transition-colors p-2"
                  >
                    <Trash2 className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-12 border-t border-b border-white/5 text-center">
              <p className="text-[0.65rem] tracking-[0.3em] font-bold text-white/20 uppercase">System idle</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
