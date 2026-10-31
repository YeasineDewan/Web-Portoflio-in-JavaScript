import { AboutHero } from '../components/about/AboutHero';
import { Experience } from '../components/about/Experience';
import { Education } from '../components/about/Education';
import { ContactCTA } from '../components/home/ContactCTA';
import { PageBackground } from '../components/utils/PageLayout';

export const AboutPage = () => (
  <PageBackground>
    <AboutHero />
    <Experience />
    <Education />
    <ContactCTA />
  </PageBackground>
);
