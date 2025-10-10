import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button, Chip, Divider, Card, CardBody } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';

export const ProjectDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find(p => p.slug === slug);
  
  if (!project) {
    return (
      <div className="container-custom py-24 text-center">
        <Icon icon="lucide:file-x" className="text-6xl text-foreground-400 mx-auto mb-6" />
        <h2 className="text-3xl font-bold mb-4">Project Not Found</h2>
        <p className="text-foreground-500 mb-8">
          The project you're looking for doesn't exist or has been removed.
        </p>
        <Button 
          as={Link}
          to="/projects"
          color="primary"
          startContent={<Icon icon="lucide:arrow-left" />}
        >
          Back to Projects
        </Button>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-content2/50 py-16">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
              <Link 
                to="/projects" 
                className="inline-flex items-center text-foreground-500 hover:text-primary mb-4"
              >
                <Icon icon="lucide:arrow-left" className="mr-1" />
                Back to Projects
              </Link>
              <h1 className="text-3xl md:text-4xl font-bold">{project.title}</h1>
            </div>
            
            <div className="flex gap-2">
              {project.liveUrl && (
                <Button
                  as="a"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  color="primary"
                  startContent={<Icon icon="lucide:external-link" />}
                >
                  Live Demo
                </Button>
              )}
              {project.repoUrl && (
                <Button
                  as="a"
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="bordered"
                  startContent={<Icon icon="lucide:github" />}
                >
                  Source Code
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Main Image */}
              <div className="rounded-lg overflow-hidden mb-8">
                <img 
                  src={project.coverImage} 
                  alt={project.title}
                  className="w-full h-auto"
                />
              </div>
              
              {/* Description */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
                <p className="text-foreground-600 dark:text-foreground-400 text-lg mb-6">
                  {project.description}
                </p>
              </div>
              
              {/* Key Features */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Icon icon="lucide:check-circle" className="text-primary mt-1 flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Security Notes */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Security Considerations</h2>
                <Card className="bg-success-50/50 dark:bg-success-900/10 border-l-4 border-success">
                  <CardBody className="p-4">
                    <div className="flex items-start gap-3">
                      <Icon icon="lucide:shield-check" className="text-success text-xl mt-1" />
                      <p className="text-foreground-700 dark:text-foreground-300">
                        {project.securityNotes}
                      </p>
                    </div>
                  </CardBody>
                </Card>
              </div>
              
              {/* Gallery */}
              {project.images.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Project Gallery</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.images.map((image, index) => (
                      <div key={index} className="rounded-lg overflow-hidden">
                        <img 
                          src={image} 
                          alt={`${project.title} screenshot ${index + 1}`}
                          className="w-full h-auto"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
          
          {/* Right Column - Sidebar */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="sticky top-24">
                <CardBody className="p-6">
                  {/* Project Info */}
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-4">Project Info</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-foreground-500 mb-1">Year</p>
                        <p className="font-medium">{project.year}</p>
                      </div>
                      <Divider />
                      <div>
                        <p className="text-sm text-foreground-500 mb-2">Tech Stack</p>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech) => (
                            <Chip key={tech} size="sm" variant="flat">{tech}</Chip>
                          ))}
                        </div>
                      </div>
                      <Divider />
                      <div>
                        <p className="text-sm text-foreground-500 mb-2">Tags</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <Chip key={tag} size="sm" color="primary" variant="flat">{tag}</Chip>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Call to Action */}
                  <div className="space-y-3">
                    <Button
                      as={Link}
                      to="/contact"
                      color="primary"
                      fullWidth
                      startContent={<Icon icon="lucide:message-square" />}
                    >
                      Discuss This Project
                    </Button>
                    <Button
                      as={Link}
                      to="/projects"
                      variant="flat"
                      fullWidth
                      startContent={<Icon icon="lucide:layout-grid" />}
                    >
                      View All Projects
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Related Projects */}
      <div className="bg-content2/50 py-16">
        <div className="container-custom">
          <h2 className="text-2xl font-semibold mb-8">More Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects
              .filter(p => p.id !== project.id)
              .slice(0, 3)
              .map((relatedProject) => (
                <Card key={relatedProject.id} className="card-hover">
                  <CardBody className="p-0">
                    <div className="aspect-video">
                      <img 
                        src={relatedProject.coverImage} 
                        alt={relatedProject.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-2">{relatedProject.title}</h3>
                      <div className="flex gap-2 mb-4">
                        {relatedProject.tags.slice(0, 2).map(tag => (
                          <Chip key={tag} size="sm" variant="flat">{tag}</Chip>
                        ))}
                      </div>
                      <Button
                        as={Link}
                        to={`/projects/${relatedProject.slug}`}
                        color="primary"
                        variant="flat"
                        size="sm"
                        fullWidth
                      >
                        View Project
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};