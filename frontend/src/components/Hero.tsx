"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
      );
    }
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 lg:px-24">
      {/* Background soft gradients */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#e5e7e0] via-[#F4F5EF] to-[#F4F5EF]"></div>

      <div ref={containerRef} className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Text Content */}
        <div className="flex flex-col space-y-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl lg:text-8xl font-serif text-foreground leading-[1.1] tracking-tight"
          >
            Execution<br />
            Without<br />
            <span className="text-primary italic">Chaos.</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg lg:text-xl text-muted-foreground max-w-md font-sans leading-relaxed"
          >
            <p className="mb-4">
              Chronix transforms goals, deadlines, and responsibilities into clear execution paths.
            </p>
            <p className="font-medium text-foreground">
              Predict risks. Maintain momentum. Finish what matters.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-[#1b5e20] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300">
              Start Planning
            </button>
            <button className="px-8 py-4 bg-white text-foreground border border-gray-200 rounded-full font-medium hover:bg-gray-50 transition-colors shadow-sm hover:shadow-md transform hover:-translate-y-1 duration-300">
              Watch Demo
            </button>
          </motion.div>
        </div>

        {/* Right: Dashboard Visual Snippets */}
        <div className="relative w-full h-[500px] flex items-center justify-center">
          {/* Card 1: Momentum Score */}
          <motion.div 
            initial={{ opacity: 0, x: 50, rotate: 5 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="absolute top-10 right-10 bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 w-64 z-20 backdrop-blur-sm bg-white/90"
          >
            <p className="text-sm text-muted-foreground mb-1 uppercase tracking-wider font-semibold">Momentum Score</p>
            <h2 className="text-5xl font-serif text-foreground mb-2">87</h2>
            <p className="text-sm text-primary font-medium flex items-center">
              <span className="mr-1">↑</span> +12 This Week
            </p>
          </motion.div>

          {/* Card 2: Future Self Simulator */}
          <motion.div 
            initial={{ opacity: 0, y: 50, rotate: -2 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="absolute bottom-10 left-0 bg-white p-6 rounded-3xl shadow-xl border border-gray-100 w-72 z-10"
          >
            <p className="text-sm text-muted-foreground mb-4 uppercase tracking-wider font-semibold">Future Self Simulator</p>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-muted-foreground mb-1">Current Trajectory</p>
                <div className="flex items-end gap-2">
                  <span className="text-2xl font-serif text-foreground">120</span>
                  <span className="text-sm text-muted-foreground pb-1">Days</span>
                </div>
                <div className="w-full bg-gray-100 h-2 rounded-full mt-2 overflow-hidden">
                  <div className="bg-warning h-full w-[80%] rounded-full"></div>
                </div>
              </div>
              <div>
                <p className="text-xs text-primary mb-1">Recommended Path</p>
                <div className="flex items-end gap-2">
                  <span className="text-2xl font-serif text-primary">58</span>
                  <span className="text-sm text-primary pb-1">Days</span>
                </div>
                <div className="w-full bg-secondary h-2 rounded-full mt-2 overflow-hidden">
                  <div className="bg-primary h-full w-[40%] rounded-full"></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Agent Feed */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-md p-6 rounded-3xl shadow-2xl border border-gray-100 w-80 z-30"
          >
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Agent Activity</p>
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-primary font-bold text-xs">At</div>
                <div>
                  <p className="text-sm font-medium text-foreground">Atlas</p>
                  <p className="text-xs text-muted-foreground">Roadmap Created</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">Or</div>
                <div>
                  <p className="text-sm font-medium text-foreground">Orbit</p>
                  <p className="text-xs text-muted-foreground">Schedule Optimized</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
