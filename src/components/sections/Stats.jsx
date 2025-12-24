"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { 
  BrainCircuit, 
  BarChart3, 
  Users, 
  Layers, 
  ArrowRight
} from "lucide-react";

// --- Data: Equal Sized Features ---
const features = [
  {
    title: "AI VC Question Engine",
    description: "Simulate real investor Q&A. Prepare VC-style responses before you even step into the room.",
    icon: BrainCircuit,
    color: "text-purple-600",
    bg: "bg-purple-50",
    border: "group-hover:border-purple-200",
    shadow: "group-hover:shadow-purple-500/10",
    gradient: "from-purple-500/5 to-transparent",
    glow: "rgba(168, 85, 247, 0.15)"
  },
  {
    title: "Investor-First Flow",
    description: "A pitch structure engineered to convert attention into interest using proven VC logic.",
    icon: Layers,
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "group-hover:border-blue-200",
    shadow: "group-hover:shadow-blue-500/10",
    gradient: "from-blue-500/5 to-transparent",
    glow: "rgba(59, 130, 246, 0.15)"
  },
  {
    title: "KPIs & Benchmarks",
    description: "Populate slides with startup KPIs and industry benchmarks instantly.",
    icon: BarChart3,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "group-hover:border-emerald-200",
    shadow: "group-hover:shadow-emerald-500/10",
    gradient: "from-emerald-500/5 to-transparent",
    glow: "rgba(16, 185, 129, 0.15)"
  },
  {
    title: "Founder-Tested",
    description: "Developed from hands-on fundraising journeys and real feedback.",
    icon: Users,
    color: "text-orange-600",
    bg: "bg-orange-50",
    border: "group-hover:border-orange-200",
    shadow: "group-hover:shadow-orange-500/10",
    gradient: "from-orange-500/5 to-transparent",
    glow: "rgba(249, 115, 22, 0.15)"
  },
];

// --- Component: Dynamic Color Spotlight Card ---
const SpotlightCard = ({ children, className = "", glowColor = "rgba(0, 126, 209, 0.1)" }) => {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative overflow-hidden rounded-[2.5rem] border border-gray-100 bg-white shadow-sm transition-all duration-500 ${className}`}
    >
      {/* 1. Dynamic Hover Glow (The "Spotlight") */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 ease-in-out"
        style={{
          opacity,
          background: `radial-gradient(800px circle at ${position.x}px ${position.y}px, ${glowColor}, transparent 40%)`,
        }}
      />
      
      {/* Content Layer */}
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};

export default function Stats() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 bg-white overflow-hidden">
      
      {/* --- 1. Colorful Ambient Background --- */}
      <div className="absolute inset-0 pointer-events-none">
         {/* Subtle Grid */}
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
         
         {/* Colorful Orbs */}
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-50/50 rounded-full blur-[120px] opacity-60" />
         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-50/40 rounded-full blur-[100px] opacity-50" />
         <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-emerald-50/40 rounded-full blur-[100px] opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        
        {/* --- Header --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
           <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            Why Founders Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">ZTH</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Experience the difference of an intelligent engine built to <br className="hidden md:block" />
            convert investors, not just impress them.
          </p>
        </motion.div>

        {/* --- Feature Grid (Symmetrical 2x2) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="h-full"
            >
              <SpotlightCard 
                className={`h-full group ${feature.border} hover:shadow-2xl hover:-translate-y-1 ${feature.shadow}`}
                glowColor={feature.glow}
              >
                {/* Internal Gradient Splash */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative p-10 flex flex-col justify-between h-full min-h-[320px]">
                  <div>
                    {/* Icon Box */}
                    <div className={`mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl ${feature.bg} ${feature.color} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-sm`}>
                      <feature.icon className="h-8 w-8" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-500 leading-relaxed text-lg group-hover:text-gray-600 transition-colors">
                      {feature.description}
                    </p>
                  </div>
                  
                  {/* Bottom Action Hint */}
                  <div className={`mt-8 flex items-center gap-2 text-sm font-bold ${feature.color} opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300`}>
                    Learn more <ArrowRight size={16} />
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}