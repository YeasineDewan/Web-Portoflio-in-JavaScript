import { ServicesDetail } from '../components/services/ServicesDetail';
import { ContactCTA } from '../components/home/ContactCTA';
import { PageBackground, PageHero } from '../components/utils/PageLayout';

export const ServicesPage = () => (
  <PageBackground>
    <PageHero
      badge="What I Offer"
      title="My "
      highlight="Services"
      description="End-to-end web development, security audits, penetration testing, and server optimisation — everything you need to build and harden your digital presence."
    />
    <ServicesDetail />
    <ContactCTA />
  </PageBackground>
);
