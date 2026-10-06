import { Card, CardBody } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion, useReducedMotion } from 'framer-motion';
import { Section, SectionHeading, fadeUp } from '../utils/PageLayout';

const experiences = [
  {
    company: 'Medigo Healthcare',
    role: 'IT Officer & Radiologist',
    period: '25 January, 2026 - 05 July, 2026',
    address: 'Bangla Motor, Dhaka',
    achievements: [
      'Assisted with radiology imaging operations',
      'Supported doctors, healthcare professionals, and patient services',
      'Managed website development and maintenance',
      'Handled social media management and digital presence',
      'Provided administrative and technical IT support',
    ],
    icon: 'lucide:hospital',
    color: 'danger',
  },
  {
    company: 'Wave 3 Limited',
    role: 'Lead Web Developer',
    period: '01 February 2025 – 15 January 2026',
    address: '',
    achievements: [
      'Built and maintained secure web apps end-to-end; led code reviews and team rituals',
      'Ownership of security oversight, vulnerability management, penetration testing',
      'Managed hosting, servers, databases, domains, CDN, and SSL/TLS',
      'Implemented backup/recovery, performance tuning, and compliance practices',
    ],
    icon: 'lucide:briefcase',
    color: 'primary',
  },
  {
    company: 'Cantonment Election Commission',
    role: 'Data Entry Officer',
    period: 'Apr 2024 – Feb 2025',
    address: '',
    achievements: [
      'Accurate bilingual data entry (English/Bangla), verification, confidentiality, and on-time completion',
    ],
    icon: 'lucide:database',
    color: 'secondary',
  },
  {
    company: 'Sesame Street',
    role: 'Event Management',
    period: 'Nov 2023 – Jan 2024',
    address: '',
    achievements: ['Logistics and on-site coordination, cross-team communication'],
    icon: 'lucide:calendar',
    color: 'success',
  },
  {
    company: 'Shirt Bazar',
    role: 'Computer Operator',
    period: 'May 2023 – Oct 2023',
    address: '',
    achievements: ['Data entry supervision and system operation'],
    icon: 'lucide:laptop',
    color: 'warning',
  },
];

export const Experience = () => {
  const reduce = useReducedMotion();

  return (
    <Section>
      <div className="container-custom">
        <SectionHeading
          badge="Work History"
          title="Professional "
          highlight="Experience"
          description="A track record of delivering secure, high-quality solutions across diverse industries."
        />

        <div className="relative">
          {/* Timeline line */}
          <motion.div
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/60 via-content3 to-transparent -translate-x-1/2 hidden md:block"
            initial={reduce ? undefined : { scaleY: 0, originY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${index}`}
                variants={reduce ? undefined : fadeUp}
                initial={reduce ? undefined : 'hidden'}
                whileInView="show"
                viewport={{ once: true, margin: '-50px' }}
                className="relative"
              >
                <div className={`md:flex ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 z-10 hidden md:flex">
                    <motion.div
                      className={`w-10 h-10 rounded-full bg-content1 border-4 border-${exp.color}-400 flex items-center justify-center shadow-lg timeline-dot-pulse`}
                      whileHover={reduce ? undefined : { scale: 1.2 }}
                    >
                      <Icon icon={exp.icon} className={`text-${exp.color}-500 text-sm`} />
                    </motion.div>
                  </div>

                  {/* Card */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-14' : 'md:pl-14'} pl-12 md:pl-0 relative`}>
                    {/* Mobile dot */}
                    <div className={`absolute left-0 top-6 w-8 h-8 rounded-full bg-content1 border-4 border-${exp.color}-400 flex md:hidden items-center justify-center`}>
                      <div className={`w-2.5 h-2.5 rounded-full bg-${exp.color}-500`} />
                    </div>

                    <motion.div
                      whileHover={reduce ? undefined : { y: -4, transition: { duration: 0.2 } }}
                      className="card-glow"
                    >
                      <Card className="overflow-hidden border border-content3/50">
                        <CardBody className="p-6">
                          {/* Header */}
                          <div className="flex items-start gap-3 mb-4">
                            <div className={`w-11 h-11 rounded-xl bg-${exp.color}-100 dark:bg-${exp.color}-900/30 flex items-center justify-center shrink-0`}>
                              <Icon icon={exp.icon} className={`text-${exp.color}-600 dark:text-${exp.color}-400 text-xl`} />
                            </div>
                            <div className="min-w-0">
                              <h3 className="text-lg font-bold leading-tight">{exp.role}</h3>
                              <p className={`text-${exp.color}-600 dark:text-${exp.color}-400 font-medium text-sm`}>{exp.company}</p>
                              {exp.address && (
                                <div className="flex items-center gap-1 mt-0.5">
                                  <Icon icon="lucide:map-pin" className="text-xs text-foreground-400" />
                                  <span className="text-xs text-foreground-500">{exp.address}</span>
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Period badge */}
                          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-content3/60 text-sm mb-4">
                            <Icon icon="lucide:calendar" className="text-foreground-400 text-xs" />
                            <span className="text-foreground-600">{exp.period}</span>
                          </div>

                          {/* Achievements */}
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, i) => (
                              <motion.li
                                key={i}
                                initial={reduce ? undefined : { opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                className="flex items-start gap-2 text-sm"
                              >
                                <Icon icon="lucide:check-circle" className={`text-${exp.color}-500 mt-0.5 shrink-0`} />
                                <span className="text-foreground-600 dark:text-foreground-400">{achievement}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </CardBody>
                      </Card>
                    </motion.div>
                  </div>

                  <div className="md:w-1/2 hidden md:block" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
