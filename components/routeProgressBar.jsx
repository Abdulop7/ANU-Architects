"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import NProgress from "nprogress";
import "../src/app/nprogress.css";

NProgress.configure({ showSpinner: false });

export default function RouteProgressBar() {
  const pathname = usePathname();
  const timer = useRef(null);

  useEffect(() => {
    NProgress.start();
    clearTimeout(timer.current);

    timer.current = setTimeout(() => {
      NProgress.done();
    }, 500); // Adjust delay as needed

    return () => clearTimeout(timer.current);
  }, [pathname]);

  return null;
}
