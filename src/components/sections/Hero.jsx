"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { 
  PenTool, 
  Sparkles, 
  MessageSquare, 
  TrendingUp, 
  Briefcase,
  ArrowRight,
  Play,
  Pause,
  ChevronDown
} from "lucide-react";
import Image from "next/image";

// --- 1. CONTENT CONFIGURATION ---
const slides = [
  {
    id: "pitch-deck",
    category: "Pitch Deck Services",
    title: "Ideas, Made Fundable",
    description: "The foundation of every raise. Narratives crafted with strategy, research, and investor insight—no templates, just winning stories.",
    subline: "500+ decks delivered • $2B+ combined raises",
    icon: PenTool,
    visual: "/hero/1.jpg", 
    cta: "Build My Deck",
    accent: "blue",     
    hex: "#3b82f6"      
  },
  {
    id: "smart-engine",
    category: "Smart Engine Deck",
    title: "Intelligence, Applied to Story",
    description: "Smart Deck Engine — Launching Soon. AI-driven storytelling with structure, logic, and clarity built in automatically.",
    subline: "Vision → Problem → Solution → Market logic generated instantly.",
    icon: Sparkles,
    visual: "/hero/2.jpg",
    cta: "Join Waitlist",
    accent: "purple",
    hex: "#a855f7"
  },
  {
    id: "mock-room",
    category: "Investor Mock Room",
    title: "Prepared for the Questions That Matter",
    description: "Before the room decides. Simulate real investor conversations and de-risk your first meeting with AI-generated scenarios.",
    subline: "Your rehearsal before the real conversation.",
    icon: MessageSquare,
    visual: "/hero/3.jpg",
    cta: "Try Mock Room",
    accent: "orange",
    hex: "#f97316"
  },
  {
    id: "funding",
    category: "Funding (Zth × 14U)",
    title: "Beyond the Raise",
    description: "For founders building enduring companies. Qualified founders introduced to curated investors based on stage and sector.",
    subline: "Warm intros, not spam lists.",
    icon: TrendingUp,
    visual: "/hero/4.jpg",
    cta: "Explore Pathways",
    accent: "emerald",
    hex: "#10b981"
  },
  {
    id: "consultation",
    category: "Consultation",
    title: "Post-Funding Strategy",
    description: "Narrative refinement, product-market storytelling, and go-to-market direction for your next growth phase.",
    subline: "Let it aspire and market Growth.",
    icon: Briefcase,
    visual: "/hero/5.jpg",
    cta: "Book Consultation",
    accent: "gray",
    hex: "#6b7280"
  }
];

// --- 2. SUB-COMPONENTS (Defined Outside for Stability) ---

// A. Circular Progress Timer
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

  const r = 18;
  const circ = 2 * Math.PI * r;
  return (
    <button 
      onClick={onClick}
      className="relative w-14 h-14 rounded-full border border-gray-100 bg-white flex items-center justify-center hover:border-gray-300 hover:shadow-sm transition-all group cursor-pointer z-30"
    >
      <div className="relative w-10 h-10 flex items-center justify-center">
        {/* Track */}
        <svg className="-rotate-90 w-full h-full">
          <circle className="text-gray-100" strokeWidth="3" fill="transparent" r={r} cx="20" cy="20" />
          {/* Progress */}
          <circle 
            className="text-gray-900 transition-all duration-75 ease-linear" 
            strokeWidth="3" 
            strokeDasharray={circ} 
            strokeDashoffset={circ - (progress / 100) * circ} 
            strokeLinecap="round" 
            fill="transparent" 
            r={r} 
            cx="20" 
            cy="20" 
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-gray-900">
          {isPlaying ? <Pause size={16} fill="currentColor" /> : <Play size={16} fill="currentColor" className="ml-0.5"/>}
        </div>
      </div>
    </button>
  );
};

// B. 3D Tilt Wrapper
const TiltCard = ({ children }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [5, -5]);
  const rotateY = useTransform(x, [-100, 100], [-5, 5]);

  return (
    <motion.div
      style={{ rotateX, rotateY, perspective: 1000 }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - (rect.left + rect.width / 2));
        y.set(e.clientY - (rect.top + rect.height / 2));
      }}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      className="w-full h-full relative preserve-3d"
    >
      {children}
    </motion.div>
  );
};

