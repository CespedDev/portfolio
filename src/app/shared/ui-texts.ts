import { Localized } from './lang';

/*
 * ── Textos de interfaz de toda la web ────────────────────────────────
 * Cada entrada lleva los dos idiomas juntos. Para añadir un texto:
 * crea la clave { en, es } aquí y úsala en la plantilla como
 * {{ t.seccion.clave[lang()] }} (con `readonly t = UI` en el componente).
 * ─────────────────────────────────────────────────────────────────────
 */
export const UI = {
  nav: {
    home:       { en: 'Home',        es: 'Inicio'       },
    portfolio:  { en: 'Portfolio',   es: 'Portfolio'    },
    hobbies:    { en: 'Hobbies',     es: 'Hobbies'      },
    bio:        { en: 'Bio',         es: 'Bio'          },
    contact:    { en: 'Contact',     es: 'Contacto'     },
    downloadCV: { en: 'Download CV', es: 'Descargar CV' },
  },
  footer: {
    quickLinks: { en: 'Quick Links', es: 'Enlaces Rápidos' },
    connect:    { en: 'Connect',     es: 'Conecta'         },
    rights:     { en: 'All rights reserved.', es: 'Todos los derechos reservados.' },
    madeWith:   { en: 'Made with Angular & PrimeNG', es: 'Hecho con Angular & PrimeNG' },
  },
  hero: {
    greeting:   { en: "Hi, I'm", es: 'Hola, soy' },
    title:      { en: 'Videogame & FullStack Programmer', es: 'Programador de Videojuegos y FullStack' },
    viewWork:   { en: 'View my work', es: 'Ver mi trabajo' },
    scrollDown: { en: 'Scroll down',  es: 'Bajar' },
  },
  about: {
    title:      { en: 'About Me', es: 'Sobre Mí' },
    text: {
      en: 'Passionate about creating interactive experiences and developing web applications, with a solid technical foundation in C#, C++, Java, and TypeScript. I have experience with Angular and Spring Boot for full stack development, as well as with Unity and Unreal Engine for simulation and virtual environment projects. I stand out for my technical versatility, creativity, and attention to detail in designing both web and immersive experiences.',
      es: 'Apasionado por crear experiencias interactivas y desarrollar aplicaciones web, con una sólida base técnica en C#, C++, Java y TypeScript. Tengo experiencia con Angular y Spring Boot para desarrollo full stack, así como con Unity y Unreal Engine para proyectos de simulación y entornos virtuales. Destaco por mi versatilidad técnica, creatividad y atención al detalle en el diseño de experiencias tanto web como inmersivas.',
    },
    contactMe:  { en: 'Contact Me',  es: 'Contáctame'   },
    downloadCV: { en: 'Download CV', es: 'Descargar CV' },
  },
  timeline: {
    title: { en: 'Experience', es: 'Experiencia' },
  },
  work: {
    title:    { en: 'Featured Work', es: 'Trabajos Destacados' },
    subtitle: { en: 'Some of my recent projects and experiences', es: 'Algunos de mis proyectos y experiencias recientes' },
    andMore:  { en: 'And More', es: 'Y Más' },
    viewAll:  { en: 'View all my work and experiences', es: 'Ver todo mi trabajo y experiencias' },
  },
  portfolio: {
    title:        { en: 'Portfolio', es: 'Portfolio' },
    subtitle:     { en: 'Professional work and personal projects', es: 'Trabajo profesional y proyectos propios' },
    professional: { en: 'Professional Work', es: 'Trabajo Profesional' },
    personal:     { en: 'Personal Projects', es: 'Proyectos Propios' },
    empty:        { en: 'More projects coming soon.', es: 'Más proyectos próximamente.' },
    back:         { en: 'Back to portfolio', es: 'Volver al portfolio' },
    notFound:     { en: 'Project not found.', es: 'Proyecto no encontrado.' },
  },
  hobbies: {
    title:            { en: 'Hobbies', es: 'Hobbies' },
    subtitle:         { en: "What I do when I'm not coding", es: 'Lo que hago cuando no estoy programando' },
    gamingTitle:      { en: 'Gaming', es: 'Videojuegos' },
    favorites:        { en: 'Some favorites', es: 'Algunos favoritos' },
    photographyTitle: { en: 'Photography', es: 'Fotografía' },
  },
  bio: {
    title:       { en: 'About Me', es: 'Sobre Mí' },
    subtitle:    { en: 'Game developer at heart, full stack developer by trade', es: 'Desarrollador de videojuegos de corazón, full stack de profesión' },
    highlights:  { en: 'Highlights', es: 'Hitos' },
    skillsTitle: { en: 'Skills', es: 'Habilidades' },
  },
  contact: {
    title:    { en: 'Contact', es: 'Contacto' },
    subtitle: { en: 'Have a project in mind or just want to say hi?', es: '¿Tienes un proyecto en mente o simplemente quieres saludar?' },
    name:     { en: 'Name', es: 'Nombre' },
    email:    { en: 'Email', es: 'Email' },
    message:  { en: 'Message', es: 'Mensaje' },
    send:     { en: 'Send message', es: 'Enviar mensaje' },
    sending:  { en: 'Sending...', es: 'Enviando...' },
    sent:     { en: "Message sent! I'll get back to you soon.", es: '¡Mensaje enviado! Te responderé pronto.' },
    error:    { en: 'Something went wrong. Please try again or email me directly.', es: 'Algo ha fallado. Inténtalo de nuevo o escríbeme directamente.' },
    direct:   { en: 'Or reach me directly', es: 'O contacta directamente' },
  },
} satisfies Record<string, Record<string, Localized>>;
