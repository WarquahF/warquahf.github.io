export type NavItem = { label: string; href: string; index: string };

export const sections: NavItem[] = [
  { label: 'Home', href: '#home', index: '00' },
  { label: 'Work', href: '#work', index: '01' },
  { label: 'Notes', href: '/notes', index: '02' },
  { label: 'Activity', href: '#activity', index: '03' },
  { label: 'Contact', href: '#contact', index: '04' },
];

export const social = {
  github: 'https://github.com/WarquahF',
  email: 'warquah.dev@proton.me',
  x: 'https://x.com/warquah35',
  // No LinkedIn URL exists in the codebase — omitted deliberately rather
  // than inventing a personal link. Add `linkedin:` here if one exists and
  // the hero will pick it up automatically.
} as { github: string; email: string; x: string; linkedin?: string };
