'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Play } from 'lucide-react';
import Image from 'next/image';

// Los elementos ahora se cargan dinámicamente desde el
// endpoint `/api/gallery`. Cada petición devuelve un pequeño bloque de
// imágenes (página) y un indicador `hasMore` para saber si hay más
// datos disponibles. Esto permite crecer hasta miles de imágenes sin
// penalizar la carga inicial.

interface GalleryItem {
  type: 'image' | 'video';
  src: string;
  caption?: string;
}

export function GallerySection() {
  const [items, setItems] = React.useState<GalleryItem[]>([]);
  const [showAll, setShowAll] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  // fetch all images at once
  const loadImages = React.useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/gallery?page=1&limit=100`); // Load all images
      const json = await res.json();
      setItems(json.items);
    } catch (error) {
      console.error('Error loading gallery:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  // Load images on mount
  React.useEffect(() => {
    loadImages();
  }, [loadImages]);

  return (
    <section id="gallery" className="py-24 relative overflow-hidden bg-[#0a0a0a]">
      {/* Background Elements */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[400px] bg-[#e04f21]/10 rounded-full blur-[150px]" />

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
            Galería
          </span>
          <h2 className="mb-4">Vive la Experiencia Actívate</h2>
          <p className="text-lg max-w-2xl mx-auto mb-6">
            Descubre nuestras instalaciones, eventos y la energía de nuestra comunidad. Síguenos en
            Instagram para más contenido diario.
          </p>
          <a
            href="https://www.instagram.com/activatelabranza"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
          >
            <Instagram className="w-5 h-5" />
            @activatelabranza
          </a>
        </motion.div>

        {/* Gallery Grid */}
        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#e04f21]"></div>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <AnimatePresence>
              {(showAll ? items : items.slice(0, 9)).map((item, index) => (
                <motion.div
                  key={item.src + index}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.03 }}
                  className={`relative group cursor-pointer overflow-hidden rounded-xl ${
                    index === 0 || index === 5 ? 'md:col-span-2 md:row-span-2' : ''
                  }`}
                >
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={item.src}
                      width={300}
                      height={300}
                      alt={item.caption || ''}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      unoptimized
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Video Indicator */}
                    {item.type === 'video' && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-[#e04f21]/80 backdrop-blur-sm p-4 rounded-full group-hover:scale-110 transition-transform">
                          <Play className="w-8 h-8 fill-current" />
                        </div>
                      </div>
                    )}

                    {/* Caption */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="font-semibold text-sm">{item.caption}</p>
                    </div>

                    {/* Instagram Icon */}
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-2 rounded-lg">
                        <Instagram className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* Show More Button */}
        {!loading && items.length > 9 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-[#e04f21] hover:bg-[#d13f1f] px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
            >
              {showAll ? 'Mostrar Menos' : 'Ver Más Fotos'}
            </button>
          </div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-white/70 mb-4">
            ¿Quieres aparecer en nuestra galería? Etiquétanos en tus entrenamientos
          </p>
          <div className="inline-block glass rounded-xl px-6 py-3">
            <span className="text-[#e04f21] font-bold">#ActivateLabranzaTransformation</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
