import { projectsData } from '@/lib/projectData';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, MapPin, DollarSign, Clock, LayoutGrid, Hammer, CheckSquare } from 'lucide-react';

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const specs = [
    { label: 'Client Partner', val: project.client, icon: CheckSquare },
    { label: 'Project Budget', val: project.budget, icon: DollarSign },
    { label: 'Construction Span', val: project.duration, icon: Clock },
    { label: 'Spatial Volume', val: project.area, icon: LayoutGrid },
  ];

  return (
    <article className="min-h-screen bg-warm-white pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Back Link */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 font-display text-xs font-bold text-neutral-400 hover:text-primary transition-colors mb-8 group"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1 duration-200" />
          Back to Projects
        </Link>

        {/* Title & Header info */}
        <header className="mb-12">
          <span className="font-mono text-[10px] text-accent font-bold tracking-widest uppercase mb-2 block">
            // Category: {project.category}
          </span>
          <h1 className="font-display font-black text-4xl sm:text-6xl text-primary leading-tight mb-4">
            {project.title}
          </h1>
          <p className="font-sans text-secondary text-sm sm:text-base flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-accent" />
            {project.location}
          </p>
        </header>

        {/* Project Specs Table */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-card border border-neutral-200/50 rounded-2xl p-6 md:p-8 mb-16 shadow-sm">
          {specs.map((spec, i) => {
            const Icon = spec.icon;
            return (
              <div key={i} className="flex flex-col gap-1.5">
                <span className="font-display text-[9px] font-bold text-neutral-400 uppercase tracking-widest flex items-center gap-1">
                  <Icon className="w-3 h-3 text-accent" /> {spec.label}
                </span>
                <span className="font-display font-extrabold text-sm md:text-base text-primary">
                  {spec.val}
                </span>
              </div>
            );
          })}
        </section>

        {/* Narrative progression */}
        <div className="flex flex-col gap-16">
          
          {/* Phase 1: Blueprint */}
          <section className="border-b border-neutral-200/60 pb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1">
                <span className="font-mono text-[10px] text-accent font-bold uppercase tracking-wider block mb-1">
                  // Phase 01
                </span>
                <h3 className="font-display font-extrabold text-2xl text-primary mb-3">
                  Blueprint & Layout Schematics
                </h3>
                <p className="font-sans text-secondary text-xs leading-relaxed">
                  Before concrete is poured, our structural engineers model every column, rebar spacing, and spatial layout in high-fidelity BIM environments.
                </p>
              </div>
              <div className="md:col-span-2 aspect-[16/9] w-full bg-neutral-900 rounded-2xl blueprint-grid relative border border-accent/20 flex flex-col items-center justify-center p-6 text-accent">
                <span className="font-mono text-[10px] tracking-widest uppercase mb-1">
                  Blueprint Schematic Overlays
                </span>
                <span className="font-sans text-xs text-neutral-500 text-center max-w-xs leading-relaxed">
                  [Vector wireframe structural alignment checks verified and locked]
                </span>
              </div>
            </div>
          </section>

          {/* Phase 2: Progress */}
          <section className="border-b border-neutral-200/60 pb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2 aspect-[16/9] w-full bg-neutral-200 rounded-2xl relative overflow-hidden border border-neutral-300 flex flex-col items-center justify-center p-6">
                <Hammer className="w-8 h-8 text-neutral-400 mb-2 animate-bounce" />
                <span className="font-display text-xs font-bold text-neutral-500 uppercase tracking-widest">
                  Site Preparation & Foundation Work
                </span>
                <span className="font-sans text-[10px] text-neutral-400 mt-1">
                  Excavation and subgrade reinforced steel beams in place.
                </span>
              </div>
              <div className="md:col-span-1">
                <span className="font-mono text-[10px] text-accent font-bold uppercase tracking-wider block mb-1">
                  // Phase 02
                </span>
                <h3 className="font-display font-extrabold text-2xl text-primary mb-3">
                  Construction & On-site Progress
                </h3>
                <p className="font-sans text-secondary text-xs leading-relaxed">
                  Site logistics, structural steel framing, floor slab pouring, and services integration executed under tight scheduling controls.
                </p>
              </div>
            </div>
          </section>

          {/* Phase 3: Completed building details */}
          <section className="pb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1">
                <span className="font-mono text-[10px] text-accent font-bold uppercase tracking-wider block mb-1">
                  // Phase 03
                </span>
                <h3 className="font-display font-extrabold text-2xl text-primary mb-3">
                  Landmark Handoff & QA
                </h3>
                <p className="font-sans text-secondary text-xs leading-relaxed">
                  Final building certification, thermal checks, interior handover, and client occupancy walk-through successfully complete.
                </p>
              </div>
              <div className="md:col-span-2 aspect-[16/9] w-full bg-neutral-800 rounded-2xl relative overflow-hidden border border-neutral-700 flex flex-col items-center justify-center p-6 text-warm-white">
                <span className="font-display text-sm font-black text-accent uppercase tracking-widest">
                  Project Fully Handed Over
                </span>
                <span className="font-sans text-[10px] text-neutral-400 mt-1">
                  100% QA Inspection passed. Occupancy Certificate signed.
                </span>
              </div>
            </div>
          </section>

        </div>

      </div>
    </article>
  );
}
