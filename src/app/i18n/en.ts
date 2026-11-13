import type { Translations } from './types';

/**
 * ENGLISCHE TEXTE (ENGLISH TEXTS)
 * Muss dieselbe Struktur wie de.ts haben – fehlende Texte melden einen Build-Fehler.
 * Platzhalter in [eckigen Klammern] werden auf der Website gelb markiert.
 */
export const en: Translations = {
  langName: 'English',
  switchToThis: 'Switch to English',

  common: {
    skipLink: 'Skip to content',
    ctaButton: 'Request a consultation',
    toHome: 'to the home page',
    mainNavLabel: 'Main navigation',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    themeLabel: 'Dark theme',
    themeToDark: 'Switch to dark theme',
    themeToLight: 'Switch to light theme',
    languageLabel: 'Language',
    placeholderPrefix: 'Placeholder',
    placeholderTooltip: 'Placeholder – please replace with real information',
    imagePlaceholder: 'Image placeholder',
    externalLink: '(external website, opens in a new tab)',
    newTab: '(opens in a new tab)',
  },

  nav: {
    home: 'Home',
    about: 'About me',
    services: 'Services',
    knowledge: 'Good to know',
    contact: 'Contact',
    imprint: 'Legal notice',
    privacy: 'Privacy policy',
  },

  meta: {
    home: {
      title: 'Energy consulting for private and business clients',
      description:
        'Simone Reintgen, architect (Dipl.-Ing.) and energy efficiency expert (BEG, KfW, BAFA) in the Rheingau-Taunus district – energy consulting for private individuals and companies: building analysis, renovation roadmap, heating, insulation, energy efficiency in business and guidance on funding options.',
    },
    about: {
      title: 'About me',
      description:
        'Get to know your energy consultant: qualifications, way of working and motivation – for clear and careful advice on your home.',
    },
    services: {
      title: 'Services',
      description:
        'Services for private and business clients: building assessment, renovation roadmap, heating, insulation, energy consulting for non-residential buildings and support with funding options.',
    },
    knowledge: {
      title: 'Good to know',
      description:
        'Easy-to-understand information for homeowners: energy efficiency, planning a renovation, how a consultation works, funding and everyday tips.',
    },
    contact: {
      title: 'Contact & consultation request',
      description:
        'Get in touch and request an energy consultation for your home – via the form, by email or by phone.',
    },
    imprint: { title: 'Legal notice', description: 'Legal notice (Impressum) and provider information for this website.' },
    privacy: {
      title: 'Privacy policy',
      description: 'Information on the processing of personal data on this website.',
    },
    notFound: { title: 'Page not found', description: 'The requested page could not be found.' },
  },

  footer: {
    textBefore: 'Energy consulting for private and business clients',
    textAfter: '– clear, careful and tailored to your home.',
    pagesHeading: 'Pages',
    contactHeading: 'Contact',
    legalLabel: 'Legal',
  },

  cta: {
    title: 'Would you like to know what makes sense for your home?',
    text: 'Briefly describe what you need. I will get back to you to discuss the next steps – with no obligation.',
  },

  process: [
    {
      icon: 'chat',
      title: 'Initial conversation',
      text: 'You tell me what you have in mind; we clarify goals, constraints and which documents will be helpful.',
    },
    {
      icon: 'home',
      title: 'On-site visit',
      text: 'I take a close look at your building and record all relevant data – from the building envelope to the heating system.',
    },
    {
      icon: 'clipboard',
      title: 'Analysis',
      text: 'The data is evaluated, and possible measures are combined and put into a sensible order.',
    },
    {
      icon: 'check',
      title: 'Results meeting',
      text: 'We go through the results together. You receive concrete recommendations as a basis for your decision.',
    },
  ],

  home: {
    eyebrow: 'Energy consulting',
    title: 'The right renovation starts with a close look at your property.',
    introBefore: 'I am',
    introAfter:
      ', architect (Dipl.-Ing.) and energy efficiency expert for the German Federal Funding for Efficient Buildings (BEG) programme of KfW and BAFA.',
    lead: 'Whether it is your home or your company building: I help you make it more energy-efficient step by step – with a careful assessment, clear recommendations and a realistic view of costs and funding options.',
    servicesButton: 'View services',
    heroImage: 'Portrait photo or photo of a building',
    benefitsEyebrow: 'What you can rely on',
    benefitsTitle: 'Advice with care and clarity',
    benefits: [
      {
        icon: 'bulb',
        title: 'Clearly explained',
        text: 'Technical terms and connections are explained in a way that allows you to make well-founded decisions.',
      },
      {
        icon: 'home',
        title: 'Tailored to your building',
        text: 'Every building is different. Recommendations are based on a close look at your situation.',
      },
      {
        icon: 'shield',
        title: 'Realistically assessed',
        text: 'You receive an honest assessment of effort, benefit and options – without empty promises.',
      },
    ],
    audiencesEyebrow: 'Services',
    audiencesTitle: 'Advice for private and business clients',
    audiencesText:
      'A single-family home raises different questions than an office building or a workshop. Choose what you need support with.',
    audienceCards: {
      private: {
        icon: 'home',
        title: 'For private clients',
        text: 'For owners of single- and two-family houses, apartments and smaller apartment buildings.',
        points: ['Energy assessment of your building', 'Individual renovation roadmap', 'Heating, insulation and funding'],
        link: 'Services for private clients',
      },
      business: {
        icon: 'building',
        title: 'For business clients',
        text: 'For companies, self-employed professionals, associations and organisations with office, commercial or operational buildings.',
        points: ['Energy consulting for non-residential buildings', 'Efficiency of systems and building services', 'Funding options for companies'],
        link: 'Services for business clients',
      },
    },
    processEyebrow: 'Process',
    processTitle: 'Four steps to a sound basis for your decision',
    processMore: 'More about how a consultation works',
    knowledgeImage: 'Photo, e.g. detail of insulation or a consultation',
    knowledgeEyebrow: 'Good to know',
    knowledgeTitle: 'Well informed before you renovate',
    knowledgeText:
      'How are the building envelope and heating connected? In which order does a renovation make sense? And what should you know about funding? The “Good to know” page offers clear answers to common questions.',
    knowledgeButton: 'Go to Good to know',
  },

  about: {
    eyebrow: 'About me',
    title: 'Your contact for energy-efficient living',
    lead: 'Good energy consulting is built on trust. Here you can find out who will advise you and how I work.',
    portrait: 'Portrait photo',
    introPlaceholderTitle: 'Personal introduction',
    introPlaceholder: [
      'Introduce yourself here in two or three short paragraphs, for example: your professional background, how long you have been working as an energy consultant, which buildings you mainly advise on (e.g. single- and two-family houses, older buildings) and which region you cover.',
      'Please only include information that is accurate and verifiable.',
    ],
    qualificationsEyebrow: 'Professional background',
    qualificationsTitle: 'Qualifications',
    qualifications: [
      'Architect (Dipl.-Ing.)',
      'Energy efficiency expert for the German Federal Funding for Efficient Buildings (BEG) programme of KfW and BAFA',
      '[If applicable: university and year of graduation]',
      '[If applicable: further training or areas of focus]',
    ],
    principlesEyebrow: 'Way of working',
    principlesTitle: 'How I work',
    principles: [
      {
        icon: 'ear',
        title: 'Listening first',
        text: 'It all starts with your goals: comfort, costs, preserving value or climate protection. The consultation is based on them.',
      },
      {
        icon: 'layers',
        title: 'Seeing the whole picture',
        text: 'Building envelope, heating and ventilation are connected. That is why measures are considered in relation to each other.',
      },
      {
        icon: 'chat',
        title: 'Communicating clearly',
        text: 'You receive understandable explanations and comprehensible results – without unnecessary jargon.',
      },
      {
        icon: 'shield',
        title: 'Assessing honestly',
        text: 'Not every measure pays off in every house. I will tell you openly what I consider worthwhile and what not.',
      },
    ],
    motivationEyebrow: 'Motivation',
    motivationTitle: 'Why I work in energy consulting',
    motivationPlaceholderTitle: 'Personal motivation',
    motivationPlaceholder: [
      'Describe in your own words what drives you – for example, why the topic matters to you, what you enjoy about working with homeowners or what experience led you to energy consulting.',
      'Personal, honest words build more trust here than general statements.',
    ],
    ctaTitle: 'Let’s get to know each other',
  },

  services: {
    eyebrow: 'Services',
    title: 'Advice that fits your project',
    lead: 'Whether you are planning a single measure or want to modernise your building over the long term: here you will find an overview of my consulting services – for private and business clients.',
    overviewLabel: 'Overview of services',
    audienceLabel: 'Choose client group',
    jumpLabel: 'Jump to a service',
    /* Bitte identisch zu de.ts halten (gleiche ids und icons). */
    audiences: {
      private: {
        tabLabel: 'Private clients',
        title: 'Services for private clients',
        intro:
          'For owners of single- and two-family houses, apartments and smaller apartment buildings – whether you want to renovate, modernise or buy a house.',
      items: [
        {
          id: 'gebaeudeanalyse',
          icon: 'search',
          title: 'Energy assessment of your building',
          summary: 'A careful on-site assessment of your house – as a solid basis for all further decisions.',
          details: [
            'Inspection of the building: roof, external walls, windows, basement and building services',
            'Evaluation of your consumption data and existing documents',
            'Assessment of weak points such as thermal bridges or leaky components',
            'Clear summary of the results',
          ],
        },
        {
          id: 'sanierungsfahrplan',
          icon: 'map',
          title: 'Individual renovation roadmap',
          summary:
            'A long-term plan showing which measures make sense in which order – even if you want to renovate step by step.',
          details: [
            'Coordinated packages of measures instead of isolated individual steps',
            'Rough estimate of costs and savings potential',
            'Consideration of your time frame and financial possibilities',
            'Clear presentation for reference and for passing on to contractors',
          ],
          note: 'Depending on the funding programme in force at the time, a renovation roadmap may be a prerequisite for additional funding options.',
        },
        {
          id: 'heizung',
          icon: 'flame',
          title: 'Heating advice',
          summary:
            'Which heating system suits your building? Together we examine the options – technically and economically.',
          details: [
            'Assessment of the existing heating system',
            'Comparison of possible systems, e.g. heat pump, biomass, district heating or hybrid solutions',
            'Review of what the building needs for a new system',
            'Advice on optimisations such as hydronic balancing',
          ],
        },
        {
          id: 'daemmung',
          icon: 'layers',
          title: 'Insulation & building envelope',
          summary:
            'A well-insulated building envelope permanently reduces heating demand. We clarify where measures may be worthwhile for you.',
          details: [
            'Roof, top floor ceiling, façade and basement ceiling',
            'Windows and external doors',
            'Advice on thermal bridges, airtightness and moisture protection',
            'Coordinating insulation with ventilation and heating',
          ],
        },
        {
          id: 'foerderung',
          icon: 'euro',
          title: 'Support with funding options',
          summary: 'An overview of currently suitable funding programmes and what to consider when applying.',
          details: [
            'Overview of relevant programmes, e.g. from BAFA or KfW',
            'Advice on requirements and the correct order of the application process',
            'Support with technical documentation where required',
          ],
          note: 'Whether and to what extent funding is granted is decided solely by the respective funding body. Funding conditions change regularly – funding can therefore not be guaranteed.',
        },
        {
          id: 'begleitung',
          icon: 'users',
          title: 'Support during implementation',
          summary:
            'If you wish, I will also support you when things get concrete – so that the planned measures are implemented well.',
          details: [
            'Help with assessing and comparing quotes',
            'Technical coordination with the contractors involved',
            'A point of contact for questions during implementation',
          ],
        },
      ],
        pricePlaceholder:
          'If required, add information about your prices for private clients here (e.g. price range or a note on individual quotes). Prices for consumers must be stated as final prices including VAT (German Price Indication Ordinance).',
      },
      business: {
        tabLabel: 'Business clients',
        title: 'Services for business clients',
        intro:
          'For companies, self-employed professionals, associations and organisations: energy efficiency of office, commercial and operational buildings and their technical systems – with a focus on operating costs, economic viability and funding.',
        items: [
          {
            id: 'nichtwohngebaeude',
            icon: 'building',
            title: 'Energy consulting for non-residential buildings',
            summary:
              'Assessment and evaluation of office, commercial and club buildings – as a basis for economically sound investment decisions.',
            details: [
              'Inspection of the building envelope and building services',
              'Evaluation of consumption data and load profiles, where available',
              'Assessment of savings potential and economic viability of measures',
              'Report as a basis for decisions by management or the board',
            ],
          },
          {
            id: 'sanierungskonzept',
            icon: 'map',
            title: 'Renovation concept for business premises',
            summary:
              'A coordinated roadmap showing how buildings can be modernised step by step – aligned with budget and investment planning.',
            details: [
              'Prioritisation of measures by impact, cost and urgency',
              'Consideration of ongoing operations during implementation',
              'Rough estimate of investment costs and savings',
            ],
          },
          {
            id: 'anlagentechnik',
            icon: 'flame',
            title: 'Heating, ventilation & technical systems',
            summary:
              'A lot of energy is used by technical systems: heating, ventilation, air conditioning, lighting and, where applicable, process heat or compressed air.',
            details: [
              'Assessment of existing systems and how they are operated',
              'Review of optimisations, e.g. controls, operating times or waste heat recovery',
              'Comparison of possible systems for heating and hot water',
            ],
          },
          {
            id: 'energieaudit',
            icon: 'clipboard',
            title: 'Energy audit according to DIN EN 16247',
            summary:
              'A systematic analysis of energy use in your company – for companies that are obliged to carry one out or wish to do so voluntarily.',
            details: [
              'Recording and evaluation of energy flows',
              'Identification and assessment of efficiency measures',
              'Documentation in line with the requirements of the standard',
            ],
            note: 'Whether your company is obliged to carry out an energy audit depends, among other things, on its energy consumption and must be checked on a case-by-case basis.',
          },
          {
            id: 'foerderung-unternehmen',
            icon: 'euro',
            title: 'Funding options for companies',
            summary:
              'An overview of programmes for non-residential buildings and energy efficiency in business, and what to consider when applying.',
            details: [
              'Overview of relevant programmes, e.g. from BAFA or KfW',
              'Advice on requirements, order of application and supporting evidence',
              'Support with technical documentation where required',
            ],
            note: 'Whether and to what extent funding is granted is decided solely by the respective funding body. Funding conditions change regularly – funding can therefore not be guaranteed.',
          },
          {
            id: 'umsetzung-unternehmen',
            icon: 'users',
            title: 'Support during implementation',
            summary: 'Support when plans turn into concrete projects.',
            details: [
              'Help with assessing and comparing quotes',
              'Technical coordination with planners and contractors',
              'A point of contact for questions during implementation',
            ],
          },
        ],
        pricePlaceholder:
          'If required, add information about your prices for business clients here. Net prices may be stated for business clients – mark them clearly as “plus VAT”.',
      },
    },
    fundingTitle: 'Important information on funding',
    fundingParagraphsHtml: [
      'Many measures are eligible for public funding programmes in Germany, for example from the Federal Office for Economic Affairs and Export Control (BAFA) or the KfW development bank. However, conditions, funding rates and programmes change regularly. Often an application must be submitted <strong>before</strong> any contracts are awarded.',
      'I will inform you about the current situation and support you with the technical requirements. The decision on funding is made solely by the responsible funding body – approval can therefore not be guaranteed.',
    ],
    fundingMore: 'More about funding',
    costsTitle: 'Costs and process',
    costsText:
      'The effort involved in a consultation depends on the type, size and condition of the building and on the scope you require. In the initial conversation we clarify which service makes sense for you, and you receive a transparent quote in advance.',
    pricePlaceholderTitle: 'Pricing information',
    ctaTitle: 'Which service is right for you?',
    ctaText:
      'Briefly describe your project – together we will find out which consultation makes sense for your home.',
  },

  knowledge: {
    eyebrow: 'Good to know',
    title: 'Making informed decisions',
    lead: 'Here you will find easy-to-understand basics about energy efficiency and renovation – as a first orientation before a consultation.',
    tocTitle: 'Contents',
    toc: [
      { id: 'warum', label: 'Why an energy consultation?' },
      { id: 'effizienz', label: 'Understanding energy efficiency' },
      { id: 'sanierung', label: 'Planning a renovation sensibly' },
      { id: 'ablauf', label: 'How a consultation works' },
      { id: 'foerderung', label: 'Funding: what you should know' },
      { id: 'tipps', label: 'Simple everyday tips' },
      { id: 'faq', label: 'Frequently asked questions' },
    ],
    why: {
      title: 'Why an energy consultation?',
      paragraphs: [
        'An energy-efficient renovation is usually a major investment. Carrying out individual measures without an overall view risks that they will not fit together later – for example, a new heating system that turns out to be oversized after the house is insulated.',
        'An energy consultation provides clarity: it shows where your building loses energy, which measures complement each other and in which order they make sense. This allows you to make decisions on a solid basis.',
      ],
    },
    efficiency: {
      title: 'Understanding energy efficiency',
      intro: 'How much energy a house needs depends mainly on three areas:',
      items: [
        {
          icon: 'layers',
          label: 'Building envelope:',
          text: 'Roof, external walls, windows and basement ceiling determine how much heat is lost to the outside. Weak points are often thermal bridges, for example at window connections or balcony slabs.',
        },
        {
          icon: 'flame',
          label: 'Building services:',
          text: 'Heating, hot water and, where applicable, ventilation determine how efficiently the required heat is generated and distributed.',
        },
        {
          icon: 'users',
          label: 'Usage:',
          text: 'Room temperatures, ventilation habits and hot water consumption also have a significant influence.',
        },
      ],
      outroHtml:
        'An important indicator is the energy demand or consumption per square metre of living space per year (kWh/(m²·a)). It is stated, for example, in the <strong>energy performance certificate</strong> (Energieausweis) and allows a rough comparison with other buildings.',
    },
    renovation: {
      title: 'Planning a renovation sensibly',
      intro: 'There is no order that suits every house. However, some principles have proven themselves:',
      items: [
        {
          label: 'Overall plan before individual measures:',
          text: 'Even if you renovate step by step, it pays to know the goal from the start.',
        },
        {
          label: 'Consider envelope and heating together:',
          text: 'If heating demand is reduced first, the heating system can often be sized smaller.',
        },
        {
          label: 'Use opportunities:',
          text: 'If roof repairs or a new coat of paint for the façade are due anyway, insulation can often be added at lower cost.',
        },
        {
          label: 'Mind moisture and ventilation:',
          text: 'A more airtight building needs a well-thought-out ventilation concept to prevent moisture damage and mould.',
        },
      ],
    },
    process: {
      title: 'How a consultation works',
      intro: 'This is how an energy consultation typically works:',
      documentsTitle: 'Which documents are helpful?',
      documents: [
        'Floor plans, sections and elevations of the building (if available)',
        'Energy bills from recent years (gas, oil, electricity, district heating or similar)',
        'Information on the heating system, e.g. the type plate or the chimney sweep’s measurement report',
        'Information on renovations already carried out (year, measure, invoices if available)',
        'An existing energy performance certificate',
      ],
    },
    funding: {
      title: 'Funding: what you should know',
      intro:
        'In Germany, the federal government, the federal states and in some cases municipalities support energy-efficiency measures and energy consultations. The main contacts at federal level are BAFA and KfW. Some points apply to many programmes:',
      facts: [
        'The application often has to be submitted before a contract is awarded.',
        'Many programmes require minimum technical standards and supporting evidence.',
        'Funding conditions and rates change regularly – always check the latest information.',
      ],
      note: 'This information is intended as general guidance and does not replace an individual review. The decision on whether funding is granted lies solely with the respective funding body.',
      linksIntro: 'Up-to-date and binding information is available directly from the funding bodies (mostly in German):',
      links: [
        { href: 'https://www.bafa.de', label: 'Federal Office for Economic Affairs and Export Control (BAFA)' },
        { href: 'https://www.kfw.de', label: 'KfW' },
        {
          href: 'https://www.energie-effizienz-experten.de',
          label: 'Energy Efficiency Expert List for federal funding programmes',
        },
      ],
    },
    tips: {
      title: 'Simple everyday tips',
      intro: 'You can save energy in everyday life even without a renovation:',
      items: [
        {
          title: 'Choose room temperatures consciously',
          text: 'Even one degree less can noticeably reduce heating energy demand. Rooms that are not in use do not need to be heated to living temperature – but they should not cool down completely.',
        },
        {
          title: 'Ventilate correctly',
          text: 'Opening windows wide for a few minutes several times a day is more efficient than leaving them tilted permanently. This removes moisture without cooling down the walls.',
        },
        {
          title: 'Keep radiators clear',
          text: 'Furniture or long curtains in front of radiators hinder heat output. Gurgling radiators should be bled.',
        },
        {
          title: 'Have your heating checked',
          text: 'Hydronic balancing and correctly set heating curves ensure that heat is distributed evenly. Ask your heating contractor about it.',
        },
      ],
    },
    faq: {
      title: 'Frequently asked questions',
      items: [
        {
          question: 'Who is an energy consultation useful for?',
          answer:
            'Above all for owners of existing buildings who want to renovate, plan a new heating system or buy a house. But a consultation can also be helpful if you simply want to know where your house stands in terms of energy.',
        },
        {
          question: 'How long does a consultation take?',
          answer:
            'That depends on the building and the scope you require. The on-site visit usually takes a few hours; the analysis and preparation take additional time. You will receive an estimate of the time frame in the initial conversation.',
        },
        {
          question: 'Do I need to have all documents?',
          answer:
            'No. Existing documents make the work easier, but missing plans or data can often be determined on site. Simply gather what you have.',
        },
        {
          question: 'Do I have to carry out all recommended measures?',
          answer:
            'No. The consultation is a basis for decision-making. You decide which measures to carry out and when. A renovation roadmap is particularly helpful for proceeding step by step.',
        },
        {
          question: 'Do you also advise companies?',
          answer:
            'Yes. For companies, self-employed professionals, associations and organisations, I offer energy consulting for office, commercial and operational buildings. You will find an overview under “Services” in the “Business clients” section.',
        },
        {
          question: 'Am I guaranteed to receive funding?',
          answer:
            'No. Whether funding is granted is decided by the respective funding body according to the conditions applicable at the time of application. Good preparation does, however, increase the chance that the formal requirements are met.',
        },
      ],
      moreBefore: 'Your question is not listed?',
      moreLink: 'Feel free to write to me.',
    },
  },

  contact: {
    eyebrow: 'Contact',
    title: 'Request a consultation',
    lead: 'Briefly describe what you need. I will get back to you to discuss the next steps.',
    formTitle: 'Your message',
    directTitle: 'Direct contact',
    infoTitle: 'Good to know',
    infoBefore: 'Your details will only be used to process your enquiry. Further information can be found in the',
    infoLink: 'privacy policy',
    infoAfter: '.',
  },

  form: {
    requiredHintBefore: 'Required fields are marked with',
    requiredHintSr: '“required”',
    requiredHintAfter: '.',
    summaryTitle: 'Please check your entries:',
    labels: {
      customerType: 'I am enquiring as',
      company: 'Company / organisation',
      name: 'Name',
      email: 'Email',
      phone: 'Phone number',
      message: 'Your enquiry',
      privacy: 'Privacy policy',
    },
    customerTypes: {
      private: 'Private individual',
      business: 'Company, business or organisation',
    },
    companyHelp: 'Name of the company, association or organisation.',
    optional: '(optional)',
    phoneHelp: 'In case you would prefer a call back.',
    messageHelp: 'For example: type of building and year of construction, planned measures or your questions.',
    privacyBefore: 'I have read the',
    privacyLink: 'privacy policy',
    privacyAfter: 'and agree that my details will be used to process my enquiry.',
    submit: 'Send enquiry',
    submitting: 'Sending …',
    errors: {
      customerType: {
        required: 'Please choose whether you are enquiring as a private individual or on behalf of a company.',
      },
      company: {
        required: 'Please enter the name of the company or organisation.',
      },
      name: {
        required: 'Please enter your name.',
        minlength: 'Your name should be at least 2 characters long.',
      },
      email: {
        required: 'Please enter your email address.',
        pattern: 'Please enter a valid email address, e.g. name@example.com.',
      },
      phone: {
        pattern: 'Please enter a valid phone number or leave the field empty.',
      },
      message: {
        required: 'Please briefly describe your enquiry.',
        minlength: 'Please describe your enquiry in a little more detail (at least 10 characters).',
        maxlength: 'Please shorten your message to a maximum of 3000 characters.',
      },
      privacy: {
        required: 'Please confirm that you have read the privacy policy.',
      },
    },
    fallbackError: 'Please check this entry.',
    sent: {
      title: 'Thank you for your message!',
      text: 'Your enquiry has been sent. I will get back to you as soon as possible.',
    },
    notConfigured: {
      title: 'Your entries are complete – however, the message has not been sent.',
      text: 'Sending via this form has not been set up yet. For now, please get in touch directly by email or phone. Your entries remain in the form.',
      mailButton: 'Open message in your email program',
    },
    error: {
      title: 'Unfortunately, the message could not be sent.',
      text: 'Please try again later or get in touch directly by email or phone. Your entries remain in the form.',
    },
    mailSubject: 'Energy consultation enquiry',
    mailPhone: 'Phone',
    mailCustomerType: 'Enquiry as',
    mailCompany: 'Company',
    devNoteHtml:
      '<strong>Development note:</strong> No form delivery has been set up. Enter the URL of your backend or form service as <code>CONTACT_ENDPOINT</code> in <code>src/app/config/contact.config.ts</code>. See <code>README.md</code> for details. This note is only shown in development mode.',
  },

  notFound: {
    title: 'Page not found',
    text: 'Unfortunately, the page you are looking for does not exist or has been moved.',
    home: 'Go to home page',
    contact: 'Get in touch',
  },
};
