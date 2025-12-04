"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowRight, Layers, Zap, Target, TrendingUp, DollarSign, AlertCircle } from "lucide-react";

// --- Data: The Core Benefits (Left Side) ---
const benefits = [
  {
    title: "Clarity",
    description: "Eliminate noise. We strip away the fluff so investors see the signal immediately.",
    icon: Target,
  },
  {
    title: "Momentum",
    description: "A narrative structure designed to keep VCs turning the page, building anticipation.",
    icon: Zap,
  },
  {
    title: "Conviction",
    description: "Answer what VCs really ask. We turn skepticism into belief by addressing risks upfront.",
    icon: CheckCircle2,
  },
];

// --- Data: The Rotating Slides (Right Side) ---
const deckSlides = [
  {
    id: 1,
    number: "01",
    tag: "Critical Pain",
    tagColor: "bg-red-50 text-red-600",
    title: "The Problem",
    content: "Founders spend 40% of their time on fundraising admin, not building.",
    validation: "Market Gap: Verified",
    validationColor: "bg-red-500",
  },
  {
    id: 2,
    number: "02",
    tag: "High Value",
    tagColor: "bg-blue-50 text-blue-600",
    title: "The Solution",
    content: "An AI-powered engine that automates narrative structure and financial modeling.",
    validation: "Tech Stack: Scalable",
    validationColor: "bg-blue-500",
  },
  {
    id: 3,
    number: "03",
    tag: "Validation",
    tagColor: "bg-green-50 text-green-600",
    title: "Traction",
    content: "500+ Founders onboarded in beta with a 40% conversion rate to paid.",
    validation: "Growth: 20% MoM",
    validationColor: "bg-green-500",
  },
  {
    id: 4,
    number: "04",
    tag: "Opportunity",
    tagColor: "bg-purple-50 text-purple-600",
    title: "The Ask",
    content: "Raising $2M Seed to scale the engineering team and accelerate GTM.",
    validation: "Runway: 18 Months",
    validationColor: "bg-purple-500",
  },
];

export default function SlideFlow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-Play Logic
  useEffect(() => {
    if (isHovered) return; // Stop timer if hovering

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % deckSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isHovered]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % deckSlides.length);
  };

  const activeSlideData = deckSlides[currentSlide];

  return (
    <section className="py-32 bg-white relative overflow-hidden" id="features">
      
      {/* Ambience: Subtle Blue Glow Top-Right */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[100px] opacity-60 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* --- LEFT: Text Content --- */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                <Layers size={12} />
                Smart Narrative
              </div>

              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
                Slide Flow That <span className="text-primary">Converts</span>
              </h2>
              
              <p className="text-lg text-gray-500 leading-relaxed mb-10">
                Most decks fail because they don't follow the narrative investors expect. 
                <br className="hidden md:block" />
                <span className="text-gray-900 font-medium">ZTH answers what VCs really ask.</span> Each slide follows a tested, investor-aligned flow that delivers clarity and conviction.
              </p>

              {/* Benefit List */}
              <div className="space-y-8">
                {benefits.map((benefit, index) => (
                  <motion.div 
                    key={benefit.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15, duration: 0.5 }}
                    className="flex gap-4 group"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-xl bg-gray-50 text-gray-400 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                        <benefit.icon size={20} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* --- RIGHT: Visual "Deck" Animation --- */}
          <div className="relative h-[500px] md:h-[600px] flex items-center justify-center">
            
            {/* Hover Area Wrapper for Pause Logic */}
            <div 
              className="relative w-full max-w-md aspect-[3/4] cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              
              {/* Card 3 (Back Decoration) */}
              <motion.div 
                animate={{ rotate: 12, y: 0, scale: 0.9 }}
                className="absolute inset-0 bg-gray-50 rounded-[2rem] border border-gray-100 shadow-lg"
              />

              {/* Card 2 (Middle Decoration) */}
              <motion.div 
                animate={{ rotate: -6, y: 0, scale: 0.95 }}
                className="absolute inset-0 bg-gray-100 rounded-[2rem] border border-gray-200 shadow-xl"
              />

              {/* Card 1 (Front - Active Slide) */}
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeSlideData.id}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 1.05 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="absolute inset-0 bg-white rounded-[2rem] border border-gray-100 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)] p-8 flex flex-col justify-between overflow-hidden z-10"
                >
                  {/* Slide Content */}
                  <div>
                     {/* Header */}
                     <div className="flex items-center justify-between mb-8">
                        <div className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center font-bold text-xs">
                          {activeSlideData.number}
                        </div>
                        <div className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${activeSlideData.tagColor}`}>
                          {activeSlideData.tag}
                        </div>
                     </div>
                     
                     {/* Title & Body */}
                     <h3 className="text-2xl font-bold text-gray-900 mb-4">{activeSlideData.title}</h3>
                     <p className="text-gray-500 text-sm leading-relaxed mb-6">
                       {activeSlideData.content}
                     </p>
                     
                     {/* Validation Box */}
                     <div className="mt-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                        <div className="flex gap-3 items-center mb-2">
                           <div className={`w-2 h-2 rounded-full animate-pulse ${activeSlideData.validationColor}`} />
                           <span className="text-xs font-semibold text-gray-700">{activeSlideData.validation}</span>
                        </div>
                        <div className="h-1.5 bg-gray-200 rounded-full w-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 1.5 }}
                            className={`h-full ${activeSlideData.validationColor}`}
                          />
                        </div>
                     </div>
                  </div>

                  {/* Manual Navigation Control */}
                  <button 
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent bubbling if needed
                      nextSlide();
                    }}
                    className="flex items-center gap-2 text-primary font-semibold text-sm hover:text-primary-hover transition-colors group"
                  >
                     Next Slide 
                     <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>

                  {/* Decorative Gradient */}
                  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
                </motion.div>
              </AnimatePresence>

              {/* Floating Badge (Flow Score) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: 20 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3 z-20"
              >
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                   <Zap size={20} fill="currentColor" />
                </div>
                <div>
                   <div className="text-sm font-bold text-gray-900">Flow Score</div>
                   <div className="text-xs text-gray-500">98/100 Optimized</div>
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}