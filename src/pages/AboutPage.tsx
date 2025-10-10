import React from 'react';
import { AboutHero } from '../components/about/AboutHero';
import { Experience } from '../components/about/Experience';
import { Education } from '../components/about/Education';
import { ContactCTA } from '../components/home/ContactCTA';

export const AboutPage = () => {
  return (
    <div>
      <AboutHero />
      <Experience />
      <Education />
      <ContactCTA />
    </div>
  );
};