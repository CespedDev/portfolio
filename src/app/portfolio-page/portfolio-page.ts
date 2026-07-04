import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ButtonModule } from 'primeng/button';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { PORTFOLIO_PROJECTS, ProjectCategory } from './portfolio-projects';

@Component({
  selector: 'app-portfolio-page',
  standalone: true,
  imports: [FormsModule, RouterLink, SelectButtonModule, ButtonModule, TranslatePipe],
  templateUrl: './portfolio-page.html',
  styleUrl: './portfolio-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioPage {
  private readonly translate = inject(TranslateService);

  readonly lang = toSignal(
    this.translate.onLangChange.pipe(map(event => event.lang as 'en' | 'es')),
    { initialValue: (this.translate.currentLang as 'en' | 'es') || 'en' },
  );

  readonly categoryOptions = [
    { labelKey: 'portfolio.categories.professional', value: 'professional' as ProjectCategory },
    { labelKey: 'portfolio.categories.personal',     value: 'personal' as ProjectCategory     },
  ];

  readonly category = signal<ProjectCategory>('professional');
  readonly projects = computed(() =>
    PORTFOLIO_PROJECTS.filter(project => project.category === this.category())
  );
}
