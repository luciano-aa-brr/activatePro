'use client';

import { motion } from 'framer-motion';
import { Smartphone, Calendar, TrendingUp, Users, Award, Bell } from 'lucide-react';
import Image from 'next/image';

const features = [
  {
    icon: Calendar,
    title: 'Reserva de Clases',
    description: 'Reserva tu lugar en clases grupales con un solo tap'
  },
  {
    icon: TrendingUp,
    title: 'Seguimiento de Progreso',
    description: 'Monitorea tus estadísticas y celebra tus logros'
  },
  {
    icon: Users,
    title: 'Comunidad Activa',
    description: 'Conéctate con otros miembros y comparte tu viaje'
  },
  {
    icon: Award,
    title: 'Desafíos y Recompensas',
    description: 'Participa en retos mensuales y gana premios'
  },
  {
    icon: Bell,
    title: 'Notificaciones',
    description: 'Recibe recordatorios de clases y eventos exclusivos'
  }
];

export function AppPromoSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#e04f21]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#e04f21]/5 rounded-full blur-[150px]" />
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
            Nuestra App
          </span>
          <h2 className="mb-4">Tu Gimnasio en Tu Bolsillo</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Descarga la app oficial de Actívate Labranza y lleva tu entrenamiento al siguiente
            nivel. Disponible para iOS y Android.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* App Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative z-10">
              <div className="glass rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#e04f21]/10 rounded-full blur-[80px]" />
                <Image
                  src="/app_1.jpeg"
                  width={500}
                  height={350}
                  alt="Activate Labranza App"
                  className="w-full h-auto rounded-2xl relative z-10"
                  unoptimized
                />
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-10 -right-4 glass rounded-2xl p-4 shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="bg-[#e04f21] p-2 rounded-lg">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-white/60">Calorías Hoy</p>
                  <p className="font-bold">1,240 kcal</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              className="absolute bottom-10 -left-4 glass rounded-2xl p-4 shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="bg-[#e04f21] p-2 rounded-lg">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-white/60">Racha Actual</p>
                  <p className="font-bold">15 días 🔥</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Features & QR */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="bg-[#e04f21]/10 p-3 rounded-xl group-hover:bg-[#e04f21] transition-colors shrink-0">
                    <feature.icon className="w-6 h-6 text-[#e04f21] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h5 className="mb-1">{feature.title}</h5>
                    <p className="text-sm text-white/70">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* QR Code Section */}
            <div className="glass rounded-2xl p-6">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="glass rounded-2xl p-4 bg-white/5">
                  <div className="w-32 h-32 bg-white rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <Smartphone className="w-12 h-12 text-black mx-auto mb-2" />
                      <p className="text-xs text-black font-bold">Escanea aquí</p>
                    </div>
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h5 className="mb-2">Descarga la App</h5>
                  <p className="text-sm text-white/70 mb-4">
                    Escanea el código QR o busca Actívate en tu tienda de aplicaciones
                  </p>
                  <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                    <a
                      href="#"
                      className="bg-black/50 hover:bg-black/70 px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
                    >
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                      </svg>
                      <div className="text-left">
                        <p className="text-xs">Descarga en</p>
                        <p className="text-sm font-semibold">App Store</p>
                      </div>
                    </a>
                    <a
                      href="#"
                      className="bg-black/50 hover:bg-black/70 px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
                    >
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                      </svg>
                      <div className="text-left">
                        <p className="text-xs">Disponible en</p>
                        <p className="text-sm font-semibold">Google Play</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
