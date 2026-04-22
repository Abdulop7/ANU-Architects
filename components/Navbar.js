"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect for navbar background
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [isMobileMenuOpen]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Projects', path: '/projects' },
        { name: 'Map', path: '/map' },
        { name: 'Journal', path: '/journal' }
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full h-[80px] md:h-[100px] flex items-center z-[1000] transition-all duration-300 ${scrolled || isMobileMenuOpen ? 'bg-[#050505]/95 backdrop-blur-lg' : 'bg-transparent'}`}>
            <div className="container-custom flex justify-between items-center w-full">
                <Link
                    href="/"
                    className="relative z-[1001] flex items-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    <Image src="/logo.png" width={200} height={100}  alt="Anu Architects Logo" className="h-[2.5rem] md:h-[3.5rem] w-auto object-contain  opacity-90 hover:opacity-100 transition-opacity" />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.path}
                            className="text-[0.85rem] uppercase tracking-[0.15em] font-medium text-primary hover:text-accent transition-colors duration-300"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="w-[1px] h-6 bg-white/15 mx-2"></div>
                    <Link href="/contact" className="border border-white/20 px-8 py-3 text-[0.85rem] uppercase tracking-[0.15em] font-medium text-primary hover:border-accent hover:bg-accent hover:text-background transition-all duration-300">
                        Contact Us
                    </Link>
                </div>

                {/* Mobile Hamburger Toggle */}
                <button
                    className="lg:hidden flex flex-col justify-center items-center w-10 h-10 relative z-[1001]"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    <span className={`absolute w-6 h-[2px] bg-accent transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45' : '-translate-y-2'}`}></span>
                    <span className={`absolute w-6 h-[2px] bg-accent transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                    <span className={`absolute w-6 h-[2px] bg-accent transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45' : 'translate-y-2'}`}></span>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="fixed inset-0 w-full h-screen bg-[#050505] z-[1000] flex flex-col items-center justify-center pt-20 pb-10 px-6 overflow-y-auto pointer-events-auto"
                    >
                        <ul className="flex flex-col items-center gap-8 w-full">
                            {navLinks.map((link, i) => (
                                <motion.li
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * i, duration: 0.4 }}
                                >
                                    <Link
                                        href={link.path}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="font-sans font-black text-4xl uppercase tracking-[0.1em] text-white hover:text-accent transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.li>
                            ))}
                            <motion.li
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.4 }}
                                className="w-full h-[1px] bg-white/10 my-4"
                            />
                            <motion.li
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.4 }}
                            >
                                <Link
                                    href="/contact"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="inline-block border border-accent text-accent px-10 py-4 font-bold uppercase tracking-[0.15em] hover:bg-accent hover:text-background transition-colors duration-300 text-sm"
                                >
                                    Start a Project
                                </Link>
                            </motion.li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
