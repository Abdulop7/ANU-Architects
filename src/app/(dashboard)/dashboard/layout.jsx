"use client";

import { useEffect, useState } from "react";
import Sidebar from "../sidebar";
import { useSwipeable } from "react-swipeable";
import "../../globals.css";
import { RoleContext } from "../../../../lib/roleContext";

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [role, setRole] = useState(null);

  useEffect(() => {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        const user = JSON.parse(storedUser);
        // setRole(user.role);
        setRole("manager");
      }
    }, []);

  const handlers = useSwipeable({
    onSwipedLeft: () => setSidebarOpen(false),  // swipe left closes
    onSwipedRight: () => setSidebarOpen(true),  // swipe right opens
    preventScrollOnSwipe: true,
    trackMouse: true, // lets you test with mouse drag too
  });

  return (
    <html lang="en">
      <body {...handlers} className="h-screen">
        <RoleContext.Provider value={role}>
        <div className="flex w-full h-full">
        {/* Sidebar */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        {/* Page Content */}
        {children}
        </div>
        </RoleContext.Provider>
      </body>
    </html>
  );
}
