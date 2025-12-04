"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { 
  BrainCircuit, 
  BarChart3, 
  Users, 
  Layers, 
  TrendingUp, 
  AlertCircle, 
  CheckCircle2 
} from "lucide-react";

// --- Data: The "Reality" Numbers ---
const metrics = [
  {
    value: "73%",
    label: "Decks Fail Early",
    subtext: "Most founders pitch blindly. We fix this with investor-first narratives.",
    color: "text-red-500",
    iconBg: "bg-red-500/10",
    icon: AlertCircle,
  },
  {
    value: "5x",
    label: "Higher Response",
    subtext: "Data-backed market sizing increases investor engagement significantly.",
    color: "text-blue-600",
    iconBg: "bg-blue-600/10",
    icon: TrendingUp,
  },
  {
    value: "80%",
    label: "Conversion Chance",
    subtext: "Structured flow keeps VCs reading past the first 3 slides.",
    color: "text-emerald-600",
    iconBg: "bg-emerald-600/10",
    icon: CheckCircle2,
  },
];

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
      // UPDATED: Added blue shadow on hover and reduced border opacity
      className={`relative overflow-hidden rounded-[2rem] border border-gray-200/60 bg-gradient-to-b from-white to-gray-50/50 shadow-sm transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,126,209,0.12)] hover:border-primary/20 ${className}`}
    >
      {/* Moving Ambient Glow */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 ease-in-out"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(0, 126, 209, 0.06), transparent 40%)`,
        }}
      />
      
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};

export default function Stats() {
  return (
    <section className="py-24 bg-[#FAFAFA] relative overflow-hidden" id="smart-engine">
      
      {/* Background Texture */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* --- SECTION 1: THE REALITY --- */}
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
              The Fundraising <span className="text-primary">Reality</span>
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Numbers don't lie. Most decks fail not because of the idea, but the presentation.
              We fixed the broken fundraising process.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                // UPDATED: Reduced padding (p-6), reduced border radius slightly, added Blue Shadow
                className="group relative bg-white rounded-[1.5rem] p-6 border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,126,209,0.12)] hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`w-12 h-12 rounded-2xl ${metric.iconBg} ${metric.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <metric.icon size={24} />
                  </div>
                  <h3 className={`text-4xl font-bold ${metric.color} mb-2 tracking-tight`}>
                    {metric.value}
                  </h3>
                  <p className="text-base font-semibold text-gray-900 mb-2">{metric.label}</p>
                  <p className="text-sm text-gray-500 leading-relaxed px-2">{metric.subtext}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- SECTION 2: THE ZTH ADVANTAGE --- */}
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
             <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
              Why Founders Choose <span className="text-primary">ZTH</span>
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Experience the difference of an intelligent, data-driven engine.
            </p>
          </motion.div>

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
                {/* UPDATED: Reduced padding (p-8) to make cards shorter */}
                <SpotlightCard className="h-full p-8 flex flex-col justify-between group">
                  <div>
                    <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-[1rem] bg-gray-50 text-gray-400 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner group-hover:shadow-lg group-hover:shadow-primary/30">
                      <feature.icon className="h-7 w-7" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-500 leading-relaxed text-sm group-hover:text-gray-600 transition-colors">
                      {feature.description}
                    </p>
                  </div>
                  
                  {/* Bottom Indicator */}
                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    Learn more <span className="text-lg">→</span>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}