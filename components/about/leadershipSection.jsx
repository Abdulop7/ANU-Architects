"use client";

import Card from "../ui/card";
import { motion } from "framer-motion";

export default function Leadership() {
    return (
        <section className="relative py-24 px-6 overflow-hidden">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-24">
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
                    Meet Our <span className="text-orange-500">Leadership</span>
                </h2>
                <p className="text-gray-600 mt-4 text-lg">
                    Visionaries behind our success — combining innovation, education, and
                    leadership to shape the future.
                </p>
            </div>

            <div className="relative flex flex-col items-center max-w-6xl mx-auto">
                {/* CEO at top with halo */}
                <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10"
                >
                    {/* Glowing halo behind CEO */}
                    <div className="absolute inset-0 -top-6 -left-6 w-72 h-72 bg-orange-200/40 blur-3xl rounded-full -z-10"></div>
                    <Card
                        name="AR. M. FAROOQ SIDDIQUI"
                        role="Chief Executive Officer"
                        education="AFAS (ARCH) MEMBER PCATP"
                        image="/about/team9.webp"
                    />
                </motion.div>

                {/* Connector with node */}
                <div className="flex flex-col items-center my-6">
                    <div className="w-1 h-16 bg-gradient-to-b from-orange-400 to-orange-200"></div>
                    <div className="w-5 h-5 rounded-full bg-orange-500 shadow-lg shadow-orange-200"></div>
                </div>

                {/* Co-Founders Branch */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative flex flex-col md:flex-row gap-16 md:gap-28 items-center justify-center"
                >
                    {/* Curved branch line */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-24 hidden md:block">
                        <svg
                            viewBox="0 0 400 100"
                            preserveAspectRatio="none"
                            className="w-full h-full"
                        >
                            <path
                                d="M200 0 C200 50, 50 50, 50 100"
                                stroke="url(#orangeGradient)"
                                strokeWidth="3"
                                fill="none"
                            />
                            <path
                                d="M200 0 C200 50, 350 50, 350 100"
                                stroke="url(#orangeGradient)"
                                strokeWidth="3"
                                fill="none"
                            />
                            <defs>
                                <linearGradient id="orangeGradient" x1="0" y1="0" x2="1" y2="1">
                                    <stop offset="0%" stopColor="#f97316" />
                                    <stop offset="100%" stopColor="#fdba74" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>

                    {/* Co-Founders */}
                    <Card
                        name="AR. AAKIF NAVEED SADIQ"
                        role="Co-Founder"
                        education="MS. INTERIOR (TURKEY), PHD. ARCH (MALAYSIA) (in process ) , BS. ARCHITECTURE (BNU)"
                        image="/about/team1.webp"
                    />
                    <Card
                        name="AR. MUHAMMAD USAMA"
                        role="Co-Founder"
                        education="BS. ARCHITECTURE (BNU), ASSISTANT PROFESSOR ARCHITECTURE (NFC MULTAN)"
                        image="/about/team2.webp"
                    />
                </motion.div>
            </div>
        </section>
    );
}
