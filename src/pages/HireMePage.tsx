import React from 'react';
import { Button, Card, CardBody, Chip } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { ContactForm } from '../components/contact/ContactForm';

export const HireMePage = () => {
  const pricingPlans = [
    {
      name: 'Consultation',
      price: 'Free',
      duration: '30 min',
      features: [
        'Project assessment',
        'Technical advice',
        'Architecture recommendations',
        '30-minute call'
      ],
      popular: false,
      icon: 'lucide:message-circle'
    },
    {
      name: 'Project Development',
      price: '$50',
      duration: 'per hour',
      features: [
        'Full-stack development',
        'Security implementation',
        'Performance optimization',
        'Code review & testing',
        'Deployment & maintenance'
      ],
      popular: true,
      icon: 'lucide:code'
    },
    {
      name: 'Ongoing Support',
      price: '$30',
      duration: 'per hour',
      features: [
        'Bug fixes & updates',
        'Performance monitoring',
        'Security patches',
        'Feature enhancements',
        'Technical support'
      ],
      popular: false,
      icon: 'lucide:shield-check'
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Discovery',
      description: 'We discuss your project requirements, goals, and technical needs.',
      icon: 'lucide:search'
    },
    {
      step: 2,
      title: 'Planning',
      description: 'I create a detailed project plan with timeline, milestones, and deliverables.',
      icon: 'lucide:clipboard-list'
    },
    {
      step: 3,
      title: 'Development',
      description: 'I build your application using modern technologies and best practices.',
      icon: 'lucide:code-2'
    },
    {
      step: 4,
      title: 'Testing & Launch',
      description: 'Thorough testing, security audit, and smooth deployment to production.',
      icon: 'lucide:rocket'
    },
    {
      step: 5,
      title: 'Support',
      description: 'Ongoing maintenance, updates, and support to keep your app running smoothly.',
      icon: 'lucide:headphones'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <motion.div
        className="py-20 bg-gradient-to-br from-primary/10 via-secondary/5 to-background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container-custom text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hire Me for Your Next Project
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-foreground-600 dark:text-foreground-400 max-w-3xl mx-auto mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Get expert web development services with a focus on security, performance, and user experience. Let's turn your ideas into reality.
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button
              color="primary"
              size="lg"
              className="hover:scale-105 transition-transform mr-4"
              as="a"
              href="#pricing"
            >
              <Icon icon="lucide:dollar-sign" className="mr-2" />
              View Pricing
            </Button>
            <Button
              variant="bordered"
              size="lg"
              className="hover:scale-105 transition-transform"
              as="a"
              href="#contact"
            >
              <Icon icon="lucide:mail" className="mr-2" />
              Get In Touch
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Process Section */}
      <section className="py-16">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">My Process</h2>
            <p className="text-lg text-foreground-600 dark:text-foreground-400 max-w-2xl mx-auto">
              A streamlined approach to delivering high-quality web applications that meet your business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-primary/20 transition-colors">
                    <Icon icon={step.icon} className="text-2xl text-primary" />
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-primary/20 -translate-y-1/2" style={{ width: 'calc(100vw / 5 - 4rem)' }} />
                  )}
                </div>
                <div className="bg-primary/5 rounded-lg p-4 hover:bg-primary/10 transition-colors">
                  <div className="text-sm font-semibold text-primary mb-2">Step {step.step}</div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-foreground-600 dark:text-foreground-400">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-content2/30">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Pricing Plans</h2>
            <p className="text-lg text-foreground-600 dark:text-foreground-400 max-w-2xl mx-auto">
              Transparent pricing for all your web development needs. Choose the plan that fits your project.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`h-full relative group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${plan.popular ? 'border-primary' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Chip color="primary" variant="solid" size="sm">Most Popular</Chip>
                    </div>
                  )}
                  <CardBody className="p-6">
                    <div className="text-center mb-6">
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors w-fit mx-auto mb-4">
                        <Icon icon={plan.icon} className="text-3xl text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                      <div className="text-3xl font-bold text-primary mb-1">{plan.price}</div>
                      <div className="text-sm text-foreground-500">{plan.duration}</div>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3">
                          <Icon icon="lucide:check" className="text-green-500 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      color={plan.popular ? "primary" : "default"}
                      variant={plan.popular ? "solid" : "bordered"}
                      className="w-full hover:scale-105 transition-transform"
                      as="a"
                      href="#contact"
                    >
                      Get Started
                    </Button>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">What Clients Say</h2>
            <p className="text-lg text-foreground-600 dark:text-foreground-400 max-w-2xl mx-auto">
              Don't just take my word for it. Here's what previous clients have to say about working with me.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: 'Sarah Johnson',
                role: 'CEO, TechStart Inc.',
                content: 'Yeasine delivered an exceptional e-commerce platform that exceeded our expectations. His attention to security and performance is outstanding.',
                rating: 5
              },
              {
                name: 'Michael Chen',
                role: 'CTO, DataFlow Solutions',
                content: 'Working with Yeasine was a game-changer for our startup. He built a scalable SaaS platform that handles thousands of users seamlessly.',
                rating: 5
              },
              {
                name: 'Emily Rodriguez',
                role: 'Product Manager, InnovateCorp',
                content: 'The web application Yeasine developed for us is not only beautiful but also incredibly secure and performant. Highly recommended!',
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardBody className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Icon key={i} icon="lucide:star" className="text-yellow-500 w-5 h-5" />
                      ))}
                    </div>
                    <p className="text-foreground-600 dark:text-foreground-400 mb-4 italic">
                      "{testimonial.content}"
                    </p>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-foreground-500">{testimonial.role}</div>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container-custom max-w-4xl">
          <motion.div
            className="text-center mb-12"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-lg text-foreground-600 dark:text-foreground-400">
              Let's discuss your requirements and create something amazing together. Get a free consultation today.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </div>
  );
};
