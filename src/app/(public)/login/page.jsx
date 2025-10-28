"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [checkingSession, setCheckingSession] = useState(true); // 👈 state for small loader
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
        setCheckingSession(false); // ✅ hide top loader when done
      }
    };
    checkSession();
  }, [router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
        credentials: "include",
      });

      const data = await res.json();

      if (res.ok) {
        router.push("/dashboard");
      } else {
        setError(data.error || "Login failed");
      }
    } catch (err) {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-center bg-black/80 overflow-hidden">
      {/* 🌆 Background */}
      <div className="absolute inset-0 bg-[url('/login-bg.jpg')] bg-cover bg-center opacity-10"></div>

      {/* 🔸 Small top-right loader (only during session check) */}

      <AnimatePresence>
        {checkingSession && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed top-5 right-5 z-50 flex items-center gap-3 px-4 py-2.5 
                 bg-white/10 backdrop-blur-md border border-orange-400/40 
                 shadow-lg rounded-full"
          >
            <div className="relative">
              <Loader2 className="animate-spin text-orange-500" size={20} />
              <div className="absolute inset-0 blur-md opacity-40 bg-orange-500/60 rounded-full"></div>
            </div>
            <span className="text-sm font-medium text-orange-500 drop-shadow-sm">
              Checking session...
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🔐 Login Card */}
      <div className="relative z-10 max-w-md w-full mx-auto p-8 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl">
        <div className="text-center mb-6">
          <img
            src="/logo.png"
            alt="ANU Architects"
            className="mx-auto h-16 w-auto mb-2"
          />
          <h1 className="text-3xl font-bold text-gray-800">Welcome</h1>
          <p className="text-gray-600 mt-1">
            Sign in to continue to the Dashboard
          </p>
        </div>

        {error && (
          <p className="mb-4 text-center text-red-500 font-medium">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Username */}
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 rounded-xl border border-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
            required
          />

          {/* Password + Toggle */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded-xl border border-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 transition pr-12"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-orange-500"
              aria-label="Toggle password visibility"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className={`w-full py-3 rounded-xl font-semibold text-white bg-orange-500 hover:bg-orange-600 transition shadow-md ${loading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            disabled={loading}
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <Loader2 className="animate-spin" size={20} /> Signing In...
              </span>
            ) : (
              "Login"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
