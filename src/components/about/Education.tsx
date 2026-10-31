import { Card, CardBody } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion, useReducedMotion } from 'framer-motion';
import { Section, SectionHeading, stagger, fadeUp } from '../utils/PageLayout';

const educations = [
  {
    degree: 'BSc in CSE',
    institution: 'Daffodil International University (DIU)',
    period: '2021 - 2025',
    grade: 'CGPA 3.16',
    icon: 'lucide:graduation-cap',
    color: 'primary',
    description: 'Computer Science & Engineering with focus on software development and cybersecurity.',
  },
  {
    degree: 'HSC (Science)',
    institution: 'BIC College',
    period: '2018 - 2020',
    grade: 'GPA 5.00',
    icon: 'lucide:book-open',
    color: 'secondary',
    description: 'Higher Secondary Certificate in Science stream with perfect GPA.',
  },
  {
    degree: 'SSC (Science)',
    institution: 'Monipur Uccha Biddalaya & College',
    period: '2016 - 2018',
    grade: 'GPA 5.00',
    icon: 'lucide:book',
    color: 'success',
    description: 'Secondary School Certificate in Science stream with perfect GPA.',
  },
];

export const Education = () => {
  const reduce = useReducedMotion();

  return (
    <Section className="bg-content2/40">
      <div className="container-custom">
        <SectionHeading
          badge="Academic Background"
          title="My "
          highlight="Education"
          description="Academic foundation that shaped my technical expertise and problem-solving mindset."
        />

        <motion.div
          variants={reduce ? undefined : stagger(0.15)}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {educations.map((edu) => (
            <motion.div
              key={edu.degree}
              variants={reduce ? undefined : fadeUp}
              whileHover={reduce ? undefined : { y: -8, transition: { duration: 0.25 } }}
              className="card-glow"
            >
              <Card className="h-full overflow-hidden border border-content3/50">
                <CardBody className="p-6">
                  {/* Icon with pulse ring */}
                  <div className="relative w-14 h-14 mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-${edu.color}-100 dark:bg-${edu.color}-900/30 flex items-center justify-center`}>
                      <Icon icon={edu.icon} className={`text-${edu.color}-600 dark:text-${edu.color}-400 text-2xl`} />
                    </div>
                    <motion.div
                      className={`absolute inset-0 rounded-2xl border-2 border-${edu.color}-400/40`}
                      animate={reduce ? undefined : { scale: [1, 1.25, 1], opacity: [0.6, 0, 0.6] }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                    />
                  </div>

                  <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                  <p className={`text-${edu.color}-600 dark:text-${edu.color}-400 font-medium text-sm mb-3`}>{edu.institution}</p>
                  <p className="text-foreground-500 text-sm mb-5 leading-relaxed">{edu.description}</p>

                  <div className="space-y-2 mt-auto">
                    <div className="flex items-center gap-2 text-sm">
                      <Icon icon="lucide:calendar" className="text-foreground-400 shrink-0" />
                      <span className="text-foreground-600">{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Icon icon="lucide:award" className={`text-${edu.color}-500 shrink-0`} />
                      <span className={`font-semibold text-${edu.color}-600 dark:text-${edu.color}-400`}>{edu.grade}</span>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};
