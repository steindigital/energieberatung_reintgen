import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { I18nService } from '../../i18n/i18n.service';
import { ContactDetails } from '../../shared/contact-details';
import { PageHeader } from '../../shared/page-header';
import { ContactForm } from './contact-form';

/** Texte: src/app/i18n/de.ts bzw. en.ts → contact */
@Component({
  selector: 'app-contact-page',
  imports: [RouterLink, ContactDetails, PageHeader, ContactForm],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @let c = t().contact;
    <app-page-header [eyebrow]="c.eyebrow" [title]="c.title">
      <p>{{ c.lead }}</p>
    </app-page-header>

    <section class="section section--tight">
      <div class="container contact-layout">
        <div class="panel">
          <h2>{{ c.formTitle }}</h2>
          <app-contact-form />
        </div>

        <aside class="contact-aside" aria-labelledby="direktkontakt-titel">
          <div class="panel panel--soft">
            <h2 id="direktkontakt-titel">{{ c.directTitle }}</h2>
            <app-contact-details [showAvailability]="true" />
          </div>
          <div class="panel panel--soft">
            <h2>{{ c.infoTitle }}</h2>
            <p>
              {{ c.infoBefore }} <a [routerLink]="i18n.path('privacy')">{{ c.infoLink }}</a>{{ c.infoAfter }}
            </p>
          </div>
        </aside>
      </div>
    </section>
  `,
})
export class ContactPage {
  protected readonly i18n = inject(I18nService);
  protected readonly t = this.i18n.t;
}
