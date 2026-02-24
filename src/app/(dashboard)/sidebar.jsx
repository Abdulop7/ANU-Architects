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
} from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRole } from "../../../lib/roleContext";
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
      { name: "Reminders", href: "/dashboard/reminders", icon: Bell }, // NEW
      { name: "Assign Task", href: "/dashboard/assign", icon: PlusSquare },
    ],
    manager: [
      { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
      { name: "Tasks", href: "/dashboard/tasks", icon: ClipboardList },
      { name: "Reminders", href: "/dashboard/reminders", icon: Bell }, // NEW
      { name: "Team", href: "/dashboard/team", icon: Users },
      { name: "Projects", href: "/dashboard/projects", icon: ClipboardList },
    ],
    employee: [
      { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
      { name: "Tasks", href: "/dashboard/tasks", icon: ClipboardList },
      { name: "Reminders", href: "/dashboard/reminders", icon: Bell }, // NEW
      { name: "Projects", href: "/dashboard/projects", icon: ClipboardList },
    ],
    accountant: [
      { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
      { name: "Reminders", href: "/dashboard/reminders", icon: Bell }, // NEW
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
      });
    }

    if (session.fullName === "Umer Farooq" || session.fullName === "Muhammad Ali Haider" || session.fullName === "Hamza Ilyas") {
      updatedLinks.splice(2, 0, {
        name: "AI Generation",
        href: "/dashboard/generate",
        icon: Sparkles,
      });
    }

    setNavLinks(updatedLinks);
    setLoading(false);
  }, [role, session?.fullName]);


  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
  };

  return (
    <div>
      {/* Floating Mobile Sidebar Handle */}
      <button
        className={`fixed top-1/2 -translate-y-1/2 z-50 px-3 py-2 rounded-r-full 
             bg-gradient-to-b from-orange-500 to-orange-600 text-white shadow-lg 
             transition-all duration-300 md:hidden hover:shadow-[0_0_15px_rgba(249,115,22,0.7)]
             ${sidebarOpen ? "left-64" : "left-0"}`}
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <motion.div
          animate={{ rotate: sidebarOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronRight size={22} />
        </motion.div>

      </button>

      {/* Sidebar */}
      <aside
        className={`fixed md:static top-0 left-0 h-full z-40
          bg-gradient-to-b from-orange-500 to-orange-600 text-white
          shadow-lg flex flex-col transition-transform duration-300
          w-64
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        {/* Logo */}
        <div className="flex items-center justify-center p-4 border-b border-orange-400">
          <Image
            src="/bg-logo.png"
            alt="A&U Dashboard Logo"
            width={80}
            height={80}
            className="object-contain"
          />
        </div>

        {/* User Info or Skeleton */}
        <div className="p-5 mb-4 rounded-xl bg-orange-600/20 border border-orange-400 text-center shadow-md">
          {loading ? (
            <div className="animate-pulse space-y-2">
              <div className="h-3 bg-orange-400/50 rounded w-1/2 mx-auto"></div>
              <div className="h-5 bg-orange-400/60 rounded w-3/4 mx-auto"></div>
              <div className="h-3 bg-orange-400/50 rounded w-2/3 mx-auto"></div>
            </div>
          ) : (
            <>
              <p className="text-xs text-orange-100 tracking-wide uppercase font-medium">
                {session?.role}
              </p>
              <p className="text-white text-lg font-bold mt-1 truncate">
                {session?.fullName}
              </p>
              <p className="text-orange-100 text-sm mt-0.5 truncate">
                @{session?.username}
              </p>
            </>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto scrollbar-thin scrollbar-thumb-orange-400/60">
          {loading ? (
            <div className="space-y-3 animate-pulse">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-10 bg-orange-400/40 rounded-lg"></div>
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
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all
                  ${isActive
                      ? "bg-white text-orange-600 font-semibold shadow-md"
                      : "hover:bg-orange-400/40"
                    }`}
                >
                  <Icon size={20} className="shrink-0" />
                  <span>{link.name}</span>
                </Link>
              );
            })
          )}
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-orange-400">
          <button
            onClick={handleLogout}
            className="flex items-center cursor-pointer gap-3 px-4 py-2 rounded-lg hover:bg-orange-400/40 transition w-full"
          >
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </div>
  );
}
