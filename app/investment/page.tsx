'use client';

import RevealText from '@/components/animations/RevealText';
import FadeIn from '@/components/animations/FadeIn';
import { ArrowUpRight, ShieldCheck, DollarSign, LineChart, FileText } from 'lucide-react';
import Link from 'next/link';

const insights = [
  {
    icon: DollarSign,
    label: "AUM Asset Value",
    value: "$420 Million",
    desc: "Capital value of projects currently under management and execution."
  },
  {
    icon: LineChart,
    label: "Average Project IRR",
    value: "18.4% Net",
    desc: "Annualized internal rate of return across all completed developments."
  },
  {
    icon: ShieldCheck,
    label: "Capital Retention",
    value: "100% Locked",
    desc: "All developments structured with primary performance bonding coverage."
  }
];

export default function InvestmentPage() {
  return (
    <section className="py-32 bg-warm-white min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Page Header */}
        <div className="max-w-2xl mb-20">
          <FadeIn>
            <span className="font-mono text-[10px] text-accent font-bold tracking-widest uppercase mb-2 block">
              // Capital Partnerships
            </span>
          </FadeIn>
          <RevealText
            text="Co-Invest in Landmark Commercial Structures"
            tag="h1"
            className="font-display font-black text-4xl sm:text-6xl text-primary leading-[1.1] mb-6"
          />
          <FadeIn delay={0.2}>
            <p className="font-sans text-secondary text-sm sm:text-base leading-relaxed">
              AURA structures secure, tier-one co-investment partnerships with corporate funds, institutions, and family offices to capitalize luxury developments.
            </p>
          </FadeIn>
        </div>

        {/* Investment Highlights grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
          {insights.map((ins, i) => {
            const Icon = ins.icon;
            return (
              <FadeIn key={i} delay={i * 0.1} className="bg-card border border-neutral-200/50 rounded-2xl p-6 md:p-8 flex flex-col justify-between hover:shadow-md transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-display text-[9px] font-bold text-neutral-400 uppercase tracking-widest">
                    {ins.label}
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-warm-white border border-neutral-200 flex items-center justify-center text-accent">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <div>
                  <h3 className="font-display font-black text-2xl md:text-3xl text-primary mb-2">
                    {ins.value}
                  </h3>
                  <p className="font-sans text-secondary text-[11px] leading-relaxed">
                    {ins.desc}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Investment Prospectus Briefing */}
        <FadeIn delay={0.3} className="bg-primary text-warm-white border border-neutral-800 rounded-3xl p-8 md:p-12 relative overflow-hidden mb-16">
          <div className="absolute inset-0 blueprint-grid opacity-15 pointer-events-none" />
          <div className="absolute inset-0 blueprint-grid-fine opacity-10 pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-xl">
              <span className="font-mono text-[9px] text-accent font-bold tracking-widest uppercase block mb-1">
                // Q3 2026 Offering
              </span>
              <h2 className="font-display font-bold text-2xl md:text-3xl text-warm-white leading-tight mb-3">
                Download Investment Prospectus Packet
              </h2>
              <p className="font-sans text-neutral-400 text-xs leading-relaxed">
                Contains project capitalization schedules, zoning feasibility permits, environmental impact ratings, and structural engineering reviews.
              </p>
            </div>

            <Link
              href="/contact"
              className="group flex items-center gap-2 px-6 py-3.5 bg-accent text-primary font-display font-bold text-xs uppercase tracking-wider rounded-xl hover:shadow-lg transition-all duration-300 shrink-0 cursor-pointer"
            >
              Request Access
              <FileText className="w-4 h-4 text-primary" />
            </Link>
          </div>
        </FadeIn>

        {/* Legal Disclaimer */}
        <FadeIn delay={0.4} className="font-sans text-[10px] text-neutral-400 leading-relaxed border-t border-neutral-200/60 pt-8">
          <p>
            <strong>REGULATORY DISCLAIMER:</strong> Co-investment opportunities listed on this portal are structured specifically for Accredited Investors under Regulation D Rule 506(c) of the US Securities Act. Yields and internal rates of return (IRR) are based on historical completions and act as projections only. Real estate development involves project site hazards, zoning alterations, and capitalization risks.
          </p>
        </FadeIn>

      </div>
    </section>
  );
}
