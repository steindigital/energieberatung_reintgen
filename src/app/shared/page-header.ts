import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/** Einheitlicher Seitenkopf für Unterseiten. Einleitungstext per Content Projection. */
@Component({
  selector: 'app-page-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="page-header">
      <div class="container container--narrow">
        @if (eyebrow()) {
          <p class="eyebrow">{{ eyebrow() }}</p>
        }
        <h1>{{ title() }}</h1>
        <div class="page-header__lead"><ng-content /></div>
      </div>
    </section>
  `,
})
export class PageHeader {
  readonly eyebrow = input<string>();
  readonly title = input.required<string>();
}
