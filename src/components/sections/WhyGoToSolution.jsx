"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Lightbulb, Rocket } from "lucide-react";

// --- Data Extracted from the Image ---
const steps = [
  {
    icon: Target,
    title: "Convey the problem",
    description:
      "Start with a relatable, painful problem that makes investors nod. If they don’t feel the pain, they won’t care about the solution.",
  },
  {
    icon: Lightbulb,
    title: "Explain why now?",
    description:
      "Show why this problem is urgent and solvable today (e.g., market shifts, new tech). Create a sense of inevitability.",
  },
  {
    icon: Rocket,
    title: "Present your solution",
    description:
      "Reveal your product as the only logical answer to the problem. Focus on benefits and outcomes, not just features.",
  },
];

export default function WhyGoToSolution() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* --- Section Header --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            Why go to solutions?
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Stop convincing investors with your solution slides, instead use this flow.
          </p>
        </motion.div>

        {/* --- The 3-Step Flow (Cards) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="group relative p-8 rounded-[2rem] bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Icon */}
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-[1.2rem] bg-blue-50 text-primary group-hover:scale-110 transition-transform duration-300">
                <step.icon size={32} />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 leading-relaxed text-base">
                {step.description}
              </p>

              {/* Subtle Bottom Gradient for Depth */}
              <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-b-[2rem]" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}