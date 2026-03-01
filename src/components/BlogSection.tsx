'use client';

import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Clock } from 'lucide-react';
import Image from 'next/image';

const blogPosts = [
  {
    title: '5 Ejercicios Esenciales para Principiantes',
    date: '20 Diciembre 2024',
    readTime: '5 min',
    category: 'Entrenamiento',
    excerpt:
      'Si estás comenzando tu viaje fitness, estos cinco ejercicios fundamentales te ayudarán a construir una base sólida y evitar lesiones.',
    image: '/gallery_3.jpeg'
  },
  {
    title: 'Nutrición Pre y Post Entrenamiento',
    date: '15 Diciembre 2024',
    readTime: '7 min',
    category: 'Nutrición',
    excerpt:
      'Descubre qué comer antes y después de tu entrenamiento para maximizar tus resultados y acelerar la recuperación muscular.',
    image: '/service_5.jpeg'
  },
  {
    title: 'La Importancia de la Recuperación Activa',
    date: '10 Diciembre 2024',
    readTime: '6 min',
    category: 'Bienestar',
    excerpt:
      'Aprende por qué el descanso es tan importante como el entrenamiento y cómo implementar técnicas de recuperación efectivas.',
    image: '/gallery_8.jpeg'
  },
  {
    title: 'Cómo Mantener la Motivación a Largo Plazo',
    date: '5 Diciembre 2024',
    readTime: '8 min',
    category: 'Mindset',
    excerpt:
      'Estrategias probadas para mantener tu compromiso con el fitness y superar los obstáculos mentales que pueden aparecer.',
    image: '/gallery_7.jpeg'
  },
  {
    title: 'CrossFit vs Entrenamiento Tradicional',
    date: '1 Diciembre 2024',
    readTime: '10 min',
    category: 'Entrenamiento',
    excerpt:
      'Comparamos estas dos metodologías populares para ayudarte a decidir cuál se adapta mejor a tus objetivos y estilo de vida.',
    image: '/gallery_2.jpeg'
  },
  {
    title: 'Yoga para Atletas: Beneficios Sorprendentes',
    date: '25 Noviembre 2024',
    readTime: '6 min',
    category: 'Bienestar',
    excerpt:
      'Descubre cómo el yoga puede complementar tu entrenamiento de fuerza y mejorar tu rendimiento atlético general.',
    image: '/service_4.jpeg'
  }
];

export function BlogSection() {
  return (
    <section id="blog" className="py-24 relative overflow-hidden bg-[#0a0a0a]">
      {/* Background Elements */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-[#e04f21]/10 rounded-full blur-[120px]" />

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
            Blog & Recursos
          </span>
          <h2 className="mb-4">Aprende y Crece Con Nosotros</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Consejos de expertos, guías de entrenamiento y las últimas tendencias en fitness y
            nutrición para ayudarte a alcanzar tus metas.
          </p>
        </motion.div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl overflow-hidden mb-12 group cursor-pointer hover:scale-[1.01] transition-all duration-300"
        >
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-80 md:h-auto overflow-hidden">
              <Image
                src={blogPosts[0].image}
                width={600}
                height={400}
                alt={blogPosts[0].title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent md:hidden" />
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="inline-block bg-[#e04f21] px-3 py-1 rounded-full text-sm font-semibold mb-4 w-fit">
                {blogPosts[0].category}
              </div>
              <h3 className="mb-4 group-hover:text-[#e04f21] transition-colors">
                {blogPosts[0].title}
              </h3>
              <p className="text-white/70 mb-6">{blogPosts[0].excerpt}</p>
              <div className="flex items-center gap-6 text-sm text-white/60 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {blogPosts[0].date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {blogPosts[0].readTime} lectura
                </div>
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-[#e04f21] font-semibold group/btn w-fit"
              >
                Leer Artículo Completo
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.slice(1).map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass glass-hover rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-105"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={post.image}
                  width={400}
                  height={250}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#e04f21] px-3 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h4 className="mb-3 group-hover:text-[#e04f21] transition-colors line-clamp-2">
                  {post.title}
                </h4>
                <p className="text-sm text-white/70 mb-4 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-white/60 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </div>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-[#e04f21] font-semibold text-sm group/btn"
                >
                  Leer Más
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 glass glass-hover px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
          >
            Ver Todos los Artículos
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
