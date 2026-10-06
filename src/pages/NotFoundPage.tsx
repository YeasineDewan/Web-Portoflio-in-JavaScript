import { Link } from 'react-router-dom';
import { Button } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion, useReducedMotion } from 'framer-motion';
import { PageBackground, FloatingOrbs } from '../components/utils/PageLayout';

const PARTICLES = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: 3 + Math.random() * 5,
  duration: 3 + Math.random() * 4,
  delay: Math.random() * 3,
}));

export const NotFoundPage = () => {
  const reduce = useReducedMotion();

  return (
    <PageBackground>
      <div className="relative flex min-h-[85vh] items-center justify-center py-16 overflow-hidden">
        <FloatingOrbs />

        {/* Floating particles */}
        {!reduce && (
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            {PARTICLES.map((p) => (
              <motion.div
                key={p.id}
                className="absolute rounded-full bg-primary/20 dark:bg-primary/30"
                style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
                animate={{ y: [0, -20, 0], opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
              />
            ))}
          </div>
        )}

        <div className="container-custom text-center relative">
          {/* 404 */}
          <motion.div
            className="relative mb-8 inline-block"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Glow blob behind number */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="w-64 h-64 rounded-full bg-primary/10 blur-3xl morphing-blob"
                animate={reduce ? undefined : { scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </div>

            <span className="relative select-none text-[9rem] font-black leading-none text-primary/10 md:text-[13rem] dark:text-primary/15">
              404
            </span>

            {/* Icon overlay */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <motion.div
                className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 ring-4 ring-primary/20 backdrop-blur-sm"
                animate={reduce ? undefined : { rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Icon icon="lucide:file-x" className="text-4xl text-primary" />
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.h1
            className="mb-4 text-4xl font-bold md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.55 }}
          >
            Page Not Found
          </motion.h1>

          <motion.p
            className="mx-auto mb-10 max-w-md text-lg text-foreground-500 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.55 }}
          >
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.55 }}
          >
            <motion.div whileHover={reduce ? undefined : { scale: 1.05 }} whileTap={reduce ? undefined : { scale: 0.97 }}>
              <Button as={Link} to="/" color="primary" size="lg" className="shimmer font-semibold shadow-lg shadow-primary/25" startContent={<Icon icon="lucide:house" />}>
                Go to Homepage
              </Button>
            </motion.div>
            <motion.div whileHover={reduce ? undefined : { scale: 1.05 }} whileTap={reduce ? undefined : { scale: 0.97 }}>
              <Button as={Link} to="/contact" variant="bordered" size="lg" startContent={<Icon icon="lucide:message-square" />}>
                Contact Me
              </Button>
            </motion.div>
          </motion.div>

          {/* Quick links */}
          <motion.div
            className="mt-12 flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            {[
              { label: 'Projects', to: '/projects', icon: 'lucide:folder-kanban' },
              { label: 'About',    to: '/about',    icon: 'lucide:user-round' },
              { label: 'Blog',     to: '/blog',     icon: 'lucide:notebook-text' },
              { label: 'Services', to: '/services', icon: 'lucide:layers' },
            ].map((link) => (
              <Button
                key={link.to}
                as={Link}
                to={link.to}
                variant="flat"
                size="sm"
                startContent={<Icon icon={link.icon} className="text-sm" />}
                className="text-foreground-500 hover:text-primary"
              >
                {link.label}
              </Button>
            ))}
          </motion.div>
        </div>
      </div>
    </PageBackground>
  );
};
