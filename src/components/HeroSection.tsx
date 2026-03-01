'use client';

import { motion } from 'motion/react';
import { ArrowRight, Play, Award, Users, Zap } from 'lucide-react';
import { iceland } from '@/fonts';
import Image from 'next/image';

export function HeroSection() {
  const now = new Date();

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/main.jpg"
          width={2400}
          height={1600}
          alt="Gimnasio Actívate Labranza"
          unoptimized
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-2"
          >
            <span className="text-sm font-semibold">Únete a la familia Actívate Pro</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`mb-6 leading-[0.9]! sm:leading-[1]!`}
          >
            <span className={`${iceland.className} text-[#e04f21] text-4xl sm:text-5xl`}>
              ACTIVATE PRO
            </span>
            <br />
            <span className={`${iceland.className} text-4xl sm:text-5xl`}>
              CONSCIENCIA EN MOVIMIENTO ESTE {now.getFullYear()}{' '}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl mb-8 text-white/90"
          >
            Más que un gimnasio, una guía real para superar tus límites. Sin filas, sin
            distracciones; solo tú, tu cuerpo y coaches enfocados en potenciar tu mejor versión.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <a
              href="#pricing"
              className="group bg-[#e04f21] hover:bg-[#c44419] px-8 py-4 rounded-xl font-semibold inline-flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(224,79,33,0.5)]"
            >
              Ver planes {now.getFullYear()}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-[#e04f21] rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
