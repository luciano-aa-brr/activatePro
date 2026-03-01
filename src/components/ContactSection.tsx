'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Instagram, MessageCircle, Clock } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[300px] bg-[#e04f21]/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#e04f21] font-semibold tracking-wide uppercase text-sm mb-2 block">
            Ubicación y Contacto
          </span>
          <h2 className="mb-4">Visítanos o Contáctanos</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Estamos ubicados en el corazón de la ciudad. Ven a conocernos o escríbenos para
            cualquier consulta.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl overflow-hidden h-[400px] relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#e04f21]/20 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-[#e04f21] mx-auto mb-4" />
                <h4 className="mb-2">Encuéntranos Aquí</h4>
                <p className="text-white/70">Av. Principal 123, Ciudad</p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 bg-[#e04f21] hover:bg-[#c44419] px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                >
                  Abrir en Google Maps
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Address */}
            <div className="glass glass-hover rounded-2xl p-6 transition-all duration-300 hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="bg-[#e04f21]/10 p-3 rounded-xl shrink-0">
                  <MapPin className="w-6 h-6 text-[#e04f21]" />
                </div>
                <div className="flex-1">
                  <h5 className="mb-2">Dirección</h5>
                  <p className="text-white/70">
                    Av. Principal 123, Col. Centro
                    <br />
                    Ciudad, Estado, CP 12345
                    <br />
                    Edificio Actívate, Planta Baja
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="glass glass-hover rounded-2xl p-6 transition-all duration-300 hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="bg-[#e04f21]/10 p-3 rounded-xl shrink-0">
                  <Phone className="w-6 h-6 text-[#e04f21]" />
                </div>
                <div className="flex-1">
                  <h5 className="mb-2">Teléfono</h5>
                  <a
                    href="tel:+525512345678"
                    className="text-white/70 hover:text-[#e04f21] transition-colors"
                  >
                    +52 55 1234 5678
                  </a>
                  <p className="text-sm text-white/50 mt-1">Lun - Vie: 8:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="glass glass-hover rounded-2xl p-6 transition-all duration-300 hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="bg-[#e04f21]/10 p-3 rounded-xl shrink-0">
                  <Mail className="w-6 h-6 text-[#e04f21]" />
                </div>
                <div className="flex-1">
                  <h5 className="mb-2">Email</h5>
                  <a
                    href="mailto:info@ironfit.com"
                    className="text-white/70 hover:text-[#e04f21] transition-colors"
                  >
                    activatelabranza@gmail.com
                  </a>
                  <p className="text-sm text-white/50 mt-1">Respondemos en menos de 24h</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Social Media & Quick Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 grid md:grid-cols-2 gap-6"
        >
          {/* Social Media */}
          <div className="glass rounded-2xl p-8">
            <h4 className="mb-6">Síguenos en Redes</h4>
            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://www.instagram.com/activatelabranza"
                target="_blank"
                rel="noopener noreferrer"
                className="group glass-hover rounded-xl p-4 flex flex-col items-center gap-3 transition-all duration-300 hover:scale-105"
              >
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-xl group-hover:scale-110 transition-transform">
                  <Instagram className="w-6 h-6" />
                </div>
                <div className="text-center">
                  <p className="font-semibold">Instagram</p>
                  <p className="text-sm text-white/60">@activatelabranza</p>
                </div>
              </a>

              <a
                href="https://wa.me/525512345678"
                target="_blank"
                rel="noopener noreferrer"
                className="group glass-hover rounded-xl p-4 flex flex-col items-center gap-3 transition-all duration-300 hover:scale-105"
              >
                <div className="bg-[#25D366] p-3 rounded-xl group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div className="text-center">
                  <p className="font-semibold">WhatsApp</p>
                  <p className="text-sm text-white/60">Chatea ahora</p>
                </div>
              </a>
            </div>
          </div>

          {/* Business Hours */}
          <div className="glass rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-8 h-8 text-[#e04f21]" />
              <h4>Horarios de Atención</h4>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 glass-hover rounded-lg">
                <span className="font-semibold">Recepción</span>
                <span className="text-[#e04f21]">8:00 AM - 10:00 PM</span>
              </div>
              <div className="flex justify-between items-center p-3 glass-hover rounded-lg">
                <span className="font-semibold">Entrenadores</span>
                <span className="text-[#e04f21]">6:00 AM - 9:00 PM</span>
              </div>
              <div className="flex justify-between items-center p-3 glass-hover rounded-lg">
                <span className="font-semibold">Nutrición</span>
                <span className="text-[#e04f21]">Con cita previa</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
