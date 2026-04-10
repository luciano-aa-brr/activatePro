# 🔧 Guía de Modo Mantenimiento

## ¿Cómo funciona?

Tu sitio ahora tiene un **modo mantenimiento** que puedes activar y desactivar fácilmente.

### 📍 Ubicación de la configuración

Archivo: `.env.local` (raíz del proyecto)

```env
NEXT_PUBLIC_MAINTENANCE_MODE=false
```

---

## 🚀 Activar Modo Mantenimiento

1. Abre el archivo `.env.local`
2. Cambia `false` por `true`:
```env
NEXT_PUBLIC_MAINTENANCE_MODE=true
```
3. **Refresca** el navegador (Ctrl + F5)
4. Verás la página de mantenimiento

**Resultado:**
- ✅ Visitantes ven: "En Mantenimiento" con número de contacto
- ✅ Bots de búsqueda: Pueden acceder normalmente (SEO preservado)

---

## 🔄 Desactivar Modo Mantenimiento

1. Cambia nuevamente a `false`:
```env
NEXT_PUBLIC_MAINTENANCE_MODE=false
```
2. Refresca el navegador
3. El sitio vuelve a funcionar normalmente

---

## 📄 Archivos creados

```
src/
├── app/
│   └── maintenance/
│       └── page.tsx          ← Página de mantenimiento
├── middleware.ts             ← Lógica de redirección
└── ...

.env.local                     ← Variables de entorno
```

---

## 🎨 Personalizar

### Cambiar número de contacto

Edita `src/app/maintenance/page.tsx`, línea con:
```tsx
href="tel:+56912345678"
```

### Cambiar mensaje

En el mismo archivo, busca:
```tsx
"Estamos realizando mejoras en nuestro sitio..."
```

---

## 🔍 SEO durante mantenimiento

- ✅ Los bots pueden acceder normalmente
- ✅ La página sigue siendo indexable
- ✅ No afecta tu posicionamiento en Google
- ✅ Los usuarios humanos ven el mensaje de mantenimiento

---

## ⚡ Notas

- El cambio se aplica **INMEDIATAMENTE** después de cambiar `.env.local`
- No necesitas reiniciar el servidor (salvo que uses variables de entorno en el servidor)
- Funciona en desarrollo y producción
- Perfect para cambios grandes sin perder tráfico SEO

---

**¿Necesitas ayuda?** Contacta al equipo de desarrollo.
