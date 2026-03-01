'use client';

import { Dumbbell, Instagram, MessageCircle, Phone, Mail, MapPin } from 'lucide-react';

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
                <a
                  href="/#services"
                  className="text-white/70 hover:text-[#e04f21] transition-colors"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="/#pricing"
                  className="text-white/70 hover:text-[#e04f21] transition-colors"
                >
                  Precios
                </a>
              </li>
              <li>
                <a
                  href="/horarios"
                  className="text-white/70 hover:text-[#e04f21] transition-colors"
                >
                  Horarios
                </a>
              </li>
              <li>
                <a href="/#staff" className="text-white/70 hover:text-[#e04f21] transition-colors">
                  Entrenadores
                </a>
              </li>
              <li>
                <a
                  href="/#gallery"
                  className="text-white/70 hover:text-[#e04f21] transition-colors"
                >
                  Galería
                </a>
              </li>
              <li>
                <a href="/#blog" className="text-white/70 hover:text-[#e04f21] transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/contacto"
                  className="text-white/70 hover:text-[#e04f21] transition-colors"
                >
                  Contacto
                </a>
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
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <p>© {currentYear} Actívate Labranza Gym. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#e04f21] transition-colors">
              Privacidad
            </a>
            <a href="#" className="hover:text-[#e04f21] transition-colors">
              Términos
            </a>
            <a href="#" className="hover:text-[#e04f21] transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
