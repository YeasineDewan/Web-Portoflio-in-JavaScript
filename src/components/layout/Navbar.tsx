import React from 'react';
import ReactDOM from 'react-dom';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
  Navbar as HeroNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from '@heroui/react';
import { Icon } from '@iconify/react';
import { ThemeSwitcher } from '../utils/ThemeSwitcher';
import { LanguageSwitcher } from '../utils/LanguageSwitcher';

const navItems = [
  { name: 'Home',       path: '/',           icon: 'lucide:house' },
  { name: 'About',      path: '/about',      icon: 'lucide:user-round' },
  { name: 'Skills',     path: '/skills',     icon: 'lucide:cpu' },
  { name: 'Experience', path: '/experience', icon: 'lucide:briefcase' },
  { name: 'Projects',   path: '/projects',   icon: 'lucide:folder-kanban' },
  { name: 'Blog',       path: '/blog',       icon: 'lucide:notebook-text' },
  { name: 'Services',   path: '/services',   icon: 'lucide:layers' },
  { name: 'Contact',    path: '/contact',    icon: 'lucide:send' },
];

export const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = React.useState(false);

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  // Close on route change
  React.useEffect(() => { setOpen(false); }, [location.pathname]);

  // Lock body scroll when drawer is open
  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const drawer = ReactDOM.createPortal(
    <>
      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 z-[999] bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Drawer panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`fixed top-0 right-0 z-[1000] h-full w-72 bg-background border-l border-divider shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer header */}
        <div className="flex h-14 items-center justify-between px-4 border-b border-divider shrink-0">
          <RouterLink
            to="/"
            className="flex items-center gap-2"
            onClick={() => setOpen(false)}
          >
            <img src="/img/favicon/icon.svg" alt="" className="h-9 w-9 shrink-0 object-contain" />
            <span className="font-semibold text-sm">Yeasine Dewan Shawon</span>
          </RouterLink>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="flex h-8 w-8 items-center justify-center rounded-lg text-foreground-500 hover:bg-content2 transition-colors"
          >
            <Icon icon="lucide:x" className="text-lg" />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-0.5">
          {navItems.map((item) => (
            <RouterLink
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive(item.path)
                  ? 'bg-primary/10 text-primary'
                  : 'text-foreground-600 hover:bg-content2 hover:text-foreground'
              }`}
            >
              <Icon icon={item.icon} className="text-base shrink-0 opacity-70" />
              {item.name}
            </RouterLink>
          ))}

          {/* Settings */}
          <div className="pt-4 mt-2 border-t border-divider space-y-1">
            <div className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-content2 transition-colors">
              <span className="text-sm text-foreground-600 font-medium">Theme</span>
              <ThemeSwitcher />
            </div>
            <div className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-content2 transition-colors">
              <span className="text-sm text-foreground-600 font-medium">Language</span>
              <LanguageSwitcher />
            </div>
          </div>
        </nav>

        {/* Drawer footer */}
        <div className="px-4 py-4 border-t border-divider space-y-2 shrink-0">
          <Button
            as="a"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            variant="bordered"
            fullWidth
            size="sm"
            startContent={<Icon icon="lucide:download" className="text-sm" />}
          >
            Download Resume
          </Button>
          <Button
            as={RouterLink}
            to="/contact"
            color="primary"
            fullWidth
            size="sm"
            startContent={<Icon icon="lucide:message-square" className="text-sm" />}
            onClick={() => setOpen(false)}
          >
            Hire Me
          </Button>
        </div>
      </div>
    </>,
    document.body
  );

  return (
    <>
      {/* ── Desktop Navbar (lg+) ─────────────────────────────────── */}
      <HeroNavbar
        maxWidth="full"
        className="hidden lg:flex shadow-none h-14 bg-white/90 dark:bg-transparent"
      >
        <NavbarContent>
          <NavbarBrand>
            <RouterLink to="/" className="flex items-center gap-2.5">
              <img src="/img/favicon/icon.svg" alt="" className="h-10 w-10 shrink-0 object-contain" />
              <span className="font-semibold text-sm tracking-tight">Yeasine Dewan Shawon</span>
            </RouterLink>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="gap-0" justify="center">
          {navItems.map((item) => (
            <NavbarItem key={item.path}>
              <Link
                as={RouterLink}
                to={item.path}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-primary bg-primary/8'
                    : 'text-foreground-500 hover:text-foreground hover:bg-black/[0.05] dark:text-white/75 dark:hover:text-white dark:hover:bg-white/10'
                }`}
              >
                {item.name}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        <NavbarContent justify="end" className="gap-2">
          <NavbarItem><ThemeSwitcher /></NavbarItem>
          <NavbarItem><LanguageSwitcher /></NavbarItem>
          <NavbarItem>
            <Button
              as="a"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              variant="bordered"
              size="sm"
              startContent={<Icon icon="lucide:download" className="text-sm" />}
            >
              Resume
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button
              as={RouterLink}
              to="/contact"
              color="primary"
              size="sm"
              startContent={<Icon icon="lucide:message-square" className="text-sm" />}
            >
              Hire Me
            </Button>
          </NavbarItem>
        </NavbarContent>
      </HeroNavbar>

      {/* ── Mobile Navbar (< lg) ─────────────────────────────────── */}
      <div className="lg:hidden bg-white/90 dark:bg-transparent">
        <div className="flex h-14 items-center justify-between px-4">
          <RouterLink to="/" className="flex items-center gap-2">
            <img src="/img/favicon/icon.svg" alt="" className="h-10 w-10 shrink-0 object-contain" />
            <span className="font-semibold text-sm tracking-tight">Yeasine Dewan Shawon</span>
          </RouterLink>

          <button
            onClick={() => setOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={open}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-foreground-500 hover:bg-black/[0.06] dark:text-white/70 dark:hover:bg-white/10 transition-colors"
          >
            <Icon icon="lucide:menu" className="text-xl" />
          </button>
        </div>
      </div>

      {/* Drawer rendered via portal at document.body */}
      {drawer}
    </>
  );
};
