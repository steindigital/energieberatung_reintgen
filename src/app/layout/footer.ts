import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { legalNav, mainNav } from '../config/navigation';
import { site } from '../config/site.config';
import { I18nService } from '../i18n/i18n.service';
import { ContactDetails } from '../shared/contact-details';
import { Icon } from '../shared/icon';
import { Value } from '../shared/placeholder';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, ContactDetails, Icon, Value],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="site-footer">
      <div class="container site-footer__grid">
        <div>
          <p class="site-footer__brand">
            <app-icon name="leaf" [size]="22" />
            <app-value [text]="site.brandName" />
          </p>
          <p class="site-footer__text">
            {{ t().footer.textBefore }} <app-value [text]="i18n.siteText().region" /> {{ t().footer.textAfter }}
          </p>
          <a [routerLink]="i18n.path('contact')" class="btn btn--light">{{ t().common.ctaButton }}</a>
        </div>

        <nav aria-labelledby="footer-seiten">
          <h2 id="footer-seiten" class="site-footer__heading">{{ t().footer.pagesHeading }}</h2>
          <ul class="site-footer__list">
            @for (page of nav; track page) {
              <li><a [routerLink]="i18n.path(page)">{{ t().nav[page] }}</a></li>
            }
          </ul>
        </nav>

        <div>
          <h2 class="site-footer__heading">{{ t().footer.contactHeading }}</h2>
          <app-contact-details />
        </div>
      </div>

      <div class="container site-footer__bottom">
        <p>© {{ year }} <app-value [text]="site.brandName" /></p>
        <nav [attr.aria-label]="t().footer.legalLabel">
          <ul class="site-footer__legal">
            @for (page of legal; track page) {
              <li><a [routerLink]="i18n.path(page)">{{ t().nav[page] }}</a></li>
            }
          </ul>
        </nav>
      </div>
    </footer>
  `,
})
export class Footer {
  protected readonly i18n = inject(I18nService);
  protected readonly t = this.i18n.t;
  protected readonly site = site;
  protected readonly nav = mainNav;
  protected readonly legal = legalNav;
  protected readonly year = new Date().getFullYear();
}
