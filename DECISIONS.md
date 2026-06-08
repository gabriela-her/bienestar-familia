# Decisiones técnicas - Bienestar y Familia

## 001 - Stack: React + TypeScript + Vite
**Decisión:** Usar React con TypeScript compilado por Vite.
**Por qué:** React es el framework más demandado del mercado. TypeScript
añade tipado estático que previene errores y mejora el autocompletado.
Vite es más rápido que Create React App y es el estándar actual.

## 002 - Tipo de app: SPA (Single Page Application)
**Decisión:** Una sola aplicación que gestiona las rutas con React Router.
**Por qué:** El contenido es principalmente informativo y no requiere
SEO crítico en esta fase. Una SPA es más simple de desarrollar y desplegar
que una app con servidor. Si el SEO se vuelve prioritario, se puede migrar
a Next.js más adelante.

## 003 - Arquitectura: Feature-based structure
**Decisión:** Carpetas organizadas por propósito (components, pages, data).
**Por qué:** Escala bien a medida que crece el proyecto. Cada página es
independiente. El contenido está separado de la presentación, lo que
facilita cambios futuros como conectar un CMS o una API.

## 004 - Navegación: React Router DOM con BrowserRouter
**Decisión:** Usar React Router DOM para gestionar las rutas del lado del cliente.
**Por qué:** Al ser una SPA solo existe un index.html. React Router intercepta
los cambios de URL sin recargar la página, dando una experiencia de navegación
fluida. Usamos BrowserRouter (URLs reales como /equipo) en lugar de HashRouter
(URLs con # como /#/equipo) porque las URLs reales son más limpias y mejor
valoradas por los motores de búsqueda.
**Nota pendiente:** Configurar _redirects en Netlify para evitar 404 en
acceso directo a rutas.

## 005 - Flujo de trabajo: Git Flow
**Decisión:** Usar tres niveles de ramas: main, develop y feature branches.
**Por qué:** main siempre refleja lo que está en producción y nunca
se toca directamente. develop es la rama de integración. Cada feature
nueva tiene su propia rama que sale de develop y vuelve a develop
cuando está lista. Esto permite trabajar en paralelo sin romper
lo que ya funciona.