// C. Text Block
const TextBlock = ({ slide, isPlaying, onTogglePlay, onTimerComplete, timerKey }) => {
  // Safe guard in case slide is undefined
  if (!slide) return null;

  return (
    <div className="relative z-20 flex flex-col items-start text-left">
      
      {/* Badge */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-6 bg-${slide.accent}-50 border-${slide.accent}-100 text-${slide.accent}-600`}
      >
        <slide.icon size={14} />
        <span className="text-xs font-bold uppercase tracking-widest">{slide.category}</span>
      </motion.div>

      {/* Title */}
      <motion.h1 
        key={slide.title}
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }}
        className="text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6"
      >
        {slide.title}
      </motion.h1>

      {/* Description */}
      <motion.p 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
        className="text-lg text-gray-500 leading-relaxed mb-8 max-w-lg"
      >
        {slide.description}
      </motion.p>

      {/* Subline */}
      <motion.div 
        initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}
        className="text-sm font-semibold text-gray-400 mb-8 flex items-center gap-2"
      >
        <div className={`w-1 h-5 rounded-full bg-${slide.accent}-500`}/> 
        {slide.subline}
      </motion.div>

      {/* Actions */}
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
};

// D. Visual Block
const VisualBlock = ({ slide }) => {
  // Safe guard
  if (!slide) return null;

  return (
    <TiltCard>
      <motion.div 
         initial={{ scale: 0.95, opacity: 0, filter: "blur(10px)" }} 
         animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }} 
         transition={{ duration: 0.8, ease: "circOut" }}
         className="relative w-full aspect-video lg:aspect-[4/3] max-h-[550px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/50 bg-gray-50"
      >
        {/* Using a standard img tag with error handling can be safer if Next Image causes issues, 
            but keeping Next Image with a valid path check is better */}
        <Image 
          src={slide.visual} 
          alt={slide.title} 
          fill 
          className="object-cover transition-transform duration-[10s] hover:scale-110" 
          priority 
        />
        
        {/* Soft Gradient Overlay (Cinematic) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60 pointer-events-none" />
        
        {/* Floating Tag */}
        <div className="absolute bottom-8 left-8 bg-white/30 backdrop-blur-xl border border-white/40 px-4 py-2 rounded-full flex items-center gap-2 shadow-lg z-10">
           <div className={`w-2 h-2 rounded-full bg-${slide.accent}-400 animate-pulse`} />
           <span className="text-white text-xs font-bold uppercase tracking-wide">Live Preview</span>
        </div>
      </motion.div>
    </TiltCard>
  );
};

// --- 3. MAIN COMPONENT ---
export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [resetTimerKey, setResetTimerKey] = useState(0);
  
  // -- Handlers --
  const handleNextSlide = useCallback(() => {
    setResetTimerKey(prev => prev + 1);
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const togglePlay = () => setIsAutoPlaying(!isAutoPlaying);

  // -- Idle System --
  useEffect(() => {
    let idleTimer;
    const resetIdle = () => {
      clearTimeout(idleTimer);
      if (!isAutoPlaying) {
        idleTimer = setTimeout(() => {
           if (window.scrollY < 50) {
             setIsAutoPlaying(true);
             setResetTimerKey(prev => prev + 1);
           }
        }, 6000); 
      }
    };
    window.addEventListener("mousemove", resetIdle);
    window.addEventListener("wheel", resetIdle);
    return () => {
      window.removeEventListener("mousemove", resetIdle);
      window.removeEventListener("wheel", resetIdle);
      clearTimeout(idleTimer);
    };
  }, [isAutoPlaying]);

  // -- Scroll Trap Logic --
  useEffect(() => {
    const handleWheel = (e) => {
      if (window.scrollY < 10) {
        const THRESHOLD = 20;
        if (Math.abs(e.deltaY) < THRESHOLD) return;

        if (e.deltaY > 0) { // Scroll Down
          if (current < slides.length - 1) {
            e.preventDefault();
            setIsAutoPlaying(false);
            setCurrent(prev => prev + 1);
          }
        } 
        else { // Scroll Up
          if (current > 0) {
            e.preventDefault();
            setIsAutoPlaying(false);
            setCurrent(prev => prev - 1);
          }
        }
      }
    };
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [current]);

  // Safe Slide Access
  const activeSlide = slides[current] || slides[0];

  return (
    <section 
      className="relative w-full h-screen overflow-hidden bg-white flex items-center justify-center pt-32"
    >
      
      {/* --- A. THE "AURA" BACKGROUND (Replaces Linear Gradients) --- */}
      {/* This creates a soft, breathing color blob in the center */}
      <AnimatePresence mode="wait">
        <motion.div 
            key={`bg-${current}`}
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute inset-0 pointer-events-none flex items-center justify-center"
        >
            <div 
                className="w-[60vw] h-[60vw] rounded-full blur-[150px] opacity-30 transition-colors duration-1000"
                style={{ backgroundColor: activeSlide.hex }}
            />
        </motion.div>
      </AnimatePresence>

      {/* --- B. MAIN CONTENT STAGE (Zig-Zag Layout) --- */}
      <div className="w-full max-w-[1600px] px-6 lg:px-12 relative z-10 h-full flex items-center">
        <AnimatePresence mode="popLayout" initial={false}>
           <motion.div
             key={current}
             initial={{ y: 50, opacity: 0, filter: "blur(10px)" }}
             animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
             exit={{ y: -50, opacity: 0, filter: "blur(10px)" }}
             transition={{ type: "spring", stiffness: 200, damping: 25 }}
             className="absolute inset-0 w-full h-full flex items-center justify-center p-4 lg:p-12"
           >
             {/* Layout: Alternates Left/Right based on even/odd index */}
             <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center w-full">
                
                {/* 1. Visual Side */}
                <div className={`w-full ${current % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                   <VisualBlock slide={activeSlide} />
                </div>

                {/* 2. Text Side */}
                <div className={`w-full ${current % 2 === 1 ? 'lg:order-2 lg:pl-12' : 'lg:order-1 lg:pr-12'}`}>
                   <TextBlock 
                      slide={activeSlide} 
                      isPlaying={isAutoPlaying}
                      onTogglePlay={togglePlay}
                      onTimerComplete={handleNextSlide}
                      timerKey={resetTimerKey}
                   />
                </div>

             </div>
           </motion.div>
        </AnimatePresence>
      </div>

      {/* --- C. RIGHT NAVIGATION DOTS --- */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setIsAutoPlaying(false);
              setCurrent(idx);
            }}
            className="group relative flex items-center justify-end h-4 w-10 cursor-pointer"
          >
            {/* Tooltip */}
            <span className="absolute right-6 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900 text-white text-[10px] font-bold px-2 py-1 rounded whitespace-nowrap uppercase tracking-wider shadow-lg pointer-events-none">
               {slides[idx].category}
            </span>
            {/* Dot/Bar */}
            <div 
                className={`rounded-full transition-all duration-500 ease-out shadow-sm
                ${current === idx 
                    ? `h-8 w-1.5 bg-${slides[current].accent}-500` 
                    : "h-1.5 w-1.5 bg-gray-300 group-hover:bg-gray-400 group-hover:scale-125"
                }`} 
            />
          </button>
        ))}
      </div>

      {/* --- D. BOTTOM HINT --- */}
      <motion.div 
         initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
         className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400"
      >
         <span className="text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-2">
            {isAutoPlaying ? "Auto-Pilot" : "Interactive"}
         </span>
         {isAutoPlaying ? (
            <div className="w-1 h-6 bg-gray-100 rounded-full overflow-hidden">
               <motion.div 
                 animate={{ y: ["0%", "100%"] }} 
                 transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                 className="w-full h-1/2 bg-gray-300 rounded-full" 
               />
            </div>
         ) : (
            <ChevronDown className="animate-bounce text-gray-300" size={16} />
         )}
      </motion.div>

    </section>
  );
}