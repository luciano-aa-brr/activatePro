'use client';

import { motion } from 'framer-motion';
import { Instagram, Award } from 'lucide-react';
import Image from 'next/image';

const trainers = [
  {
    name: 'Carlos Mendoza',
    role: 'Director y Entrenador Principal',
    image: '/staff_1.jpeg',
    message:
      'Mi misión es ayudarte a descubrir tu máximo potencial. Con 15 años de experiencia, he aprendido que la verdadera transformación comienza en la mente.',
    instagram: '@carlosmendoza_fit',
    specialties: ['Fuerza', 'Hipertrofia', 'CrossFit']
  },
  {
    name: 'María Torres',
    role: 'Especialista en Nutrición',
    image: '/staff_2.jpeg',
    message:
      'La nutrición es la base de todo cambio real. Te enseñaré a comer inteligentemente sin renunciar al sabor ni a tus comidas favoritas.',
    instagram: '@mariatorres_nutrition',
    specialties: ['Nutrición', 'Pérdida de Peso', 'Rendimiento']
  },
  {
    name: 'Diego Ramírez',
    role: 'Entrenador de CrossFit & HIIT',
    image: '/staff_3.jpeg',
    message:
      'El CrossFit cambió mi vida y sé que puede cambiar la tuya. Te llevaré más allá de tus límites con seguridad y motivación constante.',
    instagram: '@diego_crossfit',
    specialties: ['CrossFit', 'HIIT', 'Movilidad']
  },
  {
    name: 'Laura Sánchez',
    role: 'Instructora de Yoga & Pilates',
    image: '/staff_4.jpeg',
    message:
      'El equilibrio entre cuerpo y mente es esencial. En mis clases encontrarás paz, fuerza y flexibilidad en perfecta armonía.',
    instagram: '@laura_yogaflow',
    specialties: ['Yoga', 'Pilates', 'Mindfulness']
  }
];

export function StaffSection() {
  return (
    <section id="staff" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-40 left-10 w-72 h-72 bg-[#e04f21]/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-[#e04f21]/10 rounded-full blur-[120px]" />
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
            Nuestro Equipo
          </span>
          <h2 className="mb-4">Conoce a Tus Entrenadores</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Un equipo de profesionales certificados y apasionados, dedicados a guiarte en cada paso
            de tu transformación.
          </p>
        </motion.div>

        {/* Trainers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.map((trainer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass glass-hover rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-105"
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={trainer.image}
                  width={290}
                  height={320}
                  alt={trainer.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

                {/* Instagram Overlay */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a
                    href={`https://instagram.com/${trainer.instagram.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#e04f21] p-2 rounded-full hover:bg-[#c44419] transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>

                {/* Name and Role */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h5 className="mb-1">{trainer.name}</h5>
                  <p className="text-sm text-[#e04f21]">{trainer.role}</p>
                </div>
              </div>

              <div className="p-4">
                <p className="text-sm text-white/80 mb-4 italic">{trainer.message}</p>

                {/* Specialties */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {trainer.specialties.map((specialty, i) => (
                    <span
                      key={i}
                      className="bg-[#e04f21]/10 text-[#e04f21] px-3 py-1 rounded-full text-xs font-semibold"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>

                {/* Instagram Handle */}
                <a
                  href={`https://instagram.com/${trainer.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 hover:text-[#e04f21] transition-colors flex items-center gap-2"
                >
                  <Instagram className="w-4 h-4" />
                  {trainer.instagram}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 glass rounded-2xl p-8 text-center"
        >
          <Award className="w-12 h-12 text-[#e04f21] mx-auto mb-4" />
          <h4 className="mb-4">Certificaciones y Experiencia</h4>
          <p className="max-w-3xl mx-auto mb-6">
            Todos nuestros entrenadores cuentan con certificaciones internacionales y continúan su
            formación constantemente para ofrecerte los mejores métodos de entrenamiento basados en
            ciencia.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="glass rounded-lg px-4 py-2">NASM Certified</span>
            <span className="glass rounded-lg px-4 py-2">CrossFit Level 2</span>
            <span className="glass rounded-lg px-4 py-2">Yoga Alliance RYT-200</span>
            <span className="glass rounded-lg px-4 py-2">Nutrición Deportiva</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
