"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { 
  BrainCircuit, 
  BarChart3, 
  Users, 
  Layers 
} from "lucide-react";

// --- Data: The "Solution" Features ---
const features = [
  {
    title: "AI VC Question Engine",
    description: "Simulate real investor Q&A. Prepare VC-style responses before you even step into the room.",
    icon: BrainCircuit,
    className: "md:col-span-2 lg:col-span-2", 
  },
  {
    title: "KPIs & Benchmarks",
    description: "Populate slides with startup KPIs and industry benchmarks.",
    icon: BarChart3,
    className: "md:col-span-1 lg:col-span-1",
  },
  {
    title: "Founder-Tested",
    description: "Developed from hands-on fundraising journeys and real feedback.",
    icon: Users,
    className: "md:col-span-1 lg:col-span-1",
  },
  {
    title: "Investor-First Flow",
    description: "A pitch structure engineered to convert attention into interest using VC logic.",
    icon: Layers,
    className: "md:col-span-2 lg:col-span-2",
  },
];

// --- Premium Component: Ambient Spotlight Card ---
const SpotlightCard = ({ children, className = "" }) => {
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
      className={`relative overflow-hidden rounded-[2rem] border border-gray-200/60 bg-white shadow-sm transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,126,209,0.12)] hover:border-primary/20 ${className}`}
    >
      {/* Moving Ambient Glow */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 ease-in-out"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(0, 126, 209, 0.04), transparent 40%)`,
        }}
      />
      
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};

export default function Stats() {
  return (
    <section className="py-32 bg-white relative overflow-hidden" id="smart-engine">
      
      {/* --- 1. The Square Grid Background --- */}
      <div className="absolute inset-0 pointer-events-none">
         {/* Grid Pattern */}
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] [background-size:40px_40px]"></div>
         
         {/* Top Fade (Seamless transition from previous section) */}
         <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white to-transparent"></div>
         
         {/* Bottom Fade (Seamless transition to next section) */}
         <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* --- Header --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
           <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            Why Founders Choose <span className="text-primary">ZTH</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Experience the difference of an intelligent, data-driven engine built to convert investors.
          </p>
        </motion.div>

        {/* --- Feature Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={feature.className}
            >
              <SpotlightCard className="h-full p-10 flex flex-col justify-between group">
                <div>
                  <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-[1rem] bg-gray-50 text-gray-400 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner group-hover:shadow-lg group-hover:shadow-primary/30">
                    <feature.icon className="h-7 w-7" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-500 leading-relaxed text-base group-hover:text-gray-600 transition-colors">
                    {feature.description}
                  </p>
                </div>
                
                {/* Bottom Indicator */}
                <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-primary opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  Learn more <span className="text-lg">→</span>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}