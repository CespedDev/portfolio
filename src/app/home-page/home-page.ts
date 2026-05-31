import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HomeSectionHeroComponent } from './home-section-hero/home-section-hero';
import { HomeSectionAboutComponent } from './home-section-about/home-section-about';
import { HomeSectionTimelineComponent } from './home-section-timeline/home-section-timeline';
import { HomeSectionWorkComponent } from './home-section-work/home-section-work';

@Component({
  selector: 'app-home-page',
  imports: [
    HomeSectionHeroComponent,
    HomeSectionAboutComponent,
    HomeSectionTimelineComponent,
    HomeSectionWorkComponent
  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {}
