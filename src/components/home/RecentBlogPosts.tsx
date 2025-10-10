import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardFooter, Button, Chip } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { blogPosts } from '../../data/blogPosts';

export const RecentBlogPosts = () => {
  // Get only published posts, sorted by date (newest first)
  const recentPosts = [...blogPosts]
    .filter(post => post.status === 'published')
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 2);
  
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">Recent Articles</h2>
            <p className="text-foreground-500 max-w-2xl">
              Insights and tutorials on web development, security, and performance optimization.
            </p>
          </div>
          <Button
            as={Link}
            to="/blog"
            color="primary"
            variant="flat"
            endContent={<Icon icon="lucide:arrow-right" />}
          >
            View All Articles
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recentPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="h-full card-hover">
                <CardBody className="p-0">
                  <div className="relative aspect-video">
                    <img 
                      src={post.coverImage} 
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex gap-2 mb-3">
                      {post.tags.slice(0, 2).map(tag => (
                        <Chip key={tag} color="primary" variant="flat" size="sm">{tag}</Chip>
                      ))}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                    <p className="text-foreground-500 mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center text-sm text-foreground-500">
                      <Icon icon="lucide:calendar" className="mr-1" />
                      <span>
                        {new Date(post.publishedAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </span>
                      <span className="mx-2">•</span>
                      <Icon icon="lucide:clock" className="mr-1" />
                      <span>{post.readingTime} min read</span>
                    </div>
                  </div>
                </CardBody>
                <CardFooter className="pt-0">
                  <Button 
                    as={Link}
                    to={`/blog/${post.slug}`}
                    color="primary" 
                    variant="flat"
                    fullWidth
                    endContent={<Icon icon="lucide:arrow-right" />}
                  >
                    Read Article
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};