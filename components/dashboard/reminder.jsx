"use client";

import { useEffect, useState } from "react";
import { Loader2, Bell, CheckCircle } from "lucide-react";
import axios from "axios";
import { useRole } from "../../lib/roleContext";
import { Card, CardContent } from "./card";
import { Button } from "../ui/button";

export default function UserReminders() {
  const { contextLoading, id,reminders:userReminders } = useRole();
  const [reminders, setReminders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    if (contextLoading) return;

    const reminders = userReminders.filter(
        (r) => r.userId === id && r.isDone !== "completed"
      );

      setReminders(reminders);
      setLoading(false)
  }, [contextLoading]);

  const handleComplete = async (id) => {
    try {
      setUpdating(true);
      await axios.put("/api/reminders", { id });
    } catch (err) {
      console.error("Error marking reminder completed:", err);
    } finally {
      setUpdating(false);
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
          My Reminders
        </span>
        <span className="w-10 h-1 bg-orange-500 rounded-full"></span>
      </h1>

      {/* Reminders List */}
      <Card className="border border-orange-100 rounded-2xl shadow-md flex-1 overflow-y-auto">
        <CardContent className="p-6 space-y-4">
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
                    <p className="text-xs text-gray-500 mt-1">
                      {new Date(r.createdAt).toLocaleString()}
                    </p>
                  </div>

                  <Button
                    onClick={() => handleComplete(r.id)}
                    disabled={updating}
                    className={`flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold px-5 py-2 mt-4 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-md ${
                      updating ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                  >
                    {updating ? (
                      <>
                        <Loader2 className="animate-spin w-4 h-4" />
                        Updating...
                      </>
                    ) : (
                      <>
                        <CheckCircle className="w-4 h-4" />
                        Mark Completed
                      </>
                    )}
                  </Button>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 italic text-sm text-center">
              🎉 No active reminders — all caught up!
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
