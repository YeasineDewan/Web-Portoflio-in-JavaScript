import React from 'react';
import { Card, CardBody, Button } from '@heroui/react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const ServicesDetail = () => {
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
        'Comprehensive testing and quality assurance'
      ],
      process: [
        { name: 'Discovery', description: 'Understanding your requirements and goals' },
        { name: 'Planning', description: 'Architecture design and technology selection' },
        { name: 'Development', description: 'Iterative implementation with regular check-ins' },
        { name: 'Testing', description: 'Comprehensive testing and quality assurance' },
        { name: 'Deployment', description: 'Secure deployment and configuration' },
        { name: 'Maintenance', description: 'Ongoing support and updates' }
      ]
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
        'Detailed reporting and remediation guidance'
      ],
      process: [
        { name: 'Assessment', description: 'Initial security posture evaluation' },
        { name: 'Vulnerability Scanning', description: 'Automated and manual security testing' },
        { name: 'Analysis', description: 'Detailed analysis of findings and risk assessment' },
        { name: 'Recommendations', description: 'Prioritized security recommendations' },
        { name: 'Implementation', description: 'Security hardening implementation' },
        { name: 'Verification', description: 'Post-implementation testing and verification' }
      ]
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
        'Detailed reporting with proof-of-concept'
      ],
      process: [
        { name: 'Scoping', description: 'Defining the scope and objectives of the test' },
        { name: 'Reconnaissance', description: 'Gathering information about the target' },
        { name: 'Vulnerability Analysis', description: 'Identifying potential vulnerabilities' },
        { name: 'Exploitation', description: 'Attempting to exploit discovered vulnerabilities' },
        { name: 'Reporting', description: 'Detailed documentation of findings and recommendations' },
        { name: 'Remediation Support', description: 'Guidance on addressing identified issues' }
      ]
    },
    {
      id: 'server-setup',
      title: 'Server/Hosting Setup & Optimization',
      description: 'Secure server configuration, deployment, and maintenance.',
      icon: 'lucide:server',
      color: 'secondary',
      features: [
        'Server provisioning and configuration',
        'Web server setup (Nginx, Apache)',
        'SSL/TLS implementation',
        'CDN configuration and optimization',
        'Backup and recovery solutions',
        'Performance tuning and monitoring'
      ],
      process: [
        { name: 'Requirements Analysis', description: 'Understanding your hosting needs' },
        { name: 'Architecture Design', description: 'Designing the optimal server architecture' },
        { name: 'Implementation', description: 'Server provisioning and configuration' },
        { name: 'Security Hardening', description: 'Implementing security best practices' },
        { name: 'Performance Tuning', description: 'Optimizing for speed and reliability' },
        { name: 'Monitoring Setup', description: 'Implementing monitoring and alerting' }
      ]
    },
    {
      id: 'seo-optimization',
      title: 'SEO and Technical Performance',
      description: 'Optimize your website for search engines and performance.',
      icon: 'lucide:search',
      color: 'warning',
      features: [
        'Technical SEO audit and implementation',
        'Performance optimization',
        'Core Web Vitals improvement',
        'Mobile optimization',
        'Structured data implementation',
        'Analytics setup and monitoring'
      ],
      process: [
        { name: 'Audit', description: 'Comprehensive SEO and performance audit' },
        { name: 'Strategy', description: 'Developing an optimization strategy' },
        { name: 'Implementation', description: 'Implementing technical improvements' },
        { name: 'Content Optimization', description: 'Optimizing content for search engines' },
        { name: 'Monitoring', description: 'Setting up tracking and analytics' },
        { name: 'Reporting', description: 'Regular performance reporting' }
      ]
    }
  ];

  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">My Services</h2>
          <p className="text-foreground-500 max-w-2xl mx-auto">
            I offer a comprehensive range of services focused on building secure, high-performance web applications.
          </p>
        </div>

        <div className="space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="scroll-mt-24"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-14 h-14 rounded-full bg-${service.color}-100 dark:bg-${service.color}-900/30 flex items-center justify-center`}>
                      <Icon 
                        icon={service.icon} 
                        className={`text-${service.color}-600 dark:text-${service.color}-400 text-2xl`} 
                      />
                    </div>
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                  </div>
                  
                  <p className="text-lg text-foreground-600 dark:text-foreground-400 mb-8">
                    {service.description}
                  </p>
                  
                  <h4 className="text-xl font-semibold mb-4">What's Included</h4>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon icon="lucide:check-circle" className={`text-${service.color}-500 mt-1 flex-shrink-0`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button
                    as={Link}
                    to="/contact"
                    color={service.color as any}
                    size="lg"
                    startContent={<Icon icon="lucide:message-square" />}
                  >
                    Inquire About This Service
                  </Button>
                </div>
                
                <div>
                  <Card>
                    <CardBody className="p-6">
                      <h4 className="text-xl font-semibold mb-6">My Process</h4>
                      
                      <div className="space-y-8">
                        {service.process.map((step, i) => (
                          <div key={i} className="flex gap-4">
                            <div className="relative">
                              <div className={`w-10 h-10 rounded-full bg-${service.color}-100 dark:bg-${service.color}-900/30 flex items-center justify-center z-10 relative`}>
                                <span className={`text-${service.color}-600 dark:text-${service.color}-400 font-semibold`}>{i + 1}</span>
                              </div>
                              {i < service.process.length - 1 && (
                                <div className={`absolute top-10 left-1/2 h-full w-0.5 -translate-x-1/2 bg-${service.color}-100 dark:bg-${service.color}-900/30`}></div>
                              )}
                            </div>
                            <div className="flex-1 pb-8">
                              <h5 className="font-semibold text-lg">{step.name}</h5>
                              <p className="text-foreground-500">{step.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardBody>
                  </Card>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};