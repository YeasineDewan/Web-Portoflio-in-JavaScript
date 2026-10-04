import { Button } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

export const AboutHero = () => {
  return (
    <section className="overflow-hidden border-b border-divider bg-content2/50">
      <div className="container-custom">
        <div className="grid grid-cols-1 items-end gap-x-10 gap-y-8 lg:grid-cols-2 lg:gap-x-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="order-1 self-start pb-2 pt-8 sm:pt-10 lg:order-1 lg:pb-12"
          >
            <h1 className="mb-5 text-4xl font-bold md:text-5xl">About Me</h1>

            <p className="mb-5 text-base leading-7 text-foreground-600 dark:text-foreground-400 md:text-lg">
              I'm a full‑stack developer and security‑minded engineer with 2.3+ years of experience building and hardening web applications. I combine modern front‑end development with robust back‑end architecture and hands‑on cybersecurity practices—covering code review, vulnerability management, penetration testing, incident response, and server administration.
            </p>

            <p className="mb-7 text-base leading-7 text-foreground-600 dark:text-foreground-400 md:text-lg">
              I care about reliability, performance, and secure-by‑default design. My approach integrates security at every stage of development, ensuring applications are not only functional and user-friendly but also resilient against modern threats.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                as="a"
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                color="primary"
                startContent={<Icon icon="lucide:download" />}
              >
                Download Resume
              </Button>
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
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative order-2 flex w-full items-end justify-center self-end lg:order-2 lg:justify-end"
          >
            <div className="relative w-full max-w-[520px] self-end">
              <img
                src="/img/about_hero_img.png"
                alt="Yeasine Dewan - Professional Portrait"
                className="block h-auto w-full"
              />

              {/* Professional credential badge */}
              <div className="absolute bottom-4 right-3 flex items-center gap-2 rounded-xl border border-divider bg-content1/95 p-3 shadow-lg backdrop-blur-sm sm:right-4">
                <Icon icon="lucide:languages" className="text-primary-600 dark:text-primary-400" />
                <div className="flex flex-col">
                  <p className="text-xs text-foreground-500">Languages</p>
                  <div className="mt-1 flex gap-1.5">
                    <span className="rounded bg-primary-100 px-2 py-0.5 text-xs font-medium text-primary-700 dark:bg-primary-900/30 dark:text-primary-400">Bangla</span>
                    <span className="rounded bg-secondary-100 px-2 py-0.5 text-xs font-medium text-secondary-700 dark:bg-secondary-900/30 dark:text-secondary-400">English</span>
                    <span className="rounded bg-success-100 px-2 py-0.5 text-xs font-medium text-success-700 dark:bg-success-900/30 dark:text-success-400">Hindi</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
