import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Localized, injectLang } from '../../shared/lang';
import { UI } from '../../shared/ui-texts';

export interface TimelineItem {
  year: Localized;
  title: string;
  text: Localized;
  side: 'left' | 'right';
}

/*
 * Para añadir una entrada a la experiencia: copia un bloque del array,
 * rellénalo y alterna side left/right para mantener el zigzag.
 */
@Component({
  selector: 'app-home-section-timeline',
  templateUrl: './home-section-timeline.html',
  styleUrls: ['./home-section-timeline.scss'],
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeSectionTimelineComponent {
  readonly t = UI;
  readonly lang = injectLang();

  readonly timelineItems: TimelineItem[] = [
    {
      title: 'Soltel',
      year: { en: '2025 - Present', es: '2025 - Presente' },
      text: {
        en: 'Development of an institutional web portal. Full stack developer (Angular / Spring Boot).',
        es: 'Desarrollo de portal web institucional. Desarrollador full stack (Angular / Spring Boot).',
      },
      side: 'left',
    },
    {
      title: 'AstrOasis',
      year: { en: '2024 - Present', es: '2024 - Presente' },
      text: {
        en: 'VR Rhythm Shooter. Selected for PlayStation Talents. Director and lead programmer.',
        es: 'VR Rhythm Shooter. Seleccionado para PlayStation Talents. Director y programador principal.',
      },
      side: 'right',
    },
    {
      title: 'Green Eagle Solution',
      year: { en: '2024', es: '2024' },
      text: {
        en: "Serious game for wind farm control simulation. Design, art, and programming. Project adapted to the client's requirements.",
        es: 'Serious game para simulación de control de parques eólicos. Diseño, arte y programación. Proyecto adaptado a los requisitos del cliente.',
      },
      side: 'left',
    },
    {
      title: 'SIMFOR',
      year: { en: '2022 - 2023', es: '2022 - 2023' },
      text: {
        en: 'Airport operations simulator. C# / Unity 3D Programmer and QA Tester. Dynamic configuration menus, sound system built from scratch, and traffic system.',
        es: 'Simulador de operaciones aeroportuarias. Programador C# / Unity 3D y QA Tester. Menús de configuración dinámica, sistema de sonido construido desde cero y sistema de tráfico.',
      },
      side: 'right',
    },
    {
      title: 'UDIT',
      year: { en: '2020 - 2024', es: '2020 - 2024' },
      text: {
        en: "Bachelor's Degree in Video Game Design and Development. Honors in Fundamentals of Programming and Programming II. Winner at the Feelmotion XI short film festival in 2022.",
        es: 'Grado en Diseño y Desarrollo de Videojuegos. Matrícula de honor en Fundamentos de Programación y Programación II. Ganador del festival de cortometrajes Feelmotion XI en 2022.',
      },
      side: 'left',
    },
  ];
}
