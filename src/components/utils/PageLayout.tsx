import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

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

// ─── Floating blob ────────────────────────────────────────────────────────────
const Blob: React.FC<{
  className: string;
  color: string;
  duration: number;
  delay?: number;
  xRange?: number[];
  yRange?: number[];
}> = ({ className, color, duration, delay = 0, xRange = [0, 30, -20, 0], yRange = [0, -40, 20, 0] }) => {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={`pointer-events-none absolute rounded-full blur-[80px] ${className}`}
      style={{ background: color }}
      animate={reduced ? {} : {
        x: xRange,
        y: yRange,
        scale: [1, 1.12, 0.95, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'easeInOut',
      }}
    />
  );
};

// ─── Floating particles ───────────────────────────────────────────────────────
const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  size: Math.random() * 3 + 1.5,
  x: Math.random() * 100,
  y: Math.random() * 100,
  duration: Math.random() * 12 + 10,
  delay: Math.random() * 6,
  opacity: Math.random() * 0.4 + 0.1,
}));

const Particles: React.FC = () => {
  const reduced = useReducedMotion();
  if (reduced) return null;
  return (
    <>
      {PARTICLES.map((p) => (
        <motion.div
          key={p.id}
          className="pointer-events-none absolute rounded-full bg-primary"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            opacity: p.opacity,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [p.opacity, p.opacity * 2.5, p.opacity],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </>
  );
};

// ─── Main PageBackground ──────────────────────────────────────────────────────
export const PageBackground: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => (
  <div className={`relative overflow-hidden ${className}`}>

    {/* ── Layer 1: Animated mesh blobs ── */}
    {/* Top-left large blob */}
    <Blob
      className="h-[600px] w-[600px] -left-48 -top-48 opacity-30 dark:opacity-20"
      color="radial-gradient(circle, rgba(255,49,49,0.55) 0%, rgba(209,0,0,0.2) 50%, transparent 70%)"
      duration={14}
      delay={0}
      xRange={[0, 40, -10, 0]}
      yRange={[0, 30, -20, 0]}
    />

    {/* Bottom-right large blob */}
    <Blob
      className="h-[700px] w-[700px] -bottom-56 -right-56 opacity-25 dark:opacity-15"
      color="radial-gradient(circle, rgba(209,0,0,0.5) 0%, rgba(255,49,49,0.15) 50%, transparent 70%)"
      duration={18}
      delay={3}
      xRange={[0, -50, 20, 0]}
      yRange={[0, -30, 40, 0]}
    />

    {/* Centre-right mid blob */}
    <Blob
      className="h-[400px] w-[400px] right-1/4 top-1/3 opacity-20 dark:opacity-10"
      color="radial-gradient(circle, rgba(255,49,49,0.4) 0%, transparent 65%)"
      duration={12}
      delay={6}
      xRange={[0, -30, 20, 0]}
      yRange={[0, 40, -20, 0]}
    />

    {/* Top-right small accent */}
    <Blob
      className="h-[280px] w-[280px] right-16 top-16 opacity-20 dark:opacity-15"
      color="radial-gradient(circle, rgba(255,49,49,0.5) 0%, transparent 60%)"
      duration={10}
      delay={1.5}
      xRange={[0, 20, -10, 0]}
      yRange={[0, -20, 10, 0]}
    />

    {/* Bottom-left small accent */}
    <Blob
      className="h-[320px] w-[320px] left-1/4 bottom-1/4 opacity-15 dark:opacity-10"
      color="radial-gradient(circle, rgba(209,0,0,0.45) 0%, transparent 60%)"
      duration={16}
      delay={4}
      xRange={[0, 25, -15, 0]}
      yRange={[0, -35, 15, 0]}
    />

    {/* ── Layer 2: Grid lines ── */}
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.035] dark:opacity-[0.06]"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,49,49,1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,49,49,1) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }}
    />

    {/* ── Layer 3: Diagonal lines overlay ── */}
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.018] dark:opacity-[0.04]"
      style={{
        backgroundImage: `repeating-linear-gradient(
          45deg,
          rgba(255,49,49,1) 0px,
          rgba(255,49,49,1) 1px,
          transparent 1px,
          transparent 40px
        )`,
      }}
    />

    {/* ── Layer 4: Floating particles ── */}
    <Particles />

    {/* ── Layer 5: Vignette edges ── */}
    <div
      className="pointer-events-none absolute inset-0"
      style={{
        background:
          'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.04) 100%)',
      }}
    />

    {/* ── Layer 6: Top & bottom gradient fades ── */}
    <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent" />
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />

    {/* Content */}
    <div className="relative z-10">{children}</div>
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
