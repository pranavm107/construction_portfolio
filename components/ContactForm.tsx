'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: 'Commercial',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API request
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-card border border-neutral-200 rounded-2xl p-10 text-center flex flex-col items-center justify-center gap-4 shadow-lg min-h-[400px]"
      >
        <div className="w-16 h-16 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-2">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="font-display font-extrabold text-2xl text-primary">
          Consultation Requested
        </h3>
        <p className="font-sans text-secondary text-sm leading-relaxed max-w-sm">
          Thank you, <strong>{formData.name}</strong>. An engineering project manager will review your submission and reach out within 24 hours.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', phone: '', category: 'Commercial', message: '' });
          }}
          className="mt-4 px-6 py-2.5 bg-primary text-warm-white hover:bg-accent hover:text-primary rounded-xl font-display font-bold text-xs uppercase tracking-wider transition-colors duration-300"
        >
          Submit Another Request
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-card border border-neutral-200/50 rounded-2xl p-8 md:p-10 shadow-md">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        
        {/* Name input */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="font-display font-bold text-[10px] text-neutral-400 uppercase tracking-widest">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Arjun Kumar"
            className="w-full bg-warm-white/50 border border-neutral-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent focus:bg-white transition-all duration-200"
          />
        </div>

        {/* Email input */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="font-display font-bold text-[10px] text-neutral-400 uppercase tracking-widest">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. arjun@example.com"
            className="w-full bg-warm-white/50 border border-neutral-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent focus:bg-white transition-all duration-200"
          />
        </div>

        {/* Phone input */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className="font-display font-bold text-[10px] text-neutral-400 uppercase tracking-widest">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. +91 63826 75859"
            className="w-full bg-warm-white/50 border border-neutral-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent focus:bg-white transition-all duration-200"
          />
        </div>

        {/* Category input */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="category" className="font-display font-bold text-[10px] text-neutral-400 uppercase tracking-widest">
            Project Category
          </label>
          <div className="relative">
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full bg-warm-white/50 border border-neutral-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent focus:bg-white appearance-none transition-all duration-200"
            >
              <option value="Residential">Residential Construction</option>
              <option value="Commercial">Commercial Buildings</option>
              <option value="Industrial">Industrial Projects</option>
              <option value="Renovation">Renovation & Remodeling</option>
              <option value="Architectural">Architectural Planning</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-neutral-500">
              <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Message input */}
      <div className="flex flex-col gap-1.5 mb-8">
        <label htmlFor="message" className="font-display font-bold text-[10px] text-neutral-400 uppercase tracking-widest">
          Project Brief / Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Describe your site details, approximate scope, and schedule goals..."
          className="w-full bg-warm-white/50 border border-neutral-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent focus:bg-white transition-all duration-200 resize-y"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 bg-primary text-warm-white hover:bg-accent hover:text-primary disabled:bg-neutral-300 disabled:text-neutral-500 rounded-xl font-display font-bold text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-2 shadow-md cursor-pointer"
      >
        {loading ? (
          <>
            <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            Submit Inquiry
            <Send className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
}
