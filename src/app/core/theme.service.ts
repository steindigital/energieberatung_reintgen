import { DOCUMENT, Injectable, effect, inject, signal } from '@angular/core';

export type Theme = 'light' | 'dark';

/** Schlüssel im localStorage – muss mit dem Skript in src/index.html übereinstimmen. */
const STORAGE_KEY = 'theme-preference';

const THEME_COLORS: Record<Theme, string> = {
  light: '#f1f5ef',
  dark: '#151a1b',
};

/**
 * Verwaltet hell/dunkel. Reihenfolge: 1. gespeicherte Auswahl über den Schalter,
 * 2. Systemeinstellung des Geräts, 3. hell (wenn nichts davon ermittelt werden kann).
 */
@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);

  readonly theme = signal<Theme>(this.readInitialTheme());

  constructor() {
    effect(() => {
      const theme = this.theme();
      this.document.documentElement.dataset['theme'] = theme;
      this.document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME_COLORS[theme]);
    });
  }

  toggle(): void {
    const next: Theme = this.theme() === 'dark' ? 'light' : 'dark';
    this.theme.set(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Speichern nicht möglich (z. B. privater Modus) – Auswahl gilt dann nur für diesen Besuch.
    }
  }

  private readInitialTheme(): Theme {
    // Normalerweise bereits vom Skript in index.html gesetzt
    const fromDom = this.document.documentElement.dataset['theme'];
    if (fromDom === 'light' || fromDom === 'dark') return fromDom;
    return this.document.defaultView?.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
}
