export interface NavLink {
  href: string;
  label: string;
}

export const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/getting-started/', label: 'Docs' },
  { href: '/privacy/', label: 'Privacy' },
  { href: '/support/', label: 'Support' },
];

const docsPrefixes = ['/getting-started', '/guides/', '/keyboard-shortcuts'];

export function isActive(link: NavLink, currentPath: string): boolean {
  if (link.label === 'Docs') {
    return docsPrefixes.some(prefix => currentPath.startsWith(prefix));
  }
  if (link.href === '/') {
    return currentPath === '/';
  }
  return currentPath.startsWith(link.href);
}
