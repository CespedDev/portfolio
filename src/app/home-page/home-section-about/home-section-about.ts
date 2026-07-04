import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { injectLang } from '../../shared/lang';
import { UI } from '../../shared/ui-texts';

@Component({
  selector: 'app-home-section-about',
  imports: [RouterLink, ButtonModule],
  templateUrl: './home-section-about.html',
  styleUrls: ['./home-section-about.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeSectionAboutComponent {
  readonly t = UI;
  readonly lang = injectLang();
}
