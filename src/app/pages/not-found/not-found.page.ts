import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { I18nService } from '../../i18n/i18n.service';
import { Icon } from '../../shared/icon';

@Component({
  selector: 'app-not-found-page',
  imports: [RouterLink, Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section">
      <div class="container container--narrow not-found">
        <span class="icon-badge icon-badge--large"><app-icon name="search" [size]="28" /></span>
        <h1>{{ t().notFound.title }}</h1>
        <p>{{ t().notFound.text }}</p>
        <div class="button-group button-group--center">
          <a [routerLink]="i18n.path('home')" class="btn btn--primary">{{ t().notFound.home }}</a>
          <a [routerLink]="i18n.path('contact')" class="btn btn--secondary">{{ t().notFound.contact }}</a>
        </div>
      </div>
    </section>
  `,
})
export class NotFoundPage {
  protected readonly i18n = inject(I18nService);
  protected readonly t = this.i18n.t;
}
