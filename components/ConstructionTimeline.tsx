'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Compass, ClipboardCheck, HardHat, Hammer, Building2, Paintbrush, Key } from 'lucide-react';

const steps = [
  {
    num: "01",
    title: "Planning",
    desc: "Technical BIM modeling, architectural layout drafts, structural design calculations, and local corporation approvals.",
    icon: ClipboardCheck,
  },
  {
    num: "02",
    title: "Site Development",
    desc: "Earth excavation, soil bearing capacity checks, site grading, and structural layout marking.",
    icon: Compass,
  },
  {
    num: "03",
    title: "Foundation Works",
    desc: "RCC footing pouring, foundation grade beam reinforcement, and anti-termite subgrade treatments.",
    icon: HardHat,
  },
  {
    num: "04",
    title: "Structural Construction",
    desc: "Core RCC pillar casting, roof slab reinforcement, brick masonry, and structural framing.",
    icon: Hammer,
  },
  {
    num: "05",
    title: "Facade Installation",
    desc: "Fitting high-performance double-glazed glass skins, cladding elements, and external security doors.",
    icon: Building2,
  },
  {
    num: "06",
    title: "Interior Completion",
    desc: "Advanced mechanical, electrical, plumbing (MEP) layouts, ceiling work, tiling, and primary paint coats.",
    icon: Paintbrush,
  },
  {
    num: "07",
    title: "Project Handover",
    desc: "Professional third-party QA validation, structural RERA/corporation documentation handoff, and keys delivery.",
    icon: Key,
  }
];

export default function ConstructionTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track vertical scroll progress across the timeline section for subtle line animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineScaleX = useTransform(scrollYProgress, [0.1, 0.6], [0, 1]);

  return (
    <div ref={containerRef} className="w-full relative py-12">
      {/* Horizontal timeline container with overflow-x scrolling on mobile and grid on desktop */}
      <div className="relative">
        
        {/* Horizontal Connector Line (Desktop) */}
        <div className="hidden lg:block absolute top-[68px] left-12 right-12 h-[2px] bg-neutral-200/60 z-0">
          <motion.div
            style={{ scaleX: lineScaleX }}
            className="h-full bg-accent origin-left"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8 relative z-10">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-5%' }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: 'easeOut' }}
                className="flex flex-col items-start gap-4 p-6 bg-card border border-neutral-200/40 rounded-2xl lg:bg-transparent lg:border-none lg:p-0 relative"
              >
                {/* Connector Line (Mobile/Tablet vertical helper) */}
                <div className="lg:hidden absolute left-10 top-20 bottom-0 w-0.5 bg-neutral-200/50 -z-10" />

                {/* Step Circle indicator */}
                <div className="flex items-center justify-between w-full lg:mb-2">
                  <div className="w-12 h-12 rounded-full bg-primary text-warm-white group flex items-center justify-center font-display font-bold text-sm border-2 border-warm-white shadow-md z-10 hover:bg-accent hover:text-primary transition-colors duration-300">
                    <Icon className="w-4 h-4 text-accent" />
                  </div>
                  <span className="font-mono text-xs font-bold text-accent tracking-wider bg-accent/5 px-2.5 py-0.5 rounded-full">
                    PHASE {step.num}
                  </span>
                </div>

                <div className="flex flex-col gap-2 mt-2">
                  <h3 className="font-display font-extrabold text-lg text-primary">
                    {step.title}
                  </h3>
                  <p className="font-sans text-secondary text-xs leading-relaxed max-w-xs">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
