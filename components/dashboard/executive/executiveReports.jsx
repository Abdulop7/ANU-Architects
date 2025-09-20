"use client";
import { Card, CardContent } from "../card";

export default function ExecutiveReports() {
  const reports = [
    { title: "Overall Project Progress", value: "72%" },
    { title: "Active Projects", value: "14" },
    { title: "Completed Projects (YTD)", value: "28" },
    { title: "On-Time Delivery Rate", value: "85%" },
    { title: "Employee Utilization", value: "78%" },
  ];

  return (
    <div>
      {/* Page Header */}
      <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">
        Executive Reports
      </h1>
      <p className="text-gray-500 mb-10 text-center">
        A high-level view of company performance and project health.
      </p>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reports.map((rep, idx) => (
          <Card
            key={idx}
            className="rounded-2xl shadow-md hover:shadow-lg transition"
          >
            <CardContent className="p-6 text-center">
              <h2 className="text-lg font-semibold text-gray-700">{rep.title}</h2>
              <p className="text-2xl font-bold text-orange-600 mt-2">{rep.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
