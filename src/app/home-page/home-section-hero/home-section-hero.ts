import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-home-section-hero',
  templateUrl: './home-section-hero.html',
  styleUrls: ['./home-section-hero.scss'],
  standalone: true,
  imports: [ButtonModule, TranslatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeSectionHeroComponent {
  private readonly doc = inject(DOCUMENT);

  scrollTo(selector: string): void {
    this.doc.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' });
  }
}
