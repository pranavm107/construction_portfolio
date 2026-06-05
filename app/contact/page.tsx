'use client';

import RevealText from '@/components/animations/RevealText';
import FadeIn from '@/components/animations/FadeIn';
import ContactForm from '@/components/ContactForm';
import { Mail, Phone, MapPin, MessageSquareCode } from 'lucide-react';
import { CONTACT_ADDRESS, CONTACT_EMAIL, CONTACT_PHONE, GOOGLE_MAPS_EMBED_URL, WHATSAPP_NUMBER } from '@/lib/constants';

export default function ContactPage() {
  const message = encodeURIComponent("Hello, I would like to discuss a construction project.");
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  const channels = [
    { label: 'Telephone', val: CONTACT_PHONE, href: `tel:${CONTACT_PHONE}`, icon: Phone },
    { label: 'Direct Email', val: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}`, icon: Mail },
    { label: 'Headquarters', val: CONTACT_ADDRESS, href: '#', icon: MapPin },
  ];

  return (
    <section className="py-32 bg-warm-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Page Header */}
        <div className="max-w-2xl mb-16">
          <FadeIn>
            <span className="font-mono text-[10px] text-accent font-bold tracking-widest uppercase mb-2 block">
              // Feasibility Inquiry
            </span>
          </FadeIn>
          <RevealText
            text="Let's Discuss Your Next Landmark Project"
            tag="h1"
            className="font-display font-black text-4xl sm:text-6xl text-primary leading-[1.1] mb-6"
          />
          <FadeIn delay={0.2}>
            <p className="font-sans text-secondary text-sm sm:text-base leading-relaxed">
              Have a site zoned for development? Connect with our project directors to audit feasibility, budgets, and scheduling parameters.
            </p>
          </FadeIn>
        </div>

        {/* Core Layout Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-start">
          
          {/* Left Column (Contact details, WhatsApp, Maps) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* Direct details */}
            <div className="bg-card border border-neutral-200/50 rounded-2xl p-6 md:p-8 flex flex-col gap-6">
              {channels.map((chan, idx) => {
                const Icon = chan.icon;
                return (
                  <FadeIn key={idx} delay={idx * 0.05} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-warm-white border border-neutral-200/60 flex items-center justify-center text-accent shrink-0">
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="font-display text-[9px] font-bold text-neutral-400 uppercase tracking-widest">
                        {chan.label}
                      </span>
                      <a href={chan.href} className="font-display font-extrabold text-sm text-primary hover:text-accent transition-colors">
                        {chan.val}
                      </a>
                    </div>
                  </FadeIn>
                );
              })}
            </div>

            {/* WhatsApp CTA */}
            <FadeIn delay={0.25} className="bg-primary text-warm-white border border-neutral-800 rounded-2xl p-6 md:p-8 relative overflow-hidden">
              <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none" />
              <div className="relative z-10 flex flex-col items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#25D366]/15 border border-[#25D366]/20 flex items-center justify-center text-[#25D366]">
                  <MessageSquareCode className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-warm-white mb-1">
                    Instant Mobile Channel
                  </h3>
                  <p className="font-sans text-neutral-400 text-xs leading-relaxed mb-4">
                    Skip email threads. Text our direct feasibility desk to check project timelines immediately.
                  </p>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-xl font-display font-bold text-xs uppercase tracking-wider transition-colors"
                  >
                    Open WhatsApp Chat
                  </a>
                </div>
              </div>
            </FadeIn>

          </div>

          {/* Right Column (Form) */}
          <div className="lg:col-span-7">
            <FadeIn delay={0.15}>
              <ContactForm />
            </FadeIn>
          </div>

        </div>

        {/* Google Maps Embed */}
        <FadeIn delay={0.35} className="w-full h-[350px] rounded-2xl overflow-hidden border border-neutral-200 shadow-sm bg-neutral-100">
          <iframe
            src={GOOGLE_MAPS_EMBED_URL}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="AURA Headquarters Location Map"
          />
        </FadeIn>

      </div>
    </section>
  );
}
