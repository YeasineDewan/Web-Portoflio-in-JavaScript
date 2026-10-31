import { BlogGrid } from '../components/blog/BlogGrid';
import { ContactCTA } from '../components/home/ContactCTA';
import { PageBackground, PageHero } from '../components/utils/PageLayout';

export const BlogPage = () => (
  <PageBackground>
    <PageHero
      badge="Articles"
      title="Insights & "
      highlight="Blog"
      description="Thoughts, tutorials, and deep-dives on web development, cybersecurity, and performance optimization. Real experiences, practical knowledge."
    />
    <BlogGrid />
    <ContactCTA />
  </PageBackground>
);
