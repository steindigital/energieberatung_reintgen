import type { Translations } from './types';

/**
 * DEUTSCHE TEXTE
 * Platzhalter in [eckigen Klammern] werden auf der Website gelb markiert.
 */
export const de: Translations = {
  langName: 'Deutsch',
  switchToThis: 'Auf Deutsch wechseln',

  common: {
    skipLink: 'Zum Inhalt springen',
    ctaButton: 'Beratung anfragen',
    toHome: 'zur Startseite',
    mainNavLabel: 'Hauptnavigation',
    menuOpen: 'Menü öffnen',
    menuClose: 'Menü schließen',
    themeLabel: 'Dunkles Design',
    themeToDark: 'Zum dunklen Design wechseln',
    themeToLight: 'Zum hellen Design wechseln',
    languageLabel: 'Sprache',
    placeholderPrefix: 'Platzhalter',
    placeholderTooltip: 'Platzhalter – bitte durch echte Angaben ersetzen',
    imagePlaceholder: 'Bildplatzhalter',
    externalLink: '(externe Website, öffnet in neuem Tab)',
    newTab: '(öffnet in neuem Tab)',
  },

  nav: {
    home: 'Start',
    about: 'Über mich',
    services: 'Leistungen',
    knowledge: 'Wissenswertes',
    contact: 'Kontakt',
    imprint: 'Impressum',
    privacy: 'Datenschutzhinweise',
  },

  meta: {
    home: {
      title: 'Energieberatung für Privat- und Geschäftskunden',
      description:
        'Simone Reintgen, Diplom-Architektin und Energieeffizienz-Expertin (BEG, KfW, BAFA) im Rheingau-Taunus-Kreis – Energieberatung für Privatpersonen und Unternehmen: Gebäudeanalyse, Sanierungsfahrplan, Heizung, Dämmung, Energieeffizienz im Betrieb und Hinweise zu Fördermöglichkeiten.',
    },
    about: {
      title: 'Über mich',
      description:
        'Lernen Sie Ihre Energieberatung kennen: Qualifikation, Arbeitsweise und Motivation – für eine verständliche und sorgfältige Beratung rund um Ihr Wohngebäude.',
    },
    services: {
      title: 'Leistungen',
      description:
        'Leistungen für Privatkunden und Geschäftskunden: Gebäudeanalyse, Sanierungsfahrplan, Heizung, Dämmung, Energieberatung für Nichtwohngebäude und Unterstützung bei Fördermöglichkeiten.',
    },
    knowledge: {
      title: 'Wissenswertes',
      description:
        'Verständliche Informationen für Hausbesitzerinnen und Hausbesitzer: Energieeffizienz, Sanierung planen, Ablauf einer Energieberatung, Förderung und Tipps für den Alltag.',
    },
    contact: {
      title: 'Kontakt & Beratung anfragen',
      description:
        'Nehmen Sie Kontakt auf und fragen Sie eine Energieberatung für Ihr Wohngebäude an – per Formular, E-Mail oder Telefon.',
    },
    imprint: { title: 'Impressum', description: 'Impressum und Anbieterkennzeichnung dieser Website.' },
    privacy: {
      title: 'Datenschutzhinweise',
      description: 'Informationen zur Verarbeitung personenbezogener Daten auf dieser Website.',
    },
    notFound: { title: 'Seite nicht gefunden', description: 'Die angeforderte Seite wurde nicht gefunden.' },
  },

  footer: {
    textBefore: 'Energieberatung für Privat- und Geschäftskunden',
    textAfter: '– verständlich, sorgfältig und auf Ihr Haus zugeschnitten.',
    pagesHeading: 'Seiten',
    contactHeading: 'Kontakt',
    legalLabel: 'Rechtliches',
  },

  cta: {
    title: 'Sie möchten wissen, was für Ihr Haus sinnvoll ist?',
    text: 'Schildern Sie mir kurz Ihr Anliegen. Ich melde mich bei Ihnen, um die nächsten Schritte zu besprechen – unverbindlich.',
  },

  process: [
    {
      icon: 'chat',
      title: 'Erstgespräch',
      text: 'Sie schildern Ihr Anliegen, wir klären Ziele, Rahmenbedingungen und welche Unterlagen hilfreich sind.',
    },
    {
      icon: 'home',
      title: 'Termin vor Ort',
      text: 'Ich sehe mir Ihr Gebäude genau an und nehme alle relevanten Daten auf – von der Gebäudehülle bis zur Heizung.',
    },
    {
      icon: 'clipboard',
      title: 'Auswertung',
      text: 'Die Daten werden ausgewertet und mögliche Maßnahmen sinnvoll miteinander kombiniert und eingeordnet.',
    },
    {
      icon: 'check',
      title: 'Ergebnisbesprechung',
      text: 'Wir besprechen die Ergebnisse in Ruhe. Sie erhalten konkrete Empfehlungen als Grundlage für Ihre Entscheidung.',
    },
  ],

  home: {
    eyebrow: 'Energieberatung',
    title: 'Die richtige Sanierung beginnt mit dem genauen Blick auf Ihre Immobilie.',
    introBefore: 'Ich bin',
    introAfter:
      ', Diplom-Architektin und Energieeffizienz-Expertin für die Bundesförderung für effiziente Gebäude (BEG) von KfW und BAFA.',
    lead: 'Ob Eigenheim oder Firmengebäude: Ich unterstütze Sie dabei, Ihr Gebäude Schritt für Schritt energieeffizienter zu machen – mit einer sorgfältigen Bestandsaufnahme, verständlichen Empfehlungen und einem realistischen Blick auf Kosten und Fördermöglichkeiten.',
    servicesButton: 'Leistungen ansehen',
    heroImage: 'Porträtfoto oder Foto eines Gebäudes',
    benefitsEyebrow: 'Worauf Sie sich verlassen können',
    benefitsTitle: 'Beratung mit Sorgfalt und Klarheit',
    benefits: [
      {
        icon: 'bulb',
        title: 'Verständlich erklärt',
        text: 'Fachbegriffe und Zusammenhänge werden so erklärt, dass Sie fundierte Entscheidungen treffen können.',
      },
      {
        icon: 'home',
        title: 'Auf Ihr Gebäude zugeschnitten',
        text: 'Jedes Gebäude ist anders. Empfehlungen beruhen auf einer genauen Betrachtung Ihrer Situation.',
      },
      {
        icon: 'shield',
        title: 'Realistisch eingeschätzt',
        text: 'Sie erhalten eine ehrliche Einschätzung von Aufwand, Nutzen und Möglichkeiten – ohne leere Versprechen.',
      },
    ],
    audiencesEyebrow: 'Leistungen',
    audiencesTitle: 'Beratung für Privat- und Geschäftskunden',
    audiencesText:
      'Ein Einfamilienhaus stellt andere Fragen als ein Bürogebäude oder eine Werkstatt. Wählen Sie, wofür Sie Unterstützung suchen.',
    audienceCards: {
      private: {
        icon: 'home',
        title: 'Für Privatkunden',
        text: 'Für Eigentümerinnen und Eigentümer von Ein- und Zweifamilienhäusern, Wohnungen und kleineren Mehrfamilienhäusern.',
        points: ['Energetische Gebäudeanalyse', 'Individueller Sanierungsfahrplan', 'Heizung, Dämmung und Förderung'],
        link: 'Leistungen für Privatkunden',
      },
      business: {
        icon: 'building',
        title: 'Für Geschäftskunden',
        text: 'Für Unternehmen, Selbstständige, Vereine und Organisationen mit Büro-, Gewerbe- oder Betriebsgebäuden.',
        points: ['Energieberatung für Nichtwohngebäude', 'Effizienz von Anlagen und Haustechnik', 'Fördermöglichkeiten für Unternehmen'],
        link: 'Leistungen für Geschäftskunden',
      },
    },
    processEyebrow: 'Ablauf',
    processTitle: 'In vier Schritten zu Ihrer Entscheidungsgrundlage',
    processMore: 'Mehr zum Ablauf einer Beratung',
    knowledgeImage: 'Foto, z. B. Detail einer Dämmung oder Beratungssituation',
    knowledgeEyebrow: 'Wissenswertes',
    knowledgeTitle: 'Gut informiert in die Sanierung',
    knowledgeText:
      'Wie hängen Gebäudehülle und Heizung zusammen? In welcher Reihenfolge ist eine Sanierung sinnvoll? Und was sollten Sie zu Fördermitteln wissen? Auf der Seite „Wissenswertes“ finden Sie verständliche Antworten auf häufige Fragen.',
    knowledgeButton: 'Zu Wissenswertes',
  },

  about: {
    eyebrow: 'Über mich',
    title: 'Ihre Ansprechperson für energieeffizientes Wohnen',
    lead: 'Eine gute Energieberatung lebt von Vertrauen. Hier erfahren Sie, wer Sie berät und wie ich arbeite.',
    portrait: 'Porträtfoto',
    introPlaceholderTitle: 'Persönliche Vorstellung',
    introPlaceholder: [
      'Stellen Sie sich hier in zwei bis drei kurzen Absätzen vor, zum Beispiel: Ihr beruflicher Weg, seit wann Sie als Energieberaterin bzw. Energieberater tätig sind, welche Gebäude Sie hauptsächlich beraten (z. B. Ein- und Zweifamilienhäuser, Altbauten) und in welcher Region Sie unterwegs sind.',
      'Bitte nur Angaben machen, die zutreffen und belegbar sind.',
    ],
    qualificationsEyebrow: 'Fachlicher Hintergrund',
    qualificationsTitle: 'Qualifikation',
    qualifications: [
      'Diplom-Architektin',
      'Energieeffizienz-Expertin für die Bundesförderung für effiziente Gebäude (BEG) von KfW und BAFA',
      '[Ggf. Hochschule und Jahr des Abschlusses]',
      '[Ggf. weitere Fortbildungen oder Schwerpunkte]',
    ],
    principlesEyebrow: 'Arbeitsweise',
    principlesTitle: 'So arbeite ich',
    principles: [
      {
        icon: 'ear',
        title: 'Zuerst zuhören',
        text: 'Am Anfang stehen Ihre Ziele: Komfort, Kosten, Werterhalt oder Klimaschutz. Danach richtet sich die Beratung.',
      },
      {
        icon: 'layers',
        title: 'Das Ganze im Blick',
        text: 'Gebäudehülle, Heizung und Lüftung hängen zusammen. Maßnahmen werden deshalb aufeinander abgestimmt betrachtet.',
      },
      {
        icon: 'chat',
        title: 'Klar kommunizieren',
        text: 'Sie erhalten verständliche Erklärungen und nachvollziehbare Ergebnisse – ohne unnötigen Fachjargon.',
      },
      {
        icon: 'shield',
        title: 'Ehrlich einschätzen',
        text: 'Nicht jede Maßnahme lohnt sich in jedem Haus. Ich sage Ihnen offen, was aus meiner Sicht sinnvoll ist und was nicht.',
      },
    ],
    motivationEyebrow: 'Motivation',
    motivationTitle: 'Warum ich Energieberatung mache',
    motivationPlaceholderTitle: 'Persönliche Motivation',
    motivationPlaceholder: [
      'Beschreiben Sie hier in eigenen Worten, was Sie antreibt – zum Beispiel, warum Ihnen das Thema wichtig ist, was Ihnen an der Arbeit mit Hausbesitzerinnen und Hausbesitzern gefällt oder welches Erlebnis Sie zur Energieberatung gebracht hat.',
      'Persönliche, ehrliche Worte schaffen hier mehr Vertrauen als allgemeine Formulierungen.',
    ],
    ctaTitle: 'Lernen wir uns kennen',
  },

  services: {
    eyebrow: 'Leistungen',
    title: 'Beratung, die zu Ihrem Vorhaben passt',
    lead: 'Ob Sie eine einzelne Maßnahme planen oder Ihr Gebäude langfristig modernisieren möchten: Hier finden Sie einen Überblick über meine Beratungsangebote – für Privat- und Geschäftskunden.',
    overviewLabel: 'Leistungsübersicht',
    audienceLabel: 'Zielgruppe wählen',
    jumpLabel: 'Direkt zu einer Leistung',
    /*
     * HINWEIS: Bitte nur Leistungen stehen lassen, die Sie tatsächlich anbieten und für die Sie
     * qualifiziert sind. Geförderte Leistungen (z. B. geförderter Sanierungsfahrplan oder
     * Baubegleitung) setzen in der Regel eine Listung in der Energieeffizienz-Expertenliste voraus.
     * Änderungen bitte auch in en.ts übernehmen.
     */
    audiences: {
      private: {
        tabLabel: 'Privatkunden',
        title: 'Leistungen für Privatkunden',
        intro:
          'Für Eigentümerinnen und Eigentümer von Ein- und Zweifamilienhäusern, Wohnungen und kleineren Mehrfamilienhäusern – ob Sie sanieren, modernisieren oder ein Haus kaufen möchten.',
      items: [
        {
          id: 'gebaeudeanalyse',
          icon: 'search',
          title: 'Energetische Gebäudeanalyse',
          summary:
            'Eine sorgfältige Bestandsaufnahme Ihres Hauses vor Ort – als solide Grundlage für alle weiteren Entscheidungen.',
          details: [
            'Begehung des Gebäudes: Dach, Außenwände, Fenster, Keller und Haustechnik',
            'Auswertung Ihrer Verbrauchsdaten und vorhandener Unterlagen',
            'Einschätzung von Schwachstellen wie Wärmebrücken oder undichten Bauteilen',
            'Verständliche Zusammenfassung der Ergebnisse',
          ],
        },
        {
          id: 'sanierungsfahrplan',
          icon: 'map',
          title: 'Individueller Sanierungsfahrplan',
          summary:
            'Ein langfristiger Plan, der zeigt, welche Maßnahmen in welcher Reihenfolge sinnvoll sind – auch wenn Sie Schritt für Schritt sanieren möchten.',
          details: [
            'Aufeinander abgestimmte Maßnahmenpakete statt isolierter Einzelschritte',
            'Grobe Einschätzung von Kosten und Einsparpotenzialen',
            'Berücksichtigung Ihrer zeitlichen und finanziellen Möglichkeiten',
            'Übersichtliche Darstellung zum Nachschlagen und Weitergeben an Fachbetriebe',
          ],
          note: 'Ein Sanierungsfahrplan kann – abhängig vom jeweils gültigen Förderprogramm – Voraussetzung für zusätzliche Fördermöglichkeiten sein.',
        },
        {
          id: 'heizung',
          icon: 'flame',
          title: 'Beratung zur Heizung',
          summary:
            'Welche Heizung passt zu Ihrem Gebäude? Wir prüfen gemeinsam die Möglichkeiten – technisch und wirtschaftlich.',
          details: [
            'Bewertung der bestehenden Heizungsanlage',
            'Vergleich möglicher Systeme, z. B. Wärmepumpe, Biomasse, Wärmenetz oder Hybridlösungen',
            'Prüfung, welche Voraussetzungen das Gebäude für ein neues System mitbringt',
            'Hinweise zu Optimierungen wie hydraulischem Abgleich',
          ],
        },
        {
          id: 'daemmung',
          icon: 'layers',
          title: 'Dämmung & Gebäudehülle',
          summary:
            'Eine gut gedämmte Gebäudehülle senkt den Wärmebedarf dauerhaft. Wir klären, wo sich Maßnahmen bei Ihnen lohnen können.',
          details: [
            'Dach, oberste Geschossdecke, Fassade und Kellerdecke',
            'Fenster und Außentüren',
            'Hinweise zu Wärmebrücken, Luftdichtheit und Feuchteschutz',
            'Abstimmung der Dämmung mit Lüftung und Heizung',
          ],
        },
        {
          id: 'foerderung',
          icon: 'euro',
          title: 'Unterstützung bei Fördermöglichkeiten',
          summary:
            'Ein Überblick über aktuell passende Förderprogramme und darüber, was bei der Antragstellung zu beachten ist.',
          details: [
            'Überblick über in Frage kommende Programme, z. B. von BAFA oder KfW',
            'Hinweise zu Voraussetzungen und zur richtigen Reihenfolge bei der Antragstellung',
            'Unterstützung bei den technischen Nachweisen, soweit erforderlich',
          ],
          note: 'Ob und in welcher Höhe eine Förderung gewährt wird, entscheidet ausschließlich die jeweilige Förderstelle. Förderbedingungen ändern sich regelmäßig – eine Förderung kann daher nicht zugesichert werden.',
        },
        {
          id: 'begleitung',
          icon: 'users',
          title: 'Begleitung bei der Umsetzung',
          summary:
            'Auf Wunsch unterstütze ich Sie auch, wenn es konkret wird – damit die geplanten Maßnahmen gut umgesetzt werden.',
          details: [
            'Hilfe beim Einordnen und Vergleichen von Angeboten',
            'Fachliche Abstimmung mit beteiligten Handwerksbetrieben',
            'Ansprechperson bei Fragen während der Umsetzung',
          ],
        },
      ],
        pricePlaceholder:
          'Ergänzen Sie hier bei Bedarf Angaben zu Ihren Preisen für Privatkunden (z. B. Preisrahmen oder Hinweis auf individuelle Angebote). Gegenüber Privatpersonen müssen Preise als Endpreise inklusive Umsatzsteuer angegeben werden (Preisangabenverordnung).',
      },
      business: {
        tabLabel: 'Geschäftskunden',
        title: 'Leistungen für Geschäftskunden',
        intro:
          'Für Unternehmen, Selbstständige, Vereine und Organisationen: Energieeffizienz von Büro-, Gewerbe- und Betriebsgebäuden sowie der zugehörigen Anlagentechnik – mit Blick auf Betriebskosten, Wirtschaftlichkeit und Förderung.',
        /*
         * HINWEIS: Nur Leistungen anbieten, für die Sie qualifiziert bzw. zugelassen sind.
         * Energieaudits nach DIN EN 16247 und geförderte Beratungen für Nichtwohngebäude setzen
         * in der Regel eine entsprechende Qualifikation bzw. Registrierung (z. B. beim BAFA) voraus.
         */
        items: [
          {
            id: 'nichtwohngebaeude',
            icon: 'building',
            title: 'Energieberatung für Nichtwohngebäude',
            summary:
              'Bestandsaufnahme und Bewertung von Büro-, Gewerbe- und Vereinsgebäuden – als Grundlage für wirtschaftliche Investitionsentscheidungen.',
            details: [
              'Begehung von Gebäudehülle und technischer Gebäudeausrüstung',
              'Auswertung von Verbrauchsdaten und Lastgängen, soweit vorhanden',
              'Bewertung von Einsparpotenzialen und Wirtschaftlichkeit von Maßnahmen',
              'Bericht als Entscheidungsgrundlage für Geschäftsführung oder Vorstand',
            ],
          },
          {
            id: 'sanierungskonzept',
            icon: 'map',
            title: 'Sanierungskonzept für Betriebsgebäude',
            summary:
              'Ein abgestimmter Fahrplan, wie Gebäude schrittweise modernisiert werden können – passend zu Budget- und Investitionsplanung.',
            details: [
              'Priorisierung von Maßnahmen nach Wirkung, Kosten und Dringlichkeit',
              'Berücksichtigung laufender Betriebsabläufe bei der Umsetzung',
              'Grobe Einschätzung von Investitionskosten und Einsparungen',
            ],
          },
          {
            id: 'anlagentechnik',
            icon: 'flame',
            title: 'Heizung, Lüftung & Anlagentechnik',
            summary:
              'Viel Energie steckt in der Technik: Heizung, Lüftung, Klimatisierung, Beleuchtung und ggf. Prozesswärme oder Druckluft.',
            details: [
              'Bewertung bestehender Anlagen und ihrer Betriebsweise',
              'Prüfung von Optimierungen, z. B. Regelung, Betriebszeiten oder Abwärmenutzung',
              'Vergleich möglicher Systeme für Heizung und Warmwasser',
            ],
          },
          {
            id: 'energieaudit',
            icon: 'clipboard',
            title: 'Energieaudit nach DIN EN 16247',
            summary:
              'Systematische Analyse des Energieeinsatzes im Unternehmen – für Unternehmen, die dazu verpflichtet sind oder es freiwillig durchführen möchten.',
            details: [
              'Erfassung und Auswertung der Energieströme',
              'Identifikation und Bewertung von Effizienzmaßnahmen',
              'Dokumentation nach den Anforderungen der Norm',
            ],
            note: 'Ob für Ihr Unternehmen eine Pflicht zum Energieaudit besteht, hängt unter anderem vom Energieverbrauch ab und ist im Einzelfall zu prüfen.',
          },
          {
            id: 'foerderung-unternehmen',
            icon: 'euro',
            title: 'Fördermöglichkeiten für Unternehmen',
            summary:
              'Ein Überblick über Programme für Nichtwohngebäude und Energieeffizienz in der Wirtschaft und darüber, was bei der Antragstellung zu beachten ist.',
            details: [
              'Überblick über in Frage kommende Programme, z. B. von BAFA oder KfW',
              'Hinweise zu Voraussetzungen, Antragsreihenfolge und Nachweisen',
              'Unterstützung bei technischen Nachweisen, soweit erforderlich',
            ],
            note: 'Ob und in welcher Höhe eine Förderung gewährt wird, entscheidet ausschließlich die jeweilige Förderstelle. Förderbedingungen ändern sich regelmäßig – eine Förderung kann daher nicht zugesichert werden.',
          },
          {
            id: 'umsetzung-unternehmen',
            icon: 'users',
            title: 'Begleitung bei der Umsetzung',
            summary: 'Unterstützung, wenn aus der Planung konkrete Projekte werden.',
            details: [
              'Hilfe beim Einordnen und Vergleichen von Angeboten',
              'Fachliche Abstimmung mit Planern und ausführenden Betrieben',
              'Ansprechperson bei Fragen während der Umsetzung',
            ],
          },
        ],
        pricePlaceholder:
          'Ergänzen Sie hier bei Bedarf Angaben zu Ihren Preisen für Geschäftskunden. Gegenüber Unternehmen dürfen Nettopreise angegeben werden – kennzeichnen Sie diese deutlich als „zzgl. USt.“.',
      },
    },
    fundingTitle: 'Wichtig zu Fördermitteln',
    fundingParagraphsHtml: [
      'Für viele Maßnahmen gibt es staatliche Förderprogramme, etwa vom Bundesamt für Wirtschaft und Ausfuhrkontrolle (BAFA) oder der KfW. Die Bedingungen, Fördersätze und Programme ändern sich jedoch regelmäßig. Häufig muss ein Antrag gestellt werden, <strong>bevor</strong> Aufträge vergeben werden.',
      'Ich informiere Sie über den jeweils aktuellen Stand und unterstütze Sie bei den fachlichen Voraussetzungen. Die Entscheidung über eine Förderung trifft allein die zuständige Förderstelle – eine Bewilligung kann daher nicht garantiert werden.',
    ],
    fundingMore: 'Mehr zum Thema Förderung',
    costsTitle: 'Kosten und Ablauf',
    costsText:
      'Der Aufwand einer Beratung hängt von Art, Größe und Zustand des Gebäudes sowie vom gewünschten Umfang ab. Im Erstgespräch klären wir, welche Leistung für Sie sinnvoll ist, und Sie erhalten vorab ein transparentes Angebot.',
    pricePlaceholderTitle: 'Preisinformationen',
    ctaTitle: 'Welche Leistung passt zu Ihnen?',
    ctaText:
      'Beschreiben Sie kurz Ihr Vorhaben – gemeinsam finden wir heraus, welche Beratung für Ihr Haus sinnvoll ist.',
  },

  knowledge: {
    eyebrow: 'Wissenswertes',
    title: 'Gut informiert entscheiden',
    lead: 'Hier finden Sie leicht verständliche Grundlagen rund um Energieeffizienz und Sanierung – als erste Orientierung vor einer Beratung.',
    tocTitle: 'Inhalt',
    toc: [
      { id: 'warum', label: 'Warum eine Energieberatung?' },
      { id: 'effizienz', label: 'Energieeffizienz verstehen' },
      { id: 'sanierung', label: 'Sanierung sinnvoll planen' },
      { id: 'ablauf', label: 'Ablauf einer Beratung' },
      { id: 'foerderung', label: 'Förderung: Das sollten Sie wissen' },
      { id: 'tipps', label: 'Einfache Tipps für den Alltag' },
      { id: 'faq', label: 'Häufige Fragen' },
    ],
    why: {
      title: 'Warum eine Energieberatung?',
      paragraphs: [
        'Eine energetische Sanierung ist meist eine größere Investition. Wer einzelne Maßnahmen ohne Gesamtblick umsetzt, riskiert, dass sie später nicht gut zusammenpassen – etwa eine neue Heizung, die nach einer späteren Dämmung zu groß dimensioniert ist.',
        'Eine Energieberatung schafft Klarheit: Sie zeigt, wo Ihr Gebäude Energie verliert, welche Maßnahmen sich ergänzen und in welcher Reihenfolge sie sinnvoll sind. So können Sie Entscheidungen auf einer soliden Grundlage treffen.',
      ],
    },
    efficiency: {
      title: 'Energieeffizienz verstehen',
      intro: 'Wie viel Energie ein Haus benötigt, hängt im Wesentlichen von drei Bereichen ab:',
      items: [
        {
          icon: 'layers',
          label: 'Gebäudehülle:',
          text: 'Dach, Außenwände, Fenster und Kellerdecke bestimmen, wie viel Wärme nach außen verloren geht. Schwachstellen sind oft Wärmebrücken, etwa an Fensteranschlüssen oder Balkonplatten.',
        },
        {
          icon: 'flame',
          label: 'Anlagentechnik:',
          text: 'Heizung, Warmwasserbereitung und ggf. Lüftung bestimmen, wie effizient die benötigte Wärme erzeugt und verteilt wird.',
        },
        {
          icon: 'users',
          label: 'Nutzung:',
          text: 'Raumtemperaturen, Lüftungsgewohnheiten und Warmwasserverbrauch haben ebenfalls einen deutlichen Einfluss.',
        },
      ],
      outroHtml:
        'Eine wichtige Kennzahl ist der Energiebedarf bzw. -verbrauch pro Quadratmeter Wohnfläche und Jahr (kWh/(m²·a)). Er wird zum Beispiel im <strong>Energieausweis</strong> angegeben und ermöglicht einen groben Vergleich mit anderen Gebäuden.',
    },
    renovation: {
      title: 'Sanierung sinnvoll planen',
      intro: 'Es gibt keine Reihenfolge, die für jedes Haus passt. Einige Grundsätze haben sich aber bewährt:',
      items: [
        {
          label: 'Gesamtplan vor Einzelmaßnahme:',
          text: 'Auch wenn Sie schrittweise sanieren, lohnt es sich, das Ziel von Anfang an zu kennen.',
        },
        {
          label: 'Gebäudehülle und Heizung zusammen denken:',
          text: 'Wird zuerst der Wärmebedarf gesenkt, kann die Heizung oft kleiner ausgelegt werden.',
        },
        {
          label: 'Anlässe nutzen:',
          text: 'Steht ohnehin eine Dachreparatur oder ein neuer Fassadenanstrich an, lässt sich eine Dämmung häufig günstiger mit umsetzen.',
        },
        {
          label: 'Feuchte und Lüftung beachten:',
          text: 'Ein dichteres Gebäude braucht ein durchdachtes Lüftungskonzept, um Feuchteschäden und Schimmel zu vermeiden.',
        },
      ],
    },
    process: {
      title: 'Ablauf einer Beratung',
      intro: 'So läuft eine Energieberatung typischerweise ab:',
      documentsTitle: 'Welche Unterlagen sind hilfreich?',
      documents: [
        'Grundrisse, Schnitte und Ansichten des Gebäudes (falls vorhanden)',
        'Energieverbrauchsabrechnungen der letzten Jahre (Gas, Öl, Strom, Fernwärme o. Ä.)',
        'Angaben zur Heizungsanlage, z. B. Typenschild oder Messprotokoll des Schornsteinfegers',
        'Informationen zu bereits durchgeführten Sanierungen (Jahr, Maßnahme, ggf. Rechnungen)',
        'Einen vorhandenen Energieausweis',
      ],
    },
    funding: {
      title: 'Förderung: Das sollten Sie wissen',
      intro:
        'Bund, Länder und teilweise auch Kommunen fördern energetische Maßnahmen und Energieberatungen. Die wichtigsten Anlaufstellen auf Bundesebene sind das BAFA und die KfW. Einige Punkte gelten bei vielen Programmen:',
      facts: [
        'Der Antrag muss häufig gestellt werden, bevor ein Auftrag vergeben wird.',
        'Für viele Programme sind technische Mindestanforderungen und Nachweise erforderlich.',
        'Förderbedingungen und -sätze ändern sich regelmäßig – informieren Sie sich stets aktuell.',
      ],
      note: 'Diese Informationen dienen der allgemeinen Orientierung und ersetzen keine individuelle Prüfung. Über die Gewährung einer Förderung entscheidet ausschließlich die jeweilige Förderstelle.',
      linksIntro: 'Aktuelle und verbindliche Informationen finden Sie direkt bei den Förderstellen:',
      links: [
        { href: 'https://www.bafa.de', label: 'Bundesamt für Wirtschaft und Ausfuhrkontrolle (BAFA)' },
        { href: 'https://www.kfw.de', label: 'KfW' },
        {
          href: 'https://www.energie-effizienz-experten.de',
          label: 'Energieeffizienz-Expertenliste für Förderprogramme des Bundes',
        },
      ],
    },
    tips: {
      title: 'Einfache Tipps für den Alltag',
      intro: 'Auch ohne Sanierung lässt sich im Alltag Energie sparen:',
      items: [
        {
          title: 'Raumtemperatur bewusst wählen',
          text: 'Schon ein Grad weniger Raumtemperatur kann den Heizenergiebedarf spürbar senken. Nicht genutzte Räume müssen nicht auf Wohntemperatur geheizt werden – sollten aber nicht auskühlen.',
        },
        {
          title: 'Richtig lüften',
          text: 'Mehrmals täglich einige Minuten stoß- oder querlüften ist effizienter als dauerhaft gekippte Fenster. So wird Feuchtigkeit abgeführt, ohne die Wände auszukühlen.',
        },
        {
          title: 'Heizkörper frei halten',
          text: 'Möbel oder lange Vorhänge vor den Heizkörpern behindern die Wärmeabgabe. Gluckernde Heizkörper sollten entlüftet werden.',
        },
        {
          title: 'Heizung prüfen lassen',
          text: 'Ein hydraulischer Abgleich und richtig eingestellte Heizkurven sorgen dafür, dass die Wärme gleichmäßig verteilt wird. Fragen Sie Ihren Heizungsfachbetrieb danach.',
        },
      ],
    },
    faq: {
      title: 'Häufige Fragen',
      items: [
        {
          question: 'Für wen ist eine Energieberatung sinnvoll?',
          answer:
            'Vor allem für Eigentümerinnen und Eigentümer von Bestandsgebäuden, die sanieren, eine neue Heizung planen oder ein Haus kaufen möchten. Aber auch wenn Sie einfach wissen möchten, wo Ihr Haus energetisch steht, kann eine Beratung hilfreich sein.',
        },
        {
          question: 'Wie lange dauert eine Beratung?',
          answer:
            'Das hängt vom Gebäude und vom gewünschten Umfang ab. Der Termin vor Ort dauert in der Regel einige Stunden; für die Auswertung und Ausarbeitung kommt weitere Zeit hinzu. Im Erstgespräch erhalten Sie eine Einschätzung des zeitlichen Rahmens.',
        },
        {
          question: 'Muss ich alle Unterlagen vollständig haben?',
          answer:
            'Nein. Vorhandene Unterlagen erleichtern die Arbeit, aber fehlende Pläne oder Daten lassen sich oft vor Ort ermitteln. Bringen Sie einfach zusammen, was Sie haben.',
        },
        {
          question: 'Muss ich alle empfohlenen Maßnahmen umsetzen?',
          answer:
            'Nein. Die Beratung ist eine Entscheidungsgrundlage. Sie entscheiden selbst, welche Maßnahmen Sie wann umsetzen. Ein Sanierungsfahrplan hilft gerade dabei, schrittweise vorzugehen.',
        },
        {
          question: 'Beraten Sie auch Unternehmen?',
          answer:
            'Ja. Für Unternehmen, Selbstständige, Vereine und Organisationen biete ich Energieberatung für Büro-, Gewerbe- und Betriebsgebäude an. Einen Überblick finden Sie unter „Leistungen“ im Bereich „Geschäftskunden“.',
        },
        {
          question: 'Bekomme ich garantiert eine Förderung?',
          answer:
            'Nein. Ob eine Förderung gewährt wird, entscheidet die jeweilige Förderstelle nach den zum Zeitpunkt der Antragstellung geltenden Bedingungen. Eine gute Vorbereitung erhöht jedoch die Chance, dass formale Voraussetzungen erfüllt sind.',
        },
      ],
      moreBefore: 'Ihre Frage ist nicht dabei?',
      moreLink: 'Schreiben Sie mir gern.',
    },
  },

  contact: {
    eyebrow: 'Kontakt',
    title: 'Beratung anfragen',
    lead: 'Schildern Sie mir kurz Ihr Anliegen. Ich melde mich bei Ihnen, um die nächsten Schritte zu besprechen.',
    formTitle: 'Ihre Nachricht',
    directTitle: 'Direkter Kontakt',
    infoTitle: 'Gut zu wissen',
    infoBefore:
      'Ihre Angaben werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet. Weitere Informationen finden Sie in den',
    infoLink: 'Datenschutzhinweisen',
    infoAfter: '.',
  },

  form: {
    requiredHintBefore: 'Pflichtfelder sind mit',
    requiredHintSr: '„Pflichtfeld“',
    requiredHintAfter: ' gekennzeichnet.',
    summaryTitle: 'Bitte prüfen Sie Ihre Eingaben:',
    labels: {
      customerType: 'Ich frage an als',
      company: 'Unternehmen / Organisation',
      name: 'Name',
      email: 'E-Mail',
      phone: 'Telefonnummer',
      message: 'Ihr Anliegen',
      privacy: 'Datenschutzhinweise',
    },
    customerTypes: {
      private: 'Privatperson',
      business: 'Unternehmen, Gewerbe oder Organisation',
    },
    companyHelp: 'Name des Unternehmens, Vereins oder der Organisation.',
    optional: '(optional)',
    phoneHelp: 'Falls Sie lieber telefonisch zurückgerufen werden möchten.',
    messageHelp: 'Zum Beispiel: Gebäudeart und Baujahr, geplante Maßnahmen oder Ihre Fragen.',
    privacyBefore: 'Ich habe die',
    privacyLink: 'Datenschutzhinweise',
    privacyAfter:
      'zur Kenntnis genommen und bin einverstanden, dass meine Angaben zur Bearbeitung meiner Anfrage verwendet werden.',
    submit: 'Anfrage absenden',
    submitting: 'Wird gesendet …',
    errors: {
      customerType: {
        required: 'Bitte wählen Sie, ob Sie als Privatperson oder für ein Unternehmen anfragen.',
      },
      company: {
        required: 'Bitte geben Sie den Namen des Unternehmens bzw. der Organisation an.',
      },
      name: {
        required: 'Bitte geben Sie Ihren Namen ein.',
        minlength: 'Der Name sollte mindestens 2 Zeichen lang sein.',
      },
      email: {
        required: 'Bitte geben Sie Ihre E-Mail-Adresse ein.',
        pattern: 'Bitte geben Sie eine gültige E-Mail-Adresse ein, z. B. name@beispiel.de.',
      },
      phone: {
        pattern: 'Bitte geben Sie eine gültige Telefonnummer ein oder lassen Sie das Feld leer.',
      },
      message: {
        required: 'Bitte beschreiben Sie kurz Ihr Anliegen.',
        minlength: 'Bitte beschreiben Sie Ihr Anliegen etwas ausführlicher (mindestens 10 Zeichen).',
        maxlength: 'Bitte kürzen Sie Ihre Nachricht auf höchstens 3000 Zeichen.',
      },
      privacy: {
        required: 'Bitte bestätigen Sie, dass Sie die Datenschutzhinweise zur Kenntnis genommen haben.',
      },
    },
    fallbackError: 'Bitte prüfen Sie diese Eingabe.',
    sent: {
      title: 'Vielen Dank für Ihre Nachricht!',
      text: 'Ihre Anfrage wurde übermittelt. Ich melde mich so bald wie möglich bei Ihnen.',
    },
    notConfigured: {
      title: 'Ihre Eingaben sind vollständig – die Nachricht wurde jedoch nicht versendet.',
      text: 'Der Online-Versand über dieses Formular ist derzeit noch nicht eingerichtet. Bitte nehmen Sie vorerst direkt per E-Mail oder Telefon Kontakt auf. Ihre Eingaben bleiben im Formular erhalten.',
      mailButton: 'Nachricht im E-Mail-Programm öffnen',
    },
    error: {
      title: 'Die Nachricht konnte leider nicht gesendet werden.',
      text: 'Bitte versuchen Sie es später erneut oder nehmen Sie direkt per E-Mail oder Telefon Kontakt auf. Ihre Eingaben bleiben im Formular erhalten.',
    },
    mailSubject: 'Anfrage Energieberatung',
    mailPhone: 'Telefon',
    mailCustomerType: 'Anfrage als',
    mailCompany: 'Unternehmen',
    devNoteHtml:
      '<strong>Hinweis für die Entwicklung:</strong> Es ist kein Formularversand eingerichtet. Tragen Sie in <code>src/app/config/contact.config.ts</code> die URL Ihres Backends oder Formulardienstes als <code>CONTACT_ENDPOINT</code> ein. Details siehe <code>README.md</code>. Dieser Hinweis erscheint nur im Entwicklungsmodus.',
  },

  notFound: {
    title: 'Seite nicht gefunden',
    text: 'Die gesuchte Seite existiert leider nicht oder wurde verschoben.',
    home: 'Zur Startseite',
    contact: 'Kontakt aufnehmen',
  },
};
