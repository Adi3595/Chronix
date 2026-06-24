"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Script from "next/script";
import { motion, useScroll, useTransform } from "framer-motion";

export default function LandingPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  useEffect(() => {
    // Background WebGL Shader (Soft Organic)
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    function syncSize() {
      if(!canvas) return;
      const w = canvas.clientWidth || window.innerWidth;
      const h = canvas.clientHeight || window.innerHeight;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    }
    syncSize();

    const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl") as WebGLRenderingContext;
    if (!gl) return;

    const vs = `attribute vec2 a_position;
varying vec2 v_texCoord;
void main() {
  v_texCoord = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}`;
    const fs = `precision highp float;
varying vec2 v_texCoord;
uniform float u_time;
uniform vec2 u_resolution;

void main() {
    vec2 uv = v_texCoord;
    float noise = sin(uv.x * 10.0 + u_time * 0.5) * cos(uv.y * 8.0 - u_time * 0.3) * 0.05;
    vec3 color = vec3(0.957, 0.961, 0.937);
    vec3 green = vec3(0.18, 0.49, 0.20);
    float glow = smoothstep(0.8, 1.0, 1.0 - distance(uv, vec2(0.5 + sin(u_time*0.2)*0.1, 0.5)));
    color = mix(color, color + green * 0.03, glow);
    gl_FragColor = vec4(color, 1.0);
}`;

    function cs(type: number, src: string) {
      if(!gl) return null;
      const s = gl.createShader(type);
      if(!s) return null;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    }
    
    const prog = gl.createProgram();
    const vShader = cs(gl.VERTEX_SHADER, vs);
    const fShader = cs(gl.FRAGMENT_SHADER, fs);
    if(prog && vShader && fShader) {
      gl.attachShader(prog, vShader);
      gl.attachShader(prog, fShader);
      gl.linkProgram(prog);
      gl.useProgram(prog);
      
      const buf = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buf);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
      const pos = gl.getAttribLocation(prog, "a_position");
      gl.enableVertexAttribArray(pos);
      gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);
      
      const uTime = gl.getUniformLocation(prog, "u_time");
      const uRes = gl.getUniformLocation(prog, "u_resolution");
      
      let animationFrameId: number;
      function render(t: number) {
        syncSize();
        if(!canvas || !gl || !prog) return;
        gl.viewport(0, 0, canvas.width, canvas.height);
        if (uTime) gl.uniform1f(uTime, t * 0.001);
        if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        animationFrameId = requestAnimationFrame(render);
      }
      render(0);

      return () => {
        cancelAnimationFrame(animationFrameId);
      };
    }
  }, []);

  return (
    <div className="text-on-surface antialiased selection:bg-primary-container selection:text-on-primary bg-background min-h-screen overflow-x-hidden">

      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md transition-all duration-200 border-b border-outline-variant/20">
        <div className="flex justify-between items-center px-4 md:px-[40px] py-4 max-w-[1440px] mx-auto">
          <div className="font-display-lg font-serif text-[24px] font-semibold text-primary tracking-tight flex items-center gap-2">
            <img src="/icon.svg" alt="Logo" className="w-8 h-8" />
            Chronix OS
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <Link href="#features" className="text-on-surface-variant hover:text-primary transition-colors duration-200 font-mono-label text-[13px] font-mono">Features</Link>
            <Link href="#ecosystem" className="text-on-surface-variant hover:text-primary transition-colors duration-200 font-mono-label text-[13px] font-mono">Ecosystem</Link>
            <Link href="#pricing" className="text-on-surface-variant hover:text-primary transition-colors duration-200 font-mono-label text-[13px] font-mono">Pricing</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login" className="hidden md:block font-mono-label text-[13px] font-mono text-on-surface-variant hover:text-primary transition-colors">Login</Link>
            <Link href="/dashboard" className="bg-primary-container text-on-primary px-6 py-2 rounded-lg font-mono-label text-[13px] font-mono hover:opacity-90 transition-opacity shadow-sm">Get Started</Link>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative min-h-[100vh] flex items-center pt-24 overflow-hidden">
        {/* WebGL Background */}
        <div className="absolute inset-0 w-full h-full opacity-50 mix-blend-multiply pointer-events-none z-0" style={{ display: "block" }}>
          <canvas ref={canvasRef} style={{ display: "block", width: "100%", height: "100%" }} />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 md:px-[40px] w-full grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-20 pointer-events-auto">
          {/* Typography & CTA */}
          <motion.div 
            style={{ y: heroY, opacity }}
            className="lg:col-span-6 flex flex-col justify-center pointer-events-none"
          >
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: "easeOut" }}>
              <h1 className="font-display-lg font-serif text-[56px] md:text-[80px] leading-[1.05] font-semibold text-on-surface mb-6 tracking-tight">
                Execution<br />
                <span className="text-primary relative inline-block">
                  Without Chaos
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-primary-container/30 -z-10 -rotate-1"></span>
                </span>
              </h1>
            </motion.div>
            
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.0, delay: 0.4, ease: "easeOut" }} className="font-body-lg text-[18px] md:text-[22px] text-on-surface-variant mb-10 max-w-lg leading-relaxed">
              Chronix transforms goals, deadlines, and responsibilities into clear, autonomous execution paths. Predict risks. Maintain momentum. Finish what matters.
            </motion.p>
            
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.0, delay: 0.8, ease: "easeOut" }} className="flex flex-wrap items-center gap-4 mb-12 pointer-events-auto">
              <Link href="/signup" className="bg-primary text-on-primary px-8 py-4 rounded-xl font-mono-label text-[14px] font-mono hover:opacity-90 transition-all shadow-[0_8px_30px_rgba(46,125,50,0.2)] hover:shadow-[0_8px_30px_rgba(46,125,50,0.4)] hover:-translate-y-0.5">
                Start Planning Free
              </Link>
              <button className="bg-transparent border-2 border-outline-variant bg-white/20 backdrop-blur-sm text-on-surface px-8 py-4 rounded-xl font-mono-label text-[14px] font-mono hover:bg-surface-container transition-colors flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">play_circle</span> Watch Demo
              </button>
            </motion.div>
            
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5, delay: 1.4 }} className="font-label-sm text-[12px] font-semibold text-on-surface-variant uppercase tracking-widest border-l-2 border-primary pl-4 flex flex-col gap-2">
              <span>Trusted by forward-thinking executives & teams</span>
              <div className="flex gap-4 opacity-50 grayscale pt-2">
                {/* Mock logos */}
                <div className="font-serif font-bold text-[16px]">Acme Corp</div>
                <div className="font-mono font-bold text-[16px]">VERTEX</div>
                <div className="font-sans font-black text-[16px]">NEXUS</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Visuals & Overlays */}
          <div className="lg:col-span-6 relative flex justify-end items-center h-[600px] pointer-events-auto">

            <div className="relative z-20 w-full max-w-md flex flex-col gap-6">
              {/* Overlay Card 1: 3D Tilt Effect */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.05, rotateY: 5, rotateX: -5 }}
                className="bg-white/90 backdrop-blur-xl rounded-2xl p-6 shadow-[0px_20px_40px_rgba(0,0,0,0.08)] border border-white transition-all transform perspective-1000"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="font-mono-label text-[13px] font-mono text-on-surface-variant flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">trending_up</span> Momentum Score
                  </span>
                  <span className="text-primary font-mono-label text-[13px] font-mono bg-primary-fixed/20 px-2 py-1 rounded-full">+12 This Week</span>
                </div>
                <div className="font-headline-md font-serif text-[40px] font-semibold text-on-surface flex items-baseline gap-2">
                  <span>87</span>
                  <span className="font-body-md text-[16px] text-on-surface-variant font-normal">/ 100</span>
                </div>
              </motion.div>

              {/* Overlay Card 2 */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.8 }}
                whileHover={{ scale: 1.05, rotateY: -5, rotateX: 5 }}
                className="bg-white/90 backdrop-blur-xl rounded-2xl p-6 shadow-[0px_20px_40px_rgba(0,0,0,0.08)] border border-white transform perspective-1000"
              >
                <div className="font-mono-label text-[13px] font-mono text-on-surface-variant mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">auto_awesome</span> Future Self Simulator
                </div>
                <div className="font-body-md text-[15px] font-medium text-on-surface mb-4">Goal: Launch SaaS MVP</div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between font-mono-label text-[11px] font-mono mb-2 text-on-surface-variant">
                      <span>Current Trajectory</span>
                      <span>120 Days</span>
                    </div>
                    <div className="w-full bg-surface-variant h-1.5 rounded-full overflow-hidden">
                      <div className="bg-outline h-full w-[100%] rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between font-mono-label text-[11px] font-mono mb-2 text-primary">
                      <span>Chronix Optimized Path</span>
                      <span>58 Days</span>
                    </div>
                    <div className="w-full bg-surface-variant h-1.5 rounded-full overflow-hidden relative">
                      <motion.div initial={{ width: "0%" }} animate={{ width: "48%" }} transition={{ duration: 1.5, delay: 1.5 }} className="bg-primary h-full rounded-full"></motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: Features Deep Dive */}
      <section id="features" className="py-[120px] bg-white relative">
        <div className="max-w-[1440px] mx-auto px-4 md:px-[40px]">
          <motion.div 
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="text-primary font-mono-label uppercase tracking-widest text-[12px] font-semibold bg-primary-container/30 px-3 py-1 rounded-full border border-primary/20 mb-4 inline-block">The Executive Suite</span>
            <h2 className="font-display-lg font-serif text-[40px] md:text-[56px] font-semibold text-on-surface mb-4">Focus on strategy. <br/>Let the AI handle execution.</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <div className="w-16 h-16 rounded-2xl bg-surface flex items-center justify-center text-primary border border-surface-container-highest shadow-sm mb-6">
                <span className="material-symbols-outlined text-[32px]">dataset</span>
              </div>
              <h3 className="font-headline-md font-serif text-[32px] font-semibold mb-4">The Execution Matrix</h3>
              <p className="text-[18px] text-on-surface-variant leading-relaxed mb-6">
                Stop looking at endless to-do lists. Chronix automatically prioritizes your tasks into an Eisenhower-style Execution Matrix, ensuring you tackle high-impact items first while gracefully deferring the noise.
              </p>
              <ul className="space-y-3 font-mono-label text-[14px]">
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span> Automated Priority Sorting</li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span> Effort vs Impact Analysis</li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span> One-click Deferral</li>
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/30 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2000&auto=format&fit=crop" alt="Dashboard Preview" className="w-full h-auto rounded-xl shadow-sm mix-blend-luminosity opacity-80" />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/30 shadow-2xl order-2 md:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-error-container/20 p-6 rounded-xl border border-error/20">
                  <span className="material-symbols-outlined text-error mb-2 text-[24px]">warning</span>
                  <div className="text-[14px] font-bold text-on-surface">Burnout Risk Detected</div>
                </div>
                <div className="bg-primary-container/20 p-6 rounded-xl border border-primary/20">
                  <span className="material-symbols-outlined text-primary mb-2 text-[24px]">shield</span>
                  <div className="text-[14px] font-bold text-on-surface">Schedule Compressed</div>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="order-1 md:order-2">
              <div className="w-16 h-16 rounded-2xl bg-surface flex items-center justify-center text-primary border border-surface-container-highest shadow-sm mb-6">
                <span className="material-symbols-outlined text-[32px]">health_and_safety</span>
              </div>
              <h3 className="font-headline-md font-serif text-[32px] font-semibold mb-4">Autonomous Burnout Protection</h3>
              <p className="text-[18px] text-on-surface-variant leading-relaxed mb-6">
                When you fall behind, Chronix doesn't just show you red overdue tags. The **Rescue Agent** actively freezes non-essential tasks and reschedules your week to help you recover your momentum without feeling overwhelmed.
              </p>
              <Link href="/dashboard/rescue-center" className="text-primary font-mono-label font-bold flex items-center gap-2 hover:underline">Explore Rescue Center <span className="material-symbols-outlined text-[16px]">arrow_forward</span></Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION: Ecosystem */}
      <section id="ecosystem" className="py-[120px] bg-surface-container-lowest relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 md:px-[40px] relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="font-display-lg font-serif text-[40px] font-semibold text-on-surface mb-4">The 6-Agent Neural Suite</h2>
            <p className="font-body-lg text-[18px] text-on-surface-variant max-w-2xl mx-auto">Specialized intelligence actively managing your execution surface.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: 'A-01', name: 'Atlas', icon: 'explore', desc: 'Strategic mapping and macro-goal planning. Breaks down massive goals instantly.' },
              { id: 'A-02', name: 'Orbit', icon: 'sync', desc: 'Autonomous scheduling and cross-platform synchronization.' },
              { id: 'A-03', name: 'Sentinel', icon: 'visibility', desc: 'Proactive deadline risk detection and intelligent alerts.' },
              { id: 'A-04', name: 'Pulse', icon: 'favorite', desc: 'Continuous monitoring of your productivity vitals and velocity.' },
              { id: 'A-05', name: 'Rescue', icon: 'medical_services', desc: 'Emergency intervention and schedule compression during burnout.' },
              { id: 'A-06', name: 'Echo', icon: 'monitoring', desc: 'Deep analytics and automated executive synthesis reports.' }
            ].map((agent, i) => (
              <motion.div 
                key={agent.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white p-8 rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.02)] border border-outline-variant/30 hover:border-primary/50 transition-all group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 font-mono font-bold text-surface-container-highest text-[40px] opacity-20 transition-opacity group-hover:opacity-40">{agent.id}</div>
                <div className="w-14 h-14 rounded-xl bg-surface-container-lowest flex items-center justify-center text-primary border border-surface-variant mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <span className="material-symbols-outlined text-[28px]">{agent.icon}</span>
                </div>
                <h3 className="font-headline-md font-serif text-[24px] font-semibold mb-3">{agent.name}</h3>
                <p className="font-body-md text-[15px] text-on-surface-variant leading-relaxed">{agent.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: Testimonials */}
      <section className="py-[120px] bg-white border-b border-outline-variant/20">
        <div className="max-w-[1440px] mx-auto px-4 md:px-[40px]">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="font-display-lg font-serif text-[40px] font-semibold text-on-surface mb-4">Trusted by Doers</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/30">
              <div className="flex gap-1 text-primary mb-4">
                {[1,2,3,4,5].map(i => <span key={i} className="material-symbols-outlined text-[18px]">star</span>)}
              </div>
              <p className="text-[16px] text-on-surface mb-6 italic">"Chronix OS feels like having a Chief of Staff in my browser. The Sentinel agent saved my product launch by warning me of a task bottleneck 3 days before it happened."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">S</div>
                <div>
                  <div className="font-bold text-[14px]">Sarah Jenkins</div>
                  <div className="text-[12px] text-on-surface-variant">Founder, Nexus AI</div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/30">
              <div className="flex gap-1 text-primary mb-4">
                {[1,2,3,4,5].map(i => <span key={i} className="material-symbols-outlined text-[18px]">star</span>)}
              </div>
              <p className="text-[16px] text-on-surface mb-6 italic">"The Future Self Simulator completely changed how I look at my daily tasks. Visualizing the long-term impact of procrastination cured my bad habits instantly."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">D</div>
                <div>
                  <div className="font-bold text-[14px]">David Chen</div>
                  <div className="text-[12px] text-on-surface-variant">Senior Engineer</div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/30">
              <div className="flex gap-1 text-primary mb-4">
                {[1,2,3,4,5].map(i => <span key={i} className="material-symbols-outlined text-[18px]">star</span>)}
              </div>
              <p className="text-[16px] text-on-surface mb-6 italic">"Finally, a productivity tool that doesn't just give you more work to organize. Rescue mode is incredible—it literally told me to stop working and compressed my schedule."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">E</div>
                <div>
                  <div className="font-bold text-[14px]">Elena Rostova</div>
                  <div className="text-[12px] text-on-surface-variant">Creative Director</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION: Pricing */}
      <section id="pricing" className="py-[120px] bg-surface-container-lowest">
        <div className="max-w-[1200px] mx-auto px-4 md:px-[40px]">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="font-display-lg font-serif text-[40px] font-semibold text-on-surface mb-4">Invest in your execution</h2>
            <p className="font-body-lg text-[18px] text-on-surface-variant max-w-2xl mx-auto">Simple, transparent pricing. Cancel anytime.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-3xl p-8 border border-outline-variant/30 flex flex-col h-full">
              <div className="mb-8">
                <h3 className="font-bold text-[20px] mb-2">Starter</h3>
                <p className="text-on-surface-variant text-[14px]">For individuals building habits.</p>
              </div>
              <div className="mb-8">
                <span className="font-serif text-[48px] font-bold">$0</span>
                <span className="text-on-surface-variant">/forever</span>
              </div>
              <ul className="space-y-4 flex-1 mb-8">
                <li className="flex items-center gap-3 text-[14px]"><span className="material-symbols-outlined text-primary text-[18px]">check</span> Up to 100 tasks</li>
                <li className="flex items-center gap-3 text-[14px]"><span className="material-symbols-outlined text-primary text-[18px]">check</span> Execution Matrix</li>
                <li className="flex items-center gap-3 text-[14px]"><span className="material-symbols-outlined text-primary text-[18px]">check</span> Basic Analytics</li>
              </ul>
              <button className="w-full py-3 rounded-xl border-2 border-outline-variant font-bold text-[14px] hover:bg-surface-container transition-colors">Get Started</button>
            </motion.div>

            {/* Executive (Featured) */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-primary-container/10 rounded-3xl p-8 border-2 border-primary relative flex flex-col h-full transform md:-translate-y-4 shadow-[0_20px_50px_rgba(46,125,50,0.15)]">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-on-primary px-4 py-1 rounded-full text-[12px] font-bold tracking-widest uppercase">Most Popular</div>
              <div className="mb-8">
                <h3 className="font-bold text-[20px] mb-2 text-primary">Executive Suite</h3>
                <p className="text-on-surface-variant text-[14px]">For serious doers and professionals.</p>
              </div>
              <div className="mb-8">
                <span className="font-serif text-[48px] font-bold">$12</span>
                <span className="text-on-surface-variant">/month</span>
              </div>
              <ul className="space-y-4 flex-1 mb-8">
                <li className="flex items-center gap-3 text-[14px]"><span className="material-symbols-outlined text-primary text-[18px]">check</span> Unlimited tasks & goals</li>
                <li className="flex items-center gap-3 text-[14px] font-bold text-primary"><span className="material-symbols-outlined text-primary text-[18px]">star</span> All 6 Neural Agents unlocked</li>
                <li className="flex items-center gap-3 text-[14px]"><span className="material-symbols-outlined text-primary text-[18px]">check</span> Future Self Simulator</li>
                <li className="flex items-center gap-3 text-[14px]"><span className="material-symbols-outlined text-primary text-[18px]">check</span> External Integrations (Slack/Cal)</li>
                <li className="flex items-center gap-3 text-[14px]"><span className="material-symbols-outlined text-primary text-[18px]">check</span> Priority Rescue Mode</li>
              </ul>
              <button className="w-full py-3 rounded-xl bg-primary text-on-primary font-bold text-[14px] hover:opacity-90 transition-opacity">Upgrade to Executive</button>
            </motion.div>

            {/* Enterprise */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-white rounded-3xl p-8 border border-outline-variant/30 flex flex-col h-full">
              <div className="mb-8">
                <h3 className="font-bold text-[20px] mb-2">Enterprise</h3>
                <p className="text-on-surface-variant text-[14px]">For teams scaling execution.</p>
              </div>
              <div className="mb-8">
                <span className="font-serif text-[48px] font-bold">$49</span>
                <span className="text-on-surface-variant">/user/mo</span>
              </div>
              <ul className="space-y-4 flex-1 mb-8">
                <li className="flex items-center gap-3 text-[14px]"><span className="material-symbols-outlined text-primary text-[18px]">check</span> Everything in Executive</li>
                <li className="flex items-center gap-3 text-[14px]"><span className="material-symbols-outlined text-primary text-[18px]">check</span> Team Workspace</li>
                <li className="flex items-center gap-3 text-[14px]"><span className="material-symbols-outlined text-primary text-[18px]">check</span> Cross-team Synergy Feed</li>
                <li className="flex items-center gap-3 text-[14px]"><span className="material-symbols-outlined text-primary text-[18px]">check</span> SSO / SAML</li>
              </ul>
              <button className="w-full py-3 rounded-xl border-2 border-outline-variant font-bold text-[14px] hover:bg-surface-container transition-colors">Contact Sales</button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-[120px] bg-surface-container-lowest relative overflow-hidden border-t border-outline-variant/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(46,125,50,0.15)_0%,transparent_70%)]"></div>
        <div className="max-w-[800px] mx-auto px-4 text-center relative z-10">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display-lg font-serif text-[48px] text-on-surface font-semibold mb-6">Ready to execute?</motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-on-surface-variant text-[20px] mb-10">Stop managing tasks. Start achieving goals with the power of 6 distinct AI agents working behind the scenes.</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <Link href="/signup" className="bg-primary text-on-primary px-10 py-5 rounded-2xl font-bold text-[16px] hover:scale-105 transition-transform inline-block shadow-[0_8px_30px_rgba(46,125,50,0.3)]">Enter the Terminal</Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface-container w-full py-12">
        <div className="max-w-[1440px] mx-auto px-4 md:px-[40px] flex flex-col md:flex-row justify-between items-center">
          <div className="font-display-lg font-serif text-[24px] text-primary mb-6 md:mb-0 flex items-center gap-2">
            <img src="/icon.svg" alt="Logo" className="w-6 h-6 grayscale" />
            Chronix OS
          </div>
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex gap-6">
              <Link href="#" className="text-on-surface-variant hover:text-primary transition-opacity ease-out duration-200 font-mono-label text-[13px] font-mono">Privacy Policy</Link>
              <Link href="#" className="text-on-surface-variant hover:text-primary transition-opacity ease-out duration-200 font-mono-label text-[13px] font-mono">Terms of Service</Link>
              <Link href="#" className="text-on-surface-variant hover:text-primary transition-opacity ease-out duration-200 font-mono-label text-[13px] font-mono">Contact Support</Link>
            </div>
            <div className="font-body-md text-[13px] text-on-surface-variant">
              © 2026 Chronix Productivity OS. Swiss Engineered Focus.
            </div>
          </div>
        </div>
      </footer>
      
    </div>
  );
}
