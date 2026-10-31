import React from 'react';
import { Button, Card, CardBody, CardFooter, Chip } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion, useReducedMotion } from 'framer-motion';
import { ContentArtwork } from '../utils/ContentArtwork';
import { Section, SectionHeading } from '../utils/PageLayout';

const freelanceWorks = [
  {
    title: 'Harbo Life',
    category: 'Telemedicine & Wellness',
    description: 'A telemedicine experience focused on natural and organic medicine, connecting people with wellness guidance and convenient online care.',
    tags: ['Telemedicine', 'Natural medicine', 'Healthcare'],
    liveUrl: 'https://harbolife.com',
    repoUrl: 'https://github.com/YeasineDewan/harbolife_main',
  },
  {
    title: 'Dr. Ibrahim Hossain Khan',
    category: 'Medical Professional Profile',
    description: 'A polished online profile for a physician, bringing professional credentials, areas of expertise, and patient contact details together in one place.',
    tags: ['Healthcare', 'Professional profile', 'Responsive'],
    liveUrl: 'https://dribrahimhossain.com/',
    repoUrl: 'https://github.com/YeasineDewan/Dr.-Ibrahim-Hossain-Khan',
  },
  {
    title: 'Medigo Healthcare',
    category: 'Hospital & Telemedicine Platform',
    description: 'An online hospital platform that brings telemedicine to patients and supports hospital operations with dedicated management workflows.',
    tags: ['Telemedicine', 'Hospital management', 'Healthcare'],
    liveUrl: 'https://medigohealthcare.vercel.app/',
    repoUrl: 'https://github.com/YeasineDewan/medigohealthcare',
  },
  {
    title: 'Nexara Agency Ltd.',
    category: 'Digital Agency',
    description: 'A digital agency presence presenting web development, marketing, brand strategy, and creative services through a clear, conversion-focused experience.',
    tags: ['Digital marketing', 'Web development', 'Agency'],
    liveUrl: 'https://nexaraagencyltd.vercel.app/',
    repoUrl: 'https://github.com/YeasineDewan/nexaraagencyltd.git',
  },
  {
    title: 'Borhan Uddin Sheik',
    category: 'Executive Portfolio',
    description: 'A personal portfolio for a hospital managing director, highlighting leadership experience, professional background, and work in healthcare.',
    tags: ['Portfolio', 'Healthcare leadership', 'Personal brand'],
    liveUrl: 'https://md.medigohealthcares.com/',
    repoUrl: 'https://github.com/YeasineDewan/Borhan-Uddin-Sheik-portfolio',
  },
  {
    title: 'Scholarhaat',
    category: 'Education & Tutor Discovery',
    description: 'An online education platform that helps learners discover tutors and find learning opportunities through a focused, accessible experience.',
    tags: ['Education', 'Tutor discovery', 'E-learning'],
    liveUrl: 'https://scholarhaat.com',
    repoUrl: 'https://github.com/YeasineDewan/scholarhaat',
  },
  {
    title: 'CarePath Patient Portal',
    category: 'Independent Concept',
    description: 'A concept for a calmer patient portal, bringing appointment planning, care-team contact, and visit preparation into a single responsive dashboard.',
    tags: ['Concept', 'Patient experience', 'Dashboard'],
  },
  {
    title: 'LearnLoop Tutor Hub',
    category: 'Independent Concept',
    description: 'A concept learning hub designed to make tutor discovery, lesson scheduling, and learner progress easier to manage online.',
    tags: ['Concept', 'Education', 'Scheduling'],
  },
];

