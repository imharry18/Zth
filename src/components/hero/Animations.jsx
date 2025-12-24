"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Wifi, Activity, BarChart3, Users, TrendingUp, CheckCircle2, PieChart } from "lucide-react";

// 1. Pitch Deck Stack
export const DeckAnimation = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    {[0, 1, 2].map((i) => (
      <motion.div
        key={i}
        className="absolute w-48 h-64 bg-white rounded-xl shadow-xl border border-gray-100 flex flex-col p-4"
        animate={{ 
          x: [0, (i-1)*30, 0], 
          rotate: [0, (i-1)*5, 0], 
          scale: [1, 1.05, 1],
          zIndex: [i, 10, i]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
      >
        <div className="w-full h-24 bg-blue-50 rounded-lg mb-3" />
        <div className="space-y-2">
          <div className="w-3/4 h-2 bg-gray-100 rounded" />
          <div className="w-full h-2 bg-gray-100 rounded" />
          <div className="w-1/2 h-2 bg-gray-100 rounded" />
        </div>
      </motion.div>
    ))}
    <div className="absolute bottom-10 bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-lg border border-blue-100 text-blue-600 text-xs font-bold">
      Generating Slides...
    </div>
  </div>
);

// 2. Smart Engine Nodes
export const EngineAnimation = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="relative w-64 h-64">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 left-1/2 w-4 h-4 bg-purple-500 rounded-full"
          animate={{
            x: Math.cos(i * 1.05) * 80,
            y: Math.sin(i * 1.05) * 80,
            scale: [1, 1.5, 1]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
           <motion.div 
             className="absolute inset-0 bg-purple-400 blur-md rounded-full"
             animate={{ opacity: [0.5, 1, 0.5] }}
             transition={{ duration: 1.5, repeat: Infinity }}
           />
        </motion.div>
      ))}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 border-purple-50 z-10">
        <Sparkles className="w-8 h-8 text-purple-600" />
      </div>
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
         <motion.circle cx="50%" cy="50%" r="80" stroke="#d8b4fe" strokeWidth="1" fill="none" 
            animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
         />
      </svg>
    </div>
  </div>
);

// 3. Mock Room Dashboard
export const DashboardAnimation = () => (
  <div className="relative w-full h-full bg-[#0F1115] p-6 flex flex-col justify-between overflow-hidden">
        <div className="flex justify-between items-center mb-8 opacity-60">
            <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"/>
                <div className="w-3 h-3 rounded-full bg-yellow-500"/>
                <div className="w-3 h-3 rounded-full bg-green-500"/>
            </div>
            <div className="flex items-center gap-2 text-[10px] font-mono text-white tracking-widest uppercase">
                <Wifi size={10} />
                LIVE_CONNECTION
            </div>
        </div>

        <div className="relative z-10 flex flex-col justify-center h-full">
            <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-0 -left-2 bg-white rounded-xl p-3 shadow-lg flex items-center gap-3 z-20"
            >
                <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                    <Activity size={16} />
                </div>
                <div>
                    <div className="text-[9px] font-bold text-gray-400 uppercase">Speech Pace</div>
                    <div className="text-xs font-bold text-gray-900">140 wpm</div>
                </div>
            </motion.div>

            <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute bottom-12 -right-2 bg-white rounded-xl p-3 shadow-lg flex items-center gap-3 z-20"
            >
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <BarChart3 size={16} />
                </div>
                <div>
                    <div className="text-[9px] font-bold text-gray-400 uppercase">Confidence</div>
                    <div className="text-xs font-bold text-gray-900">92/100</div>
                </div>
            </motion.div>

            <div className="text-white text-xl font-medium leading-relaxed px-4 py-8">
                "Your CAC seems low. How does it scale when you saturate early adopters?"
            </div>
        </div>

        <div className="flex items-center gap-4 mt-auto">
             <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-white/90 text-xs font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
                Recording Answer...
             </div>
        </div>
    </div>
);

// 4. Funding Network
export const FundingAnimation = () => (
  <div className="relative w-full h-full flex items-center justify-center bg-emerald-50/50">
     <div className="grid grid-cols-2 gap-8">
        {[1,2,3,4].map((i) => (
           <motion.div 
             key={i}
             initial={{ scale: 0 }}
             animate={{ scale: 1 }}
             transition={{ delay: i * 0.2 }}
             className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center border border-emerald-100"
           >
              <Users className="text-emerald-500 w-6 h-6" />
           </motion.div>
        ))}
     </div>
     <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <motion.path 
           d="M 150 150 L 100 100 M 150 150 L 200 100 M 150 150 L 100 200 M 150 150 L 200 200" 
           stroke="#10b981" 
           strokeWidth="2" 
           strokeDasharray="5 5"
           initial={{ pathLength: 0 }}
           animate={{ pathLength: 1 }}
           transition={{ duration: 2, repeat: Infinity }}
        />
     </svg>
     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-emerald-600 rounded-full shadow-2xl flex items-center justify-center z-10 text-white">
        <TrendingUp size={32} />
     </div>
  </div>
);

// 5. Strategy Board
export const StrategyAnimation = () => (
  <div className="relative w-full h-full flex flex-col items-center justify-center bg-gray-50 p-8">
     <div className="w-full max-w-xs bg-white rounded-xl shadow-lg border border-gray-200 p-4 space-y-3">
        {["GTM Strategy", "Financial Model", "Pitch Narrative"].map((item, i) => (
           <motion.div 
             key={i}
             className="flex items-center gap-3 p-2 rounded-lg bg-gray-50"
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: i * 0.5 + 0.5 }}
           >
              <div className="w-5 h-5 rounded-full bg-gray-900 flex items-center justify-center text-white">
                 <motion.div
                   initial={{ scale: 0 }}
                   animate={{ scale: 1 }}
                   transition={{ delay: i * 0.5 + 0.8 }}
                 >
                   <CheckCircle2 size={12} />
                 </motion.div>
              </div>
              <span className="text-sm font-medium text-gray-700">{item}</span>
           </motion.div>
        ))}
     </div>
     <motion.div 
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute -right-4 top-1/3 bg-white p-3 rounded-lg shadow-xl border border-gray-100"
     >
        <PieChart className="text-gray-900 w-6 h-6" />
     </motion.div>
  </div>
);