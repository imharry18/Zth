"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Pause } from "lucide-react";

const ProgressRing = ({ isPlaying, duration, onComplete, resetKey, onClick }) => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let startTime;
    let reqId;
    if (!isPlaying) { setProgress(0); return; }
    const animate = (time) => {
      if (!startTime) startTime = time;
      const elapsed = time - startTime;
      const p = Math.min((elapsed / duration) * 100, 100);
      setProgress(p);
      if (elapsed < duration) reqId = requestAnimationFrame(animate);
      else onComplete();
    };
    reqId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(reqId);
  }, [isPlaying, duration, onComplete, resetKey]);

  return (
    <button onClick={onClick} className="relative w-14 h-14 rounded-full border border-gray-100 bg-white flex items-center justify-center hover:border-gray-300 hover:shadow-sm transition-all group cursor-pointer z-30">
      <div className="relative w-10 h-10 flex items-center justify-center">
        <svg className="-rotate-90 w-full h-full">
          <circle className="text-gray-100" strokeWidth="3" fill="transparent" r={18} cx="20" cy="20" />
          <circle className="text-gray-900 transition-all duration-75 ease-linear" strokeWidth="3" strokeDasharray={2 * Math.PI * 18} strokeDashoffset={2 * Math.PI * 18 - (progress / 100) * 2 * Math.PI * 18} strokeLinecap="round" fill="transparent" r={18} cx="20" cy="20" />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-gray-900">
          {isPlaying ? <Pause size={16} fill="currentColor" /> : <Play size={16} fill="currentColor" className="ml-0.5"/>}
        </div>
      </div>
    </button>
  );
};

export default function TextBlock({ slide, isPlaying, onTogglePlay, onTimerComplete, timerKey }) {
  if (!slide) return null;

  return (
    <div className="relative z-20 flex flex-col items-start text-left">
      <motion.div 
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-6 bg-${slide.accent}-50 border-${slide.accent}-100 text-${slide.accent}-600`}
      >
        <slide.icon size={14} />
        <span className="text-xs font-bold uppercase tracking-widest">{slide.category}</span>
      </motion.div>

      <motion.h1 
        key={slide.title}
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }}
        className="text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6"
      >
        {slide.title}
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
        className="text-lg text-gray-500 leading-relaxed mb-8 max-w-lg"
      >
        {slide.description}
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}
        className="text-sm font-semibold text-gray-400 mb-8 flex items-center gap-2"
      >
        <div className={`w-1 h-5 rounded-full bg-${slide.accent}-500`}/> 
        {slide.subline}
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="flex gap-4">
        <button className="h-14 px-8 rounded-full bg-gray-900 text-white font-semibold hover:bg-black hover:scale-105 active:scale-95 transition-all flex items-center gap-2 group shadow-xl cursor-pointer">
          {slide.cta} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>
        
        <ProgressRing 
          isPlaying={isPlaying} 
          duration={5000} 
          onComplete={onTimerComplete} 
          resetKey={timerKey} 
          onClick={onTogglePlay}
        />
      </motion.div>
    </div>
  );
}