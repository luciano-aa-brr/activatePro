'use client';

import { motion } from 'motion/react';
import { Instagram, Play } from 'lucide-react';
import Image from 'next/image';

const galleryItems = [
  {
    type: 'image',
    src: '/gallery_1.jpeg',
    caption: 'Instalaciones de última generación'
  },
  {
    type: 'video',
    src: '/gallery_2.jpeg',
    caption: 'Sesión intensiva de CrossFit'
  },
  {
    type: 'image',
    src: '/gallery_3.jpeg',
    caption: 'Zona de pesas libre'
  },
  {
    type: 'image',
    src: '/gallery_4.jpeg',
    caption: 'Clases grupales energéticas'
  },
  {
    type: 'video',
    src: '/gallery_5.jpeg',
    caption: 'Entrenamiento de boxing'
  },
  {
    type: 'image',
    src: '/gallery_6.jpeg',
    caption: 'Estudio de yoga y meditación'
  },
  {
    type: 'image',
    src: '/gallery_7.jpeg',
    caption: 'Zona de cardio premium'
  },
  {
    type: 'image',
    src: '/gallery_8.jpeg',
    caption: 'Área de recuperación y estiramientos'
  }
];

export function GallerySection() {
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`relative group cursor-pointer overflow-hidden rounded-xl ${index === 0 || index === 5 ? 'md:col-span-2 md:row-span-2' : ''}`}
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={item.src}
                  width={300}
                  height={300}
                  alt={item.caption}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  unoptimized
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
        </div>

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
