import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
import { injectLang, setLang } from '../shared/lang';
import { UI } from '../shared/ui-texts';

@Component({
  selector: 'app-topbar',
  imports: [RouterLink, RouterLinkActive, ToolbarModule, ButtonModule, DrawerModule],
  templateUrl: './topbar.html',
  styleUrl: './topbar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Topbar {
  readonly t = UI;
  readonly lang = injectLang();

  readonly mobileMenuVisible = signal(false);
  readonly languageLabel = computed(() => this.lang() === 'en' ? 'EN' : 'ES');

  switchLanguage(): void {
    setLang(this.lang() === 'en' ? 'es' : 'en');
  }
}
