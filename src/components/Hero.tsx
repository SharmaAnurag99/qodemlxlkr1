"use client";

import { motion, Variants } from "framer-motion";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="hero">
      <motion.div
        className="container hero-inner"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* HERO LEFT */}
        <motion.div variants={itemVariants}>
          <motion.span className="eyebrow" variants={itemVariants}>
            AI-Native Engineering
          </motion.span>

          <motion.h1 variants={itemVariants}>
            Next-Gen Systems that <br />
            <span className="highlight-italic">Scale, Adapt & Perform.</span>
          </motion.h1>

          <motion.p className="hero-subtitle" variants={itemVariants}>
            QodeML Labs architects intelligent digital ecosystems. We combine
            deep tech, AI automation, and human-centric design to build products
            that dominate.
          </motion.p>

          <motion.div className="hero-ctas" variants={itemVariants}>
            <button className="btn btn-peach">Deploy Your Vision</button>
            <button className="btn btn-outline">View Case Studies</button>
          </motion.div>

          <motion.div className="hero-meta" variants={itemVariants}>
            <span>
              <div className="hero-meta-dot"></div> Enterprise Grade
            </span>
            <span>
              <div className="hero-meta-dot"></div> Global Reach
            </span>
            <span>
              <div className="hero-meta-dot"></div> AI-Powered Core
            </span>
          </motion.div>
        </motion.div>

        {/* HERO RIGHT */}
        <motion.div className="hero-visual" variants={itemVariants}>
          <motion.div
            className="hero-card"
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="hero-card-tag">Real-Time Insight</div>
            <h4 style={{ fontSize: "20px", fontWeight: 700 }}>
              System Performance
            </h4>

            <div className="hero-card-metric">
              99.9%{" "}
              <span
                style={{
                  fontSize: "16px",
                  alignSelf: "center",
                  color: "var(--text-body)",
                }}
              >
                Uptime
              </span>
            </div>
            <p style={{ fontSize: "15px", color: "var(--text-body)" }}>
              Optimized infrastructure handling 10k+ concurrent requests with
              sub-second latency.
            </p>

            <div
              style={{
                marginTop: "auto",
                width: "100%",
                height: "4px",
                background: "#f1f5f9",
                borderRadius: "2px",
                overflow: "hidden",
              }}
            >
              <motion.div
                style={{
                  width: "100%",
                  height: "100%",
                  background: "var(--cosmos-cyan)",
                }}
                animate={{ x: ["-100%", "0%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
