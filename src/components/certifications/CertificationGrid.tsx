import { Card, CardBody, Link, Chip } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion, useReducedMotion } from 'framer-motion';
import { Section, SectionHeading, stagger, fadeUp } from '../utils/PageLayout';

const certifications = [
  { id: 1, title: 'Digital Marketing',             issuer: 'Google',               year: '2023', credentialUrl: '#', icon: 'logos:google-marketing-platform', color: 'primary' },
  { id: 2, title: 'Penetration Testing',           issuer: 'EC-Council',           year: '2022', credentialUrl: '#', icon: 'lucide:shield-alert',              color: 'danger' },
  { id: 3, title: 'Secure Coding / SQL Injection', issuer: 'EC-Council',           year: '2022', credentialUrl: '#', icon: 'lucide:lock',                      color: 'danger' },
  { id: 4, title: 'MERN Stack Development',        issuer: 'Udemy',                year: '2024', credentialUrl: '#', icon: 'logos:udemy-icon',                  color: 'secondary' },
  { id: 5, title: 'AI Agents & APIs',              issuer: 'Go Edu',               year: '2024', credentialUrl: '#', icon: 'lucide:bot',                        color: 'success' },
  { id: 6, title: 'Web Development',               issuer: 'Bidtegre',             year: '2022', credentialUrl: '#', icon: 'lucide:code',                       color: 'primary' },
  { id: 7, title: 'Network Design',                issuer: 'Orhan Ergun LLC',      year: '2022', credentialUrl: '#', icon: 'lucide:network',                    color: 'warning' },
  { id: 8, title: 'English Proficiency',           issuer: "King's College London", year: '2023', credentialUrl: '#', icon: 'lucide:languages',                 color: 'secondary' },
];

export const CertificationGrid = () => {
  const reduce = useReducedMotion();

  return (
    <Section>
      <div className="container-custom">
        <SectionHeading
          badge="Credentials"
          title="Certifications & "
          highlight="Training"
          description="Professional certifications and training that validate my expertise across web development, security, and digital marketing."
        />

        <motion.div
          variants={reduce ? undefined : stagger(0.08)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              variants={reduce ? undefined : fadeUp}
              whileHover={reduce ? undefined : { y: -6, transition: { duration: 0.25 } }}
              className="card-glow"
            >
              <Card className="h-full border border-content3/50">
                <CardBody className="p-5">
                  <div className="flex items-start gap-3 mb-4">
                    <motion.div
                      className={`w-12 h-12 rounded-xl bg-${cert.color}-100 dark:bg-${cert.color}-900/30 flex items-center justify-center shrink-0`}
                      whileHover={reduce ? undefined : { rotate: [0, -10, 10, 0], transition: { duration: 0.4 } }}
                    >
                      <Icon icon={cert.icon} className={`text-${cert.color}-600 dark:text-${cert.color}-400 text-xl`} />
                    </motion.div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-sm leading-tight">{cert.title}</h3>
                      <p className={`text-${cert.color}-600 dark:text-${cert.color}-400 text-xs font-medium mt-0.5`}>{cert.issuer}</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <Chip color="default" variant="flat" size="sm" startContent={<Icon icon="lucide:calendar" className="text-xs" />}>
                      {cert.year}
                    </Chip>
                    {cert.credentialUrl && cert.credentialUrl !== '#' && (
                      <Link href={cert.credentialUrl} isExternal showAnchorIcon color="primary" className="text-xs">
                        Verify
                      </Link>
                    )}
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
