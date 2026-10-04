import React from 'react';
import { motion } from 'framer-motion';

// ─── Animation variants ───────────────────────────────────────────────────────
export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export const stagger = (delay = 0.1) => ({
  hidden: {},
  show: { transition: { staggerChildren: delay } },
});

// ─── Main PageBackground ──────────────────────────────────────────────────────
export const PageBackground: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => (
  <div className={`relative ${className}`}>
    {children}
  </div>
);

// ─── Page hero ────────────────────────────────────────────────────────────────
interface PageHeroProps {
  badge?: string;
  title: string;
  highlight?: string;
  description: string;
  children?: React.ReactNode;
}

export const PageHero: React.FC<PageHeroProps> = ({
  badge, title, highlight, description, children,
}) => {
  const parts = highlight ? title.split(highlight) : [title];

  return (
    <section className="relative py-20 md:py-28">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="container-custom">
        <motion.div
          variants={stagger(0.13)}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          {badge && (
            <motion.div variants={fadeUp} className="mb-5">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
                <motion.span
                  className="h-1.5 w-1.5 rounded-full bg-primary"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.8, repeat: Infinity }}
                />
                {badge}
              </span>
            </motion.div>
          )}

          <motion.h1
            variants={fadeUp}
            className="mb-5 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl"
          >
            {highlight ? (
              <>
                {parts[0]}
                <span className="relative inline-block text-primary">
                  {highlight}
                  <motion.span
                    className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-primary/40"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.8, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    style={{ transformOrigin: 'left' }}
                  />
                </span>
                {parts[1]}
              </>
            ) : title}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mb-8 max-w-2xl text-lg leading-relaxed text-foreground-500 md:text-xl"
          >
            {description}
          </motion.p>

          {children && (
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              {children}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

// ─── Section wrapper ──────────────────────────────────────────────────────────
export const Section: React.FC<{
  children: React.ReactNode;
  className?: string;
  id?: string;
}> = ({ children, className = '', id }) => (
  <motion.section
    id={id}
    variants={stagger(0.1)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: '-60px' }}
    className={`py-16 md:py-20 ${className}`}
  >
    {children}
  </motion.section>
);

// ─── Section heading ──────────────────────────────────────────────────────────
export const SectionHeading: React.FC<{
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
  center?: boolean;
}> = ({ badge, title, highlight, description, center = true }) => {
  const parts = highlight ? title.split(highlight) : [title];

  return (
    <motion.div
      variants={fadeUp}
      className={`mb-12 ${center ? 'text-center' : ''}`}
    >
      {badge && (
        <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/8 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          {badge}
        </span>
      )}
      <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
        {highlight ? (
          <>
            {parts[0]}
            <span className="text-primary">{highlight}</span>
            {parts[1]}
          </>
        ) : title}
      </h2>
      {description && (
        <p className={`text-lg leading-relaxed text-foreground-500 ${center ? 'mx-auto max-w-2xl' : 'max-w-2xl'}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
};
