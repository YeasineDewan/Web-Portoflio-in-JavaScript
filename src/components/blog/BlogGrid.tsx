import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardFooter, Button, Chip, Input } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { blogPosts } from '../../data/blogPosts';
import { ContentArtwork } from '../utils/ContentArtwork';
import { stagger, fadeUp } from '../utils/PageLayout';

export const BlogGrid = () => {
  const reduce = useReducedMotion();
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedTags, setSelectedTags] = React.useState<string[]>([]);

  const allTags = React.useMemo(() => {
    const tags = new Set<string>();
    blogPosts.forEach(p => p.tags.forEach(t => tags.add(t)));
    return Array.from(tags);
  }, []);

  const filteredPosts = React.useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return blogPosts
      .filter(p => p.status === 'published')
      .filter(p => !q || [p.title, p.excerpt, ...p.tags].some(v => v.toLowerCase().includes(q)))
      .filter(p => selectedTags.length === 0 || selectedTags.every(t => p.tags.includes(t)))
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  }, [searchQuery, selectedTags]);

  const toggleTag = (tag: string) =>
    setSelectedTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]);

  return (
    <section className="py-16">
      <div className="container-custom">
        {/* Controls */}
        <motion.div
          variants={reduce ? undefined : stagger(0.08)}
          initial={reduce ? undefined : 'hidden'}
          whileInView="show"
          viewport={{ once: true }}
          className="mb-8 space-y-4"
        >
          <motion.div variants={reduce ? undefined : fadeUp} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h2 className="text-3xl font-bold">All Articles</h2>
            <Input
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              startContent={<Icon icon="lucide:search" className="text-default-400" />}
              isClearable
              onClear={() => setSearchQuery('')}
              size="sm"
              className="w-full sm:max-w-xs"
              classNames={{ inputWrapper: 'bg-content2 border border-content3' }}
            />
          </motion.div>

          {/* Tag filters */}
          <motion.div variants={reduce ? undefined : fadeUp} className="flex flex-wrap gap-2">
            {allTags.map(tag => (
              <motion.button
                key={tag}
                onClick={() => toggleTag(tag)}
                whileHover={reduce ? undefined : { scale: 1.05 }}
                whileTap={reduce ? undefined : { scale: 0.97 }}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
                  selectedTags.includes(tag)
                    ? 'bg-primary text-white shadow-md shadow-primary/25'
                    : 'bg-content2 text-foreground-600 hover:bg-content3'
                }`}
              >
                {tag}
              </motion.button>
            ))}
            {selectedTags.length > 0 && (
              <button
                onClick={() => setSelectedTags([])}
                className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-danger/10 text-danger hover:bg-danger/20 transition-colors"
              >
                <Icon icon="lucide:x" className="text-xs" />
                Clear
              </button>
            )}
          </motion.div>
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          {filteredPosts.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center py-20"
            >
              <div className="w-20 h-20 rounded-2xl bg-content2 flex items-center justify-center mx-auto mb-4">
                <Icon icon="lucide:file-x" className="text-3xl text-foreground-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No articles found</h3>
              <p className="text-foreground-500 mb-6">Try different keywords or tags.</p>
              <Button color="primary" variant="flat" onPress={() => { setSearchQuery(''); setSelectedTags([]); }}>
                Reset Filters
              </Button>
            </motion.div>
          ) : (
            <motion.div
              key={`${searchQuery}-${selectedTags.join(',')}`}
              variants={reduce ? undefined : stagger(0.08)}
              initial={reduce ? undefined : 'hidden'}
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredPosts.map((post) => (
                <motion.div
                  key={post.id}
                  variants={reduce ? undefined : fadeUp}
                  whileHover={reduce ? undefined : { y: -6, transition: { duration: 0.25 } }}
                  className="card-glow group"
                >
                  <Card className="h-full overflow-hidden border border-content3/50">
                    <CardBody className="p-0">
                      <div className="relative aspect-video overflow-hidden">
                        <ContentArtwork
                          src={post.coverImage}
                          title={post.title}
                          keywords={post.tags.join(' ')}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <div className="p-5">
                        <div className="flex flex-wrap gap-1.5 mb-3">
                          {post.tags.slice(0, 2).map(tag => (
                            <Chip
                              key={tag}
                              color="primary"
                              variant="flat"
                              size="sm"
                              className="cursor-pointer"
                              onClick={(e) => { e.preventDefault(); toggleTag(tag); }}
                            >
                              {tag}
                            </Chip>
                          ))}
                        </div>
                        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-200 line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-foreground-500 mb-4 line-clamp-2 text-sm leading-relaxed">{post.excerpt}</p>
                        <div className="flex items-center gap-3 text-xs text-foreground-500">
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
                    <CardFooter className="pt-0 px-5 pb-5">
                      <Button as={Link} to={`/blog/${post.slug}`} color="primary" variant="flat" fullWidth size="sm" endContent={<Icon icon="lucide:arrow-right" />}>
                        Read Article
                      </Button>
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
