// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://biblemarker.app',
  integrations: [
    starlight({
      title: 'BibleMarker',
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/spearssoftware/BibleMarker' },
      ],
      sidebar: [
        { label: 'Getting Started', slug: 'getting-started' },
        {
          label: 'How-To Guides',
          items: [
            { label: 'Reading & Navigation', slug: 'guides/reading' },
            { label: 'Marking Text', slug: 'guides/marking' },
            { label: 'Key Words', slug: 'guides/keywords' },
            { label: "Strong's Numbers", slug: 'guides/strongs' },
            { label: 'Notes & Observations', slug: 'guides/notes' },
            { label: 'Search', slug: 'guides/search' },
            { label: 'Backup & Export', slug: 'guides/backup' },
            { label: 'Translations', slug: 'guides/translations' },
          ],
        },
        { label: 'Keyboard Shortcuts', slug: 'keyboard-shortcuts' },
      ],
      customCss: ['./src/styles/global.css'],
    }),
    react(),
  ],
});
