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

## 006 - Estilos: CSS Custom Properties (variables CSS)
**Decisión:** Centralizar todos los valores de diseño en variables CSS
definidas en src/styles/variables.css.
**Por qué:** Permite cambiar colores, fuentes o espaciados en un solo
lugar y que el cambio se propague a toda la app. Es la alternativa
nativa del navegador a variables de Sass o tokens de diseño de librerías
como Tailwind. No añade dependencias externas y cualquier desarrollador
que conozca CSS lo entiende sin aprender nada nuevo.

## 007 - Identidad visual: paleta pastel
**Decisión:** Paleta de colores suaves (azules, verdes y rosas pasteles
sobre fondo blanco roto).
**Por qué:** El centro atiende a todo tipo de público incluyendo niños
y parejas. Los colores pasteles transmiten calma, confianza y accesibilidad
emocional, valores alineados con el objetivo del centro.

## 008 - Contacto: botón flotante de WhatsApp
**Decisión:** Botón flotante siempre visible que abre WhatsApp directamente.
**Por qué:** Es el método de contacto preferido por la clienta y el más
usado en España para contacto rápido. No requiere backend, es un enlace
estático con el formato wa.me/+34XXXXXXXXX.

## 009 - Reservas: Calendly en primera versión
**Decisión:** Integrar Calendly mediante iframe o enlace externo.
**Por qué:** Construir un sistema de reservas propio requiere backend,
base de datos y autenticación. Calendly resuelve esto de forma gratuita
y profesional en una fracción del tiempo. Si en el futuro se necesita
más control, se puede migrar a una solución propia.

## 010 - Pagos: PayPal SDK en primera versión
**Decisión:** Integrar PayPal mediante su SDK de JavaScript.
**Por qué:** Es la opción más simple que no requiere backend propio
para una primera versión. Si el volumen de pagos crece o se necesitan
funcionalidades avanzadas, se puede migrar a Stripe con un backend propio.

## 011 - Datos del centro: siteConfig
**Decisión:** Centralizar todos los datos del centro (nombre, contacto,
moneda, redes sociales) en src/data/config.ts.
**Por qué:** Cuando la clienta proporcione los datos reales, se cambia
un solo archivo y se propaga a toda la app. Evita buscar placeholders
dispersos por múltiples componentes.

## 012 - Imágenes: placeholders de Unsplash
**Decisión:** Usar URLs de imágenes de Unsplash como placeholders
durante el desarrollo.
**Por qué:** Son gratuitas, de alta calidad y se pueden sustituir
por una URL local cuando lleguen las fotos reales sin tocar
la estructura del código. Se centralizan en src/data/config.ts
para cambiarlas en un solo sitio.

## 013 - Formulario de contacto: Formspree
**Decisión:** Usar Formspree para gestionar el envío del formulario.
**Por qué:** Un sitio estático no tiene servidor propio para procesar
emails. Formspree recibe los datos del formulario y los reenvía al
email de la clienta sin necesidad de backend. Es gratuito hasta
50 envíos al mes y se integra con un solo atributo action en el form.
## 014 - Variables de entorno: Vite env variables
**Decisión:** Usar variables de entorno con prefijo VITE_ para datos
sensibles como el número de WhatsApp y la URL de Formspree.
**Por qué:** Evita exponer datos de contacto directamente en el
repositorio público. En Netlify se configuran en el panel de
Environment Variables y se inyectan en el build automáticamente.
