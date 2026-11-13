/**
 * ============================================================
 *  ZENTRALE KONFIGURATION – HIER IHRE ECHTEN DATEN EINTRAGEN
 * ============================================================
 *
 * Alle Werte in eckigen Klammern [ … ] sind PLATZHALTER.
 * Solange ein Wert eckige Klammern enthält, wird er auf der Website
 * gelb markiert angezeigt, damit nichts übersehen wird.
 * Sobald Sie den Wert ersetzen (ohne Klammern), verschwindet die Markierung
 * automatisch – Telefon- und E-Mail-Links werden dann klickbar.
 */
export const site = {
  /** Name der Energieberatung (gilt für beide Sprachen) */
  brandName: 'Energieberatung Reintgen',

  /** Vollständiger Name (Startseite, Über mich, Impressum) */
  ownerName: 'Simone Reintgen',

  /** PLATZHALTER: Anschrift */
  street: '[Straße Hausnummer]',
  zip: '[PLZ]',
  city: '[Ort]',

  /** PLATZHALTER: Telefonnummer in lesbarer Form, z. B. „0123 456789“ */
  phone: '[Telefonnummer]',

  /** PLATZHALTER: E-Mail-Adresse */
  email: '[E-Mail-Adresse]',

  /**
   * Sprachabhängige Angaben – jeweils auf Deutsch UND Englisch eintragen.
   */
  localized: {
    de: {
      /** Berufsbezeichnung (Über mich, Impressum) */
      jobTitle: 'Diplom-Architektin',
      /** Region / Einzugsgebiet – steht z. B. hinter „Energieberatung …“ */
      region: 'im Rheingau-Taunus-Kreis',
      /** PLATZHALTER: Erreichbarkeit, z. B. „Mo–Fr, 9–17 Uhr“ */
      availability: '[Erreichbarkeit, z. B. Mo–Fr 9–17 Uhr]',
    },
    en: {
      /** Berufsbezeichnung auf Englisch */
      jobTitle: 'Architect (Dipl.-Ing.)',
      /** Region – steht z. B. hinter „Energy consulting …“ */
      region: 'in the Rheingau-Taunus district',
      /** PLATZHALTER: availability, e.g. “Mon–Fri, 9 am–5 pm” */
      availability: '[Availability, e.g. Mon–Fri 9 am–5 pm]',
    },
  },
} as const;

/** Prüft, ob ein Wert noch ein Platzhalter (eckige Klammern) ist. */
export function isPlaceholder(value: string): boolean {
  return /\[[^\]]*\]/.test(value);
}

/** Erzeugt einen tel:-Link aus einer lesbaren Telefonnummer. */
export function toTelHref(phone: string): string {
  return `tel:${phone.replace(/[^\d+]/g, '')}`;
}
