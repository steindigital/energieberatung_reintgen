import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { site } from '../../config/site.config';
import { I18nService } from '../../i18n/i18n.service';
import { AUDIENCES } from '../../i18n/types';
import { CtaSection } from '../../shared/cta-section';
import { Icon } from '../../shared/icon';
import { ImagePlaceholder } from '../../shared/image-placeholder';
import { Value } from '../../shared/placeholder';

/** Texte: src/app/i18n/de.ts bzw. en.ts → home */
@Component({
  selector: 'app-home-page',
  imports: [RouterLink, CtaSection, Icon, ImagePlaceholder, Value],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.page.html',
})
export class HomePage {
  protected readonly i18n = inject(I18nService);
  protected readonly t = this.i18n.t;
  protected readonly site = site;
  /** Einstiege für Privat- und Geschäftskunden */
  protected readonly audiences = AUDIENCES;
}
