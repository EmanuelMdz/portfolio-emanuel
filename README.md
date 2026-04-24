# Portfolio — Emanuel Mendoza

Portfolio personal construido con **Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion**.

Diseño inspirado en la referencia entregada: tema oscuro, glow azul, tipografía **Inter** y animaciones suaves.

## Getting Started

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000) en el browser.

## Scripts

- `npm run dev` — entorno de desarrollo
- `npm run build` — build de producción
- `npm start` — servir el build

## Estructura

```
app/
  layout.tsx         # Root layout con Inter + metadata
  page.tsx           # Composición de la home
  globals.css        # Estilos base + utilidades Tailwind
components/
  BackgroundGlow.tsx # Fondo con radial glow + noise
  Navbar.tsx         # Nav glass-pill
  Hero.tsx           # Hero con avatar + badge + CTA
  TechStack.tsx      # Marquee de logos de stack
  CaseStudies.tsx    # Cards de proyectos
  Experience.tsx     # Timeline de experiencia
  FAQ.tsx            # Acordeón animado
  Footer.tsx         # Contacto + socials
```

## Personalización rápida

- **Datos**: edita los arrays en `components/CaseStudies.tsx`, `Experience.tsx`, `FAQ.tsx`.
- **Copy del Hero**: `components/Hero.tsx`.
- **Foto real**: reemplazá el componente `Avatar` dentro de `Hero.tsx` por un `<Image />` con tu foto en `public/`.
- **Colores / tokens**: `tailwind.config.ts`.
