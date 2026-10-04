import { ContactForm } from '../components/contact/ContactForm';
import { Button } from '@heroui/react';
import { Icon } from '@iconify/react';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PageBackground, PageHero, Section, SectionHeading, fadeUp, stagger } from '../components/utils/PageLayout';

const services = [
  { icon: 'lucide:shield',   title: 'Security-First Development',  description: 'OWASP best practices and modern security standards baked into every line of code.' },
  { icon: 'lucide:zap',      title: 'Performance Optimization',    description: 'Blazing-fast Core Web Vitals and smooth UX through deep performance engineering.' },
  { icon: 'lucide:code-2',   title: 'Full-Stack Development',      description: 'Frontend to backend — complete web applications using modern frameworks.' },
  { icon: 'lucide:users',    title: 'Consultation & Code Review',  description: 'Expert architectural advice, code reviews, and strategic technical guidance.' },
];

const reasons = [
  { icon: 'lucide:award',      title: 'Proven Expertise',   description: 'Years of real-world experience in web development and cybersecurity.' },
  { icon: 'lucide:target',     title: 'Results-Driven',     description: 'Focused on delivering measurable outcomes aligned with your goals.' },
  { icon: 'lucide:clock',      title: 'Timely Delivery',    description: 'Clear communication and efficient workflow — always on schedule.' },
  { icon: 'lucide:headphones', title: 'Ongoing Support',    description: 'Post-launch support and maintenance to keep everything running.' },
];

export const ContactPage = () => (
  <PageBackground>
    <PageHero
      badge="Let's Talk"
      title="Build Something "
      highlight="Amazing"
      description="Ready to bring your vision to life? Whether it's a new application, a security audit, or expert consultation — let's make it happen."
    >
      <Button as="a" href="#contact-form" color="primary" size="lg" startContent={<Icon icon="lucide:mail" />}>
        Send Message
      </Button>
      <Button as={RouterLink} to="/projects" variant="bordered" size="lg" startContent={<Icon icon="lucide:eye" />}>
        View My Work
      </Button>
    </PageHero>

    {/* How I can help */}
    <Section>
      <div className="container-custom">
        <SectionHeading
          badge="Services"
          title="How I Can "
          highlight="Help You"
          description="Specialised services tailored to build secure, performant, and scalable web applications."
        />
        <motion.div
          variants={stagger(0.1)}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="group flex items-start gap-4 rounded-2xl border border-divider bg-content1/60 backdrop-blur-sm p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                <Icon icon={s.icon} className="text-2xl text-primary" />
              </div>
              <div>
                <h3 className="mb-1.5 text-lg font-semibold">{s.title}</h3>
                <p className="text-sm leading-relaxed text-foreground-500">{s.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>

    {/* Why choose me */}
    <Section className="bg-content2/30">
      <div className="container-custom">
        <SectionHeading
          badge="Why Me"
          title="Why "
          highlight="Choose Me?"
          description="What sets me apart and ensures your project's success."
        />
        <motion.div
          variants={stagger(0.1)}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {reasons.map((r) => (
            <motion.div
              key={r.title}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="flex flex-col items-center text-center rounded-2xl border border-divider bg-content1/60 backdrop-blur-sm p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <Icon icon={r.icon} className="text-2xl text-primary" />
              </div>
              <h3 className="mb-2 font-semibold">{r.title}</h3>
              <p className="text-sm leading-relaxed text-foreground-500">{r.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>

    {/* Contact form */}
    <Section id="contact-form">
      <div className="container-custom max-w-4xl">
        <SectionHeading
          badge="Contact"
          title="Get In "
          highlight="Touch"
          description="Ready to start? Let's discuss your requirements and how I can help bring your vision to life."
        />
        <motion.div variants={fadeUp}>
          <ContactForm />
        </motion.div>
      </div>
    </Section>
  </PageBackground>
);
