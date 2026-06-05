'use client';

import { Testimonial } from '@/types/testimonial';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

export default function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-5%' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
      className="bg-card border border-neutral-200/50 rounded-2xl p-8 flex flex-col justify-between hover:shadow-lg hover:border-neutral-300 transition-all duration-300 relative h-full"
    >
      <Quote className="w-8 h-8 text-accent/15 absolute right-8 top-8" />
      
      <div>
        {/* Rating Stars */}
        <div className="flex items-center gap-1 mb-6 text-accent">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-current" />
          ))}
        </div>
        
        {/* Review Content */}
        <p className="font-sans text-primary text-sm sm:text-base leading-relaxed italic mb-8 select-none">
          "{testimonial.content}"
        </p>
      </div>

      {/* Author Info */}
      <div className="flex items-center gap-4 pt-6 border-t border-neutral-100">
        <div className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center font-display font-bold text-xs text-primary border border-neutral-300">
          {testimonial.name[0]}
        </div>
        <div>
          <h4 className="font-display font-bold text-sm text-primary">
            {testimonial.name}
          </h4>
          <span className="font-sans text-[11px] text-neutral-400">
            {testimonial.role}, <span className="text-neutral-500 font-medium">{testimonial.company}</span>
          </span>
        </div>
      </div>
    </motion.div>
  );
}
