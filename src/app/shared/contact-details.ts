import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { isPlaceholder, site, toTelHref } from '../config/site.config';
import { I18nService } from '../i18n/i18n.service';
import { Icon } from './icon';
import { Value } from './placeholder';

/**
 * Kontaktangaben aus src/app/config/site.config.ts.
 * Telefon- und E-Mail-Links werden erst aktiv, wenn echte Werte eingetragen sind.
 */
@Component({
  selector: 'app-contact-details',
  imports: [Icon, Value],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ul class="contact-details">
      <li>
        <app-icon name="phone" [size]="20" />
        @if (phoneReady) {
          <a [href]="telHref">{{ site.phone }}</a>
        } @else {
          <app-value [text]="site.phone" />
        }
      </li>
      <li>
        <app-icon name="mail" [size]="20" />
        @if (emailReady) {
          <a [href]="'mailto:' + site.email">{{ site.email }}</a>
        } @else {
          <app-value [text]="site.email" />
        }
      </li>
      <li>
        <app-icon name="pin" [size]="20" />
        <address>
          <app-value [text]="site.street" /><br />
          <app-value [text]="site.zip" /> <app-value [text]="site.city" />
        </address>
      </li>
      @if (showAvailability()) {
        <li>
          <app-icon name="clock" [size]="20" />
          <app-value [text]="i18n.siteText().availability" />
        </li>
      }
    </ul>
  `,
})
export class ContactDetails {
  readonly showAvailability = input(false);

  protected readonly i18n = inject(I18nService);
  protected readonly site = site;
  protected readonly phoneReady = !isPlaceholder(site.phone);
  protected readonly emailReady = !isPlaceholder(site.email);
  protected readonly telHref = toTelHref(site.phone);
}
