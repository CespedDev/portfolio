# Carlos Portfolio - Instrucciones para Claude

## Sintaxis Angular (17+)

- **Usar sintaxis moderna de control flow**: `@for`, `@if`, `@switch`, `@else`
- **NO usar directivas deprecadas**: `*ngFor`, `*ngIf`, `*ngSwitch` (deprecadas desde Angular 17)
- La sintaxis `@` no requiere importar `CommonModule`
- Ejemplo: `@for (item of items; track item.id) { }` en lugar de `*ngFor="let item of items"`

## Estructura del Proyecto

- Angular 21.2.0 standalone components
- PrimeNG 21.1.3 con PrimeIcons 7.0.0 y @primeuix/themes 2.0.3
- Tema personalizado en `src/app/mytheme.ts` basado en Aura de PrimeNG
- Sin archivos de test (.spec.ts) - configurado en angular.json
- Organización por features
- **SIEMPRE usar componentes de PrimeNG** para mantener coherencia en la UI
- **i18n propio con signals** (sin librerías): ver sección Internacionalización

## Internacionalización (i18n)

- **Sistema propio basado en signals, sin ngx-translate** (fue eliminado del proyecto)
- Idiomas soportados: Inglés (en, por defecto) y Español (es)
- `src/app/shared/lang.ts`: tipo `Localized` (`{ en, es }`), `injectLang()` (señal de solo lectura con el idioma actual) y `setLang()` (cambia idioma, persiste en localStorage y actualiza `<html lang>`)
- **Textos de interfaz** (labels, títulos, botones): objeto `UI` en `src/app/shared/ui-texts.ts`
- **Contenido** (proyectos, hobbies, bio, timeline): campos `Localized` en los archivos de datos de cada feature
- En plantillas: `readonly t = UI; readonly lang = injectLang();` en el componente y `{{ t.seccion.clave[lang()] }}` en el HTML
- **Al añadir nuevo texto**: rellenar siempre ambos idiomas `{ en, es }`
- Selector de idioma en el topbar (icono globe, alterna EN/ES)

## Estilos y CSS

### CSS Framework

- **NO usar Tailwind o Bootstrap** - No están instaladas
- **Solo CSS/SCSS puro**
- **NO usar clases utilitarias** tipo Tailwind (flex, items-center, gap-2, etc.)

### Gestión de Temas

- Tema personalizado: `src/app/mytheme.ts` (basado en Aura de PrimeNG)
- **Modo oscuro forzado**: La aplicación usa siempre modo oscuro (clase `dark-mode` en HTML)
- **Paleta de colores personalizada:**
  - Color primario (contraste/títulos): `#34d399` → `var(--p-primary-color)`
  - Fondo principal: `#1c1c1c` → `var(--p-surface-900)`
  - Cuadros de texto (timeline, about, work): `#FBFBFF` → `var(--p-surface-0)`
  - Texto sobre blanco: `var(--p-surface-900)`
  - Texto secundario sobre blanco: `var(--p-surface-500)`
- **IMPORTANTE: Siempre usar variables CSS del tema (`var(--p-*)`) en lugar de valores hardcodeados**
- **Estilos globales/genéricos → `src/styles.scss`**
  - Clases reutilizables: `.slide`, `.content-card`, `.section-title`
  - Variables CSS personalizadas (spacing, breakpoints)
- **Estilos específicos del componente → archivo .scss del componente**
  - Solo layouts y comportamientos únicos del componente

### Tipografías

- Body: **Roboto** (importada desde `/assets/fonts/`)
- Headings: **Space Grotesk** (importada desde `/assets/fonts/`)

### Diseño Responsive

- **SIEMPRE considerar mobile-first y responsive**
- Evitar tamaños fijos en píxeles cuando sea posible
- Usar unidades relativas (rem, em, %, vh/vw, calc())
- Usar variables CSS para valores reutilizables
- Considerar media queries para diferentes breakpoints

## Deploy

- Build output: carpeta `docs/` (para GitHub Pages)
- `baseHref`: `/portfolio/`
- Comando de build: `npm run build` (ejecuta `ng build` y `move-build.js`, que aplana `docs/browser/` en `docs/` y genera `404.html`)

## Rutas

- Rutas registradas en `src/app/app.routes.ts` (lazy loading): `/home`, `/portfolio`, `/hobbies`, `/bio`, `/contact`
- `/home` es la única página con contenido completo; el resto son stubs pendientes de contenido
- Al crear una nueva página: añadir componente en su carpeta feature y registrar la ruta en `src/app/app.routes.ts`

## Proyectos del Portfolio (patrón tipo blog)

- Los proyectos viven en **un único archivo**: `src/app/portfolio-page/portfolio-projects.ts`
- Para añadir/editar un proyecto: copiar el bloque de plantilla comentado en ese archivo y rellenarlo (título y descripción llevan EN/ES inline)
- Dos categorías: `professional` (trabajo profesional) y `personal` (proyectos por cuenta propia)
- Campo opcional `featured: true`: el proyecto aparece en "Trabajos Destacados" de la home (máx. 3)
- Imágenes de proyectos en `public/assets/images/` (referenciadas como `assets/images/...`)
- Los textos de UI de la página (títulos, filtros, estado vacío) están en `src/app/shared/ui-texts.ts` (sección `portfolio`)
- Cada tarjeta enlaza a su página de detalle `/portfolio/:id` (`project-detail-page/`)
- Campos opcionales del detalle: `content` (texto largo EN/ES, párrafos separados por `\n\n`; si falta se muestra `description`) y `gallery` (array de imágenes extra)
- El mismo patrón de datos se usa en otras páginas: `hobbies-page/hobbies-data.ts` (intros, juegos favoritos, fotos de `public/assets/images/photography/`) y `bio-page/bio-data.ts` (historia, hitos, grupos de skills)
- La experiencia de la home (timeline) se edita en el array de `home-page/home-section-timeline/home-section-timeline.ts`
- Contacto: el formulario de `contact-page/` envía a Formspree si se configura `CONTACT_ENDPOINT` en `contact-page.ts`; sin configurar, abre mailto a `CONTACT_EMAIL` (definido en `src/app/shared/social-links.ts`)

## Especificaciones del Proyecto

### Navbar (Topbar)

- Posición fija en la parte superior
- Ancho completo, sin bordes ni border-radius
- Altura: variable CSS `--navbar-height` (4rem desktop, 3.5rem mobile)
- Items del menú: Home, Portfolio, Hobbies, Bio, Contact, Download CV
- Mobile: ocultar labels de botones, mostrar solo iconos

### Home Page

- Layout basado en slides (secciones de viewport completo)
- Cada slide: `calc(100vh - var(--navbar-height))`
- Primer slide: hero section con nombre y título, centrado
- Botones sociales: fijos en bottom-right (GitHub, Itch.io, LinkedIn, Mail)

### Footer

- Siempre visible en todas las páginas (definido en app.html)
- Diseño en grid responsive (3 columnas desktop, 1 columna mobile)
- Secciones: Información personal, Quick Links, Redes sociales
- Copyright con año dinámico
- Border-top para separación visual

## Comunicación

- Usuario prefiere comunicación en español
- El contenido de la aplicación puede estar en inglés cuando sea apropiado

## Preferencias de Desarrollo

- Código limpio y mantenible
- Minimizar archivos innecesarios
- Organización de componentes por feature
