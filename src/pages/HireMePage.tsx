import { Button, Card, CardBody, Chip } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion, useReducedMotion } from 'framer-motion';
import { ContactForm } from '../components/contact/ContactForm';
import { PageBackground, PageHero, Section, SectionHeading, stagger, fadeUp, scaleIn } from '../components/utils/PageLayout';

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

export const HireMePage = () => {
  const reduce = useReducedMotion();

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

      {/* Process */}
      <Section>
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
                {/* Connector line */}
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

      {/* Contact */}
      <Section id="contact" className="bg-content2/30">
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
