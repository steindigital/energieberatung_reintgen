import { DOCUMENT, Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { type PageKey, pagePath } from '../config/navigation';
import { site } from '../config/site.config';
// Hinweis: I18nService hier nicht injizieren – er hängt vom Router ab (zirkuläre Abhängigkeit).
import { TRANSLATIONS, type RoutePage, deepestChild } from '../i18n/i18n.service';
import type { Lang } from '../i18n/types';

const LANGS: Lang[] = ['de', 'en'];

/**
 * Setzt pro Seite Titel („Seitentitel | Markenname“), Meta-Beschreibung und
 * hreflang-Verweise auf die jeweils andere Sprachfassung.
 */
@Injectable({ providedIn: 'root' })
export class PageTitleStrategy extends TitleStrategy {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  override updateTitle(snapshot: RouterStateSnapshot): void {
    const data = deepestChild(snapshot.root).data;
    const page = (data['page'] as RoutePage | undefined) ?? 'notFound';
    const lang = (data['lang'] as Lang | undefined) ?? 'de';
    const { title, description } = TRANSLATIONS[lang].meta[page];

    this.title.setTitle(`${title} | ${site.brandName}`);
    this.meta.updateTag({ name: 'description', content: description });
    this.updateAlternateLinks(page);
  }

  /** <link rel="alternate" hreflang="…"> für Suchmaschinen */
  private updateAlternateLinks(page: RoutePage): void {
    this.document.head.querySelectorAll('link[rel="alternate"][hreflang]').forEach((link) => link.remove());
    if (page === 'notFound') return;

    // baseURI berücksichtigt <base href> – wichtig, wenn die Seite in einem Unterordner liegt (z. B. GitHub Pages)
    const base = this.document.baseURI;
    const add = (hreflang: string, lang: Lang) => {
      const link = this.document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = hreflang;
      link.href = new URL(pagePath(page as PageKey, lang).slice(1), base).href;
      this.document.head.appendChild(link);
    };
    LANGS.forEach((lang) => add(lang, lang));
    add('x-default', 'de');
  }
}
