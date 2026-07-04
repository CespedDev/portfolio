import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { injectLang } from '../../shared/lang';
import { UI } from '../../shared/ui-texts';

@Component({
  selector: 'app-home-section-hero',
  templateUrl: './home-section-hero.html',
  styleUrls: ['./home-section-hero.scss'],
  standalone: true,
  imports: [ButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeSectionHeroComponent {
  private readonly doc = inject(DOCUMENT);

  readonly t = UI;
  readonly lang = injectLang();

  scrollTo(selector: string): void {
    this.doc.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' });
  }
}
