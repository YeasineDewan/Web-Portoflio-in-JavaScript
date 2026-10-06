import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardFooter, Button, Chip, Input } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { projects } from '../../data/projects';
import { ContentArtwork } from '../utils/ContentArtwork';
import { stagger, fadeUp } from '../utils/PageLayout';

const FILTERS = [
  { key: 'all',        name: 'All Projects',  icon: 'lucide:layout-grid' },
  { key: 'full-stack', name: 'Full-Stack',    icon: 'lucide:layers' },
  { key: 'security',   name: 'Security',      icon: 'lucide:shield' },
  { key: 'frontend',   name: 'Frontend',      icon: 'lucide:monitor' },
];

export const ProjectsGrid = () => {
  const reduce = useReducedMotion();
  const [filter, setFilter] = React.useState('all');
  const [searchQuery, setSearchQuery] = React.useState('');

  const normalizedQuery = searchQuery.trim().toLowerCase();
  const filteredProjects = projects.filter((project) => {
    const matchesFilter = filter === 'all' || project.tags.some((tag) => tag.toLowerCase().includes(filter));
    const matchesSearch = !normalizedQuery || [project.title, project.description, ...project.tags]
      .some((v) => v.toLowerCase().includes(normalizedQuery));
    return matchesFilter && matchesSearch;
  });

  return (
    <section className="py-16">
      <div className="container-custom">
        {/* Controls */}
        <motion.div
          variants={reduce ? undefined : stagger(0.08)}
          initial={reduce ? undefined : 'hidden'}
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8"
        >
          <motion.div variants={reduce ? undefined : fadeUp} className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <motion.button
                key={f.key}
                onClick={() => setFilter(f.key)}
                whileHover={reduce ? undefined : { scale: 1.04 }}
                whileTap={reduce ? undefined : { scale: 0.97 }}
                className={`relative flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  filter === f.key
                    ? 'bg-primary text-white shadow-lg shadow-primary/25'
                    : 'bg-content2 text-foreground-600 hover:bg-content3 hover:text-foreground'
                }`}
              >
                <Icon icon={f.icon} className="text-sm" />
                {f.name}
              </motion.button>
            ))}
          </motion.div>

          <motion.div variants={reduce ? undefined : fadeUp} className="w-full md:w-64">
            <Input
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              startContent={<Icon icon="lucide:search" className="text-default-400" />}
              isClearable
              onClear={() => setSearchQuery('')}
              size="sm"
              classNames={{ inputWrapper: 'bg-content2 border border-content3' }}
            />
          </motion.div>
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          {filteredProjects.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center py-20"
            >
              <div className="w-20 h-20 rounded-2xl bg-content2 flex items-center justify-center mx-auto mb-4">
                <Icon icon="lucide:search-x" className="text-3xl text-foreground-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No projects found</h3>
              <p className="text-foreground-500 mb-6">Try adjusting your search or filter.</p>
              <Button color="primary" variant="flat" onPress={() => { setFilter('all'); setSearchQuery(''); }}>
                Clear Filters
              </Button>
            </motion.div>
          ) : (
            <motion.div
              key={`${filter}-${normalizedQuery}`}
              variants={reduce ? undefined : stagger(0.08)}
              initial={reduce ? undefined : 'hidden'}
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={reduce ? undefined : fadeUp}
                  whileHover={reduce ? undefined : { y: -8, transition: { duration: 0.25 } }}
                  className="card-glow group"
                >
                  <Card className="h-full overflow-hidden border border-content3/50">
                    <CardBody className="p-0">
                      <div className="relative aspect-video overflow-hidden">
                        <ContentArtwork
                          src={project.coverImage}
                          title={project.title}
                          keywords={`${project.tags.join(' ')} ${project.techStack.join(' ')}`}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        {project.featured && (
                          <div className="absolute top-2 right-2">
                            <Chip color="primary" variant="flat" size="sm" startContent={<Icon icon="lucide:star" className="text-xs" />}>
                              Featured
                            </Chip>
                          </div>
                        )}
                        {/* Hover overlay CTA */}
                        <motion.div
                          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          initial={false}
                        >
                          <Button
                            color="primary"
                            variant="solid"
                            size="sm"
                            as={Link}
                            to={`/projects/${project.slug}`}
                            className="shadow-xl"
                            startContent={<Icon icon="lucide:eye" />}
                          >
                            View Project
                          </Button>
                        </motion.div>
                      </div>
                      <div className="p-5">
                        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-200">
                          {project.title}
                        </h3>
                        <p className="text-foreground-500 mb-4 line-clamp-2 text-sm leading-relaxed">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {project.tags.slice(0, 3).map((tag) => (
                            <Chip key={tag} color="default" variant="flat" size="sm">{tag}</Chip>
                          ))}
                          {project.tags.length > 3 && (
                            <Chip color="default" variant="flat" size="sm">+{project.tags.length - 3}</Chip>
                          )}
                        </div>
                      </div>
                    </CardBody>
                    <CardFooter className="flex justify-between gap-2 pt-0 px-5 pb-5">
                      <Button as={Link} to={`/projects/${project.slug}`} color="primary" variant="flat" className="flex-1" size="sm">
                        View Details
                      </Button>
                      <div className="flex gap-1">
                        {project.liveUrl && (
                          <Button as="a" href={project.liveUrl} target="_blank" rel="noopener noreferrer" isIconOnly variant="light" color="primary" size="sm">
                            <Icon icon="lucide:external-link" />
                          </Button>
                        )}
                        {project.repoUrl && (
                          <Button as="a" href={project.repoUrl} target="_blank" rel="noopener noreferrer" isIconOnly variant="light" size="sm">
                            <Icon icon="lucide:github" />
                          </Button>
                        )}
                      </div>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
