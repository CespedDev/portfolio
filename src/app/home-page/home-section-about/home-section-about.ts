import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-home-section-about',
  templateUrl: './home-section-about.html',
  styleUrls: ['./home-section-about.scss'],
  standalone: true,
  imports: [ButtonModule]
})
export class HomeSectionAboutComponent {
}
