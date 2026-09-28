import { Button } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

export const AboutHero = () => {
  return (
    <section className="py-12 md:py-16 bg-content2/50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-end">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1 self-start"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>

            <p className="text-lg text-foreground-600 dark:text-foreground-400 mb-6">
              I'm a full‑stack developer and security‑minded engineer with 2.3+ years of experience building and hardening web applications. I combine modern front‑end development with robust back‑end architecture and hands‑on cybersecurity practices—covering code review, vulnerability management, penetration testing, incident response, and server administration.
            </p>

            <p className="text-lg text-foreground-600 dark:text-foreground-400 mb-8">
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
                href="https://github.com/dewanshawon"
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
            className="order-1 lg:order-2"
          >
              <div className="relative w-full">
                <div className="relative aspect-[4/5]">
                  <img
                    src="/img/about_hero_img.png"
                    alt="Yeasine Dewan - Professional Portrait"
                    className="w-full h-full object-cover object-bottom"
                  />
                </div>

              {/* Professional credential badge */}
              <div className="absolute -bottom-4 -right-4 bg-content1 shadow-md rounded-xl p-3 border border-content3 flex items-center gap-2">
                <Icon icon="lucide:languages" className="text-primary-600 dark:text-primary-400" />
                <div className="flex flex-col">
                  <p className="text-xs text-foreground-500">Languages</p>
                  <div className="flex gap-1.5 mt-1">
                    <span className="px-2 py-0.5 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 rounded text-xs font-medium">Bangla</span>
                    <span className="px-2 py-0.5 bg-secondary-100 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-400 rounded text-xs font-medium">English</span>
                    <span className="px-2 py-0.5 bg-success-100 dark:bg-success-900/30 text-success-700 dark:text-success-400 rounded text-xs font-medium">Hindi</span>
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
