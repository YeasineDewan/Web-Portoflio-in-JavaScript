import { Experience } from '../components/about/Experience';
import { Education } from '../components/about/Education';
import { ContactCTA } from '../components/home/ContactCTA';
import { PageBackground, PageHero } from '../components/utils/PageLayout';

export const ExperiencePage = () => (
  <PageBackground>
    <PageHero
      badge="Career"
      title="My "
      highlight="Experience"
      description="Over 2.3 years of hands-on experience in web development and cybersecurity — building secure, high-performance applications across diverse roles and projects."
    />
    <Experience />
    <Education />
    <ContactCTA />
  </PageBackground>
);
