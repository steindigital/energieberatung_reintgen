import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { I18nService } from '../../i18n/i18n.service';
import { AUDIENCE_PARAM, parseAudience } from '../../config/navigation';
import { AUDIENCES, type Audience } from '../../i18n/types';
import { CtaSection } from '../../shared/cta-section';
import { Icon } from '../../shared/icon';
import { PageHeader } from '../../shared/page-header';
import { PlaceholderBlock } from '../../shared/placeholder';

/**
 * Leistungen, getrennt nach Privat- und Geschäftskunden (Reiter).
 * Texte und Leistungslisten: src/app/i18n/de.ts bzw. en.ts → services.audiences
 */
@Component({
  selector: 'app-services-page',
  imports: [RouterLink, CtaSection, Icon, PageHeader, PlaceholderBlock],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './services.page.html',
})
export class ServicesPage {
  protected readonly i18n = inject(I18nService);
  protected readonly t = this.i18n.t;
  private readonly location = inject(Location);
  private readonly router = inject(Router);

  protected readonly audiences = AUDIENCES;
  protected readonly audience = signal<Audience>(
    parseAudience(inject(ActivatedRoute).snapshot.queryParamMap.get(AUDIENCE_PARAM)) ?? 'private',
  );
  protected readonly current = computed(() => this.t().services.audiences[this.audience()]);
  protected readonly ctaQuery = computed(() => ({ [AUDIENCE_PARAM]: this.audience() }));

  protected select(audience: Audience): void {
    this.audience.set(audience);
    // Auswahl in der Adresse festhalten (teilbarer Link), ohne neu zu navigieren oder zu scrollen
    const url = this.router.createUrlTree([this.i18n.path('services')], {
      queryParams: { [AUDIENCE_PARAM]: audience },
    });
    this.location.replaceState(url.toString());
  }

  /** Pfeiltasten wechseln zwischen den Reitern (WAI-ARIA Tabs-Muster) */
  protected onTabKeydown(event: KeyboardEvent): void {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft' && event.key !== 'Home' && event.key !== 'End') return;
    event.preventDefault();
    const index = AUDIENCES.indexOf(this.audience());
    const next =
      event.key === 'Home'
        ? 0
        : event.key === 'End'
          ? AUDIENCES.length - 1
          : (index + (event.key === 'ArrowRight' ? 1 : -1) + AUDIENCES.length) % AUDIENCES.length;
    this.select(AUDIENCES[next]);
    document.getElementById(`tab-${AUDIENCES[next]}`)?.focus();
  }
}
