import React from 'react';
import { Link } from '@heroui/react';
import { Icon } from '@iconify/react';

export const SubHeader = () => {
  const contactNumber = '+880 0179-3244543';
  const contactEmail = 'contact@yeasinedewanshawon.com';

  const socialLinks = [
    { name: 'Facebook', icon: 'logos:facebook', url: 'https://www.facebook.com/yeasinedewan.shawon.5' },
    { name: 'LinkedIn', icon: 'logos:linkedin-icon', url: 'https://www.linkedin.com/in/md-yeasine-dewan-shawon-07a383210/' },
    { name: 'GitHub', icon: 'logos:github-icon', url: 'https://github.com/YeasineDewan' },
    { name: 'WhatsApp', icon: 'simple-icons:whatsapp', url: 'https://wa.me/8801793244543' },
    // TODO: replace '#' with your real Discord profile/invite URL
    { name: 'Discord', icon: 'simple-icons:discord', url: '#' }
  ];

  return (
    <div className="w-full border-b border-divider bg-transparent">
      <div className="min-h-11 flex items-center justify-between gap-4 px-4 sm:px-6">
        {/* Left: Contact (phone + email) */}
        <div className="flex min-w-0 items-center gap-3 sm:gap-4">
          <a
            href="https://wa.me/8801793244543"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-foreground-600 hover:text-primary transition-colors"
            aria-label="Contact via WhatsApp"
          >
            <Icon icon="lucide:phone" className="shrink-0 text-primary text-sm" />
            <span className="hidden sm:inline">{contactNumber}</span>
          </a>
          <span className="hidden lg:block w-px h-4 bg-divider" />
          <a
            href={`mailto:${contactEmail}`}
            className="hidden lg:flex items-center gap-2 text-sm text-foreground-600 hover:text-primary transition-colors"
            aria-label="Email me"
          >
            <Icon icon="lucide:mail" className="shrink-0 text-primary text-sm" />
            <span>{contactEmail}</span>
          </a>
        </div>

        {/* Right: Social Icons */}
        <div className="flex shrink-0 items-center gap-3">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.url}
              isExternal
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-divider bg-content1 text-foreground-500 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary hover:shadow-sm focus-visible:outline-2 focus-visible:outline-primary"
              aria-label={link.name}
            >
              <Icon icon={link.icon} className="text-[17px]" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
