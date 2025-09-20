"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

export default function LocationSection() {
  return (
    <section className="relative w-full py-24 bg-gradient-to-b from-white via-gray-50 to-orange-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Title with accent */}
          <div className="flex items-center space-x-3">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              Our Location
            </h2>
          </div>

          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-300 rounded-full"></div>

          <p className="text-lg text-gray-600 leading-relaxed">
            Visit our office in the heart of the city. We’re always here to
            welcome you and discuss how we can bring your vision to life.
          </p>

          {/* Contact Details */}
          <div className="space-y-5">
            <div className="flex items-center space-x-4 p-4 rounded-xl bg-white/60 shadow-sm border border-gray-200 backdrop-blur-sm">
              <MapPin className="text-orange-500 w-6 h-6 shrink-0" />
              <p className="text-gray-800 font-medium">
                Level 2 of Building, Commercial Block next to Fort Avenue Society Gate, Multan Public School Road, Multan, 66000, Pakistan
              </p>
            </div>
            <div className="flex items-center space-x-4 p-4 rounded-xl bg-white/60 shadow-sm border border-gray-200 backdrop-blur-sm">
              <Phone className="text-orange-500 w-6 h-6 shrink-0" />
              <p className="text-gray-800 font-medium">+92 306 6777691</p>
            </div>
            <div className="flex items-center space-x-4 p-4 rounded-xl bg-white/60 shadow-sm border border-gray-200 backdrop-blur-sm">
              <Mail className="text-orange-500 w-6 h-6 shrink-0" />
              <p className="text-gray-800 font-medium">info.anuarchitects@gmail.com</p>
            </div>
          </div>
        </motion.div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200 bg-white/80 backdrop-blur-md"
        >
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3446.6119066417414!2d71.49573407637058!3d30.24814187482157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b35e601584c4b%3A0xf50bae70e807137e!2sANU%20Architects%20(Aakif%20%26%20Usama%20Architects)!5e0!3m2!1sen!2s!4v1755508111544!5m2!1sen!2s" width="600" height="450"   loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

          {/* Overlay glow */}
          <div className="absolute inset-0 bg-gradient-to-t from-orange-100/20 to-transparent pointer-events-none"></div>
        </motion.div>
      </div>
    </section>
  );
}

