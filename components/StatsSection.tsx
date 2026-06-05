'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useInView, motion } from 'framer-motion';
import { Award, Compass, BarChart3, Users } from 'lucide-react';

interface StatItemProps {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
  description: string;
}

function CounterItem({ icon: Icon, value, suffix, label, description }: StatItemProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const duration = 2000; // 2 seconds animate duration
    let startTimestamp: number | null = null;

    function step(timestamp: number) {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);
      
      // Elegant easeOutQuad count interpolation
      const easeProgress = progress * (2 - progress);
      
      setCount(Math.floor(easeProgress * (end - start) + start));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    }

    window.requestAnimationFrame(step);
  }, [isInView, value]);

  return (
    <div ref={ref} className="bg-card border border-neutral-200/50 rounded-2xl p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <span className="font-display font-bold text-sm text-neutral-400 uppercase tracking-wider">
          {label}
        </span>
        <div className="w-10 h-10 rounded-xl bg-warm-white border border-neutral-200/60 flex items-center justify-center text-accent">
          <Icon className="w-4.5 h-4.5" />
        </div>
      </div>
      
      <div className="mt-2">
        <h3 className="font-display font-black text-4xl sm:text-5xl text-primary mb-2 select-none tracking-tight">
          {count}{suffix}
        </h3>
        <p className="font-sans text-secondary text-xs leading-relaxed max-w-[200px]">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function StatsSection() {
  const stats: StatItemProps[] = [
    {
      icon: Compass,
      value: 150,
      suffix: "+",
      label: "Execution",
      description: "Landmark residential, commercial, and infrastructure projects delivered."
    },
    {
      icon: Award,
      value: 10,
      suffix: "+ Years",
      label: "Excellence",
      description: "Dedicated construction excellence in premium engineering and design."
    },
    {
      icon: BarChart3,
      value: 75,
      suffix: "+",
      label: "Partnerships",
      description: "Corporate clients and institutional co-investors who trust our build quality."
    },
    {
      icon: Users,
      value: 25,
      suffix: "+",
      label: "Heritage",
      description: "Premium architectural developments reshaping South Indian horizons."
    }
  ];

  return (
    <div className="w-full py-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, idx) => (
          <CounterItem
            key={idx}
            icon={stat.icon}
            value={stat.value}
            suffix={stat.suffix}
            label={stat.label}
            description={stat.description}
          />
        ))}
      </div>
    </div>
  );
}
