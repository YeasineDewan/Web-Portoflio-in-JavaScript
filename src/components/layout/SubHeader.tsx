import { Link } from '@heroui/react';
import { Icon } from '@iconify/react';

const socialLinks = [
  { name: 'Facebook', icon: 'logos:facebook',       url: 'https://www.facebook.com/yeasinedewan.shawon.5' },
  { name: 'LinkedIn', icon: 'logos:linkedin-icon',   url: 'https://www.linkedin.com/in/md-yeasine-dewan-shawon-07a383210/' },
  { name: 'GitHub',   icon: 'logos:github-icon',     url: 'https://github.com/YeasineDewan' },
  { name: 'WhatsApp', icon: 'simple-icons:whatsapp', url: 'https://wa.me/8801793244543' },
];

export const SubHeader = () => (
  <div className="w-full border-b border-[#cac3c5] bg-[#d5cfd1] dark:border-white/10 dark:bg-white/5">
    <div className="flex h-8 items-center justify-between px-4 sm:px-5">

      {/* Left — phone & mail icons always, text on md+ */}
      <div className="flex items-center gap-3">
        <a
          href="https://wa.me/8801793244543"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Call via WhatsApp"
          className="group flex items-center gap-1.5 text-[#414141] hover:text-primary transition-colors"
        >
          <Icon icon="lucide:phone" className="text-primary shrink-0" width={12} height={12} />
          <span className="hidden md:inline text-[11px] font-medium text-[#414141]">+880 0179-3244543</span>
        </a>

        <span className="hidden md:block w-px h-3 bg-divider" />

        <a
          href="mailto:contact@yeasinedewan.com"
          aria-label="Send email"
          className="group flex items-center gap-1.5 text-[#414141] hover:text-primary transition-colors"
        >
          <Icon icon="lucide:mail" className="text-primary shrink-0" width={12} height={12} />
          <span className="hidden md:inline text-[11px] font-medium text-[#414141]">contact@yeasinedewan.com</span>
        </a>
      </div>

      {/* Right — social icons */}
      <div className="flex items-center gap-0.5">
        {socialLinks.map((s) => (
          <Link
            key={s.name}
            href={s.url}
            isExternal
            aria-label={s.name}
            className="inline-flex h-6 w-6 items-center justify-center rounded-md text-[#707070] hover:text-primary hover:bg-primary/10 transition-colors dark:text-white/40"
          >
            <Icon icon={s.icon} width={13} height={13} />
          </Link>
        ))}
      </div>

    </div>
  </div>
);
