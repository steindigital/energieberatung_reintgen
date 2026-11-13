import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { I18nService } from '../i18n/i18n.service';
import { Icon } from './icon';

/** Abschließender Handlungsaufruf am Seitenende. Ohne Angaben werden die Standardtexte (cta) verwendet. */
@Component({
  selector: 'app-cta-section',
  imports: [RouterLink, Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section">
      <div class="container">
        <div class="cta-box">
          <div>
            <h2>{{ heading() }}</h2>
            <p>{{ body() }}</p>
          </div>
          <a [routerLink]="i18n.path('contact')" [queryParams]="queryParams()" class="btn btn--light btn--large">
            {{ i18n.t().common.ctaButton }}
            <app-icon name="arrowRight" [size]="20" />
          </a>
        </div>
      </div>
    </section>
  `,
})
export class CtaSection {
  protected readonly i18n = inject(I18nService);
  readonly title = input<string>();
  readonly text = input<string>();
  /** Optionale URL-Parameter für die Kontaktseite, z. B. die gewählte Zielgruppe */
  readonly queryParams = input<Record<string, string> | null>(null);

  protected readonly heading = computed(() => this.title() ?? this.i18n.t().cta.title);
  protected readonly body = computed(() => this.text() ?? this.i18n.t().cta.text);
}
