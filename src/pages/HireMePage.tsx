import { useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { Button, Card, CardBody, Chip, Accordion, AccordionItem } from '@heroui/react';
import { ContactForm } from '../components/contact/ContactForm';
import { Experience } from '../components/about/Experience';
import {
  PageBackground,
  PageHero,
  Section,
  SectionHeading,
  stagger,
  fadeUp,
  scaleIn,
  CountUp,
} from '../components/utils/PageLayout';

const pricingPlans = [
  {
    name: 'Consultation',
    price: 'Free',
    duration: '30 min',
    features: ['Project assessment', 'Technical advice', 'Architecture recommendations', '30-minute call'],
    popular: false,
    icon: 'lucide:message-circle',
    color: 'secondary',
  },
  {
    name: 'Project Development',
    price: '$50',
    duration: 'per hour',
    features: ['Full-stack development', 'Security implementation', 'Performance optimization', 'Code review & testing', 'Deployment & maintenance'],
    popular: true,
    icon: 'lucide:code',
    color: 'primary',
  },
  {
    name: 'Ongoing Support',
    price: '$30',
    duration: 'per hour',
    features: ['Bug fixes & updates', 'Performance monitoring', 'Security patches', 'Feature enhancements', 'Technical support'],
    popular: false,
    icon: 'lucide:shield-check',
    color: 'success',
  },
];

const processSteps = [
  { step: 1, title: 'Discovery',    description: 'We discuss your project requirements, goals, and technical needs.',                          icon: 'lucide:search' },
  { step: 2, title: 'Planning',     description: 'I create a detailed project plan with timeline, milestones, and deliverables.',              icon: 'lucide:clipboard-list' },
  { step: 3, title: 'Development',  description: 'I build your application using modern technologies and best practices.',                     icon: 'lucide:code-2' },
  { step: 4, title: 'Testing',      description: 'Thorough testing, security audit, and smooth deployment to production.',                     icon: 'lucide:rocket' },
  { step: 5, title: 'Support',      description: 'Ongoing maintenance, updates, and support to keep your app running smoothly.',               icon: 'lucide:headphones' },
];

const testimonials = [
  { name: 'Sarah Johnson',   role: 'CEO, TechStart Inc.',        content: 'Yeasine delivered an exceptional e-commerce platform that exceeded our expectations. His attention to security and performance is outstanding.', rating: 5 },
  { name: 'Michael Chen',    role: 'CTO, DataFlow Solutions',    content: 'Working with Yeasine was a game-changer for our startup. He built a scalable SaaS platform that handles thousands of users seamlessly.',        rating: 5 },
  { name: 'Emily Rodriguez', role: 'Product Manager, InnovateCorp', content: 'The web application Yeasine developed for us is not only beautiful but also incredibly secure and performant. Highly recommended!',        rating: 5 },
];

const skillBadges = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL',
  'Tailwind CSS', 'JavaScript', 'Python', 'Docker', 'Nginx', 'Git', 'Linux',
  'Penetration Testing', 'Web Security', 'SSL/TLS', 'CDN', 'SEO', 'REST APIs',
];

const faqs = [
  {
    question: 'What is your typical project timeline?',
    answer: 'Timelines vary based on project complexity. A simple landing page takes 1-2 weeks, while a full-stack application may take 4-12 weeks. I provide detailed timelines during our initial consultation.',
  },
  {
    question: 'Do you offer maintenance after launch?',
    answer: 'Yes, I offer ongoing support and maintenance packages to keep your application secure, up-to-date, and performing optimally after launch.',
  },
  {
    question: 'What technologies do you specialize in?',
    answer: 'I specialize in the MERN stack (MongoDB, Express, React, Node.js), Next.js, TypeScript, Tailwind CSS, and have deep expertise in web security, penetration testing, and DevOps practices.',
  },
  {
    question: 'How do you handle project communication?',
    answer: 'I maintain regular communication through email, WhatsApp, and weekly progress calls. You\'ll receive updates at every milestone and have direct access to me throughout the project.',
  },
  {
    question: 'What are your payment terms?',
    answer: 'I typically work with a 30% upfront deposit, 40% at the midpoint, and 30% upon completion. For ongoing support, payments are billed monthly or per session.',
  },
  {
    question: 'Can you work with existing codebases?',
    answer: 'Absolutely. I have extensive experience working with legacy codebases, performing security audits, refactoring, and adding new features to existing applications.',
  },
];

