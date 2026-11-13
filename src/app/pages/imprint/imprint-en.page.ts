import { ChangeDetectionStrategy, Component } from '@angular/core';
import { site } from '../../config/site.config';
import { PageHeader } from '../../shared/page-header';
import { PlaceholderBlock, Value } from '../../shared/placeholder';

/**
 * VORLAGE MIT PLATZHALTERN (en).
 * Bitte alle markierten Angaben ergänzen, nicht zutreffende Abschnitte entfernen
 * und den Text vor der Veröffentlichung rechtlich prüfen lassen.
 * Änderungen bitte in beiden Sprachfassungen (imprint-de / imprint-en) vornehmen.
 */
@Component({
  selector: 'app-imprint-en-page',
  imports: [PageHeader, PlaceholderBlock, Value],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './imprint-en.page.html',
})
export class ImprintEnPage {
  protected readonly site = site;
}
