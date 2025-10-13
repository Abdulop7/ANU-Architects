"use client";

import { Suspense } from "react";
import ProductivityHeatmap from "./productivityHeatmap";
import ProjectsCard from "./projectsCard";
import RecentActivity from "./recentActivity";

export default function ExecutiveDashboard() {
    return (
        <div className="w-full h-screen  bg-gray-50 p-6 space-y-6">
            {/* Heading */}
            <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight flex items-center gap-3">
                <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                    Executive Dashboard
                </span>
                <span className="w-10 h-1 bg-orange-500 rounded-full"></span>
            </h1>


            {/* Main Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Active Projects */}
                <div className="lg:col-span-2">
                    <ProjectsCard />
                </div>

                {/* Productivity Heatmap */}
                <div className="lg:col-span-1">
                    <Suspense fallback={[...Array(4)].map((_, weekIndex) => (
                        <div
                            key={weekIndex}
                            className="flex items-center justify-center gap-4 animate-pulse"
                        >
                            <span className="w-14 h-3 bg-gray-200 rounded"></span>
                            <div className="grid grid-cols-7 gap-2">
                                {[...Array(7)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="w-7 h-7 rounded-md bg-gray-200"
                                    />
                                ))}
                            </div>
                        </div>
                    ))}>
                        <ProductivityHeatmap />
                    </Suspense>
                </div>
            </div>

            {/* Recent Activity - Full Width */}
            <RecentActivity />
        </div>
    );
}
