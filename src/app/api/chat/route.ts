import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';
import { GYM_KNOWLEDGE } from '@/lib/bot-context';

// IMPORTANTE: Esto permite que Vercel sepa que es una ruta dinámica
export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const result = streamText({
      model: openai('gpt-4o-mini'),
      system: `Eres el Coach Virtual de ${GYM_KNOWLEDGE.nombre}. 
      Usa esta información para responder: ${JSON.stringify(GYM_KNOWLEDGE)}.
      Si no sabes algo, invita al usuario a contactar por WhatsApp.
      Responde de forma motivadora y breve.`,
      messages
    });

    // ─── usa el método correcto ────────────────────────────
    return result.toTextStreamResponse();
  } catch (error) {
    console.error('Chat Error:', error);
    return new Response(JSON.stringify({ error: 'Hubo un problema con el servidor de IA' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
