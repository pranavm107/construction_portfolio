'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { MessageSquareCode, ArrowUpRight } from 'lucide-react';
import { WHATSAPP_NUMBER } from '@/lib/constants';

export default function CTASection() {
  const message = encodeURIComponent("Hello, I would like to discuss a construction project.");
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  return (
    <section className="w-full py-20 relative overflow-hidden bg-primary text-warm-white rounded-3xl border border-neutral-800">
      
      {/* Background blueprint grid overlay */}
      <div className="absolute inset-0 blueprint-grid opacity-15 pointer-events-none" />
      <div className="absolute inset-0 blueprint-grid-fine opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="px-3.5 py-1 border border-accent/20 bg-accent/5 rounded-full font-mono text-[10px] tracking-widest text-accent uppercase"
        >
          // Build Your Landmark
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display font-black text-4xl sm:text-5xl md:text-6xl tracking-tight leading-tight max-w-2xl select-none"
        >
          Let's Build Something That <span className="text-accent">Lasts</span>.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-sans text-neutral-400 text-sm sm:text-base max-w-lg leading-relaxed select-none mb-4"
        >
          Partner with our elite engineering team to plan, zone, and construct your next tier-one development project.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-2"
        >
          <Link
            href="/contact"
            className="group w-full sm:w-auto px-8 py-3.5 bg-accent text-primary rounded-xl font-display font-bold text-sm tracking-wide shadow-md transition-all duration-300 flex items-center justify-center gap-2"
          >
            Book Consultation
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </Link>
          
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 bg-neutral-900 border border-neutral-800 hover:border-neutral-700 rounded-xl font-display font-bold text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-2"
          >
            <MessageSquareCode className="w-4.5 h-4.5 text-accent" />
            WhatsApp Chat
          </a>
        </motion.div>
      </div>

      {/* Grid ref labels */}
      <div className="absolute top-6 left-6 font-mono text-[8px] text-neutral-600 select-none">
        SHEET NO. S-04 // ELEVATION VIEW
      </div>
    </section>
  );
}
