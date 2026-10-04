import React from 'react';
import { Icon } from '@iconify/react';

type ContentArtworkProps = {
  src: string;
  title: string;
  keywords?: string;
  className?: string;
};

const artworkStyles = [
  {
    terms: ['school', 'learn', 'course', 'education'],
    label: 'Learning',
    icon: 'lucide:graduation-cap',
    surface: 'bg-secondary-100 dark:bg-secondary-900/30',
    foreground: 'text-secondary-700 dark:text-secondary-300'
  },
  {
    terms: ['ecommerce', 'e-commerce', 'shop', 'store', 'fruit'],
    label: 'Commerce',
    icon: 'lucide:shopping-bag',
    surface: 'bg-warning-100 dark:bg-warning-900/30',
    foreground: 'text-warning-700 dark:text-warning-300'
  },
  {
    terms: ['security', 'auth', 'authentication', 'owasp', 'zero trust', 'api'],
    label: 'Security',
    icon: 'lucide:shield-check',
    surface: 'bg-success-100 dark:bg-success-900/30',
    foreground: 'text-success-700 dark:text-success-300'
  },
  {
    terms: ['hr', 'crm', 'dashboard', 'admin'],
    label: 'Management',
    icon: 'lucide:layout-dashboard',
    surface: 'bg-primary-100 dark:bg-primary-900/30',
    foreground: 'text-primary-700 dark:text-primary-300'
  }
];

const defaultArtwork = {
  label: 'Web experience',
  icon: 'lucide:panels-top-left',
  surface: 'bg-primary-100 dark:bg-primary-900/30',
  foreground: 'text-primary-700 dark:text-primary-300'
};

export const ContentArtwork = ({ src, title, keywords = '', className = '' }: ContentArtworkProps) => {
  const [imageFailed, setImageFailed] = React.useState(false);
  const searchText = `${title} ${keywords}`.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
  const searchWords = new Set(searchText.split(' '));
  const artwork = artworkStyles.find((style) =>
    style.terms.some((term) => {
      const normalizedTerm = term.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
      return normalizedTerm.includes(' ')
        ? ` ${searchText} `.includes(` ${normalizedTerm} `)
        : searchWords.has(normalizedTerm);
    })
  ) ?? defaultArtwork;

  if (src.includes('img.heroui.chat') || imageFailed) {
    return (
      <div
        role="img"
        aria-label={`Illustrated cover for ${title}`}
        className={`relative flex aspect-video w-full flex-col justify-between overflow-hidden bg-content2 p-5 sm:p-6 ${className}`}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: 'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)',
            backgroundSize: '28px 28px'
          }}
        />
        <div className="relative flex items-center justify-between gap-3">
          <span className={`rounded px-2.5 py-1 text-[11px] font-semibold uppercase ${artwork.surface} ${artwork.foreground}`}>
            {artwork.label}
          </span>
          <Icon icon="lucide:arrow-up-right" className="shrink-0 text-lg text-foreground-400" />
        </div>
        <div className="relative flex items-end justify-between gap-4">
          <div className="min-w-0">
            <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-lg ${artwork.surface} ${artwork.foreground}`}>
              <Icon icon={artwork.icon} className="text-xl" />
            </div>
            <p className="line-clamp-1 text-sm font-semibold text-foreground">{title}</p>
            <p className="mt-1 text-xs text-foreground-500">Illustrated cover</p>
          </div>
          <Icon icon={artwork.icon} className={`shrink-0 text-5xl opacity-20 ${artwork.foreground}`} />
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={title}
      loading="lazy"
      decoding="async"
      onError={() => setImageFailed(true)}
      className={className}
    />
  );
};