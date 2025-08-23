"use client";

import { Facebook, Instagram, Linkedin, Twitter, MapPin, Phone, Mail, Youtube } from "lucide-react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo & About */}
<div>
  <div className="flex items-center gap-2">
    <img 
      src="/logo.png" 
      alt="ANU Architects Logo" 
      className="w-10 h-10 object-contain"
    />
    <h2 className="text-2xl font-bold text-white">ANU Architects</h2>
  </div>
  <p className="mt-4 text-sm leading-6">
    Crafting timeless spaces with innovation, elegance, and precision.  
    From concept to creation, we bring visions to life.  
  </p>
</div>


        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
            <li><Link href="/services" className="hover:text-white transition">Services</Link></li>
            <li><Link href="/projects" className="hover:text-white transition">Projects</Link></li>
            <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
  <MapPin size={16} className="text-orange-500 shrink-0 mt-1" />
  <span className="flex-1">
    Level 2 of Building, Commercial Block next to Fort Avenue Society Gate, 
    Multan Public School Road, Multan, 66000, Pakistan
  </span>
</li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-orange-500" />
              +92 306 6777691
            </li>
            <a href="mailto:info.anuarchitects@gmail.com?subject=Inquiry&body=Hi!%20I'm%20Interested">

            <li className="flex items-center gap-2">
              <Mail size={16} className="text-orange-500" />
              info.anuarchitects@gmail.com
            </li>
            </a>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/consultanuarchitect/" className="hover:text-white transition" target="_blank"><Facebook size={20} /></a>
            <a href="https://www.instagram.com/consultanuarchitect/?hl=en" target="_blank" className="hover:text-white transition"><Instagram size={20} /></a>
            <a href="https://www.youtube.com/@anuarchitects" className="hover:text-white transition" target="_blank"><Youtube size={20} /></a>
            <a href="https://wa.me/923066777691?text=Hi%2C%20I%27m%20interested" className="hover:text-white transition" target="_blank"><FaWhatsapp size={20} /></a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 py-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} ANU Architects. All Rights Reserved.
      </div>
    </footer>
  );
}
