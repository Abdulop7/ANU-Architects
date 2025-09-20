"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  ClipboardList,
  Users,
  BarChart2,
  Menu,
  X,
  LogOut,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
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
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      // setNavLinks(linksByRole[user.role]);
      setNavLinks(linksByRole["employee"]);
    }
  }, []);

  return (
    <>
      {/* Floating Mobile Menu Button */}
      <button
        className="fixed top-4 left-4 z-50 p-2 rounded-md bg-orange-600/30 text-white shadow-md md:hidden"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
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
    </>
  );
}
