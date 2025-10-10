import React from 'react';
import { Hero } from '../components/home/Hero';
import { FeaturedProjects } from '../components/home/FeaturedProjects';
import { Services } from '../components/home/Services';
import { SkillsCarousel } from '../components/home/SkillsCarousel'; // Add this import
import { RecentBlogPosts } from '../components/home/RecentBlogPosts';
import { ContactCTA } from '../components/home/ContactCTA';

export const HomePage = () => {
  return (
    <div>
      <Hero />
      <FeaturedProjects />
      <SkillsCarousel /> {/* Replace Skills with SkillsCarousel */}
      <Services />
      <RecentBlogPosts />
      <ContactCTA />
    </div>
  );
};