import React from 'react';
import { CertificationGrid } from '../components/certifications/CertificationGrid';
import { ContactCTA } from '../components/home/ContactCTA';

export const CertificationsPage = () => {
  return (
    <div>
      <div className="py-16 bg-content2/50">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-6">Certifications & Training</h1>
          <p className="text-lg text-foreground-600 dark:text-foreground-400 max-w-3xl">
            I'm committed to continuous learning and professional development. Here are some of the certifications and training programs I've completed to enhance my skills in web development, security, and related fields.
          </p>
        </div>
      </div>
      <CertificationGrid />
      <ContactCTA />
    </div>
  );
};