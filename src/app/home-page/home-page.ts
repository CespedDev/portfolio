import { Component } from '@angular/core';
import { HomeSectionHeroComponent } from './home-section-hero/home-section-hero';
import { HomeSectionAboutComponent } from './home-section-about/home-section-about';
import { HomeSectionTimelineComponent } from './home-section-timeline/home-section-timeline';

@Component({
  selector: 'app-home-page',
  imports: [
    HomeSectionHeroComponent,
    HomeSectionAboutComponent,
    HomeSectionTimelineComponent
  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {}
