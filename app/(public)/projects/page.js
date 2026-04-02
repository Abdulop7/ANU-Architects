"use client";

import React, { useState, useMemo, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import projectsData from "@/projects.json";

import { ProjectsSection } from "@/components/projects-section";

export default function ProjectsPage() {

    return (
        <div className="bg-[#050505] min-h-screen text-primary pb-[8rem]">

            {/* Header */}
            <header className="pt-[200px] lg:pt-[240px] pb-12 px-6 lg:px-12 border-b border-white/10 relative overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="text-accent text-[0.85rem] font-bold tracking-[0.2em] uppercase mb-4 block">Our Portfolio</span>
                    <h1 className="font-sans font-black text-5xl md:text-7xl tracking-tighter text-primary">
                        Selected Works.
                    </h1>
                </motion.div>
                <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>
            </header>

            {/* Main Content Layout */}
            <ProjectsSection projects={projectsData} />
        </div>
    );
}
