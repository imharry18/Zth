"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValue, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import { Quote, AlertCircle, Lightbulb, Rocket } from "lucide-react";

// --- Data: The Narrative Journey ---
const journeySteps = [
  {
    icon: Quote,
    title: "The Misconception",
    content: "We used to think pitch decks were just about clean slides and good storytelling.",
    // Indigo Theme
    activeColors: "bg-indigo-50 text-indigo-600 border-indigo-200",
    glowColor: "rgba(79, 70, 229, 0.25)", // Reduced opacity for subtler ambience
  },
  {
    icon: AlertCircle,
    title: "The Hard Truth",
    content: "Then we learned the hard way: 49% of decks fail in the first few slides. Investors spend just 2 minutes reading.",
    // Red Theme
    activeColors: "bg-red-50 text-red-600 border-red-200",
    glowColor: "rgba(220, 38, 38, 0.25)",
  },
  {
    icon: Lightbulb,
    title: "The Realization",
    content: "We realized founders don't need templates. They need a mirror that thinks like a VC and calls out what's missing.",
    // Amber Theme
    activeColors: "bg-amber-50 text-amber-600 border-amber-200",
    glowColor: "rgba(217, 119, 6, 0.25)",
  },
  {
    icon: Rocket,
    title: "The Solution",
    content: "So we built a system that questions like an investor, sharpens your numbers, and turns your story into conviction.",
    // Primary Blue Theme
    activeColors: "bg-blue-50 text-primary border-blue-200",
    glowColor: "rgba(0, 126, 209, 0.25)",
  },
];

// --- Sub-Component: The Animated Icon Node ---
const StepIcon = ({ step, index, total, scrollYProgress }) => {
  const [hasActivated, setHasActivated] = useState(false);
  
  // Calculate threshold: 0% for first, 100% for last
  const threshold = index / (total - 1);

  // Monitor scroll progress to trigger "latching" state
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Trigger slightly before the line hits exact center of icon (-0.05 buffer)
    if (latest >= threshold - 0.05 && !hasActivated) {
      setHasActivated(true);
    }
  });

  return (
    <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center w-14 h-14 z-20">
      {/* The Icon Container */}
      <motion.div 
        initial="inactive"
        animate={hasActivated ? "active" : "inactive"}
        variants={{
          inactive: {
            filter: "grayscale(100%)",
            opacity: 0.9, // 2. Don't fade so much (Increased visibility)
            scale: 0.9,
            backgroundColor: "#ffffff",
            boxShadow: "0px 0px 0px 0px transparent",
            borderColor: "rgba(255, 255, 255, 1)"
          },
          active: {
            filter: "grayscale(0%)",
            opacity: 1,
            scale: 1.1,
            backgroundColor: "#ffffff",
            // 1. Reduced ambience: Soft, subtle glow
            boxShadow: `0px 0px 25px 5px ${step.glowColor}`,
            borderColor: "rgba(255, 255, 255, 0)" 
          }
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`w-14 h-14 rounded-full border-4 flex items-center justify-center ${step.activeColors} border-white`}
      >
        <step.icon size={20} fill="currentColor" className="opacity-90" />
      </motion.div>
    </div>
  );
};

// --- Data: The Founders ---
const founders = [
  {
    name: 'Akshat Choubey',
    title: 'Co-Founder',
    img: '/founders/founder1.jpg', 
    description: 'CS Executive with expertise in financial modeling and compliance, focused on building scalable, regulation-ready solutions.'
  },
  {
    name: 'Sanskar Choubey',
    title: 'Co-Founder',
    img: '/founders/founder3.jpg',
    description: 'Started in investment banking at 18. Bringing early VC insights to make fundraising simpler and founder-first.'
  },
  {
    name: 'Sankalp Choubey',
    title: 'Co-Founder',
    img: '/founders/founder2.jpg',
    description: 'Tech veteran across SaaS and data analytics. Building ZTH to deliver clear, data-driven insights for investors.'
  },
  {
    name: 'Krishna Goenka',
    title: 'Co-Founder',
    img: '/founders/founder4.jpg',
    description: 'Deep experience in data analytics and BI tools. Transforming complex metrics into actionable, growth-driven decisions.'
  }
];

export default function FoundersCorner() {
  const containerRef = useRef(null);
  
  // Track scroll progress of the roadmap container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 55%"] 
  });

  // 3. Latching Logic for the Blue Line
  // We use a MotionValue to store the maximum progress reached so far.
  const maxScroll = useMotionValue(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Only update if the new value is greater than the current max
    if (latest > maxScroll.get()) {
      maxScroll.set(latest);
    }
  });

  // Map the MAX progress (not current progress) to line height
  const lineHeight = useTransform(maxScroll, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-32 bg-white relative overflow-hidden" id="founders">
      
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50/40 rounded-full blur-[120px] opacity-60" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gray-50 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* --- PART 1: THE NARRATIVE ROADMAP --- */}
        <div className="max-w-3xl mx-auto mb-32" ref={containerRef}>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              How We Got Here
            </h2>
            <p className="text-gray-500 mt-2">The journey from frustration to solution.</p>
          </div>

          <div className="relative">
            {/* The Vertical Line Track (Gray Background) */}
            <div className="absolute left-[28px] top-4 bottom-4 w-1 bg-gray-100 rounded-full md:left-1/2 md:-ml-0.5 overflow-hidden">
              {/* The Filling Line (Blue Foreground) - Driven by maxScroll */}
              <motion.div 
                style={{ height: lineHeight }}
                className="absolute top-0 left-0 w-full bg-primary rounded-full origin-top"
              />
            </div>

            <div className="space-y-12">
              {journeySteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-center md:justify-between ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Icon Node (Scroll Aware & Latching) */}
                  <StepIcon 
                    step={step} 
                    index={index} 
                    total={journeySteps.length} 
                    scrollYProgress={scrollYProgress} 
                  />

                  {/* Content Box */}
                  <div className={`ml-20 md:ml-0 md:w-[42%] ${
                    index % 2 === 0 ? "md:text-right md:pr-8" : "md:text-left md:pl-8"
                  }`}>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-base">
                      {step.content}
                    </p>
                  </div>
                  
                  {/* Empty Spacer for the other side */}
                  <div className="hidden md:block md:w-[42%]" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* --- PART 2: THE FOUNDERS GRID --- */}
        <div className="relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
              Meet the <span className="text-primary">Minds</span>
            </h2>
            <p className="text-gray-500 text-lg">
              Built by founders, for founders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="group relative"
              >
                {/* Card Container */}
                <div className="h-full bg-[#FAFAFA] rounded-[2rem] p-6 border border-white shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                  
                  {/* Image Container */}
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150" />
                    <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-sm group-hover:border-primary/10 transition-colors duration-500">
                      <Image 
                        src={founder.img} 
                        alt={founder.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="text-center relative z-10">
                    <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                      {founder.name}
                    </h3>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
                      {founder.title}
                    </p>
                    <div className="w-8 h-1 bg-gray-200 rounded-full mx-auto mb-4 group-hover:bg-primary/30 transition-colors" />
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {founder.description}
                    </p>
                  </div>

                  {/* Card Bottom Fade */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent opacity-50 pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}