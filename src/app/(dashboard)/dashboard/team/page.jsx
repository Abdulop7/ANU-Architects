"use client";

import { Card, CardContent } from "../../../../../components/dashboard/card";
import { Users } from "lucide-react";
import { Progress } from "../../../../../components/dashboard/progress";
import { useRole } from "../../../../../lib/roleContext";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ManagerTeamPage() {
  const role = useRole();
  const router = useRouter();

  useEffect(() => {
    if(role){
      if (role !== "manager") {
        // Not executive → redirect to dashboard
        router.replace("/dashboard");
        return;
      }
    }

  }, [role]);
  // Example data (replace with API/db data later)
  const teamMembers = [
    {
      id: 1,
      name: "Ali Khan",
      role: "Architect",
      projects: [
        { id: 101, name: "10 Marla Residence", progress: 70 },
      ],
    },
    {
      id: 2,
      name: "Sara Ahmed",
      role: "Interior Designer",
      projects: [
        { id: 103, name: "Restaurant Renovation", progress: 45 },
        { id: 104, name: "Luxury Apartment Interior", progress: 60 },
      ],
    },
    {
      id: 3,
      name: "Usman Raza",
      role: "Site Engineer",
      projects: [
        { id: 105, name: "Commercial Plaza", progress: 85 },
        { id: 106, name: "School Building", progress: 55 },
      ],
    },
    {
      id: 4,
      name: "Ayesha Malik",
      role: "3D Visualizer",
      projects: [
        { id: 107, name: "Mosque Project", progress: 30 },
        { id: 108, name: "Corporate Office 3D Model", progress: 75 },
      ],
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gray-50 p-8">
      {/* Page Header */}
      <div className="flex items-center gap-3 mb-8">
        <Users className="w-8 h-8 text-orange-600" />
        <h1 className="text-3xl font-bold text-gray-800">My Team</h1>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member) => (
          <Card
            key={member.id}
            className="rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition"
          >
            <CardContent className="p-6 space-y-4">
              {/* Employee Info */}
              <div>
                <h2 className="text-lg font-semibold text-gray-800">
                  {member.name}
                </h2>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>

              {/* Projects List */}
              <div className="space-y-4">
                {member.projects.map((project) => (
                  <div key={project.id} className="space-y-1">
                    <p className="text-sm font-medium text-gray-800">
                      {project.name}
                    </p>
                    <div className="flex justify-between text-xs text-gray-600">
                      <span>Progress</span>
                      <span>{project.progress}%</span>
                    </div>
                    <Progress
                      value={project.progress}
                      className="h-2 bg-gray-200"
                      indicatorClassName="bg-orange-600"
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
