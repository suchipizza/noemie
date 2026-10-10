export interface SocialLink {
  name: 'LinkedIn' | 'GitHub';
  url: string;
  label: string;
}

export const site = {
  name: 'Noémie Rakotomalala',
  shortName: 'Noémie',
  title: 'Noémie Rakotomalala — AI-native software builder',
  description:
    'Noémie Rakotomalala is an AI-native software builder and senior R&D engineer in Zürich, building agentic benchmarks, experimentation frameworks and useful apps.',
  jobTitle: 'AI-native software builder',
  city: 'Zürich',
  country: 'CH',
  email: 'noemie.rakotomalala@nativefold.com',
  languages: ['French', 'English', 'German', 'Malagasy'],
  social: [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/noemie-rkt/', label: 'Noémie on LinkedIn' },
    { name: 'GitHub', url: 'https://github.com/suchipizza', label: 'Noémie on GitHub' },
  ] satisfies SocialLink[],
  links: {
    noushka: 'https://www.instagram.com/noushkathehusky/',
    phd: 'https://hal.science/tel-01153585/',
  },
  // Hook for gary.js (see PRD §9). When enabled, Base.astro loads `src` with `defer`.
  garyJs: { enabled: false, src: '' },
};
