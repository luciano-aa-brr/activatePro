import { NextRequest, NextResponse } from 'next/server';

export function proxy(request: NextRequest) {
  const maintenanceMode = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true';

  // Si el modo mantenimiento está activo y NO es la página de mantenimiento
  if (maintenanceMode && !request.nextUrl.pathname.startsWith('/maintenance')) {
    // Redirigir a la página de mantenimiento
    return NextResponse.redirect(new URL('/maintenance', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - /maintenance (maintenance page)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|maintenance).*)',
  ],
};