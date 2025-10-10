import React from 'react';
import { Card, CardBody } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

export const Experience = () => {
  const experiences = [
    {
      company: 'Wave 3 Limited',
      role: 'Lead Web Developer',
      period: 'Feb 2025 – Present',
      achievements: [
        'Built and maintained secure web apps end‑to‑end; led code reviews and team rituals',
        'Ownership of security oversight, vulnerability management, penetration testing',
        'Managed hosting, servers, databases, domains, CDN, and SSL/TLS',
        'Implemented backup/recovery, performance tuning, and compliance practices'
      ],
      icon: 'lucide:briefcase',
      color: 'primary'
    },
    {
      company: 'Cantonment Election Commission',
      role: 'Data Entry Officer',
      period: 'Apr 2024 – Feb 2025',
      achievements: [
        'Accurate bilingual data entry (English/Bangla), verification, confidentiality, and on‑time completion'
      ],
      icon: 'lucide:database',
      color: 'secondary'
    },
    {
      company: 'Sesame Street',
      role: 'Event Management',
      period: 'Nov 2023 – Jan 2024',
      achievements: [
        'Logistics and on‑site coordination, cross‑team communication'
      ],
      icon: 'lucide:calendar',
      color: 'success'
    },
    {
      company: 'Shirt Bazar',
      role: 'Computer Operator',
      period: 'May 2023 – Oct 2023',
      achievements: [
        'Data entry supervision and system operation'
      ],
      icon: 'lucide:laptop',
      color: 'warning'
    }
  ];

  return (
    <section className="py-16">
      <div className="container-custom">
        <h2 className="text-3xl font-bold mb-12 text-center">Professional Experience</h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-content3 -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className={`md:flex ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 top-6 w-8 h-8 rounded-full bg-content1 border-4 border-content3 -translate-x-1/2 z-10 hidden md:flex items-center justify-center">
                    <div className={`w-3 h-3 rounded-full bg-${exp.color}-500`}></div>
                  </div>
                  
                  {/* Content */}
                  <div className="md:w-1/2 md:pr-12 md:pl-0 pl-12 relative">
                    {/* Mobile timeline dot */}
                    <div className="absolute left-0 top-6 w-8 h-8 rounded-full bg-content1 border-4 border-content3 flex md:hidden items-center justify-center">
                      <div className={`w-3 h-3 rounded-full bg-${exp.color}-500`}></div>
                    </div>
                    
                    <Card className={`card-hover ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                      <CardBody className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`w-10 h-10 rounded-full bg-${exp.color}-100 dark:bg-${exp.color}-900/30 flex items-center justify-center`}>
                            <Icon 
                              icon={exp.icon} 
                              className={`text-${exp.color}-600 dark:text-${exp.color}-400 text-xl`} 
                            />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold">{exp.role}</h3>
                            <p className="text-foreground-500">{exp.company}</p>
                          </div>
                        </div>
                        
                        <div className="mb-4 inline-block px-3 py-1 rounded-full bg-content3 text-sm">
                          <Icon icon="lucide:calendar" className="inline-block mr-1" />
                          {exp.period}
                        </div>
                        
                        <ul className="space-y-2 mt-4">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <Icon icon="lucide:check-circle" className={`text-${exp.color}-500 mt-1 flex-shrink-0`} />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </CardBody>
                    </Card>
                  </div>
                  
                  {/* Empty div for timeline layout */}
                  <div className="md:w-1/2 hidden md:block"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};