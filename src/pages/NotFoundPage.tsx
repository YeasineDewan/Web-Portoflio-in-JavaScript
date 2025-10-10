import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@heroui/react';
import { Icon } from '@iconify/react';

export const NotFoundPage = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16">
      <div className="container-custom text-center">
        <div className="mb-8 relative">
          <div className="text-9xl font-bold text-primary-100 dark:text-primary-900/30">404</div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Icon icon="lucide:file-x" className="text-6xl text-primary" />
          </div>
        </div>
        
        <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
        <p className="text-lg text-foreground-500 mb-8 max-w-md mx-auto">
          The page you are looking for doesn't exist or has been moved.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            as={Link}
            to="/"
            color="primary"
            size="lg"
            startContent={<Icon icon="lucide:home" />}
          >
            Go to Homepage
          </Button>
          <Button
            as={Link}
            to="/contact"
            variant="bordered"
            size="lg"
            startContent={<Icon icon="lucide:message-square" />}
          >
            Contact Me
          </Button>
        </div>
      </div>
    </div>
  );
};