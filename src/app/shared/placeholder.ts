import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { isPlaceholder } from '../config/site.config';
import { I18nService } from '../i18n/i18n.service';
import { Icon } from './icon';

/**
 * Gibt einen Text aus. Enthält er noch einen Platzhalter in [eckigen Klammern],
 * wird er gelb hervorgehoben, damit er vor der Veröffentlichung auffällt.
 * Verwendung: <app-value [text]="site.phone" />
 */
@Component({
  selector: 'app-value',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (isPlaceholder()) {
      <mark class="placeholder" [title]="t().common.placeholderTooltip">{{ text() }}</mark>
    } @else {
      {{ text() }}
    }
  `,
})
export class Value {
  readonly text = input.required<string>();
  protected readonly t = inject(I18nService).t;
  protected readonly isPlaceholder = computed(() => isPlaceholder(this.text()));
}

/**
 * Deutlich markierter Inhaltsblock, der noch durch eigene Inhalte ersetzt
 * werden muss. Vor der Veröffentlichung entfernen bzw. ersetzen.
 */
@Component({
  selector: 'app-placeholder-block',
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="placeholder-block">
      <p class="placeholder-block__title">
        <app-icon name="info" [size]="20" />
        <span>{{ t().common.placeholderPrefix }}: {{ title() }}</span>
      </p>
      <div class="placeholder-block__body"><ng-content /></div>
    </div>
  `,
})
export class PlaceholderBlock {
  protected readonly t = inject(I18nService).t;
  readonly title = input.required<string>();
}
