'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export function PlanComparisonSection() {
  // Estructura de la tabla: 3 columnas x 9 filas
  const columns = ['Beneficio', 'Plan Básico', 'Plan Pro'];

  // 8 filas de datos (sin contar el header)
  const rows = [
    {
      benefit: '3 clases grupales personalizadas / sem',
      activateBasic: '-',
      activatePro: 'check'
    },
    {
      benefit: 'Entrenamiento guiado y cercano',
      activateBasic: '-',
      activatePro: 'check'
    },
    {
      benefit: 'Cupos reducidos por hora',
      activateBasic: '-',
      activatePro: 'check'
    },
    {
      benefit: 'Supervisión técnica en clases',
      activateBasic: 'check',
      activatePro: 'check'
    },
    {
      benefit: 'Horarios exclusivos (AM/PM)',
      activateBasic: '-',
      activatePro: 'check'
    },
    {
      benefit: 'Acceso combinado (Clases + Libre)',
      activateBasic: '-',
      activatePro: 'check'
    },
    {
      benefit: 'Descuento batidos proteicos (20%)',
      activateBasic: '-',
      activatePro: 'check'
    },
    {
      benefit: 'Descuento cafetería Milarí (50%)',
      activateBasic: '-',
      activatePro: 'check'
    }
  ];

  // Helper function to render cell content
  const renderCellContent = (content: string) => {
    if (content === 'check') {
      return (
        <div className="flex justify-center">
          <Check className="w-6 h-6 text-[#e04f21]" />
        </div>
      );
    }
    return content;
  };

  return (
    <section id="plan-comparison" className="py-24 relative overflow-hidden">
      {/* Background Blur Circles */}
      <div className="absolute top-40 left-0 w-96 h-96 bg-[#e04f21]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 right-0 w-[600px] h-[600px] bg-[#e04f21]/5 rounded-full blur-[150px]" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#e04f21] font-semibold tracking-wide uppercase text-sm mb-2 block">
            COMPARATIVA
          </span>
          <h2 className="mb-4">Comparativa de planes Actívate Pro</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Encuentra el plan perfecto para tus objetivos. Compara características y elige el que
            mejor se adapte a ti.
          </p>
        </motion.div>

        {/* Table Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass glass-hover rounded-2xl overflow-hidden"
        >
          {/* Desktop Table */}
          <div className="hidden lg:block">
            <table className="w-full">
              {/* Table Header */}
              <thead>
                <tr className="border-b border-white/10">
                  {columns.map((column, index) => (
                    <th
                      key={index}
                      className={`px-8 py-8 text-left font-bold ${
                        index === 0
                          ? 'text-white/90 text-xl'
                          : index === 2
                            ? 'text-[#e04f21] text-xl bg-[#e04f21]/10'
                            : 'text-white/80 text-lg'
                      }`}
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>
                {rows.map((row, rowIndex) => (
                  <motion.tr
                    key={rowIndex}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: rowIndex * 0.05 }}
                    className="border-b border-white/5 hover:bg-white/5 transition-colors"
                  >
                    <td className="px-8 py-6 font-semibold text-white/90 text-base">
                      {row.benefit}
                    </td>
                    <td className="px-8 py-6 text-white/70 text-base">
                      {renderCellContent(row.activateBasic)}
                    </td>
                    <td className="px-8 py-6 text-white/70 text-base bg-[#e04f21]/5">
                      {renderCellContent(row.activatePro)}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile/Tablet Cards View */}
          <div className="lg:hidden p-6 space-y-6">
            {/* Actívate Básico Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass rounded-xl p-6"
            >
              <h3 className="font-bold text-lg mb-4 text-white/90">Actívate Básico</h3>
              <div className="space-y-3">
                {rows.map((row, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center pb-3 border-b border-white/5 last:border-0"
                  >
                    <span className="text-sm font-semibold text-white/70 flex-1">
                      {row.benefit || `Beneficio ${index + 1}`}
                    </span>
                    <span className="text-sm text-white/60 flex-1 text-right">
                      {renderCellContent(row.activateBasic)}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Actívate Pro Card (Destacado) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass rounded-xl p-6 border-2 border-[#e04f21] relative"
            >
              <div className="absolute -top-3 left-6 bg-[#e04f21] px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                ⭐ Destacado
              </div>
              <h3 className="font-bold text-lg mb-4 text-[#e04f21]">Actívate Pro</h3>
              <div className="space-y-3">
                {rows.map((row, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center pb-3 border-b border-white/5 last:border-0"
                  >
                    <span className="text-sm font-semibold text-white/70 flex-1">
                      {row.benefit || `Beneficio ${index + 1}`}
                    </span>
                    <span className="text-sm text-white/60 flex-1 text-right">
                      {renderCellContent(row.activatePro)}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA Below Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-white/70 mb-6">¿Tienes dudas? Estamos aquí para ayudarte</p>
          <a
            href="/contacto"
            className="inline-flex items-center gap-2 bg-[#e04f21] hover:bg-[#c44419] px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(224,79,33,0.5)]"
          >
            Contáctanos
          </a>
        </motion.div>
      </div>
    </section>
  );
}
