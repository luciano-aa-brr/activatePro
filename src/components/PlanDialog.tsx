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
    'Open Gym': {
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
    'Actívate Básico': {
      benefits: [
        {
          title: 'Guía profesional en cada sesión',
          description:
            'Con 8 clases al mes supervisadas por entrenadores expertos, cada sesión está diseñada para maximizar resultados. No entrenas a ciegas: recibes corrección de técnica, progresiones adecuadas y un plan balanceado que se adapta a tu nivel y objetivos. Ideal para entrenar 2 veces por semana de forma constante.'
        },
        {
          title: 'Calidad sobre cantidad',
          description:
            'Este plan prioriza la ejecución perfecta y el progreso sostenible. En un ambiente de grupos reducidos, recibes atención personalizada que garantiza que cada repetición cuente. Sin presiones, sin filas, solo entrenamiento eficiente con profesionales que se preocupan por tu progreso.'
        }
      ],
      url: 'https://www.mercadopago.cl/subscriptions/checkout?preapproval_plan_id=59b870b3919049939f6d5c7fcaef0955'
    },
    'Actívate Pro': {
      benefits: [
        {
          title: 'Programa estructurado y eficiente',
          description:
            'Cada sesión está planificada para garantizar un entrenamiento completo, balanceado y enfocado en conseguir resultados. El entrenador diseña una rutina que se adapta a ustedes, con progresiones y modificaciones individuales para que cada uno trabaje a su máxima capacidad y de forma segura.'
        },
        {
          title: 'Supervisión y corrección constante',
          description:
            'Al ser pocas personas, el entrenador tiene la capacidad de observar, corregir y adaptar los ejercicios para cada integrante del grupo.'
        }
      ],
      url: 'https://www.mercadopago.cl/subscriptions/checkout?preapproval_plan_id=49f233686a92476fa6302ebac4793a8b'
    },
    'Fullfit ': {
      benefits: [
        {
          title: 'Programa estructurado y eficiente',
          description:
            'Cada sesión está planificada para garantizar un entrenamiento completo, balanceado y enfocado en conseguir resultados. El entrenador diseña una rutina que se adapta a ustedes, con progresiones y modificaciones individuales para que cada uno trabaje a su máxima capacidad y de forma segura.'
        },
        {
          title: 'Supervisión y corrección constante',
          description:
            'Al ser pocas personas, el entrenador tiene la capacidad de observar, corregir y adaptar los ejercicios para cada integrante del grupo.'
        }
      ],
      url: ''
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
          <Link
            href={currentPlanDetails.url}
            className="bg-[#e04f21] hover:bg-[#c44419] px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(224,79,33,0.5)] text-white"
          >
            ¡Quiero este plan!
          </Link>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
