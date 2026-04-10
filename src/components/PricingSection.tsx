'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { PlanDialog } from './PlanDialog';

const plans = [
  {
    name: 'Plan Básico',
    price: '33.990',
    period: 'mes',
    description: 'Acceso flexible y apoyo técnico esencial.',
    features: [
      'Acceso Lu-Vi: 10:00-12:00 y 16:00-20:00 hrs',
      'Acceso Sábados: 12:00-16:00 hrs',
      'Uso libre de sala en bloques disponibles',
      'Apoyo y corrección técnica por el staff',
      'Orientación en rutinas de fuerza y funcional'
    ],
    cta: 'Saber más'
  },
  {
    name: 'Plan Pro',
    price: '42.990',
    period: 'mes',
    description: 'Entrenamiento guiado de alto nivel y beneficios exclusivos.',
    features: [
      '3 clases grupales personalizadas por semana',
      'Cupos reducidos para mejor supervisión',
      'Acceso adicional en horarios Plan Básico',
      'Horarios exclusivos: 09:00 AM y 20:00-22:00 PM',
      'Convenio exclusivo en cafetería Milarí'
    ],
    cta: 'Inscribirme'
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
