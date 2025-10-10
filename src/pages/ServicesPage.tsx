import React from 'react';
import { ServicesDetail } from '../components/services/ServicesDetail';
import { ContactCTA } from '../components/home/ContactCTA';

export const ServicesPage = () => {
  return (
    <div>
      <div className="py-16 bg-content2/50">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-6">Services</h1>
          <p className="text-lg text-foreground-600 dark:text-foreground-400 max-w-3xl">
            I offer a range of services focused on building secure, high-performance web applications. Whether you need a complete web application, security review, or server optimization, I can help you achieve your goals.
          </p>
        </div>
      </div>
      <ServicesDetail />
      <ContactCTA />
    </div>
  );
};