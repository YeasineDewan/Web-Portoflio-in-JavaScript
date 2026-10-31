import { useParams, Link } from 'react-router-dom';
import { Button, Chip, Divider, Card, CardBody } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion, useReducedMotion } from 'framer-motion';
import { projects } from '../data/projects';
import { ContentArtwork } from '../components/utils/ContentArtwork';
import { FloatingOrbs, stagger, fadeUp, fadeLeft, fadeRight } from '../components/utils/PageLayout';

export const ProjectDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const reduce = useReducedMotion();
  const project = projects.find(p => p.slug === slug);
  const galleryImages = project?.images.filter(img => !img.includes('img.heroui.chat')) ?? [];

  if (!project) {
    return (
      <div className="container-custom py-24 text-center">
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}>
          <div className="w-20 h-20 rounded-2xl bg-content2 flex items-center justify-center mx-auto mb-6">
            <Icon icon="lucide:file-x" className="text-4xl text-foreground-400" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Project Not Found</h2>
          <p className="text-foreground-500 mb-8">The project you're looking for doesn't exist or has been removed.</p>
          <Button as={Link} to="/projects" color="primary" startContent={<Icon icon="lucide:arrow-left" />}>
            Back to Projects
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-content2/40 py-16 border-b border-divider">
        <FloatingOrbs />
        <div className="container-custom relative">
          <motion.div
            variants={reduce ? undefined : stagger(0.1)}
            initial={reduce ? undefined : 'hidden'}
            animate="show"
          >
            <motion.div variants={reduce ? undefined : fadeUp}>
              <Link to="/projects" className="inline-flex items-center gap-1.5 text-sm text-foreground-500 hover:text-primary transition-colors mb-5">
                <Icon icon="lucide:arrow-left" className="text-sm" />
                Back to Projects
              </Link>
            </motion.div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
              <motion.div variants={reduce ? undefined : fadeUp}>
                {project.featured && (
                  <Chip color="primary" variant="flat" size="sm" startContent={<Icon icon="lucide:star" className="text-xs" />} className="mb-3">
                    Featured Project
                  </Chip>
                )}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">{project.title}</h1>
                <p className="text-foreground-500 mt-3 max-w-2xl leading-relaxed">{project.description}</p>
              </motion.div>

              <motion.div variants={reduce ? undefined : fadeUp} className="flex gap-3 shrink-0">
                {project.liveUrl && (
                  <Button as="a" href={project.liveUrl} target="_blank" rel="noopener noreferrer" color="primary" className="shimmer font-semibold" startContent={<Icon icon="lucide:external-link" />}>
                    Live Demo
                  </Button>
                )}
                {project.repoUrl && (
                  <Button as="a" href={project.repoUrl} target="_blank" rel="noopener noreferrer" variant="bordered" startContent={<Icon icon="lucide:github" />}>
                    Source Code
                  </Button>
                )}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <div className="container-custom py-12 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left: content */}
          <motion.div
            className="lg:col-span-2 space-y-10"
            variants={reduce ? undefined : fadeLeft}
            initial={reduce ? undefined : 'hidden'}
            animate="show"
          >
            {/* Cover image */}
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <ContentArtwork
                src={project.coverImage}
                title={project.title}
                keywords={`${project.tags.join(' ')} ${project.techStack.join(' ')}`}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Overview */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Icon icon="lucide:info" className="text-primary" />
                Project Overview
              </h2>
              <p className="text-foreground-600 dark:text-foreground-400 text-lg leading-relaxed">{project.description}</p>
            </div>

            {/* Key features */}
            <div>
              <h2 className="text-2xl font-bold mb-5 flex items-center gap-2">
                <Icon icon="lucide:list-checks" className="text-primary" />
                Key Features
              </h2>
              <ul className="space-y-3">
                {project.highlights.map((h, i) => (
                  <motion.li
                    key={i}
                    initial={reduce ? undefined : { opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="flex items-start gap-2.5 text-sm"
                  >
                    <Icon icon="lucide:check-circle" className="text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground-600 dark:text-foreground-400">{h}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Security notes */}
            <motion.div
              initial={reduce ? undefined : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Icon icon="lucide:shield-check" className="text-success" />
                Security Considerations
              </h2>
              <Card className="border-l-4 border-success bg-success-50/50 dark:bg-success-900/10 border border-success/20">
                <CardBody className="p-5">
                  <div className="flex items-start gap-3">
                    <Icon icon="lucide:shield-check" className="text-success text-xl mt-0.5 shrink-0" />
                    <p className="text-foreground-700 dark:text-foreground-300 leading-relaxed">{project.securityNotes}</p>
                  </div>
                </CardBody>
              </Card>
            </motion.div>

            {/* Gallery */}
            {galleryImages.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-5 flex items-center gap-2">
                  <Icon icon="lucide:images" className="text-primary" />
                  Project Gallery
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {galleryImages.map((img, i) => (
                    <motion.div
                      key={i}
                      className="rounded-xl overflow-hidden shadow-md"
                      initial={reduce ? undefined : { opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <ContentArtwork src={img} title={`${project.title} screenshot ${i + 1}`} keywords={project.tags.join(' ')} className="w-full h-auto" />
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          {/* Sidebar */}
          <motion.div
            variants={reduce ? undefined : fadeRight}
            initial={reduce ? undefined : 'hidden'}
            animate="show"
          >
            <Card className="sticky top-24 border border-content3/50 shadow-lg">
              <CardBody className="p-6">
                <h3 className="text-xl font-bold mb-5">Project Info</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-foreground-500 mb-1 uppercase tracking-wider">Year</p>
                    <p className="font-semibold">{project.year}</p>
                  </div>
                  <Divider />
                  <div>
                    <p className="text-xs text-foreground-500 mb-2 uppercase tracking-wider">Tech Stack</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map(t => <Chip key={t} size="sm" variant="flat">{t}</Chip>)}
                    </div>
                  </div>
                  <Divider />
                  <div>
                    <p className="text-xs text-foreground-500 mb-2 uppercase tracking-wider">Tags</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map(t => <Chip key={t} size="sm" color="primary" variant="flat">{t}</Chip>)}
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <Button as={Link} to="/contact" color="primary" fullWidth className="shimmer font-semibold" startContent={<Icon icon="lucide:message-square" />}>
                    Discuss This Project
                  </Button>
                  <Button as={Link} to="/projects" variant="flat" fullWidth startContent={<Icon icon="lucide:layout-grid" />}>
                    View All Projects
                  </Button>
                </div>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Related projects */}
      <section className="bg-content2/40 py-16 border-t border-divider">
        <div className="container-custom">
          <h2 className="text-2xl font-bold mb-8">More Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.filter(p => p.id !== project.id).slice(0, 3).map((p, i) => (
              <motion.div
                key={p.id}
                initial={reduce ? undefined : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={reduce ? undefined : { y: -4, transition: { duration: 0.2 } }}
                className="card-glow"
              >
                <Card className="h-full border border-content3/50">
                  <CardBody className="p-0">
                    <div className="aspect-video overflow-hidden">
                      <ContentArtwork src={p.coverImage} title={p.title} keywords={`${p.tags.join(' ')} ${p.techStack.join(' ')}`} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
                    </div>
                    <div className="p-4">
                      <h3 className="text-base font-semibold mb-2">{p.title}</h3>
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {p.tags.slice(0, 2).map(t => <Chip key={t} size="sm" variant="flat">{t}</Chip>)}
                      </div>
                      <Button as={Link} to={`/projects/${p.slug}`} color="primary" variant="flat" size="sm" fullWidth>View Project</Button>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
