'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Dumbbell, MessageSquareText } from 'lucide-react';
import { CHAT_DATA } from '@/lib/chat-data';

export function ChatLocal() {
  const [isOpen, setIsOpen] = useState(false);
  const [mensaje, setMensaje] = useState(CHAT_DATA.bienvenida);

  // Número real del gimnasio
  const WHATSAPP_URL = 'https://wa.me/56966888378';

  return (
    <>
      {/* Botón Flotante Principal */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-[#e04f21] p-4 rounded-full shadow-lg hover:scale-110 transition-transform md:bottom-8 md:right-8 border border-white/10"
      >
        <MessageCircle className="text-white w-6 h-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed inset-0 z-[60] md:inset-auto md:bottom-24 md:right-8 md:w-[380px] flex flex-col p-4 md:p-0"
          >
            {/* Contenedor con fondo más oscuro (bg-black/80) y desenfoque (backdrop-blur-xl) */}
            <div className="flex-1 bg-black/80 backdrop-blur-xl md:rounded-3xl overflow-hidden flex flex-col shadow-2xl border border-white/20">
              {/* Header */}
              <div className="bg-[#e04f21] p-4 flex justify-between items-center text-white">
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <Dumbbell className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-sm">Asistente Actívate</p>
                    <p className="text-[10px] opacity-80 uppercase tracking-widest">En línea</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-black/20 p-1 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Área de Mensajes con fondo oscurecido */}
              <div className="p-4 space-y-4 bg-black/40 flex-1 flex flex-col overflow-y-auto min-h-[350px]">
                <motion.div
                  key={mensaje}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white/10 backdrop-blur-md p-4 rounded-2xl text-sm text-white leading-relaxed border border-white/10 shadow-inner"
                >
                  {mensaje.split('\n').map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
                </motion.div>

                {/* Menú de Opciones */}
                <div className="flex flex-col gap-2 mt-auto pt-4 border-t border-white/10">
                  {CHAT_DATA.opcionesPrincipales.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() =>
                        setMensaje(
                          CHAT_DATA.respuestas[opt.id as keyof typeof CHAT_DATA.respuestas]
                        )
                      }
                      className="text-left text-xs bg-white/5 hover:bg-[#e04f21]/30 border border-white/10 p-3 rounded-xl transition-all text-white active:scale-95"
                    >
                      {opt.texto}
                    </button>
                  ))}

                  {/* Acción Directa WhatsApp */}
                  {mensaje === CHAT_DATA.respuestas.contacto && (
                    <motion.a
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white py-3 rounded-xl font-bold text-sm shadow-lg transition-all mt-2"
                    >
                      <MessageSquareText className="w-5 h-5" />
                      Chatear en WhatsApp
                    </motion.a>
                  )}

                  <button
                    onClick={() => setMensaje(CHAT_DATA.bienvenida)}
                    className="text-[10px] text-white/40 hover:text-white mt-3 self-center uppercase tracking-tighter"
                  >
                    Reiniciar conversación
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
