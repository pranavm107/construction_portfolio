'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', href: '/projects' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Investment', href: '/investment' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className={`glass rounded-2xl flex items-center justify-between px-6 py-3 transition-all duration-300 ${
          scrolled ? 'shadow-md border-neutral-200/50' : 'border-transparent bg-transparent backdrop-blur-none shadow-none'
        }`}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="w-8 h-8 bg-primary text-warm-white flex items-center justify-center font-display font-bold text-sm tracking-wider rounded-lg border border-accent/20 group-hover:bg-accent group-hover:text-primary transition-colors duration-300">
              A
            </span>
            <span className="font-display font-extrabold text-lg tracking-wider text-primary group-hover:text-accent transition-colors duration-300">
              AURA
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative font-sans text-sm font-medium tracking-wide text-secondary hover:text-primary transition-colors duration-200 py-1 group"
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 h-[1.5px] bg-accent transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/contact"
              className="group flex items-center gap-1.5 font-display text-sm font-semibold tracking-wide text-primary hover:text-accent transition-colors duration-200"
            >
              Consultation
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-1 text-primary focus:outline-none"
            aria-label="Toggle navigation"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-warm-white border-b border-neutral-200/50 shadow-lg overflow-hidden absolute top-full left-0 w-full z-40"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-display text-lg font-bold text-primary hover:text-accent transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-px bg-neutral-200/50 my-2" />
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full py-3 bg-primary text-warm-white hover:bg-accent hover:text-primary font-display font-bold text-center rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                Schedule Consultation
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
