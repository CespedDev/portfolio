import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-home-section-hero',
  templateUrl: './home-section-hero.html',
  styleUrls: ['./home-section-hero.scss'],
  standalone: true,
  imports: [ButtonModule, TranslateModule]
})
export class HomeSectionHeroComponent {
}
