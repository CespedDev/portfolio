import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

export interface WorkItem {
  titleKey: string;
  descriptionKey: string;
  imageUrl: string;
  tagsKey?: string;
}

@Component({
  selector: 'app-home-section-work',
  imports: [ButtonModule, RouterLink, TranslateModule],
  templateUrl: './home-section-work.html',
  styleUrls: ['./home-section-work.scss'],
})
export class HomeSectionWorkComponent {
  works: WorkItem[] = [
    {
      titleKey: 'work.projects.project1.title',
      descriptionKey: 'work.projects.project1.description',
      imageUrl: 'assets/images/work1.jpg',
      tagsKey: 'work.projects.project1.tags'
    },
    {
      titleKey: 'work.projects.project2.title',
      descriptionKey: 'work.projects.project2.description',
      imageUrl: 'assets/images/work2.jpg',
      tagsKey: 'work.projects.project2.tags'
    },
    {
      titleKey: 'work.projects.project3.title',
      descriptionKey: 'work.projects.project3.description',
      imageUrl: 'assets/images/work3.jpg',
      tagsKey: 'work.projects.project3.tags'
    }
  ];
}
