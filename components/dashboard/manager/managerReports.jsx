"use client";
import { Card, CardContent } from "../card";

export default function ManagerReports() {
  const reports = [
    { project: "Corporate HQ Design", tasksCompleted: "15/20", deadline: "30th Sept 2025" },
    { project: "Luxury Villas", tasksCompleted: "8/15", deadline: "25th Sept 2025" },
    { project: "Downtown Mall", tasksCompleted: "12/18", deadline: "5th Oct 2025" },
  ];

  return (
    <div>
      <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">
        Manager Reports
      </h1>
      <p className="text-gray-500 mb-10 text-center">
        Track your team’s project tasks and upcoming deadlines.
      </p>

      <div className="space-y-6 max-h-[70vh] overflow-y-auto pr-2">
        {reports.map((rep, idx) => (
          <Card key={idx} className="rounded-2xl shadow-md hover:shadow-lg transition">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-3">
                <span className="font-semibold text-gray-800">{rep.project}</span>
                <span className="text-xs text-gray-500">Deadline: {rep.deadline}</span>
              </div>
              <div className="text-sm text-gray-600">
                Tasks Completed:{" "}
                <span className="font-medium text-orange-600">{rep.tasksCompleted}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
