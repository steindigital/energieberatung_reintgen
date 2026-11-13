import { Routes } from '@angular/router';
import { PAGE_KEYS, type PageKey, SLUGS } from './config/navigation';
import type { Lang } from './i18n/types';

type Loader = NonNullable<Routes[number]['loadComponent']>;

/** Seiten-Komponenten (werden bei Bedarf nachgeladen). Rechtstexte haben je Sprache eine eigene Komponente. */
function loaders(lang: Lang): Record<PageKey, Loader> {
  return {
    home: () => import('./pages/home/home.page').then((m) => m.HomePage),
    about: () => import('./pages/about/about.page').then((m) => m.AboutPage),
    services: () => import('./pages/services/services.page').then((m) => m.ServicesPage),
    knowledge: () => import('./pages/knowledge/knowledge.page').then((m) => m.KnowledgePage),
    contact: () => import('./pages/contact/contact.page').then((m) => m.ContactPage),
    imprint:
      lang === 'de'
        ? () => import('./pages/imprint/imprint-de.page').then((m) => m.ImprintDePage)
        : () => import('./pages/imprint/imprint-en.page').then((m) => m.ImprintEnPage),
    privacy:
      lang === 'de'
        ? () => import('./pages/privacy/privacy-de.page').then((m) => m.PrivacyDePage)
        : () => import('./pages/privacy/privacy-en.page').then((m) => m.PrivacyEnPage),
  };
}

/**
 * Erzeugt die Routen einer Sprache. Titel und Beschreibung kommen aus den
 * Übersetzungen (meta) – siehe core/page-title.strategy.ts.
 */
function routesFor(lang: Lang): Routes {
  const load = loaders(lang);
  return [
    ...PAGE_KEYS.map((page) => ({
      path: SLUGS[lang][page],
      pathMatch: 'full' as const,
      data: { page, lang },
      loadComponent: load[page],
    })),
    {
      path: '**',
      data: { page: 'notFound', lang },
      loadComponent: () => import('./pages/not-found/not-found.page').then((m) => m.NotFoundPage),
    },
  ];
}

/** Deutsch unter /…, Englisch unter /en/… */
export const routes: Routes = [{ path: 'en', children: routesFor('en') }, ...routesFor('de')];
