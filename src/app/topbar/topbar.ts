import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-topbar',
  imports: [RouterLink, ToolbarModule, ButtonModule, DrawerModule, TranslateModule],
  templateUrl: './topbar.html',
  styleUrl: './topbar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Topbar {
  private readonly translate = inject(TranslateService);

  readonly mobileMenuVisible = signal(false);
  readonly currentLang = signal(this.translate.currentLang || this.translate.defaultLang || 'en');
  readonly languageLabel = computed(() => this.currentLang() === 'en' ? 'EN' : 'ES');

  switchLanguage(): void {
    this.currentLang.update(lang => lang === 'en' ? 'es' : 'en');
    this.translate.use(this.currentLang());
  }
}
