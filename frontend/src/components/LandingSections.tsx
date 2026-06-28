"use client";

import { motion } from "framer-motion";

export function ProblemSection() {
  return (
    <section className="py-[120px] bg-transparent text-center relative z-10 border-t border-outline/50">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[80px]">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[48px] md:text-[64px] font-serif text-foreground mb-16 tracking-tight"
        >
          Why Productivity Systems Fail
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {[
            { title: "Missed Deadlines", desc: "Static tools don't warn you until it's too late.", icon: "error" },
            { title: "Procrastination", desc: "Lack of immediate feedback breaks momentum.", icon: "hourglass_disabled" },
            { title: "Overloaded Schedules", desc: "Tools let you pile up tasks without reality checks.", icon: "calendar_today" },
            { title: "Lack of Direction", desc: "You have a list of tasks, but no cohesive strategy.", icon: "map" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-surface/40 backdrop-blur-xl rounded-3xl border border-outline hover:border-primary/40 transition-all group hover:shadow-[0_10px_40px_rgba(46,125,50,0.15)] relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="flex items-center gap-4 mb-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <h3 className="text-[20px] font-sans font-bold text-foreground">{item.title}</h3>
              </div>
              <p className="text-muted-foreground font-sans text-[15px] relative z-10">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AgentEcosystemSection() {
  return (
    <section className="py-[120px] bg-transparent text-foreground relative z-10 border-t border-outline/50" id="agents">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[80px] text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[48px] md:text-[64px] font-serif mb-16 tracking-tight text-foreground"
        >
          The Agent Ecosystem
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {[
            { name: "Atlas", role: "Strategic Planning", desc: "Decomposes goals and builds long-term roadmaps." },
            { name: "Orbit", role: "Scheduling Engine", desc: "Optimizes calendar blocks dynamically based on focus." },
            { name: "Sentinel", role: "Risk Intelligence", desc: "Detects burnout and deadline failures proactively." },
            { name: "Pulse", role: "Performance Monitor", desc: "Tracks momentum, velocity, and execution consistency." },
            { name: "Rescue", role: "Emergency Execution", desc: "Generates recovery sprints when things go wrong." },
            { name: "Echo", role: "Reflection & Insights", desc: "Provides analytical weekly growth reports." }
          ].map((agent, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-surface/40 backdrop-blur-xl rounded-3xl border border-outline hover:border-primary/40 transition-colors group relative overflow-hidden hover:shadow-[0_10px_40px_rgba(46,125,50,0.15)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="flex items-center gap-4 mb-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold shadow-[0_0_15px_rgba(46,125,50,0.2)]">
                  {agent.name.substring(0,2)}
                </div>
                <div>
                  <h3 className="text-[20px] font-sans font-bold text-foreground">{agent.name}</h3>
                  <p className="text-[12px] uppercase font-sans tracking-widest font-bold text-primary">{agent.role}</p>
                </div>
              </div>
              <p className="text-muted-foreground font-sans text-[15px] relative z-10">{agent.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
