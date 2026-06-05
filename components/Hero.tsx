'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[650px] bg-warm-white flex items-center justify-center overflow-hidden pt-20">
      
      {/* Background Image Wrapper */}
      <div className="absolute inset-0 w-full h-full z-0 select-none opacity-85">
        <Image
          src="/hero.png"
          alt="AURA Architectural Landmark Rendering"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Dark warm overlay to ensure readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-warm-white via-warm-white/70 to-primary/30" />
      </div>

      {/* Blueprint Grid Overlay */}
      <div className="absolute inset-0 blueprint-grid pointer-events-none z-10 opacity-70" />
      <div className="absolute inset-0 blueprint-grid-fine pointer-events-none z-10 opacity-55" />

      {/* Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col items-start gap-6 mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 border border-accent/20 bg-accent/5 px-3 py-1 rounded-full backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="font-display text-[10px] md:text-[11px] font-bold tracking-widest text-primary uppercase">
            Engineering Excellence & Design
          </span>
        </motion.div>

        <h1 className="font-display font-black text-5xl sm:text-6xl md:text-8xl tracking-tight leading-[0.9] text-primary max-w-4xl select-none">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
            className="block"
          >
            Building
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-neutral-800 to-accent"
          >
            Tomorrow, Today.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-sans text-secondary text-sm sm:text-base md:text-lg max-w-xl leading-relaxed select-none"
        >
          From blueprint to reality, we create structures engineered to stand for generations. Luxury residential, commercial landmarks, and industrial complexes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap items-center gap-4 mt-2"
        >
          <Link
            href="/projects"
            className="group px-6 py-3 bg-primary text-warm-white hover:bg-accent hover:text-primary rounded-xl font-display font-bold text-sm tracking-wide shadow-md transition-all duration-300 flex items-center gap-2"
          >
            View Projects
            <ArrowUpRight className="w-4.5 h-4.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </Link>
          
          <Link
            href="/contact"
            className="px-6 py-3 border border-neutral-300 hover:border-primary rounded-xl font-display font-bold text-sm tracking-wide transition-all duration-300 bg-warm-white/40 backdrop-blur-sm"
          >
            Schedule Consultation
          </Link>
        </motion.div>
      </div>

      {/* Floating coordinates for architectural feel */}
      <div className="absolute bottom-6 left-6 md:left-12 z-20 hidden sm:block font-mono text-[9px] text-neutral-400 select-none">
        <span>{"LAT: 37° 47' 29.74\" N | LON: 122° 25' 9.94\" W | ELEV: 15.2M"}</span>
      </div>
      
      <div className="absolute bottom-6 right-6 md:right-12 z-20 hidden sm:block font-mono text-[9px] text-neutral-400 select-none">
        <span>{"GRID REF: A-19 // SCALE: 1:500"}</span>
      </div>

    </section>
  );
}
