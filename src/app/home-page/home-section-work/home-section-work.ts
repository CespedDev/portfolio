import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { injectLang } from '../../shared/lang';
import { UI } from '../../shared/ui-texts';
import { PORTFOLIO_PROJECTS } from '../../portfolio-page/portfolio-projects';

@Component({
  selector: 'app-home-section-work',
  imports: [RouterLink],
  templateUrl: './home-section-work.html',
  styleUrls: ['./home-section-work.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeSectionWorkComponent {
  readonly t = UI;
  readonly lang = injectLang();

  // Los destacados se marcan con featured: true en portfolio-projects.ts
  readonly works = PORTFOLIO_PROJECTS.filter(project => project.featured);
}
