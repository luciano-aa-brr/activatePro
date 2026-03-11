import { NextRequest, NextResponse } from 'next/server';

export const allItems = [
  {
    type: 'image',
    src: '/img/maquina1.webp',
    caption: 'Prensa de pecho sentada con selector de peso lateral y agarres ergonómicos amarillos'
  },
  {
    type: 'image',
    src: '/img/maquina2.webp',
    caption: 'Máquina de extensión de cuádriceps y curl de piernas'
  },
  { type: 'image', src: '/img/maquina3.webp', caption: 'Vista general de la zona de peso libre' },
  {
    type: 'image',
    src: '/img/maquina4.webp',
    caption: 'Detalle de una prensa de piernas a 45 grados'
  },
  {
    type: 'image',
    src: '/img/maquina5.webp',
    caption:
      'Bicicleta de aire de alto rendimiento para entrenamiento cardiovascular y metabólico, ubicada junto a un dispensador de agua'
  },
  {
    type: 'image',
    src: '/img/maquina6.webp',
    caption: 'Rack vertical con juego de barras fijas de diferentes pesos'
  },
  {
    type: 'image',
    src: '/img/maquina7.webp',
    caption:
      'Estante de dos niveles con juego completo de mancuernas hexagonales de caucho organizadas por peso'
  },
  {
    type: 'image',
    src: '/img/maquina8.webp',
    caption:
      'Zona de entrenamiento funcional que muestra dos bancos planos inclinables, un rack de mancuernas y una máquina de polea doble ajustable'
  },
  {
    type: 'image',
    src: '/img/maquina9.webp',
    caption:
      'Perspectiva lateral del área de racks para sentadillas y press de banca, mostrando barras cargadas y plataformas de caucho para protección del suelo'
  },
  {
    type: 'image',
    src: '/img/maquina10.webp',
    caption:
      'Vista amplia del sector de fuerza que combina la prensa de piernas inclinada con estaciones de levantamiento con barra olímpica.'
  }
];
export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const page = parseInt(url.searchParams.get('page') || '1', 10);
  const limit = parseInt(url.searchParams.get('limit') || '12', 10);
  const start = (page - 1) * limit;
  const end = start + limit;
  const items = allItems.slice(start, end);
  const hasMore = end < allItems.length;

  return NextResponse.json({ items, hasMore });
}
