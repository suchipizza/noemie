import type { ImageMetadata } from 'astro';

export interface Book {
  title: string;
  author: string;
  /** Local cover image under src/assets/books/ (preferred). Without one, a cover is generated from title + author. */
  cover?: ImageMetadata;
  /** Fallback: Open Library cover by ISBN, hot-linked with loading="lazy". */
  isbn?: string;
  /** Where to find the book. */
  url?: string;
  /** One short line on why Noémie likes it. */
  note?: string;
  /** Hex colour for the spine and generated cover. */
  spineColor?: string;
}

// TODO(owner): add notes, links and (optionally) real covers.
export const books: Book[] = [
  { title: 'Cent ans de solitude', author: 'Gabriel García Márquez', spineColor: '#A67C1A' },
  { title: 'Belle du Seigneur', author: 'Albert Cohen', spineColor: '#8E2C48' },
  { title: "Elle s'appelait Tomoji", author: 'Jirō Taniguchi', spineColor: '#3E7C6B' },
  { title: 'Thinking, Fast and Slow', author: 'Daniel Kahneman', spineColor: '#2F4B8A' },
  { title: 'The Picture of Dorian Gray', author: 'Oscar Wilde', spineColor: '#5B3A8C' },
  { title: 'Le Roi des Aulnes', author: 'Michel Tournier', spineColor: '#7A4A2A' },
];
