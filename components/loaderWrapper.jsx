"use client";
import { useEffect, useState } from "react";
import Loader from "../src/app/loader";


export default function LoaderWrapper({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
          <Loader />
        </div>
      ) : (
        children
      )}
    </>
  );
}
