import { ProjectsGrid } from '../components/projects/ProjectsGrid';
import { Button } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { projects } from '../data/projects';
import { PageBackground, PageHero, Section, SectionHeading, fadeUp, stagger } from '../components/utils/PageLayout';

const stats = [
  { icon: 'lucide:folder-open', value: projects.length,                                    label: 'Projects Completed' },
  { icon: 'lucide:cpu',         value: new Set(projects.flatMap(p => p.tags)).size,         label: 'Technologies Used'  },
  { icon: 'lucide:globe',       value: projects.filter(p => p.liveUrl).length,              label: 'Live Projects'      },
  { icon: 'lucide:star',        value: projects.filter(p => p.featured).length,             label: 'Featured Projects'  },
];

const technologies = [
  'React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL',
  'MongoDB', 'AWS', 'Docker', 'GraphQL', 'Next.js', 'Express', 'Django',
];

export const ProjectsPage = () => (
  <PageBackground>
    <PageHero
      badge="Portfolio"
      title="My Projects "
      highlight="Portfolio"
      description="Explore my work — security-focused, performant, and built with modern technologies. Every project reflects my commitment to quality and clean code."
    >
      <Button as="a" href="#projects" color="primary" size="lg" startContent={<Icon icon="lucide:eye" />}>
        View Projects
      </Button>
      <Button as={RouterLink} to="/contact" variant="bordered" size="lg" startContent={<Icon icon="lucide:mail" />}>
        Hire Me
      </Button>
    </PageHero>

    {/* Stats */}
    <Section className="py-12">
      <div className="container-custom">
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-5"
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              className="flex flex-col items-center gap-2 rounded-2xl border border-primary/15 bg-content1/60 backdrop-blur-sm p-6 text-center hover:border-primary/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Icon icon={s.icon} className="text-2xl text-primary" />
              </div>
              <span className="text-3xl font-bold">{s.value}</span>
              <span className="text-sm text-foreground-500">{s.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>

    {/* Technologies */}
    <Section>
      <div className="container-custom">
        <SectionHeading
          badge="Stack"
          title="Technologies I "
          highlight="Work With"
          description="Modern tools and frameworks I use to build scalable, secure, and performant web applications."
        />
        <motion.div
          variants={stagger(0.04)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3"
        >
          {technologies.map((tech) => (
            <motion.span
              key={tech}
              variants={fadeUp}
              whileHover={{ scale: 1.08, y: -2 }}
              className="cursor-default rounded-full border border-primary/20 bg-primary/8 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/15"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </Section>

    {/* Projects grid */}
    <section id="projects">
      <ProjectsGrid />
    </section>

    {/* CTA */}
    <Section className="py-16">
      <div className="container-custom">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-content1 to-content2 p-10 text-center shadow-xl"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-primary/8 blur-3xl" />
          <h2 className="relative mb-4 text-3xl font-bold">Have a Project in Mind?</h2>
          <p className="relative mx-auto mb-8 max-w-xl text-foreground-500">
            Let's discuss your requirements and create something amazing together.
          </p>
          <div className="relative flex flex-wrap justify-center gap-4">
            <Button as={RouterLink} to="/contact" color="primary" size="lg" startContent={<Icon icon="lucide:mail" />}>
              Get In Touch
            </Button>
            <Button as={RouterLink} to="/hire-me" variant="bordered" size="lg" startContent={<Icon icon="lucide:user-plus" />}>
              Hire Me
            </Button>
          </div>
        </motion.div>
      </div>
    </Section>
  </PageBackground>
);
