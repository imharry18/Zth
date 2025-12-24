"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Globe, Shield, Zap, TrendingUp, Lock, CheckCircle2, Network, Handshake } from "lucide-react";

// --- VISUAL: The "Synergy Engine" Animation ---
const SynergyEngine = () => {
  return (
    <div className="relative w-full h-[500px] flex items-center justify-center select-none">
      
      {/* 1. Atmospheric Glows (The "Cinematic" Base) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-blue-100/30 via-purple-100/30 to-pink-100/30 blur-[80px] rounded-full pointer-events-none" />

      {/* 2. The Central Connection (Data Flow) */}
      <div className="relative z-10 w-full max-w-lg">
        {/* Animated Connecting Line */}
        <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 -translate-y-1/2 overflow-hidden rounded-full">
           <motion.div 
             className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-transparent via-pink-500 to-transparent blur-[1px]"
             animate={{ x: ["-100%", "300%"] }}
             transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
           />
           <motion.div 
             className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-transparent via-blue-500 to-transparent blur-[1px]"
             animate={{ x: ["-100%", "300%"] }}
             transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1 }}
           />
        </div>

        {/* 3. The Nodes (Zth & 14U) */}
        <div className="flex justify-between items-center relative">
           
           {/* LEFT NODE: Zth (Intelligence) */}
           <motion.div 
             initial={{ scale: 0.8, opacity: 0 }}
             whileInView={{ scale: 1, opacity: 1 }}
             transition={{ duration: 0.8 }}
             className="relative group"
           >
              <div className="w-24 h-24 bg-white rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-blue-100 flex items-center justify-center z-20 relative transition-transform duration-500 group-hover:scale-105">
                 <div className="text-center">
                    <span className="block text-2xl font-bold text-gray-900 tracking-tight">Zth</span>
                    <span className="text-[9px] font-bold text-blue-500 uppercase tracking-widest">Intelligence</span>
                 </div>
              </div>
              {/* Pulse Ring */}
              <div className="absolute inset-0 border border-blue-100 rounded-2xl scale-125 opacity-0 group-hover:scale-150 group-hover:opacity-100 transition-all duration-700" />
           </motion.div>

           {/* CENTER BADGE: The Partnership */}
           <motion.div 
             initial={{ y: 20, opacity: 0 }}
             whileInView={{ y: 0, opacity: 1 }}
             transition={{ delay: 0.3 }}
             className="relative z-30 bg-white px-6 py-2 rounded-full border border-gray-100 shadow-xl flex items-center gap-2"
           >
              <Shield size={14} className="text-gray-400" />
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Vetted Pipeline</span>
           </motion.div>

           {/* RIGHT NODE: 14U (Capital) - The Pink Star */}
           <motion.div 
             initial={{ scale: 0.8, opacity: 0 }}
             whileInView={{ scale: 1, opacity: 1 }}
             transition={{ duration: 0.8 }}
             className="relative group"
           >
              <div className="w-28 h-28 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full shadow-[0_20px_60px_-12px_rgba(236,72,153,0.4)] flex items-center justify-center z-20 relative text-white transition-transform duration-500 group-hover:scale-105">
                 <div className="text-center">
                    <span className="block text-3xl font-bold tracking-tighter">14U</span>
                    <span className="text-[10px] font-bold text-pink-100/80 uppercase tracking-widest">Capital</span>
                 </div>
              </div>
              {/* Pink Atmospheric Pulse */}
              <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 bg-pink-500 blur-2xl rounded-full -z-10"
              />
           </motion.div>

        </div>
      </div>

      {/* 4. Floating "Success Events" (Glassmorphism) - FIXED DATA */}
      {/* Replaced random numbers with actual value propositions from your doc */}
      {[
        { icon: Handshake, label: "Introduction", val: "Warm & Direct", x: -160, y: -80, delay: 0.5 },
        { icon: Lock, label: "Access", val: "Post-Review", x: 180, y: 60, delay: 0.7 },
        { icon: CheckCircle2, label: "Alignment", val: "Founder Fit", x: 140, y: -100, delay: 0.9 },
      ].map((card, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: card.delay, duration: 0.6 }}
          animate={{ y: [0, -15, 0] }}
          // Animation: Slow hover float
          className="absolute bg-white/70 backdrop-blur-md border border-white/50 p-4 rounded-2xl shadow-lg flex items-center gap-3 z-10"
          style={{ transform: `translate(${card.x}px, ${card.y}px)`, transition: "transform 4s ease-in-out infinite" }}
        >
           <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-50 to-white border border-gray-100 flex items-center justify-center text-pink-500 shadow-sm">
              <card.icon size={18} />
           </div>
           <div>
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{card.label}</div>
              <div className="text-sm font-bold text-gray-900">{card.val}</div>
           </div>
        </motion.div>
      ))}

    </div>
  );
};

export default function Funding() {
  const containerRef = useRef(null);

  // Data
  const features = [
    "Warm Intros, No Cold Emails",
    "Pre-Vetted Deal Flow",
    "Partners, Not Just LPs"
  ];

  return (
    <section 
      ref={containerRef} 
      className="relative h-screen w-full bg-white overflow-hidden flex items-center justify-center snap-center" 
      id="funding"
    >
      
      {/* 1. Cinematic Background (Subtle Texture) */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
         <div className="absolute top-0 right-0 w-[50vw] h-full bg-gradient-to-l from-pink-50/40 via-transparent to-transparent" />
      </div>

      {/* 2. Main Layout */}
      <div className="container mx-auto px-6 lg:px-12 h-full flex flex-col justify-center relative z-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center h-full">
           
           {/* LEFT: Copy & Strategy (5 Cols) */}
           <motion.div 
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, ease: "easeOut" }}
             className="lg:col-span-5 flex flex-col justify-center"
           >
              {/* Badge */}
              <div className="inline-flex self-start items-center gap-2 px-3 py-1.5 rounded-full bg-pink-50 border border-pink-100/50 text-pink-600 text-[10px] font-bold uppercase tracking-widest mb-8">
                <Network size={12} fill="currentColor" className="opacity-50" />
                Strategic Access
              </div>
              
              {/* Headline */}
              <h2 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-8">
                Beyond <br/> the Raise. <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-600">
                  Zth × 14U
                </span>
              </h2>

              {/* Subtext */}
              <p className="text-xl text-gray-500 font-light leading-relaxed mb-10 border-l-2 border-pink-100 pl-6">
                We facilitate introductions to a curated network of strategic investors. 
                <span className="block mt-2 font-medium text-gray-900">
                  Qualified founders. Direct Access.
                </span>
              </p>

              {/* Checkmarks */}
              <ul className="space-y-4 mb-10">
                {features.map((text, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + (i * 0.1) }}
                    className="flex items-center gap-3 text-gray-700 font-medium"
                  >
                    <CheckCircle2 size={18} className="text-pink-500" />
                    {text}
                  </motion.li>
                ))}
              </ul>

              {/* CTA */}
              <div>
                 <button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-full font-bold text-sm overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-pink-500/20 hover:-translate-y-1 transition-all">
                    <span className="relative z-10">Explore Funding Pathways</span>
                    <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-rose-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                 </button>
              </div>
           </motion.div>

           {/* RIGHT: The Visual Engine (7 Cols) */}
           <motion.div 
             className="lg:col-span-7 h-full flex items-center justify-center lg:justify-end"
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 1, ease: "easeOut" }}
           >
              <SynergyEngine />
           </motion.div>

        </div>
      </div>
    </section>
  );
}