"use client";

import React from "react";
import { motion } from "framer-motion";
import { Network, ShieldCheck, Handshake, ArrowRight } from "lucide-react";

const benefits = [
  {
    title: "Warm intros, not spam lists",
    description: "Skip the cold emails. We introduce you to partners who are actively looking for deals in your sector.",
    icon: Network,
  },
  {
    title: "Only post-review of pitch deck",
    description: "We ensure you are ready before we send. This protects your reputation and keeps our investor signal high.",
    icon: ShieldCheck,
  },
  {
    title: "Strong founder fit > volume",
    description: "We don't blast your deck. We match you with investors where there is genuine thesis alignment.",
    icon: Handshake,
  },
];

export default function Funding() {
  return (
    <section className="py-32 bg-gray-50 relative overflow-hidden" id="funding">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-emerald-100/50 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-widest mb-6 border border-emerald-200">
              <Network size={12} />
              Strategic Network
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Zth × 14U Capital
            </h2>
            
            <p className="text-xl text-gray-500 mb-8 leading-relaxed">
              Qualified founders introduced to curated investors based on stage and sector. <br/>
              <span className="font-semibold text-emerald-600">Discreet, credible partnership.</span>
            </p>

            <div className="space-y-6 mb-10">
              {benefits.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                      <item.icon size={16} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">{item.title}</h4>
                    <p className="text-gray-500 text-sm mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="group inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
              <span>Explore Funding Pathways</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Right: Visual Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/5] md:aspect-square bg-gradient-to-br from-gray-900 to-gray-800 rounded-[2.5rem] p-8 md:p-12 flex flex-col justify-between shadow-2xl overflow-hidden border border-gray-700">
               {/* Abstract Grid Map */}
               <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
               
               {/* Connecting Lines Animation */}
               <div className="absolute inset-0">
                  <svg className="w-full h-full opacity-30">
                    <motion.path 
                      d="M 50 300 Q 200 100 350 300" 
                      fill="none" 
                      stroke="url(#gradient)" 
                      strokeWidth="2"
                      strokeDasharray="10 10"
                      animate={{ strokeDashoffset: [0, 100] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
                        <stop offset="50%" stopColor="#10b981" stopOpacity="1" />
                        <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
               </div>

               <div className="relative z-10">
                 <div className="bg-white/10 backdrop-blur-md border border-white/10 p-4 rounded-2xl inline-block mb-4">
                    <ShieldCheck className="text-emerald-400 w-8 h-8" />
                 </div>
                 <div className="text-3xl font-bold text-white mb-2">14U Capital</div>
                 <div className="text-emerald-400 font-mono text-xs uppercase tracking-widest">Network Active</div>
               </div>

               <div className="relative z-10 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-400 text-xs font-bold uppercase">Recent Match</span>
                    <span className="text-emerald-400 text-xs font-bold bg-emerald-400/10 px-2 py-1 rounded">Series A</span>
                  </div>
                  <div className="flex items-center gap-3">
                     <div className="w-10 h-10 rounded-full bg-gray-700" />
                     <div className="w-full h-px bg-gray-600/50 relative">
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-emerald-500 rounded-full" />
                     </div>
                     <div className="w-10 h-10 rounded-full bg-emerald-900 border border-emerald-500" />
                  </div>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export { default as Hero } from './Hero';
export { default as Stats } from './Stats';
export { default as FoundersCorner } from './FoundersCorner';
export { default as SlideFlow } from './SlideFlow';
export { default as Consultancy } from './Consultancy';
export { default as InvestorMockroom } from './InvestorMockroom';
export { default as SED } from './SED';
export { default as Funding } from './Funding';