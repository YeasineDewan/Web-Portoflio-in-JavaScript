import { Button } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion, useReducedMotion } from 'framer-motion';
import { FloatingOrbs } from '../utils/PageLayout';

const stats = [
  { label: 'Years Experience', value: '2.3+', icon: 'lucide:calendar' },
  { label: 'Projects Completed', value: '15+', icon: 'lucide:folder-check' },
  { label: 'Certifications', value: '5+', icon: 'lucide:award' },
];

export const AboutHero = () => {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section className="relative overflow-hidden border-b border-divider bg-content2/40">
      <FloatingOrbs />
      <div className="container-custom relative">
        <div className="grid grid-cols-1 items-end gap-x-10 gap-y-8 lg:grid-cols-2 lg:gap-x-12">

          {/* ── Left content ── */}
          <motion.div
            variants={reduce ? undefined : container}
            initial={reduce ? undefined : 'hidden'}
            animate="show"
            className="order-1 self-start pb-2 pt-10 sm:pt-12 lg:pb-12"
          >
            {/* Badge */}
            <motion.div variants={reduce ? undefined : item} className="mb-5">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
                <motion.span
                  className="h-1.5 w-1.5 rounded-full bg-primary"
                  animate={reduce ? undefined : { opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.8, repeat: Infinity }}
                />
                About Me
              </span>
            </motion.div>

            <motion.h1
              variants={reduce ? undefined : item}
              className="mb-5 text-4xl font-bold md:text-5xl lg:text-6xl leading-tight"
            >
              Crafting{' '}
              <span className="hero-gradient-text">Secure</span>
              {' '}Digital Experiences
            </motion.h1>

            <motion.p variants={reduce ? undefined : item} className="mb-5 text-base leading-7 text-foreground-600 dark:text-foreground-400 md:text-lg">
              I'm a full-stack developer and security-minded engineer with 2.3+ years of experience building and hardening web applications. I combine modern front-end development with robust back-end architecture and hands-on cybersecurity practices.
            </motion.p>

            <motion.p variants={reduce ? undefined : item} className="mb-7 text-base leading-7 text-foreground-600 dark:text-foreground-400 md:text-lg">
              I care about reliability, performance, and secure-by-default design. My approach integrates security at every stage of development, ensuring applications are resilient against modern threats.
            </motion.p>

            {/* Stats row */}
            <motion.div
              variants={reduce ? undefined : item}
              className="grid grid-cols-3 gap-4 mb-8"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-3 rounded-xl bg-content1 border border-content3/50 shadow-sm"
                  whileHover={reduce ? undefined : { y: -4, scale: 1.03 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  initial={reduce ? undefined : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{ transitionDelay: `${0.4 + i * 0.1}s` }}
                >
                  <Icon icon={stat.icon} className="text-primary mx-auto mb-1 text-lg" />
                  <div className="text-xl font-bold text-primary">{stat.value}</div>
                  <div className="text-xs text-foreground-500 leading-tight">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={reduce ? undefined : item} className="flex flex-wrap gap-4">
              <motion.div whileHover={reduce ? undefined : { scale: 1.04 }} whileTap={reduce ? undefined : { scale: 0.97 }}>
                <Button
                  as="a"
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="primary"
                  className="shimmer font-semibold shadow-lg shadow-primary/25"
                  startContent={<Icon icon="lucide:download" />}
                >
                  Download Resume
                </Button>
              </motion.div>
              <motion.div whileHover={reduce ? undefined : { scale: 1.04 }} whileTap={reduce ? undefined : { scale: 0.97 }}>
                <Button
                  as="a"
                  href="https://github.com/YeasineDewan"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="bordered"
                  startContent={<Icon icon="lucide:github" />}
                >
                  GitHub Profile
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* ── Right image ── */}
          <motion.div
            initial={reduce ? undefined : { opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-2 flex w-full items-end justify-center self-end lg:order-2 lg:justify-end"
          >
            <div className="relative w-full max-w-[520px] self-end">
              {/* Glow */}
              <motion.div
                className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-primary/15 to-secondary/10 blur-3xl"
                animate={reduce ? undefined : { opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              <img
                src="/img/about_hero_img.png"
                alt="Yeasine Dewan - Professional Portrait"
                className="relative block h-auto w-full drop-shadow-2xl"
              />

              {/* Language badge */}
              <motion.div
                className="absolute bottom-4 right-3 flex items-center gap-2 rounded-xl border border-divider bg-content1/95 p-3 shadow-xl backdrop-blur-sm sm:right-4"
                initial={reduce ? undefined : { opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.8, type: 'spring', stiffness: 200 }}
                whileHover={reduce ? undefined : { scale: 1.05 }}
              >
                <Icon icon="lucide:languages" className="text-primary-600 dark:text-primary-400" />
                <div className="flex flex-col">
                  <p className="text-xs text-foreground-500">Languages</p>
                  <div className="mt-1 flex gap-1.5">
                    <span className="rounded bg-primary-100 px-2 py-0.5 text-xs font-medium text-primary-700 dark:bg-primary-900/30 dark:text-primary-400">Bangla</span>
                    <span className="rounded bg-secondary-100 px-2 py-0.5 text-xs font-medium text-secondary-700 dark:bg-secondary-900/30 dark:text-secondary-400">English</span>
                    <span className="rounded bg-success-100 px-2 py-0.5 text-xs font-medium text-success-700 dark:bg-success-900/30 dark:text-success-400">Hindi</span>
                  </div>
                </div>
              </motion.div>

              {/* Security badge */}
              <motion.div
                className="absolute top-8 -left-4 flex items-center gap-2 rounded-xl border border-divider bg-content1/95 p-3 shadow-xl backdrop-blur-sm"
                initial={reduce ? undefined : { opacity: 0, scale: 0.8, x: -20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: 1, type: 'spring', stiffness: 200 }}
                whileHover={reduce ? undefined : { scale: 1.05 }}
              >
                <div className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                  <Icon icon="lucide:shield-check" className="text-primary text-sm" />
                </div>
                <div>
                  <p className="text-xs text-foreground-500">Certified</p>
                  <p className="text-xs font-semibold">Security Expert</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
