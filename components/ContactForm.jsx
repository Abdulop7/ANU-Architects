"use client";

import { useState } from "react";

export function ContactForm() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            if (data.success) {
                setStatus({ type: "success", message: "Message sent successfully!" });
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus({ type: "error", message: data.error || "Something went wrong." });
            }
        } catch (err) {
            setStatus({ type: "error", message: err.message });
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-8 relative z-10 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col group">
                    <label htmlFor="name" className="text-[0.7rem] uppercase tracking-[0.15em] text-accent font-bold mb-3">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-transparent border-b border-white/20 py-3 text-[1.1rem] text-primary placeholder:text-secondary/50 focus:outline-none focus:border-accent transition-colors duration-300"
                        placeholder="John Doe"
                    />
                </div>

                <div className="flex flex-col group">
                    <label htmlFor="email" className="text-[0.7rem] uppercase tracking-[0.15em] text-accent font-bold mb-3">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-transparent border-b border-white/20 py-3 text-[1.1rem] text-primary placeholder:text-secondary/50 focus:outline-none focus:border-accent transition-colors duration-300"
                        placeholder="john@company.com"
                    />
                </div>
            </div>

            <div className="flex flex-col group mt-4 mb-4">
                <label htmlFor="message" className="text-[0.7rem] uppercase tracking-[0.15em] text-accent font-bold mb-3">Inquiry Details</label>
                <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-white/20 py-3 text-[1.1rem] text-primary placeholder:text-secondary/50 focus:outline-none focus:border-accent transition-colors duration-300 resize-none"
                    placeholder="Tell us about your project scale, location, and vision..."
                ></textarea>
            </div>

            <button
                type="submit"
                disabled={loading}
                className="group flex items-center gap-4 justify-between border border-white/20 py-5 px-8 uppercase tracking-[0.15em] text-[0.85rem] font-bold text-primary transition-all duration-500 hover:bg-accent hover:border-accent hover:text-background mt-4 w-full sm:w-auto self-start disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-primary disabled:hover:border-white/20"
            >
                <span>{loading ? "Sending..." : "Submit Request"}</span>
                {!loading && <span className="transition-transform duration-500 group-hover:translate-x-2">→</span>}
            </button>

            {status && (
                <div className={`text-[0.75rem] font-bold tracking-[0.1em] uppercase mt-2 p-4 border ${status.type === "success" ? "border-[#FF7A00]/30 text-[#FF7A00] bg-[#FF7A00]/10" : "border-red-500/30 text-red-500 bg-red-500/10"}`}>
                    {status.message}
                </div>
            )}
        </form>
    );
}
