'use client';

import { motion } from 'framer-motion';
import { Clock, AlertCircle, Calendar } from 'lucide-react';

const schedule = [
  { day: 'Lunes - Viernes', hours: '5:00 AM - 11:00 PM' },
  { day: 'Sábados', hours: '7:00 AM - 9:00 PM' },
  { day: 'Domingos', hours: '8:00 AM - 6:00 PM' },
  { day: 'Festivos', hours: '9:00 AM - 3:00 PM' }
];

const rules = [
  'Respeta el espacio y equipamiento compartido',
  'Limpia y desinfecta el equipo después de usarlo',
  'Usa toalla en todo momento durante el entrenamiento',
  'Respeta las zonas designadas para cada actividad',
  'No se permite el uso de zapatos de calle en áreas de entrenamiento',
  'Mantén tu taquilla limpia y organizada',
  'Sigue las instrucciones de los entrenadores',
  'Disfruta y motiva a otros miembros'
];

const classSchedule = [
  { time: '6:00 AM', class: 'Yoga Matutino', instructor: 'Laura' },
  { time: '7:00 AM', class: 'CrossFit', instructor: 'Diego' },
  { time: '9:00 AM', class: 'Pilates', instructor: 'Laura' },
  { time: '12:00 PM', class: 'HIIT Express', instructor: 'Carlos' },
  { time: '5:00 PM', class: 'Boxing', instructor: 'Diego' },
  { time: '6:30 PM', class: 'Yoga Flow', instructor: 'Laura' },
  { time: '7:30 PM', class: 'CrossFit', instructor: 'Carlos' }
];

export function ScheduleSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#e04f21]/10 rounded-full blur-[120px]" />

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
            Horarios y Normas
          </span>
          <h2 className="mb-4">Planifica Tu Entrenamiento</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Accede al gimnasio en horarios flexibles y únete a nuestras clases programadas. Juntos
            mantenemos un ambiente seguro y motivador.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Schedule */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-8 h-8 text-[#e04f21]" />
              <h3>Horario de Apertura</h3>
            </div>
            <div className="space-y-4 mb-8">
              {schedule.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 glass-hover rounded-xl transition-all duration-300"
                >
                  <span className="font-semibold">{item.day}</span>
                  <span className="text-[#e04f21] font-bold">{item.hours}</span>
                </div>
              ))}
            </div>

            <div className="bg-[#e04f21]/10 border border-[#e04f21]/30 rounded-xl p-4">
              <p className="text-sm">
                <strong className="text-[#e04f21]">Miembros Premium y Elite:</strong> Acceso 24/7
                los 365 días del año con tu tarjeta personalizada.
              </p>
            </div>
          </motion.div>

          {/* Rules */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <AlertCircle className="w-8 h-8 text-[#e04f21]" />
              <h3>Normas del Gimnasio</h3>
            </div>
            <ul className="space-y-3">
              {rules.map((rule, index) => (
                <li key={index} className="flex items-start gap-3 group">
                  <span className="text-[#e04f21] mt-1 shrink-0 font-bold">•</span>
                  <span className="text-sm text-white/80 group-hover:text-white transition-colors">
                    {rule}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Class Schedule */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 glass rounded-2xl p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="w-8 h-8 text-[#e04f21]" />
            <h3>Clases Grupales - Lunes a Viernes</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {classSchedule.map((item, index) => (
              <div
                key={index}
                className="glass-hover rounded-xl p-4 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-[#e04f21]" />
                  <span className="font-bold text-[#e04f21]">{item.time}</span>
                </div>
                <h5 className="mb-1">{item.class}</h5>
                <p className="text-sm text-white/60">con {item.instructor}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-[#e04f21]/10 border border-[#e04f21]/30 rounded-xl">
            <p className="text-sm text-center">
              <strong>Nota:</strong> Reserva tu lugar en clases grupales a través de nuestra app
              móvil. Los horarios de fin de semana varían, consulta la app para más detalles.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
