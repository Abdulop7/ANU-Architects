"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  ClipboardList,
  Users,
  BarChart2,
  LogOut,
  ChevronLeft,
  ChevronRight,
  PlusSquare,
  Calendar,
  Wallet,
  Bell,
  UserCog,
  Sparkles,
  BookOpen,
  UserPlus,
} from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRole } from "@/lib/roleContext";
import Image from "next/image";

export default function Sidebar({ sidebarOpen, setSidebarOpen, session }) {
  const { role } = useRole(); // get role from context
  const pathname = usePathname();
  const router = useRouter();
  const [navLinks, setNavLinks] = useState([]);
  const [loading, setLoading] = useState(true);

  const linksByRole = {
    executive: [
      { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
      { name: "Employees", href: "/dashboard/employees", icon: Users },
      { name: "AI Generation", href: "/dashboard/generate", icon: Sparkles },
      { name: "Projects", href: "/dashboard/projects", icon: ClipboardList },
      { name: "Reports", href: "/dashboard/reports", icon: BarChart2 },
      { name: "Attendance", href: "/dashboard/attendance", icon: Calendar },
      { name: "Reminders", href: "/dashboard/reminders", icon: Bell },
      { name: "Assign Task", href: "/dashboard/assign", icon: PlusSquare },
    ],
    manager: [
      { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
      { name: "Tasks", href: "/dashboard/tasks", icon: ClipboardList },
      { name: "Reminders", href: "/dashboard/reminders", icon: Bell },
      { name: "Team", href: "/dashboard/team", icon: Users },
      { name: "Projects", href: "/dashboard/projects", icon: ClipboardList },
    ],
    employee: [
      { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
      { name: "Tasks", href: "/dashboard/tasks", icon: ClipboardList },
      { name: "Reminders", href: "/dashboard/reminders", icon: Bell },
      { name: "Projects", href: "/dashboard/projects", icon: ClipboardList },
    ],
    accountant: [
      { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
      { name: "Reminders", href: "/dashboard/reminders", icon: Bell },
      { name: "Payments", href: "/dashboard/payments", icon: Wallet },
    ],
  };

  useEffect(() => {
    if (!role || !session?.fullName) return;

    const baseLinks = linksByRole[role] || [];
    let updatedLinks = [...baseLinks];

    // 🎯 Add Users link only for specific executive
    if (role === "executive" && session.fullName === "Abdul Saboor") {
      updatedLinks.splice(2, 0, {
        name: "Users",
        href: "/dashboard/users",
        icon: UserCog,
      }, {
        name: "Prompt Library",
        href: "/dashboard/prompts",
        icon: BookOpen,
      }, {
        name: "Leads",
        href: "/dashboard/leads",
        icon: UserPlus
      }
      );
    }

    if (session.fullName === "Umer Farooq" || session.fullName === "Muhammad Ali Haider" || session.fullName === "Hamza Ilyas" || session.fullName === "Ar. Muhammad Arslan Naeem" || session.fullName === "Shoaib Saeed") {
      if (!updatedLinks.find(l => l.name === "AI Generation")) {
        updatedLinks.splice(2, 0, {
          name: "AI Generation",
          href: "/dashboard/generate",
          icon: Sparkles,
        });
      }
    }

    setNavLinks(updatedLinks);
    setLoading(false);
  }, [role, session?.fullName]);

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
  };

  return (
    <>
      {/* Floating Mobile Sidebar Handle */}
      <button
        className={`fixed top-1/2 -translate-y-1/2 z-50 p-2 
             bg-accent text-[#050505] shadow-[0_0_15px_rgba(255,122,0,0.3)]
             hover:shadow-[0_0_25px_rgba(255,122,0,0.6)]
             transition-all duration-300 md:hidden 
             ${sidebarOpen ? "left-64" : "left-0"}`}
        style={{ fontFamily: "'Syne', sans-serif" }}
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <motion.div
          animate={{ rotate: sidebarOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronRight size={22} className="stroke-[3]" />
        </motion.div>
      </button>

      {/* Sidebar background overlay for mobile */}
      {sidebarOpen && (
        <div
          className="md:hidden fixed inset-0 z-30 bg-black/60 backdrop-blur-sm"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:static top-0 left-0 h-full z-40
          bg-[#0a0a0a] text-white border-r border-white/5
          flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
          w-64 overflow-hidden
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        {/* Logo */}
        <div className="flex items-center justify-center p-6 border-b border-white/5 bg-[#050505]">
          <Image
            src="/logo.png"
            alt="A&U Dashboard Logo"
            width={80}
            height={80}
            className="object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
          />
        </div>

        {/* User Info or Skeleton */}
        <div className="p-6 border-b border-white/5 text-left transition-all">
          {loading ? (
            <div className="animate-pulse space-y-3">
              <div className="h-2 bg-white/5 w-1/2"></div>
              <div className="h-4 bg-white/10 w-3/4"></div>
              <div className="h-2 bg-white/5 w-2/3"></div>
            </div>
          ) : (
            <>
              <p className="text-[0.55rem] text-accent tracking-[0.4em] uppercase font-bold mb-1">
                {session?.role}
              </p>
              <p className="text-white text-md font-bold uppercase tracking-widest truncate" style={{ fontFamily: "'Syne', sans-serif" }}>
                {session?.fullName}
              </p>
              <p className="text-secondary text-[0.65rem] tracking-[0.2em] mt-1 truncate">
                @{session?.username}
              </p>
            </>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-4 space-y-0 overflow-y-auto scrollbar-none">
          {loading ? (
            <div className="space-y-0 animate-pulse">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-12 border-b border-white/5 bg-white/5"></div>
              ))}
            </div>
          ) : (
            navLinks.map((link) => {
              const isActive = pathname === link.href;
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-4 px-6 py-4 transition-all duration-300 relative group border-b border-white/5
                  ${isActive
                      ? "text-white font-bold bg-[#111]"
                      : "text-secondary hover:text-white"
                    }`}
                >
                  <Icon size={16} className={`shrink-0 transition-transform duration-300 group-hover:scale-110 ${isActive ? "text-accent" : ""}`} />
                  <span className="text-[0.65rem] uppercase tracking-[0.2em] z-10">{link.name}</span>

                  {isActive && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent z-0" />
                  )}
                </Link>
              );
            })
          )}
        </nav>

        {/* Logout */}
        <div className="p-6 border-t border-white/5">
          <button
            onClick={handleLogout}
            className="flex items-center gap-4 w-full transition-colors duration-300 text-secondary hover:text-red-500 group"
          >
            <LogOut size={16} className="transition-transform group-hover:scale-110 -scale-x-100" />
            <span className="text-[0.65rem] uppercase tracking-[0.2em]">Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
}
