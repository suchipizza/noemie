export type Outlet = 'NativeFold' | 'PawSociety' | 'Paperbase';

export interface Article {
  title: string;
  url: string;
  outlet: Outlet;
  date: string; // ISO date, e.g. "2026-07-29"
  summary?: string;
  lang?: 'en' | 'de' | 'fr';
}

export const outlets: Outlet[] = ['NativeFold', 'PawSociety', 'Paperbase'];

// Every entry below is a DRAFT, confirm with owner (collected from the three blog indexes on 2026-10-10).
// PawSociety is restricted to mountain / hiking articles.
export const articles: Article[] = [
  // NativeFold
  {
    title: 'Why AI coding agents keep writing deprecated code (and what actually reduces it)',
    url: 'https://nativefold.com/blog/why-ai-agents-write-deprecated-code/',
    outlet: 'NativeFold',
    date: '2026-07-29',
  },
  {
    title: 'Agentic evaluation should be experimental science, not leaderboard competition',
    url: 'https://nativefold.com/blog/agent-evaluation-experimental-science/',
    outlet: 'NativeFold',
    date: '2026-07-25',
  },
  {
    title: 'Accuracy is purchasable. Reliability is not.',
    url: 'https://nativefold.com/blog/agent-accuracy-vs-reliability/',
    outlet: 'NativeFold',
    date: '2026-07-17',
  },
  {
    title: 'Why your analytics cannot see agent tool selection',
    url: 'https://nativefold.com/blog/agents-your-analytics-cannot-see/',
    outlet: 'NativeFold',
    date: '2026-07-15',
  },
  {
    title: 'Agent evaluation variance: why a single agent run can be misleading',
    url: 'https://nativefold.com/blog/agent-evaluation-variance/',
    outlet: 'NativeFold',
    date: '2026-07-14',
  },
  {
    title: 'GEO for developer tools in 2026: mentions are not market share',
    url: 'https://nativefold.com/blog/geo-for-developer-tools/',
    outlet: 'NativeFold',
    date: '2026-07-14',
  },
  // Paperbase
  {
    title: 'Serverless PDF generation without Chromium: which approach actually deploys',
    url: 'https://paperbase.dev/blog/serverless-pdf-without-chromium',
    outlet: 'Paperbase',
    date: '2026-07-02',
  },
  {
    title: 'Why not react-pdf? When @react-pdf/renderer fits, and when to reach for something else',
    url: 'https://paperbase.dev/blog/why-not-react-pdf',
    outlet: 'Paperbase',
    date: '2026-07-01',
  },
  {
    title: 'Why use Puppeteer for PDF generation? Benefits, trade-offs, and alternatives',
    url: 'https://paperbase.dev/blog/why-use-puppeteer-for-pdf-generation',
    outlet: 'Paperbase',
    date: '2026-07-01',
  },
  // PawSociety (mountain / hiking only)
  {
    title: 'Uetliberg mit Hund: Tagesausflug-Guide',
    url: 'https://pawsociety.ch/de/blog/uetliberg-mit-hund-tagesausflug',
    outlet: 'PawSociety',
    date: '2026-08-12',
    lang: 'de',
  },
  {
    title: 'Hardergrat mit Hund: Eine Gratwanderung und eine Umkehr',
    url: 'https://pawsociety.ch/de/blog/hardergrat-mit-hund',
    outlet: 'PawSociety',
    date: '2026-06-24',
    lang: 'de',
  },
  {
    title: 'Camping am Klimsenhorn mit Hund: Biwak über dem See',
    url: 'https://pawsociety.ch/de/blog/camping-klimsenhorn-mit-hund',
    outlet: 'PawSociety',
    date: '2026-05-28',
    lang: 'de',
  },
  {
    title: 'Stockflue mit Hund: T5-Scrambling über dem Vierwaldstättersee',
    url: 'https://pawsociety.ch/de/blog/stockflue-mit-hund-t5-wanderung',
    outlet: 'PawSociety',
    date: '2026-05-18',
    lang: 'de',
  },
  {
    title: 'Wandern mit Hund in Zürich: Die schönsten Frühlingsrouten',
    url: 'https://pawsociety.ch/de/blog/wandern-mit-hund-zuerich',
    outlet: 'PawSociety',
    date: '2026-04-29',
    lang: 'de',
  },
];
