import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-topbar',
  imports: [RouterLink, RouterLinkActive, ToolbarModule, ButtonModule, DrawerModule, TranslatePipe],
  templateUrl: './topbar.html',
  styleUrl: './topbar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Topbar {
  private readonly translate = inject(TranslateService);
  private readonly doc = inject(DOCUMENT);

  readonly mobileMenuVisible = signal(false);
  readonly currentLang = signal(localStorage.getItem('lang') || 'en');
  readonly languageLabel = computed(() => this.currentLang() === 'en' ? 'EN' : 'ES');

  switchLanguage(): void {
    this.currentLang.update(lang => lang === 'en' ? 'es' : 'en');
    const newLang = this.currentLang();
    this.translate.use(newLang);
    localStorage.setItem('lang', newLang);
    this.doc.documentElement.lang = newLang;
  }
}
