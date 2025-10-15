"use client";

import { useState, useEffect, useRef } from "react";
import { useRole } from "../../../../../lib/roleContext";
import { Card, CardContent } from "../../../../../components/dashboard/card";
import { Button } from "../../../../../components/ui/button";
import { Dialog, DialogTitle } from "@headlessui/react";
import { Wallet, Loader2 } from "lucide-react";
import { SmoothProgressSliderPayment } from "../../../../../components/dashboard/progressSlider";
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

        const fetchPayments = () => {
            const projectPayments = projects.map((p) => ({
                id: p.id,
                name: p.name,
                projectProgress: p.progress || 0,
                paymentProgress: p.paymentProgress || 0,
                status: p.status
            }));


            setPayments(projectPayments);
            setLoading(false);
        };

        fetchPayments();
    }, [projects, contextLoading]);

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
            // ✅ Update payment progress on backend
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
            <div className="flex h-screen w-full items-center justify-center bg-gray-50">
                <Loader2 className="animate-spin text-orange-500 h-8 w-8" />
            </div>
        );
    }

    return (
        <div className="flex flex-col h-screen w-full bg-gray-50 p-6 space-y-6 overflow-hidden">

            {/* Header */}
            <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight flex items-center gap-3">
                <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                    Payments
                </span>
                <span className="w-10 h-1 bg-orange-500 rounded-full"></span>
            </h1>

            {/* Scrollable Projects Section */}
            <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-6">
                    {payments.length === 0 ? (
                        <div className="col-span-full flex flex-col items-center justify-center py-16 px-6 bg-white border border-dashed border-gray-300 rounded-2xl shadow-sm text-center">
                            <div className="p-4 rounded-full bg-orange-100 text-orange-500 mb-4">
                                <Wallet className="h-10 w-10" />
                            </div>
                            <h2 className="text-lg font-semibold text-gray-700 mb-1">
                                No Projects Found
                            </h2>
                            <p className="text-gray-500 text-sm mb-4">
                                You don’t have any active projects with payment or progress data yet.
                            </p>
                        </div>
                    ) : (
                        payments
                            .filter((proj) => {
                                console.log(proj);

                                const projectProgress = proj.projectProgress || 0;
                                const paymentProgress = proj.paymentProgress || 0;
                                if (proj.status === "Cancelled") return false;

                                // ❌ Skip fully completed projects
                                if (projectProgress === 100 && paymentProgress === 100) return false;

                                return true;
                            })
                            .map((proj) => (
                                <Card
                                    key={proj.id}
                                    className="rounded-2xl shadow-md hover:shadow-lg transition border border-gray-200"
                                >
                                    <CardContent className="p-6 space-y-5">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h2 className="text-xl font-bold text-gray-800">
                                                    {proj.name}
                                                </h2>
                                            </div>
                                            <Button
                                                onClick={() => openPaymentModal(proj)}
                                                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700"
                                            >
                                                Update Payment
                                            </Button>
                                        </div>

                                        {/* Progress Bars */}
                                        <div className="space-y-3">
                                            <div>
                                                <div className="flex justify-between text-sm text-gray-600 mb-1">
                                                    <span>Payment Progress</span>
                                                    <span>{proj.paymentProgress}%</span>
                                                </div>
                                                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                                                    <div
                                                        className="h-3 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 transition-all duration-500"
                                                        style={{
                                                            width: `${proj.paymentProgress}%`,
                                                        }}
                                                    ></div>
                                                </div>
                                            </div>

                                            <div>
                                                <div className="flex justify-between text-sm text-gray-600 mb-1">
                                                    <span>Project Progress</span>
                                                    <span>{proj.projectProgress || 0}%</span>
                                                </div>
                                                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                                                    <div
                                                        className="h-3 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-500"
                                                        style={{
                                                            width: `${proj.projectProgress || 0}%`,
                                                        }}
                                                    ></div>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
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
                    <div className="fixed inset-0 bg-black opacity-30" />
                    <div className="bg-white rounded-2xl p-6 max-w-md w-full relative z-10 space-y-5 shadow-xl">
                        <DialogTitle className="text-xl font-bold text-gray-800">
                            Update Payment Progress
                        </DialogTitle>

                        {selectedProject && (
                            <div>
                                <p className="text-gray-700 font-medium">
                                    Project:{" "}
                                    <span className="text-gray-600">{selectedProject.name}</span>
                                </p>
                                <p className="text-gray-500 text-sm">
                                    Previous: {previousProgress}%
                                </p>
                            </div>
                        )}

                        {/* Slider */}
                        <div className="space-y-3">
                            <div className="flex items-center justify-between text-sm text-gray-600">
                                <span>{previousProgress}%</span>
                                <span>{progress}%</span>
                            </div>

                            <SmoothProgressSliderPayment
                                progress={progress}
                                setProgress={setProgress}
                                previousProgress={previousProgress}
                            />

                        </div>

                        {/* Buttons */}
                        <div className="flex justify-end gap-3">
                            <Button variant="outline" onClick={() => setIsModalOpen(false)}>
                                Cancel
                            </Button>
                            <Button
                                onClick={submitPaymentUpdate}
                                disabled={submitting}
                                className={`bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 ${submitting ? "opacity-70 cursor-not-allowed" : ""
                                    }`}
                            >
                                {submitting ? (
                                    <>
                                        <Loader2 className="animate-spin mr-2 h-4 w-4" /> Updating...
                                    </>
                                ) : (
                                    "Save"
                                )}
                            </Button>
                        </div>
                    </div>
                </div>
            </Dialog>
        </div>
    );
}
