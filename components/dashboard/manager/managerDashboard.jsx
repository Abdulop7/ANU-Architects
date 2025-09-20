"use client";
import Link from "next/link";
import { Button } from "../../ui/button";
import { Card, CardContent } from "../card";

export default function ManagerDashboard() {
  const workload = [
    { member: "Sara Khan", tasks: 5, workload: "High" },
    { member: "Bilal Ahmed", tasks: 3, workload: "Medium" },
    { member: "Ayesha Noor", tasks: 2, workload: "Low" },
  ];

  const projects = [
    { name: "Luxury Villas", status: "Pending", deadline: "15 Oct 2025" },
    { name: "Downtown Mall", status: "Completed", deadline: "05 Sep 2025" },
    { name: "Smart Homes Phase II", status: "Pending", deadline: "20 Nov 2025" },
    { name: "Luxury Villas", status: "Pending", deadline: "15 Oct 2025" },
    { name: "Downtown Mall", status: "Completed", deadline: "05 Sep 2025" },
    { name: "Smart Homes Phase II", status: "Pending", deadline: "20 Nov 2025" },
    { name: "Luxury Villas", status: "Pending", deadline: "15 Oct 2025" },
    { name: "Downtown Mall", status: "Completed", deadline: "05 Sep 2025" },
    { name: "Smart Homes Phase II", status: "Pending", deadline: "20 Nov 2025" },
  ];

  const activity = [
    { user: "Hamza Tariq", action: "Updated task status to 'In Progress'", time: "2h ago" },
    { user: "Sara Khan", action: "Uploaded new floor plan", time: "5h ago" },
    { user: "Bilal Ahmed", action: "Completed 3D render of lobby", time: "1d ago" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-extrabold text-gray-800">
            Manager Dashboard
          </h1>
          <p className="text-gray-500 mt-2">
            Monitor your team’s workload, projects, and recent activities.
          </p>
        </div>
        <Link href={"/dashboard/assign"}>
        <Button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-xl shadow-md">
          + Assign Task
        </Button>
        </Link>
      </div>

      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Team Workload */}
        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Team Workload</h2>
            <ul className="space-y-3">
              {workload.map((w, i) => (
                <li
                  key={i}
                  className="flex justify-between p-3 bg-gray-100 rounded-lg"
                >
                  <span className="font-medium text-gray-800">{w.member}</span>
                  <span className="text-sm text-gray-600">
                    {w.tasks} tasks ({w.workload})
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Pending & Completed Projects */}
        <Card className="rounded-2xl shadow-md lg:col-span-2">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">
              Pending & Completed Projects
            </h2>
            <div className="overflow-y-auto max-h-64  rounded-lg">
              <table className="min-w-full">
                <thead className="bg-gradient-to-r from-orange-500 to-orange-600 text-white sticky top-0">
                  <tr>
                    <th className="px-4 py-2 text-left">Project</th>
                    <th className="px-4 py-2 text-left">Status</th>
                    <th className="px-4 py-2 text-left">Deadline</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {projects.map((p, idx) => (
                    <tr key={idx} className="hover:bg-orange-50">
                      <td className="px-4 py-3 font-medium text-gray-800">
                        {p.name}
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-semibold ${
                            p.status === "Completed"
                              ? "bg-green-100 text-green-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {p.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-gray-600">{p.deadline}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Recent Team Activity */}
        <Card className="rounded-2xl shadow-md lg:col-span-3">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Team Activity</h2>
            <ul className="divide-y divide-gray-200">
              {activity.map((a, idx) => (
                <li key={idx} className="py-3 flex justify-between">
                  <div>
                    <p className="text-gray-800 font-medium">{a.user}</p>
                    <p className="text-sm text-gray-600">{a.action}</p>
                  </div>
                  <span className="text-xs text-gray-500">{a.time}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
