# Bienestar y Familia 🌿

Web institucional para un centro de salud mental ubicado en Venezuela, desarrollada con React, TypeScript y Vite.

## Objetivo

Dar a conocer el espacio, el equipo y los servicios del centro, con proyección a incorporar blog, testimonios de pacientes y pasarela de pagos.

## Stack

- React 19
- TypeScript 6
- Vite
- React Router DOM

## Estructura del proyecto

```
src/
├── components/      # Componentes reutilizables (Header, Footer, WhatsAppButton)
├── pages/           # Páginas de la app (Home, Servicios, Equipo, Contacto)
├── data/            # Contenido estático y configuración del centro
├── styles/          # Variables CSS globales
└── assets/          # Imágenes y recursos
```

## Decisiones técnicas

Las decisiones de arquitectura están documentadas en [DECISIONS.md](./DECISIONS.md).

## Flujo de trabajo

feat/* → develop → main

- `main` → producción
- `develop` → integración
- `feat/*` → desarrollo de cada funcionalidad

## Comandos

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview
```

## Estado actual

- [x] Estructura base del proyecto
- [x] Sistema de rutas con React Router
- [x] Header con navegación activa
- [x] Footer con datos del centro
- [x] Botón flotante de WhatsApp
- [x] Variables CSS con paleta pastel
- [x] Configuración centralizada en siteConfig
- [x] Página Home
- [x] Página Servicios
- [x] Página Equipo
- [x] Página Contacto
- [ ] Despliegue en Netlify
- [ ] Blog
- [ ] Testimonios
- [ ] Pasarela de pagos