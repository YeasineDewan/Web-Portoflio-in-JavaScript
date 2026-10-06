import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, Button } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion, useReducedMotion, useInView } from 'framer-motion';
import { Section, SectionHeading, stagger, fadeUp } from '../utils/PageLayout';

const skillCategories = [
  {
    name: 'Frontend',
    icon: 'lucide:layout',
    color: 'primary',
    skills: [
      { name: 'HTML/CSS', level: 90 },
      { name: 'React', level: 85 },
      { name: 'Next.js', level: 80 },
      { name: 'Tailwind CSS', level: 90 },
    ],
  },
  {
    name: 'Backend',
    icon: 'lucide:server',
    color: 'secondary',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express', level: 80 },
      { name: 'REST APIs', level: 85 },
      { name: 'Python', level: 60 },
    ],
  },
  {
    name: 'Security',
    icon: 'lucide:shield',
    color: 'danger',
    skills: [
      { name: 'Web Security', level: 90 },
      { name: 'Pen-testing', level: 85 },
      { name: 'Vulnerability Mgmt', level: 80 },
      { name: 'Risk Assessment', level: 75 },
    ],
  },
];

const colorMap: Record<string, string> = {
  primary:   'bg-primary',
  secondary: 'bg-secondary',
  danger:    'bg-danger',
};

function AnimatedBar({ value, color }: { value: number; color: string }) {
  const reduce = useReducedMotion();
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const barColor = colorMap[color] ?? 'bg-primary';

  return (
    <div ref={ref} className="h-1.5 w-full rounded-full bg-content3 overflow-hidden">
      <motion.div
        className={`h-full rounded-full ${barColor}`}
        initial={{ width: 0 }}
        animate={inView ? { width: `${value}%` } : { width: 0 }}
        transition={reduce ? { duration: 0 } : { duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      />
    </div>
  );
}

export const Skills = () => {
  const reduce = useReducedMotion();

  return (
    <Section className="bg-content2/50">
      <div className="container-custom">
        <motion.div
          variants={reduce ? undefined : stagger(0.1)}
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12"
        >
          <SectionHeading
            badge="Expertise"
            title="Core "
            highlight="Skills"
            description="My expertise spans frontend development, backend architecture, and cybersecurity practices."
            center={false}
          />
          <motion.div variants={reduce ? undefined : fadeUp}>
            <Button as={Link} to="/skills" color="primary" variant="flat" endContent={<Icon icon="lucide:arrow-right" />}>
              View All Skills
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          variants={reduce ? undefined : stagger(0.12)}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.name}
              variants={reduce ? undefined : fadeUp}
              whileHover={reduce ? undefined : { y: -6, transition: { duration: 0.25 } }}
              className="card-glow"
            >
              <Card className="h-full border border-content3/50">
                <CardBody className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <motion.div
                      className={`w-11 h-11 rounded-xl bg-${category.color}-100 dark:bg-${category.color}-900/30 flex items-center justify-center`}
                      whileHover={reduce ? undefined : { rotate: [0, -10, 10, 0], transition: { duration: 0.4 } }}
                    >
                      <Icon icon={category.icon} className={`text-${category.color}-600 dark:text-${category.color}-400 text-xl`} />
                    </motion.div>
                    <h3 className="text-xl font-semibold">{category.name}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between items-center mb-1.5">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className={`text-xs font-bold text-${category.color}-600 dark:text-${category.color}-400`}>
                            {skill.level}%
                          </span>
                        </div>
                        <AnimatedBar value={skill.level} color={category.color} />
                      </div>
                    ))}
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