export const FreelancingWorks = () => {
  const reduce = useReducedMotion();
  const trackRef = React.useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [paused, setPaused] = React.useState(false);

  const moveTo = (index: number) => {
    const nextIndex = (index + freelanceWorks.length) % freelanceWorks.length;
    const card = trackRef.current?.children[nextIndex] as HTMLElement | undefined;
    if (card) trackRef.current?.scrollTo({ left: card.offsetLeft, behavior: reduce ? 'auto' : 'smooth' });
    setActiveIndex(nextIndex);
  };

  React.useEffect(() => {
    if (reduce || paused) return;
    const timer = window.setTimeout(() => moveTo(activeIndex + 1), 4800);
    return () => window.clearTimeout(timer);
  }, [activeIndex, paused, reduce]);

  return (
    <Section className="bg-content2/30">
      <div className="container-custom">
        <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            badge="Selected Client Work"
            title="Freelancing "
            highlight="Works"
            description="A selection of digital experiences built for healthcare, education, professional services, and growing brands."
            center={false}
          />
          <div className="mb-12 flex shrink-0 gap-2 sm:mb-12">
            <Button
              isIconOnly
              variant="bordered"
              aria-label="Previous project"
              onPress={() => moveTo(activeIndex - 1)}
              className="border-content3 bg-content1/70"
            >
              <Icon icon="lucide:arrow-left" />
            </Button>
            <Button
              isIconOnly
              variant="bordered"
              aria-label="Next project"
              onPress={() => moveTo(activeIndex + 1)}
              className="border-content3 bg-content1/70"
            >
              <Icon icon="lucide:arrow-right" />
            </Button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="scrollbar-hidden -mx-2 flex snap-x snap-mandatory gap-5 overflow-x-auto px-2 pb-4"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setPaused(false);
          }}
          aria-label="Freelance project carousel"
        >
          {freelanceWorks.map((project, index) => (
            <motion.div
              key={project.title}
              className="w-full shrink-0 snap-start md:w-[calc((100%-1.25rem)/2)] xl:w-[calc((100%-2.5rem)/3)]"
              whileHover={reduce ? undefined : { y: -6 }}
              transition={{ duration: 0.2 }}
              aria-current={activeIndex === index ? 'true' : undefined}
            >
              <Card className="h-full overflow-hidden border border-content3/60 bg-content1 shadow-sm">
                <CardBody className="p-0">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <ContentArtwork
                      src="https://img.heroui.chat/image/website?w=800&h=450&u=freelance-project"
                      title={project.title}
                      keywords={`${project.category} ${project.tags.join(' ')}`}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/70 to-transparent p-4 pt-12">
                      <span className="text-xs font-semibold uppercase tracking-wide text-white/90">{project.category}</span>
                      <span className="rounded-full bg-white/15 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
                        {String(index + 1).padStart(2, '0')} / {String(freelanceWorks.length).padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="mb-2 text-lg font-bold leading-snug">{project.title}</h3>
                    <p className="mb-4 min-h-[4.5rem] text-sm leading-relaxed text-foreground-500">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <Chip key={tag} size="sm" variant="flat" color={tag === 'Concept' ? 'warning' : 'default'}>{tag}</Chip>
                      ))}
                    </div>
                  </div>
                </CardBody>
                <CardFooter className="gap-2 px-5 pb-5 pt-0">
                  {project.liveUrl ? (
                    <Button
                      as="a"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      color="primary"
                      variant="flat"
                      className="flex-1"
                      endContent={<Icon icon="lucide:external-link" />}
                    >
                      Live site
                    </Button>
                  ) : (
                    <span className="flex flex-1 items-center text-xs text-foreground-400">Exploratory concept</span>
                  )}
                  {project.repoUrl && (
                    <Button
                      as="a"
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      isIconOnly
                      variant="light"
                      aria-label={`View ${project.title} source code on GitHub`}
                    >
                      <Icon icon="lucide:github" className="text-lg" />
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between text-xs text-foreground-400">
          <span>Use arrows to explore</span>
          <span>{String(activeIndex + 1).padStart(2, '0')} of {String(freelanceWorks.length).padStart(2, '0')}</span>
        </div>
      </div>
    </Section>
  );
};