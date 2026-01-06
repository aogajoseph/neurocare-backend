const config = {
  app: {
    name: 'Neuro Care',
    environment: 'production',
  },

  i18n: {
    default: 'en',
    supported: [
      { code: 'en', label: 'English (US)' },
      { code: 'en-GB', label: 'English (UK)' },
      { code: 'sw', label: 'Swahili' },
      { code: 'fr', label: 'French' },
    ],
  },

  share: {
    title: 'NeuroCare App',
    message: 'Explore neurological care, community support and trusted guidance.',
    url: 'https://ncf-backend.onrender.com/app.apk',
  },

  drawer: {
    sections: [
      {
        id: 'learn',
        title: 'Learn',
        items: [
          { id: 'neurology', label: 'Understanding Neurology', icon: 'brain-outline', target: 'learn/neurology' },
          { id: 'caregiver', label: 'Caregiver Guide', icon: 'people-outline', target: 'learn/caregiver' },
          { id: 'living', label: 'Living Well', icon: 'heart-outline', target: 'learn/living' },
          { id: 'myths', label: 'Myths and Facts', icon: 'help-buoy-outline', target: 'learn/myths' }
        ]
      },
      {
        id: 'support',
        title: 'Support and Safety',
        items: [
          { id: 'help', label: 'Help and Support', icon: 'help-circle-outline', target: 'support/help' },
          { id: 'emergency', label: 'Emergency Resources', icon: 'alert-circle-outline', target: 'support/emergency' },
          { id: 'report', label: 'Report a Concern', icon: 'flag-outline', target: 'support/report' }
        ]
      },
      {
        id: 'about',
        title: 'About the App',
        items: [
          { id: 'platform', label: 'The Neuro Care Platform', icon: 'information-circle-outline', target: 'about/platform' },
          { id: 'how', label: 'How This App Works', icon: 'walk-outline', target: 'about/how' },
          { id: 'data', label: 'Data Sources', icon: 'server-outline', target: 'about/data' },
          { id: 'version', label: 'Version and Updates', icon: 'git-branch-outline', target: 'about/version' }
        ]
      },
      {
        id: 'more',
        title: 'More',
        items: [
          { id: 'terms', label: 'Terms and Conditions', icon: 'document-text-outline', target: 'legal/terms' },
          { id: 'privacy', label: 'Privacy Policy', icon: 'lock-closed-outline', target: 'legal/privacy' },
          { id: 'child', label: 'Child Protection', icon: 'shield-checkmark-outline', target: 'legal/child-protection' }
        ]
      }
    ]
  },

  home: {
    hero: {
      welcome: {
        en: 'Welcome to Neuro Care',
        sw: 'Karibu Neuro Care',
      },
      intro: {
        en: 'Trusted information, guidance, and support for neurological health — for patients, caregivers, and communities.',
        sw: 'Taarifa, mwongozo na msaada wa afya ya mfumo wa neva — kwa wagonjwa, walezi na jamii.',
      },
    },

    whatYouCanDo: [
      {
        id: 'conditions',
        title: { en: 'Understand Conditions', sw: 'Fahamu Magonjwa' },
        description: {
          en: 'Learn about neurological conditions, symptoms, and treatments.',
          sw: 'Jifunze kuhusu magonjwa ya neva, dalili na matibabu.',
        },
        route: '/(drawer)/(content)/learn/neurology',
      },
      {
        id: 'living',
        title: { en: 'Living Well', sw: 'Kuishi Vizuri' },
        description: {
          en: 'Practical guidance for daily life, self-care, and long-term wellbeing.',
          sw: 'Mwongozo wa maisha ya kila siku na ustawi wa muda mrefu.',
        },
        route: '/(drawer)/(content)/learn/living',
      },
      {
        id: 'support',
        title: { en: 'Support & Safety', sw: 'Msaada na Usalama' },
        description: {
          en: 'Access help, emergency resources, and trusted support.',
          sw: 'Pata msaada, rasilimali za dharura na msaada wa kuaminika.',
        },
        route: '/(drawer)/(content)/support/help',
      },
    ],

    popularConditions: [
      { slug: 'stroke', label: 'Stroke' },
      { slug: 'epilepsy', label: 'Epilepsy' },
      { slug: 'parkinsons', label: 'Parkinson’s' },
      { slug: 'migraine', label: 'Migraine' },
      { slug: 'dementia', label: 'Dementia' },
    ],

    learnWithConfidence: [
      { id: 'myths', title: { en: 'Myths vs Facts', sw: 'Hadithi dhidi ya Ukweli' }, route: '/(drawer)/(content)/learn/myths' },
      { id: 'caregiver', title: { en: 'Caregiver Guidance', sw: 'Mwongozo wa Walezi' }, route: '/(drawer)/(content)/learn/caregiver' },
      { id: 'child-protection', title: { en: 'Child Protection', sw: 'Ulinzi wa Mtoto' }, route: '/(drawer)/(content)/legal/child-protection' },
    ],

    helpNow: [
      { id: 'emergency', title: { en: 'Emergency Resources', sw: 'Rasilimali za Dharura' }, route: '/(drawer)/(content)/support/emergency' },
      { id: 'report', title: { en: 'Report a Concern', sw: 'Ripoti Tatizo' }, route: '/(drawer)/(content)/support/report' },
    ],

    reassurance: {
      en: 'You are not alone. Whether you are living with a neurological condition, caring for someone, or simply seeking knowledge — Neuro Care is here to guide, support, and empower you.',
      sw: 'Hauko peke yako...',
    },
  },

  features: {
    community: true,
    assistant: true,
    donations: false,
  },
};

export default config;
