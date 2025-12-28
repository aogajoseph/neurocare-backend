const config = {
  app: {
    name: 'NeuroCare',
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

  features: {
    community: true,
    assistant: true,
    donations: false,
  },
};

export default config;
