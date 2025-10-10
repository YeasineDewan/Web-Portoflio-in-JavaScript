import React from 'react';
import { BlogGrid } from '../components/blog/BlogGrid';
import { ContactCTA } from '../components/home/ContactCTA';

export const BlogPage = () => {
  return (
    <div>
      <div className="py-16 bg-content2/50">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-6">Blog</h1>
          <p className="text-lg text-foreground-600 dark:text-foreground-400 max-w-3xl">
            Insights, tutorials, and thoughts on web development, security, and performance optimization. I share my experiences and knowledge to help others build better, more secure web applications.
          </p>
        </div>
      </div>
      <BlogGrid />
      <ContactCTA />
    </div>
  );
};