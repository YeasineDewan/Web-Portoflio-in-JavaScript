import { Hero } from '../components/home/Hero';
import { FeaturedProjects } from '../components/home/FeaturedProjects';
import { Services } from '../components/home/Services';
import { SkillsCarousel } from '../components/home/SkillsCarousel';
import { RecentBlogPosts } from '../components/home/RecentBlogPosts';
import { ContactCTA } from '../components/home/ContactCTA';
import { PageBackground } from '../components/utils/PageLayout';

export const HomePage = () => (
  <PageBackground>
    <Hero />
    <FeaturedProjects />
    <SkillsCarousel />
    <Services />
    <RecentBlogPosts />
    <ContactCTA />
  </PageBackground>
);
