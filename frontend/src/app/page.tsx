"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

export default function LandingPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Staggered reveal for hero text
  const heroTextVariants: import("framer-motion").Variants = {
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
    visible: (custom: number) => ({
      opacity: 1, 
      y: 0,
      filter: "blur(0px)",
      transition: { delay: custom * 0.1, duration: 0.8, ease: "easeOut" }
    })
  };

  return (
    <div ref={containerRef} className="text-foreground antialiased min-h-screen selection:bg-primary selection:text-background relative">
      
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-background/50 backdrop-blur-xl transition-all duration-300 border-b border-outline">
        <div className="flex justify-between items-center px-6 md:px-[80px] py-6 max-w-[1440px] mx-auto">
          <div className="font-sans text-[18px] font-bold text-foreground tracking-widest uppercase flex items-center gap-3">
            <span className="w-6 h-6 bg-primary rounded-full"></span>
            CHRONIX
          </div>
          <div className="hidden md:flex gap-12 items-center">
            <Link href="#product" className="text-muted-foreground hover:text-primary transition-colors duration-200 font-sans text-[13px] uppercase tracking-widest">Product</Link>
            <Link href="#features" className="text-muted-foreground hover:text-primary transition-colors duration-200 font-sans text-[13px] uppercase tracking-widest">Features</Link>
            <Link href="#agents" className="text-muted-foreground hover:text-primary transition-colors duration-200 font-sans text-[13px] uppercase tracking-widest">Agents</Link>
            <Link href="#pricing" className="text-muted-foreground hover:text-primary transition-colors duration-200 font-sans text-[13px] uppercase tracking-widest">Pricing</Link>
          </div>
          <div className="flex items-center gap-8">
            <Link href="/login" className="hidden md:block font-sans text-[13px] text-muted-foreground hover:text-foreground uppercase tracking-widest transition-colors">Log In</Link>
            <Link href="/signup">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary/20 text-primary hover:bg-primary hover:text-background px-6 py-2.5 rounded-full font-sans text-[13px] font-bold uppercase tracking-widest transition-colors cursor-pointer border border-primary/30"
              >
                Start Planning
              </motion.div>
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden z-10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-[80px] w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          {/* Left Side: Editorial Typography */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <motion.h1 className="font-serif text-[72px] md:text-[100px] leading-[0.9] text-foreground mb-8 tracking-tight">
              <motion.span custom={0} variants={heroTextVariants} initial="hidden" animate="visible" className="block">Execution</motion.span>
              <motion.span custom={1} variants={heroTextVariants} initial="hidden" animate="visible" className="block text-muted-foreground">Without</motion.span>
              <motion.span custom={2} variants={heroTextVariants} initial="hidden" animate="visible" className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary pb-4">Chaos</motion.span>
            </motion.h1>
            
            <motion.div custom={3} variants={heroTextVariants} initial="hidden" animate="visible" className="mb-10">
              <p className="font-sans text-[16px] text-muted-foreground mb-6 max-w-md leading-relaxed">
                Chronix transforms goals, deadlines, and responsibilities into intelligent execution paths.
              </p>
              <ul className="space-y-2 font-sans text-[14px] text-foreground tracking-wide border-l-2 border-primary/30 pl-4">
                <li>Predict risks.</li>
                <li>Maintain momentum.</li>
                <li>Finish what matters.</li>
              </ul>
            </motion.div>
            
            <motion.div custom={4} variants={heroTextVariants} initial="hidden" animate="visible" className="flex flex-wrap items-center gap-6 mb-12">
              <Link href="/signup">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary text-background px-8 py-4 rounded-full font-sans text-[14px] font-bold uppercase tracking-widest transition-all cursor-pointer shadow-[0_0_30px_rgba(46,125,50,0.4)]"
                >
                  Start Planning &rarr;
                </motion.div>
              </Link>
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
                className="bg-surface-variant border border-outline text-foreground px-8 py-4 rounded-full font-sans text-[14px] font-bold uppercase tracking-widest transition-all flex items-center gap-3"
              >
                Watch Demo <span className="material-symbols-outlined text-[18px]">play_circle</span>
              </motion.button>
            </motion.div>
            
            <motion.div custom={5} variants={heroTextVariants} initial="hidden" animate="visible" className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1,2,3].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-surface-variant"></div>
                ))}
              </div>
              <p className="font-sans text-[12px] text-muted-foreground">
                Join 25,000+ builders <br />who stay ahead with Chronix
              </p>
            </motion.div>
          </div>

          {/* Right Side: Floating Execution Dashboard */}
          <div className="lg:col-span-7 relative h-[800px] w-full perspective-[1000px] flex items-center justify-center">
            
            {/* Central Mockup Container */}
            <motion.div 
              initial={{ opacity: 0, rotateY: 10, rotateX: 5, z: -100 }}
              animate={{ opacity: 1, rotateY: -5, rotateX: 2, z: 0 }}
              transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
              className="relative w-full max-w-[600px] bg-surface/40 backdrop-blur-2xl border border-outline rounded-3xl p-6 shadow-[0_0_80px_rgba(0,0,0,0.5)]"
            >
              
              {/* Momentum Widget */}
              <motion.div 
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-surface-variant/80 border border-outline rounded-2xl p-6 mb-4 flex justify-between items-center group transition-all"
              >
                <div>
                  <p className="text-muted-foreground font-sans text-[13px] mb-1">Momentum Score</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-[48px] font-serif text-foreground leading-none">87</span>
                    <span className="text-muted-foreground text-[14px]">/100</span>
                  </div>
                  <p className="text-primary font-sans text-[12px] mt-2 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">arrow_upward</span> 12% this week
                  </p>
                </div>
                {/* Simulated Chart */}
                <div className="relative w-24 h-24 rounded-full border-4 border-surface flex items-center justify-center">
                  <svg className="absolute inset-0 w-full h-full -rotate-90">
                    <circle cx="44" cy="44" r="44" fill="none" stroke="var(--color-surface)" strokeWidth="8" />
                    <circle cx="44" cy="44" r="44" fill="none" stroke="var(--color-primary)" strokeWidth="8" strokeDasharray="276" strokeDashoffset="35" strokeLinecap="round" className="opacity-80" />
                  </svg>
                  <span className="material-symbols-outlined text-primary text-[24px]">trending_up</span>
                </div>
              </motion.div>

              {/* Future Self Simulator */}
              <motion.div 
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-surface-variant/80 border border-outline rounded-2xl p-6 mb-4 transition-all"
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-foreground font-sans text-[14px]">Future Self Simulator</h3>
                  <span className="text-muted-foreground font-sans text-[12px]">Goal: Launch Startup</span>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-[12px] font-sans mb-2">
                      <span className="text-muted-foreground">Current Path</span>
                      <span className="text-foreground">180 Days</span>
                    </div>
                    <div className="w-full h-2 bg-surface rounded-full overflow-hidden flex gap-1">
                      {[...Array(15)].map((_, i) => <div key={i} className="h-full flex-1 bg-muted-foreground/30 rounded-full"></div>)}
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-[12px] font-sans mb-2">
                      <span className="text-primary font-bold">Recommended Path</span>
                      <span className="text-primary font-bold">90 Days</span>
                    </div>
                    <div className="w-2/3 h-2 bg-surface rounded-full overflow-hidden flex gap-1">
                      {[...Array(8)].map((_, i) => <div key={i} className="h-full flex-1 bg-primary rounded-full shadow-[0_0_10px_rgba(46,125,50,1)]"></div>)}
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 text-right">
                  <p className="text-[10px] text-muted-foreground uppercase tracking-widest">Potential time saved</p>
                  <p className="text-[20px] font-serif text-primary">90 Days</p>
                </div>
              </motion.div>

              {/* Sentinel Alert & Agent Grid */}
              <div className="grid grid-cols-2 gap-4">
                {/* Sentinel */}
                <motion.div 
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-surface-variant/80 border border-outline rounded-2xl p-5 relative overflow-hidden transition-all group"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
                    <span className="material-symbols-outlined text-error text-[24px]">warning</span>
                  </div>
                  <h4 className="text-foreground font-sans text-[13px] mb-4">Sentinel Alert</h4>
                  <p className="text-muted-foreground text-[11px] mb-1">Deadline Risk</p>
                  <p className="text-[32px] font-serif text-error leading-none mb-4">82%</p>
                  <p className="text-[11px] text-muted-foreground mb-1">Recommendation</p>
                  <p className="text-[12px] text-error font-medium">Activate Rescue Mode</p>
                </motion.div>

                {/* Agent Status */}
                <div className="grid grid-cols-2 grid-rows-2 gap-2">
                  {[
                    { n: 'Atlas', desc: 'Roadmap Generated', icon: 'map' },
                    { n: 'Orbit', desc: 'Schedule Optimized', icon: 'schedule' },
                    { n: 'Sentinel', desc: 'Risks Detected', icon: 'shield' },
                    { n: 'Rescue', desc: 'Plan Ready', icon: 'health_and_safety' }
                  ].map((agent, i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className="bg-surface-variant/80 border border-outline rounded-xl p-3 flex flex-col justify-between"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-[12px] font-sans text-foreground">{agent.n}</span>
                        <span className="material-symbols-outlined text-primary text-[12px]">{agent.icon}</span>
                      </div>
                      <span className="text-[10px] text-muted-foreground leading-tight">{agent.desc}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
            
          </div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
        >
          <span className="text-[11px] font-sans text-muted-foreground uppercase tracking-widest">Scroll to explore</span>
          <div className="w-5 h-8 border border-outline rounded-full flex justify-center pt-2">
            <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* Cinematic Storytelling Scroll */}
      <section className="py-[120px] relative z-10">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
          >
            <h2 className="font-serif text-[48px] md:text-[64px] text-foreground mb-6">Execution is a Timeline.</h2>
            <p className="font-sans text-[18px] text-muted-foreground leading-relaxed">
              Chronix isn't a task list. It's a cinematic operating system that projects your future, analyzes your present, and continuously optimizes your trajectory toward success.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* FINAL CTA SECTION */}
      <section className="py-[120px] bg-surface-variant relative overflow-hidden border-t border-outline">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(46,125,50,0.1)_0%,transparent_50%)] pointer-events-none"></div>
        <div className="max-w-[800px] mx-auto px-6 text-center relative z-10">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-serif text-[48px] md:text-[64px] text-foreground tracking-tight mb-6">Ready to execute?</motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-muted-foreground font-sans text-[16px] md:text-[18px] mb-10 leading-relaxed">Stop managing tasks. Start achieving goals with the power of 6 distinct AI agents working behind the scenes.</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <Link href="/signup">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-primary text-background px-10 py-5 rounded-full font-bold font-sans text-[14px] uppercase tracking-widest transition-all inline-block shadow-[0_0_40px_rgba(46,125,50,0.4)]"
              >
                Enter the System
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface w-full pt-20 pb-8 border-t border-outline relative overflow-hidden z-10">
        <div className="w-full flex justify-start mb-16 px-6 md:px-[80px]">
          <h2 className="font-sans font-black text-[12vw] leading-none text-foreground/5 tracking-tighter uppercase select-none pointer-events-none">
            CHRONIX
          </h2>
        </div>

        <div className="max-w-[1440px] mx-auto px-6 md:px-[80px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 mb-24 max-w-4xl">
            {/* Columns */}
            <div>
              <h4 className="font-bold text-[13px] text-primary mb-6 uppercase tracking-widest">Resources</h4>
              <ul className="flex flex-col gap-4 text-[13px] font-sans text-muted-foreground uppercase tracking-wider">
                <li><Link href="/docs" className="hover:text-foreground transition-colors">Documentation</Link></li>
                <li><Link href="/api" className="hover:text-foreground transition-colors">API Resources</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[13px] text-primary mb-6 uppercase tracking-widest">Company</h4>
              <ul className="flex flex-col gap-4 text-[13px] font-sans text-muted-foreground uppercase tracking-wider">
                <li><Link href="/about" className="hover:text-foreground transition-colors">About Us</Link></li>
                <li><Link href="/careers" className="hover:text-foreground transition-colors">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[13px] text-primary mb-6 uppercase tracking-widest">Legal</h4>
              <ul className="flex flex-col gap-4 text-[13px] font-sans text-muted-foreground uppercase tracking-wider">
                <li><Link href="/terms" className="hover:text-foreground transition-colors">Terms & Conditions</Link></li>
                <li><Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-outline flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-[12px] font-sans text-muted-foreground uppercase tracking-widest">
              © 2026 CHRONIX SYSTEMS. ALL RIGHTS RESERVED.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
