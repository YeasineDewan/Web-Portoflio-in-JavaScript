import React from 'react';
import { ProjectsGrid } from '../components/projects/ProjectsGrid';
import { ContactCTA } from '../components/home/ContactCTA';

export const ProjectsPage = () => {
  return (
    <div>
      <div className="py-16 bg-content2/50">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-6">Projects</h1>
          <p className="text-lg text-foreground-600 dark:text-foreground-400 max-w-3xl">
            Explore my portfolio of projects focused on security, performance, and user experience. Each project demonstrates my approach to building robust web applications with security at their core.
          </p>
        </div>
      </div>
      <ProjectsGrid />
      <ContactCTA />
    </div>
  );
};