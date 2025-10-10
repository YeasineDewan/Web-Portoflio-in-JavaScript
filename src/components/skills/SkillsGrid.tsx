import React from 'react';
import { Card, CardBody, Progress } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

export const SkillsGrid = () => {
  const skillCategories = [
    {
      name: 'Frontend',
      icon: 'lucide:layout',
      color: 'primary',
      skills: [
        { name: 'HTML', level: 95 },
        { name: 'CSS', level: 90 },
        { name: 'Bootstrap', level: 90 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'React', level: 85 },
        { name: 'Next.js', level: 80 },
        { name: 'Responsive Design', level: 90 }
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
      name: 'Databases',
      icon: 'lucide:database',
      color: 'success',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'MySQL', level: 80 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'Data Modeling', level: 80 },
        { name: 'Query Optimization', level: 75 }
      ]
    },
    {
      name: 'Security & Infrastructure',
      icon: 'lucide:shield',
      color: 'danger',
      skills: [
        { name: 'Web Security', level: 90 },
        { name: 'Vulnerability Management', level: 85 },
        { name: 'Penetration Testing', level: 85 },
        { name: 'Risk Management', level: 80 },
        { name: 'Security Auditing', level: 85 },
        { name: 'Network Security', level: 80 },
        { name: 'Firewall Configuration', level: 75 },
        { name: 'SSL/TLS', level: 85 },
        { name: 'CDN', level: 80 },
        { name: 'Domain/DNS', level: 85 },
        { name: 'Server Administration', level: 80 },
        { name: 'Backup & Recovery', level: 85 },
        { name: 'Performance Optimization', level: 80 },
        { name: 'Compliance', level: 75 }
      ]
    },
    {
      name: 'Tools & DevOps',
      icon: 'lucide:tool',
      color: 'warning',
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'Linux', level: 85 },
        { name: 'Nginx/Apache', level: 80 },
        { name: 'CI/CD', level: 70 }
      ]
    },
    {
      name: 'Digital Marketing',
      icon: 'lucide:megaphone',
      color: 'primary',
      skills: [
        { name: 'SEO', level: 80 },
        { name: 'PPC', level: 75 },
        { name: 'Social Media', level: 80 },
        { name: 'Content Marketing', level: 75 },
        { name: 'Email Marketing', level: 70 }
      ]
    }
  ];

  return (
    <section className="py-16">
      <div className="container-custom">
        <h2 className="text-3xl font-bold mb-12 text-center">My Skills</h2>
        
        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className={`w-12 h-12 rounded-full bg-${category.color}-100 dark:bg-${category.color}-900/30 flex items-center justify-center`}>
                  <Icon 
                    icon={category.icon} 
                    className={`text-${category.color}-600 dark:text-${category.color}-400 text-2xl`} 
                  />
                </div>
                <h3 className="text-2xl font-semibold">{category.name}</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                  >
                    <Card>
                      <CardBody className="p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-foreground-500">{skill.level}%</span>
                        </div>
                        <Progress 
                          aria-label={`${skill.name} skill level`}
                          value={skill.level} 
                          color={category.color as any}
                          className="h-2"
                        />
                      </CardBody>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};