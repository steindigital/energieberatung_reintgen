/**
 * ------------------------------------------------------------------
 *  FORMULARVERSAND – HIER ANSCHLIESSEN
 * ------------------------------------------------------------------
 * Solange CONTACT_ENDPOINT leer ist, wird das Kontaktformular NICHT
 * versendet. Die Website weist Besucherinnen und Besucher dann ehrlich
 * darauf hin und verweist auf E-Mail/Telefon.
 *
 * So aktivieren Sie den Versand:
 * 1. Einen Endpunkt bereitstellen, der eine POST-Anfrage mit JSON annimmt
 *    und bei Erfolg mit HTTP-Status 2xx antwortet – z. B.
 *    - ein eigenes kleines Backend (PHP-Skript beim Hoster, Node.js, …) oder
 *    - einen Formulardienst (bevorzugt mit Serverstandort in der EU und
 *      Vertrag zur Auftragsverarbeitung nach Art. 28 DSGVO).
 *    Gesendete Felder: customerType ('private' | 'business'), company,
 *    name, email, phone, message, privacyAccepted, language
 * 2. Die URL unten eintragen, z. B. 'https://ihr-endpunkt.example/kontakt'
 * 3. Neu bauen (npm run build) und hochladen.
 * 4. Datenschutzhinweise (Abschnitt 4) um den eingesetzten Dienst ergänzen.
 */
export const CONTACT_ENDPOINT = '';
