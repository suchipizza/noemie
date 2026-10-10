export interface Project {
  name: string;
  url: string;
  description: string; // one line, ≤ 120 characters
  tag?: 'Company' | 'Open source' | 'Tool';
}

export const projects: Project[] = [
  {
    name: 'NativeFold',
    url: 'https://nativefold.com',
    description:
      'Helping developer tools adapt to agentic environments, so AI coding agents can discover, select and use them.',
    tag: 'Company',
  },
  {
    name: 'Pigtail',
    url: 'https://suchipizza.github.io/pigtail/',
    description: 'Evidence-based forensics of how open-source projects on GitHub grow.',
    tag: 'Open source',
  },
  {
    name: 'PawSociety',
    url: 'https://pawsociety.ch',
    // DRAFT, confirm with owner (from the site's meta description)
    description: 'Find and compare dog schools in the canton of Zürich, plus guides for dog owners.',
  },
  {
    name: 'Paperbase',
    url: 'https://paperbase.dev',
    // DRAFT, confirm with owner (from the site's meta description)
    description: 'A hosted PDF API: one endpoint that turns Markdown or HTML into a branded, production-ready PDF.',
  },
  {
    name: 'Topoli',
    url: 'https://github.com/suchipizza/Topoli',
    // DRAFT, confirm with owner (from the repo README)
    description: 'Open-source construction intelligence for AI agents: what you can build at a Swiss address, with evidence.',
    tag: 'Open source',
  },
  {
    name: 'BergBot',
    url: 'https://suchipizza.github.io/BergBot/en/',
    description: 'Finds and audits Swiss hikes against live conditions: lifts, huts, passes and fire bans.',
    tag: 'Tool',
  },
  {
    name: 'Cut the Crap',
    url: 'https://github.com/suchipizza/cut-the-crap',
    // DRAFT, confirm with owner (from the repo README)
    description: 'A browser buzzer that calls out corporate jargon while you talk. Say it straight or get buzzed.',
    tag: 'Open source',
  },
];
