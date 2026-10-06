import { Link } from 'react-router-dom';
import { Card, CardBody, CardFooter, Button, Chip } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion, useReducedMotion } from 'framer-motion';
import { blogPosts } from '../../data/blogPosts';
import { ContentArtwork } from '../utils/ContentArtwork';
import { Section, SectionHeading, stagger, fadeUp } from '../utils/PageLayout';

export const RecentBlogPosts = () => {
  const reduce = useReducedMotion();
  const recentPosts = [...blogPosts]
    .filter(p => p.status === 'published')
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 2);

  return (
    <Section>
      <div className="container-custom">
        <motion.div
          variants={reduce ? undefined : stagger(0.1)}
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12"
        >
          <SectionHeading
            badge="Blog"
            title="Recent "
            highlight="Articles"
            description="Insights and tutorials on web development, security, and performance."
            center={false}
          />
          <motion.div variants={reduce ? undefined : fadeUp}>
            <Button as={Link} to="/blog" color="primary" variant="flat" endContent={<Icon icon="lucide:arrow-right" />}>
              View All Articles
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          variants={reduce ? undefined : stagger(0.15)}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {recentPosts.map((post) => (
            <motion.div
              key={post.id}
              variants={reduce ? undefined : fadeUp}
              whileHover={reduce ? undefined : { y: -6, transition: { duration: 0.25 } }}
              className="card-glow"
            >
              <Card className="h-full overflow-hidden border border-content3/50">
                <CardBody className="p-0">
                  <div className="relative aspect-video overflow-hidden">
                    <ContentArtwork
                      src={post.coverImage}
                      title={post.title}
                      keywords={post.tags.join(' ')}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                  <div className="p-5">
                    <div className="flex gap-2 mb-3">
                      {post.tags.slice(0, 2).map(tag => (
                        <Chip key={tag} color="primary" variant="flat" size="sm">{tag}</Chip>
                      ))}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                    <p className="text-foreground-500 mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center text-sm text-foreground-500 gap-3">
                      <span className="flex items-center gap-1">
                        <Icon icon="lucide:calendar" />
                        {new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Icon icon="lucide:clock" />
                        {post.readingTime} min read
                      </span>
                    </div>
                  </div>
                </CardBody>
                <CardFooter className="pt-0">
                  <Button as={Link} to={`/blog/${post.slug}`} color="primary" variant="flat" fullWidth endContent={<Icon icon="lucide:arrow-right" />}>
                    Read Article
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};
