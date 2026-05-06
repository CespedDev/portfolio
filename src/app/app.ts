import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Topbar } from './topbar/topbar';
import { SocialButtonsComponent } from './social-buttons/social-buttons';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Topbar, SocialButtonsComponent, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  constructor(private translate: TranslateService) {
    // Configurar idioma inicial
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
}
