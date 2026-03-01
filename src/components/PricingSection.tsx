'use client';

import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { PlanDialog } from './PlanDialog';

const plans = [
  {
    name: 'Open Gym',
    price: '26.990',
    period: 'mes',
    description: 'Este plan es perfecto para tí si:',
    features: [
      'Ya tienes experiencia y una rutina definida',
      'Valoras la flexibilidad para entrenar sin horarios fijos dentro de nuestros bloques horarios',
      'Buscas un ambiente limpio y sin las multitudes de los gimnasios comerciales',
      'Exiges equipamiento de calidad para llevar tu rendimiento al máximo',
      'Valoras tu comodidad y tiempo: Llegas, estacionas y entrenas gracias a nuestro estacionamiento gratis para socios'
    ],
    cta: 'Qué esperar'
  },
  {
    name: 'Actívate Básico',
    price: '29.990',
    period: 'mes',
    description: 'Este plan incluye 8 clases al mes  y es perfecto para ti si:',
    features: [
      'Buscas equilibrio: Quieres integrar el ejercicio en tu rutina semanal sin presiones, con la guía de profesionales',
      'Calidad sobre cantidad: Prefieres 8 sesiones al mes bien ejecutadas y supervisadas que ir a ciegas a un gimnasio convencional',
      'Eres constante pero flexible: Ideal para quienes entrenan dos veces por semana con un objetivo claro ',
      'Valoras tu tiempo: Disfrutas de un espacio eficiente, sin filas y con estacionamiento gratuito para que nada te detenga'
    ],
    cta: 'Qué esperar'
  },
  {
    name: 'Actívate Pro',
    price: '39.990',
    period: 'mes',
    description: 'Este plan incluye: 12 clases personalizadas al mes + 2 clases libres + OpenGym',
    features: [
      'Buscas resultados reales: Quieres la combinación perfecta entre 12 clases personalizadas y la libertad de entrenar a tu aire ',
      'Exiges versatilidad: Valoras tener sesiones dirigidas y además contar con Open Gym y clases libres para complementar tu semana',
      'Necesitas guía experta: Quieres coaches que conozcan tus límites y te ayuden a superarlos de forma consciente '
    ],
    cta: 'Qué esperar'
  },
  {
    name: 'Fullfit ',
    price: '59.990',
    period: 'mes',
    description:
      'Este plan incluye: 2 clases personalizadas por semana + 2 clases de pilates a la semana',
    features: [
      'Este plan es perfecto si buscas una transformación integral: Quieres el balance perfecto entre la fuerza de las clases personalizadas y la movilidad del Pilates',
      'Priorizas el bienestar consciente: Entiendes que potenciar el rendimiento requiere tanto de intensidad como de control corporal y flexibilidad',
      'Deseas un acompañamiento premium: 4 sesiones semanales (2 personalizadas + 2 Pilates) diseñadas para quienes no dejan nada al azar '
    ],
    cta: 'Qué esperar'
  }
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-[#e04f21]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-[#e04f21]/5 rounded-full blur-[100px]" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#e04f21] font-semibold tracking-wide uppercase text-sm mb-2 block">
            Planes y Precios
          </span>
          <h2 className="mb-4">Elige Tu Plan Perfecto</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Sin compromisos de largo plazo. Cancela cuando quieras. Todos los planes incluyen acceso
            a nuestras instalaciones de primer nivel.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl p-6 transition-all duration-300 flex flex-col ${
                plan.name === 'Actívate Pro'
                  ? 'glass border-2 border-[#e04f21] shadow-[0_0_50px_rgba(224,79,33,0.3)]'
                  : 'glass glass-hover'
              }`}
            >
              <div className="text-center mb-6">
                <h4 className="mb-2">{plan.name}</h4>
                <p className="text-sm text-white/70 mb-4">{plan.description}</p>
                <div className="flex items-end justify-center gap-1 mb-2">
                  <span className="text-5xl font-black text-[#e04f21]">${plan.price}</span>
                  <span className="text-white/70 mb-2">/{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#e04f21] shrink-0 mt-0.5" />
                    <span className="text-sm text-white/90">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Todos los planes ahora tienen Dialog */}
              <PlanDialog planName={plan.name} planPrice={plan.price} planPeriod={plan.period}>
                <button
                  className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 mt-auto ${
                    plan.name === 'Actívate Pro'
                      ? 'bg-[#e04f21] hover:bg-[#c44419] hover:shadow-[0_0_30px_rgba(224,79,33,0.5)]'
                      : 'glass glass-hover'
                  }`}
                >
                  {plan.cta}
                </button>
              </PlanDialog>
            </motion.div>
          ))}
        </div>

        {/* Extra Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-white/70 mb-4">
            Compara nuestros diferentes planes{' '}
            <a href="#plan-comparison" className="text-[#e04f21] hover:underline font-semibold">
              Comparar
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
