"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  ClipboardList,
  Users,
  BarChart2,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRole } from "../../../lib/roleContext";

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const role = useRole(); // get role from context
  const pathname = usePathname();
  const [navLinks, setNavLinks] = useState([]);
  


  const linksByRole = {
    executive: [
      { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
      { name: "Employees", href: "/dashboard/employees", icon: Users },
      { name: "Projects", href: "/dashboard/projects", icon: ClipboardList },
      { name: "Reports", href: "/dashboard/reports", icon: BarChart2 },
    ],
    manager: [
      { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
      { name: "Tasks", href: "/dashboard/tasks", icon: ClipboardList },
      { name: "Team", href: "/dashboard/team", icon: Users },
      { name: "Projects", href: "/dashboard/projects", icon: ClipboardList },
      { name: "Reports", href: "/dashboard/reports", icon: BarChart2 },
    ],
    employee: [
      { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
      { name: "Tasks", href: "/dashboard/tasks", icon: ClipboardList },
      { name: "Projects", href: "/dashboard/projects", icon: ClipboardList },
    ],
  };

   useEffect(() => {
    if (role && linksByRole[role]) {
      setNavLinks(linksByRole[role]);
    }
  }, [role]);

  return (
    <div >
      {/* Floating Mobile Sidebar Handle */}
      <button
        className={`fixed top-1/2 -translate-y-1/2 z-50 px-3 py-2 rounded-r-full 
             bg-gradient-to-b from-orange-500 to-orange-600 text-white shadow-lg 
             transition-all duration-300 md:hidden hover:shadow-[0_0_15px_rgba(249,115,22,0.7)]

             ${sidebarOpen ? "left-64" : "left-0"}`}


        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <motion.div animate={{ rotate: sidebarOpen ? 180 : 0 }}>
          {sidebarOpen ? <ChevronLeft size={22} /> : <ChevronRight size={22} />}
        </motion.div>

      </button>

      {/* Sidebar */}
      <aside
        className={`fixed md:static top-0 left-0 h-full z-40
          bg-gradient-to-b from-orange-500 to-orange-600 text-white
          shadow-lg flex flex-col transition-transform duration-300
          w-64
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        {/* Logo */}
        <div className="flex items-center justify-center p-4 border-b border-orange-400">
          <h1 className="font-bold text-lg tracking-wide">A&U Dashboard</h1>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto scrollbar-thin scrollbar-thumb-orange-400/60">
          {navLinks.map((link) => {
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
                    : "hover:bg-orange-400/40"}
                `}
              >
                <Icon size={20} className="shrink-0" />
                <span>{link.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-orange-400">
          <button className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-orange-400/40 transition w-full">
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </div>
  );
}
