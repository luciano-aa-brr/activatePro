'use client';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { Check } from 'lucide-react';
import Link from 'next/link';

interface PlanDialogProps {
  planName: string;
  planPrice: string;
  planPeriod: string;
  children: React.ReactNode;
}

export function PlanDialog({ planName, planPrice, planPeriod, children }: PlanDialogProps) {
  // Contenido específico de cada plan
  const planDetails = {
    'Plan Básico': {
      benefits: [
        {
          title: 'Libertad total para entrenar a tu ritmo',
          description:
            'Acceso completo a nuestras instalaciones durante los bloques horarios disponibles. Entrenas cuando quieras, con la rutina que tú diseñes, sin depender de horarios de clases. Perfecto para quienes ya tienen experiencia y saben exactamente qué necesitan para alcanzar sus objetivos.'
        },
        {
          title: 'Equipamiento profesional sin aglomeraciones',
          description:
            'Disfruta de máquinas y equipos de alta gama en un ambiente exclusivo y sin las multitudes típicas de gimnasios comerciales. Cada sesión es eficiente porque no pierdes tiempo esperando por equipos. Además, cuentas con estacionamiento gratuito para mayor comodidad.'
        }
      ],
      url: 'https://www.mercadopago.cl/subscriptions/checkout?preapproval_plan_id=dacf77d3b3bb400d8f41a37caf57677f'
    },
    'Plan Pro': {
      benefits: [
        {
          title: 'Programa estructurado y eficiente',
          description:
            'Cada sesión está planificada para garantizar un entrenamiento completo, balanceado y enfocado en conseguir resultados. El entrenador diseña una rutina que se adapta a ustedes, con progresiones y modificaciones individuales para que cada uno trabaje a su máxima capacidad y de forma segura.'
        },
        {
          title: 'Supervisión y corrección constante',
          description:
            'Al ser pocas personas, el entrenador tiene la capacidad de observar, corregir y adaptar los ejercicios para cada integrante del grupo. Con 3 clases personalizadas por semana, obtienes el equilibrio perfecto entre guía experta y libertad para entrenar.'
        },
        {
          title: 'Horarios exclusivos y beneficios',
          description:
            'Acceso a horarios premium, descuentos especiales en batidos proteicos y cafetería Milarí. Una experiencia completa diseñada para quienes buscan máximos resultados.'
        }
      ],
      url: 'https://www.mercadopago.cl/subscriptions/checkout?preapproval_plan_id=49f233686a92476fa6302ebac4793a8b'
    }
  };

  const currentPlanDetails = planDetails[planName as keyof typeof planDetails];

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-2xl glass border-2 border-[#e04f21]/30 shadow-[0_0_50px_rgba(224,79,33,0.3)] backdrop-blur-xl bg-[#0a0a0a]/95 max-h-[90vh] flex flex-col">
        <DialogHeader className="space-y-4 shrink-0">
          <div className="space-y-2">
            <DialogTitle className="text-3xl font-bold text-white">{planName}</DialogTitle>
            <div className="flex items-end gap-2">
              <span className="text-5xl font-black text-[#e04f21]">${planPrice}</span>
              <span className="text-xl text-white/70 mb-1">/{planPeriod}</span>
            </div>
          </div>
          <DialogDescription className="text-white/80 text-base">
            Descubre todo lo que incluye este plan
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4 overflow-y-auto flex-1 min-h-0">
          {currentPlanDetails?.benefits.map((benefit, index) => (
            <div key={index} className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="shrink-0 mt-1">
                  <Check className="w-6 h-6 text-[#e04f21]" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">{benefit.title}</h4>
                  <p className="text-white/80 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <DialogFooter className="gap-3 sm:gap-2 shrink-0 pt-4 border-t border-white/10">
          <DialogClose asChild>
            <button
              type="button"
              className="glass glass-hover px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
            >
              Cancelar
            </button>
          </DialogClose>
          {currentPlanDetails?.url ? (
            <Link
              href={currentPlanDetails.url}
              className="bg-[#e04f21] hover:bg-[#c44419] px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(224,79,33,0.5)] text-white"
            >
              ¡Quiero este plan!
            </Link>
          ) : (
            <button
              type="button"
              disabled
              className="bg-[#e04f21]/50 px-6 py-3 rounded-xl font-semibold text-white cursor-not-allowed"
            >
              URL no disponible
            </button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
