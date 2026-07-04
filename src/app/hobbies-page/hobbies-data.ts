import { Localized } from '../shared/lang';

/*
 * ── Cómo editar esta página ──────────────────────────────────────────
 * - Intros: textos EN/ES; separa párrafos con una línea en blanco (\n\n)
 * - FAVORITE_GAMES: añade o quita títulos libremente (se muestran como chips)
 * - PHOTOS: sube tus fotos a public/assets/images/photography/ y añade
 *   aquí la ruta 'assets/images/photography/mi-foto.jpg'
 * ─────────────────────────────────────────────────────────────────────
 */

export const GAMING_INTRO: Localized = {
  en: 'Video games are where it all started for me. Playing them is still the best way I know to study game design: I pay attention to what makes a mechanic feel right, and I bring that back to my own projects.',
  es: 'Los videojuegos son donde empezó todo para mí. Jugarlos sigue siendo la mejor forma que conozco de estudiar diseño de juegos: me fijo en qué hace que una mecánica se sienta bien, y me lo llevo a mis propios proyectos.',
};

// TODO: sustituir por tus juegos favoritos reales
export const FAVORITE_GAMES: string[] = [
  'Hollow Knight',
  'Hades',
  'The Last of Us',
  'Beat Saber',
];

export const PHOTOGRAPHY_INTRO: Localized = {
  en: 'Photography is my way of looking at the world when I step away from the screen. Light, composition and timing — it trains the same eye I use for game scenes and environments.',
  es: 'La fotografía es mi manera de mirar el mundo cuando me alejo de la pantalla. Luz, composición y momento: entrena el mismo ojo que uso para las escenas y entornos de los juegos.',
};

// TODO: sustituir por tus fotos reales (public/assets/images/photography/)
export const PHOTOS: string[] = [
  'assets/images/photography/photo-1.svg',
  'assets/images/photography/photo-2.svg',
  'assets/images/photography/photo-3.svg',
];
