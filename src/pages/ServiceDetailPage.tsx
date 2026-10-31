import { useParams, Link, Redirect } from 'react-router-dom';
import { Button, Card, CardBody, Chip, Accordion, AccordionItem } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion, useReducedMotion } from 'framer-motion';
import { getServiceById } from '../data/services';
import { PageBackground, FloatingOrbs, fadeUp, fadeLeft, fadeRight, stagger } from '../components/utils/PageLayout';

export const ServiceDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = getServiceById(slug);
  const reduce = useReducedMotion();

  if (!service) return <Redirect to="/services" />;

  const colorMap: Record<string, string> = {
    primary: 'text-primary bg-primary/10 border-primary/30',
    success: 'text-success bg-success/10 border-success/30',
    danger: 'text-danger bg-danger/10 border-danger/30',
    secondary: 'text-secondary bg-secondary/10 border-secondary/30',
    warning: 'text-warning bg-warning/10 border-warning/30',
  };
  const iconBg: Record<string, string> = {
    primary: 'bg-primary/10 text-primary',
    success: 'bg-success/10 text-success',
    danger: 'bg-danger/10 text-danger',
    secondary: 'bg-secondary/10 text-secondary',
    warning: 'bg-warning/10 text-warning',
  };
  const ringColor: Record<string, string> = {
    primary: 'ring-primary/30',
    success: 'ring-success/30',
    danger: 'ring-danger/30',
    secondary: 'ring-secondary/30',
    warning: 'ring-warning/30',
  };
  const borderColor: Record<string, string> = {
    primary: 'border-primary/40',
    success: 'border-success/40',
    danger: 'border-danger/40',
    secondary: 'border-secondary/40',
    warning: 'border-warning/40',
  };
  const gradientBtn: Record<string, string> = {
    primary: 'from-primary-500 to-primary-700',
    success: 'from-success-500 to-success-700',
    danger: 'from-danger-500 to-danger-700',
    secondary: 'from-secondary-500 to-secondary-700',
    warning: 'from-warning-500 to-warning-700',
  };

  const c = service.color;

  return (
    <PageBackground>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <FloatingOrbs />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
          style={{
            backgroundImage: `linear-gradient(rgba(220,38,38,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(220,38,38,0.5) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        {/* Colour blob */}
        <div className={`pointer-events-none absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-gradient-to-br ${service.heroGradient} blur-3xl`} />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <div className="container-custom relative">
          {/* Breadcrumb */}
          <motion.div
            variants={reduce ? undefined : fadeUp}
            initial={reduce ? undefined : 'hidden'}
            animate="show"
            className="mb-8 flex items-center gap-2 text-sm text-foreground-500"
          >
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <Icon icon="lucide:chevron-right" className="text-xs" />
            <Link to="/services" className="hover:text-foreground transition-colors">Services</Link>
            <Icon icon="lucide:chevron-right" className="text-xs" />
            <span className={`text-${c}`}>{service.title}</span>
          </motion.div>

          <motion.div
            variants={reduce ? undefined : stagger(0.12)}
            initial={reduce ? undefined : 'hidden'}
            animate="show"
            className="max-w-3xl"
          >
            <motion.div variants={reduce ? undefined : fadeUp} className="mb-5">
              <span className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-widest ${colorMap[c]}`}>
                <Icon icon={service.icon} className="text-sm" />
                Service
              </span>
            </motion.div>

            <motion.h1
              variants={reduce ? undefined : fadeUp}
              className="mb-4 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl"
            >
              {service.title}
            </motion.h1>

            <motion.p
              variants={reduce ? undefined : fadeUp}
              className={`mb-3 text-xl font-medium text-${c}`}
            >
              {service.tagline}
            </motion.p>

            <motion.p
              variants={reduce ? undefined : fadeUp}
              className="mb-8 max-w-2xl text-lg leading-relaxed text-foreground-500"
            >
              {service.description}
            </motion.p>

            <motion.div variants={reduce ? undefined : fadeUp} className="flex flex-wrap gap-3">
              <Button
                as={Link}
                to={`/contact?service=${service.id}`}
                color={c as any}
                size="lg"
                className="font-semibold shimmer"
                startContent={<Icon icon="lucide:message-square" />}
              >
                Get a Free Quote
              </Button>
              <Button
                as={Link}
                to="/services"
                variant="bordered"
                size="lg"
                className="font-semibold"
                startContent={<Icon icon="lucide:arrow-left" />}
              >
                All Services
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Tech Stack Pills ─────────────────────────────────────────────── */}
      <section className="py-6 border-y border-content3/40 bg-content1/40 backdrop-blur-sm">
        <div className="container-custom">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-foreground-400 mr-2">Tools & Tech:</span>
            {service.techStack.map((tech) => (
              <Chip key={tech} size="sm" variant="flat" color={c as any} className="text-xs font-medium">
                {tech}
              </Chip>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ─────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-24">
        <div className="container-custom">
          <motion.div
            variants={reduce ? undefined : stagger(0.1)}
            initial={reduce ? undefined : 'hidden'}
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
          >
            <motion.div variants={reduce ? undefined : fadeUp} className="mb-12 text-center">
              <span className={`mb-3 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-widest ${colorMap[c]}`}>
                <span className={`h-1.5 w-1.5 rounded-full bg-${c}`} />
                What's Included
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                Everything You Need
              </h2>
              <p className="mt-3 mx-auto max-w-xl text-foreground-500">
                A comprehensive set of deliverables designed to give you real, measurable results.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.features.map((feat, i) => (
                <motion.div
                  key={i}
                  variants={reduce ? undefined : fadeUp}
                  whileHover={reduce ? undefined : { y: -6, transition: { duration: 0.22 } }}
                >
                  <Card className={`h-full border ${borderColor[c]} hover:shadow-lg transition-shadow`}>
                    <CardBody className="p-6">
                      <div className={`mb-4 w-12 h-12 rounded-xl flex items-center justify-center ${iconBg[c]}`}>
                        <Icon icon={feat.icon} className="text-xl" />
                      </div>
                      <h3 className="font-semibold text-base mb-2">{feat.title}</h3>
                      <p className="text-sm text-foreground-500 leading-relaxed">{feat.description}</p>
                    </CardBody>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-24 bg-content1/30">
        <div className="container-custom">
          <motion.div
            variants={reduce ? undefined : stagger(0.1)}
            initial={reduce ? undefined : 'hidden'}
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
          >
            <motion.div variants={reduce ? undefined : fadeUp} className="mb-12 text-center">
              <span className={`mb-3 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-widest ${colorMap[c]}`}>
                <span className={`h-1.5 w-1.5 rounded-full bg-${c}`} />
                How It Works
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">My Process</h2>
              <p className="mt-3 mx-auto max-w-xl text-foreground-500">
                A structured, transparent workflow so you always know what's happening and what's next.
              </p>
            </motion.div>

            <div className="relative max-w-4xl mx-auto">
              {/* Connector line */}
              <div className="hidden md:block absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-content3 to-transparent" />

              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {service.process.map((step, i) => (
                  <motion.div
                    key={i}
                    variants={reduce ? undefined : fadeUp}
                    className="flex flex-col items-center text-center relative"
                  >
                    <motion.div
                      className={`relative z-10 w-20 h-20 rounded-2xl flex flex-col items-center justify-center mb-4 border-2 ${borderColor[c]} ${iconBg[c]} ring-4 ${ringColor[c]}`}
                      whileHover={reduce ? undefined : { scale: 1.08, transition: { duration: 0.2 } }}
                    >
                      <Icon icon={step.icon} className="text-2xl mb-1" />
                      <span className="text-[10px] font-bold opacity-60">{String(i + 1).padStart(2, '0')}</span>
                    </motion.div>
                    <h4 className="font-semibold text-sm mb-1">{step.name}</h4>
                    <p className="text-xs text-foreground-500 leading-relaxed">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Pricing ──────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-24">
        <div className="container-custom">
          <motion.div
            variants={reduce ? undefined : stagger(0.12)}
            initial={reduce ? undefined : 'hidden'}
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
          >
            <motion.div variants={reduce ? undefined : fadeUp} className="mb-12 text-center">
              <span className={`mb-3 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-widest ${colorMap[c]}`}>
                <span className={`h-1.5 w-1.5 rounded-full bg-${c}`} />
                Pricing
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Transparent Pricing</h2>
              <p className="mt-3 mx-auto max-w-xl text-foreground-500">
                All prices in Bangladeshi Taka (BDT). Custom quotes available for unique requirements.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {service.pricing.map((tier, i) => (
                <motion.div
                  key={i}
                  variants={reduce ? undefined : fadeUp}
                  whileHover={reduce ? undefined : { y: -8, transition: { duration: 0.25 } }}
                  className="relative"
                >
                  {tier.highlighted && (
                    <div className={`absolute -top-4 inset-x-0 flex justify-center z-10`}>
                      <span className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1 text-xs font-bold text-white bg-gradient-to-r ${gradientBtn[c]} shadow-lg`}>
                        <Icon icon="lucide:star" className="text-xs" />
                        {tier.badge}
                      </span>
                    </div>
                  )}
                  <Card
                    className={`h-full border-2 transition-all duration-300 ${
                      tier.highlighted
                        ? `${borderColor[c]} shadow-xl shadow-${c}/10`
                        : 'border-content3/50'
                    }`}
                  >
                    <CardBody className="p-7 flex flex-col">
                      {/* Tier header */}
                      <div className="mb-6">
                        <h3 className="text-xl font-bold mb-1">{tier.name}</h3>
                        <p className="text-sm text-foreground-500 mb-4">{tier.description}</p>
                        <div className="flex items-end gap-1">
                          <span className="text-4xl font-extrabold tracking-tight">{tier.price}</span>
                          <span className="text-foreground-400 text-sm mb-1.5">/ {tier.period}</span>
                        </div>
                      </div>

                      {/* Divider */}
                      <div className={`h-px w-full mb-6 bg-gradient-to-r from-transparent ${tier.highlighted ? `via-${c}/40` : 'via-content3'} to-transparent`} />

                      {/* Features */}
                      <ul className="space-y-3 flex-grow mb-8">
                        {tier.features.map((feat, fi) => (
                          <li key={fi} className="flex items-start gap-2.5 text-sm">
                            <Icon icon="lucide:check-circle-2" className={`text-${c} mt-0.5 shrink-0 text-base`} />
                            <span className="text-foreground-600 dark:text-foreground-400">{feat}</span>
                          </li>
                        ))}
                      </ul>

                      <Button
                        as={Link}
                        to={`/contact?service=${service.id}&tier=${tier.name}`}
                        color={tier.highlighted ? (c as any) : 'default'}
                        variant={tier.highlighted ? 'solid' : 'bordered'}
                        fullWidth
                        size="lg"
                        className={`font-semibold ${tier.highlighted ? 'shimmer' : ''}`}
                        endContent={<Icon icon="lucide:arrow-right" />}
                      >
                        Get Started
                      </Button>
                    </CardBody>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Custom quote note */}
            <motion.div variants={reduce ? undefined : fadeUp} className="mt-10 text-center">
              <p className="text-foreground-500 text-sm">
                Need something custom?{' '}
                <Link to="/contact" className={`text-${c} font-semibold hover:underline`}>
                  Let's talk about your project →
                </Link>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Deliverables ─────────────────────────────────────────────────── */}
      <section className="py-16 bg-content1/30">
        <div className="container-custom">
          <motion.div
            variants={reduce ? undefined : stagger(0.08)}
            initial={reduce ? undefined : 'hidden'}
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div variants={reduce ? undefined : fadeLeft}>
                <span className={`mb-3 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-widest ${colorMap[c]}`}>
                  <span className={`h-1.5 w-1.5 rounded-full bg-${c}`} />
                  Deliverables
                </span>
                <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl mb-4">
                  What You'll Receive
                </h2>
                <p className="text-foreground-500 mb-6 leading-relaxed">
                  Every engagement comes with clear, documented outputs so you have everything you need to move forward confidently.
                </p>
                <ul className="space-y-3">
                  {service.deliverables.map((d, i) => (
                    <motion.li
                      key={i}
                      variants={reduce ? undefined : fadeUp}
                      className="flex items-center gap-3"
                    >
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${iconBg[c]}`}>
                        <Icon icon="lucide:package" className="text-sm" />
                      </div>
                      <span className="text-sm font-medium">{d}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div variants={reduce ? undefined : fadeRight}>
                <Card className={`border-2 ${borderColor[c]} overflow-hidden`}>
                  <CardBody className="p-0">
                    <div className={`bg-gradient-to-br ${service.heroGradient} p-6 border-b border-content3/40`}>
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${iconBg[c]} mb-4`}>
                        <Icon icon={service.icon} className="text-2xl" />
                      </div>
                      <h3 className="text-lg font-bold mb-1">{service.title}</h3>
                      <p className="text-sm text-foreground-500">{service.tagline}</p>
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="flex items-center gap-3">
                        <Icon icon="lucide:clock" className={`text-${c} shrink-0`} />
                        <div>
                          <p className="text-xs text-foreground-400 font-medium uppercase tracking-wide">Response Time</p>
                          <p className="text-sm font-semibold">Within 24 hours</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Icon icon="lucide:shield-check" className={`text-${c} shrink-0`} />
                        <div>
                          <p className="text-xs text-foreground-400 font-medium uppercase tracking-wide">NDA Available</p>
                          <p className="text-sm font-semibold">Yes, on request</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Icon icon="lucide:refresh-cw" className={`text-${c} shrink-0`} />
                        <div>
                          <p className="text-xs text-foreground-400 font-medium uppercase tracking-wide">Revisions</p>
                          <p className="text-sm font-semibold">Included in all packages</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Icon icon="lucide:credit-card" className={`text-${c} shrink-0`} />
                        <div>
                          <p className="text-xs text-foreground-400 font-medium uppercase tracking-wide">Payment</p>
                          <p className="text-sm font-semibold">50% upfront, 50% on delivery</p>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-24">
        <div className="container-custom max-w-3xl">
          <motion.div
            variants={reduce ? undefined : stagger(0.1)}
            initial={reduce ? undefined : 'hidden'}
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
          >
            <motion.div variants={reduce ? undefined : fadeUp} className="mb-10 text-center">
              <span className={`mb-3 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-widest ${colorMap[c]}`}>
                <span className={`h-1.5 w-1.5 rounded-full bg-${c}`} />
                FAQ
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Common Questions</h2>
            </motion.div>

            <motion.div variants={reduce ? undefined : fadeUp}>
              <Accordion variant="splitted" className="gap-3">
                {service.faqs.map((faq, i) => (
                  <AccordionItem
                    key={i}
                    aria-label={faq.question}
                    title={<span className="font-semibold text-sm">{faq.question}</span>}
                    className="border border-content3/50 rounded-xl"
                    indicator={<Icon icon="lucide:chevron-down" />}
                  >
                    <p className="text-sm text-foreground-500 leading-relaxed pb-2">{faq.answer}</p>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-24">
        <div className="container-custom">
          <motion.div
            variants={reduce ? undefined : stagger(0.12)}
            initial={reduce ? undefined : 'hidden'}
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
          >
            <Card className={`border-2 ${borderColor[c]} overflow-hidden max-w-4xl mx-auto`}>
              <CardBody className="p-0">
                <div className={`relative bg-gradient-to-br ${service.heroGradient} p-10 md:p-14 text-center overflow-hidden`}>
                  <div className="pointer-events-none absolute inset-0 opacity-[0.04]"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0,0,0,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.8) 1px, transparent 1px)`,
                      backgroundSize: '40px 40px',
                    }}
                  />
                  <motion.div variants={reduce ? undefined : fadeUp} className="relative">
                    <div className={`mx-auto mb-6 w-16 h-16 rounded-2xl flex items-center justify-center ${iconBg[c]}`}>
                      <Icon icon={service.icon} className="text-3xl" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                      Ready to get started?
                    </h2>
                    <p className="text-foreground-500 mb-8 max-w-xl mx-auto text-lg leading-relaxed">
                      Let's discuss your project. I'll respond within 24 hours with a tailored proposal.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                      <Button
                        as={Link}
                        to={`/contact?service=${service.id}`}
                        color={c as any}
                        size="lg"
                        className="font-semibold shimmer px-8"
                        startContent={<Icon icon="lucide:message-square" />}
                      >
                        Inquire About This Service
                      </Button>
                      <Button
                        as={Link}
                        to="/services"
                        variant="bordered"
                        size="lg"
                        className="font-semibold px-8"
                        startContent={<Icon icon="lucide:grid" />}
                      >
                        View All Services
                      </Button>
                    </div>
                  </motion.div>
                </div>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </section>
    </PageBackground>
  );
};
