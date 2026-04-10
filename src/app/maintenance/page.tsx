'use client';

import { motion } from 'framer-motion';
import { AlertCircle, Phone } from 'lucide-react';

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#e04f21]/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-[#e04f21]/10 rounded-full blur-[120px]" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-2xl w-full text-center"
      >
        {/* Icon */}
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center mb-8"
        >
          <div className="bg-[#e04f21]/20 w-24 h-24 rounded-full flex items-center justify-center">
            <AlertCircle className="w-12 h-12 text-[#e04f21]" />
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl md:text-6xl font-black text-white mb-4"
        >
          En Mantenimiento
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl text-white/80 mb-8 leading-relaxed"
        >
          Estamos realizando mejoras en nuestro sitio para ofrecerte una mejor experiencia. Volvemos
          pronto con cambios emocionantes.
        </motion.p>

        {/* Support Box */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="bg-gradient-to-br from-[#e04f21]/20 to-[#e04f21]/5 border border-[#e04f21]/30 rounded-2xl p-8 mb-8"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Phone className="w-6 h-6 text-[#e04f21]" />
            <h3 className="text-lg font-semibold text-white">¿Necesitas ayuda?</h3>
          </div>
          <p className="text-white/70 mb-4">Ponte en contacto con nosotros:</p>
          <a
            href="tel:+56912345678"
            className="inline-block text-2xl font-bold text-[#e04f21] hover:text-[#c44419] transition-colors"
          >
            +56 9 1234 5678
          </a>
        </motion.div>

        {/* Footer message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-sm text-white/60"
        >
          Gracias por tu paciencia. El equipo de Actívate Pro
        </motion.p>
      </motion.div>
    </div>
  );
}
