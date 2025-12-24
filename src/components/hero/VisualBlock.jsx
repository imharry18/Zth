"use client";

import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { DeckAnimation, EngineAnimation, DashboardAnimation, FundingAnimation, StrategyAnimation } from "@/components/hero/Animations";

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

export default function VisualBlock({ slide }) {
  if (!slide) return null;

  return (
    <TiltCard>
      <motion.div 
         initial={{ scale: 0.95, opacity: 0, filter: "blur(10px)" }} 
         animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }} 
         transition={{ duration: 0.8, ease: "circOut" }}
         className="relative w-full aspect-video lg:aspect-[4/3] max-h-[550px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 bg-white"
      >
         {slide.id === 'pitch-deck' && <DeckAnimation />}
         {slide.id === 'smart-engine' && <EngineAnimation />}
         {slide.id === 'mock-room' && <DashboardAnimation />}
         {slide.id === 'funding' && <FundingAnimation />}
         {slide.id === 'consultation' && <StrategyAnimation />}
         
         <div className={`absolute inset-0 bg-gradient-to-tr from-${slide.accent}-500/10 to-transparent pointer-events-none mix-blend-multiply`} />
      </motion.div>
    </TiltCard>
  );
}