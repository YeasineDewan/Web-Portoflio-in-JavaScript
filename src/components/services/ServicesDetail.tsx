import { Card, CardBody, Button } from '@heroui/react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { Section, SectionHeading, stagger, fadeLeft, fadeRight } from '../utils/PageLayout';

const services = [
  {
    id: 'web-development',
    title: 'Full-Stack Web Development',
    description: 'End-to-end web application development with modern frameworks and best practices.',
    icon: 'lucide:code',
    color: 'primary',
    features: [
      'Modern frontend with React, Next.js, and responsive design',
      'Robust backend with Node.js, Express, and REST APIs',
      'Database design and implementation (MongoDB, MySQL, PostgreSQL)',
      'Security-first approach with built-in protections',
      'Performance optimization and SEO considerations',
      'Comprehensive testing and quality assurance',
    ],
    process: [
      { name: 'Discovery',    description: 'Understanding your requirements and goals' },
      { name: 'Planning',     description: 'Architecture design and technology selection' },
      { name: 'Development',  description: 'Iterative implementation with regular check-ins' },
      { name: 'Testing',      description: 'Comprehensive testing and quality assurance' },
      { name: 'Deployment',   description: 'Secure deployment and configuration' },
      { name: 'Maintenance',  description: 'Ongoing support and updates' },
    ],
  },
  {
    id: 'security-review',
    title: 'Security Review & Hardening',
    description: 'Comprehensive security audits and implementation of hardening measures.',
    icon: 'lucide:shield',
    color: 'success',
    features: [
      'Code review for security vulnerabilities',
      'Infrastructure security assessment',
      'Authentication and authorization review',
      'Data protection and encryption audit',
      'Implementation of security best practices',
      'Detailed reporting and remediation guidance',
    ],
    process: [
      { name: 'Assessment',            description: 'Initial security posture evaluation' },
      { name: 'Vulnerability Scanning', description: 'Automated and manual security testing' },
      { name: 'Analysis',              description: 'Detailed analysis of findings and risk assessment' },
      { name: 'Recommendations',       description: 'Prioritized security recommendations' },
      { name: 'Implementation',        description: 'Security hardening implementation' },
      { name: 'Verification',          description: 'Post-implementation testing and verification' },
    ],
  },
  {
    id: 'penetration-testing',
    title: 'Penetration Testing',
    description: 'Ethical hacking to identify and address security vulnerabilities.',
    icon: 'lucide:bug',
    color: 'danger',
    features: [
      'Web application penetration testing',
      'API security testing',
      'Authentication bypass attempts',
      'Injection attacks (SQL, NoSQL, XSS, CSRF)',
      'Security misconfiguration identification',
      'Detailed reporting with proof-of-concept',
    ],
    process: [
      { name: 'Scoping',               description: 'Defining the scope and objectives of the test' },
      { name: 'Reconnaissance',        description: 'Gathering information about the target' },
      { name: 'Vulnerability Analysis', description: 'Identifying potential vulnerabilities' },
      { name: 'Exploitation',          description: 'Attempting to exploit discovered vulnerabilities' },
      { name: 'Reporting',             description: 'Detailed documentation of findings and recommendations' },
      { name: 'Remediation Support',   description: 'Guidance on addressing identified issues' },
    ],
  },
  {
    id: 'server-setup',
    title: 'Server / Hosting Setup & Optimization',
    description: 'Secure server configuration, deployment, and maintenance.',
    icon: 'lucide:server',
    color: 'secondary',
    features: [
      'Server provisioning and configuration',
      'Web server setup (Nginx, Apache)',
      'SSL/TLS implementation',
      'CDN configuration and optimization',
      'Backup and recovery solutions',
      'Performance tuning and monitoring',
    ],
    process: [
      { name: 'Requirements Analysis', description: 'Understanding your hosting needs' },
      { name: 'Architecture Design',   description: 'Designing the optimal server architecture' },
      { name: 'Implementation',        description: 'Server provisioning and configuration' },
      { name: 'Security Hardening',    description: 'Implementing security best practices' },
      { name: 'Performance Tuning',    description: 'Optimizing for speed and reliability' },
      { name: 'Monitoring Setup',      description: 'Implementing monitoring and alerting' },
    ],
  },
  {
    id: 'seo-optimization',
    title: 'SEO & Technical Performance',
    description: 'Optimize your website for search engines and peak performance.',
    icon: 'lucide:search',
    color: 'warning',
    features: [
      'Technical SEO audit and implementation',
      'Performance optimization',
      'Core Web Vitals improvement',
      'Mobile optimization',
      'Structured data implementation',
      'Analytics setup and monitoring',
    ],
    process: [
      { name: 'Audit',                description: 'Comprehensive SEO and performance audit' },
      { name: 'Strategy',             description: 'Developing an optimization strategy' },
      { name: 'Implementation',       description: 'Implementing technical improvements' },
      { name: 'Content Optimization', description: 'Optimizing content for search engines' },
      { name: 'Monitoring',           description: 'Setting up tracking and analytics' },
      { name: 'Reporting',            description: 'Regular performance reporting' },
    ],
  },
];

