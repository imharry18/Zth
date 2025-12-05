"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MessageSquare, Activity, Cpu, Wifi, BarChart2, ArrowRight } from "lucide-react";

export default function InvestorMockroom() {
  return (
    <section className="py-32 bg-white relative overflow-hidden" id="mockroom">
      
      {/* Background Tech Grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] [background-size:40px_40px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* --- 1. Creative Storytelling Text --- */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-gray-500 text-xs font-bold uppercase tracking-widest mb-6 border border-gray-200">
              <Cpu size={12} />
              AI Simulation
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              The Investor <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Mockroom</span>
            </h2>
            
            <p className="text-xl text-gray-500 leading-relaxed mb-10">
              Don't practice on your first investor. <br className="hidden md:block" />
              Train against an AI that knows your industry's skepticism.
            </p>

            {/* Navigation Button */}
            <Link 
              href="/mockroom" 
              className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 group"
            >
              <span>Enter Mockroom</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* --- 2. The Visual "Live Session" Demo --- */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Floating AI Analysis Cards (The "Creative Telling") */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute -left-12 top-20 z-20 hidden lg:block"
          >
            <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/20 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <Activity size={20} />
              </div>
              <div>
                <div className="text-xs text-gray-400 font-semibold uppercase">Speech Pace</div>
                <div className="text-sm font-bold text-gray-900">140 wpm (Optimal)</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="absolute -right-12 bottom-32 z-20 hidden lg:block"
          >
            <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/20 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <BarChart2 size={20} />
              </div>
              <div>
                <div className="text-xs text-gray-400 font-semibold uppercase">Confidence Score</div>
                <div className="text-sm font-bold text-gray-900">92/100</div>
              </div>
            </div>
          </motion.div>

          {/* Main Interface Card */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative bg-[#0F1117] rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-800"
          >
            {/* Top Bar */}
            <div className="bg-white/5 px-8 py-5 flex items-center justify-between border-b border-white/5">
              <div className="flex items-center gap-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="h-4 w-px bg-white/10" />
                <div className="flex items-center gap-2 text-white/40 text-xs font-mono tracking-wider">
                  <Wifi size={12} />
                  LIVE_CONNECTION
                </div>
              </div>
              <div className="text-white/30 text-xs font-mono uppercase tracking-widest">ZTH_ENGINE_V2.0</div>
            </div>

            {/* Main Content */}
            <div className="p-8 md:p-16 grid md:grid-cols-5 gap-12 items-center">
              
              {/* Left: The Tough Question */}
              <div className="md:col-span-3 space-y-8">
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold border border-blue-500/30"
                >
                  <MessageSquare size={12} />
                  Simulated Partner
                </motion.div>
                
                <h3 className="text-3xl md:text-4xl font-medium text-white leading-tight">
                  <span className="text-gray-500">"</span>
                  Your CAC seems low for this market. How does it scale when you saturate early adopters?
                  <span className="text-gray-500">"</span>
                </h3>

                {/* Non-Clickable Status Indicator */}
                <div className="flex items-center gap-4 pt-4">
                  <div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-semibold">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
                    </span>
                    Recording Answer...
                  </div>
                  <div className="text-gray-600 text-sm font-mono">00:42 / 02:00</div>
                </div>
              </div>

              {/* Right: The Dynamic Waveform Visual */}
              <div className="md:col-span-2">
                <div className="relative h-64 bg-gray-900/50 rounded-3xl border border-white/5 flex items-center justify-center overflow-hidden">
                   {/* Gradient Blob */}
                   <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-purple-500/10 to-transparent opacity-50" />
                   
                   {/* Animated Bars */}
                   <div className="relative z-10 flex items-end justify-center gap-1.5 h-32 w-full px-8">
                      {[...Array(16)].map((_, i) => (
                        <motion.div 
                          key={i}
                          animate={{ 
                            height: ["20%", "80%", "30%", "60%", "20%"],
                            backgroundColor: ["#3b82f6", "#60a5fa", "#3b82f6"]
                          }}
                          transition={{ 
                            duration: 1.5, 
                            repeat: Infinity, 
                            ease: "easeInOut",
                            delay: i * 0.05,
                            repeatType: "mirror"
                          }}
                          className="w-3 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                        />
                      ))}
                   </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}