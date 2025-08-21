"use client";

import { Facebook, Instagram, Linkedin, Twitter, MapPin, Phone, Mail, Youtube } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-white">ANU Architects</h2>
          <p className="mt-4 text-sm leading-6">
            Crafting timeless spaces with innovation, elegance, and precision.  
            From concept to creation, we bring visions to life.  
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-white transition">About Us</a></li>
            <li><a href="#services" className="hover:text-white transition">Services</a></li>
            <li><a href="#projects" className="hover:text-white transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
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
              +92 300 1234567
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-orange-500" />
              info@anuarchitects.com
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition"><Facebook size={20} /></a>
            <a href="#" className="hover:text-white transition"><Instagram size={20} /></a>
            <a href="#" className="hover:text-white transition"><Youtube size={20} /></a>
            <a href="#" className="hover:text-white transition"><FaWhatsapp size={20} /></a>
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
