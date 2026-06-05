'use client';

import Hero from '@/components/Hero';
import ScrollTransformation from '@/components/ScrollTransformation';
import ServicesGrid from '@/components/ServicesGrid';
import ProjectCard from '@/components/ProjectCard';
import ConstructionTimeline from '@/components/ConstructionTimeline';
import StatsSection from '@/components/StatsSection';
import TestimonialCard from '@/components/TestimonialCard';
import CTASection from '@/components/CTASection';
import FadeIn from '@/components/animations/FadeIn';
import RevealText from '@/components/animations/RevealText';
import { projectsData } from '@/lib/projectData';
import { testimonialsData } from '@/lib/testimonials';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function HomePage() {
  // Take first 3 projects for featured grid
  const featuredProjects = projectsData.slice(0, 3);

  return (
    <div className="w-full flex flex-col gap-0">

      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Construction Evolution Scroll Animation */}
      <ScrollTransformation />

      {/* 2. Expertise Section */}
      <section className="py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-2xl mb-16">
            <FadeIn>
              <span className="font-mono text-[10px] text-accent font-bold tracking-widest uppercase mb-2 block">
                // Areas of Competency
              </span>
            </FadeIn>
            <RevealText
              text="Our Core Architectural & Engineering Expertise"
              tag="h2"
              className="font-display font-extrabold text-3xl sm:text-5xl text-primary leading-tight mb-4"
            />
            <FadeIn delay={0.2}>
              <p className="font-sans text-secondary text-sm sm:text-base leading-relaxed">
                From luxury residences to high-rise commercial structures and advanced logistics plants, we deploy bespoke engineering solutions tailored to site metrics.
              </p>
            </FadeIn>
          </div>
          <ServicesGrid />
        </div>
      </section>

      {/* 4. Featured Projects Section */}
      <section className="py-24 bg-white border-y border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <FadeIn>
                <span className="font-mono text-[10px] text-accent font-bold tracking-widest uppercase mb-2 block">
                  // Portfolio Highlights
                </span>
              </FadeIn>
              <RevealText
                text="Featured Architectural Landmark Projects"
                tag="h2"
                className="font-display font-extrabold text-3xl sm:text-5xl text-primary leading-tight mb-4"
              />
              <FadeIn delay={0.2}>
                <p className="font-sans text-secondary text-sm leading-relaxed">
                  Explore how we transform raw blueprint schematics into structural landmarks.
                </p>
              </FadeIn>
            </div>

            <FadeIn delay={0.3}>
              <Link
                href="/projects"
                className="group flex items-center gap-1.5 font-display text-sm font-semibold tracking-wide text-primary hover:text-accent transition-colors duration-200 shrink-0"
              >
                View Portfolio
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </Link>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Construction Process Timeline */}
      <section className="py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-2xl mb-16">
            <FadeIn>
              <span className="font-mono text-[10px] text-accent font-bold tracking-widest uppercase mb-2 block">
                // Critical Path Method
              </span>
            </FadeIn>
            <RevealText
              text="Our Construction Delivery Process"
              tag="h2"
              className="font-display font-extrabold text-3xl sm:text-5xl text-primary leading-tight mb-4"
            />
            <FadeIn delay={0.2}>
              <p className="font-sans text-secondary text-sm sm:text-base leading-relaxed">
                We bridge the design-build gap by maintaining tight controls through all 6 phases of development, ensuring structural safety and financial compliance.
              </p>
            </FadeIn>
          </div>
          <ConstructionTimeline />
        </div>
      </section>

      {/* 6. Statistics Section */}
      <section className="py-24 bg-white border-y border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-2xl mb-16">
            <FadeIn>
              <span className="font-mono text-[10px] text-accent font-bold tracking-widest uppercase mb-2 block">
                // Verified Accomplishments
              </span>
            </FadeIn>
            <RevealText
              text="Our Growth Metrics in Numbers"
              tag="h2"
              className="font-display font-extrabold text-3xl sm:text-5xl text-primary leading-tight mb-4"
            />
          </div>
          <StatsSection />
        </div>
      </section>

      {/* 7. Testimonials Section */}
      <section className="py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-2xl mb-16">
            <FadeIn>
              <span className="font-mono text-[10px] text-accent font-bold tracking-widest uppercase mb-2 block">
                // Executive Appraisals
              </span>
            </FadeIn>
            <RevealText
              text="What Our Commercial Partners Say"
              tag="h2"
              className="font-display font-extrabold text-3xl sm:text-5xl text-primary leading-tight mb-4"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, idx) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                index={idx}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA Section */}
      <section className="py-20 bg-warm-white px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <CTASection />
        </div>
      </section>

    </div>
  );
}
