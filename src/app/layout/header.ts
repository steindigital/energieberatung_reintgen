import { ChangeDetectionStrategy, Component, DestroyRef, ElementRef, inject, signal, viewChild } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs';
import { mainNav } from '../config/navigation';
import { site } from '../config/site.config';
import { I18nService } from '../i18n/i18n.service';
import { Icon } from '../shared/icon';
import { Value } from '../shared/placeholder';
import { ThemeToggle } from '../shared/theme-toggle';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, Icon, Value, ThemeToggle],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '(document:keydown.escape)': 'closeWithEscape()' },
  template: `
    <header class="site-header">
      <div class="container site-header__inner">
        <!-- Wortmarke mit Blatt-Icon – optional durch ein eigenes Logo ersetzen -->
        <a
          [routerLink]="i18n.path('home')"
          class="logo"
          [attr.aria-label]="site.brandName + ' – ' + t().common.toHome"
        >
          <span class="logo__mark" aria-hidden="true"><app-icon name="leaf" [size]="22" /></span>
          <span class="logo__text" aria-hidden="true"><app-value [text]="site.brandName" /></span>
        </a>

        <nav
          id="hauptnavigation"
          class="main-nav"
          [class.main-nav--open]="menuOpen()"
          [attr.aria-label]="t().common.mainNavLabel"
        >
          <ul class="main-nav__list">
            @for (page of nav; track page) {
              <li>
                <a
                  [routerLink]="i18n.path(page)"
                  routerLinkActive="active"
                  [routerLinkActiveOptions]="{ exact: page === 'home' }"
                  ariaCurrentWhenActive="page"
                  class="main-nav__link"
                  >{{ t().nav[page] }}</a
                >
              </li>
            }
          </ul>
          <a [routerLink]="i18n.path('contact')" class="btn btn--primary main-nav__cta-mobile">
            {{ t().common.ctaButton }}
          </a>
        </nav>

        <div class="site-header__actions">
          <!-- Sprachumschalter: wechselt auf dieselbe Seite in der anderen Sprache -->
          <a
            class="lang-switch"
            [routerLink]="i18n.switchPath()"
            [fragment]="i18n.fragment() ?? undefined"
            [attr.hreflang]="i18n.otherLang()"
            [attr.lang]="i18n.otherLang()"
            [attr.aria-label]="i18n.otherTranslations().switchToThis"
            [title]="i18n.otherTranslations().switchToThis"
          >
            <app-icon name="globe" [size]="18" />
            <span>{{ i18n.otherLang().toUpperCase() }}</span>
          </a>
          <app-theme-toggle />
          <a [routerLink]="i18n.path('contact')" class="btn btn--primary site-header__cta">
            {{ t().common.ctaButton }}
          </a>
          <button
            #menuButton
            type="button"
            class="menu-toggle"
            [attr.aria-expanded]="menuOpen()"
            aria-controls="hauptnavigation"
            (click)="menuOpen.set(!menuOpen())"
          >
            <app-icon [name]="menuOpen() ? 'close' : 'menu'" />
            <span class="visually-hidden">{{ menuOpen() ? t().common.menuClose : t().common.menuOpen }}</span>
          </button>
        </div>
      </div>
    </header>
  `,
})
export class Header {
  protected readonly i18n = inject(I18nService);
  protected readonly t = this.i18n.t;
  protected readonly site = site;
  protected readonly nav = mainNav;
  protected readonly menuOpen = signal(false);
  private readonly menuButton = viewChild.required<ElementRef<HTMLButtonElement>>('menuButton');

  constructor() {
    // Menü bei Seitenwechsel schließen
    const subscription = inject(Router)
      .events.pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => this.menuOpen.set(false));
    inject(DestroyRef).onDestroy(() => subscription.unsubscribe());
  }

  /** Menü mit Escape schließen und Fokus zurück auf den Menü-Button setzen. */
  protected closeWithEscape(): void {
    if (!this.menuOpen()) return;
    this.menuOpen.set(false);
    this.menuButton().nativeElement.focus();
  }
}
