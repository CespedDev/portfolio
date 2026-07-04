import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

export interface WorkItem {
  titleKey: string;
  descriptionKey: string;
  imageUrl: string;
  tagsKey?: string;
}

@Component({
  selector: 'app-home-section-work',
  imports: [ButtonModule, RouterLink, TranslatePipe],
  templateUrl: './home-section-work.html',
  styleUrls: ['./home-section-work.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeSectionWorkComponent {
  works: WorkItem[] = [
    {
      titleKey: 'work.projects.astroasis.title',
      descriptionKey: 'work.projects.astroasis.description',
      imageUrl: 'assets/images/astroasis.svg',
      tagsKey: 'work.projects.astroasis.tags'
    },
    {
      titleKey: 'work.projects.simfor.title',
      descriptionKey: 'work.projects.simfor.description',
      imageUrl: 'assets/images/simfor.svg',
      tagsKey: 'work.projects.simfor.tags'
    },
    {
      titleKey: 'work.projects.greenEagle.title',
      descriptionKey: 'work.projects.greenEagle.description',
      imageUrl: 'assets/images/green-eagle.svg',
      tagsKey: 'work.projects.greenEagle.tags'
    }
  ];
}
