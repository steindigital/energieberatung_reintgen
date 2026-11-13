import { AUDIENCES, type Audience, type Lang } from '../i18n/types';

/** Alle Seiten der Website. */
export type PageKey = 'home' | 'about' | 'services' | 'knowledge' | 'contact' | 'imprint' | 'privacy';

export const PAGE_KEYS: PageKey[] = ['home', 'about', 'services', 'knowledge', 'contact', 'imprint', 'privacy'];

/** Adressen (URL-Pfade) je Sprache. Englische Seiten liegen unter /en/… */
export const SLUGS: Record<Lang, Record<PageKey, string>> = {
  de: {
    home: '',
    about: 'ueber-mich',
    services: 'leistungen',
    knowledge: 'wissenswertes',
    contact: 'kontakt',
    imprint: 'impressum',
    privacy: 'datenschutz',
  },
  en: {
    home: '',
    about: 'about',
    services: 'services',
    knowledge: 'knowledge',
    contact: 'contact',
    imprint: 'legal-notice',
    privacy: 'privacy',
  },
};

/** Präfix der Sprache in der URL ('' für Deutsch). */
export const LANG_PREFIX: Record<Lang, string> = { de: '', en: 'en' };

/** Hauptnavigation (Kopf- und Fußzeile) – Beschriftungen stehen in den Übersetzungen. */
export const mainNav: PageKey[] = ['home', 'about', 'services', 'knowledge', 'contact'];

/** Rechtliche Seiten (Fußzeile) */
export const legalNav: PageKey[] = ['imprint', 'privacy'];

/** Absoluter Pfad einer Seite in einer Sprache, z. B. ('services', 'en') → '/en/services' */
export function pagePath(page: PageKey, lang: Lang): string {
  const parts = [LANG_PREFIX[lang], SLUGS[lang][page]].filter(Boolean);
  return '/' + parts.join('/');
}

/** Name des URL-Parameters für die Zielgruppe, z. B. /leistungen?audience=business */
export const AUDIENCE_PARAM = 'audience';

/** Liest die Zielgruppe aus einem URL-Parameter ('private' | 'business'), sonst null. */
export function parseAudience(value: string | null): Audience | null {
  return AUDIENCES.includes(value as Audience) ? (value as Audience) : null;
}
