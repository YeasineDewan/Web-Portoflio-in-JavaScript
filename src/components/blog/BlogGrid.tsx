import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardFooter, Button, Chip, Input } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { blogPosts } from '../../data/blogPosts';

export const BlogGrid = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedTags, setSelectedTags] = React.useState<string[]>([]);
  const [filteredPosts, setFilteredPosts] = React.useState(blogPosts);
  
  // Get all unique tags
  const allTags = React.useMemo(() => {
    const tags = new Set<string>();
    blogPosts.forEach(post => {
      post.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags);
  }, []);
  
  // Filter posts based on search query and selected tags
  React.useEffect(() => {
    let filtered = [...blogPosts].filter(post => post.status === 'published');
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(query) || 
        post.excerpt.toLowerCase().includes(query) ||
        post.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    if (selectedTags.length > 0) {
      filtered = filtered.filter(post => 
        selectedTags.every(tag => post.tags.includes(tag))
      );
    }
    
    // Sort by date (newest first)
    filtered.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
    
    setFilteredPosts(filtered);
  }, [searchQuery, selectedTags]);

  const handleTagClick = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag) 
        : [...prev, tag]
    );
  };

  // Add estimated reading time calculation
  const calculateReadingTime = (text: string): number => {
    const wordsPerMinute = 200;
    const words = text.split(/\s+/).length;
    return Math.ceil(words / wordsPerMinute);
  };

  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <h2 className="text-3xl font-bold">Blog</h2>
          
          <Input
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            startContent={<Icon icon="lucide:search" className="text-default-400" />}
            isClearable
            onClear={() => setSearchQuery('')}
            className="max-w-xs"
          />
        </div>
        
        {/* Tags filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {allTags.map(tag => (
            <Chip
              key={tag}
              color={selectedTags.includes(tag) ? "primary" : "default"}
              variant={selectedTags.includes(tag) ? "solid" : "flat"}
              className="cursor-pointer"
              onClick={() => handleTagClick(tag)}
            >
              {tag}
            </Chip>
          ))}
          {selectedTags.length > 0 && (
            <Button
              size="sm"
              variant="light"
              onPress={() => setSelectedTags([])}
              startContent={<Icon icon="lucide:x" className="text-xs" />}
            >
              Clear filter
            </Button>
          )}
        </div>

        {filteredPosts.length === 0 ? (
          <div className="text-center py-16">
            <Icon icon="lucide:file-x" className="text-4xl text-foreground-400 mx-auto mb-4" />
            <h3 className="text-xl font-medium mb-2">No articles found</h3>
            <p className="text-foreground-500">
              No articles match your search criteria. Try different keywords or tags.
            </p>
            <Button 
              color="primary" 
              variant="flat" 
              className="mt-4"
              onPress={() => {
                setSearchQuery('');
                setSelectedTags([]);
              }}
            >
              Reset Filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post, index) => (
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
                          <Chip 
                            key={tag} 
                            color="primary" 
                            variant="flat" 
                            size="sm"
                            className="cursor-pointer"
                            onClick={(e) => {
                              e.preventDefault();
                              handleTagClick(tag);
                            }}
                          >
                            {tag}
                          </Chip>
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
                        <span>{calculateReadingTime(post.excerpt)} min read</span>
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
        )}
      </div>
    </section>
  );
};