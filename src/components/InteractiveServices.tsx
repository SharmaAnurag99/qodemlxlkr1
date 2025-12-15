"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    id: "marketing",
    title: "Marketing",
    description:
      "We specialize in creating, developing, and managing a brand’s identity to help businesses stand out in the marketplace and connect deeply with the right audience.",
    icon: "✦",
    colorClass: "teal-wave", // now maps to deep cyan
    textColor: "#0F172A", // Dark Slate
    descColor: "#334155", // Slate 700
    btnClass: "btn-outline",
  },
  {
    id: "design",
    title: "Design",
    description:
      "Crafting intuitive, beautiful interfaces that guide users effortlessly. From design systems to pixel-perfect mockups, we ensure every interaction feels premium.",
    icon: "✎",
    colorClass: "peach-wave", // now maps to indigo
    textColor: "#312E81", // Deep Indigo
    descColor: "#4338CA", // Indigo 700
    btnClass: "btn-peach", // now Primary Gradient
  },
  {
    id: "support",
    title: "Support",
    description:
      "Ongoing maintenance and optimization to keep your digital ecosystem healthy. We provide 24/7 monitoring and proactive improvements.",
    icon: "🛠",
    colorClass: "cream-wave", // now maps to subtle slate
    textColor: "#1E293B", // Slate 800
    descColor: "#475569", // Slate 600
    btnClass: "btn-outline",
  },
];

import FadeIn from "@/components/ui/FadeIn";

export default function InteractiveServices() {
  const [activeId, setActiveId] = useState("marketing");

  return (
    <section className="service-vertical-section">
      <FadeIn className="container" direction="up" duration={0.6}>
        <div className="flex flex-col lg:flex-row gap-6 h-[600px] lg:h-[450px]">
          {services.map((service) => {
            const isActive = activeId === service.id;

            return (
              <motion.div
                key={service.id}
                layout
                onClick={() => setActiveId(service.id)}
                className={`relative rounded-[36px] overflow-hidden cursor-pointer shadow-lg backdrop-blur-md bg-white/80 border border-white/40
                    ${isActive ? "flex-[3]" : "flex-1 hover:flex-[1.2]"} 
                    transition-all duration-500 ease-out`}
                style={{
                  display: "flex",
                  alignItems: isActive ? "flex-end" : "center",
                  justifyContent: isActive ? "flex-start" : "center",
                  padding: isActive ? "40px" : "20px",
                }}
              >
                {/* Background Pattern */}
                <motion.div
                  className={`absolute inset-0 z-[-1] ${service.colorClass}`}
                  layoutId={`bg-${service.id}`}
                  initial={{ opacity: 0.8 }}
                  animate={{ opacity: isActive ? 1 : 0.6 }}
                  transition={{ duration: 0.4 }}
                />

                {/* Active Content */}
                <AnimatePresence mode="popLayout">
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      className="w-full"
                    >
                      <div
                        className="text-3xl lg:text-4xl font-bold mb-4"
                        style={{ color: service.textColor }}
                      >
                        <span className="block mb-2 text-3xl">
                          {service.icon}
                        </span>
                        {service.title}
                      </div>
                      <p
                        className="text-base lg:text-lg mb-6 max-w-lg"
                        style={{ color: service.descColor }}
                      >
                        {service.description}
                      </p>
                      <button className={`btn ${service.btnClass}`}>
                        Discover More
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Inactive Vertical Label */}
                {!isActive && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute"
                  >
                    <span
                      className="block font-bold text-2xl tracking-wide whitespace-nowrap"
                      style={{
                        writingMode: "vertical-rl",
                        transform: "rotate(180deg)",
                        color: service.textColor,
                      }}
                    >
                      {service.title}
                    </span>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </FadeIn>
    </section>
  );
}
