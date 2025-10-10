import React from 'react';
import { Card, CardBody } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

export const Education = () => {
  const educations = [
    {
      degree: 'BSc in CSE',
      institution: 'Daffodil International University (DIU)',
      period: '2021 - 2025',
      grade: 'CGPA 3.16',
      icon: 'lucide:graduation-cap',
      color: 'primary'
    },
    {
      degree: 'HSC (Science)',
      institution: 'BIC College',
      period: '2018 - 2020',
      grade: 'GPA 5.00',
      icon: 'lucide:book-open',
      color: 'secondary'
    },
    {
      degree: 'SSC (Science)',
      institution: 'Monipur Uccha Biddalaya & College',
      period: '2016 - 2018',
      grade: 'GPA 5.00',
      icon: 'lucide:book',
      color: 'success'
    }
  ];

  return (
    <section className="py-16 bg-content2/50">
      <div className="container-custom">
        <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {educations.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full card-hover">
                <CardBody className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-12 h-12 rounded-full bg-${edu.color}-100 dark:bg-${edu.color}-900/30 flex items-center justify-center`}>
                      <Icon 
                        icon={edu.icon} 
                        className={`text-${edu.color}-600 dark:text-${edu.color}-400 text-2xl`} 
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{edu.degree}</h3>
                      <p className="text-foreground-500">{edu.institution}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Icon icon="lucide:calendar" className="text-foreground-500" />
                      <span>{edu.period}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Icon icon="lucide:award" className="text-foreground-500" />
                      <span>{edu.grade}</span>
                    </div>
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