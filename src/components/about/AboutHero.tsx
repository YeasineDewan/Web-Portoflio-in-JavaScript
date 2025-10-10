import React from 'react';
import { Button } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

export const AboutHero = () => {
  return (
    <section className="py-16 md:py-24 bg-content2/50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1"
          >
            <h1 className="text-4xl font-bold mb-6">About Me</h1>
            
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-lg text-foreground-600 dark:text-foreground-400 mb-6">
                I'm a full‑stack developer and security‑minded engineer with 2.3+ years of experience building and hardening web applications. I combine modern front‑end development with robust back‑end architecture and hands‑on cybersecurity practices—covering code review, vulnerability management, penetration testing, incident response, and server administration.
              </p>
              
              <p className="text-lg text-foreground-600 dark:text-foreground-400 mb-6">
                I care about reliability, performance, and secure-by‑default design. My approach integrates security at every stage of development, ensuring applications are not only functional and user-friendly but also resilient against modern threats.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 mt-8">
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
            <div className="relative">
              <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-primary-600 to-secondary-600 p-1">
                <div className="relative rounded-xl overflow-hidden aspect-[4/5]">
                  <img 
                    src="https://img.heroui.chat/image/avatar?w=600&h=800&u=yeasine-2" 
                    alt="Yeasine Dewan" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-content1 shadow-lg rounded-lg p-3 border border-content3">
                <div className="flex items-center gap-3">
                  <div className="flex flex-col">
                    <p className="text-xs text-foreground-500">Languages</p>
                    <div className="flex gap-2 mt-1">
                      <span className="px-2 py-0.5 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 rounded text-xs">Bangla</span>
                      <span className="px-2 py-0.5 bg-secondary-100 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-400 rounded text-xs">English</span>
                      <span className="px-2 py-0.5 bg-success-100 dark:bg-success-900/30 text-success-700 dark:text-success-400 rounded text-xs">Hindi</span>
                    </div>
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