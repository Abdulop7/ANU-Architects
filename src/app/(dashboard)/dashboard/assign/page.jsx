"use client";
import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "../../../../../components/dashboard/card";
import { Button } from "../../../../../components/ui/button";
import { useRole } from "../../../../../lib/roleContext";

export default function AssignTasksPage() {
  const [projectName, setProjectName] = useState("");
  const [category, setCategory] = useState("");
  const [selectedTasks, setSelectedTasks] = useState([]);
  const [staffMembers, setStaffMembers] = useState([]);
  const [assignedTasks, setAssignedTasks] = useState({});
  const [loadingStaff, setLoadingStaff] = useState(false);
  const [deadline, setDeadline] = useState("");
  const [assigning, setAssigning] = useState(false);
  const { contextLoading, tasks ,users} = useRole();

  const dateInputRef = useRef(null);


  const getStaff = async () => {
    setLoadingStaff(true);
    try {
      // const usersRes = await fetch("/api/users");
      // if (!usersRes.ok) throw new Error("Failed to fetch users");

      // const users = await usersRes.json();

      // const tasksRes = await fetch("/api/tasks");
      // if (!tasksRes.ok) throw new Error("Failed to fetch tasks");
      // const tasks = await tasksRes.json();

      if(!contextLoading){

      // filter out executives
      const filteredStaff = users.filter((staff) => staff.role !== "executive" && staff.role !== "accountant" );

      // attach active task counts from tasksReceived
      const staffWithCounts = filteredStaff.map((staff) => {
        const activeTasks = (staff.tasksReceived || []).filter((t) => {
          const matchedTask = tasks.find((task) => task.id === t.id);
          return matchedTask && matchedTask.progress < 100;
        });

        return {
          ...staff,
          activeCount: activeTasks.length,
        };
      });

      setStaffMembers(staffWithCounts);
    }
    } catch (err) {
      console.error("Failed to fetch staff:", err);
    } finally {
      setLoadingStaff(false);
    }
  };


  useEffect(() => {
    if (contextLoading ) return;
    
    getStaff();
  }, [contextLoading]);

  const toggleTask = (task) => {
    setSelectedTasks((prev) =>
      prev.includes(task) ? prev.filter((t) => t !== task) : [...prev, task]
    );

    // when selecting Finishes, initialize its steps
    if (task === "Finishes" && !selectedTasks.includes("Finishes")) {
      setAssignedTasks((prev) => ({
        ...prev,
        Finishes: {
          staff: "",
          steps: [
            { name: "3D Base Modeling", completed: false },
            { name: "Detailed Modeling", completed: false },
            { name: "Revisions", completed: false },
            { name: "Approval", completed: false },
          ],
        },
      }));
    } else if (task === "Finishes" && selectedTasks.includes("Finishes")) {
      setAssignedTasks((prev) => {
        const copy = { ...prev };
        delete copy["Finishes"];
        return copy;
      });
    }
  };

  const toggleSubtask = (subtask) => {
    setAssignedTasks((prev) => {
      if (prev[subtask]) {
        const copy = { ...prev };
        delete copy[subtask];
        return copy;
      } else {
        return {
          ...prev,
          [subtask]: {
            staff: "",
            steps: [
              { name: "Initial Drawing", completed: false },
              { name: "Revisions", completed: false },
              { name: "Approval", completed: false },
            ],
          },
        };
      }
    });
  };

  // task -> staffValue string from <select>. convert to number or empty string
  const handleTaskStaffChange = (task, staffValue) => {
    const staffId = staffValue === "" ? "" : Number(staffValue);
    setAssignedTasks((prev) => ({
      ...prev,
      [task]: {
        ...prev[task],
        staff: staffId,
      },
    }));
  };

  const handleAssign = async () => {
    setAssigning(true);
    const data = {
      projectName,
      category,
      selectedTasks,
      assignedTasks,
      deadline,
    };

    try {
      const res = await fetch("/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Failed to assign task");
      }

      const result = await res.json();
      console.log("Task stored in DB:", result);

      // reset form
      setProjectName("");
      setCategory("");
      setSelectedTasks([]);
      setDeadline("");
      setAssignedTasks({});

      // refresh staff counts to reflect newly created tasks
      await getStaff();
    } catch (error) {
      console.error("Error assigning task:", error);
      alert("Error assigning task: " + error.message);
    } finally {
      setAssigning(false); // stop loading
    }
  };

  if (contextLoading || loadingStaff) {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-50">
      {/* Orange circular logo pulse */}
      <div className="relative">
        <div className="w-16 h-16 rounded-full bg-orange-500 animate-pulse shadow-lg"></div>
        <div className="absolute inset-0 rounded-full border-4 border-orange-300 animate-[ping_1.5s_ease-in-out_infinite]"></div>
      </div>

      <p className="text-gray-500 mt-2 text-sm">Please wait while we prepare the task assignment view.</p>

      {/* Progress bar */}
      <div className="w-64 h-2 bg-gray-200 rounded-full mt-6 overflow-hidden">
        <div className="w-1/3 h-full bg-orange-500 animate-[loadMove_2s_linear_infinite]" />
      </div>

      {/* Skeleton cards preview */}
      <div className="mt-10 w-full max-w-4xl px-6 space-y-4">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 animate-pulse space-y-3"
          >
            <div className="h-4 w-1/3 bg-gray-200 rounded"></div>
            <div className="h-3 w-2/3 bg-gray-100 rounded"></div>
            <div className="h-3 w-1/2 bg-gray-100 rounded"></div>
          </div>
        ))}
      </div>

      {/* Tailwind keyframes */}
      <style jsx>{`
        @keyframes loadMove {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(0%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}


  return (
    <div className="min-h-screen w-full bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto h-[calc(100vh-3rem)] overflow-y-auto rounded-2xl shadow-lg border border-gray-200 bg-white">
        <Card className="border-none shadow-none">
          <CardContent className="p-8 space-y-8">
            {/* Page Title */}
            <div className="text-center sticky top-0 bg-white pb-4 z-10 ">
              <h1 className="text-4xl font-bold text-gray-800">Assign New Project Task</h1>
              <p className="text-gray-500 mt-2">Define the project structure, category, and assign tasks clearly.</p>
            </div>

            {/* Project Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Project Name</label>
              <input
                type="text"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                className="w-full border rounded-lg px-4 py-3 shadow-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
                placeholder="Enter project name"
              />
            </div>

            {/* Project Category */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Project Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full border rounded-lg px-4 py-3 shadow-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
              >
                <option value="">Select Category</option>
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
                <option value="Restaurant">Restaurant</option>
                <option value="Religious">Religious</option>
                <option value="Educational">Educational</option>
              </select>
            </div>

            {/* Task Types */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Select Task Types</label>
              <div className="flex gap-6">
                {["Grey", "Finishes"].map((type) => (
                  <label key={type} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedTasks.includes(type)}
                      onChange={() => toggleTask(type)}
                      className="w-4 h-4 text-orange-600 focus:ring-orange-500"
                    />
                    {type}
                  </label>
                ))}
              </div>
            </div>

            {/* Grey Structure Subtasks */}
            {selectedTasks.includes("Grey") && (
              <div className="bg-gray-50 p-5 rounded-xl border space-y-4">
                <h3 className="font-semibold text-gray-800 mb-3">Grey Structure Tasks</h3>

                {["Structure Plan","Floor Plan", "Plumbing", "Electrical"].map((subtask) => (
                  <div key={subtask} className="flex flex-col gap-2">
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={assignedTasks[subtask] !== undefined}
                        onChange={() => toggleSubtask(subtask)}
                        className="w-4 h-4 text-orange-600 focus:ring-orange-500"
                      />
                      {subtask}
                    </label>

                    {assignedTasks[subtask] && (
                      <div className="flex items-center gap-3">
                        <select
                          value={assignedTasks[subtask]?.staff ?? ""}
                          onChange={(e) => handleTaskStaffChange(subtask, e.target.value)}
                          className="flex-1 border rounded-lg px-3 py-2 shadow-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
                        >
                          <option value="">Select Staff</option>
                          {staffMembers.map((staff) => (
                            <option key={staff.id} value={staff.id}>
                              {staff.name} ({staff.activeCount ?? 0} Active Task{(staff.activeCount ?? 0) !== 1 ? "s" : ""})
                            </option>
                          ))}
                        </select>

                        {assignedTasks[subtask]?.staff && (
                          <button
                            onClick={() =>
                              setAssignedTasks((prev) => {
                                const copy = { ...prev };
                                delete copy[subtask];
                                return copy;
                              })
                            }
                            className="text-sm text-red-500 hover:underline"
                          >
                            Clear
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Finishes Section */}
            {selectedTasks.includes("Finishes") && (
              <div className="bg-gray-50 p-5 rounded-xl border space-y-4">
                <h3 className="font-semibold text-gray-800 mb-3">Finishes (Interior Work)</h3>

                <p className="text-gray-500 text-sm mb-2">Whole interior is included in this finishes package.</p>

                <select
                  value={assignedTasks["Finishes"]?.staff ?? ""}
                  onChange={(e) => handleTaskStaffChange("Finishes", e.target.value)}
                  className="w-full border rounded-lg px-3 py-2 shadow-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
                >
                  <option value="">Assign Staff for Finishes</option>
                  {staffMembers.map((staff) => (
                    <option key={staff.id} value={staff.id}>
                      {staff.name} ({staff.activeCount ?? 0} Active Task{(staff.activeCount ?? 0) !== 1 ? "s" : ""})
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div className="bg-gray-50 p-5 rounded-xl border space-y-3">
              <h3 className="font-semibold text-gray-800">Set Project Deadline</h3>

              <input
                ref={dateInputRef}
                type="date"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                className="w-full border rounded-lg px-3 py-2 shadow-sm focus:ring-2 focus:ring-orange-500 focus:outline-none text-gray-500"
                placeholder="Select Date"
                onFocus={(e) => e.target.showPicker?.()} // Chrome/Edge opens calendar directly
              />


              <p className="text-xs text-gray-500">
                Choose a final deadline for the whole project.
              </p>
            </div>





            {/* Assign Button */}
            <div className="sticky bottom-0 bg-white py-4">
              <Button
                onClick={handleAssign}
                className="w-full bg-orange-600 text-white hover:bg-orange-700 py-3 rounded-xl text-lg font-semibold shadow-md flex items-center justify-center gap-2"
                disabled={assigning} // disable while assigning
              >
                {assigning && (
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                  </svg>
                )}
                {assigning ? "Assigning..." : "Assign Task"}
              </Button>

            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
