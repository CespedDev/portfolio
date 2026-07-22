import { Localized } from '../shared/lang';

export type ProjectCategory = 'professional' | 'personal';

export interface ProjectLink {
  icon: string;   // clase de PrimeIcons, p. ej. 'pi pi-github'
  label: string;  // texto visible, p. ej. 'GitHub'
  url: string;
}

export interface PortfolioProject {
  id: string;              // único, en kebab-case
  category: ProjectCategory;
  featured?: boolean;      // opcional: se muestra en "Trabajos Destacados" de la home (máx. 3)
  year: string;            // texto libre: '2024' o '2024 — Present'
  image: string;           // ruta bajo assets/, p. ej. 'assets/images/mi-proyecto.png' (portada de la tarjeta y 1ª imagen del carrusel)
  tags: string[];          // tecnologías o etiquetas
  title: Localized;
  description: Localized;  // resumen corto para la tarjeta del grid
  links?: ProjectLink[];   // opcional: botones bajo la descripción
  content?: Localized;     // opcional: texto largo de la página de detalle; separa párrafos con una línea en blanco (\n\n)
  gallery?: string[];      // opcional: imágenes extra; se muestran junto a `image` en el carrusel de la página de detalle
}

/*
 * ── Cómo añadir un proyecto ──────────────────────────────────────────
 * Copia este bloque dentro del array, rellénalo y guarda. Nada más.
 *
 * {
 *   id: 'mi-proyecto',
 *   category: 'personal',            // 'professional' | 'personal'
 *   year: '2026',
 *   image: 'assets/images/mi-proyecto.png',   // súbela a public/assets/images/
 *   tags: ['Unity', 'C#'],
 *   title: { en: 'My Project', es: 'Mi Proyecto' },
 *   description: {
 *     en: 'Short description in English.',
 *     es: 'Descripción corta en español.',
 *   },
 *   links: [
 *     { icon: 'pi pi-github', label: 'GitHub', url: 'https://github.com/CespedDev/mi-proyecto' },
 *   ],
 *   // Opcional: texto largo del detalle (párrafos separados por \n\n).
 *   // Si no lo pones, el detalle muestra la description.
 *   content: {
 *     en: 'First paragraph.\n\nSecond paragraph.',
 *     es: 'Primer párrafo.\n\nSegundo párrafo.',
 *   },
 *   // Opcional: imágenes extra del detalle. Se muestran, junto a `image`,
 *   // como carrusel en la página de detalle (flechas + indicadores).
 *   gallery: ['assets/images/mi-proyecto-2.png', 'assets/images/mi-proyecto-3.png'],
 * },
 * ─────────────────────────────────────────────────────────────────────
 */
export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  // ——— Trabajo profesional ———
  {
    id: 'soltel-portal',
    category: 'professional',
    year: '2025 — Present',
    image: 'assets/images/soltel.svg',
    tags: ['Angular', 'Spring Boot', 'TypeScript'],
    title: { en: 'Institutional Web Portal', es: 'Portal Web Institucional' },
    description: {
      en: 'Full stack development of an institutional web portal at Soltel: Angular front end and Spring Boot back end.',
      es: 'Desarrollo full stack de un portal web institucional en Soltel: front end en Angular y back end en Spring Boot.',
    },
  },
  {
    id: 'green-eagle',
    category: 'professional',
    featured: true,
    year: '2024',
    image: 'assets/images/green-eagle.svg',
    tags: ['Serious Game', 'Simulation'],
    title: { en: 'Green Eagle Solutions', es: 'Green Eagle Solutions' },
    description: {
      en: "Serious game for wind farm control simulation, adapted to the client's requirements. Design, art and programming.",
      es: 'Serious game de simulación de control de parques eólicos, adaptado a los requisitos del cliente. Diseño, arte y programación.',
    },
  },
  {
    id: 'simfor',
    category: 'professional',
    featured: true,
    year: '2022 — 2023',
    image: 'assets/images/simfor.svg',
    tags: ['Unity', 'C#', 'QA'],
    title: { en: 'SIMFOR', es: 'SIMFOR' },
    description: {
      en: 'Airport operations simulator. Dynamic configuration menus, a sound system built from scratch and the traffic system.',
      es: 'Simulador de operaciones aeroportuarias. Menús de configuración dinámica, sistema de sonido desde cero y sistema de tráfico.',
    },
    content: {
      en: 'Airport operations simulator where I worked as a C# / Unity 3D programmer and QA tester.\n\nMy main contributions: dynamic configuration menus, a sound system built from scratch and the road traffic system.',
      es: 'Simulador de operaciones aeroportuarias en el que trabajé como programador C# / Unity 3D y QA tester.\n\nMis principales contribuciones: menús de configuración dinámica, un sistema de sonido construido desde cero y el sistema de tráfico.',
    },
  },

  // ——— Proyectos propios ———
  {
    id: 'astroasis',
    category: 'personal',
    featured: true,
    year: '2024 — Present',
    image: 'assets/images/astroasis.svg',
    tags: ['Unity', 'C#', 'VR'],
    title: { en: 'AstrOasis', es: 'AstrOasis' },
    description: {
      en: 'VR rhythm shooter selected for PlayStation Talents. Director and lead programmer of the project.',
      es: 'VR rhythm shooter seleccionado para PlayStation Talents. Director y programador principal del proyecto.',
    },
    links: [
      { icon: 'itch-icon', label: 'Itch.io', url: 'https://cespeddev.itch.io' },
    ],
    content: {
      en: 'AstrOasis is a VR rhythm shooter selected for PlayStation Talents. I direct the project and lead its programming.\n\nThe game mixes rhythm mechanics with shooter gameplay in virtual reality, built in Unity with C#.',
      es: 'AstrOasis es un VR rhythm shooter seleccionado para PlayStation Talents. Dirijo el proyecto y lidero su programación.\n\nEl juego mezcla mecánicas de ritmo con gameplay de shooter en realidad virtual, desarrollado en Unity con C#.',
    },
  },
];
