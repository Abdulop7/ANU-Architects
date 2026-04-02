"use client";

import { useState, useEffect, useRef } from "react";
import { useRole } from "@/lib/roleContext";
import { Dialog, DialogTitle } from "@headlessui/react";
import { Wallet, Loader2, X } from "lucide-react";
import { SmoothProgressSliderPayment } from "@/components/dashboard/progressSlider";
import { useRouter } from "next/navigation";

export default function PaymentsPage() {
    const { role, contextLoading, projects } = useRole();
    const [payments, setPayments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [previousProgress, setPreviousProgress] = useState(0);
    const [progress, setProgress] = useState(0);
    const [submitting, setSubmitting] = useState(false);
    const sliderRef = useRef(null);
    const router = useRouter();

    useEffect(() => {
        if (role != "accountant") {
            router.replace("/dashboard");
            return;
        }

        if (contextLoading) return;

        if (!contextLoading && projects) {
            const projectPayments = projects.map((p) => ({
                id: p.id,
                name: p.name,
                projectProgress: p.progress || 0,
                paymentProgress: p.paymentProgress || 0,
                status: p.status
            }));

            setPayments(projectPayments);
            setLoading(false);
        }
    }, [projects, contextLoading, role, router]);

    const openPaymentModal = (project) => {
        setSelectedProject(project);
        setPreviousProgress(project.paymentProgress);
        setProgress(project.paymentProgress);
        setIsModalOpen(true);
    };

    const submitPaymentUpdate = async () => {
        if (!selectedProject) return;
        setSubmitting(true);

        try {
            const res = await fetch(`/api/payment`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ paymentProgress: progress, id: selectedProject.id }),
            });

            if (!res.ok) throw new Error("Failed to update payment");

            setPayments((prev) =>
                prev.map((p) =>
                    p.id === selectedProject.id ? { ...p, paymentProgress: progress } : p
                )
            );
        } catch (error) {
            console.error("Error updating payment:", error);
        } finally {
            setSubmitting(false);
            setIsModalOpen(false);
        }
    };

    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.style.background = `linear-gradient(to right, #fb923c ${progress}%, #e5e7eb ${progress}%)`;
        }
    }, [progress]);

    if (loading || contextLoading) {
        return (
            <div className="flex h-screen w-full items-center justify-center">
                <Loader2 className="animate-spin text-white/20 h-10 w-10" />
            </div>
        );
    }

    return (
        <div className="w-full space-y-16 lg:space-y-24 pb-20">
            {/* Header */}
            <header className="flex flex-col gap-4 border-b border-white/5 pb-8 mt-12">
                <h1 className="headline-2 text-white uppercase tracking-[0.2em] flex items-center gap-4">
                    <Wallet className="h-10 w-10 text-accent" />
                    Financial <span className="text-accent">Ledger</span>
                </h1>
                <p className="text-secondary text-sm tracking-widest uppercase">Project Asset Recovery</p>
                <div className="w-24 h-1 bg-accent mt-4"></div>
            </header>

            {/* Scrollable Array */}
            <div className="w-full">
                <div className="flex justify-between items-end border-b border-white/5 pb-4 mb-8">
                   <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-white">Project Balance List</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 overflow-y-auto pr-2 pb-6">
                    {payments.length === 0 ? (
                        <div className="col-span-full py-20 flex flex-col items-center">
                            <Wallet className="w-12 h-12 text-white/5 stroke-1 mb-6" />
                            <p className="text-[0.65rem] tracking-[0.3em] font-black text-white/20 uppercase">System Empty. No Ledgers active.</p>
                        </div>
                    ) : (
                        payments
                            .filter((proj) => {
                                const projectProgress = proj.projectProgress || 0;
                                const paymentProgress = proj.paymentProgress || 0;
                                if (proj.status === "Cancelled") return false;
                                if (projectProgress === 100 && paymentProgress === 100) return false;
                                return true;
                            })
                            .map((proj) => (
                                <div key={proj.id} className="border-b border-white/5 pb-8 group transition-colors">
                                    <div className="flex items-start justify-between mb-8">
                                       <h2 className="text-[0.8rem] w-2/3 tracking-widest uppercase font-bold text-white transition-colors">
                                            {proj.name}
                                       </h2>
                                       <button
                                           onClick={() => openPaymentModal(proj)}
                                           className="text-[0.55rem] tracking-[0.2em] uppercase font-bold text-white bg-white/5 hover:bg-accent hover:text-white transition-colors px-6 py-3 ml-auto shrink-0 cursor-pointer"
                                       >
                                            Process Installment
                                       </button>
                                    </div>

                                    {/* Progress Metrics */}
                                    <div className="space-y-6 border-t border-white/5 pt-6">
                                        <div>
                                            <div className="flex justify-between items-center text-[0.55rem] tracking-[0.3em] font-bold uppercase mb-2">
                                                <span className="text-secondary">Recovery Completion</span>
                                                <span className="text-accent text-[0.65rem] font-serif">{proj.paymentProgress}%</span>
                                            </div>
                                            <div className="w-full bg-white/5 rounded-none h-[2px] overflow-hidden">
                                                <div
                                                    className="h-full bg-accent transition-all duration-1000"
                                                    style={{ width: `${proj.paymentProgress}%` }}
                                                ></div>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="flex justify-between items-center text-[0.55rem] tracking-[0.3em] font-bold uppercase mb-2">
                                                <span className="text-secondary">Operations Completion</span>
                                                <span className="text-white text-[0.65rem] font-serif">{proj.projectProgress || 0}%</span>
                                            </div>
                                            <div className="w-full bg-white/5 rounded-none h-[2px] overflow-hidden">
                                                <div
                                                    className="h-full bg-white/40 transition-all duration-1000"
                                                    style={{ width: `${proj.projectProgress || 0}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                    )}
                </div>
            </div>

            {/* Modal */}
            <Dialog
                open={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                className="fixed z-50 inset-0 overflow-y-auto"
            >
                <div className="flex items-center justify-center min-h-screen px-4">
                    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" />
                    
                    <div className="bg-[#050505] border border-white/20 p-8 max-w-md w-full relative z-10 shadow-2xl">
                        <button 
                             onClick={() => setIsModalOpen(false)} 
                             className="absolute top-8 right-8 text-white/40 hover:text-white transition-colors"
                        >
                             <X className="w-5 h-5"/>
                        </button>

                        <DialogTitle className="text-lg font-bold uppercase tracking-widest text-white mb-8 border-b border-white/10 pb-4 pr-10">
                            Log Payment Credit
                        </DialogTitle>

                        {selectedProject && (
                            <div className="mb-8">
                                <p className="text-[0.6rem] tracking-[0.3em] uppercase text-secondary font-bold mb-2">Source Project</p>
                                <p className="text-[0.65rem] font-serif tracking-widest uppercase text-white mb-6">
                                    {selectedProject.name}
                                </p>
                            </div>
                        )}

                        <div className="space-y-4 mb-8">
                            <div className="flex items-center justify-between text-[0.6rem] uppercase tracking-widest font-black">
                                <span className="text-white/40">Prev Tracker: {previousProgress}%</span>
                                <span className="text-accent">{progress}%</span>
                            </div>

                            <div className="relative w-full">
                                <SmoothProgressSliderPayment
                                    progress={progress}
                                    setProgress={setProgress}
                                    previousProgress={previousProgress}
                                />
                            </div>
                        </div>

                        <div className="flex justify-end border-t border-white/10 pt-6">
                            <button
                                onClick={submitPaymentUpdate}
                                disabled={submitting || progress <= previousProgress}
                                className={`bg-accent text-white px-8 py-3 text-[0.65rem] font-bold tracking-[0.2em] uppercase transition-colors sm:w-auto w-full ${submitting || progress <= previousProgress ? "opacity-50 cursor-not-allowed" : "hover:bg-white hover:text-black cursor-pointer"}`}
                            >
                                {submitting ? "Processing..." : "Commit Payment"}
                            </button>
                        </div>
                    </div>
                </div>
            </Dialog>
        </div>
    );
}
