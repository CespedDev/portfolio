import { Localized } from '../shared/lang';

/*
 * ── Cómo editar esta página ──────────────────────────────────────────
 * - BIO_STORY: tu historia en EN/ES; separa párrafos con una línea en blanco (\n\n)
 * - BIO_HIGHLIGHTS: hitos (premios, formación...); icono = clase de PrimeIcons
 * - SKILL_GROUPS: grupos de habilidades; label con ambos idiomas inline
 * ─────────────────────────────────────────────────────────────────────
 */

export const BIO_STORY: Localized = {
  en: "I'm Carlos Cabrera, a video game developer focused on programming. I studied Video Game Design and Development at UDIT (2020–2024), where I earned honors in programming subjects and discovered that what I enjoy most is building the systems that make play feel good.\n\nProfessionally I've worked on an airport operations simulator (SIMFOR) as a C# / Unity programmer and QA tester, built a serious game for wind farm control simulation for Green Eagle Solutions, and today I work as a full stack developer with Angular and Spring Boot at Soltel.\n\nOutside my day job I direct AstrOasis, a VR rhythm shooter selected for PlayStation Talents, where I also lead the programming. When I'm not making games, I'm probably playing them — or out taking photos.",
  es: 'Soy Carlos Cabrera, desarrollador de videojuegos centrado en programación. Estudié Diseño y Desarrollo de Videojuegos en UDIT (2020–2024), donde obtuve matrículas de honor en asignaturas de programación y descubrí que lo que más disfruto es construir los sistemas que hacen que jugar se sienta bien.\n\nProfesionalmente he trabajado en un simulador de operaciones aeroportuarias (SIMFOR) como programador C# / Unity y QA tester, desarrollé un serious game de simulación de control de parques eólicos para Green Eagle Solutions, y hoy trabajo como desarrollador full stack con Angular y Spring Boot en Soltel.\n\nFuera de mi trabajo dirijo AstrOasis, un VR rhythm shooter seleccionado para PlayStation Talents, donde también lidero la programación. Cuando no estoy haciendo juegos, probablemente esté jugándolos — o fuera haciendo fotos.',
};

export interface BioHighlight {
  icon: string;   // clase de PrimeIcons, p. ej. 'pi pi-trophy'
  year: string;
  title: Localized;
  text: Localized;
}

export const BIO_HIGHLIGHTS: BioHighlight[] = [
  {
    icon: 'pi pi-trophy',
    year: '2024',
    title: { en: 'PlayStation Talents', es: 'PlayStation Talents' },
    text: {
      en: 'AstrOasis, the VR rhythm shooter I direct, was selected for the PlayStation Talents program.',
      es: 'AstrOasis, el VR rhythm shooter que dirijo, fue seleccionado para el programa PlayStation Talents.',
    },
  },
  {
    icon: 'pi pi-video',
    year: '2022',
    title: { en: 'Feelmotion XI Winner', es: 'Ganador de Feelmotion XI' },
    text: {
      en: 'Winner at the Feelmotion XI short film festival.',
      es: 'Ganador del festival de cortometrajes Feelmotion XI.',
    },
  },
  {
    icon: 'pi pi-graduation-cap',
    year: '2020 — 2024',
    title: { en: "Bachelor's Degree, UDIT", es: 'Grado universitario, UDIT' },
    text: {
      en: 'Video Game Design and Development, with honors in Fundamentals of Programming and Programming II.',
      es: 'Diseño y Desarrollo de Videojuegos, con matrícula de honor en Fundamentos de Programación y Programación II.',
    },
  },
];

export interface SkillGroup {
  label: Localized;
  skills: string[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  { label: { en: 'Languages',        es: 'Lenguajes' },        skills: ['C#', 'C++', 'Java', 'TypeScript'] },
  { label: { en: 'Game Engines',     es: 'Motores de juego' }, skills: ['Unity', 'Unreal Engine'] },
  { label: { en: 'Web & Full Stack', es: 'Web y Full Stack' }, skills: ['Angular', 'Spring Boot', 'PrimeNG'] },
];
