"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  // ✅ Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-white shadow-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* ✅ Logo */}
        <div className="flex items-center gap-3">
          {
            scrolled 
            ?
            <img src="/gray-logo.png" alt="ANU Architects" className="h-12 w-auto" />
            :
            <img src="/logo.png" alt="ANU Architects" className="h-12 w-auto" />
            
          }
<span className="text-2xl font-bold tracking-tight flex items-center gap-1">
  <span className="text-orange-500">A&U</span>
  <span
    className={`${
      scrolled ? "text-gray-900" : "text-white"
    } font-medium`}
  >
    Architects
  </span>
</span>

        </div>

        {/* ✅ Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className={`text-lg font-medium transition ${
                scrolled
                  ? "text-gray-800 hover:text-orange-500"
                  : "text-white hover:text-orange-400"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/get-quote"
            className="ml-4 px-6 py-2.5 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition shadow-md"
          >
            Get a Quote
          </Link>
        </nav>

        {/* ✅ Mobile Menu Button */}
        <button
          className={`md:hidden transition ${
            scrolled ? "text-gray-800" : "text-white"
          }`}
          onClick={() => setOpen(!open)}
        >
          <Menu size={30} />
        </button>
      </div>

      {/* ✅ Modern Fullscreen Mobile Nav */}
      <div onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/90 backdrop-blur-sm flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-6 right-6 text-white hover:text-orange-400 transition"
          onClick={() => setOpen(false)}
        >
          <X size={34} />
        </button>

        {navLinks.map((link, i) => (
          <Link
            key={i}
            href={link.href}
            onClick={() => setOpen(false)}
            className="text-2xl font-medium text-white hover:text-orange-400 transition"
          >
            {link.name}
          </Link>
        ))}
        <Link
          href="/get-quote"
          onClick={() => setOpen(false)}
          className="mt-4 px-8 py-3 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition shadow-md"
        >
          Get a Quote
        </Link>
      </div>
    </header>
  );
}
