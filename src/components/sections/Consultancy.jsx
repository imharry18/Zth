"use client";

import React from "react";
import Link from "next/link"; 
import { motion } from "framer-motion";
import { Users, TrendingUp, ShieldCheck, ArrowRight, CheckCircle2, Star } from "lucide-react";

// --- Data (Services matched to Doc) ---
const services = [
  {
    title: "Narrative Refinement",
    description: "Positioning for the next round. Rebuild your story to align with VC thesis for Series A and beyond.",
    icon: Users,
    colSpan: "md:col-span-2", 
    bg: "bg-blue-50",
    text: "text-blue-600"
  },
  {
    title: "Financial Story Clarity",
    description: "Bulletproof financial modeling that survives the deepest due diligence.",
    icon: TrendingUp,
    colSpan: "md:col-span-1", 
    bg: "bg-emerald-50",
    text: "text-emerald-600"
  },
  {
    title: "Go-To-Market Direction",
    description: "Post-funding strategy to aspire and market growth. Product-market storytelling.",
    icon: ShieldCheck,
    colSpan: "md:col-span-1", 
    bg: "bg-purple-50",
    text: "text-purple-600"
  },
  {
    title: "Investor Comm Prep",
    description: "Mock boardroom sessions to perfect your delivery and Q&A handling.",
    icon: Star,
    colSpan: "md:col-span-2", 
    bg: "bg-amber-50",
    text: "text-amber-600"
  },
];

export default function Consultancy() {
  return (
    <section className="py-32 bg-gray-50/50 relative overflow-hidden" id="consultancy">
      
      {/* Background Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gray-100 rounded-full blur-[120px] opacity-60" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[100px] opacity-40" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* --- LEFT: The Pitch --- */}
          <div className="sticky top-24 pt-8 lg:pt-0"> 
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 text-gray-500 text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
                <Users size={12} />
                Human Intelligence
              </div>
              
              {/* HEADLINE MATCHING DOC */}
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Consultation <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500">(Post-Funding Strategy)</span>
              </h2>
              
              <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                Also a small band with our integrated Companies. Let it aspire and market Growth.
              </p>

              <ul className="space-y-4 mb-10">
                {[
                  "Narrative refinement",
                  "Positioning for next round",
                  "Product-market storytelling"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                    <CheckCircle2 className="text-primary w-5 h-5" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Navigation Button */}
              <Link 
                href="/consultancy" 
                className="group inline-flex items-center gap-3 bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-2xl font-semibold transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* --- RIGHT: The Services Bento Grid --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group relative bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.08)] hover:border-gray-200 transition-all duration-300 ${service.colSpan}`}
              >
                <div className={`w-12 h-12 rounded-2xl ${service.bg} ${service.text} flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}>
                  <service.icon size={24} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-500 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Decorative corner flash */}
                <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className={`w-5 h-5 ${service.text} -rotate-45 group-hover:rotate-0 transition-transform duration-300`} />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}