import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, Progress, Button } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

export const Skills = () => {
  const skillCategories = [
    {
      name: 'Frontend',
      icon: 'lucide:layout',
      color: 'primary',
      skills: [
        { name: 'HTML/CSS', level: 90 },
        { name: 'React', level: 85 },
        { name: 'Next.js', level: 80 },
        { name: 'Tailwind CSS', level: 90 }
      ]
    },
    {
      name: 'Backend',
      icon: 'lucide:server',
      color: 'secondary',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express', level: 80 },
        { name: 'REST APIs', level: 85 },
        { name: 'Python', level: 60 }
      ]
    },
    {
      name: 'Security',
      icon: 'lucide:shield',
      color: 'success',
      skills: [
        { name: 'Web Security', level: 90 },
        { name: 'Pen-testing', level: 85 },
        { name: 'Vulnerability Management', level: 80 },
        { name: 'Risk Assessment', level: 75 }
      ]
    }
  ];

  return (
    <section className="section-padding bg-content2/50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">Core Skills</h2>
            <p className="text-foreground-500 max-w-2xl">
              My expertise spans frontend development, backend architecture, and cybersecurity practices.
            </p>
          </div>
          <Button
            as={Link}
            to="/skills"
            color="primary"
            variant="flat"
            endContent={<Icon icon="lucide:arrow-right" />}
          >
            View All Skills
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardBody className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-10 h-10 rounded-full bg-${category.color}-100 dark:bg-${category.color}-900/30 flex items-center justify-center`}>
                      <Icon 
                        icon={category.icon} 
                        className={`text-${category.color}-600 dark:text-${category.color}-400 text-xl`} 
                      />
                    </div>
                    <h3 className="text-xl font-semibold">{category.name}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-xs text-foreground-500">{skill.level}%</span>
                        </div>
                        <Progress 
                          aria-label={`${skill.name} skill level`}
                          value={skill.level} 
                          color={category.color as any}
                          className="h-1.5"
                        />
                      </div>
                    ))}
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};