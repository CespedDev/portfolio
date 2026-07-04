import { Signal, signal } from '@angular/core';

export type Lang = 'en' | 'es';

/** Texto con ambos idiomas inline; en plantillas se renderiza con texto[lang()] */
export interface Localized {
  en: string;
  es: string;
}

const currentLang = signal<Lang>(localStorage.getItem('lang') === 'es' ? 'es' : 'en');

/** Señal de solo lectura con el idioma actual */
export function injectLang(): Signal<Lang> {
  return currentLang.asReadonly();
}

/** Cambia el idioma, lo persiste y actualiza el atributo lang del documento */
export function setLang(lang: Lang): void {
  currentLang.set(lang);
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
}
