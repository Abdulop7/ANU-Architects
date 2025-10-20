"use client";

import { useEffect, useState } from "react";
import { Loader2, Bell, User, Send, Trash2, CheckCircle } from "lucide-react";
import axios from "axios";
import { Card, CardContent } from "../card";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { useRole } from "../../../lib/roleContext";

export default function ExecutiveReminder() {
  const { id,contextLoading, users, reminders: userReminders,setReminders:setUserReminders } = useRole();
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

  // ✅ Create Reminder (update local instantly)
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
        user: selectedEmployee, // ✅ attach selected user details manually
      };

      // 🔥 Update local state instantly
      setReminders((prev) => [newReminder, ...prev]);
      setUserReminders((prev) => [newReminder, ...prev]);
      if (selectedEmployee.role === "executive") {
        setMyReminders((prev) => [newReminder, ...prev]);
      }

      setMessage("");
      setSelectedEmployee(null);
    } catch (err) {
      console.error("Error adding reminder:", err);
    } finally {
      setSending(false);
    }
  };

  // ✅ Delete Reminder (remove locally)
  const handleDelete = async (id) => {
    try {
      await axios.delete("/api/reminders", { data: { id } });
      setReminders((prev) => prev.filter((r) => r.id !== id));
      setMyReminders((prev) => prev.filter((r) => r.id !== id));
      setUserReminders((prev) => prev.filter((r) => r.id !== id));
    } catch (err) {
      console.error("Error deleting reminder:", err);
    }
  };

  // ✅ Complete Reminder (update locally)
  const handleComplete = async (id) => {
    try {
      await axios.put("/api/reminders", { id });
      setReminders((prev) => prev.filter((r) => r.id !== id));
      setMyReminders((prev) => prev.filter((r) => r.id !== id));
      setUserReminders((prev) => prev.filter((r) => r.id !== id));
    } catch (err) {
      console.error("Error marking reminder completed:", err);
    }
  };

  if (loading || contextLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-gray-50">
        <Loader2 className="animate-spin text-orange-500 h-8 w-8" />
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen w-full bg-gray-50 p-6 space-y-6 overflow-hidden">
      {/* Header */}
      <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight flex items-center gap-3">
        <Bell className="text-orange-500 h-8 w-8" />
        <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
          Reminders
        </span>
        <span className="w-10 h-1 bg-orange-500 rounded-full"></span>
      </h1>

      {/* Assign Reminder */}
      <Card className="border border-orange-100 rounded-2xl shadow-lg">
        <CardContent className="p-6 space-y-4">
          <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
            <User className="h-5 w-5 text-orange-500" /> Assign a Reminder
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="col-span-1">
              <select
                value={selectedEmployee?.id || ""}
                onChange={(e) => {
                  const emp = employees.find(
                    (emp) => emp.id === Number(e.target.value)
                  );
                  setSelectedEmployee(emp);
                }}
                className="w-full border rounded-lg p-2 bg-white text-gray-700 focus:ring-2 focus:ring-orange-400"
              >
                <option value="">Select Employee</option>
                {employees.map((emp) => (
                  <option key={emp.id} value={emp.id}>
                    {emp.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-span-1 md:col-span-2 flex gap-2">
              <Input
                type="text"
                placeholder="Enter reminder message..."
                value={message}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleAddReminder();
                  }
                }}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1"
              />
              <Button
                onClick={handleAddReminder}
                disabled={sending}
                className="bg-orange-500 hover:bg-orange-600 text-white"
              >
                {sending ? (
                  <Loader2 className="animate-spin w-4 h-4" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* My Reminders */}
      <Card className="border border-orange-100 rounded-2xl shadow-md">
        <CardContent className="p-6 space-y-4">
          <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
            <Bell className="h-5 w-5 text-orange-500" /> My Reminders
          </h3>

          {myReminders.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {myReminders.map((r) => (
                <div
                  key={r.id}
                  className="p-4 bg-white border border-orange-100 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <h4 className="text-base font-semibold text-gray-800 mb-1">
                      {r.message}
                    </h4>
                    <p className="text-sm text-orange-600">{r.user?.name || "—"}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {new Date(r.createdAt).toLocaleString()}
                    </p>
                  </div>
                  <div className="flex justify-end gap-2 mt-3">
                    <Button
                      onClick={() => handleComplete(r.id)}
                      className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold px-4 py-2 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-md"
                    >
                      <CheckCircle className="w-4 h-4" />
                      Mark Completed
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 italic text-sm">No personal reminders yet.</p>
          )}
        </CardContent>
      </Card>

      {/* Active Reminders */}
      <div className="flex-1 overflow-y-auto pb-6">
        <Card className="border border-orange-100 rounded-2xl shadow-md">
          <CardContent className="p-6 space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
              <Bell className="h-5 w-5 text-orange-500" /> Active Reminders
            </h3>

            {reminders.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {reminders.map((r) => (
                  <div
                    key={r.id}
                    className="p-4 bg-white border border-orange-100 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                  >
                    <div>
                      <h4 className="text-base font-semibold text-gray-800 mb-1">
                        {r.message}
                      </h4>
                      <p className="text-sm text-orange-600">{r.user?.name || "—"}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        {new Date(r.createdAt).toLocaleString()}
                      </p>
                    </div>
                    <button
                      onClick={() => handleDelete(r.id)}
                      className="mt-3 self-end text-red-500 hover:text-red-700 transition cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 italic text-sm">No active reminders yet.</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
