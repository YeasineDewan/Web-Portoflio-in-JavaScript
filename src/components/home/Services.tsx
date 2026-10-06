import { Link } from 'react-router-dom';
import { Card, CardBody, Button } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion, useReducedMotion } from 'framer-motion';
import { Section, SectionHeading, stagger, fadeUp } from '../utils/PageLayout';

const services = [
  {
    id: 'web-development',
    title: 'Full-Stack Web Development',
    description: 'End-to-end web application development with modern frameworks and best practices.',
    icon: 'lucide:code',
    color: 'primary',
    gradient: 'from-primary-500/20 to-primary-600/5',
  },
  {
    id: 'security-review',
    title: 'Security Review & Hardening',
    description: 'Comprehensive security audits and implementation of hardening measures.',
    icon: 'lucide:shield',
    color: 'success',
    gradient: 'from-success-500/20 to-success-600/5',
  },
  {
    id: 'penetration-testing',
    title: 'Penetration Testing',
    description: 'Ethical hacking to identify and address security vulnerabilities.',
    icon: 'lucide:bug',
    color: 'danger',
    gradient: 'from-danger-500/20 to-danger-600/5',
  },
  {
    id: 'server-setup',
    title: 'Server/Hosting Setup',
    description: 'Secure server configuration, deployment, and maintenance.',
    icon: 'lucide:server',
    color: 'secondary',
    gradient: 'from-secondary-500/20 to-secondary-600/5',
  },
];

export const Services = () => {
  const reduce = useReducedMotion();

  return (
    <Section withOrbs>
      <div className="container-custom">
        <SectionHeading
          badge="What I Do"
          title="My "
          highlight="Services"
          description="A range of services focused on building secure, high-performance web applications."
        />

        <motion.div
          variants={reduce ? undefined : stagger(0.12)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={reduce ? undefined : fadeUp}
              whileHover={reduce ? undefined : { y: -8, transition: { duration: 0.25 } }}
              className="card-glow"
            >
              <Card className="h-full overflow-hidden border border-content3/50">
                <CardBody className="p-6 flex flex-col items-center text-center relative overflow-hidden">
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                  {/* Animated icon */}
                  <motion.div
                    className={`relative w-16 h-16 rounded-2xl bg-${service.color}-100 dark:bg-${service.color}-900/30 flex items-center justify-center mb-5`}
                    whileHover={reduce ? undefined : { rotate: [0, -10, 10, 0], transition: { duration: 0.4 } }}
                  >
                    <Icon
                      icon={service.icon}
                      className={`text-${service.color}-600 dark:text-${service.color}-400 text-3xl`}
                    />
                    {/* Pulse ring */}
                    <motion.div
                      className={`absolute inset-0 rounded-2xl border-2 border-${service.color}-400/40`}
                      animate={reduce ? undefined : { scale: [1, 1.2, 1], opacity: [0.6, 0, 0.6] }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                    />
                  </motion.div>

                  <h3 className="text-lg font-semibold mb-3 relative">{service.title}</h3>
                  <p className="text-foreground-500 mb-6 flex-grow text-sm leading-relaxed relative">{service.description}</p>
                  <Button
                    as={Link}
                    to={`/services#${service.id}`}
                    color={service.color as any}
                    variant="flat"
                    fullWidth
                    className="relative"
                  >
                    Learn More
                  </Button>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={reduce ? undefined : fadeUp}
          className="mt-12 text-center"
        >
          <Button
            as={Link}
            to="/services"
            color="primary"
            size="lg"
            className="shimmer font-semibold shadow-lg shadow-primary/20"
            endContent={<Icon icon="lucide:arrow-right" />}
          >
            View All Services
          </Button>
        </motion.div>
      </div>
    </Section>
  );
};
