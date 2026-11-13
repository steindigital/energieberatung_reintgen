import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { I18nService } from '../i18n/i18n.service';
import { Icon } from './icon';

/**
 * Bildplatzhalter. Später ersetzen durch z. B.
 *   <img src="bilder/portrait.jpg" alt="Aussagekräftige Beschreibung" width="800" height="1000" loading="lazy" />
 * Bilder dazu im Ordner /public/bilder ablegen. Nur Bilder verwenden, an denen Sie die Nutzungsrechte besitzen.
 */
@Component({
  selector: 'app-image-placeholder',
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div
      class="image-placeholder"
      [style.aspect-ratio]="ratio()"
      role="img"
      [attr.aria-label]="t().common.imagePlaceholder + ': ' + label()"
    >
      <app-icon name="image" [size]="40" />
      <span>{{ t().common.imagePlaceholder }}</span>
      <span class="image-placeholder__label">{{ label() }}</span>
    </div>
  `,
})
export class ImagePlaceholder {
  protected readonly t = inject(I18nService).t;
  /** Beschreibung des gewünschten Motivs, z. B. „Porträtfoto“ */
  readonly label = input.required<string>();
  /** Seitenverhältnis, z. B. "4 / 3" */
  readonly ratio = input('4 / 3');
}
