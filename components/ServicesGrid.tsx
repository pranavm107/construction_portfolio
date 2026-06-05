'use client';

import { servicesData } from '@/lib/services';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import Link from 'next/link';
import FadeIn from './animations/FadeIn';

export default function ServicesGrid() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service, idx) => {
          // Resolve icon dynamically from Lucide library
          const LucideIcon = (Icons as any)[service.iconName] || Icons.HelpCircle;

          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: 'easeOut' }}
              className="group bg-card rounded-2xl border border-neutral-200/50 p-8 hover:shadow-xl hover:border-neutral-300 transition-all duration-300 flex flex-col justify-between h-[350px] relative overflow-hidden"
            >
              {/* Fine blueprint lines on hover */}
              <div className="absolute inset-0 blueprint-grid-fine opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div>
                <div className="w-12 h-12 rounded-xl bg-warm-white border border-neutral-200/60 flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-primary transition-all duration-300 mb-6">
                  <LucideIcon className="w-5 h-5" />
                </div>
                
                <h3 className="font-display font-bold text-xl text-primary mb-3">
                  {service.title}
                </h3>
                
                <p className="font-sans text-secondary text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <div className="flex flex-col gap-2 z-10">
                <div className="flex flex-wrap gap-x-3 gap-y-1.5 border-t border-neutral-100 pt-4">
                  {service.details.slice(0, 2).map((det, i) => (
                    <span key={i} className="font-mono text-[10px] text-neutral-400 uppercase tracking-wider">
                      // {det}
                    </span>
                  ))}
                </div>
                <Link
                  href="/services"
                  className="font-display text-xs font-semibold text-primary hover:text-accent flex items-center gap-1 mt-3"
                >
                  Learn More
                  <Icons.ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 duration-200" />
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
