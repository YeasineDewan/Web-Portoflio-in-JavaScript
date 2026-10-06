import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Tooltip } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion, useReducedMotion } from 'framer-motion';

const ROLES = ['Full-Stack Engineer', 'Cybersecurity Expert', 'Penetration Tester', 'Web Architect'];

const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  size: 4 + Math.random() * 6,
  x: Math.random() * 100,
  y: Math.random() * 100,
  duration: 4 + Math.random() * 6,
  delay: Math.random() * 4,
}));

const BEAMS = [
  { left: '15%', height: '40%', top: '0', delay: '0s', duration: '4s' },
  { left: '45%', height: '60%', top: '0', delay: '1.5s', duration: '5s' },
  { left: '75%', height: '35%', top: '0', delay: '3s', duration: '3.5s' },
];

function useTypewriter(words: string[], speed = 80, pause = 1800) {
  const [display, setDisplay] = React.useState('');
  const [wordIdx, setWordIdx] = React.useState(0);
  const [charIdx, setCharIdx] = React.useState(0);
  const [deleting, setDeleting] = React.useState(false);

  React.useEffect(() => {
    const word = words[wordIdx];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplay(word.slice(0, charIdx + 1));
        if (charIdx + 1 === word.length) {
          setTimeout(() => setDeleting(true), pause);
        } else {
          setCharIdx(c => c + 1);
        }
      } else {
        setDisplay(word.slice(0, charIdx - 1));
        if (charIdx - 1 === 0) {
          setDeleting(false);
          setWordIdx(w => (w + 1) % words.length);
          setCharIdx(0);
        } else {
          setCharIdx(c => c - 1);
        }
      }
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

export const Hero = () => {
  const reduce = useReducedMotion();
  const role = useTypewriter(ROLES);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section
      className="relative overflow-hidden bg-background py-20 md:py-32"
    >
      {/* Animated beams */}
      {!reduce && BEAMS.map((b, i) => (
        <div
          key={i}
          className="beam pointer-events-none absolute"
          style={{ left: b.left, height: b.height, top: b.top, animationDelay: b.delay, animationDuration: b.duration, width: '1px' }}
        />
      ))}

      {/* Particle field */}
      {!reduce && (
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          {PARTICLES.map(p => (
            <motion.div
              key={p.id}
              className="absolute rounded-full bg-primary/20 dark:bg-primary/50"
              style={{
                width: p.size,
                height: p.size,
                left: `${p.x}%`,
                top: `${p.y}%`,
              }}
              animate={{
                y: [0, -24, 0],
                opacity: [0.4, 1, 0.4],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: p.duration,
                delay: p.delay,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
      )}

      {/* Radial glow */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary-50/40 via-transparent to-secondary-50/30 dark:from-primary-900/15 dark:to-secondary-900/10" />

      <div className="container-custom relative">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">

          {/* ── Left content ── */}
          <motion.div
            className="lg:col-span-3 space-y-6"
            variants={container}
            initial={reduce ? undefined : 'hidden'}
            animate="show"
          >
            {/* Badge */}
            <motion.div variants={reduce ? undefined : item}>
              <motion.span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-primary/10 text-primary border border-primary/20"
                whileHover={reduce ? undefined : { scale: 1.05 }}
              >
                <motion.span
                  className="h-2 w-2 rounded-full bg-primary"
                  animate={reduce ? undefined : { opacity: [1, 0.3, 1], scale: [1, 1.4, 1] }}
                  transition={{ duration: 1.6, repeat: Infinity }}
                />
                Security-Focused Developer
              </motion.span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={reduce ? undefined : item}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight"
            >
              I build{' '}
              <span className="hero-gradient-text">secure,</span>
              <br />
              <span className="hero-gradient-text">high-performance</span>
              <br />
              web apps.
            </motion.h1>

            {/* Typewriter role */}
            <motion.div variants={reduce ? undefined : item} className="flex items-center gap-2 text-xl font-medium text-foreground-600 dark:text-foreground-400">
              <Icon icon="lucide:terminal" className="text-primary shrink-0" />
              <span>{reduce ? ROLES[0] : role}</span>
              {!reduce && <span className="typewriter-cursor text-primary" />}
            </motion.div>

            {/* Description */}
            <motion.p
              variants={reduce ? undefined : item}
              className="text-lg text-foreground-600 dark:text-foreground-400 max-w-2xl leading-relaxed"
            >
              Full-stack developer and cybersecurity engineer with 2.3+ years of experience building and hardening web applications.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={reduce ? undefined : item}
              className="flex flex-wrap gap-4 pt-2"
            >
              <motion.div whileHover={reduce ? undefined : { scale: 1.04 }} whileTap={reduce ? undefined : { scale: 0.97 }}>
                <Button
                  as={Link}
                  to="/projects"
                  color="primary"
                  size="lg"
                  className="shimmer font-semibold shadow-lg shadow-primary/25"
                  startContent={<Icon icon="lucide:layout-grid" />}
                >
                  View Projects
                </Button>
              </motion.div>
              <motion.div whileHover={reduce ? undefined : { scale: 1.04 }} whileTap={reduce ? undefined : { scale: 0.97 }}>
                <Button
                  as={Link}
                  to="/contact"
                  color="primary"
                  variant="bordered"
                  size="lg"
                  className="font-semibold"
                  startContent={<Icon icon="lucide:message-square" />}
                >
                  Hire Me
                </Button>
              </motion.div>
              <Tooltip content="Download Resume (PDF)">
                <motion.div whileHover={reduce ? undefined : { scale: 1.1, rotate: 5 }} whileTap={reduce ? undefined : { scale: 0.95 }}>
                  <Button
                    as="a"
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="default"
                    variant="flat"
                    size="lg"
                    isIconOnly
                  >
                    <Icon icon="lucide:download" className="text-xl" />
                  </Button>
                </motion.div>
              </Tooltip>
            </motion.div>

            {/* Skill badges */}
            <motion.div
              variants={reduce ? undefined : item}
              className="flex items-center gap-3 pt-2"
            >
              <div className="flex -space-x-2">
                {[
                  { icon: 'lucide:code', bg: 'bg-primary-100 dark:bg-primary-900/50', color: 'text-primary-600 dark:text-primary-400' },
                  { icon: 'lucide:shield', bg: 'bg-secondary-100 dark:bg-secondary-900/50', color: 'text-secondary-600 dark:text-secondary-400' },
                  { icon: 'lucide:zap', bg: 'bg-success-100 dark:bg-success-900/50', color: 'text-success-600 dark:text-success-400' },
                ].map((b, i) => (
                  <motion.div
                    key={i}
                    className={`w-9 h-9 rounded-full ${b.bg} flex items-center justify-center border-2 border-background`}
                    whileHover={reduce ? undefined : { scale: 1.2, zIndex: 10 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <Icon icon={b.icon} className={`${b.color} text-sm`} />
                  </motion.div>
                ))}
              </div>
              <span className="text-sm text-foreground-500 font-medium">Development • Security • Performance</span>
            </motion.div>
          </motion.div>

          {/* ── Right image ── */}
          <motion.div
            className="lg:col-span-2 relative"
            initial={reduce ? undefined : { opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative">
              {/* Glow ring */}
              <motion.div
                className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 blur-2xl"
                animate={reduce ? undefined : { opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              {/* Image frame */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary-600 to-secondary-600 p-[2px]">
                <div className="relative rounded-xl overflow-hidden aspect-[4/5] md:aspect-[3/4]">
                  <img
                    src="/img/hero_img.png"
                    alt="Yeasine Dewan"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  {/* Scan line */}
                  {!reduce && (
                    <div className="absolute inset-0 overflow-hidden">
                      <div className="absolute inset-0 border-t border-white/20 dark:border-primary-300/40 animate-scan" />
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom badge */}
              <motion.div
                className="absolute -bottom-5 -left-5 bg-content1/95 backdrop-blur-md shadow-xl rounded-xl p-3 flex items-center gap-2.5 border border-content3"
                initial={reduce ? undefined : { opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.7, type: 'spring', stiffness: 200 }}
                whileHover={reduce ? undefined : { scale: 1.05 }}
              >
                <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                  <Icon icon="lucide:shield-check" className="text-primary-600 dark:text-primary-400 text-xl" />
                </div>
                <div>
                  <p className="text-xs text-foreground-500">Security-Focused</p>
                  <p className="text-sm font-semibold">Full-Stack Engineer</p>
                </div>
              </motion.div>

              {/* Top badge */}
              <motion.div
                className="absolute -top-5 -right-5 bg-content1/95 backdrop-blur-md shadow-xl rounded-xl p-3 flex items-center gap-2.5 border border-content3"
                initial={reduce ? undefined : { opacity: 0, y: -20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.85, type: 'spring', stiffness: 200 }}
                whileHover={reduce ? undefined : { scale: 1.05 }}
              >
                <div className="w-10 h-10 rounded-full bg-secondary-100 dark:bg-secondary-900/30 flex items-center justify-center">
                  <Icon icon="lucide:briefcase" className="text-secondary-600 dark:text-secondary-400 text-xl" />
                </div>
                <div>
                  <p className="text-xs text-foreground-500">Experience</p>
                  <p className="text-sm font-semibold">2.3+ Years</p>
                </div>
              </motion.div>

              {/* Stats badge */}
              <motion.div
                className="absolute top-1/2 -right-6 -translate-y-1/2 bg-content1/95 backdrop-blur-md shadow-xl rounded-xl p-3 border border-content3"
                initial={reduce ? undefined : { opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, type: 'spring', stiffness: 200 }}
                whileHover={reduce ? undefined : { scale: 1.05 }}
              >
                <div className="flex flex-col items-center gap-1">
                  <span className="text-2xl font-bold text-primary">15+</span>
                  <span className="text-xs text-foreground-500 whitespace-nowrap">Projects Done</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
