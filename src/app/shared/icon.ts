import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

/* Hilfsfunktionen: Kreise und Rechtecke als Pfad, damit jedes Icon nur aus <path> besteht. */
const circle = (cx: number, cy: number, r: number) =>
  `M${cx - r} ${cy}a${r} ${r} 0 1 0 ${2 * r} 0a${r} ${r} 0 1 0 ${-2 * r} 0`;
const rect = (x: number, y: number, w: number, h: number, r: number) =>
  `M${x + r} ${y}h${w - 2 * r}a${r} ${r} 0 0 1 ${r} ${r}v${h - 2 * r}a${r} ${r} 0 0 1 ${-r} ${r}` +
  `h${-(w - 2 * r)}a${r} ${r} 0 0 1 ${-r} ${-r}v${-(h - 2 * r)}a${r} ${r} 0 0 1 ${r} ${-r}z`;

/** Schlanke Linien-Icons – keine externe Icon-Bibliothek nötig. */
const ICONS = {
  leaf: [
    'M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10Z',
    'M2 21c0-3 1.9-5.4 5.1-6C9.5 14.5 12 13 13 12',
  ],
  home: ['M3 10.5 12 3l9 7.5', 'M5 9.5V21h14V9.5', 'M10 21v-6h4v6'],
  search: [circle(11, 11, 7), 'm20 20-3.5-3.5'],
  map: ['M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2Z', 'M9 4v14M15 6v14'],
  flame: ['M12 22c4 0 7-2.7 7-6.5 0-3.5-2.5-6-4-8-.5 2-1.5 3-3 3.5.5-3-1-6-4-9 0 4-5 7-5 12.5C3 18.6 7 22 12 22Z'],
  layers: ['m12 3 9 5-9 5-9-5 9-5Z', 'm3 12.5 9 5 9-5', 'm3 17 9 5 9-5'],
  euro: ['M18 6.5a7 7 0 1 0 0 11', 'M4 10h10M4 14h10'],
  clipboard: [rect(5, 4, 14, 18, 2), 'M9 4V2.5h6V4', 'm9 13 2 2 4-4'],
  users: [circle(9, 8, 3.5), 'M2.5 20a6.5 6.5 0 0 1 13 0', 'M16 4.5a3.5 3.5 0 0 1 0 7', 'M18 14a6.5 6.5 0 0 1 3.5 6'],
  phone: ['M5 3h3.5L10 7.5 7.8 9a11 11 0 0 0 7.2 7.2l1.5-2.2 4.5 1.5V19a2 2 0 0 1-2 2A17 17 0 0 1 3 5a2 2 0 0 1 2-2Z'],
  mail: [rect(3, 5, 18, 14, 2), 'm3 7 9 6 9-6'],
  pin: ['M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z', circle(12, 9.5, 2.5)],
  clock: [circle(12, 12, 9), 'M12 7v5l3 2'],
  sun: [
    circle(12, 12, 4),
    'M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4',
  ],
  moon: ['M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z'],
  menu: ['M4 6h16M4 12h16M4 18h16'],
  close: ['M6 6l12 12M18 6 6 18'],
  check: ['m5 12.5 4.5 4.5L19 7'],
  arrowRight: ['M5 12h14M13 6l6 6-6 6'],
  info: [circle(12, 12, 9), 'M12 11v5M12 8h.01'],
  alert: ['M12 3 2 20h20L12 3Z', 'M12 10v4M12 17h.01'],
  user: [circle(12, 8, 4), 'M4 21a8 8 0 0 1 16 0'],
  book: ['M4 4.5A1.5 1.5 0 0 1 5.5 3H20v15H5.5A1.5 1.5 0 0 0 4 19.5v-15Z', 'M4 19.5A1.5 1.5 0 0 0 5.5 21H20'],
  chat: ['M21 12a8 8 0 0 1-11.6 7.1L4 20.5l1.4-4.9A8 8 0 1 1 21 12Z'],
  image: [rect(3, 4, 18, 16, 2), circle(9, 10, 2), 'm21 16-5-5-9 9'],
  bulb: ['M9 18h6M10 21h4', 'M12 3a6 6 0 0 0-3.6 10.8c.6.5 1 1.2 1.1 2.2h5c.1-1 .5-1.7 1.1-2.2A6 6 0 0 0 12 3Z'],
  building: [rect(4, 3, 16, 18, 1.5), 'M9 21v-4h6v4', 'M8 7h2M14 7h2M8 11h2M14 11h2'],
  globe: [circle(12, 12, 9), 'M3 12h18', 'M12 3a14 14 0 0 1 0 18a14 14 0 0 1 0-18Z'],
  shield: ['M12 3 4 6v6c0 4.5 3.4 8.3 8 9 4.6-.7 8-4.5 8-9V6l-8-3Z'],
  ear: [
    'M6 9a6 6 0 1 1 12 0c0 3-2 4.5-3 5.5s-1 2.5-1 3.5a3 3 0 0 1-6 0',
    'M9.5 9a2.5 2.5 0 1 1 5 0c0 1.5-1.5 2-1.5 3',
  ],
  external: ['M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5'],
} satisfies Record<string, string[]>;

export type IconName = keyof typeof ICONS;

/** Dekoratives Icon – wird von Screenreadern ignoriert. Verwendung: <app-icon name="leaf" [size]="20" /> */
@Component({
  selector: 'app-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <svg
      [attr.width]="size()"
      [attr.height]="size()"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      @for (d of paths(); track $index) {
        <svg:path [attr.d]="d" />
      }
    </svg>
  `,
})
export class Icon {
  readonly name = input.required<IconName>();
  readonly size = input(24);

  protected readonly paths = computed(() => ICONS[this.name()]);
}
