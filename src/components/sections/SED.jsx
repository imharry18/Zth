"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Lock, Bell, Sparkles, RefreshCw, BrainCircuit, ArrowRight } from "lucide-react";

// --- Data: The 3 Core Features of SED ---
const features = [
  {
    title: "Generative Structure",
    description: "It doesn't just edit; it builds. The engine generates the perfect narrative flow based on your specific industry and stage.",
    icon: Sparkles,
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    title: "Live Data Sync",
    description: "Never present outdated numbers. Connect your P&L, and your deck automatically updates metrics in real-time.",
    icon: RefreshCw,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    title: "Predictive Scoring",
    description: "Know your odds before you send. Our AI scores your deck against thousands of funded startups to predict success.",
    icon: BrainCircuit,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
];

export default function SED() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="py-32 bg-white relative overflow-hidden" id="sed">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-gray-50 via-white to-white opacity-80" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* --- Header Section --- */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-primary text-xs font-bold uppercase tracking-wider mb-8"
          >
            <Lock size={12} />
            Coming Soon
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight leading-tight"
          >
            Smart Engine <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Deck</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-500 max-w-2xl mx-auto"
          >
            The next evolution of fundraising. Automated intelligence that builds, updates, and optimizes your pitch for you.
          </motion.p>
        </div>

        {/* --- The 3 Cards Grid --- */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative h-full bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] transition-all duration-500 overflow-hidden"
            >
              {/* Hover Gradient Background */}
              <div 
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white via-white to-${feature.bg.replace('bg-', '')}/30`} 
              />
              
              <div className="relative z-10 flex flex-col h-full">
                {/* Icon Box */}
                <div className={`w-14 h-14 rounded-2xl ${feature.bg} ${feature.color} flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-500`}>
                  <feature.icon size={28} />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-500 leading-relaxed mb-8 flex-grow">
                  {feature.description}
                </p>

                {/* Bottom decorative line */}
                <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ x: "-100%" }}
                    animate={{ x: hoveredIndex === index ? "0%" : "-100%" }}
                    transition={{ duration: 0.5, ease: "circOut" }}
                    className={`h-full w-full ${feature.bg.replace('bg-', 'bg-slate-900')}`} // Fallback to dark if needed, or specific color
                    style={{ backgroundColor: 'currentColor', color: 'var(--tw-text-opacity)' }} // Simple hack for color
                  />
                  <div className={`h-full w-full ${feature.color} bg-current opacity-20`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- Notify Me Footer --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="bg-gray-900 rounded-[2rem] p-8 md:p-12 text-center relative overflow-hidden shadow-2xl">
            
            {/* Glow Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[600px] bg-primary/20 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-2">
                Be the first to access SED
              </h3>
              <p className="text-gray-400 mb-8">
                Join the waitlist for early access to the engine.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="w-full bg-white/10 border border-white/10 text-white placeholder:text-gray-500 px-5 py-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 focus:bg-white/20 transition-all backdrop-blur-sm"
                />
                <button className="w-full sm:w-auto bg-primary hover:bg-primary-hover text-white px-8 py-3.5 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/40 group">
                  <Bell size={18} />
                  Notify Me
                  <ArrowRight size={16} className="hidden sm:block opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </button>
              </div>
              
              <p className="text-xs text-gray-500 mt-6">
                Limited beta spots available for Q3 2025.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}