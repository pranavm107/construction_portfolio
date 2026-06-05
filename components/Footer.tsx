'use client';

import Link from 'next/link';
import { ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';
import { CONTACT_ADDRESS, CONTACT_EMAIL, CONTACT_PHONE, SITE_NAME } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-warm-white pt-20 pb-10 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        
        {/* Brand Block */}
        <div className="md:col-span-2 flex flex-col gap-6">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="w-8 h-8 bg-warm-white text-primary flex items-center justify-center font-display font-bold text-sm tracking-wider rounded-lg group-hover:bg-accent group-hover:text-primary transition-colors duration-300">
              A
            </span>
            <span className="font-display font-extrabold text-lg tracking-wider text-warm-white group-hover:text-accent transition-colors duration-300">
              AURA
            </span>
          </Link>
          <p className="font-sans text-neutral-400 max-w-sm text-sm leading-relaxed">
            From blueprint to reality, we create structures engineered to stand for generations. Luxury residential estates, commercial towers, and industrial hubs.
          </p>
          <div className="flex items-center gap-4 mt-2">
            <a href="#" className="w-9 h-9 rounded-lg border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-accent hover:border-accent transition-all duration-300" aria-label="LinkedIn">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="#" className="w-9 h-9 rounded-lg border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-accent hover:border-accent transition-all duration-300" aria-label="Instagram">
              <svg className="w-4 h-4 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a href="#" className="w-9 h-9 rounded-lg border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-accent hover:border-accent transition-all duration-300" aria-label="YouTube">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Links Column */}
        <div className="flex flex-col gap-4">
          <h4 className="font-display font-bold text-sm uppercase tracking-widest text-accent">Navigation</h4>
          <ul className="flex flex-col gap-2.5 font-sans text-sm text-neutral-400">
            <li><Link href="/projects" className="hover:text-warm-white transition-colors">Projects Portfolio</Link></li>
            <li><Link href="/services" className="hover:text-warm-white transition-colors">Our Services</Link></li>
            <li><Link href="/about" className="hover:text-warm-white transition-colors">About Company</Link></li>
            <li><Link href="/investment" className="hover:text-warm-white transition-colors">Investment Portal</Link></li>
            <li><Link href="/contact" className="hover:text-warm-white transition-colors">Contact & Feasibility</Link></li>
          </ul>
        </div>

        {/* Office Contact Column */}
        <div className="flex flex-col gap-4">
          <h4 className="font-display font-bold text-sm uppercase tracking-widest text-accent">Head Office</h4>
          <ul className="flex flex-col gap-3.5 font-sans text-sm text-neutral-400">
            <li className="flex gap-2">
              <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              <span>{CONTACT_ADDRESS}</span>
            </li>
            <li className="flex gap-2 items-center">
              <Phone className="w-4 h-4 text-accent shrink-0" />
              <a href={`tel:${CONTACT_PHONE}`} className="hover:text-warm-white transition-colors">{CONTACT_PHONE}</a>
            </li>
            <li className="flex gap-2 items-center">
              <Mail className="w-4 h-4 text-accent shrink-0" />
              <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-warm-white transition-colors">{CONTACT_EMAIL}</a>
            </li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4 font-sans text-xs text-neutral-500">
        <p>© {currentYear} {SITE_NAME}. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-neutral-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-neutral-400 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-neutral-400 transition-colors">Zoning Disclaimer</a>
        </div>
      </div>
    </footer>
  );
}
