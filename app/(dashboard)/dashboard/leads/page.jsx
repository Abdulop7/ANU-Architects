"use client";

import { useState } from "react";
import { useRole } from "@/lib/roleContext";
import { Users, Star, Clock, Activity, Search } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

export default function LeadsPage() {
    const { leads } = useRole();
    const [searchQuery, setSearchQuery] = useState("");

    // Aggregations
    const totalLeads = leads?.length || 0;
    const pendingReviews = leads?.filter(l => !l.reviewdone).length || 0;
    const reviewedLeads = leads?.filter(l => l.reviewdone) || [];

    const totalReviews = reviewedLeads.length;
    const averageRating = totalReviews > 0
        ? (reviewedLeads.reduce((acc, lead) => acc + (lead.rating || 0), 0) / totalReviews).toFixed(1)
        : "0.0";

    // Rating Breakdown
    const ratingCounts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    reviewedLeads.forEach(lead => {
        if (lead.rating && lead.rating >= 1 && lead.rating <= 5) {
            ratingCounts[lead.rating]++;
        }
    });

    // Filtering
    const filteredLeads = leads?.filter(lead =>
        lead.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lead.id?.toString().includes(searchQuery) ||
        lead.phone?.includes(searchQuery)
    ) || [];

    return (
        <div className="w-full space-y-16 lg:space-y-24 pb-20">
            <header className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 border-b border-white/5 pb-8 mt-12">
                <div className="flex flex-col gap-4">
                    <h1 className="headline-2 text-white uppercase tracking-[0.2em] flex items-center gap-4">
                        <Users className="h-10 w-10 text-accent" />
                        Client <span className="text-accent">Matrix</span>
                    </h1>
                    <p className="text-secondary text-sm tracking-widest uppercase">Lead Acquisition & Telemetry</p>
                    <div className="w-24 h-1 bg-accent mt-4"></div>
                </div>
            </header>

            <FadeIn>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Metric 1: Total Leads */}
                    <div className="flex flex-col items-start border-l-2 border-accent pl-6 py-8 bg-[#111] relative overflow-hidden group">
                        <div className="absolute top-1/2 -translate-y-1/2 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                            <Activity className="w-32 h-32 text-white" />
                        </div>
                        <p className="text-[0.55rem] font-black uppercase tracking-[0.3em] text-white/40 mb-2 relative z-10">Total System Ingest</p>
                        <div className="flex items-baseline gap-2 relative z-10">
                            <p className="text-5xl lg:text-6xl font-black text-white tracking-tighter leading-none">{totalLeads}</p>
                            <span className="text-[0.65rem] font-bold text-accent tracking-[0.2em] uppercase">Objects</span>
                        </div>
                    </div>

                    {/* Metric 2: Pending Reviews */}
                    <div className="flex flex-col items-start border-l-2 border-[#F56040] pl-6 py-8 bg-[#111] relative overflow-hidden group">
                        <div className="absolute top-1/2 -translate-y-1/2 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                            <Clock className="w-32 h-32 text-white" />
                        </div>
                        <p className="text-[0.55rem] font-black uppercase tracking-[0.3em] text-white/40 mb-2 relative z-10">Pending Evaluations</p>
                        <div className="flex items-baseline gap-2 relative z-10">
                            <p className="text-5xl lg:text-6xl font-black text-white tracking-tighter leading-none">{pendingReviews}</p>
                            <span className="text-[0.65rem] font-bold text-[#F56040] tracking-[0.2em] uppercase">Awaiting</span>
                        </div>
                    </div>

                    {/* Metric 3: Average Rating */}
                    <div className="flex flex-col items-start border-l-2 border-[#FFDC80] pl-6 py-8 bg-[#111] relative overflow-hidden group">
                        <div className="absolute top-1/2 -translate-y-1/2 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                            <Star className="w-32 h-32 text-white" />
                        </div>
                        <p className="text-[0.55rem] font-black uppercase tracking-[0.3em] text-white/40 mb-2 relative z-10">Satisfaction Index</p>
                        <div className="flex items-baseline gap-2 relative z-10">
                            <p className="text-5xl lg:text-6xl font-black text-white tracking-tighter leading-none">{averageRating}</p>
                            <span className="text-[0.65rem] font-bold text-[#FFDC80] tracking-[0.2em] uppercase">/ 5.0</span>
                        </div>
                    </div>
                </div>

                {/* Rating Breakdown Section */}
                <div className="mt-8 border border-white/5 bg-[#0a0a0a] p-8">
                    <p className="text-[0.65rem] font-black uppercase tracking-[0.3em] text-white/40 mb-6 border-b border-white/5 pb-4">Evaluation Breakdown</p>
                    <div className="flex flex-col gap-4">
                        {[5, 4, 3, 2, 1].map((star) => {
                            const count = ratingCounts[star];
                            const percentage = totalReviews > 0 ? (count / totalReviews) * 100 : 0;
                            return (
                                <div key={star} className="flex items-center gap-4">
                                    <div className="flex items-center gap-2 w-16">
                                        <span className="text-sm font-bold text-white">{star}</span>
                                        <Star className="w-4 h-4 text-[#FFDC80] fill-current" />
                                    </div>
                                    <div className="flex-1 h-2 bg-[#111] relative overflow-hidden">
                                        <div
                                            className="absolute top-0 left-0 h-full bg-[#FFDC80] transition-all duration-1000 ease-out"
                                            style={{ width: `${percentage}%` }}
                                        />
                                    </div>
                                    <div className="w-12 text-right">
                                        <span className="text-xs font-mono text-white/60">{count}</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </FadeIn>

            {/* Brutalist Data Table & Search */}
            <div className="space-y-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-white/5 pb-4">
                    <h2 className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-white">
                        System Telemetry Output
                    </h2>

                    <div className="relative w-full sm:w-96">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Search className="w-4 h-4 text-white/40" />
                        </div>
                        <input
                            type="text"
                            placeholder="QUERY IDENTIFIER OR NAME..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-[#111] border border-white/10 text-white placeholder-white/30 text-xs font-mono uppercase tracking-widest pl-12 pr-4 py-4 focus:outline-none focus:border-accent transition-colors"
                        />
                    </div>
                </div>

                <div className="w-full overflow-x-auto border border-white/5 bg-[#050505]">
                    <table className="w-full text-left text-sm whitespace-nowrap">
                        <thead className="bg-[#111] text-secondary border-b border-white/5 uppercase tracking-[0.2em] text-[0.65rem] font-bold">
                            <tr>
                                <th className="px-6 py-6">ID</th>
                                <th className="px-6 py-6">Client Name</th>
                                <th className="px-6 py-6">Telemetry (Phone)</th>
                                <th className="px-6 py-6">Status</th>
                                <th className="px-6 py-6">Rating</th>
                                <th className="px-6 py-6">Ingested At</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5 text-white/80 font-mono text-xs">
                            {filteredLeads.length > 0 ? filteredLeads.map((lead) => (
                                <tr key={lead.id} className="hover:bg-white/5 transition-colors">
                                    <td className="px-6 py-5 font-black text-accent">#{lead.id}</td>
                                    <td className="px-6 py-5 font-sans font-medium text-white">{lead.name}</td>
                                    <td className="px-6 py-5">{lead.phone}</td>
                                    <td className="px-6 py-5">
                                        <span className={`px-2 py-1 text-[0.6rem] uppercase tracking-widest font-bold border ${lead.reviewdone ? 'border-[#4ade80] text-[#4ade80] bg-[#4ade80]/10' : 'border-[#F56040] text-[#F56040] bg-[#F56040]/10'}`}>
                                            {lead.reviewdone ? "Evaluated" : "Pending"}
                                        </span>
                                    </td>
                                    <td className="px-6 py-5">
                                        {lead.rating ? (
                                            <div className="flex items-center gap-1 text-[#FFDC80]">
                                                {lead.rating}.0 <Star className="w-3 h-3 fill-current" />
                                            </div>
                                        ) : (
                                            <span className="text-white/20">--</span>
                                        )}
                                    </td>
                                    <td className="px-6 py-5 text-white/40">
                                        {new Date(lead.createdAt).toLocaleDateString()}
                                    </td>
                                </tr>
                            )) : (
                                <tr>
                                    <td colSpan={6} className="px-6 py-12 text-center text-secondary font-sans tracking-widest text-[0.65rem] uppercase">
                                        No telemetry matching query "{searchQuery}"
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
