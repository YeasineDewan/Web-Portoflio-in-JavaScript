import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button, Chip, Divider, Card, CardBody } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { blogPosts } from '../data/blogPosts';
import { TableOfContents } from '../components/blog/TableOfContents';
import { CodeBlock } from '../components/utils/CodeBlock';

export const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);
  
  if (!post) {
    return (
      <div className="container-custom py-24 text-center">
        <Icon icon="lucide:file-x" className="text-6xl text-foreground-400 mx-auto mb-6" />
        <h2 className="text-3xl font-bold mb-4">Article Not Found</h2>
        <p className="text-foreground-500 mb-8">
          The article you're looking for doesn't exist or has been removed.
        </p>
        <Button 
          as={Link}
          to="/blog"
          color="primary"
          startContent={<Icon icon="lucide:arrow-left" />}
        >
          Back to Blog
        </Button>
      </div>
    );
  }

  // Enhanced markdown renderer with proper code block support and heading IDs
  const renderMarkdown = (content: string) => {
    // Track if we're inside a code block
    let inCodeBlock = false;
    let currentCodeBlock = '';
    let language = '';
    
    // Split by line breaks
    const lines = content.split('\n');
    const elements: JSX.Element[] = [];
    
    lines.forEach((line, index) => {
      // Handle code block start
      if (line.startsWith('```')) {
        if (!inCodeBlock) {
          inCodeBlock = true;
          language = line.slice(3).trim();
          currentCodeBlock = '';
        } else {
          // End of code block
          elements.push(
            <CodeBlock key={`code-${index}`} code={currentCodeBlock} language={language} />
          );
          inCodeBlock = false;
        }
        return;
      }
      
      // Inside code block
      if (inCodeBlock) {
        currentCodeBlock += line + '\n';
        return;
      }
      
      // Heading 1
      if (line.startsWith('# ')) {
        const text = line.substring(2);
        const id = text.toLowerCase().replace(/[^\w]+/g, '-');
        elements.push(
          <h1 id={id} key={index} className="text-3xl font-bold mt-8 mb-4 scroll-mt-24">
            {text}
          </h1>
        );
        return;
      }
      
      // Heading 2
      if (line.startsWith('## ')) {
        const text = line.substring(3);
        const id = text.toLowerCase().replace(/[^\w]+/g, '-');
        elements.push(
          <h2 id={id} key={index} className="text-2xl font-bold mt-8 mb-4 scroll-mt-24">
            {text}
          </h2>
        );
        return;
      }
      
      // Heading 3
      if (line.startsWith('### ')) {
        const text = line.substring(4);
        const id = text.toLowerCase().replace(/[^\w]+/g, '-');
        elements.push(
          <h3 id={id} key={index} className="text-xl font-bold mt-6 mb-3 scroll-mt-24">
            {text}
          </h3>
        );
        return;
      }
      
      // Unordered list item
      if (line.startsWith('- ')) {
        elements.push(<li key={index} className="ml-6 mb-2">{line.substring(2)}</li>);
        return;
      }
      
      // Empty line
      if (line.trim() === '') {
        elements.push(<br key={index} />);
        return;
      }
      
      // Regular paragraph
      elements.push(<p key={index} className="mb-4">{line}</p>);
    });
    
    return (
      <div className="prose prose-lg dark:prose-invert max-w-none">
        {elements}
      </div>
    );
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-content2/50 py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Link 
              to="/blog" 
              className="inline-flex items-center text-foreground-500 hover:text-primary mb-4"
            >
              <Icon icon="lucide:arrow-left" className="mr-1" />
              Back to Blog
            </Link>
            
            <div className="flex gap-2 mb-4">
              {post.tags.map(tag => (
                <Chip key={tag} color="primary" variant="flat" size="sm">{tag}</Chip>
              ))}
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
            
            <div className="flex items-center text-foreground-500 mb-8">
              <div className="flex items-center">
                <Icon icon="lucide:calendar" className="mr-1" />
                <span>
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
              <span className="mx-2">•</span>
              <div className="flex items-center">
                <Icon icon="lucide:clock" className="mr-1" />
                <span>{post.readingTime} min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Featured Image */}
      <div className="container-custom py-8">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-lg overflow-hidden mb-8">
            <img 
              src={post.coverImage} 
              alt={post.title}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
      
      {/* Main Content with Table of Contents */}
      <div className="container-custom py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl"
            >
              {renderMarkdown(post.content)}
            </motion.div>
            
            <Divider className="my-12" />
            
            {/* Enhanced Share and Tags section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
              <div>
                <p className="text-foreground-500 mb-2">Share this article:</p>
                <div className="flex gap-2">
                  <Button
                    isIconOnly
                    variant="flat"
                    size="sm"
                    aria-label="Share on Twitter"
                    onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`, '_blank')}
                  >
                    <Icon icon="lucide:twitter" />
                  </Button>
                  <Button
                    isIconOnly
                    variant="flat"
                    size="sm"
                    aria-label="Share on LinkedIn"
                    onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank')}
                  >
                    <Icon icon="lucide:linkedin" />
                  </Button>
                  <Button
                    isIconOnly
                    variant="flat"
                    size="sm"
                    aria-label="Share on Facebook"
                    onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')}
                  >
                    <Icon icon="lucide:facebook" />
                  </Button>
                </div>
              </div>
              
              <div>
                <p className="text-foreground-500 mb-2">Tags:</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <Chip key={tag} variant="flat" size="sm">{tag}</Chip>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Sidebar with Table of Contents */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="sticky top-24 space-y-8">
                {/* Table of Contents */}
                <Card className="mb-8">
                  <CardBody className="p-4">
                    <TableOfContents content={post.content} />
                  </CardBody>
                </Card>
                
                {/* Author Card */}
                <Card>
                  <CardBody className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                        <img 
                          src="https://img.heroui.chat/image/avatar?w=200&h=200&u=yeasine-avatar" 
                          alt="Yeasine Dewan" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="font-semibold text-lg">MD. Yeasine Dewan Shawon</h3>
                      <p className="text-foreground-500 text-sm mb-4">Lead Web Developer · Cybersecurity‑Focused Full‑Stack Engineer</p>
                      <Button
                        as={Link}
                        to="/about"
                        variant="flat"
                        color="primary"
                        size="sm"
                      >
                        About Me
                      </Button>
                    </div>
                  </CardBody>
                </Card>
                
                {/* Recent Posts */}
                <Card>
                  <CardBody className="p-6">
                    <h3 className="font-semibold text-lg mb-4">Recent Articles</h3>
                    <div className="space-y-4">
                      {blogPosts
                        .filter(p => p.id !== post.id && p.status === 'published')
                        .slice(0, 3)
                        .map(recentPost => (
                          <div key={recentPost.id} className="group">
                            <Link to={`/blog/${recentPost.slug}`} className="block group-hover:text-primary transition-colors">
                              <h4 className="font-medium mb-1 line-clamp-2">{recentPost.title}</h4>
                              <p className="text-foreground-500 text-sm">
                                {new Date(recentPost.publishedAt).toLocaleDateString('en-US', {
                                  year: 'numeric',
                                  month: 'short',
                                  day: 'numeric'
                                })}
                              </p>
                            </Link>
                          </div>
                        ))}
                    </div>
                    <Button
                      as={Link}
                      to="/blog"
                      variant="light"
                      color="primary"
                      size="sm"
                      className="mt-4"
                      endContent={<Icon icon="lucide:arrow-right" />}
                    >
                      View All Articles
                    </Button>
                  </CardBody>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Related Posts */}
      <div className="bg-content2/50 py-16">
        <div className="container-custom">
          <h2 className="text-2xl font-semibold mb-8">You Might Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts
              .filter(p => p.id !== post.id && p.status === 'published')
              .slice(0, 3)
              .map((relatedPost) => (
                <Card key={relatedPost.id} className="card-hover">
                  <CardBody className="p-0">
                    <div className="aspect-video">
                      <img 
                        src={relatedPost.coverImage} 
                        alt={relatedPost.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex gap-2 mb-2">
                        {relatedPost.tags.slice(0, 1).map(tag => (
                          <Chip key={tag} size="sm" color="primary" variant="flat">{tag}</Chip>
                        ))}
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{relatedPost.title}</h3>
                      <p className="text-foreground-500 text-sm mb-4">
                        {new Date(relatedPost.publishedAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                        {' · '}{relatedPost.readingTime} min read
                      </p>
                      <Button
                        as={Link}
                        to={`/blog/${relatedPost.slug}`}
                        color="primary"
                        variant="flat"
                        size="sm"
                        fullWidth
                      >
                        Read Article
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