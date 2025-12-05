"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";
import { CheckCircle2, ArrowRight, Layers, Zap, Target, Sparkles } from "lucide-react";

// --- Data: The Core Benefits ---
const benefits = [
  {
    title: "Problem First",
    description: "If they don't feel the pain, they won't care about the product. We start with the problem.",
    icon: Target,
  },
  {
    title: "Urgency (Why Now?)",
    description: "Create inevitability. Show why market shifts make your solution necessary today.",
    icon: Zap,
  },
  {
    title: "Logical Solution",
    description: "Your product shouldn't be a pitch; it should be the only logical answer to the narrative.",
    icon: CheckCircle2,
  },
];

// --- Data: The Full Investor Deck Flow ---
const deckSlides = [
  {
    id: 1,
    number: "01",
    tag: "The Hook",
    tagColor: "bg-red-50 text-red-600 border-red-100",
    title: "Convey the Problem",
    content: "Start with a relatable, painful problem that makes investors nod. Establish the gap in the market immediately.",
    validation: "Investor Reaction: 'I feel this'",
    validationColor: "bg-red-500",
  },
  {
    id: 2,
    number: "02",
    tag: "The Catalyst",
    tagColor: "bg-amber-50 text-amber-600 border-amber-100",
    title: "Explain Why Now?",
    content: "Show why this is urgent. Market shifts, new tech, or consumer behavior changes that make this the perfect moment.",
    validation: "Timing: Verified",
    validationColor: "bg-amber-500",
  },
  {
    id: 3,
    number: "03",
    tag: "The Answer",
    tagColor: "bg-blue-50 text-blue-600 border-blue-100",
    title: "Present the Solution",
    content: "Reveal your product as the only logical conclusion to the problem and timing you've just established.",
    validation: "Fit: Product-Market",
    validationColor: "bg-blue-500",
  },
  {
    id: 4,
    number: "04",
    tag: "The Scale",
    tagColor: "bg-purple-50 text-purple-600 border-purple-100",
    title: "Market Opportunity",
    content: "Quantify the demand. Show the TAM, SAM, and SOM to prove this isn't just a niche hobby.",
    validation: "Market: $10B+ TAM",
    validationColor: "bg-purple-500",
  },
  {
    id: 5,
    number: "05",
    tag: "The Proof",
    tagColor: "bg-emerald-50 text-emerald-600 border-emerald-100",
    title: "Traction & Metrics",
    content: "Data wins. Show revenue growth, user retention, or partnerships that prove execution capability.",
    validation: "Growth: 20% MoM",
    validationColor: "bg-emerald-500",
  },
  {
    id: 6,
    number: "06",
    tag: "The Close",
    tagColor: "bg-gray-100 text-gray-700 border-gray-200",
    title: "The Ask",
    content: "Be clear. How much are you raising, and exactly what milestones will that capital achieve?",
    validation: "Runway: 18 Months",
    validationColor: "bg-gray-900",
  },
];

