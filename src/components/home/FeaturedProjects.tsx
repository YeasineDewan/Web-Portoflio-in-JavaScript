import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardFooter, Button, Chip } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { projects } from '../../data/projects';

export const FeaturedProjects = () => {
  // Get only featured projects
  const featuredProjects = projects.filter(project => project.featured).slice(0, 3);
  
  return (
    <section className="section-padding bg-content2/50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
            <p className="text-foreground-500 max-w-2xl">
              Explore some of my recent work focused on security, performance, and user experience.
            </p>
          </div>
          <Button
            as={Link}
            to="/projects"
            color="primary"
            variant="flat"
            endContent={<Icon icon="lucide:arrow-right" />}
          >
            View All Projects
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="h-full card-hover">
                <CardBody className="p-0">
                  <div className="relative aspect-video">
                    <img 
                      src={project.coverImage} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      <Chip 
                        color="primary" 
                        variant="flat" 
                        size="sm"
                        startContent={<Icon icon="lucide:star" className="text-xs" />}
                      >
                        Featured
                      </Chip>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-foreground-500 mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 3).map(tag => (
                        <Chip key={tag} color="default" variant="flat" size="sm">{tag}</Chip>
                      ))}
                      {project.tags.length > 3 && (
                        <Chip color="default" variant="flat" size="sm">+{project.tags.length - 3}</Chip>
                      )}
                    </div>
                  </div>
                </CardBody>
                <CardFooter className="flex justify-between gap-2 pt-0">
                  <Button 
                    as={Link}
                    to={`/projects/${project.slug}`}
                    color="primary" 
                    variant="flat"
                    className="flex-1"
                  >
                    View Details
                  </Button>
                  <div className="flex gap-2">
                    {project.liveUrl && (
                      <Button 
                        as="a"
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        isIconOnly
                        variant="light"
                        color="primary"
                      >
                        <Icon icon="lucide:external-link" />
                      </Button>
                    )}
                    {project.repoUrl && (
                      <Button 
                        as="a"
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        isIconOnly
                        variant="light"
                      >
                        <Icon icon="lucide:github" />
                      </Button>
                    )}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};