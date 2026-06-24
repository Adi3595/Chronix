"use client";

import { motion } from "framer-motion";

export function ProblemSection() {
  return (
    <section className="py-24 bg-white text-center px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-serif text-foreground mb-16"
        >
          Why Productivity Systems Fail
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {[
            { title: "Missed Deadlines", desc: "Static tools don't warn you until it's too late." },
            { title: "Procrastination", desc: "Lack of immediate feedback breaks momentum." },
            { title: "Overloaded Schedules", desc: "Tools let you pile up tasks without reality checks." },
            { title: "Lack of Direction", desc: "You have a list of tasks, but no cohesive strategy." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-[#f9faf5] rounded-3xl border border-gray-100"
            >
              <h3 className="text-xl font-medium text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AgentEcosystemSection() {
  return (
    <section className="py-24 bg-[#111827] text-white px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-serif mb-16 text-[#F4F5EF]"
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
              className="p-8 bg-[#1F2937] rounded-3xl border border-gray-800 hover:border-primary transition-colors"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  {agent.name.substring(0,2)}
                </div>
                <div>
                  <h3 className="text-xl font-medium text-[#F4F5EF]">{agent.name}</h3>
                  <p className="text-sm text-primary">{agent.role}</p>
                </div>
              </div>
              <p className="text-gray-400">{agent.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
