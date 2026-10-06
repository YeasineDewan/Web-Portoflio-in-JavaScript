import React from 'react';
import { motion, useReducedMotion, useInView, useMotionValue, useSpring } from 'framer-motion';

// ─── Core variants ────────────────────────────────────────────────────────────
export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

export const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.88 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export const stagger = (delay = 0.1) => ({
  hidden: {},
  show: { transition: { staggerChildren: delay, delayChildren: 0.05 } },
});

// ─── CountUp number ───────────────────────────────────────────────────────────
export const CountUp: React.FC<{ to: number; suffix?: string; duration?: number }> = ({
  to, suffix = '', duration = 1.5,
}) => {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { duration: duration * 1000, bounce: 0 });
  const [display, setDisplay] = React.useState('0');

  React.useEffect(() => {
    if (inView) motionVal.set(to);
  }, [inView, to, motionVal]);

  React.useEffect(() => {
    return spring.on('change', (v) => setDisplay(Math.round(v).toString()));
  }, [spring]);

  return <span ref={ref}>{display}{suffix}</span>;
};

// ─── Floating Orbs background ─────────────────────────────────────────────────
export const FloatingOrbs: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
    <div className="orb orb-1" />
    <div className="orb orb-2" />
    <div className="orb orb-3" />
  </div>
);

// ─── Animated section wrapper ─────────────────────────────────────────────────
export const Section: React.FC<{
  children: React.ReactNode;
  className?: string;
  id?: string;
  withOrbs?: boolean;
}> = ({ children, className = '', id, withOrbs = false }) => {
  const reduce = useReducedMotion();
  return (
    <motion.section
      id={id}
      variants={reduce ? undefined : stagger(0.1)}
      initial={reduce ? undefined : 'hidden'}
      whileInView={reduce ? undefined : 'show'}
      viewport={{ once: true, margin: '-60px' }}
      className={`relative py-16 md:py-24 ${className}`}
    >
      {withOrbs && <FloatingOrbs />}
      {children}
    </motion.section>
  );
};

// ─── Animated card ────────────────────────────────────────────────────────────
export const AnimatedCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
}> = ({ children, className = '', delay = 0 }) => {
  const reduce = useReducedMotion();
  return (
    <motion.div
      variants={reduce ? undefined : fadeUp}
      whileHover={reduce ? undefined : { y: -6, transition: { duration: 0.25 } }}
      className={`card-glow gradient-border ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </motion.div>
  );
};

// ─── Page background wrapper ──────────────────────────────────────────────────
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
  const reduce = useReducedMotion();
  const parts = highlight ? title.split(highlight) : [title];

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <FloatingOrbs />
      {/* Decorative grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage: `linear-gradient(rgba(220,38,38,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(220,38,38,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="container-custom relative">
        <motion.div
          variants={reduce ? undefined : stagger(0.13)}
          initial={reduce ? undefined : 'hidden'}
          animate="show"
          className="max-w-3xl"
        >
          {badge && (
            <motion.div variants={reduce ? undefined : fadeUp} className="mb-5">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
                <motion.span
                  className="h-1.5 w-1.5 rounded-full bg-primary"
                  animate={reduce ? undefined : { opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.8, repeat: Infinity }}
                />
                {badge}
              </span>
            </motion.div>
          )}

          <motion.h1
            variants={reduce ? undefined : fadeUp}
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
            variants={reduce ? undefined : fadeUp}
            className="mb-8 max-w-2xl text-lg leading-relaxed text-foreground-500 md:text-xl"
          >
            {description}
          </motion.p>

          {children && (
            <motion.div variants={reduce ? undefined : fadeUp} className="flex flex-wrap gap-3">
              {children}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

// ─── Section heading ──────────────────────────────────────────────────────────
export const SectionHeading: React.FC<{
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
  center?: boolean;
}> = ({ badge, title, highlight, description, center = true }) => {
  const reduce = useReducedMotion();
  const parts = highlight ? title.split(highlight) : [title];

  return (
    <motion.div
      variants={reduce ? undefined : fadeUp}
      className={`mb-12 ${center ? 'text-center' : ''}`}
    >
      {badge && (
        <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/8 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
          <motion.span
            className="h-1.5 w-1.5 rounded-full bg-primary"
            animate={reduce ? undefined : { opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          />
          {badge}
        </span>
      )}
      <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
        {highlight ? (
          <>
            {parts[0]}
            <span className="hero-gradient-text">{highlight}</span>
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