export default function SlideFlow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false); 

  // --- 3D Tilt Logic ---
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 50, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 50, damping: 20 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXVal = e.clientX - rect.left;
    const mouseYVal = e.clientY - rect.top;
    const xPct = mouseXVal / width - 0.5;
    const yPct = mouseYVal / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % deckSlides.length);
  }, [isAnimating]);

  // Auto-Play
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(nextSlide, 6000); // Slightly slower for better readability
    return () => clearInterval(timer);
  }, [isHovered, nextSlide]);

  const activeSlideData = deckSlides[currentSlide];

  return (
    <section className="py-32 bg-white relative overflow-hidden" id="features">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50/40 rounded-full blur-[120px] opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gray-50/60 rounded-full blur-[100px] opacity-40 pointer-events-none" />

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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-primary text-xs font-bold uppercase tracking-widest mb-6 border border-blue-100">
                <Layers size={12} />
                Strategic Flow
              </div>

              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
                Narrative Flow That <br/>
                <span className="text-primary">Closes Deals</span>
              </h2>
              
              <p className="text-lg text-gray-500 leading-relaxed mb-10">
                Founders often pitch features. Investors buy narratives. 
                <br className="hidden md:block" />
                <span className="text-gray-900 font-medium">ZTH structures your deck</span> to build momentum slide-by-slide, turning skepticism into conviction.
              </p>

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
                      <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 text-gray-400 flex items-center justify-center group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300 shadow-sm">
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

          {/* --- RIGHT: 3D Interactive Deck Animation --- */}
          <div className="relative h-[600px] flex items-center justify-center perspective-1200">
            
            <motion.div 
              className="relative w-full max-w-md aspect-[3/4]"
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX: isHovered ? rotateX : 0,
                rotateY: isHovered ? rotateY : 0,
                transition: "all 0.1s ease-out"
              }}
            >
              
              {/* --- BACKGROUND STACK (Infinite Depth Effect) --- */}
              {/* 3rd Card (Deepest) */}
              <div className="absolute top-6 inset-x-6 bottom-[-24px] bg-white rounded-[2rem] border border-gray-200 shadow-sm transform scale-[0.85] opacity-40 z-0" />
              
              {/* 2nd Card (Middle) */}
              <div className="absolute top-3 inset-x-3 bottom-[-12px] bg-white rounded-[2rem] border border-gray-200 shadow-md transform scale-[0.92] opacity-70 z-0" />

              {/* --- ACTIVE CARD --- */}
              <AnimatePresence 
                mode="popLayout" 
                onExitComplete={() => setIsAnimating(false)}
              >
                <motion.div 
                  key={activeSlideData.id}
                  // Enter: From right, slightly rotated (like being dealt)
                  initial={{ x: 300, y: 0, opacity: 0, rotate: 15, scale: 0.8 }}
                  // Center: Perfect alignment
                  animate={{ x: 0, y: 0, opacity: 1, rotate: 0, scale: 1 }}
                  // Exit: To left, rotate opposite, fade out
                  exit={{ x: -300, y: 0, opacity: 0, rotate: -15, scale: 0.8, zIndex: 50 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 120,
                    damping: 20,
                    mass: 1.2
                  }}
                  className="absolute inset-0 bg-white rounded-[2rem] border border-gray-200/80 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] p-8 flex flex-col justify-between overflow-hidden z-20 backface-hidden"
                >
                  
                  {/* Subtle Gradient Shine on Card */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-gray-50 opacity-50" />

                  {/* Card Content Layer */}
                  <div className="relative z-10 flex flex-col h-full">
                     
                     {/* Header: Number & Tag */}
                     <div className="flex items-center justify-between mb-8">
                        <div className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold text-sm shadow-lg shadow-gray-900/20">
                          {activeSlideData.number}
                        </div>
                        <div className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${activeSlideData.tagColor}`}>
                          {activeSlideData.tag}
                        </div>
                     </div>
                     
                     {/* Main Content */}
                     <div className="flex-grow">
                       <h3 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight leading-tight">
                         {activeSlideData.title}
                       </h3>
                       <p className="text-gray-500 text-base leading-relaxed">
                         {activeSlideData.content}
                       </p>
                     </div>
                     
                     {/* Bottom: Validation Metric */}
                     <div className="mt-8">
                        <div className="p-4 rounded-2xl bg-gray-50/80 border border-gray-100">
                          <div className="flex gap-3 items-center mb-2">
                             <div className={`w-2 h-2 rounded-full animate-pulse ${activeSlideData.validationColor}`} />
                             <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">Validation</span>
                          </div>
                          <div className="flex items-end justify-between">
                            <span className="text-sm font-semibold text-gray-900">
                              {activeSlideData.validation}
                            </span>
                            <Sparkles size={16} className={`text-${activeSlideData.validationColor.split('-')[1]}-500 opacity-80`} />
                          </div>
                          
                          {/* Animated Progress Bar */}
                          <div className="mt-3 h-1 bg-gray-200 rounded-full w-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: "100%" }}
                              transition={{ delay: 0.2, duration: 1.2, ease: "easeOut" }}
                              className={`h-full ${activeSlideData.validationColor}`}
                            />
                          </div>
                        </div>
                     </div>

                     {/* Action Button */}
                     <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          nextSlide();
                        }}
                        disabled={isAnimating}
                        className="mt-6 w-full flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed group"
                      >
                         Next Slide 
                         <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                  </div>

                </motion.div>
              </AnimatePresence>

              {/* Floating "Flow Score" Widget */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: 20 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-8 -right-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] border border-white/50 flex items-center gap-3 z-30 transform hover:scale-105 transition-transform duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white shadow-lg shadow-primary/25">
                   <Zap size={20} fill="currentColor" />
                </div>
                <div>
                   <div className="text-sm font-bold text-gray-900">Flow Score</div>
                   <div className="text-xs text-gray-500 font-medium">98/100 Optimized</div>
                </div>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}