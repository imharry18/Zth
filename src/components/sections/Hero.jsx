"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, 
  BrainCircuit, 
  LineChart, 
  Presentation, 
  Target,
  ChevronRight,
  ArrowRight
} from "lucide-react";
import Image from "next/image";

// --- Configuration Data ---
const slides = [
  {
    id: "narrative",
    title: "AI Narrative",
    headline: "Turn Ideas into Investor-Ready Stories",
    description: "Don't just pitch. Storytell. Our AI analyzes thousands of successful decks to structure your narrative exactly how VCs want to see it.",
    icon: Sparkles,
    color: "bg-blue-500",
    image: "/deck/slide-1.jpg", // Local Image
    layout: "standard" 
  },
  {
    id: "financials",
    title: "Financials",
    headline: "Market Sizing & Metrics Made Simple",
    description: "Complex financial modeling automated. Project your CAC, LTV, and growth metrics without needing a CFO.",
    icon: LineChart,
    color: "bg-emerald-500",
    image: "/deck/slide-2.jpg", // Local Image
    layout: "reversed" 
  },
  {
    id: "qa",
    title: "VC Simulator",
    headline: "Practice with a Virtual Investor",
    description: "Our Smart Engine throws real curveball questions at you before the meeting, so you're never caught off guard.",
    icon: BrainCircuit,
    color: "bg-purple-500",
    image: "/deck/slide-3.jpg", // Local Image
    layout: "standard"
  },
  {
    id: "design",
    title: "Smart Design",
    headline: "Design That Converts",
    description: "Forget generic templates. Get slide layouts optimized for readability, flow, and maximum investor retention.",
    icon: Presentation,
    color: "bg-indigo-500",
    image: "/deck/slide-4.jpg", // Local Image
    layout: "reversed"
  },
  {
    id: "analytics",
    title: "Analytics",
    headline: "Know Who is Watching",
    description: "Track open rates, time spent per slide, and investor engagement levels to refine your pitch in real-time.",
    icon: Target,
    color: "bg-orange-500",
    image: "/deck/slide-5.jpg", // Local Image
    layout: "standard"
  }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // Auto-Rotation Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000); // 6 seconds per slide
    return () => clearInterval(timer);
  }, []);

  // Determine if the current slide uses the reversed layout
  const isReversed = slides[current].layout === "reversed";

  return (
    <section className="relative w-full min-h-[95vh] flex flex-col justify-center bg-white pt-28 pb-12 overflow-hidden">
      
      {/* 1. Dynamic "Breathing" Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Primary Blob - Moves based on layout */}
        <motion.div 
          animate={{ 
            right: isReversed ? "auto" : "-10%", 
            left: isReversed ? "-10%" : "auto",
            scale: [1, 1.1, 1], // Breathing animation
          }}
          transition={{ 
            duration: 8, 
            ease: "easeInOut",
            repeat: Infinity 
          }}
          className="absolute top-[-10%] w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] opacity-60" 
        />
        
        {/* Secondary Blob - Fixed bottom center but pulsing */}
        <motion.div 
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-100/30 rounded-full blur-[120px]" 
        />
      </div>

      {/* 2. Main Content Area */}
      <div className="flex-1 flex items-center relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 w-full">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center"
            >
              
              {/* --- Text Column --- */}
              <div className={`flex flex-col justify-center ${isReversed ? 'lg:order-2 lg:items-end lg:text-right' : 'lg:order-1 lg:items-start lg:text-left'}`}>
                
                {/* Badge with Glow */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50/80 border border-blue-100/50 backdrop-blur-sm text-primary text-sm font-semibold mb-6 w-fit ${isReversed ? 'flex-row-reverse' : ''}`}
                >
                  <div className={`p-1.5 rounded-full ${slides[current].color} text-white shadow-lg shadow-blue-500/20`}>
                    {React.createElement(slides[current].icon, { size: 14 })}
                  </div>
                  <span className="tracking-wide text-xs uppercase">{slides[current].title} Engine</span>
                </motion.div>

                {/* Headline */}
                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6">
                  {slides[current].headline}
                </h1>

                {/* Description */}
                <p className="text-xl text-gray-500 max-w-lg leading-relaxed mb-10">
                  {slides[current].description}
                </p>

                {/* Interactive Buttons */}
                <div className={`flex items-center gap-4 ${isReversed ? 'flex-row-reverse' : 'flex-row'}`}>
                  <button className="group h-14 px-8 rounded-full bg-primary text-white font-semibold hover:bg-primary-hover transition-all shadow-xl shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2">
                    Start Creating 
                    {isReversed ? 
                      <ChevronRight size={18} className="group-hover:-translate-x-1 transition-transform" /> : 
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    }
                  </button>
                  <button className="h-14 px-8 rounded-full bg-white text-gray-700 border border-gray-200 font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm hover:shadow-md">
                    View Demo
                  </button>
                </div>
              </div>

              {/* --- Visual / Image Column --- */}
              <div className={`relative h-[450px] lg:h-[600px] w-full ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 bg-gray-900 group perspective-1000">
                   
                   {/* Main Image with slow Zoom Effect */}
                   <Image 
                      src={slides[current].image}
                      alt={slides[current].title}
                      fill
                      className="object-cover opacity-90 transition-transform duration-[10000ms] ease-linear scale-100 group-hover:scale-110"
                      priority
                   />
                   
                   {/* Cinematic Overlay Gradient */}
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />

                   {/* Floating "Glass" Card - Simulating UI Intelligence */}
                   <motion.div 
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                      className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl shadow-2xl"
                    >
                      <div className="flex items-center gap-4 mb-4">
                         <div className={`w-10 h-10 rounded-2xl ${slides[current].color} flex items-center justify-center shadow-lg text-white`}>
                            {React.createElement(slides[current].icon, { size: 20 })}
                         </div>
                         <div>
                            <div className="text-white font-semibold text-lg tracking-tight">AI Analysis Active</div>
                            <div className="text-white/60 text-xs uppercase tracking-wider font-medium">Processing Data</div>
                         </div>
                      </div>
                      
                      {/* Fake Data Bars Animation */}
                      <div className="space-y-3">
                         <div className="h-2 bg-white/10 rounded-full w-full overflow-hidden">
                           <motion.div 
                             initial={{ width: "0%" }}
                             animate={{ width: "85%" }}
                             transition={{ delay: 0.5, duration: 1.5, ease: "circOut" }}
                             className="h-full bg-white/80 rounded-full" 
                           />
                         </div>
                         <div className="h-2 bg-white/10 rounded-full w-2/3 overflow-hidden">
                           <motion.div 
                             initial={{ width: "0%" }}
                             animate={{ width: "60%" }}
                             transition={{ delay: 0.7, duration: 1.5, ease: "circOut" }}
                             className="h-full bg-white/60 rounded-full" 
                           />
                         </div>
                      </div>
                   </motion.div>
                </div>
                
                {/* Decorative Glow Behind Image */}
                <div className={`absolute -z-10 top-1/2 -translate-y-1/2 ${isReversed ? '-left-20' : '-right-20'} w-80 h-80 bg-primary/30 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000`} />
              </div>

            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* 3. Bottom Navigation - Glass Capsule */}
      <div className="mt-8 w-full z-20">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="bg-white/60 backdrop-blur-xl border border-white/40 shadow-xl shadow-black/5 rounded-2xl p-2 flex justify-between items-center overflow-x-auto no-scrollbar gap-2">
             {slides.map((slide, index) => (
               <button 
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`relative group flex-1 min-w-[120px] flex flex-col items-center justify-center gap-2 py-3 px-2 rounded-xl transition-all duration-300 ${
                    index === current ? 'bg-white shadow-md transform scale-105' : 'hover:bg-white/50'
                  }`}
               >
                  {/* Icon */}
                  <slide.icon 
                    size={20} 
                    className={`transition-colors duration-300 ${index === current ? 'text-primary' : 'text-gray-400 group-hover:text-gray-600'}`} 
                  />
                  
                  {/* Label */}
                  <span className={`text-xs font-bold transition-colors duration-300 ${
                    index === current ? "text-gray-900" : "text-gray-400 group-hover:text-gray-600"
                  }`}>
                    {slide.title}
                  </span>

                  {/* Active Progress Indicator */}
                  {index === current && (
                    <motion.div 
                      layoutId="active-tab"
                      className="absolute inset-0 border-2 border-primary/10 rounded-xl"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
               </button>
             ))}
          </div>
        </div>
      </div>

    </section>
  );
}