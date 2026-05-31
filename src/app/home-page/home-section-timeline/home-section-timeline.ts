import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

export interface TimelineItem {
  key: string;
  side: 'left' | 'right';
}

@Component({
  selector: 'app-home-section-timeline',
  templateUrl: './home-section-timeline.html',
  styleUrls: ['./home-section-timeline.scss'],
  standalone: true,
  imports: [TranslatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeSectionTimelineComponent {
  readonly timelineItems: TimelineItem[] = [
    { key: 'soltel',     side: 'left'  },
    { key: 'astroasis',  side: 'right' },
    { key: 'greenEagle', side: 'left'  },
    { key: 'simfor',     side: 'right' },
    { key: 'udit',       side: 'left'  },
  ];
}
