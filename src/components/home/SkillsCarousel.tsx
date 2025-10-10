import React from 'react';
import { Card, CardBody } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

export const SkillsCarousel = () => {
  const skillCategories = [
    {
      name: 'Frontend',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'Responsive Design'],
      icon: 'lucide:layout',
      color: 'primary'
    },
    {
      name: 'Backend',
      skills: ['Node.js', 'Express', 'REST APIs', 'Python basics'],
      icon: 'lucide:server',
      color: 'secondary'
    },
    {
      name: 'Database',
      skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Data Modeling', 'Query Optimization'],
      icon: 'lucide:database',
      color: 'success'
    },
    {
      name: 'Security',
      skills: ['Web Security', 'Vulnerability Management', 'Penetration Testing', 'Risk Assessment', 'SSL/TLS'],
      icon: 'lucide:shield',
      color: 'danger'
    },
    {
      name: 'DevOps',
      skills: ['Git/GitHub', 'Linux', 'Nginx/Apache', 'CI/CD basics', 'Server Admin'],
      icon: 'lucide:terminal',
      color: 'warning'
    }
  ];

  const [activeIndex, setActiveIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % skillCategories.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [skillCategories.length]);

  return (
    <section className="py-16 bg-content2/50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">My Skills</h2>
          <p className="text-foreground-500 max-w-2xl mx-auto">
            I've developed expertise across the full stack, with a special focus on security and performance optimization.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="flex gap-2">
            {skillCategories.map((category, index) => (
              <button
                key={category.name}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeIndex === index
                    ? `bg-${category.color}-100 text-${category.color}-700 dark:bg-${category.color}-900/30 dark:text-${category.color}-400`
                    : 'bg-content3/50 text-foreground-500 hover:bg-content3'
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <Icon icon={category.icon} className="inline-block mr-1" />
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="relative h-[300px]">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              className="absolute inset-0"
              initial={{ opacity: 0, x: 50 }}
              animate={{ 
                opacity: activeIndex === index ? 1 : 0,
                x: activeIndex === index ? 0 : 50
              }}
              transition={{ duration: 0.5 }}
              style={{ pointerEvents: activeIndex === index ? 'auto' : 'none' }}
            >
              <Card className={`h-full border-l-4 border-${category.color}`}>
                <CardBody className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-12 h-12 rounded-full bg-${category.color}-100 dark:bg-${category.color}-900/30 flex items-center justify-center`}>
                      <Icon 
                        icon={category.icon} 
                        className={`text-${category.color}-600 dark:text-${category.color}-400 text-2xl`} 
                      />
                    </div>
                    <h3 className="text-2xl font-semibold">{category.name}</h3>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {category.skills.map((skill) => (
                      <div 
                        key={skill}
                        className={`p-3 rounded-md bg-${category.color}-50/50 dark:bg-${category.color}-900/10 border border-${category.color}-100 dark:border-${category.color}-900/20 text-center`}
                      >
                        <span className="font-medium">{skill}</span>
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