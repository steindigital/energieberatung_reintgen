# Website Energieberatung (Angular, Deutsch & Englisch)

Responsive, zweisprachige Website für eine Energieberatung mit Angular 22 (Standalone-Komponenten, Signals, ohne zone.js).
Seiten: Start, Über mich, Leistungen, Wissenswertes, Kontakt, Impressum, Datenschutzhinweise – jeweils auf Deutsch und Englisch.

## Starten

Voraussetzung: [Node.js](https://nodejs.org) (aktuelle LTS-Version).

```bash
npm install        # Abhängigkeiten installieren (einmalig)
npm start          # Entwicklungsserver → http://localhost:4200 (Englisch: /en)
npm run build      # Produktions-Build nach dist/energieberatung/browser
```

## Sprachen

| Seite | Deutsch | Englisch |
|---|---|---|
| Start | `/` | `/en` |
| Über mich | `/ueber-mich` | `/en/about` |
| Leistungen | `/leistungen` | `/en/services` |
| Wissenswertes | `/wissenswertes` | `/en/knowledge` |
| Kontakt | `/kontakt` | `/en/contact` |
| Impressum | `/impressum` | `/en/legal-notice` |
| Datenschutz | `/datenschutz` | `/en/privacy` |

- Die Sprache ergibt sich aus der Adresse. Der Umschalter **DE/EN** in der Kopfzeile wechselt auf dieselbe Seite
  in der anderen Sprache.
- `<html lang>`, Seitentitel, Meta-Beschreibung und `hreflang`-Verweise werden automatisch gesetzt.
- **Alle Texte** stehen in `src/app/i18n/de.ts` und `src/app/i18n/en.ts`. Beide Dateien folgen derselben
  Struktur (`src/app/i18n/types.ts`) – fehlt in einer Sprache ein Text, schlägt `npm run build` fehl.
- Ausnahme: **Impressum und Datenschutzhinweise** haben je Sprache eine eigene Vorlage
  (`pages/imprint/imprint-de|en.page.html`, `pages/privacy/privacy-de|en.page.html`).
- Adressen (URL-Pfade) ändern: `src/app/config/navigation.ts` → `SLUGS`.

## Privat- und Geschäftskunden

- **Startseite:** zwei Einstiege „Für Privatkunden“ / „Für Geschäftskunden“ (`home.audienceCards`).
- **Leistungen:** Reiter mit eigenen Leistungslisten und Preishinweisen je Zielgruppe
  (`services.audiences.private` / `.business` in `de.ts` und `en.ts`). Die Auswahl steht in der Adresse,
  z. B. `/leistungen?audience=business` – solche Links lassen sich direkt teilen.
- **Kontaktformular:** Pflichtauswahl „Privatperson“ / „Unternehmen, Gewerbe oder Organisation“; bei
  Unternehmen zusätzlich Pflichtfeld „Unternehmen / Organisation“. Wer von den Leistungen kommt, hat die
  Zielgruppe bereits vorausgewählt.
- Die Leistungen für Geschäftskunden (z. B. Energieaudit nach DIN EN 16247) sind **Vorschläge** – bitte nur
  stehen lassen, wofür Sie qualifiziert bzw. registriert sind.

## Darstellung

Hell oder dunkel richtet sich nach dieser Reihenfolge:
1. eigene Auswahl über den Schalter (im Browser gespeichert),
2. Systemeinstellung des Geräts,
3. hell, wenn keine Einstellung ermittelt werden kann.

## Projektstruktur

```
src/index.html                    Grundgerüst, Standard-Titel, Darkmode-Initialisierung
src/styles.css                    Farben (Design-Tokens), Layout, alle Stile
public/                           Favicon, SPA-Weiterleitungen (.htaccess, _redirects), eigene Bilder
src/app/
  app.ts / app.config.ts          Rahmen (Skip-Link, Kopf, Inhalt, Fuß) und Router-Konfiguration
  app.routes.ts                   Routen für beide Sprachen
  config/site.config.ts           ★ Ihre Kontaktdaten und Namen (zentrale Platzhalter)
  config/contact.config.ts        ★ Formularversand anschließen
  config/navigation.ts            Seiten, URL-Pfade je Sprache, Menü
  i18n/de.ts, i18n/en.ts          ★ Alle Texte (inkl. Leistungen, Qualifikationen, FAQ)
  i18n/i18n.service.ts            Aktuelle Sprache, Sprachwechsel
  core/                           Darkmode, Formularversand, Seitentitel/hreflang
  layout/                         Header (inkl. Sprachumschalter), Footer
  shared/                         Icons, Platzhalter, Bildplatzhalter, Seitenkopf, CTA, Kontaktdaten
  pages/                          Ein Ordner pro Seite (Kontaktformular in pages/contact/)
```

## Was Sie ersetzen müssen

Alle Platzhalter stehen in **[eckigen Klammern]** und werden auf der Website **gelb markiert**.
Die Markierung verschwindet automatisch, sobald Sie den Wert ersetzen. Gelbe Kästen mit
gestricheltem Rand („Platzhalter: …“) sind Textblöcke, die Sie ersetzen bzw. entfernen.
**Bitte jeweils beide Sprachen pflegen.**

| Datei | Was |
|---|---|
| `src/app/config/site.config.ts` | Name, Anschrift, Telefon, E-Mail; unter `localized.de` / `localized.en`: Berufsbezeichnung, Region, Erreichbarkeit |
| `src/app/i18n/de.ts` + `en.ts` → `about` | Qualifikationen, persönliche Vorstellung, Motivation |
| `src/app/i18n/de.ts` + `en.ts` → `services.audiences.*.items` | Nur Leistungen behalten, die Sie tatsächlich anbieten und für die Sie qualifiziert sind |
| `src/app/i18n/de.ts` + `en.ts` → `services.audiences.*.pricePlaceholder` | Preisinformationen je Zielgruppe |
| `src/app/pages/imprint/imprint-de/-en.page.html` | Berufsrechtliche Angaben, USt-IdNr., Versicherung, Verbraucherstreitbeilegung |
| `src/app/pages/privacy/privacy-de/-en.page.html` | Hosting-Anbieter, Speicherdauer, Formularversand, Aufsichtsbehörde, Datum |
| `src/app/pages/home/home.page.html`, `about/about.page.html` | Bildplatzhalter |

Alle Stellen finden: `grep -rn "PLATZHALTER\|\[" src/app/config src/app/pages src/app/i18n`

**Bilder einsetzen:** Bild nach `public/bilder/` legen und die jeweilige
`<app-image-placeholder … />`-Zeile ersetzen durch
`<img src="bilder/portrait.jpg" alt="Beschreibung" width="800" height="1000" loading="lazy" />`.

> Impressum und Datenschutzhinweise sind **Vorlagen**. Bitte rechtlich prüfen lassen und
> anschließend die Hinweisboxen „Vorlage – bitte prüfen“ entfernen.

## Kontaktformular: echten Versand anschließen

Im Auslieferungszustand wird **nichts versendet**. Das Formular prüft die Eingaben und teilt
Besucherinnen und Besuchern ehrlich mit, dass der Online-Versand noch nicht eingerichtet ist.

1. Endpunkt bereitstellen, der `POST` mit JSON annimmt und mit HTTP 2xx antwortet – z. B. ein
   kleines PHP-Skript beim Hoster oder ein Formulardienst (möglichst EU-Serverstandort,
   Auftragsverarbeitungsvertrag). Gesendete Felder: `customerType` (`private`/`business`), `company`, `name`, `email`, `phone`, `message`, `privacyAccepted`, `language` (`de`/`en`).
2. URL in `src/app/config/contact.config.ts` bei `CONTACT_ENDPOINT` eintragen.
3. `npm run build` und neu hochladen.
4. Datenschutzhinweise (Abschnitt 4, beide Sprachen) um den Dienst ergänzen.

Empfehlung: Im Backend zusätzlich serverseitig validieren und einen Spam-Schutz einbauen.

## Veröffentlichen auf GitHub Pages

Der Ablauf in `.github/workflows/deploy.yml` baut und veröffentlicht die Website automatisch bei jedem
Hochladen auf den Branch `main`.

1. Auf GitHub ein neues Repository anlegen (z. B. `energieberatung_reintgen`).
2. Projekt hochladen:
   ```bash
   git init
   git add .
   git commit -m "Website Energieberatung Reintgen"
   git branch -M main
   git remote add origin https://github.com/<benutzer>/<repo-name>.git
   git push -u origin main
   ```
3. Auf GitHub: **Settings → Pages → Build and deployment → Source: „GitHub Actions“** wählen.
4. Unter **Actions** den Lauf abwarten. Danach ist die Seite erreichbar unter
   `https://<benutzer>.github.io/<repo-name>/`.

Spätere Änderungen: `git add . && git commit -m "…" && git push` – die Seite aktualisiert sich automatisch.

**Eigene Domain** (z. B. `energieberatung-reintgen.de`): Datei `public/CNAME` mit nur dem Domainnamen anlegen,
unter Settings → Pages die Domain eintragen und beim Domain-Anbieter die DNS-Einträge laut GitHub-Anleitung setzen.
Der Ablauf erkennt die Datei und baut die Seite dann für die Domain-Wurzel.

## Veröffentlichen auf anderem Webspace

Inhalt von `dist/energieberatung/browser/` auf den Webspace hochladen. Unbekannte Pfade
müssen auf `index.html` zeigen (sonst führt z. B. Neuladen von `/leistungen` zu einem 404):

- `public/.htaccess` (Apache, wird automatisch mitkopiert)
- `public/_redirects` (Netlify)
- nginx: `try_files $uri /index.html;`

## Datenschutz & Technik

- Keine Cookies, kein Tracking, keine externen Schriftarten oder CDNs.
- Der Darkmode speichert nur `theme-preference` im `localStorage` – und nur, wenn der Schalter benutzt wird. Ohne Auswahl gilt die Systemeinstellung, sonst hell.
- Keine zusätzlichen Bibliotheken über Angular hinaus; Icons sind Inline-SVGs.
