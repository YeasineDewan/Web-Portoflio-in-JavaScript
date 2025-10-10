import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardFooter, Button, Chip, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Input } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { projects } from '../../data/projects';

export const ProjectsGrid = () => {
  const [filter, setFilter] = React.useState('all');
  const [filteredProjects, setFilteredProjects] = React.useState(projects);
  
  const filters = [
    { key: 'all', name: 'All Projects' },
    { key: 'full-stack', name: 'Full-Stack' },
    { key: 'security', name: 'Security' },
    { key: 'frontend', name: 'Frontend' }
  ];
  
  // Add search functionality
  const [searchQuery, setSearchQuery] = React.useState('');
  
  React.useEffect(() => {
    if (filter === 'all' && !searchQuery) {
      setFilteredProjects(projects);
    } else {
      let filtered = [...projects];
      
      // Filter by category
      if (filter !== 'all') {
        filtered = filtered.filter(project => 
          project.tags.some(tag => tag.toLowerCase().includes(filter))
        );
      }
      
      // Filter by search query
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filtered = filtered.filter(project => 
          project.title.toLowerCase().includes(query) || 
          project.description.toLowerCase().includes(query) ||
          project.tags.some(tag => tag.toLowerCase().includes(query))
        );
      }
      
      setFilteredProjects(filtered);
    }
  }, [filter, searchQuery]);

  React.useEffect(() => {
    if (filter === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => 
        project.tags.some(tag => tag.toLowerCase().includes(filter))
      ));
    }
  }, [filter]);

  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <h2 className="text-3xl font-bold">My Projects</h2>
          
          <div className="w-full md:w-auto">
            <Input
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              startContent={<Icon icon="lucide:search" className="text-default-400" />}
              isClearable
              onClear={() => setSearchQuery('')}
              className="max-w-xs mb-4 md:mb-0"
            />
          </div>
        </div>
        
        <div className="flex justify-start mb-8 overflow-x-auto pb-2">
          <div className="flex gap-2">
            {filters.map((filterItem) => (
              <Button
                key={filterItem.key}
                color={filter === filterItem.key ? "primary" : "default"}
                variant={filter === filterItem.key ? "solid" : "flat"}
                onPress={() => setFilter(filterItem.key)}
                size="sm"
              >
                {filterItem.name}
              </Button>
            ))}
          </div>
        </div>

        {filteredProjects.length === 0 ? (
          <div className="text-center py-16">
            <Icon icon="lucide:search-x" className="text-4xl text-foreground-400 mx-auto mb-4" />
            <h3 className="text-xl font-medium mb-2">No projects found</h3>
            <p className="text-foreground-500">
              No projects match the selected filter. Try another category.
            </p>
            <Button 
              color="primary" 
              variant="flat" 
              className="mt-4"
              onPress={() => setFilter('all')}
            >
              Show All Projects
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="h-full group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 hover:border-primary/20">
                  <CardBody className="p-0">
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={project.coverImage}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {project.featured && (
                        <div className="absolute top-2 right-2">
                          <Chip
                            color="primary"
                            variant="flat"
                            size="sm"
                            startContent={<Icon icon="lucide:star" className="text-xs" />}
                            className="animate-pulse"
                          >
                            Featured
                          </Chip>
                        </div>
                      )}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50">
                        <Button
                          color="primary"
                          variant="solid"
                          size="lg"
                          className="hover:scale-110 transition-transform"
                          as={Link}
                          to={`/projects/${project.slug}`}
                        >
                          <Icon icon="lucide:eye" className="mr-2" />
                          View Project
                        </Button>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                      <p className="text-foreground-500 mb-4 line-clamp-2 group-hover:text-foreground-600 transition-colors">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.slice(0, 3).map(tag => (
                          <Chip
                            key={tag}
                            color="default"
                            variant="flat"
                            size="sm"
                            className="hover:bg-primary/20 hover:text-primary transition-colors"
                          >
                            {tag}
                          </Chip>
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
        )}
      </div>
    </section>
  );
};