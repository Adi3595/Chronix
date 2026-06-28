"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Script from "next/script";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useState } from "react";


export default function LandingPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  // FAQ State
  const [openFaq, setOpenFaq] = useState<number | null>(0);



  useEffect(() => {
    // Canvas animation removed for clean brutalist aesthetic
  }, []);

  return (
    <div className="text-on-surface antialiased selection:bg-[#A9C632] selection:text-[#1D2E1B] bg-background min-h-screen overflow-x-hidden">

      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md transition-all duration-200 border-b border-outline-variant">
        <div className="flex justify-between items-center px-4 md:px-[40px] py-4 max-w-[1440px] mx-auto">
          <div className="font-mono text-[16px] font-bold text-foreground tracking-[0.2em] uppercase flex items-center gap-3">
            <img src="/icon.svg" alt="Chronix Logo" className="w-6 h-6 brightness-0 invert" />
            CHRONIX
          </div>
          <div className="hidden md:flex gap-10 items-center">
            <Link href="#features" className="text-muted-foreground hover:text-primary transition-colors duration-200 font-mono-label text-[12px] font-mono uppercase tracking-widest">Features</Link>
            <Link href="#ecosystem" className="text-muted-foreground hover:text-primary transition-colors duration-200 font-mono-label text-[12px] font-mono uppercase tracking-widest">Ecosystem</Link>
            <Link href="#pricing" className="text-muted-foreground hover:text-primary transition-colors duration-200 font-mono-label text-[12px] font-mono uppercase tracking-widest">Pricing</Link>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/login" className="hidden md:block font-mono-label text-[12px] font-mono text-muted-foreground hover:text-primary uppercase tracking-widest transition-colors">Login</Link>
            <Link href="/signup">
              <motion.div
                whileHover={{ backgroundColor: "var(--color-primary)", color: "var(--color-on-primary)" }}
                className="bg-transparent text-primary px-6 py-2 border border-primary font-mono-label text-[12px] font-bold font-mono uppercase tracking-widest transition-colors cursor-pointer"
              >
                Get Started
              </motion.div>
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="hero-section relative min-h-[100vh] flex items-center pt-24 overflow-hidden bg-background">
        {/* Brutalist Grid Background */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-10" 
             style={{ backgroundImage: 'linear-gradient(var(--color-outline-variant) 1px, transparent 1px), linear-gradient(90deg, var(--color-outline-variant) 1px, transparent 1px)', backgroundSize: '60px 60px', backgroundPosition: 'center center' }}>
        </div>



        <div className="max-w-[1440px] mx-auto px-4 md:px-[40px] w-full grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-20 pointer-events-auto">
          {/* Typography & CTA */}
          <motion.div 
            style={{ y: heroY, opacity }}
            className="lg:col-span-6 flex flex-col justify-center pointer-events-none"
          >
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: "easeOut" }}>
              <div className="font-mono text-primary text-[12px] uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-primary inline-block animate-pulse"></span> Chronix OS 2.0
              </div>
              <h1 className="font-sans text-[64px] md:text-[88px] leading-[0.95] font-black text-foreground mb-6 tracking-tighter uppercase">
                Execution<br />
                <span className="text-primary">Without Chaos.</span>
              </h1>
            </motion.div>
            
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.0, delay: 0.4, ease: "easeOut" }} className="font-mono text-[14px] md:text-[16px] text-muted-foreground mb-10 max-w-lg leading-relaxed">
              Chronix transforms goals, deadlines, and responsibilities into clear, autonomous execution paths. Predict risks. Maintain momentum. Finish what matters.
            </motion.p>
            
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.0, delay: 0.8, ease: "easeOut" }} className="flex flex-wrap items-center gap-4 mb-12 pointer-events-auto">
              <Link href="/signup">
                <motion.div
                  whileHover={{ backgroundColor: "var(--color-primary)", color: "var(--color-on-primary)" }}
                  className="bg-transparent text-primary px-8 py-4 border border-primary font-mono-label text-[14px] font-bold font-mono uppercase tracking-widest transition-colors cursor-pointer"
                >
                  Start Execution
                </motion.div>
              </Link>
              <motion.button 
                whileHover={{ backgroundColor: "rgba(169,198,50,0.1)" }}
                className="bg-transparent border border-outline text-muted-foreground hover:text-primary px-8 py-4 font-mono-label text-[14px] font-bold font-mono uppercase tracking-widest transition-colors flex items-center gap-2"
              >
                Watch Demo
              </motion.button>
            </motion.div>
            
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5, delay: 1.4 }} className="font-mono-label text-[10px] text-muted-foreground uppercase tracking-[0.2em] border-l border-primary/50 pl-4 flex flex-col gap-2">
              <span>Trusted by forward-thinking organizations</span>
              <div className="flex gap-6 opacity-50 grayscale pt-2">
                <div className="font-sans font-bold text-[14px] tracking-widest">ACME CORP</div>
                <div className="font-mono font-bold text-[14px] tracking-widest">VERTEX</div>
                <div className="font-sans font-black text-[14px] tracking-widest">NEXUS</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Abstract Visual Overlay */}
          <div className="lg:col-span-6 relative flex justify-center items-center h-[600px] pointer-events-none">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
              className="relative w-[400px] h-[400px] border border-primary/20 rounded-full flex items-center justify-center shadow-[0_0_80px_rgba(169,198,50,0.1)]"
            >
               {/* Inner spinning squares to look like a hypercube/tech visual */}
               <div className="absolute inset-4 border border-primary/40 animate-[spin_20s_linear_infinite]" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}></div>
               <div className="absolute inset-8 border border-primary/30 animate-[spin_15s_linear_infinite_reverse]"></div>
               <div className="absolute inset-16 border border-primary/50 animate-[spin_10s_linear_infinite]" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}></div>
               
               {/* Core Glow */}
               <motion.div 
                 animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                 className="w-32 h-32 bg-primary/20 rounded-full blur-2xl"
               ></motion.div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* SECTION: Features Deep Dive */}
      <section id="features" className="py-[120px] bg-background relative border-t border-outline-variant/50">
        <div className="max-w-[1440px] mx-auto px-4 md:px-[40px]">
          <motion.div 
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="mb-20 border-l-4 border-primary pl-6"
          >
            <div className="font-mono text-[12px] text-primary tracking-[0.2em] uppercase mb-4">Capabilities</div>
            <h2 className="font-sans text-[40px] md:text-[56px] font-black text-foreground uppercase tracking-tight leading-[1.1]">Focus on strategy.<br/>Let the AI handle execution.</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <div className="font-mono text-[10px] text-primary tracking-widest uppercase mb-6 border border-primary px-3 py-1 inline-block bg-primary/10">Smart Prioritization</div>
              <h3 className="font-sans text-[32px] font-black uppercase text-foreground mb-4">The Execution Matrix</h3>
              <p className="font-mono text-[14px] text-muted-foreground leading-relaxed mb-6">
                Stop looking at endless to-do lists. Chronix automatically prioritizes your tasks into an Eisenhower-style Execution Matrix, ensuring you tackle high-impact items first while gracefully deferring the noise.
              </p>
              <ul className="space-y-4 font-mono text-[12px] tracking-wider text-foreground">
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-primary"></span> Automated Priority Sorting</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-primary"></span> Effort vs Impact Analysis</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-primary"></span> One-click Deferral</li>
              </ul>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="bg-surface p-1 border border-outline-variant relative h-[400px] flex items-center justify-center overflow-hidden group hover:border-primary/50 transition-colors">
              {/* Abstract UI Wireframe */}
              <div className="absolute inset-4 border border-outline-variant grid grid-cols-2 grid-rows-2 gap-px bg-outline-variant">
                <div className="bg-surface flex items-center justify-center hover:bg-primary/5 transition-colors"><span className="font-mono text-primary text-[10px] uppercase tracking-widest">Do First</span></div>
                <div className="bg-surface flex items-center justify-center hover:bg-primary/5 transition-colors"><span className="font-mono text-muted-foreground text-[10px] uppercase tracking-widest">Schedule</span></div>
                <div className="bg-surface flex items-center justify-center hover:bg-primary/5 transition-colors"><span className="font-mono text-muted-foreground text-[10px] uppercase tracking-widest">Delegate</span></div>
                <div className="bg-surface flex items-center justify-center hover:bg-primary/5 transition-colors"><span className="font-mono text-muted-foreground/30 text-[10px] uppercase tracking-widest">Don't Do</span></div>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="bg-surface p-8 border border-outline-variant order-2 md:order-1 hover:border-primary/50 transition-colors">
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-background border border-error/50 p-6 flex flex-col items-start gap-4">
                  <div className="font-mono text-error text-[10px] uppercase tracking-widest px-2 py-1 bg-error/10 border border-error/20">Risk Detection</div>
                  <div className="font-mono text-[14px] text-foreground">Burnout Risk Threshold Exceeded</div>
                </div>
                <div className="bg-background border border-primary/50 p-6 flex flex-col items-start gap-4">
                  <div className="font-mono text-primary text-[10px] uppercase tracking-widest px-2 py-1 bg-primary/10 border border-primary/20">Schedule Adjustment</div>
                  <div className="font-mono text-[14px] text-foreground">Schedule Compressed. Tasks Deferred.</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="order-1 md:order-2">
              <div className="font-mono text-[10px] text-primary tracking-widest uppercase mb-6 border border-primary px-3 py-1 inline-block bg-primary/10">Burnout Prevention</div>
              <h3 className="font-sans text-[32px] font-black uppercase text-foreground mb-4">Autonomous Protection</h3>
              <p className="font-mono text-[14px] text-muted-foreground leading-relaxed mb-6">
                When you fall behind, Chronix doesn't just show you red overdue tags. The Rescue Agent actively freezes non-essential tasks and reschedules your week to help you recover your momentum.
              </p>
              <Link href="/dashboard/rescue-center" className="text-primary font-mono text-[12px] font-bold uppercase tracking-widest hover:bg-primary/10 px-4 py-2 border border-primary transition-colors inline-block">Explore Rescue Center</Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION: Ecosystem */}
      <section id="ecosystem" className="py-[120px] bg-background relative overflow-hidden border-t border-outline-variant/50">
        <div className="max-w-[1440px] mx-auto px-4 md:px-[40px] relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 border-l-4 border-primary pl-6">
            <div className="font-mono text-[12px] text-primary tracking-[0.2em] uppercase mb-4">Meet Your Agents</div>
            <h2 className="font-sans text-[40px] font-black text-foreground uppercase tracking-tight">The 6-Agent Neural Suite</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            {[
              { id: '01', name: 'Atlas', desc: 'Strategic mapping and macro-goal planning. Breaks down massive goals instantly.' },
              { id: '02', name: 'Orbit', desc: 'Autonomous scheduling and cross-platform synchronization.' },
              { id: '03', name: 'Sentinel', desc: 'Proactive deadline risk detection and intelligent alerts.' },
              { id: '04', name: 'Pulse', desc: 'Continuous monitoring of your productivity vitals and velocity.' },
              { id: '05', name: 'Rescue', desc: 'Emergency intervention and schedule compression during burnout.' },
              { id: '06', name: 'Echo', desc: 'Deep analytics and automated executive synthesis reports.' }
            ].map((agent, i) => (
              <motion.div 
                key={agent.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ backgroundColor: "rgba(169,198,50,0.05)" }}
                className="bg-surface p-10 border border-outline-variant hover:border-primary/50 transition-all group relative overflow-hidden cursor-crosshair"
              >
                <div className="flex justify-between items-start mb-12">
                  <div className="font-mono font-bold text-primary text-[14px]">{agent.id}</div>
                  <div className="w-2 h-2 rounded-full bg-outline-variant group-hover:bg-primary group-hover:shadow-[0_0_10px_rgba(169,198,50,0.8)] transition-all"></div>
                </div>
                <h3 className="font-sans text-[24px] font-black uppercase text-foreground mb-4 tracking-wide">{agent.name}</h3>
                <p className="font-mono text-[13px] text-muted-foreground leading-relaxed">{agent.desc}</p>
                
                {/* Scanline effect on hover */}
                <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] opacity-0 group-hover:opacity-100 pointer-events-none"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: Testimonials */}
      <section className="py-[120px] bg-background border-t border-outline-variant/50">
        <div className="max-w-[1440px] mx-auto px-4 md:px-[40px]">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="font-sans text-[40px] font-black text-foreground uppercase tracking-tight mb-4">Trusted by Doers</h2>
            <p className="font-mono text-[14px] text-muted-foreground max-w-2xl mx-auto">See how top performers maintain their edge with Chronix.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-surface p-8 border border-outline-variant hover:border-primary/50 transition-colors">
              <div className="font-mono text-primary text-[10px] uppercase tracking-widest mb-6">Client Feedback</div>
              <p className="text-[14px] text-foreground mb-8 font-mono leading-relaxed">"Chronix OS feels like having a Chief of Staff in my browser. The Sentinel agent saved my product launch by warning me of a task bottleneck 3 days before it happened."</p>
              <div className="flex items-center gap-4 border-t border-outline-variant/50 pt-4">
                <div className="w-8 h-8 bg-primary/20 flex items-center justify-center font-bold text-primary font-mono text-[12px] border border-primary/30">S</div>
                <div>
                  <div className="font-sans font-black text-[12px] uppercase tracking-widest">Sarah Jenkins</div>
                  <div className="text-[10px] text-muted-foreground font-mono uppercase tracking-widest">Founder, Nexus AI</div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-surface p-8 border border-outline-variant hover:border-primary/50 transition-colors">
              <div className="font-mono text-primary text-[10px] uppercase tracking-widest mb-6">Client Feedback</div>
              <p className="text-[14px] text-foreground mb-8 font-mono leading-relaxed">"The Future Self Simulator completely changed how I look at my daily tasks. Visualizing the long-term impact of procrastination cured my bad habits instantly."</p>
              <div className="flex items-center gap-4 border-t border-outline-variant/50 pt-4">
                <div className="w-8 h-8 bg-primary/20 flex items-center justify-center font-bold text-primary font-mono text-[12px] border border-primary/30">D</div>
                <div>
                  <div className="font-sans font-black text-[12px] uppercase tracking-widest">David Chen</div>
                  <div className="text-[10px] text-muted-foreground font-mono uppercase tracking-widest">Senior Engineer</div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-surface p-8 border border-outline-variant hover:border-primary/50 transition-colors">
              <div className="font-mono text-primary text-[10px] uppercase tracking-widest mb-6">Client Feedback</div>
              <p className="text-[14px] text-foreground mb-8 font-mono leading-relaxed">"Finally, a productivity tool that doesn't just give you more work to organize. Rescue mode is incredible—it literally told me to stop working."</p>
              <div className="flex items-center gap-4 border-t border-outline-variant/50 pt-4">
                <div className="w-8 h-8 bg-primary/20 flex items-center justify-center font-bold text-primary font-mono text-[12px] border border-primary/30">E</div>
                <div>
                  <div className="font-sans font-black text-[12px] uppercase tracking-widest">Elena Rostova</div>
                  <div className="text-[10px] text-muted-foreground font-mono uppercase tracking-widest">Creative Director</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION: Pricing */}
      <section id="pricing" className="py-[120px] bg-background border-t border-outline-variant/50">
        <div className="max-w-[1200px] mx-auto px-4 md:px-[40px]">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="font-sans text-[40px] font-black text-foreground uppercase tracking-tight mb-4">Invest in Execution</h2>
            <p className="font-mono text-[14px] text-muted-foreground max-w-2xl mx-auto uppercase">Transparent Access. Cancel Anytime.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Starter */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="bg-surface p-10 border border-outline-variant flex flex-col h-full hover:border-primary/50 transition-colors">
              <div className="mb-12">
                <h3 className="font-sans font-black text-[24px] uppercase tracking-wide mb-2 text-foreground">Starter</h3>
                <p className="text-muted-foreground font-mono text-[12px] uppercase">For individuals building habits.</p>
              </div>
              <div className="mb-12 border-l-4 border-outline-variant pl-4">
                <span className="font-sans text-[48px] font-black leading-none">$0</span>
                <span className="text-muted-foreground font-mono text-[12px] ml-2 uppercase">/forever</span>
              </div>
              <ul className="space-y-4 flex-1 mb-12 font-mono text-[13px] uppercase">
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Up to 100 tasks</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Execution Matrix</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Basic Analytics</li>
              </ul>
              <Link href="/signup" className="w-full py-4 border border-outline font-bold font-mono text-[12px] uppercase tracking-widest hover:bg-white/5 transition-colors block text-center text-foreground">Get Started</Link>
            </motion.div>

            {/* Executive (Featured) */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-surface p-10 border border-primary relative flex flex-col h-full transform md:-translate-y-4 shadow-[0_0_30px_rgba(169,198,50,0.1)]">
              <div className="absolute top-0 right-0 bg-primary text-background px-4 py-1 font-mono text-[10px] font-bold tracking-widest uppercase">Most Popular</div>
              <div className="mb-12">
                <h3 className="font-sans font-black text-[24px] uppercase tracking-wide mb-2 text-primary">Executive</h3>
                <p className="text-muted-foreground font-mono text-[12px] uppercase">For serious doers.</p>
              </div>
              <div className="mb-12 border-l-4 border-primary pl-4">
                <span className="font-sans text-[48px] font-black leading-none text-primary">$12</span>
                <span className="text-muted-foreground font-mono text-[12px] ml-2 uppercase">/month</span>
              </div>
              <ul className="space-y-4 flex-1 mb-12 font-mono text-[13px] uppercase">
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Unlimited tasks</li>
                <li className="flex items-center gap-3 text-primary"><span className="w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_8px_rgba(169,198,50,1)]"></span> All Neural Agents</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Future Simulator</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Rescue Mode</li>
              </ul>
              <Link href="/signup?upgrade=executive" className="w-full py-4 bg-primary/10 border border-primary text-primary font-bold font-mono text-[12px] uppercase tracking-widest hover:bg-primary hover:text-background transition-colors block text-center shadow-[0_0_15px_rgba(169,198,50,0.2)]">Upgrade Now</Link>
            </motion.div>

            {/* Enterprise */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-surface p-10 border border-outline-variant flex flex-col h-full hover:border-primary/50 transition-colors">
              <div className="mb-12">
                <h3 className="font-sans font-black text-[24px] uppercase tracking-wide mb-2 text-foreground">Enterprise</h3>
                <p className="text-muted-foreground font-mono text-[12px] uppercase">For scaling execution.</p>
              </div>
              <div className="mb-12 border-l-4 border-outline-variant pl-4">
                <span className="font-sans text-[48px] font-black leading-none">$49</span>
                <span className="text-muted-foreground font-mono text-[12px] ml-2 uppercase">/user/mo</span>
              </div>
              <ul className="space-y-4 flex-1 mb-12 font-mono text-[13px] uppercase">
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Everything in Exec</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Team Workspace</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Synergy Feed</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> SSO / SAML</li>
              </ul>
              <Link href="/signup?upgrade=enterprise" className="w-full py-4 border border-outline font-bold font-mono text-[12px] uppercase tracking-widest hover:bg-white/5 transition-colors block text-center text-foreground">Contact Sales</Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-[120px] bg-background relative overflow-hidden border-t border-primary/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(169,198,50,0.05)_0%,transparent_50%)] pointer-events-none"></div>
        <div className="max-w-[800px] mx-auto px-4 text-center relative z-10">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-sans font-black text-[48px] md:text-[64px] text-foreground uppercase tracking-tighter mb-6">Ready to execute?</motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-muted-foreground font-mono text-[14px] md:text-[16px] mb-10 leading-relaxed">Stop managing tasks. Start achieving goals with the power of 6 distinct AI agents working behind the scenes.</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <Link href="/signup">
              <motion.div
                whileHover={{ backgroundColor: "var(--color-primary)", color: "var(--color-on-primary)" }}
                className="bg-transparent text-primary px-10 py-5 border border-primary font-bold font-mono text-[14px] uppercase tracking-[0.2em] transition-colors inline-block"
              >
                Enter the System
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer (Reference Inspired) */}
      <motion.footer 
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}
        className="bg-background w-full pt-20 pb-8 border-t border-outline-variant/20 relative overflow-hidden"
      >
        {/* Massive Watermark Title */}
        <div className="w-full flex justify-start mb-16 px-4 md:px-[40px]">
          <h2 className="font-display-lg font-black text-[12vw] leading-none text-foreground/5 tracking-tighter uppercase select-none pointer-events-none">
            CHRONIX
          </h2>
        </div>

        <div className="max-w-[1440px] mx-auto px-4 md:px-[80px]">
          {/* Navigation Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 mb-24 max-w-4xl">
            {/* Column 1 */}
            <div>
              <h4 className="font-bold text-[14px] text-primary mb-6 uppercase tracking-widest">
                Resources
              </h4>
              <ul className="flex flex-col gap-4 font-mono-label text-[13px] font-mono text-on-surface-variant uppercase">
                <li><Link href="/docs" className="hover:text-primary-container transition-colors">Documentation</Link></li>
                <li><Link href="/api" className="hover:text-primary-container transition-colors">API Resources</Link></li>
                <li><Link href="/status" className="hover:text-primary-container transition-colors">Network Status</Link></li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="font-bold text-[14px] text-primary mb-6 uppercase tracking-widest">
                Company
              </h4>
              <ul className="flex flex-col gap-4 font-mono-label text-[13px] font-mono text-on-surface-variant uppercase">
                <li><Link href="/about" className="hover:text-primary-container transition-colors">About Us</Link></li>
                <li><a href="mailto:support@chronix.os" className="hover:text-primary-container transition-colors">Contact Us</a></li>
                <li><Link href="/careers" className="hover:text-primary-container transition-colors">Careers</Link></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h4 className="font-bold text-[14px] text-primary mb-6 uppercase tracking-widest">
                Legal
              </h4>
              <ul className="flex flex-col gap-4 font-mono-label text-[13px] font-mono text-on-surface-variant uppercase">
                <li><Link href="/terms" className="hover:text-primary-container transition-colors">Terms & Conditions</Link></li>
                <li><Link href="/privacy" className="hover:text-primary-container transition-colors">Privacy Policy</Link></li>
                <li><Link href="/security" className="hover:text-primary-container transition-colors">Security & SOC 2</Link></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="font-mono-label text-[12px] font-mono text-on-surface-variant uppercase tracking-wider">
              © 2026 CHRONIX SYSTEMS. ALL RIGHTS RESERVED.
            </div>
            <div className="flex gap-8 text-on-surface-variant font-mono-label text-[12px] font-mono uppercase tracking-widest">
              <a href="https://instagram.com/chronixos" target="_blank" rel="noopener noreferrer" className="hover:text-primary-container transition-colors">Insta</a>
              <a href="https://twitter.com/chronixos" target="_blank" rel="noopener noreferrer" className="hover:text-primary-container transition-colors">X</a>
              <a href="https://github.com/Adi3595/Chronix" target="_blank" rel="noopener noreferrer" className="hover:text-primary-container transition-colors">Github</a>
            </div>
          </div>
        </div>
      </motion.footer>
      
    </div>
  );
}
