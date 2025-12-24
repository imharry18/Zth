"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { slides } from "../hero/data";
import VisualBlock from "../hero/VisualBlock";
import TextBlock from "../hero/TextBlock";

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [resetTimerKey, setResetTimerKey] = useState(0);
  
  const handleNextSlide = useCallback(() => {
    setResetTimerKey(prev => prev + 1);
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const togglePlay = () => setIsAutoPlaying(!isAutoPlaying);

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

  // Scroll Trap for Sliders
  useEffect(() => {
    const handleWheel = (e) => {
      if (window.scrollY < 10) {
        const THRESHOLD = 20;
        if (Math.abs(e.deltaY) < THRESHOLD) return;
        if (e.deltaY > 0) { 
          if (current < slides.length - 1) {
            e.preventDefault();
            setIsAutoPlaying(false);
            setCurrent(prev => prev + 1);
          }
        } else { 
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

  const activeSlide = slides[current] || slides[0];

  return (
    <section className="relative w-full h-screen overflow-hidden bg-white flex items-center justify-center pt-32">
      
      {/* Background Aura */}
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
                className="w-[60vw] h-[60vw] rounded-full blur-[150px] opacity-20 transition-colors duration-1000"
                style={{ backgroundColor: activeSlide.hex }}
            />
        </motion.div>
      </AnimatePresence>

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
             <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center w-full">
                <div className={`w-full ${current % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                   <VisualBlock slide={activeSlide} />
                </div>
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

      {/* Navigation Dots */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => { setIsAutoPlaying(false); setCurrent(idx); }}
            className="group relative flex items-center justify-end h-4 w-10 cursor-pointer"
          >
            <span className="absolute right-6 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900 text-white text-[10px] font-bold px-2 py-1 rounded whitespace-nowrap uppercase tracking-wider shadow-lg pointer-events-none">
               {slides[idx].category}
            </span>
            <div className={`rounded-full transition-all duration-500 ease-out shadow-sm ${current === idx ? `h-8 w-1.5 bg-${slides[current].accent}-500` : "h-1.5 w-1.5 bg-gray-300 group-hover:bg-gray-400 group-hover:scale-125"}`} />
          </button>
        ))}
      </div>

      {/* Bottom Hint */}
      <motion.div 
         initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
         className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400"
      >
         <span className="text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-2">
            {isAutoPlaying ? "Auto-Pilot" : "Interactive"}
         </span>
         {isAutoPlaying ? (
            <div className="w-1 h-6 bg-gray-100 rounded-full overflow-hidden">
               <motion.div animate={{ y: ["0%", "100%"] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }} className="w-full h-1/2 bg-gray-300 rounded-full" />
            </div>
         ) : (
            <ChevronDown className="animate-bounce text-gray-300" size={16} />
         )}
      </motion.div>

    </section>
  );
}