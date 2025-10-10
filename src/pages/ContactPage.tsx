import React from 'react';
import { ContactForm } from '../components/contact/ContactForm';

export const ContactPage = () => {
  return (
    <div>
      <div className="py-16 bg-content2/50">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
          <p className="text-lg text-foreground-600 dark:text-foreground-400 max-w-3xl">
            Have a project in mind or want to discuss how I can help you build secure, high-performance web applications? Get in touch using the form below or through my social media profiles.
          </p>
        </div>
      </div>
      
      <div className="py-16">
        <div className="container-custom max-w-4xl">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};