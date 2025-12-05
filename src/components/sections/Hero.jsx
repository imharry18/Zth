"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { 
  Sparkles, 
  Layers, 
  LineChart, 
  BrainCircuit, 
  ChevronRight, 
  Play,
  Zap
} from "lucide-react";
import Image from "next/image";

// --- 1. ZTH STORY CHAPTERS ---
const slides = [
  {
    id: "identity",
    category: "What is ZTH?",
    title: "The AI Co-Pilot for Fundraising",
    description: "ZTH is an intelligent engine that transforms raw startup ideas into investor-ready narratives. We don't just design slides; we structure your entire business case.",
    icon: Sparkles,
    color: "bg-blue-600",
    textColor: "text-blue-600",
    visualType: "image",
    visualData: "/deck/slide-1.jpg", 
  },
  {
    id: "service-narrative",
    category: "Core Service",
    title: "Investor-Grade Storytelling",
    description: "Our algorithms analyze thousands of successful decks to restructure your pitch. We ensure you answer the 'Why Now?' and 'Why You?' before the investor even asks.",
    icon: Layers,
    color: "bg-indigo-600",
    textColor: "text-indigo-600",
    visualType: "image",
    visualData: "/deck/slide-2.jpg",
  },
  {
    id: "service-financials",
    category: "Financial Intelligence",
    title: "Automated Financial Modeling",
    description: "Forget complex spreadsheets. ZTH projects your CAC, LTV, and runway automatically, presenting financial health in a language VCs trust.",
    icon: LineChart,
    color: "bg-emerald-600",
    textColor: "text-emerald-600",
    visualType: "image",
    visualData: "/deck/slide-3.jpg",
  },
  {
    id: "capability",
    category: "The Simulator",
    title: "Virtual VC Due Diligence",
    description: "ZTH simulates a real investor meeting. Our AI throws curveball questions at your deck to identify gaps before you step into the boardroom.",
    icon: BrainCircuit,
    color: "bg-purple-600",
    textColor: "text-purple-600",
    visualType: "image",
    visualData: "/deck/slide-4.jpg",
  }
];

export default function Hero() {
  const containerRef = useRef(null);
  const [current, setCurrent] = useState(0);

  // Track scroll progress within this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Map scroll progress to slide index (0 to 3)
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // We have 4 slides, so we divide the scroll space into 4 chunks
    const slideIndex = Math.floor(latest * slides.length);
    // Clamp between 0 and length-1 to avoid out of bounds
    const cleanIndex = Math.min(Math.max(slideIndex, 0), slides.length - 1);
    
    if (cleanIndex !== current) {
      setCurrent(cleanIndex);
    }
  });

  // Manual Click to Scroll
  const handleManualChange = (index) => {
    if (!containerRef.current) return;
    // Calculate where to scroll to
    const sectionHeight = containerRef.current.offsetHeight;
    const scrollPos = containerRef.current.offsetTop + (sectionHeight / slides.length) * index;
    
    window.scrollTo({
      top: scrollPos + 10, // +10 to ensure we land nicely inside the segment
      behavior: "smooth"
    });
  };

  return (
    // 1. SCROLL CONTAINER (TALL)
    // height = 400vh (100vh per slide) ensures distinct scroll distance for each
    <section ref={containerRef} className="relative w-full h-[400vh] bg-white">
      
      {/* 2. STICKY VIEWPORT (The part that stays fixed) */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* Background Ambience */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.25 }}
            transition={{ duration: 1.5 }}
            className={`absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full blur-[140px] ${slides[current].color.replace('bg-', 'bg-')}`} 
          />
          <div className="absolute bottom-0 right-0 w-[40vw] h-[40vw] bg-gray-100/50 rounded-full blur-[100px]" />
        </div>

        {/* Main Grid */}
        <div className="w-full max-w-[1600px] px-6 lg:px-12 grid grid-cols-12 gap-8 items-center h-full relative z-10">
          
          {/* --- LEFT: STORY CONTENT (Cols 1-5) --- */}
          <div className="col-span-12 lg:col-span-5 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                {/* Badge */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm mb-6"
                >
                  <span className={`flex items-center justify-center w-5 h-5 rounded-full ${slides[current].color} text-white`}>
                    {React.createElement(slides[current].icon, { size: 10 })}
                  </span>
                  <span className={`text-xs font-bold uppercase tracking-widest ${slides[current].textColor}`}>
                    {slides[current].category}
                  </span>
                </motion.div>

                {/* Headline */}
                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6">
                  {slides[current].title}
                </h1>
                
                {/* Description */}
                <p className="text-lg lg:text-xl text-gray-500 leading-relaxed mb-8 max-w-lg">
                  {slides[current].description}
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4">
                  <button className="h-14 px-8 rounded-full bg-primary text-white font-semibold hover:bg-primary-hover transition-all shadow-xl shadow-primary/20 hover:-translate-y-0.5 flex items-center gap-2 group">
                    Start Building 
                    <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="h-14 w-14 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-all shadow-sm group">
                    <Play size={20} fill="currentColor" className="ml-1 text-gray-400 group-hover:text-primary transition-colors" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* --- CENTER: VISUAL STAGE (Cols 6-10) --- */}
          <div className="hidden lg:block col-span-6 relative h-[60vh]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.05, y: -20 }}
                transition={{ duration: 0.6, ease: "circOut" }}
                className="relative w-full h-full"
              >
                {/* The "Card" Container */}
                <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/50 bg-gray-900 group">
                  <Image 
                    src={slides[current].visualData}
                    alt={slides[current].title}
                    fill
                    className="object-cover opacity-90 transition-transform duration-[8s] ease-linear scale-105 group-hover:scale-110"
                    priority
                  />
                  
                  {/* Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                  {/* Floating Intelligence UI */}
                  <div className="absolute bottom-8 left-8 right-8">
                     <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-2xl flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl ${slides[current].color} flex items-center justify-center shadow-lg text-white`}>
                           <Zap size={24} fill="currentColor" />
                        </div>
                        <div>
                           <div className="text-white font-bold text-base">System Active</div>
                           <div className="text-white/60 text-xs font-medium uppercase tracking-wide">Analyzing Narrative</div>
                        </div>
                        <div className="ml-auto text-2xl font-bold text-white">98%</div>
                     </div>
                  </div>
                </div>

                {/* Decorative Back Glow */}
                <div className={`absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] ${slides[current].color} rounded-full blur-[100px] opacity-40`} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* --- RIGHT: GLASS CAPSULE NAVIGATION (Col 12) --- */}
          <div className="hidden lg:flex col-span-1 h-full items-center justify-end">
            <div className="bg-white/40 backdrop-blur-xl border border-white/50 shadow-xl shadow-gray-200/50 p-2 rounded-full flex flex-col gap-3">
              {slides.map((slide, index) => {
                const isActive = index === current;
                return (
                  <button
                    key={index}
                    onClick={() => handleManualChange(index)}
                    className={`relative group w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                      isActive ? 'bg-white shadow-md scale-110' : 'hover:bg-white/60'
                    }`}
                  >
                    {/* Icon */}
                    <slide.icon 
                      size={18} 
                      className={`transition-colors duration-300 ${
                        isActive ? slides[index].textColor : 'text-gray-400 group-hover:text-gray-600'
                      }`} 
                    />

                    {/* Active Ring Indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="active-ring"
                        className={`absolute inset-0 rounded-full border-2 ${slides[index].textColor.replace('text-', 'border-').replace('600', '100')}`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}

                    {/* Hover Tooltip (Left Side) */}
                    <div className="absolute right-14 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                      <div className="bg-gray-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-xl">
                        {slide.category}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}