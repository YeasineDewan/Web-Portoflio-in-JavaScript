import React from 'react';
import { Card, CardBody, Link, Chip } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

export const CertificationGrid = () => {
  const certifications = [
    {
      id: 1,
      title: 'Digital Marketing',
      issuer: 'Google',
      year: '2023',
      credentialUrl: '#',
      icon: 'logos:google-marketing-platform',
      color: 'primary'
    },
    {
      id: 2,
      title: 'Penetration Testing',
      issuer: 'EC-Council',
      year: '2022',
      credentialUrl: '#',
      icon: 'logos:ec-council',
      color: 'danger'
    },
    {
      id: 3,
      title: 'Secure Coding/SQL Injection Prevention',
      issuer: 'EC-Council',
      year: '2022',
      credentialUrl: '#',
      icon: 'logos:ec-council',
      color: 'danger'
    },
    {
      id: 4,
      title: 'MERN Stack Development',
      issuer: 'Udemy',
      year: '2024',
      credentialUrl: '#',
      icon: 'logos:udemy-icon',
      color: 'secondary'
    },
    {
      id: 5,
      title: 'AI Agents & APIs',
      issuer: 'Go Edu',
      year: '2024',
      credentialUrl: '#',
      icon: 'lucide:bot',
      color: 'success'
    },
    {
      id: 6,
      title: 'Web Development',
      issuer: 'Bidtegre',
      year: '2022',
      credentialUrl: '#',
      icon: 'lucide:code',
      color: 'primary'
    },
    {
      id: 7,
      title: 'Network Design',
      issuer: 'Orhan Ergun LLC',
      year: '2022',
      credentialUrl: '#',
      icon: 'lucide:network',
      color: 'warning'
    },
    {
      id: 8,
      title: 'English Proficiency',
      issuer: "King's College London",
      year: '2023',
      credentialUrl: '#',
      icon: 'lucide:languages',
      color: 'secondary'
    }
  ];

  return (
    <section className="py-16">
      <div className="container-custom">
        <h2 className="text-3xl font-bold mb-12 text-center">Certifications & Training</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Card className="h-full card-hover">
                <CardBody className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 flex items-center justify-center">
                      <Icon icon={cert.icon} className="text-3xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{cert.title}</h3>
                      <p className="text-foreground-500 text-sm">{cert.issuer}</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center mt-4">
                    <Chip color="default" variant="flat" size="sm">
                      <Icon icon="lucide:calendar" className="mr-1" />
                      {cert.year}
                    </Chip>
                    
                    {cert.credentialUrl && (
                      <Link 
                        href={cert.credentialUrl} 
                        isExternal 
                        showAnchorIcon 
                        color="primary"
                        className="text-sm"
                      >
                        Verify
                      </Link>
                    )}
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