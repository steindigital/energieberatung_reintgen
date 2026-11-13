import { DOCUMENT, Injectable, computed, effect, inject, signal } from '@angular/core';
import { ActivatedRouteSnapshot, NavigationEnd, ResolveEnd, Router } from '@angular/router';
import { type PageKey, pagePath } from '../config/navigation';
import { site } from '../config/site.config';
import { de } from './de';
import { en } from './en';
import type { Lang, Translations } from './types';

export const TRANSLATIONS: Record<Lang, Translations> = { de, en };

export type RoutePage = PageKey | 'notFound';

/**
 * Aktuelle Sprache und Texte. Die Sprache ergibt sich aus der URL
 * (/en/… = Englisch, sonst Deutsch) und wird über die Routen-Daten gesetzt.
 */
@Injectable({ providedIn: 'root' })
export class I18nService {
  private readonly document = inject(DOCUMENT);

  readonly lang = signal<Lang>('de');
  readonly page = signal<RoutePage>('home');
  readonly fragment = signal<string | null>(null);

  /** Alle Texte der aktuellen Sprache */
  readonly t = computed(() => TRANSLATIONS[this.lang()]);
  /** Sprachabhängige Angaben aus site.config.ts (Berufsbezeichnung, Region, Erreichbarkeit) */
  readonly siteText = computed(() => site.localized[this.lang()]);
  readonly otherLang = computed<Lang>(() => (this.lang() === 'de' ? 'en' : 'de'));
  readonly otherTranslations = computed(() => TRANSLATIONS[this.otherLang()]);

  constructor() {
    const router = inject(Router);

    // Sprache schon vor dem Anzeigen der neuen Seite setzen
    router.events.subscribe((event) => {
      if (event instanceof ResolveEnd) {
        const data = deepestChild(event.state.root).data;
        this.lang.set((data['lang'] as Lang | undefined) ?? 'de');
        this.page.set((data['page'] as RoutePage | undefined) ?? 'notFound');
      }
      if (event instanceof NavigationEnd) {
        this.fragment.set(router.parseUrl(event.urlAfterRedirects).fragment);
      }
    });

    effect(() => {
      this.document.documentElement.lang = this.lang();
    });
  }

  /** Pfad einer Seite in der aktuellen (oder angegebenen) Sprache */
  path(page: PageKey, lang: Lang = this.lang()): string {
    return pagePath(page, lang);
  }

  /** Entsprechende Seite in der anderen Sprache (für den Sprachumschalter) */
  readonly switchPath = computed(() => {
    const page = this.page();
    return pagePath(page === 'notFound' ? 'home' : page, this.otherLang());
  });
}

export function deepestChild(route: ActivatedRouteSnapshot): ActivatedRouteSnapshot {
  while (route.firstChild) route = route.firstChild;
  return route;
}
