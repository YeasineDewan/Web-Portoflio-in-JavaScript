import React from 'react';
import { ContactForm } from '../components/contact/ContactForm';
import { Button, Card, CardBody, Chip } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

export const ContactPage = () => {
  const services = [
    {
      icon: 'lucide:shield',
      title: 'Security-First Development',
      description: 'Build applications with security at the core, implementing OWASP best practices and modern security standards.'
    },
    {
      icon: 'lucide:zap',
      title: 'Performance Optimization',
      description: 'Optimize your web applications for speed, ensuring excellent Core Web Vitals and user experience.'
    },
    {
      icon: 'lucide:code',
      title: 'Full-Stack Development',
      description: 'Complete web application development from frontend to backend, using modern technologies and frameworks.'
    },
    {
      icon: 'lucide:users',
      title: 'Consultation & Code Review',
      description: 'Get expert advice on your projects, code reviews, and architectural decisions for better outcomes.'
    }
  ];

  const whyHireMe = [
    {
      icon: 'lucide:award',
      title: 'Proven Expertise',
      description: 'Years of experience in web development with a focus on security and performance.'
    },
    {
      icon: 'lucide:target',
      title: 'Results-Driven',
      description: 'Committed to delivering high-quality solutions that meet your business objectives.'
    },
    {
      icon: 'lucide:clock',
      title: 'Timely Delivery',
      description: 'Efficient workflow and clear communication to ensure projects are delivered on time.'
    },
    {
      icon: 'lucide:headphones',
      title: 'Ongoing Support',
      description: 'Continued support and maintenance to keep your applications running smoothly.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <motion.div
        className="py-16 bg-gradient-to-br from-primary/10 via-secondary/5 to-background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container-custom">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let's Build Something Amazing Together
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-foreground-600 dark:text-foreground-400 max-w-3xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Ready to bring your vision to life? Whether you need a new web application, want to enhance your existing platform, or require expert consultation, I'm here to help you succeed.
          </motion.p>
        </div>
      </motion.div>

      {/* Services Section */}
      <section className="py-16">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">How I Can Help You</h2>
            <p className="text-lg text-foreground-600 dark:text-foreground-400 max-w-2xl mx-auto">
              Specialized services tailored to help you build secure, performant, and scalable web applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardBody className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon icon={service.icon} className="text-2xl text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                        <p className="text-foreground-600 dark:text-foreground-400">{service.description}</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Hire Me Section */}
      <section className="py-16 bg-content2/30">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Why Choose Me?</h2>
            <p className="text-lg text-foreground-600 dark:text-foreground-400 max-w-2xl mx-auto">
              What sets me apart and ensures your project's success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyHireMe.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="p-4 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors mx-auto w-fit mb-4">
                  <Icon icon={reason.icon} className="text-3xl text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
                <p className="text-sm text-foreground-600 dark:text-foreground-400">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container-custom max-w-4xl">
          <motion.div
            className="text-center mb-12"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <p className="text-lg text-foreground-600 dark:text-foreground-400">
              Ready to start your project? Let's discuss your requirements and how I can help bring your vision to life.
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container-custom text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-foreground-600 dark:text-foreground-400 mb-8 max-w-2xl mx-auto">
              Let's schedule a free consultation to discuss your project and explore how we can work together to achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                color="primary"
                size="lg"
                className="hover:scale-105 transition-transform"
                as="a"
                href="#contact-form"
              >
                <Icon icon="lucide:mail" className="mr-2" />
                Send Message
              </Button>
              <Button
                variant="bordered"
                size="lg"
                className="hover:scale-105 transition-transform"
                as="a"
                href="/projects"
              >
                <Icon icon="lucide:eye" className="mr-2" />
                View My Work
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
