"use client";

import React from 'react';
import { motion } from 'framer-motion';
import MapWrapper from '@/components/MapWrapper';
import projectsData from '@/projects.json';

export default function SpatialFootprintPage() {
    // Calculate total mapped projects
    const mappedCount = projectsData.filter(p => p.lat && p.lng).length;

    return (
        <div className="bg-[#050505] min-h-screen text-primary pb-[8rem]">
            {/* Header */}
            <header className="pt-[200px] lg:pt-[240px] pb-12 px-6 lg:px-12 border-b border-white/10 relative overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="flex items-center gap-4 mb-4">
                        <span className="text-accent text-[0.85rem] font-bold tracking-[0.2em] uppercase block">Our Presence</span>
                        <div className="h-4 w-[1px] bg-white/20"></div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                            <span className="text-white/60 text-[0.75rem] font-mono tracking-widest">{mappedCount} LOCATIONS MAPPED</span>
                        </div>
                    </div>
                    <h1 className="font-sans font-black text-5xl md:text-7xl tracking-tighter text-primary">
                        Spatial Footprint.
                    </h1>
                    <p className="text-secondary leading-[1.8] text-[1.2rem] max-w-[700px] mt-6">
                        Explore our architectural interventions mapped across geographic boundaries. An interactive ledger of executed developments, establishing our presence and structural influence across the region.
                    </p>
                </motion.div>
                <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>
            </header>

            {/* Map Area - Full edge-to-edge */}
            <section className="w-full relative border-y border-white/10">
                <div className="w-full relative bg-[#050505] overflow-hidden group">
                    <div className="absolute top-6 left-6 z-10 hidden md:flex items-center gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full animate-ping"></div>
                        <span className="text-accent font-sans text-xs uppercase tracking-widest font-bold drop-shadow-md">Live Coordinate System</span>
                    </div>
                    {/* Immersive full-height map viewport for dedicated page */}
                    <div className="w-full h-[70vh] md:h-[85vh] lg:h-screen relative bg-[#050505] overflow-hidden no-scrollbar">
                        <MapWrapper />
                        {/* Edge Gradients for Architectural Depth */}
                        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#050505]/80 to-transparent pointer-events-none z-10"></div>
                        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#050505]/80 to-transparent pointer-events-none z-10"></div>
                        <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[#050505]/80 to-transparent pointer-events-none z-10 hidden md:block"></div>
                        <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[#050505]/80 to-transparent pointer-events-none z-10 hidden md:block"></div>
                    </div>
                </div>
            </section>
        </div>
    );
}
