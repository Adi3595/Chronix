"use client";

import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function CinematicBackground() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-background">
      {/* Deep volumetric glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/40 via-background/90 to-background opacity-100" />
      
      {/* Animated SVG Glowing Paths */}
      <motion.svg 
        style={{ y }}
        className="absolute w-[150vw] h-[150vh] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-70 mix-blend-multiply dark:mix-blend-screen"
        viewBox="0 0 1000 1000"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="var(--color-primary)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>

        {/* Path 1 */}
        <motion.path
          d="M -100,500 C 200,200 400,800 1100,500"
          fill="none"
          stroke="url(#lineGrad)"
          strokeWidth="2"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
        />
        {/* Path 2 */}
        <motion.path
          d="M 1100,300 C 600,100 300,900 -100,600"
          fill="none"
          stroke="url(#lineGrad)"
          strokeWidth="1.5"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 5, ease: "easeInOut", repeat: Infinity, repeatType: "mirror", delay: 1 }}
        />
        {/* Path 3 */}
        <motion.path
          d="M 200,-100 C 300,400 800,600 500,1100"
          fill="none"
          stroke="url(#lineGrad)"
          strokeWidth="3"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 6, ease: "easeInOut", repeat: Infinity, repeatType: "mirror", delay: 2 }}
        />
      </motion.svg>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/50"
            style={{
              width: Math.random() * 4 + 2 + "px",
              height: Math.random() * 4 + 2 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              boxShadow: "0 0 15px 3px var(--color-primary)",
            }}
            animate={{
              y: [0, -150, 0],
              opacity: [0, 1, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      {/* Fog Overlay */}
      <div className="absolute inset-0 bg-background/20 backdrop-blur-[1px]" />
    </div>
  );
}
