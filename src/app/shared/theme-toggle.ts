import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ThemeService } from '../core/theme.service';
import { I18nService } from '../i18n/i18n.service';
import { Icon } from './icon';

/** Schalter zwischen hellem und dunklem Design. Die Wahl wird lokal gespeichert. */
@Component({
  selector: 'app-theme-toggle',
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button
      type="button"
      class="theme-toggle"
      role="switch"
      [attr.aria-checked]="isDark()"
      [attr.aria-label]="t().common.themeLabel"
      [title]="isDark() ? t().common.themeToLight : t().common.themeToDark"
      (click)="themeService.toggle()"
    >
      <span class="theme-toggle__track" aria-hidden="true">
        <span class="theme-toggle__thumb">
          <app-icon [name]="isDark() ? 'moon' : 'sun'" [size]="14" />
        </span>
      </span>
    </button>
  `,
})
export class ThemeToggle {
  protected readonly themeService = inject(ThemeService);
  protected readonly t = inject(I18nService).t;
  protected readonly isDark = computed(() => this.themeService.theme() === 'dark');
}
