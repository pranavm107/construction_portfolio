'use client';

import { servicesData } from '@/lib/services';
import * as Icons from 'lucide-react';
import RevealText from '@/components/animations/RevealText';
import FadeIn from '@/components/animations/FadeIn';

export default function ServicesPage() {
  return (
    <section className="py-32 bg-warm-white min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Page Header */}
        <div className="max-w-2xl mb-20">
          <FadeIn>
            <span className="font-mono text-[10px] text-accent font-bold tracking-widest uppercase mb-2 block">
              // Engineering Divisions
            </span>
          </FadeIn>
          <RevealText
            text="Comprehensive Project Execution Capabilities"
            tag="h1"
            className="font-display font-black text-4xl sm:text-6xl text-primary leading-[1.1] mb-6"
          />
          <FadeIn delay={0.2}>
            <p className="font-sans text-secondary text-sm sm:text-base leading-relaxed">
              We leverage cutting-edge BIM modeling, premium materials, and stringent QA frameworks to execute landmark projects safely, sustainably, and on schedule.
            </p>
          </FadeIn>
        </div>

        {/* Detailed Services Listing */}
        <div className="flex flex-col gap-12">
          {servicesData.map((service, idx) => {
            const LucideIcon = (Icons as any)[service.iconName] || Icons.HelpCircle;
            
            return (
              <FadeIn key={service.id} delay={idx * 0.05} direction="up">
                <div className="bg-card border border-neutral-200/50 rounded-2xl p-8 md:p-10 hover:shadow-md hover:border-neutral-300 transition-all duration-300 grid grid-cols-1 md:grid-cols-4 gap-8">
                  
                  {/* Left block (Icon & Title) */}
                  <div className="md:col-span-1 flex flex-col items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-warm-white border border-neutral-200 flex items-center justify-center text-accent">
                      <LucideIcon className="w-5 h-5" />
                    </div>
                    <h2 className="font-display font-bold text-xl text-primary leading-tight">
                      {service.title}
                    </h2>
                  </div>

                  {/* Right block (Description & Technical Details) */}
                  <div className="md:col-span-3 flex flex-col gap-6">
                    <p className="font-sans text-secondary text-sm leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Sub-divisions / Technical details list */}
                    <div>
                      <h4 className="font-display font-bold text-[10px] text-neutral-400 uppercase tracking-wider mb-3">
                        // Core Execution Details
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        {service.details.map((detail, i) => (
                          <li key={i} className="flex items-center gap-2 font-sans text-xs text-primary font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="h-px bg-neutral-100 mt-2" />
                    <div className="font-mono text-[9px] text-neutral-400 uppercase tracking-widest flex items-center gap-4">
                      <span>CODE COMPLIANCE: IBC Section {300 + idx * 10}</span>
                      <span>// SAFETY RATINGS: OSHA 1926 Certified</span>
                    </div>

                  </div>

                </div>
              </FadeIn>
            );
          })}
        </div>

      </div>
    </section>
  );
}
