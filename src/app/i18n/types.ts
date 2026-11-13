import type { PageKey } from '../config/navigation';
import type { IconName } from '../shared/icon';

/** Verfügbare Sprachen */
export type Lang = 'de' | 'en';

/** Zielgruppen: Privatkunden und Geschäftskunden */
export type Audience = 'private' | 'business';
export const AUDIENCES: Audience[] = ['private', 'business'];

export type FormField = 'customerType' | 'company' | 'name' | 'email' | 'phone' | 'message' | 'privacy';

/** Leistungsangebot für eine Zielgruppe */
export interface AudienceServices {
  /** Beschriftung des Reiters, z. B. „Privatkunden“ */
  tabLabel: string;
  title: string;
  intro: string;
  items: ServiceItem[];
  /** PLATZHALTER: Preisinformationen für diese Zielgruppe */
  pricePlaceholder: string;
}

interface Feature {
  icon: IconName;
  title: string;
  text: string;
}

export interface ServiceItem {
  /** Sprungmarke – in beiden Sprachen identisch halten */
  id: string;
  icon: IconName;
  title: string;
  summary: string;
  details: string[];
  note?: string;
}

/**
 * Struktur aller Texte der Website. de.ts und en.ts müssen diese Struktur
 * vollständig erfüllen – fehlt ein Text, meldet der Build einen Fehler.
 *
 * Felder mit der Endung „Html“ dürfen einfache Auszeichnungen wie <strong> enthalten.
 */
export interface Translations {
  /** Name der Sprache in dieser Sprache, z. B. „Deutsch“ */
  langName: string;
  /** Hinweis für Screenreader beim Sprachwechsel, z. B. „Auf Deutsch wechseln“ */
  switchToThis: string;

  common: {
    skipLink: string;
    ctaButton: string;
    toHome: string;
    mainNavLabel: string;
    menuOpen: string;
    menuClose: string;
    themeLabel: string;
    themeToDark: string;
    themeToLight: string;
    languageLabel: string;
    placeholderPrefix: string;
    placeholderTooltip: string;
    imagePlaceholder: string;
    externalLink: string;
    newTab: string;
  };

  nav: Record<PageKey, string>;
  meta: Record<PageKey | 'notFound', { title: string; description: string }>;

  footer: {
    textBefore: string;
    textAfter: string;
    pagesHeading: string;
    contactHeading: string;
    legalLabel: string;
  };

  cta: { title: string; text: string };

  process: { icon: IconName; title: string; text: string }[];

  home: {
    eyebrow: string;
    title: string;
    /** Vorstellungssatz: introBefore + Name (fett, aus site.config.ts) + introAfter */
    introBefore: string;
    introAfter: string;
    lead: string;
    servicesButton: string;
    heroImage: string;
    benefitsEyebrow: string;
    benefitsTitle: string;
    benefits: Feature[];
    audiencesEyebrow: string;
    audiencesTitle: string;
    audiencesText: string;
    audienceCards: Record<Audience, { icon: IconName; title: string; text: string; points: string[]; link: string }>;
    processEyebrow: string;
    processTitle: string;
    processMore: string;
    knowledgeImage: string;
    knowledgeEyebrow: string;
    knowledgeTitle: string;
    knowledgeText: string;
    knowledgeButton: string;
  };

  about: {
    eyebrow: string;
    title: string;
    lead: string;
    portrait: string;
    introPlaceholderTitle: string;
    introPlaceholder: string[];
    qualificationsEyebrow: string;
    qualificationsTitle: string;
    /** PLATZHALTER: Ihre Qualifikationen – nur tatsächlich vorhandene eintragen */
    qualifications: string[];
    principlesEyebrow: string;
    principlesTitle: string;
    principles: Feature[];
    motivationEyebrow: string;
    motivationTitle: string;
    motivationPlaceholderTitle: string;
    motivationPlaceholder: string[];
    ctaTitle: string;
  };

  services: {
    eyebrow: string;
    title: string;
    lead: string;
    overviewLabel: string;
    audienceLabel: string;
    jumpLabel: string;
    audiences: Record<Audience, AudienceServices>;
    fundingTitle: string;
    fundingParagraphsHtml: string[];
    fundingMore: string;
    costsTitle: string;
    costsText: string;
    pricePlaceholderTitle: string;
    ctaTitle: string;
    ctaText: string;
  };

  knowledge: {
    eyebrow: string;
    title: string;
    lead: string;
    tocTitle: string;
    toc: { id: string; label: string }[];
    why: { title: string; paragraphs: string[] };
    efficiency: {
      title: string;
      intro: string;
      items: { icon: IconName; label: string; text: string }[];
      outroHtml: string;
    };
    renovation: { title: string; intro: string; items: { label: string; text: string }[] };
    process: { title: string; intro: string; documentsTitle: string; documents: string[] };
    funding: {
      title: string;
      intro: string;
      facts: string[];
      note: string;
      linksIntro: string;
      links: { href: string; label: string }[];
    };
    tips: { title: string; intro: string; items: { title: string; text: string }[] };
    faq: {
      title: string;
      items: { question: string; answer: string }[];
      moreBefore: string;
      moreLink: string;
    };
  };

  contact: {
    eyebrow: string;
    title: string;
    lead: string;
    formTitle: string;
    directTitle: string;
    infoTitle: string;
    infoBefore: string;
    infoLink: string;
    infoAfter: string;
  };

  form: {
    requiredHintBefore: string;
    requiredHintSr: string;
    requiredHintAfter: string;
    summaryTitle: string;
    labels: Record<FormField, string>;
    customerTypes: Record<Audience, string>;
    companyHelp: string;
    optional: string;
    phoneHelp: string;
    messageHelp: string;
    privacyBefore: string;
    privacyLink: string;
    privacyAfter: string;
    submit: string;
    submitting: string;
    errors: Record<FormField, Record<string, string>>;
    fallbackError: string;
    sent: { title: string; text: string };
    notConfigured: { title: string; text: string; mailButton: string };
    error: { title: string; text: string };
    mailSubject: string;
    mailPhone: string;
    mailCustomerType: string;
    mailCompany: string;
    devNoteHtml: string;
  };

  notFound: { title: string; text: string; home: string; contact: string };
}
