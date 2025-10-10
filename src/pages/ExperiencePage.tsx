import React from 'react';
import { Experience } from '../components/about/Experience';
import { Education } from '../components/about/Education';
import { ContactCTA } from '../components/home/ContactCTA';

export const ExperiencePage = () => {
  return (
    <div>
      <div className="py-16 bg-content2/50">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-6">My Experience</h1>
          <p className="text-lg text-foreground-600 dark:text-foreground-400 max-w-3xl">
            With over 2.3 years of experience in web development and cybersecurity, I've worked on a variety of projects and roles that have shaped my expertise in building secure, high-performance web applications.
          </p>
        </div>
      </div>
      <Experience />
      <Education />
      <ContactCTA />
    </div>
  );
};