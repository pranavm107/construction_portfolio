'use client';

import RevealText from '@/components/animations/RevealText';
import FadeIn from '@/components/animations/FadeIn';
import { Compass, ShieldAlert, Award, TrendingUp } from 'lucide-react';

const values = [
  {
    icon: Compass,
    title: "Precision Engineering",
    desc: "We plan and execute down to the millimeter, leveraging advanced BIM simulations to eliminate construction errors."
  },
  {
    icon: Award,
    title: "Architectural Integrity",
    desc: "We honor architectural intent, bridging spatial beauty with physical realities and building structures meant to last generations."
  },
  {
    icon: ShieldAlert,
    title: "Zero-Incident Safety",
    desc: "Rigorous training, site protocols, and continuous monitoring systems keep our building sites completely secure."
  },
  {
    icon: TrendingUp,
    title: "Sustainable Footprint",
    desc: "We design structures utilizing carbon-reduced concrete, smart energy grids, and water reclamation technologies."
  }
];

const team = [
  { name: "Pranav Agneesh", role: "Principal Architect & Founder", init: "PA" },
  { name: "Dr. Sarah Srinivasan", role: "Lead Structural Engineer", init: "SS" },
  { name: "R. Rajesh Kumar", role: "Chief of Construction Ops", init: "RK" }
];

export default function AboutPage() {
  return (
    <section className="py-32 bg-warm-white min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Page Header */}
        <div className="max-w-2xl mb-20">
          <FadeIn>
            <span className="font-mono text-[10px] text-accent font-bold tracking-widest uppercase mb-2 block">
              // Corporate Profile
            </span>
          </FadeIn>
          <RevealText
            text="Forging Landmark Architecture Since 2006"
            tag="h1"
            className="font-display font-black text-4xl sm:text-6xl text-primary leading-[1.1] mb-6"
          />
          <FadeIn delay={0.2}>
            <p className="font-sans text-secondary text-sm sm:text-base leading-relaxed">
              AURA was founded by a collective of structural engineers and luxury architects to bridge the gap between design aspiration and engineering reality.
            </p>
          </FadeIn>
        </div>

        {/* Company Vision & Story */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-neutral-200/60 pb-20 mb-20">
          
          <FadeIn className="md:col-span-1" delay={0.1}>
            <h3 className="font-display font-extrabold text-2xl text-primary mb-4">
              Our Mission
            </h3>
            <p className="font-sans text-secondary text-sm leading-relaxed">
              To build commercial, residential, and civic landmarks that stand as testaments to design excellence, engineering precision, and ecological responsibility.
            </p>
          </FadeIn>

          <FadeIn className="md:col-span-1" delay={0.2}>
            <h3 className="font-display font-extrabold text-2xl text-primary mb-4">
              Our Vision
            </h3>
            <p className="font-sans text-secondary text-sm leading-relaxed">
              To redefine urban horizons using smart-engineered framing structures, sustainable concrete tech, and high-performance glass envelopes.
            </p>
          </FadeIn>

          <FadeIn className="md:col-span-1" delay={0.3}>
            <h3 className="font-display font-extrabold text-2xl text-primary mb-4">
              Spatial Heritage
            </h3>
            <p className="font-sans text-secondary text-sm leading-relaxed">
              For over two decades, AURA has successfully delivered structures aggregating over 1 million square feet of custom structural volume.
            </p>
          </FadeIn>

        </div>

        {/* Core Values Section */}
        <div className="mb-20">
          <div className="max-w-2xl mb-12">
            <FadeIn>
              <span className="font-mono text-[10px] text-accent font-bold tracking-widest uppercase mb-2 block">
                // Operational Principles
              </span>
              <h2 className="font-display font-extrabold text-3xl text-primary mb-4">
                Our Core Foundations
              </h2>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <FadeIn key={i} delay={i * 0.05} className="bg-card border border-neutral-200/50 rounded-2xl p-6">
                  <div className="w-10 h-10 rounded-xl bg-warm-white border border-neutral-200/60 flex items-center justify-center text-accent mb-4">
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <h4 className="font-display font-bold text-lg text-primary mb-2">
                    {v.title}
                  </h4>
                  <p className="font-sans text-secondary text-xs leading-relaxed">
                    {v.desc}
                  </p>
                </FadeIn>
              );
            })}
          </div>
        </div>

        {/* Leadership Team Section */}
        <div>
          <div className="max-w-2xl mb-12">
            <FadeIn>
              <span className="font-mono text-[10px] text-accent font-bold tracking-widest uppercase mb-2 block">
                // Executive Leadership
              </span>
              <h2 className="font-display font-extrabold text-3xl text-primary mb-4">
                The Minds Behind AURA
              </h2>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {team.map((t, i) => (
              <FadeIn key={i} delay={i * 0.1} className="bg-card border border-neutral-200/50 rounded-2xl p-6 hover:shadow-md hover:border-neutral-300 transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-neutral-100 flex items-center justify-center font-display font-bold text-lg text-primary border border-neutral-300 mb-6">
                  {t.init}
                </div>
                <h4 className="font-display font-bold text-base text-primary mb-1">
                  {t.name}
                </h4>
                <p className="font-sans text-[11px] text-neutral-400">
                  {t.role}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
