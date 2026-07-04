import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Topbar } from './topbar/topbar';
import { SocialButtonsComponent } from './social-buttons/social-buttons';
import { Footer } from './footer/footer';
import { injectLang } from './shared/lang';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Topbar, SocialButtonsComponent, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  private readonly doc = inject(DOCUMENT);

  constructor() {
    this.doc.documentElement.lang = injectLang()();
  }
}
