import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ButtonModule } from 'primeng/button';
import { injectLang } from '../shared/lang';
import { UI } from '../shared/ui-texts';
import { PORTFOLIO_PROJECTS, ProjectCategory } from './portfolio-projects';

@Component({
  selector: 'app-portfolio-page',
  standalone: true,
  imports: [FormsModule, RouterLink, SelectButtonModule, ButtonModule],
  templateUrl: './portfolio-page.html',
  styleUrl: './portfolio-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioPage {
  readonly t = UI;
  readonly lang = injectLang();

  readonly categoryOptions = [
    { label: UI.portfolio.professional, value: 'professional' as ProjectCategory },
    { label: UI.portfolio.personal,     value: 'personal' as ProjectCategory     },
  ];

  readonly category = signal<ProjectCategory>('professional');
  readonly projects = computed(() =>
    PORTFOLIO_PROJECTS.filter(project => project.category === this.category())
  );
}
