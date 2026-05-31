import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-home-section-about',
  imports: [ButtonModule, TranslatePipe],
  templateUrl: './home-section-about.html',
  styleUrls: ['./home-section-about.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeSectionAboutComponent {
}
