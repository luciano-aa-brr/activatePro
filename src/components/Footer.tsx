'use client';

import { Dumbbell, Instagram, MessageCircle, Phone, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-[#e04f21] p-2 rounded-lg">
                <Dumbbell className="w-6 h-6" />
              </div>
              <span className="font-black text-xl tracking-tight">
                ACTIVA<span className="text-[#e04f21]">TE</span>
              </span>
            </div>
            <p className="text-white/70 text-sm mb-6">
              Transformando vidas a través del fitness. Tu gimnasio de confianza en el corazón de la
              ciudad desde 2009.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/activatelabranza"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 hover:bg-[#e04f21] p-2 rounded-lg transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/525512345678"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 hover:bg-[#25D366] p-2 rounded-lg transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h6 className="mb-4 text-[#e04f21]">Enlaces Rápidos</h6>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/#services"
                  className="text-white/70 hover:text-[#e04f21] transition-colors"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  href="/#pricing"
                  className="text-white/70 hover:text-[#e04f21] transition-colors"
                >
                  Precios
                </Link>
              </li>
              <li>
                <Link
                  href="/horarios"
                  className="text-white/70 hover:text-[#e04f21] transition-colors"
                >
                  Horarios
                </Link>
              </li>
              <li>
                <Link
                  href="/#staff"
                  className="text-white/70 hover:text-[#e04f21] transition-colors"
                >
                  Entrenadores
                </Link>
              </li>
              <li>
                <Link
                  href="/#gallery"
                  className="text-white/70 hover:text-[#e04f21] transition-colors"
                >
                  Galería
                </Link>
              </li>
              <li>
                <Link
                  href="/#blog"
                  className="text-white/70 hover:text-[#e04f21] transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="text-white/70 hover:text-[#e04f21] transition-colors"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h6 className="mb-4 text-[#e04f21]">Sobre Nosotros</h6>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-white/70 hover:text-[#e04f21] transition-colors">
                  Nuestra Historia
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-[#e04f21] transition-colors">
                  Misión y Visión
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-[#e04f21] transition-colors">
                  Testimonios
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-[#e04f21] transition-colors">
                  Trabaja Con Nosotros
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-[#e04f21] transition-colors">
                  Políticas de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-[#e04f21] transition-colors">
                  Términos y Condiciones
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h6 className="mb-4 text-[#e04f21]">Contacto</h6>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#e04f21] shrink-0 mt-0.5" />
                <span className="text-white/70">
                  Av. Principal 123
                  <br />
                  Ciudad, Estado CP 12345
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#e04f21] shrink-0 mt-0.5" />
                <a
                  href="tel:+525512345678"
                  className="text-white/70 hover:text-[#e04f21] transition-colors"
                >
                  +52 55 1234 5678
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-[#e04f21] shrink-0 mt-0.5" />
                <a
                  href="https://wa.me/525512345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-[#e04f21] transition-colors"
                >
                  WhatsApp: +52 55 1234 5678
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#e04f21] shrink-0 mt-0.5" />
                <a
                  href="mailto:info@ironfit.com"
                  className="text-white/70 hover:text-[#e04f21] transition-colors"
                >
                  activate@activatelabranza.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright Original */}
          <p className="text-sm text-gray-500 font-medium">
            © 2026 Actívate Labranza. Todos los derechos reservados.
          </p>

          {/* SELLO KOALINK: COLABORADOR TECNOLÓGICO (VERSIÓN CÁPSULA) */}

          <div className="group flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/5 hover:border-[#e04f21]/30 transition-all duration-500 cursor-default">
            <Link href="https://koalink.cl" target="_blank" className="flex items-center gap-2">
              <div className="flex flex-col items-end leading-tight">
                <span className="text-[9px] uppercase tracking-[0.15em] text-gray-500 group-hover:text-gray-400 transition-colors">
                  Colaborador Tecnológico
                </span>
                <span className="text-[7px] uppercase tracking-[0.1em] text-[#e04f21]/60 font-bold group-hover:text-[#e04f21] transition-colors">
                  Infraestructura & AI
                </span>
              </div>

              <div className="w-px h-4 bg-white/10 group-hover:bg-[#e04f21]/40 transition-colors" />

              <span className="font-black tracking-tighter text-xs text-white/80 group-hover:text-white transition-colors uppercase">
                KOA<span className="text-[#e04f21]">LINK</span>
              </span>

              {/* El punto que pulsa (Sello de sitio activo/optimizado) */}
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e04f21] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e04f21]"></span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
