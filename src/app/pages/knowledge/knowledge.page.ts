import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { I18nService } from '../../i18n/i18n.service';
import { CtaSection } from '../../shared/cta-section';
import { Icon } from '../../shared/icon';
import { PageHeader } from '../../shared/page-header';

/** Texte: src/app/i18n/de.ts bzw. en.ts → knowledge */
@Component({
  selector: 'app-knowledge-page',
  imports: [RouterLink, CtaSection, Icon, PageHeader],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './knowledge.page.html',
})
export class KnowledgePage {
  protected readonly i18n = inject(I18nService);
  protected readonly t = this.i18n.t;
}
