'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X, Dumbbell } from 'lucide-react';
import Link from 'next/link';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Información', href: '/' },
    // { label: 'Servicios', href: '/#services' },
    { label: 'Planes', href: '/#pricing' },
    { label: 'Comparativa', href: '/#plan-comparison' },
    { label: 'Horarios', href: '/horarios' },
    // { label: 'Entrenadores', href: '/#staff' },
    // { label: 'Galería', href: '/#gallery' },
    // { label: 'Blog', href: '/#blog' },
    { label: 'Contacto', href: '/contacto' }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 py-5 backdrop-blur-sm border-b border-[var(--glass-border)] ${isMobileMenuOpen ? 'h-full' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-[#e04f21] p-2 rounded-lg group-hover:scale-110 transition-transform">
              <Dumbbell className="w-6 h-6" />
            </div>
            <span className="font-black text-xl tracking-tight">
              ACTÍVA<span className="text-[#e04f21]">TE</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-semibold hover:text-[#e04f21] transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#e04f21] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 bg-black/90 backdrop-blur-xl border border-[var(--glass-border)] rounded-xl p-4"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-3 font-semibold hover:text-[#e04f21] transition-colors border-b border-white/10 last:border-0"
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
}
