"use client";

import { useState, useEffect } from "react";
import { useRole } from "../../../../../lib/roleContext";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "../../../../../components/dashboard/card";
import { Button } from "../../../../../components/ui/button";
import { Dialog, DialogTitle } from "@headlessui/react";
import { ClipboardList } from "lucide-react";


export default function TasksPage() {

  const { role, id, contextLoading, projects } = useRole();

  const router = useRouter();

  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [selectedStepIndex, setSelectedStepIndex] = useState(null);
  const [hours, setHours] = useState(1);
  const [notes, setNotes] = useState("");

  useEffect(() => {
    if (!role) return;

    if (role === "executive") {
      router.replace("/dashboard");
      return;
    }

    const fetchTasks = async () => {
      try {
        // const res = await fetch("/api/projects");
        // if (!res.ok) throw new Error("Failed to fetch projects");
        // const data = await res.json();

        if (!contextLoading) {

          const userId = id; // Replace with dynamic user id
          const userTasks = [];

          projects.forEach((proj) => {
            proj.categories.forEach((cat) => {
              cat.subcats.forEach((sub) => {
                sub.tasks.forEach((task) => {
                  if (task.assignedTo?.id === userId) {

                    const hasIncompleteSteps = task.steps?.some((step) => !step.completed);

                    if (hasIncompleteSteps) {
                      userTasks.push({
                        projectId: proj.id,
                        projectName: proj.name,
                        taskId: task.id,
                        title: task.title,
                        deadline: task.deadline,
                        steps: task.steps || [],
                      });
                    }
                  }
                });
              });
            });
          });

          setTasks(userTasks);
          console.log(userTasks);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, [role]);

  const openWorkLogModal = (task, stepIndex) => {
    setSelectedTask(task);
    setSelectedStepIndex(stepIndex);
    setHours(1);
    setNotes("");
    setIsModalOpen(true);
  };

  const submitWorkLog = async () => {
    if (!selectedTask || selectedStepIndex === null) return;

    setSubmitting(true); // start loading

    // Update UI instantly
    setTasks((prev) =>
      prev.map((task) => {
        if (task.taskId === selectedTask.taskId) {
          const updatedSteps = [...task.steps];
          updatedSteps[selectedStepIndex].completed = true;
          return { ...task, steps: updatedSteps };
        }
        return task;
      })
    );

    try {
      // Call WorkLog API
      await fetch("/api/work-logs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          taskId: selectedTask.taskId,
          employeeId: id,
          hours,
          notes,
        }),
      });

      // Optional: update step completion in backend
      await fetch(`/api/tasks/${selectedTask.taskId}`, { method: "POST" });
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false); // stop loading
      setIsModalOpen(false);
    }
  };

  if (!role) {
    return (
      <div className="flex h-screen w-full flex-col items-center justify-center bg-gray-50">
        {/* Spinner */}
        <div className="relative flex items-center justify-center">
          <div className="h-16 w-16 rounded-full border-4 border-orange-500 border-t-transparent animate-spin"></div>
        </div>

        {/* Text */}
        <p className="mt-6 text-lg font-semibold text-gray-700 animate-pulse">
          Loading your tasks...
        </p>
        <p className="mt-1 text-sm text-gray-400">
          Please wait while we fetch your dashboard
        </p>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gray-50 p-6 space-y-6">
      <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight flex items-center gap-3">
        <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
          My Tasks
        </span>
        <span className="w-10 h-1 bg-orange-500 rounded-full"></span>
      </h1>

      {loading ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-pulse">
          {[...Array(4)].map((_, i) => (
            <Card
              key={i}
              className="rounded-2xl shadow-md border border-gray-200 overflow-hidden"
            >
              <CardContent className="p-6 space-y-4">
                {/* Project + Task Header */}
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <div className="h-5 w-40 bg-gray-200 rounded"></div>
                    <div className="h-4 w-28 bg-gray-200 rounded"></div>
                  </div>
                  <div className="h-4 w-28 bg-gray-200 rounded"></div>
                </div>

                {/* Step / Action Button */}
                <div className="flex items-center justify-between bg-gray-100 rounded-2xl p-4">
                  <div className="h-4 w-32 bg-gray-200 rounded"></div>
                  <div className="h-8 w-24 bg-gray-200 rounded"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : tasks.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 px-6 bg-white border border-dashed border-gray-300 rounded-2xl shadow-sm text-center">
          {/* Icon */}
          <div className="p-4 rounded-full bg-orange-100 text-orange-500 mb-4">
            <ClipboardList className="h-10 w-10" />
          </div>

          {/* Text */}
          <h2 className="text-lg font-semibold text-gray-700 mb-1">
            No Tasks Assigned
          </h2>
          <p className="text-gray-500 text-sm mb-4">
            You don’t have any active tasks right now. Please check back later.
          </p>

          {/* Optional Button */}
          <Button
            onClick={() => router.push("/dashboard")}
            className="bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700"
          >
            Back to Dashboard
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* ✅ Your actual tasks rendering */}
          {tasks.map((task) => {
            const firstStepIndex = task.steps.findIndex((step) => !step.completed);
            if (firstStepIndex === -1) return null;

            const step = task.steps[firstStepIndex];

            return (
              <Card
                key={task.taskId}
                className="rounded-2xl shadow-md hover:shadow-lg transition"
              >
                <CardContent className="p-6 space-y-3">
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <h2 className="text-xl font-bold text-gray-800">
                        {task.projectName}
                      </h2>
                      <p className="text-gray-600">{task.title}</p>
                    </div>
                    {task.deadline && (
                      <span className="text-sm font-semibold text-red-600">
                        Deadline:{" "}
                        {new Date(task.deadline).toLocaleDateString("en-GB")}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between bg-white shadow-sm rounded-2xl p-4 border border-orange-200">
                    <span
                      className={`font-medium text-lg ${step.completed
                        ? "line-through text-gray-400"
                        : "text-gray-800"
                        }`}
                    >
                      {step.name}
                    </span>
                    <Button
                      size="sm"
                      variant="default"
                      className="bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700"
                      onClick={() => openWorkLogModal(task, firstStepIndex)}
                    >
                      Mark Completed
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}


      {/* WorkLog Modal */}
      <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)} className="fixed z-50 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen px-4">
          <div className="fixed inset-0 bg-black opacity-30" />

          <div className="bg-white rounded-2xl p-6 max-w-md w-full relative z-10 space-y-4 shadow-xl">
            <DialogTitle className="text-xl font-bold text-gray-800">Log Work</DialogTitle>

            {/* Show project, task, and step */}
            {selectedTask && selectedStepIndex !== null && (
              <div className="mb-4 space-y-1">
                <p className="text-gray-700 font-semibold">
                  Project: <span className="font-normal">{selectedTask.projectName}</span>
                </p>
                <p className="text-gray-700 font-semibold">
                  Task: <span className="font-normal">{selectedTask.title}</span>
                </p>
                <p className="text-gray-700 font-semibold">
                  Step: <span className="font-normal">{selectedTask.steps[selectedStepIndex].name}</span>
                </p>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Hours Spent</label>
              <input
                type="number"
                min={0.25}
                step={0.25}
                value={hours}
                onChange={(e) => setHours(Number(e.target.value))}
                className="w-full p-2 border rounded-lg"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={3}
                className="w-full p-2 border rounded-lg"
                placeholder="Optional notes..."
              />
            </div>

            <div className="flex justify-end gap-3">
              <Button variant="outline" onClick={() => setIsModalOpen(false)}>
                Cancel
              </Button>
              <Button
                variant="default"
                disabled={submitting}
                className={`flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 ${submitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                onClick={submitWorkLog}
              >
                {submitting ? (
                  <>
                    <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Submitting...
                  </>
                ) : (
                  "Submit"
                )}
              </Button>

            </div>
          </div>
        </div>
      </Dialog>


    </div>
  );
}
