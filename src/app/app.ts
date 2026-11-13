import { ViewportScroller } from '@angular/common';
import { Component, DestroyRef, ElementRef, inject, viewChild } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { I18nService } from './i18n/i18n.service';
import { Footer } from './layout/footer';
import { Header } from './layout/header';

/** Gemeinsamer Rahmen aller Seiten: Skip-Link, Kopfzeile, Inhalt, Fußzeile. */
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  template: `
    <a href="#inhalt" class="skip-link" (click)="skipToContent($event)">{{ i18n.t().common.skipLink }}</a>
    <app-header />
    <main id="inhalt" #main tabindex="-1">
      <router-outlet />
    </main>
    <app-footer />
  `,
})
export class App {
  protected readonly i18n = inject(I18nService);
  private readonly main = viewChild.required<ElementRef<HTMLElement>>('main');

  constructor() {
    const router = inject(Router);
    // Platz für die fixierte Kopfzeile beim Springen zu Abschnitten lassen
    inject(ViewportScroller).setOffset([0, 88]);

    // Bei Seitenwechsel den Fokus auf den Inhalt setzen, damit Screenreader die
    // neue Seite ankündigen (nicht beim ersten Laden und nicht bei reinen Sprungmarken).
    let previousPath: string | null = null;
    const subscription = router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => {
        const path = event.urlAfterRedirects.split(/[?#]/)[0];
        if (previousPath !== null && path !== previousPath) {
          this.main().nativeElement.focus({ preventScroll: true });
        }
        previousPath = path;
      });
    inject(DestroyRef).onDestroy(() => subscription.unsubscribe());
  }

  /** Skip-Link: Fokus direkt setzen (ein reiner #-Link würde wegen <base href> zur Startseite führen). */
  protected skipToContent(event: Event): void {
    event.preventDefault();
    this.main().nativeElement.focus();
  }
}
