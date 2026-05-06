import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-home-section-about',
  imports: [ButtonModule, TranslateModule],
  templateUrl: './home-section-about.html',
  styleUrls: ['./home-section-about.scss'],
})
export class HomeSectionAboutComponent {
}
