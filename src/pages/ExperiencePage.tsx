import { Experience } from '../components/about/Experience';
import { Education } from '../components/about/Education';
import { ContactCTA } from '../components/home/ContactCTA';
import { PageBackground, PageHero } from '../components/utils/PageLayout';
import { Button } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion, useReducedMotion } from 'framer-motion';

export const ExperiencePage = () => {
  const reduce = useReducedMotion();

  return (
    <PageBackground>
      <PageHero
        badge="Career"
        title="My "
        highlight="Experience"
        description="Over 2.3 years of hands-on experience in web development and cybersecurity — building secure, high-performance applications across diverse roles and projects."
      >
        <motion.div
          whileHover={reduce ? undefined : { scale: 1.05 }}
          whileTap={reduce ? undefined : { scale: 0.97 }}
        >
          <Button
            as="a"
            href="/One page CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            className="bg-primary-700 text-white font-semibold hover:bg-primary-800 shadow-lg"
            startContent={<Icon icon="lucide:download" />}
          >
            One Page CV
          </Button>
        </motion.div>
      </PageHero>
      <Experience />
      <Education />
      <ContactCTA />
    </PageBackground>
  );
};
