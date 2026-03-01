'use client';

import { motion } from 'framer-motion';
import { Heart, Target, Trophy, Users } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Pasión por el Fitness',
    description:
      'Vivimos y respiramos el mundo del fitness. Nuestro compromiso es inspirarte cada día a dar lo mejor de ti.'
  },
  {
    icon: Target,
    title: 'Objetivos Claros',
    description:
      'Te ayudamos a definir metas realistas y alcanzables. Con un plan personalizado, cada meta está a tu alcance.'
  },
  {
    icon: Trophy,
    title: 'Resultados Comprobados',
    description:
      'Nuestra metodología ha transformado miles de vidas. Los resultados hablan por sí solos.'
  },
  {
    icon: Users,
    title: 'Comunidad Fuerte',
    description:
      'Más que un gimnasio, somos una familia. Aquí encontrarás apoyo, motivación y amistades duraderas.'
  }
];

export function ValuesSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#e04f21]/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#e04f21]/5 rounded-full blur-[120px]" />

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
            Nuestros Valores
          </span>
          <h2 className="mb-4">Lo Que Nos Define</h2>
          <p className="text-lg max-w-2xl mx-auto">
            En Actívate, nuestra filosofía va más allá del entrenamiento físico. Creemos en el
            desarrollo integral de cada persona.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass glass-hover rounded-2xl p-6 group cursor-pointer transition-all duration-300 hover:scale-105"
            >
              <div className="bg-[#e04f21]/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#e04f21] transition-colors">
                <value.icon className="w-7 h-7 text-[#e04f21] group-hover:text-white transition-colors" />
              </div>
              <h4 className="mb-3">{value.title}</h4>
              <p className="text-sm">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Community Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 glass rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#e04f21]/5 rounded-full blur-[80px]" />
          <div className="relative z-10">
            <div className="max-w-3xl">
              <h3 className="mb-4">Únete a Nuestra Comunidad</h3>
              <p className="text-lg mb-6">
                En Actívate no solo entrenas, te conviertes en parte de algo más grande. Nuestra
                comunidad está formada por personas apasionadas que se motivan mutuamente para
                alcanzar nuevas alturas. Eventos exclusivos, desafíos mensuales y un ambiente donde
                todos somos familia.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="glass rounded-xl px-6 py-3">
                  <span className="text-2xl font-black text-[#e04f21]">50+</span>
                  <p className="text-sm text-white/70 mt-1">Clases Semanales</p>
                </div>
                <div className="glass rounded-xl px-6 py-3">
                  <span className="text-2xl font-black text-[#e04f21]">24/7</span>
                  <p className="text-sm text-white/70 mt-1">Acceso Total</p>
                </div>
                <div className="glass rounded-xl px-6 py-3">
                  <span className="text-2xl font-black text-[#e04f21]">12+</span>
                  <p className="text-sm text-white/70 mt-1">Entrenadores Certificados</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
