import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { ButtonModule } from 'primeng/button';
import { injectLang } from '../../shared/lang';
import { UI } from '../../shared/ui-texts';
import { PORTFOLIO_PROJECTS } from '../portfolio-projects';

@Component({
  selector: 'app-project-detail-page',
  standalone: true,
  imports: [RouterLink, ButtonModule],
  templateUrl: './project-detail-page.html',
  styleUrl: './project-detail-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectDetailPage {
  private readonly route = inject(ActivatedRoute);

  readonly t = UI;
  readonly lang = injectLang();

  private readonly id = toSignal(
    this.route.paramMap.pipe(map(params => params.get('id'))),
    { initialValue: this.route.snapshot.paramMap.get('id') },
  );

  readonly project = computed(() =>
    PORTFOLIO_PROJECTS.find(project => project.id === this.id())
  );

  readonly paragraphs = computed(() => {
    const project = this.project();
    if (!project) return [];
    const text = project.content?.[this.lang()] ?? project.description[this.lang()];
    return text.split('\n\n');
  });
}
