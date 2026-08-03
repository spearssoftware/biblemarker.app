export interface DocsNavItem {
  label: string;
  slug: string;
}

export interface DocsNavGroup {
  label: string;
  items: DocsNavItem[];
}

export const docsNav: DocsNavGroup[] = [
  {
    label: 'Start Here',
    items: [{ label: 'Getting Started', slug: 'getting-started' }],
  },
  {
    label: 'How-To Guides',
    items: [
      { label: 'Accounts & Sync', slug: 'accounts-sync' },
      { label: 'Create a Study', slug: 'create-a-study' },
      { label: 'Marking Key Words', slug: 'marking-keywords' },
      { label: 'People, Places & Time', slug: 'people-places-time' },
      { label: 'Lists & Flow', slug: 'lists-and-flow' },
      { label: 'The Analyze Tab', slug: 'analyze' },
      { label: 'Study Tools', slug: 'study-tools' },
      { label: 'Export & Share (PDF)', slug: 'export-and-share' },
      { label: 'Settings & Backups', slug: 'settings-and-backups' },
    ],
  },
  {
    label: 'Reference',
    items: [{ label: 'Keyboard Shortcuts', slug: 'keyboard-shortcuts' }],
  },
];
