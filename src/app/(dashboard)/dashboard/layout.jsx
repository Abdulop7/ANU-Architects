"use client";

import { useEffect, useState } from "react";
import Sidebar from "../sidebar";
import { useSwipeable } from "react-swipeable";
import "../../globals.css";
import { RoleContext } from "../../../../lib/roleContext";
import { useRouter } from "next/navigation";

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [role, setRole] = useState(null);
  const [data,setData] = useState({})
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      const res = await fetch("/api/session");
      const data = await res.json();

      console.log(data);
      

      if (!data.loggedIn) {
        router.replace("/login");
      } else {
        setRole(data.role);
        setData(data)
      }
    };

    checkSession();
  }, [router]);



  const handlers = useSwipeable({
    onSwipedLeft: () => setSidebarOpen(false),  // swipe left closes
    onSwipedRight: () => setSidebarOpen(true),  // swipe right opens
    preventScrollOnSwipe: true,
    trackMouse: true, // lets you test with mouse drag too
  });

  return (
    <html lang="en">
      <body {...handlers} className="h-screen">
        <RoleContext.Provider value={{role:role,id:data.userId }} >
          <div className="flex w-full h-full">
            {/* Sidebar */}
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} session={data} />
            {/* Page Content */}
            {children}
          </div>
        </RoleContext.Provider>
      </body>
    </html>
  );
}
