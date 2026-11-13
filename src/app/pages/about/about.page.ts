import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { site } from '../../config/site.config';
import { I18nService } from '../../i18n/i18n.service';
import { CtaSection } from '../../shared/cta-section';
import { Icon } from '../../shared/icon';
import { ImagePlaceholder } from '../../shared/image-placeholder';
import { PageHeader } from '../../shared/page-header';
import { PlaceholderBlock, Value } from '../../shared/placeholder';

/**
 * Texte: src/app/i18n/de.ts bzw. en.ts → about
 * PLATZHALTER: Qualifikationen, Vorstellung und Motivation dort in beiden Sprachen eintragen.
 */
@Component({
  selector: 'app-about-page',
  imports: [CtaSection, Icon, ImagePlaceholder, PageHeader, PlaceholderBlock, Value],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './about.page.html',
})
export class AboutPage {
  protected readonly i18n = inject(I18nService);
  protected readonly t = this.i18n.t;
  protected readonly site = site;
}
