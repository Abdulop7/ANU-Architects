"use client";

import ProductivityHeatmap from "./productivityHeatmap";
import ProjectsCard from "./projectsCard";
import RecentActivity from "./recentActivity";

export default function ExecutiveDashboard() {
    return (
        <div className="w-full space-y-16 lg:space-y-24">
            {/* Heading */}
            <header className="flex flex-col gap-4 border-b border-white/5 pb-8">
                <h1 className="headline-2 text-white uppercase tracking-[0.2em]">
                    Executive <span className="text-accent">Overview</span>
                </h1>
                <p className="text-secondary text-sm tracking-widest uppercase">System Control & Operations</p>
                <div className="w-24 h-1 bg-accent mt-4"></div>
            </header>

            {/* Main Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-24">
                {/* Active Projects */}
                <div>
                    <ProjectsCard />
                </div>

                {/* Productivity Heatmap */}
                <div>
                    <ProductivityHeatmap />
                </div>
            </div>

            {/* Recent Activity - Full Width */}
            <div className="border-t border-white/5 pt-16">
                <RecentActivity />
            </div>
        </div>
    );
}
