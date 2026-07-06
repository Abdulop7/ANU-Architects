"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Eye, EyeOff, Loader2, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import posthog from "posthog-js";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [checkingSession, setCheckingSession] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const res = await fetch("/api/session");
        const data = await res.json();
        if (data.loggedIn) {
          router.replace("/dashboard");
        }
      } catch (err) {
        console.error("Session check failed:", err);
      } finally {
        setCheckingSession(false);
      }
    };

    checkSession();
  }, [router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    posthog.capture("login_attempted", { username });

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
        credentials: "include",
      });

      const data = await res.json();

      if (res.ok) {
        posthog.identify(username, { username, role: data.role });
        router.push("/dashboard");
      } else {
        setError(data.error || "Login failed");
      }
    } catch (err) {
      setError("Authorization server unresponsive.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#050505] overflow-hidden">
      {/* Brutalist Grid Background overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: "4rem 4rem"
        }}
      />

      {/* Atmospheric glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Session Checker Loader */}
      <AnimatePresence>
        {checkingSession && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed top-8 right-8 z-50 flex items-center gap-3 px-6 py-3 
                 bg-[#0a0a0a] border border-accent/20"
          >
            <Loader2 className="animate-spin text-accent w-4 h-4" />
            <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-accent">
              Verifying Session
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-lg mx-auto p-8 md:p-12 bg-[#0a0a0a] border border-white/10"
      >
        <div className="flex flex-col items-center mb-12 border-b border-white/5 pb-8">
          <div className="relative w-40 h-16 mb-8">
            <Image
              src="/logo.png"
              alt="ANU Architects"
              fill
              sizes="160px"
              className="object-contain brightness-0 invert"
              priority
            />
          </div>
          <span className="text-[0.65rem] font-bold uppercase tracking-[0.4em] text-accent mb-3">
            Secure Gateway
          </span>
          <h1
            className="text-3xl md:text-4xl font-black text-primary tracking-tighter uppercase"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Studio Portal
          </h1>
        </div>

        {error && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="mb-8 p-4 bg-red-950/30 border border-red-500/50 text-center"
          >
            <p className="text-[0.7rem] uppercase tracking-widest text-red-500 font-bold">{error}</p>
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="space-y-2">
            <label className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-secondary">
              Identification
            </label>
            <input
              type="text"
              placeholder="ENTER USERNAME"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-4 bg-[#111] border border-white/10 text-primary text-[0.85rem] placeholder:text-white/20 focus:outline-none focus:border-accent focus:bg-white/5 transition-colors font-sans tracking-widest "
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-secondary">
              Access Key
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="ENTER PASSWORD"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-4 bg-[#111] border border-white/10 text-primary text-[0.85rem] placeholder:text-white/20 focus:outline-none focus:border-accent focus:bg-white/5 transition-colors font-sans tracking-widest pr-14"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-0 top-0 bottom-0 px-4 text-white/40 hover:text-accent transition-colors flex items-center justify-center border-l border-white/5"
                aria-label="Toggle password visibility"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className={`group relative w-full flex items-center justify-between mt-6 border border-white/20 bg-transparent px-8 py-5 transition-all duration-500 hover:border-accent overflow-hidden ${loading ? "opacity-70 pointer-events-none" : ""
              }`}
            disabled={loading}
          >
            <div className="absolute inset-0 bg-accent scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-0"></div>

            <span className="relative z-10 font-sans font-bold text-[0.85rem] uppercase tracking-[0.2em] text-primary group-hover:text-[#050505] transition-colors duration-300">
              {loading ? "Authenticating..." : "Establish Link"}
            </span>

            <span className="relative z-10 flex items-center justify-center w-8 h-8 md:w-10 md:h-10 border border-white/20 group-hover:border-[#050505]/30 transition-colors duration-300 group-hover:text-[#050505]">
              {loading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <ArrowRight className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform duration-300" />
              )}
            </span>
          </button>
        </form>

        <div className="mt-12 text-center border-t border-white/5 pt-8">
          <p className="text-[0.55rem] uppercase tracking-[0.2em] text-white/20">
            Internal Use Only. Restricted Access.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
