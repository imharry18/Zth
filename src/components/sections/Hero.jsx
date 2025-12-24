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
  ChevronDown,
  Activity,
  BarChart3,
  Wifi,
  Mic
} from "lucide-react";

// --- 1. CONTENT CONFIGURATION (Exact from Doc) ---
const slides = [
  {
    id: "pitch-deck",
    category: "Pitch Deck Services",
    title: "Ideas, Made Fundable",
    description: "The foundation of every raise. Narratives crafted with strategy, research, and investor insight—no templates, just winning stories.",
    subline: "500+ decks delivered • $2B+ combined raises",
    icon: PenTool,
    cta: "Build My Deck",
    accent: "blue",     
    hex: "#3b82f6",
    // Dynamic Dashboard Data for this slide
    dashData: {
      leftLabel: "NARRATIVE SCORE",
      leftValue: "98/100 (Excellent)",
      mainText: "\"The problem slide creates immediate urgency. The solution feels inevitable.\"",
      rightLabel: "FUNDING PROBABILITY",
      rightValue: "High"
    }
  },
  {
    id: "smart-engine",
    category: "Smart Engine Deck",
    title: "Intelligence, Applied to Story",
    description: "Smart Deck Engine — Launching Soon. AI-driven storytelling with structure, logic, and clarity built in automatically.",
    subline: "Vision → Problem → Solution → Market logic generated instantly.",
    icon: Sparkles,
    cta: "Join Waitlist",
    accent: "purple",
    hex: "#a855f7",
    dashData: {
      leftLabel: "LOGIC FLOW",
      leftValue: "Optimized",
      mainText: "\"Generating market sizing based on Series A benchmarks for Fintech...\"",
      rightLabel: "GENERATION SPEED",
      rightValue: "12s"
    }
  },
  {
    id: "mock-room",
    category: "Investor Mock Room",
    title: "Prepared for the Questions That Matter",
    description: "Before the room decides. Simulate real investor conversations and de-risk your first meeting with AI-generated scenarios.",
    subline: "Your rehearsal before the real conversation.",
    icon: MessageSquare,
    cta: "Try Mock Room",
    accent: "orange",
    hex: "#f97316",
    dashData: {
      leftLabel: "SPEECH PACE",
      leftValue: "140 wpm (Optimal)",
      mainText: "\"Your CAC seems low for this market. How does it scale when you saturate early adopters?\"",
      rightLabel: "CONFIDENCE SCORE",
      rightValue: "92/100"
    }
  },
  {
    id: "funding",
    category: "Funding (Zth × 14U)",
    title: "Beyond the Raise",
    description: "For founders building enduring companies. Qualified founders introduced to curated investors based on stage and sector.",
    subline: "Warm intros, not spam lists.",
    icon: TrendingUp,
    cta: "Explore Pathways",
    accent: "emerald",
    hex: "#10b981",
    dashData: {
      leftLabel: "INVESTOR MATCH",
      leftValue: "5 Funds Found",
      mainText: "\"Connecting with Tier-1 VC partners aligned with your sector thesis...\"",
      rightLabel: "INTRO WARMTH",
      rightValue: "Direct"
    }
  },
  {
    id: "consultation",
    category: "Consultation",
    title: "Post-Funding Strategy",
    description: "Narrative refinement, product-market storytelling, and go-to-market direction for your next growth phase.",
    subline: "Let it aspire and market Growth.",
    icon: Briefcase,
    cta: "Book Consultation",
    accent: "gray",
    hex: "#6b7280",
    dashData: {
      leftLabel: "STRATEGY CHECK",
      leftValue: "In Progress",
      mainText: "\"Refining Go-To-Market strategy for Q3 expansion...\"",
      rightLabel: "READINESS",
      rightValue: "Verified"
    }
  }
];

// --- 2. SUB-COMPONENTS ---

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

// C. NEW: Dashboard Animation Visual (Replaces Static Image)
const DashboardVisual = ({ slide }) => {
  const data = slide.dashData;

  return (
    <div className="relative w-full h-full bg-[#0F1115] p-6 flex flex-col justify-between overflow-hidden">
        {/* Top Bar */}
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
            <div className="text-[10px] font-mono text-white tracking-widest uppercase">ZTH_ENGINE_V2.0</div>
        </div>

        {/* Center Content Area */}
        <div className="relative z-10 flex flex-col justify-center h-full">
            
            {/* 1. Floating Widget Left (Speech Pace style) */}
            <motion.div 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                key={`left-${slide.id}`}
                transition={{ delay: 0.2 }}
                className="absolute top-0 -left-2 bg-white rounded-xl p-3 shadow-lg flex items-center gap-3 z-20 max-w-[200px]"
            >
                <div className={`w-8 h-8 rounded-full bg-${slide.accent}-100 flex items-center justify-center text-${slide.accent}-600`}>
                    <Activity size={16} />
                </div>
                <div>
                    <div className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">{data.leftLabel}</div>
                    <div className="text-xs font-bold text-gray-900">{data.leftValue}</div>
                </div>
            </motion.div>

            {/* 2. Main Question/Text */}
            <motion.div 
                key={`text-${slide.id}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="text-white text-2xl md:text-3xl font-medium leading-tight px-4 py-12"
            >
                {data.mainText}
            </motion.div>

            {/* 3. Floating Widget Right (Confidence Score style) */}
            <motion.div 
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                key={`right-${slide.id}`}
                transition={{ delay: 0.3 }}
                className="absolute bottom-12 -right-2 bg-white rounded-xl p-3 shadow-lg flex items-center gap-3 z-20 max-w-[220px]"
            >
                <div className={`w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600`}>
                    <BarChart3 size={16} />
                </div>
                <div>
                    <div className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">{data.rightLabel}</div>
                    <div className="text-xs font-bold text-gray-900">{data.rightValue}</div>
                </div>
            </motion.div>

            {/* 4. Background Waveform (Visual Flair) */}
            <div className="absolute right-0 bottom-24 w-48 h-32 opacity-20 pointer-events-none">
                 <div className="flex items-end justify-between h-full gap-1">
                    {[...Array(12)].map((_, i) => (
                        <motion.div 
                           key={i}
                           animate={{ height: ["20%", "100%", "40%"] }}
                           transition={{ duration: 1.5, repeat: Infinity, repeatType: "mirror", delay: i * 0.1 }}
                           className={`w-full rounded-t-sm bg-${slide.accent}-500`}
                        />
                    ))}
                 </div>
            </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex items-center gap-4 mt-auto">
             <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-white/90 text-xs font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
                Processing...
             </div>
             <div className="text-white/30 text-xs font-mono">00:42 / 02:00</div>
        </div>
    </div>
  );
};

// D. Visual Block Container
const VisualBlock = ({ slide }) => {
  if (!slide) return null;

  return (
    <TiltCard>
      <motion.div 
         initial={{ scale: 0.95, opacity: 0, filter: "blur(10px)" }} 
         animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }} 
         transition={{ duration: 0.8, ease: "circOut" }}
         className="relative w-full aspect-video lg:aspect-[4/3] max-h-[550px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/50 bg-gray-50"
      >
        <DashboardVisual slide={slide} />
      </motion.div>
    </TiltCard>
  );
};

// E. Text Block
const TextBlock = ({ slide, isPlaying, onTogglePlay, onTimerComplete, timerKey }) => {
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
      
      {/* --- A. THE "AURA" BACKGROUND --- */}
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