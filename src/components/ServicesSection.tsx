'use client';

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const services = [
  {
    title: 'Entrenamiento Personal',
    description:
      'Sesiones individuales con entrenadores certificados que diseñan programas específicos para tus objetivos.',
    image: '/service_1.jpeg'
  },
  {
    title: 'Clases Grupales',
    description:
      'Desde yoga hasta HIIT, nuestras clases grupales ofrecen variedad y motivación en un ambiente energético.',
    image: '/service_2.jpeg'
  },
  {
    title: 'CrossFit & Funcional',
    description:
      'Entrena como un atleta con nuestros programas de alta intensidad diseñados para mejorar fuerza y resistencia.',
    image: '/service_3.jpeg'
  },
  {
    title: 'Yoga & Pilates',
    description:
      'Mejora tu flexibilidad, equilibrio y bienestar mental con nuestras clases especializadas.',
    image: '/service_4.jpeg'
  },
  {
    title: 'Nutrición Deportiva',
    description:
      'Planificación nutricional personalizada para maximizar tus resultados y mejorar tu salud integral.',
    image: '/service_5.jpeg'
  },
  {
    title: 'Boxing & Cardio',
    description:
      'Libera estrés mientras quemas calorías con nuestras intensas sesiones de boxeo y cardio.',
    image: '/service_6.jpeg'
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-[#e04f21]/10 rounded-full blur-[120px]" />

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
            Nuestros Servicios
          </span>
          <h2 className="mb-4">Todo Lo Que Necesitas Para Triunfar</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Descubre nuestra amplia gama de servicios diseñados para ayudarte a alcanzar tus
            objetivos, sin importar tu nivel de experiencia.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass glass-hover rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  width={400}
                  height={300}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              </div>
              <div className="p-6">
                <h4 className="mb-3 group-hover:text-[#e04f21] transition-colors">
                  {service.title}
                </h4>
                <p className="text-sm mb-4">{service.description}</p>
                <a
                  href="#pricing"
                  className="inline-flex items-center gap-2 text-[#e04f21] font-semibold text-sm group/btn"
                >
                  Ver Precios
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
