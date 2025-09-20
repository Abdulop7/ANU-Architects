"use client";

import { useState } from "react";
import Sidebar from "../sidebar";
import "../../globals.css";

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <html lang="en">
      <body className="h-screen">
        <div className="flex w-full h-full">
        {/* Sidebar */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Page Content */}
        {children}
        </div>
      </body>
    </html>
  );
}
