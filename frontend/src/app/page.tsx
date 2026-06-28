"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ProblemSection, AgentEcosystemSection } from "@/components/LandingSections";

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
    <div ref={containerRef} className="text-foreground antialiased min-h-screen selection:bg-primary selection:text-background relative bg-cover bg-center bg-fixed bg-no-repeat" style={{ backgroundImage: "url('/bg.png')" }}>
      
      <div className="absolute inset-0 bg-background/80 pointer-events-none mix-blend-multiply z-0"></div>
      
      {/* TopNavBar */}
      <nav className="sticky top-0 w-full z-50 bg-background/50 backdrop-blur-xl transition-all duration-300 border-b border-outline">
        <div className="flex justify-between items-center px-6 md:px-[80px] py-6 max-w-[1440px] mx-auto">
          <div className="font-sans text-[18px] font-bold text-foreground tracking-widest uppercase flex items-center gap-3">
            <img src="/icon.svg" className="w-8 h-8 brightness-0 invert" alt="Chronix Logo" />
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

      {/* HERO SECTION - Centered Mockup with 3D Sandwich Effect */}
      <section className="relative pt-32 pb-24 overflow-hidden z-10 min-h-screen flex items-center justify-center">
        
        {/* Middle Layer: Massive Typography */}
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-0"
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, 300]) }}
        >
          <h1 className="font-serif font-black text-[15vw] md:text-[200px] leading-none text-foreground/20 tracking-tighter uppercase whitespace-nowrap">
            CHRONIX
          </h1>
          <p className="font-sans text-[2vw] md:text-[24px] text-primary/60 tracking-[0.5em] uppercase font-bold mt-4">
            Operating System
          </p>
        </motion.div>

        <div className="max-w-[1440px] mx-auto px-6 md:px-[80px] w-full flex flex-col items-center justify-center relative z-10">
          
          {/* Front Layer: Floating Execution Dashboard */}
          <motion.div 
            style={{ y: useTransform(scrollYProgress, [0, 1], [0, -150]) }}
            className="relative w-full perspective-[1000px] flex items-center justify-center"
          >
            
            {/* Central Mockup Container */}
            <motion.div 
              initial={{ opacity: 0, rotateY: 10, rotateX: 5, z: -100 }}
              animate={{ opacity: 1, rotateY: -5, rotateX: 2, z: 0 }}
              transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
              className="relative w-full max-w-[600px] bg-surface/40 backdrop-blur-2xl border border-outline rounded-3xl p-6 shadow-[0_0_80px_rgba(0,0,0,0.5)]"
            >
              
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
          </motion.div>
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

      {/* NEW SECTION: About / Project Description */}
      <section className="py-[120px] relative z-10 bg-surface/30 border-y border-outline backdrop-blur-md" id="about">
        <div className="max-w-[1440px] mx-auto px-6 md:px-[80px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            
            <div>
              <motion.h2 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="font-serif text-[60px] md:text-[80px] leading-[0.9] text-foreground mb-8 tracking-tight"
              >
                <span className="block">Execution</span>
                <span className="block text-muted-foreground">Without</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary pb-4">Chaos</span>
              </motion.h2>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mb-10"
              >
                <p className="font-sans text-[18px] text-muted-foreground mb-6 max-w-xl leading-relaxed">
                  Chronix is the world's first cinematic productivity operating system. We transform goals, deadlines, and responsibilities into intelligent, autonomous execution paths powered by a network of specialized AI agents.
                </p>
                <ul className="space-y-4 font-sans text-[16px] text-foreground tracking-wide border-l-2 border-primary/30 pl-6">
                  <li className="flex items-center gap-3"><span className="w-2 h-2 bg-primary rounded-full"></span> Predict risks before they happen.</li>
                  <li className="flex items-center gap-3"><span className="w-2 h-2 bg-primary rounded-full"></span> Maintain unbreakable momentum.</li>
                  <li className="flex items-center gap-3"><span className="w-2 h-2 bg-primary rounded-full"></span> Finish what truly matters.</li>
                </ul>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap items-center gap-6"
              >
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
                  className="bg-surface border border-outline text-foreground px-8 py-4 rounded-full font-sans text-[14px] font-bold uppercase tracking-widest transition-all flex items-center gap-3"
                >
                  Watch Demo <span className="material-symbols-outlined text-[18px]">play_circle</span>
                </motion.button>
              </motion.div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-3xl blur-3xl"></div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-surface/50 border border-outline rounded-3xl p-10 backdrop-blur-xl relative z-10"
              >
                <h3 className="font-sans font-bold text-[20px] uppercase tracking-widest text-primary mb-6">Who is this for?</h3>
                <p className="text-muted-foreground font-sans text-[15px] leading-relaxed mb-8">
                  Designed exclusively for founders, executive leaders, and high-leverage builders who cannot afford context switching. If you manage multiple workstreams, a network of people, and complex product roadmaps, Chronix handles the meta-work so you can focus on execution.
                </p>
                <div className="flex items-center gap-4 border-t border-outline pt-6">
                  <div className="flex -space-x-3">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-12 h-12 rounded-full border-2 border-surface bg-surface-variant"></div>
                    ))}
                  </div>
                  <p className="font-sans text-[13px] text-muted-foreground">
                    Join <strong className="text-foreground">25,000+ builders</strong> <br />who stay ahead with Chronix
                  </p>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* NEW SECTION: Contact / Integration Support */}
      <section className="py-[120px] relative z-10" id="contact">
        <div className="max-w-[1440px] mx-auto px-6 md:px-[80px]">
          <div className="bg-surface-variant/50 border border-outline rounded-3xl p-12 md:p-24 text-center relative overflow-hidden backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(46,125,50,0.15)_0%,transparent_70%)]"></div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10 max-w-2xl mx-auto"
            >
              <span className="material-symbols-outlined text-[48px] text-primary mb-6">rocket_launch</span>
              <h2 className="font-serif text-[40px] md:text-[56px] leading-[1.1] text-foreground mb-6 tracking-tight">
                Ready to Upgrade Your Execution?
              </h2>
              <p className="font-sans text-[18px] text-muted-foreground mb-10 leading-relaxed">
                Connect your existing tools. Our AI agents natively integrate with Slack, Google Calendar, and Notion to pull your fragmented workflows into one unified OS. Need a custom enterprise integration? Reach out to our engineering team.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/signup">
                  <button className="bg-primary text-background px-10 py-4 rounded-full font-sans text-[14px] font-bold uppercase tracking-widest transition-all hover:scale-105 shadow-[0_0_30px_rgba(46,125,50,0.4)] w-full sm:w-auto">
                    Start For Free
                  </button>
                </Link>
                <a href="mailto:contact@chronix.os">
                  <button className="bg-background border border-outline text-foreground px-10 py-4 rounded-full font-sans text-[14px] font-bold uppercase tracking-widest transition-all hover:bg-surface w-full sm:w-auto">
                    Contact Enterprise
                  </button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
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
      
      <ProblemSection />
      
      <AgentEcosystemSection />
      
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
