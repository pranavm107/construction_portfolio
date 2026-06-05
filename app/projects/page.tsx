'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '@/lib/projectData';
import ProjectCard from '@/components/ProjectCard';
import RevealText from '@/components/animations/RevealText';
import FadeIn from '@/components/animations/FadeIn';

const categories = ['All', 'Residential', 'Commercial', 'Industrial', 'Infrastructure'];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter projects based on selection
  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === selectedCategory);

  return (
    <section className="py-32 bg-warm-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Page Header */}
        <div className="max-w-2xl mb-16">
          <FadeIn>
            <span className="font-mono text-[10px] text-accent font-bold tracking-widest uppercase mb-2 block">
              // Execution Portfolio
            </span>
          </FadeIn>
          <RevealText
            text="Building Architectural and Civil Masterpieces"
            tag="h1"
            className="font-display font-black text-4xl sm:text-6xl text-primary leading-[1.1] mb-6"
          />
          <FadeIn delay={0.2}>
            <p className="font-sans text-secondary text-sm sm:text-base leading-relaxed">
              Explore our comprehensive portfolio across commercial structures, luxury villas, and complex infrastructure developments.
            </p>
          </FadeIn>
        </div>

        {/* Category Filters */}
        <FadeIn delay={0.3} className="mb-12">
          <div className="flex flex-wrap items-center gap-3 border-b border-neutral-200/60 pb-6">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2 rounded-xl font-display font-semibold text-xs transition-all duration-300 relative overflow-hidden cursor-pointer ${
                    isActive
                      ? 'bg-primary text-warm-white shadow-md'
                      : 'bg-white text-secondary hover:text-primary border border-neutral-200/50'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </FadeIn>

        {/* Grid Layout */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="h-full"
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 bg-white border border-neutral-200/50 rounded-2xl">
            <p className="font-display text-neutral-400 text-sm uppercase font-bold tracking-wider">
              No Projects Under This Category
            </p>
          </div>
        )}

      </div>
    </section>
  );
}
