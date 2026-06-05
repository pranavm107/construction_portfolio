'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin, Minimize2, Calendar } from 'lucide-react';
import { Project } from '@/types/project';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="group bg-card border border-neutral-200/50 rounded-2xl overflow-hidden hover:shadow-xl hover:border-neutral-300 transition-all duration-300 flex flex-col h-full"
    >
      {/* Project Image & Overlay */}
      <div className="relative h-64 w-full overflow-hidden bg-neutral-100">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-tr from-neutral-200 to-neutral-50 blueprint-grid" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent opacity-60 z-10" />
      </div>

      {/* Project Meta Information */}
      <div className="p-6 flex flex-col justify-between flex-grow gap-4">
        <div>
          <span className="font-mono text-[10px] text-accent font-bold tracking-widest uppercase mb-1.5 block">
            {project.category}
          </span>
          <h3 className="font-display font-bold text-xl text-primary mb-3 group-hover:text-accent transition-colors duration-200">
            {project.title}
          </h3>
          <p className="font-sans text-secondary text-xs leading-relaxed line-clamp-2 mb-4">
            {project.description}
          </p>

          <div className="grid grid-cols-3 gap-2 border-t border-neutral-100 pt-4 font-mono text-[10px] text-neutral-400">
            <div className="flex flex-col gap-0.5">
              <span className="text-neutral-500 uppercase tracking-wider flex items-center gap-1">
                <MapPin className="w-3 h-3 text-accent" /> LOC
              </span>
              <span className="text-primary truncate">{project.location.split(',')[0]}</span>
            </div>
            
            <div className="flex flex-col gap-0.5">
              <span className="text-neutral-500 uppercase tracking-wider flex items-center gap-1">
                <Minimize2 className="w-3 h-3 text-accent" /> AREA
              </span>
              <span className="text-primary truncate">{project.area}</span>
            </div>
            
            <div className="flex flex-col gap-0.5">
              <span className="text-neutral-500 uppercase tracking-wider flex items-center gap-1">
                <Calendar className="w-3 h-3 text-accent" /> YEAR
              </span>
              <span className="text-primary truncate">{project.completionYear}</span>
            </div>
          </div>
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="w-full py-3 border border-neutral-200 group-hover:border-primary rounded-xl font-display font-semibold text-xs text-center text-primary group-hover:bg-primary group-hover:text-warm-white transition-all duration-300 flex items-center justify-center gap-1.5 mt-2"
        >
          View Case Study
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </motion.div>
  );
}
