import { SkillsGrid } from '../components/skills/SkillsGrid';
import { ContactCTA } from '../components/home/ContactCTA';
import { PageBackground, PageHero } from '../components/utils/PageLayout';

export const SkillsPage = () => (
  <PageBackground>
    <PageHero
      badge="Expertise"
      title="My Skills & "
      highlight="Technologies"
      description="A comprehensive overview of the technologies, frameworks, and tools I use to build secure, high-performance web applications."
    />
    <SkillsGrid />
    <ContactCTA />
  </PageBackground>
);
