import { Link as RouterLink } from 'react-router-dom';
import { Link, Divider } from '@heroui/react';
import { Icon } from '@iconify/react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: 'GitHub', icon: 'logos:github-icon', url: 'https://github.com/YeasineDewan' },
    { name: 'LinkedIn', icon: 'logos:linkedin-icon', url: 'https://www.linkedin.com/in/md-yeasine-dewan-shawon-07a383210/' },
    { name: 'Facebook', icon: 'logos:facebook', url: 'https://www.facebook.com/yeasinedewan.shawon.5' },
    { name: 'Email', icon: 'lucide:mail', url: 'mailto:contact@yeasinedewan.com' },
    { name: 'WhatsApp', icon: 'logos:whatsapp-icon', url: 'https://wa.me/8801793244543' }
  ];

  const navLinks = [
    { name: 'Home', path: '/', icon: 'lucide:house' },
    { name: 'About', path: '/about', icon: 'lucide:user-round' },
    { name: 'Projects', path: '/projects', icon: 'lucide:folder-kanban' },
    { name: 'Blog', path: '/blog', icon: 'lucide:notebook-text' },
    { name: 'Contact', path: '/contact', icon: 'lucide:send' }
  ];

  const serviceLinks = [
    { name: 'Web Development', path: '/services#web-development', icon: 'lucide:code-2' },
    { name: 'Security Review', path: '/services#security-review', icon: 'lucide:shield-check' },
    { name: 'Penetration Testing', path: '/services#penetration-testing', icon: 'lucide:scan-search' },
    { name: 'Server Setup', path: '/services#server-setup', icon: 'lucide:server' },
    { name: 'SEO Optimization', path: '/services#seo-optimization', icon: 'lucide:chart-no-axes-combined' }
  ];

  return (
    <footer className="mt-16 border-t border-divider bg-content2/70">
      <div className="container-custom py-14 md:py-16">
        <div className="grid grid-cols-1 gap-x-10 gap-y-12 text-center sm:grid-cols-2 sm:text-left lg:grid-cols-[1.35fr_0.8fr_1fr_1.2fr]">
          <div className="flex flex-col items-center gap-4 sm:items-start">
            <div className="flex items-center gap-3">
              <img src="/img/favicon/icon.svg" alt="" className="h-10 w-10 object-contain" />
              <span className="text-lg font-semibold">Yeasine Dewan</span>
            </div>
            <p className="max-w-sm text-sm leading-6 text-foreground-500">
              Full-stack developer and security-minded engineer building and hardening web applications.
            </p>
            <div className="mt-1 flex flex-wrap justify-center gap-2.5 sm:justify-start">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.url}
                  isExternal
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-divider bg-content1 text-foreground-500 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary hover:shadow-sm focus-visible:outline-2 focus-visible:outline-primary"
                  aria-label={link.name}
                >
                  <Icon icon={link.icon} className="text-lg" />
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center sm:items-start">
            <h3 className="mb-5 text-sm font-semibold">Navigation</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    as={RouterLink}
                    to={link.path}
                    color="foreground"
                    className="group flex items-center justify-center gap-3 text-sm text-foreground-500 transition-colors hover:text-primary sm:justify-start"
                  >
                    <Icon icon={link.icon} className="shrink-0 text-base text-foreground-400 transition-colors group-hover:text-primary" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center sm:items-start">
            <h3 className="mb-5 text-sm font-semibold">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    as={RouterLink}
                    to={link.path}
                    color="foreground"
                    className="group flex items-center justify-center gap-3 text-sm text-foreground-500 transition-colors hover:text-primary sm:justify-start"
                  >
                    <Icon icon={link.icon} className="shrink-0 text-base text-foreground-400 transition-colors group-hover:text-primary" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center sm:items-start">
            <h3 className="mb-5 text-sm font-semibold">Get in touch</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start justify-center gap-3 text-center sm:justify-start sm:text-left">
                <Icon icon="lucide:map-pin" className="mt-0.5 shrink-0 text-primary" />
                <span className="leading-6 text-foreground-500">1188/2/B, Bank Colony, Barekmolla Mor, 60 Feet, Mirpur, Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center justify-center gap-3 sm:justify-start">
                <Icon icon="lucide:mail" className="shrink-0 text-primary" />
                <Link href="mailto:contact@yeasinedewan.com" className="text-foreground-500 transition-colors hover:text-primary">
                  contact@yeasinedewan.com
                </Link>
              </li>
              <li className="flex items-center justify-center gap-3 sm:justify-start">
                <Icon icon="lucide:phone" className="shrink-0 text-primary" />
                <Link href="https://wa.me/8801793244543" isExternal className="text-foreground-500 transition-colors hover:text-primary">
                  +880 0179-3244543
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Divider className="my-10" />

        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <p className="text-sm text-foreground-500">
            © {currentYear} MD. Yeasine Dewan Shawon. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:justify-end">
            <Link as={RouterLink} to="/privacy-policy" color="foreground" className="text-sm text-foreground-500">
              Privacy Policy
            </Link>
            <Link as={RouterLink} to="/terms" color="foreground" className="text-sm text-foreground-500">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};