import React from 'react';
import { Card, CardBody } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion, useReducedMotion, useInView } from 'framer-motion';
import { stagger, fadeUp } from '../utils/PageLayout';

const skillCategories = [
  {
    name: 'Frontend',
    icon: 'lucide:layout',
    color: 'primary',
    skills: [
      { name: 'HTML', level: 95 }, { name: 'CSS', level: 90 }, { name: 'Bootstrap', level: 90 },
      { name: 'Tailwind CSS', level: 90 }, { name: 'JavaScript', level: 85 }, { name: 'React', level: 85 },
      { name: 'Next.js', level: 80 }, { name: 'Responsive Design', level: 90 },
    ],
  },
  {
    name: 'Backend',
    icon: 'lucide:server',
    color: 'secondary',
    skills: [
      { name: 'Node.js', level: 85 }, { name: 'Express', level: 80 },
      { name: 'REST APIs', level: 85 }, { name: 'Python', level: 60 },
    ],
  },
  {
    name: 'Databases',
    icon: 'lucide:database',
    color: 'success',
    skills: [
      { name: 'MongoDB', level: 85 }, { name: 'MySQL', level: 80 }, { name: 'PostgreSQL', level: 75 },
      { name: 'Data Modeling', level: 80 }, { name: 'Query Optimization', level: 75 },
    ],
  },
  {
    name: 'Security & Infrastructure',
    icon: 'lucide:shield',
    color: 'danger',
    skills: [
      { name: 'Web Security', level: 90 }, { name: 'Vulnerability Management', level: 85 },
      { name: 'Penetration Testing', level: 85 }, { name: 'Risk Management', level: 80 },
      { name: 'Security Auditing', level: 85 }, { name: 'Network Security', level: 80 },
      { name: 'Firewall Configuration', level: 75 }, { name: 'SSL/TLS', level: 85 },
      { name: 'CDN', level: 80 }, { name: 'Domain/DNS', level: 85 },
      { name: 'Server Administration', level: 80 }, { name: 'Backup & Recovery', level: 85 },
      { name: 'Performance Optimization', level: 80 }, { name: 'Compliance', level: 75 },
    ],
  },
  {
    name: 'Tools & DevOps',
    icon: 'lucide:tool',
    color: 'warning',
    skills: [
      { name: 'Git/GitHub', level: 90 }, { name: 'Linux', level: 85 },
      { name: 'Nginx/Apache', level: 80 }, { name: 'CI/CD', level: 70 },
    ],
  },
  {
    name: 'Digital Marketing',
    icon: 'lucide:megaphone',
    color: 'primary',
    skills: [
      { name: 'SEO', level: 80 }, { name: 'PPC', level: 75 }, { name: 'Social Media', level: 80 },
      { name: 'Content Marketing', level: 75 }, { name: 'Email Marketing', level: 70 },
    ],
  },
];

const colorMap: Record<string, string> = {
  primary:   'bg-primary',
  secondary: 'bg-secondary',
  success:   'bg-success',
  danger:    'bg-danger',
  warning:   'bg-warning',
};

function AnimatedBar({ value, color }: { value: number; color: string }) {
  const reduce = useReducedMotion();
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const barColor = colorMap[color] ?? 'bg-primary';

  return (
    <div ref={ref} className="h-2 w-full rounded-full bg-content3 overflow-hidden">
      <motion.div
        className={`h-full rounded-full ${barColor}`}
        initial={{ width: 0 }}
        animate={inView ? { width: `${value}%` } : { width: 0 }}
        transition={reduce ? { duration: 0 } : { duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      />
    </div>
  );
}

export const SkillsGrid = () => {
  const reduce = useReducedMotion();

  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="space-y-16">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.name}
              initial={reduce ? undefined : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: catIdx * 0.05 }}
            >
              {/* Category header */}
              <div className="flex items-center gap-4 mb-8">
                <motion.div
                  className={`w-14 h-14 rounded-2xl bg-${category.color}-100 dark:bg-${category.color}-900/30 flex items-center justify-center`}
                  whileHover={reduce ? undefined : { rotate: [0, -10, 10, 0], transition: { duration: 0.4 } }}
                >
                  <Icon icon={category.icon} className={`text-${category.color}-600 dark:text-${category.color}-400 text-2xl`} />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold">{category.name}</h3>
                  <p className="text-sm text-foreground-500">{category.skills.length} skills</p>
                </div>
              </div>

              {/* Skills grid */}
              <motion.div
                variants={reduce ? undefined : stagger(0.06)}
                initial={reduce ? undefined : 'hidden'}
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={reduce ? undefined : fadeUp}
                    whileHover={reduce ? undefined : { y: -3, transition: { duration: 0.2 } }}
                    className="card-glow"
                  >
                    <Card className="border border-content3/50">
                      <CardBody className="p-4">
                        <div className="flex justify-between items-center mb-2.5">
                          <span className="font-medium text-sm">{skill.name}</span>
                          <motion.span
                            className={`text-xs font-bold text-${category.color}-600 dark:text-${category.color}-400`}
                            initial={reduce ? undefined : { opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                          >
                            {skill.level}%
                          </motion.span>
                        </div>
                        <AnimatedBar value={skill.level} color={category.color} />
                      </CardBody>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
