import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, HttpClient } from '@angular/common/http';
import { providePrimeNG } from 'primeng/config';
import { provideTranslateService, TranslateLoader, TranslationObject } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import MyTheme from './mytheme';

import { routes } from './app.routes';

export class I18nLoader implements TranslateLoader {
  constructor(private http: HttpClient) {}
  getTranslation(lang: string): Observable<TranslationObject> {
    return this.http.get<TranslationObject>(`assets/i18n/${lang}.json`);
  }
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(),
    provideTranslateService({
      fallbackLang: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => new I18nLoader(http),
        deps: [HttpClient]
      }
    }),
    providePrimeNG({
      theme: {
        preset: MyTheme,
        options: {
          darkModeSelector: '.dark-mode'
        }
      }
    })
  ]
};
