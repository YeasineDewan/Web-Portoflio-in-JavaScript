import React from 'react';
import { Card, CardBody } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Section, SectionHeading, stagger, fadeUp } from '../utils/PageLayout';

const skillCategories = [
  {
    name: 'Frontend',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'Responsive Design'],
    icon: 'lucide:layout',
    color: 'primary',
  },
  {
    name: 'Backend',
    skills: ['Node.js', 'Express', 'REST APIs', 'Python basics'],
    icon: 'lucide:server',
    color: 'secondary',
  },
  {
    name: 'Database',
    skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Data Modeling', 'Query Optimization'],
    icon: 'lucide:database',
    color: 'success',
  },
  {
    name: 'Security',
    skills: ['Web Security', 'Vulnerability Management', 'Penetration Testing', 'Risk Assessment', 'SSL/TLS'],
    icon: 'lucide:shield',
    color: 'danger',
  },
  {
    name: 'DevOps',
    skills: ['Git/GitHub', 'Linux', 'Nginx/Apache', 'CI/CD basics', 'Server Admin'],
    icon: 'lucide:terminal',
    color: 'warning',
  },
];

export const SkillsCarousel = () => {
  const reduce = useReducedMotion();
  const [activeIndex, setActiveIndex] = React.useState(0);
  const active = skillCategories[activeIndex];

  return (
    <Section className="bg-content2/40">
      <div className="container-custom">
        <SectionHeading
          badge="Expertise"
          title="My "
          highlight="Skills"
          description="Full-stack expertise with a special focus on security and performance optimization."
        />

        {/* Tab buttons */}
        <motion.div
          variants={reduce ? undefined : stagger(0.07)}
          className="flex justify-center mb-8"
        >
          <div className="flex flex-wrap justify-center gap-2">
            {skillCategories.map((cat, index) => (
              <motion.button
                key={cat.name}
                variants={reduce ? undefined : fadeUp}
                aria-pressed={activeIndex === index}
                onClick={() => setActiveIndex(index)}
                whileHover={reduce ? undefined : { scale: 1.05 }}
                whileTap={reduce ? undefined : { scale: 0.97 }}
                className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeIndex === index
                    ? `bg-${cat.color}-100 text-${cat.color}-700 dark:bg-${cat.color}-900/30 dark:text-${cat.color}-400 shadow-md`
                    : 'bg-content3/50 text-foreground-500 hover:bg-content3'
                }`}
              >
                <Icon icon={cat.icon} className="inline-block mr-1.5 text-sm" />
                {cat.name}
                {activeIndex === index && (
                  <motion.div
                    layoutId="tab-indicator"
                    className={`absolute inset-0 rounded-full bg-${cat.color}-100 dark:bg-${cat.color}-900/30 -z-10`}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Skill panel */}
        <div className="overflow-x-clip">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.name}
              initial={reduce ? undefined : { opacity: 0, x: 20, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={reduce ? undefined : { opacity: 0, x: -20, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <Card className={`border-l-4 border-${active.color} shadow-lg`}>
                <CardBody className="p-6 md:p-8">
                  <div className="flex items-center gap-4 mb-8">
                    <motion.div
                      className={`w-14 h-14 rounded-2xl bg-${active.color}-100 dark:bg-${active.color}-900/30 flex items-center justify-center`}
                      animate={reduce ? undefined : { rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon icon={active.icon} className={`text-${active.color}-600 dark:text-${active.color}-400 text-2xl`} />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold">{active.name}</h3>
                      <p className="text-sm text-foreground-500">{active.skills.length} skills</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {active.skills.map((skill, i) => (
                      <motion.div
                        key={skill}
                        initial={reduce ? undefined : { opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05, duration: 0.3 }}
                        whileHover={reduce ? undefined : { scale: 1.05, y: -2 }}
                        className={`p-3 rounded-xl bg-${active.color}-50/60 dark:bg-${active.color}-900/10 border border-${active.color}-100 dark:border-${active.color}-900/20 text-center cursor-default transition-shadow hover:shadow-md`}
                      >
                        <span className="font-medium text-sm">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
};