const stats = [
  { value: 3, suffix: '+', label: 'Years Experience' },
  { value: 15, suffix: '+', label: 'Projects Completed' },
  { value: 99, suffix: '%', label: 'Client Satisfaction' },
  { value: 24, suffix: '/7', label: 'Support Available' },
];

export const HireMePage = () => {
  const reduce = useReducedMotion();
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee || reduce) return;

    let animationId: number;
    let position = 0;
    const speed = 0.5;

    const animate = () => {
      position -= speed;
      if (position <= -marquee.scrollWidth / 2) {
        position = 0;
      }
      marquee.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [reduce]);

  return (
    <PageBackground>
      <PageHero
        badge="Let's Work Together"
        title="Hire Me for Your "
        highlight="Next Project"
        description="Get expert web development services with a focus on security, performance, and user experience. Let's turn your ideas into reality."
      >
        <Button as="a" href="#pricing" color="primary" size="lg" startContent={<Icon icon="lucide:dollar-sign" />}>
          View Pricing
        </Button>
        <Button as="a" href="#contact" variant="bordered" size="lg" startContent={<Icon icon="lucide:mail" />}>
          Get In Touch
        </Button>
      </PageHero>

      {/* Stats */}
      <Section className="bg-content2/30 border-y border-divider">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                variants={reduce ? undefined : fadeUp}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-black text-primary mb-2">
                  <CountUp to={stat.value} suffix={stat.suffix} duration={2} />
                </div>
                <p className="text-sm md:text-base text-foreground-500 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Skills Marquee */}
      <Section>
        <div className="container-custom mb-12">
          <SectionHeading
            badge="Tech Stack"
            title="Skills & "
            highlight="Technologies"
            description="A comprehensive toolkit for building secure, high-performance web applications."
          />
        </div>
        <div className="relative overflow-hidden py-4">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
          <div ref={marqueeRef} className="flex gap-4 whitespace-nowrap will-change-transform" style={{ width: 'max-content' }}>
            {[...skillBadges, ...skillBadges].map((skill, i) => (
              <Chip
                key={i}
                variant="flat"
                color={i % 3 === 0 ? 'primary' : i % 3 === 1 ? 'secondary' : 'success'}
                className="h-10 px-4 text-sm font-semibold border border-divider"
              >
                {skill}
              </Chip>
            ))}
          </div>
        </div>
      </Section>

      {/* Process */}
      <Section className="bg-content2/30">
        <div className="container-custom">
          <SectionHeading
            badge="How It Works"
            title="My "
            highlight="Process"
            description="A streamlined approach to delivering high-quality web applications that meet your business needs."
          />
          <motion.div
            variants={reduce ? undefined : stagger(0.1)}
            className="grid grid-cols-1 md:grid-cols-5 gap-6"
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                variants={reduce ? undefined : fadeUp}
                className="relative text-center group"
              >
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] right-[-50%] h-px bg-gradient-to-r from-primary/40 to-transparent z-0" />
                )}
                <motion.div
                  className="relative z-10 w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-primary/20 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-300"
                  whileHover={reduce ? undefined : { scale: 1.1, rotate: 5 }}
                >
                  <Icon icon={step.icon} className="text-2xl text-primary" />
                  <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-primary text-white text-[10px] font-bold flex items-center justify-center">
                    {step.step}
                  </span>
                </motion.div>
                <div className="rounded-xl border border-divider bg-content1/60 backdrop-blur-sm p-4 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-base font-semibold mb-1.5">{step.title}</h3>
                  <p className="text-xs text-foreground-500 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* Experience */}
      <Experience />

      {/* Pricing */}
      <Section id="pricing" className="bg-content2/30">
        <div className="container-custom">
          <SectionHeading
            badge="Transparent Pricing"
            title="Pricing "
            highlight="Plans"
            description="Transparent pricing for all your web development needs. Choose the plan that fits your project."
          />
          <motion.div
            variants={reduce ? undefined : stagger(0.12)}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start"
          >
            {pricingPlans.map((plan) => (
              <motion.div
                key={plan.name}
                variants={reduce ? undefined : scaleIn}
                whileHover={reduce ? undefined : { y: -8, transition: { duration: 0.25 } }}
                className={`relative card-glow ${plan.popular ? 'md:-mt-4' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 inset-x-0 flex justify-center z-10">
                    <Chip color="primary" variant="solid" size="sm" className="shadow-lg shadow-primary/30">
                      Most Popular
                    </Chip>
                  </div>
                )}
                <Card className={`h-full overflow-hidden ${plan.popular ? 'border-2 border-primary shadow-xl shadow-primary/10' : 'border border-content3/50'}`}>
                  <CardBody className="p-7">
                    <div className="text-center mb-6">
                      <motion.div
                        className={`w-16 h-16 rounded-2xl bg-${plan.color}-100 dark:bg-${plan.color}-900/30 flex items-center justify-center mx-auto mb-4`}
                        animate={reduce ? undefined : { rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                      >
                        <Icon icon={plan.icon} className={`text-${plan.color}-600 dark:text-${plan.color}-400 text-2xl`} />
                      </motion.div>
                      <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                      <div className={`text-4xl font-black text-${plan.color}-600 dark:text-${plan.color}-400 mb-1`}>{plan.price}</div>
                      <div className="text-sm text-foreground-500">{plan.duration}</div>
                    </div>

                    <ul className="space-y-3 mb-7">
                      {plan.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          initial={reduce ? undefined : { opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.06 }}
                          className="flex items-center gap-3 text-sm"
                        >
                          <Icon icon="lucide:check-circle" className="text-success-500 shrink-0" />
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <Button
                      color={plan.popular ? 'primary' : 'default'}
                      variant={plan.popular ? 'solid' : 'bordered'}
                      fullWidth
                      as="a"
                      href="#contact"
                      className={plan.popular ? 'shimmer font-semibold shadow-lg shadow-primary/25' : 'font-semibold'}
                    >
                      Get Started
                    </Button>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section>
        <div className="container-custom">
          <SectionHeading
            badge="Client Reviews"
            title="What Clients "
            highlight="Say"
            description="Don't just take my word for it. Here's what previous clients have to say about working with me."
          />
          <motion.div
            variants={reduce ? undefined : stagger(0.12)}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                variants={reduce ? undefined : fadeUp}
                whileHover={reduce ? undefined : { y: -6, transition: { duration: 0.25 } }}
                className="card-glow"
              >
                <Card className="h-full border border-content3/50">
                  <CardBody className="p-6">
                    <div className="flex gap-0.5 mb-4">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <motion.div
                          key={j}
                          initial={reduce ? undefined : { opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: j * 0.08 + i * 0.1 }}
                        >
                          <Icon icon="lucide:star" className="text-warning-500 w-4 h-4" />
                        </motion.div>
                      ))}
                    </div>
                    <p className="text-foreground-600 dark:text-foreground-400 mb-5 italic text-sm leading-relaxed">
                      "{t.content}"
                    </p>
                    <div className="flex items-center gap-3 mt-auto">
                      <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon icon="lucide:user" className="text-primary text-sm" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm">{t.name}</div>
                        <div className="text-xs text-foreground-500">{t.role}</div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-content2/30">
        <div className="container-custom max-w-4xl">
          <SectionHeading
            badge="FAQ"
            title="Frequently Asked "
            highlight="Questions"
            description="Everything you need to know about working with me. Can't find the answer? Reach out directly."
          />
          <motion.div variants={reduce ? undefined : fadeUp}>
            <Accordion variant="splitted" className="gap-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  aria-label={faq.question}
                  title={
                    <span className="font-semibold text-sm md:text-base">{faq.question}</span>
                  }
                  classNames={{
                    title: 'text-left',
                    trigger: 'px-5 py-4 bg-content1/60 border border-content3/50 hover:border-primary/30 rounded-xl',
                    content: 'px-5 pb-4 text-foreground-500 text-sm leading-relaxed',
                  }}
                >
                  {faq.answer}
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact">
        <div className="container-custom max-w-4xl">
          <SectionHeading
            badge="Start a Project"
            title="Ready to "
            highlight="Get Started?"
            description="Let's discuss your requirements and create something amazing together. Get a free consultation today."
          />
          <motion.div variants={reduce ? undefined : fadeUp}>
            <ContactForm />
          </motion.div>
        </div>
      </Section>
    </PageBackground>
  );
};