export const ServicesDetail = () => {
  const reduce = useReducedMotion();

  return (
    <Section>
      <div className="container-custom">
        <SectionHeading
          badge="What I Offer"
          title="My "
          highlight="Services"
          description="A comprehensive range of services focused on building secure, high-performance web applications."
        />

        <div className="space-y-24">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={service.id}
                id={service.id}
                variants={reduce ? undefined : stagger(0.1)}
                initial={reduce ? undefined : 'hidden'}
                whileInView="show"
                viewport={{ once: true, margin: '-60px' }}
                className="scroll-mt-24"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${!isEven ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                  {/* Left: info */}
                  <motion.div variants={reduce ? undefined : (isEven ? fadeLeft : fadeRight)}>
                    <div className="flex items-center gap-4 mb-6">
                      <motion.div
                        className={`w-16 h-16 rounded-2xl bg-${service.color}-100 dark:bg-${service.color}-900/30 flex items-center justify-center`}
                        whileHover={reduce ? undefined : { rotate: [0, -10, 10, 0], transition: { duration: 0.4 } }}
                      >
                        <Icon icon={service.icon} className={`text-${service.color}-600 dark:text-${service.color}-400 text-2xl`} />
                      </motion.div>
                      <h3 className="text-2xl font-bold">{service.title}</h3>
                    </div>

                    <p className="text-lg text-foreground-600 dark:text-foreground-400 mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    <h4 className="text-lg font-semibold mb-4">What's Included</h4>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          initial={reduce ? undefined : { opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.07 }}
                          className="flex items-start gap-2.5 text-sm"
                        >
                          <Icon icon="lucide:check-circle" className={`text-${service.color}-500 mt-0.5 shrink-0`} />
                          <span className="text-foreground-600 dark:text-foreground-400">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <motion.div whileHover={reduce ? undefined : { scale: 1.04 }} whileTap={reduce ? undefined : { scale: 0.97 }}>
                      <Button
                        as={Link}
                        to="/contact"
                        color={service.color as any}
                        size="lg"
                        className="shimmer font-semibold"
                        startContent={<Icon icon="lucide:message-square" />}
                      >
                        Inquire About This Service
                      </Button>
                    </motion.div>
                  </motion.div>

                  {/* Right: process */}
                  <motion.div variants={reduce ? undefined : (isEven ? fadeRight : fadeLeft)}>
                    <Card className="border border-content3/50 shadow-lg">
                      <CardBody className="p-6 md:p-8">
                        <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                          <Icon icon="lucide:git-branch" className={`text-${service.color}-500`} />
                          My Process
                        </h4>

                        <div className="relative">
                          {/* Vertical line */}
                          <motion.div
                            className={`absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-${service.color}-400/60 via-content3 to-transparent`}
                            initial={reduce ? undefined : { scaleY: 0, originY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                          />

                          <div className="space-y-6">
                            {service.process.map((step, i) => (
                              <motion.div
                                key={i}
                                initial={reduce ? undefined : { opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                className="flex gap-4 relative"
                              >
                                <div className={`w-10 h-10 rounded-full bg-${service.color}-100 dark:bg-${service.color}-900/30 border-2 border-${service.color}-300 dark:border-${service.color}-700 flex items-center justify-center shrink-0 z-10`}>
                                  <span className={`text-xs font-bold text-${service.color}-600 dark:text-${service.color}-400`}>{i + 1}</span>
                                </div>
                                <div className="pb-2">
                                  <h5 className="font-semibold text-sm">{step.name}</h5>
                                  <p className="text-xs text-foreground-500 mt-0.5 leading-relaxed">{step.description}</p>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </motion.div>
                </div>

                {/* Divider between services */}
                {index < services.length - 1 && (
                  <div className="mt-16 section-divider" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};
