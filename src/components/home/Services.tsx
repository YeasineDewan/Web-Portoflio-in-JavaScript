import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, Button } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

export const Services = () => {
  const services = [
    {
      id: 'web-development',
      title: 'Full-Stack Web Development',
      description: 'End-to-end web application development with modern frameworks and best practices.',
      icon: 'lucide:code',
      color: 'primary'
    },
    {
      id: 'security-review',
      title: 'Security Review & Hardening',
      description: 'Comprehensive security audits and implementation of hardening measures.',
      icon: 'lucide:shield',
      color: 'success'
    },
    {
      id: 'penetration-testing',
      title: 'Penetration Testing',
      description: 'Ethical hacking to identify and address security vulnerabilities.',
      icon: 'lucide:bug',
      color: 'danger'
    },
    {
      id: 'server-setup',
      title: 'Server/Hosting Setup',
      description: 'Secure server configuration, deployment, and maintenance.',
      icon: 'lucide:server',
      color: 'secondary'
    }
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">My Services</h2>
          <p className="text-foreground-500 max-w-2xl mx-auto">
            I offer a range of services focused on building secure, high-performance web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="h-full card-hover">
                <CardBody className="p-6 flex flex-col items-center text-center">
                  <div className={`w-14 h-14 rounded-full bg-${service.color}-100 dark:bg-${service.color}-900/30 flex items-center justify-center mb-5`}>
                    <Icon 
                      icon={service.icon} 
                      className={`text-${service.color}-600 dark:text-${service.color}-400 text-2xl`} 
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-foreground-500 mb-6 flex-grow">{service.description}</p>
                  <Button
                    as={Link}
                    to={`/services#${service.id}`}
                    color={service.color as any}
                    variant="flat"
                    fullWidth
                  >
                    Learn More
                  </Button>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            as={Link}
            to="/services"
            color="primary"
            size="lg"
            endContent={<Icon icon="lucide:arrow-right" />}
          >
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};