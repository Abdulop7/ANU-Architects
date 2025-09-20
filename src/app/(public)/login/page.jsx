"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("user", JSON.stringify(data));
        // redirect based on role
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
    <div className="relative min-h-screen flex flex-col justify-center bg-black/50">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-[url('/login-bg.jpg')] bg-cover bg-center opacity-10"></div>

      {/* Centered Login Card */}
      <div className="relative z-10 max-w-md w-full mx-auto p-8 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl">
        <div className="text-center mb-6">
          <img src="/logo.png" alt="ANU Architects" className="mx-auto h-16 w-auto mb-2" />
          <h1 className="text-3xl font-bold text-gray-800">Welcome</h1>
          <p className="text-gray-600 mt-1">Sign in to continue to the Dashboard</p>
        </div>

        {error && (
          <p className="mb-4 text-center text-red-500 font-medium">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
            required
          />

          <button
            type="submit"
            className={`w-full py-3 rounded-xl font-semibold text-white bg-orange-500 hover:bg-orange-600 transition ${loading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            disabled={loading}
          >
            {loading ? "Signing In..." : "Login"}
          </button>
        </form>

      </div>
    </div>
  );
}
