import React from 'react';
import { ProjectsGrid } from '../components/projects/ProjectsGrid';
import { Button, Card, CardBody } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';

export const ProjectsPage = () => {
  const stats = [
    {
      icon: 'lucide:folder-open',
      value: projects.length,
      label: 'Projects Completed',
      color: 'text-blue-500'
    },
    {
      icon: 'lucide:code',
      value: new Set(projects.flatMap(p => p.tags)).size,
      label: 'Technologies Used',
      color: 'text-green-500'
    },
    {
      icon: 'lucide:users',
      value: projects.filter(p => p.liveUrl).length,
      label: 'Live Projects',
      color: 'text-purple-500'
    },
    {
      icon: 'lucide:star',
      value: projects.filter(p => p.featured).length,
      label: 'Featured Projects',
      color: 'text-yellow-500'
    }
  ];

  const technologies = [
    'React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB',
    'AWS', 'Docker', 'GraphQL', 'Next.js', 'Express', 'Django'
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
        <div className="container-custom">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            My Projects Portfolio
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-foreground-600 dark:text-foreground-400 max-w-3xl mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Explore my portfolio of projects focused on security, performance, and user experience. Each project demonstrates my approach to building robust web applications with security at their core.
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
              href="#projects"
            >
              <Icon icon="lucide:eye" className="mr-2" />
              View Projects
            </Button>
            <Button
              variant="bordered"
              size="lg"
              className="hover:scale-105 transition-transform"
              as="a"
              href="/hire-me"
            >
              <Icon icon="lucide:user-plus" className="mr-2" />
              Hire Me
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Stats Section */}
      <section className="py-16 bg-content2/30">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardBody className="p-6">
                    <Icon icon={stat.icon} className={`text-3xl ${stat.color} mx-auto mb-3`} />
                    <div className="text-3xl font-bold mb-1">{stat.value}</div>
                    <div className="text-sm text-foreground-600 dark:text-foreground-400">{stat.label}</div>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Technologies I Work With</h2>
            <p className="text-lg text-foreground-600 dark:text-foreground-400 max-w-2xl mx-auto">
              I use modern technologies and frameworks to build scalable, secure, and performant web applications.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-3"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                className="px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-full text-sm font-medium transition-colors cursor-default"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <ProjectsGrid />
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
            <h2 className="text-3xl font-bold mb-4">Have a Project in Mind?</h2>
            <p className="text-lg text-foreground-600 dark:text-foreground-400 mb-8 max-w-2xl mx-auto">
              Let's discuss your requirements and create something amazing together. I can help bring your vision to life with secure, performant web applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                color="primary"
                size="lg"
                className="hover:scale-105 transition-transform"
                as="a"
                href="/hire-me"
              >
                <Icon icon="lucide:user-plus" className="mr-2" />
                Hire Me
              </Button>
              <Button
                variant="bordered"
                size="lg"
                className="hover:scale-105 transition-transform"
                as="a"
                href="/contact"
              >
                <Icon icon="lucide:mail" className="mr-2" />
                Get In Touch
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
