import { useParams, Link } from 'react-router-dom';
import { Button, Chip, Divider, Card, CardBody } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion, useReducedMotion } from 'framer-motion';
import { blogPosts } from '../data/blogPosts';
import { TableOfContents } from '../components/blog/TableOfContents';
import { CodeBlock } from '../components/utils/CodeBlock';
import { ContentArtwork } from '../components/utils/ContentArtwork';
import { FloatingOrbs, stagger, fadeUp, fadeLeft, fadeRight } from '../components/utils/PageLayout';

export const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const reduce = useReducedMotion();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="container-custom py-24 text-center">
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}>
          <div className="w-20 h-20 rounded-2xl bg-content2 flex items-center justify-center mx-auto mb-6">
            <Icon icon="lucide:file-x" className="text-4xl text-foreground-400" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Article Not Found</h2>
          <p className="text-foreground-500 mb-8">The article you're looking for doesn't exist or has been removed.</p>
          <Button as={Link} to="/blog" color="primary" startContent={<Icon icon="lucide:arrow-left" />}>
            Back to Blog
          </Button>
        </motion.div>
      </div>
    );
  }

  const renderMarkdown = (content: string) => {
    let inCodeBlock = false;
    let currentCodeBlock = '';
    let language = '';
    const elements: JSX.Element[] = [];

    content.split('\n').forEach((line, index) => {
      if (line.startsWith('```')) {
        if (!inCodeBlock) { inCodeBlock = true; language = line.slice(3).trim(); currentCodeBlock = ''; }
        else { elements.push(<CodeBlock key={`code-${index}`} code={currentCodeBlock} language={language} />); inCodeBlock = false; }
        return;
      }
      if (inCodeBlock) { currentCodeBlock += line + '\n'; return; }
      if (line.startsWith('# ')) {
        const text = line.substring(2);
        elements.push(<h1 id={text.toLowerCase().replace(/[^\w]+/g, '-')} key={index} className="text-3xl font-bold mt-8 mb-4 scroll-mt-24">{text}</h1>);
      } else if (line.startsWith('## ')) {
        const text = line.substring(3);
        elements.push(<h2 id={text.toLowerCase().replace(/[^\w]+/g, '-')} key={index} className="text-2xl font-bold mt-8 mb-4 scroll-mt-24">{text}</h2>);
      } else if (line.startsWith('### ')) {
        const text = line.substring(4);
        elements.push(<h3 id={text.toLowerCase().replace(/[^\w]+/g, '-')} key={index} className="text-xl font-bold mt-6 mb-3 scroll-mt-24">{text}</h3>);
      } else if (line.startsWith('- ')) {
        elements.push(<li key={index} className="ml-6 mb-2 text-foreground-600 dark:text-foreground-400">{line.substring(2)}</li>);
      } else if (line.trim() === '') {
        elements.push(<br key={index} />);
      } else {
        elements.push(<p key={index} className="mb-4 text-foreground-600 dark:text-foreground-400 leading-relaxed">{line}</p>);
      }
    });

    return <div className="prose prose-lg dark:prose-invert max-w-none">{elements}</div>;
  };

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
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={reduce ? undefined : fadeUp}>
              <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm text-foreground-500 hover:text-primary transition-colors mb-5">
                <Icon icon="lucide:arrow-left" className="text-sm" />
                Back to Blog
              </Link>
            </motion.div>

            <motion.div variants={reduce ? undefined : fadeUp} className="flex flex-wrap gap-2 mb-4">
              {post.tags.map(tag => <Chip key={tag} color="primary" variant="flat" size="sm">{tag}</Chip>)}
            </motion.div>

            <motion.h1 variants={reduce ? undefined : fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
              {post.title}
            </motion.h1>

            <motion.div variants={reduce ? undefined : fadeUp} className="flex flex-wrap items-center gap-4 text-sm text-foreground-500">
              <span className="flex items-center gap-1.5">
                <Icon icon="lucide:calendar" className="text-primary" />
                {new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
              <span className="flex items-center gap-1.5">
                <Icon icon="lucide:clock" className="text-primary" />
                {post.readingTime} min read
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Cover image */}
      <div className="container-custom py-8">
        <motion.div
          className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl"
          initial={reduce ? undefined : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ContentArtwork src={post.coverImage} title={post.title} keywords={post.tags.join(' ')} className="h-full w-full object-cover" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="container-custom py-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main content */}
          <motion.div
            className="lg:col-span-3"
            variants={reduce ? undefined : fadeLeft}
            initial={reduce ? undefined : 'hidden'}
            animate="show"
          >
            {renderMarkdown(post.content)}

            <Divider className="my-12" />

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <p className="text-sm text-foreground-500 mb-2 font-medium">Share this article</p>
                <div className="flex gap-2">
                  {[
                    { icon: 'lucide:twitter',  label: 'Twitter',  url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}` },
                    { icon: 'lucide:linkedin', label: 'LinkedIn', url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}` },
                    { icon: 'lucide:facebook', label: 'Facebook', url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}` },
                  ].map(s => (
                    <Button key={s.label} isIconOnly variant="flat" size="sm" aria-label={`Share on ${s.label}`} onPress={() => window.open(s.url, '_blank')}>
                      <Icon icon={s.icon} />
                    </Button>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm text-foreground-500 mb-2 font-medium">Tags</p>
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.map(tag => <Chip key={tag} variant="flat" size="sm">{tag}</Chip>)}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            variants={reduce ? undefined : fadeRight}
            initial={reduce ? undefined : 'hidden'}
            animate="show"
          >
            <div className="sticky top-24 space-y-6">
              <Card className="border border-content3/50">
                <CardBody className="p-4">
                  <TableOfContents content={post.content} />
                </CardBody>
              </Card>

              <Card className="border border-content3/50">
                <CardBody className="p-5">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full overflow-hidden mb-3 ring-2 ring-primary/20">
                      <img src="/img/about_hero_img.png" alt="Yeasine Dewan" loading="lazy" className="w-full h-full object-cover" />
                    </div>
                    <h3 className="font-semibold">MD. Yeasine Dewan Shawon</h3>
                    <p className="text-foreground-500 text-xs mt-1 mb-4">Full-Stack Engineer · Cybersecurity Expert</p>
                    <Button as={Link} to="/about" variant="flat" color="primary" size="sm" fullWidth>About Me</Button>
                  </div>
                </CardBody>
              </Card>

              <Card className="border border-content3/50">
                <CardBody className="p-5">
                  <h3 className="font-semibold mb-4">Recent Articles</h3>
                  <div className="space-y-4">
                    {blogPosts.filter(p => p.id !== post.id && p.status === 'published').slice(0, 3).map(p => (
                      <Link key={p.id} to={`/blog/${p.slug}`} className="group block">
                        <h4 className="text-sm font-medium line-clamp-2 group-hover:text-primary transition-colors">{p.title}</h4>
                        <p className="text-xs text-foreground-500 mt-0.5">
                          {new Date(p.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </p>
                      </Link>
                    ))}
                  </div>
                  <Button as={Link} to="/blog" variant="light" color="primary" size="sm" className="mt-4 w-full" endContent={<Icon icon="lucide:arrow-right" />}>
                    View All
                  </Button>
                </CardBody>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Related posts */}
      <section className="bg-content2/40 py-16 border-t border-divider">
        <div className="container-custom">
          <h2 className="text-2xl font-bold mb-8">You Might Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.filter(p => p.id !== post.id && p.status === 'published').slice(0, 3).map((p, i) => (
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
                      <ContentArtwork src={p.coverImage} title={p.title} keywords={p.tags.join(' ')} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
                    </div>
                    <div className="p-4">
                      <div className="flex gap-1.5 mb-2">
                        {p.tags.slice(0, 1).map(t => <Chip key={t} size="sm" color="primary" variant="flat">{t}</Chip>)}
                      </div>
                      <h3 className="text-base font-semibold mb-2 line-clamp-2">{p.title}</h3>
                      <p className="text-xs text-foreground-500 mb-3">{new Date(p.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} · {p.readingTime} min read</p>
                      <Button as={Link} to={`/blog/${p.slug}`} color="primary" variant="flat" size="sm" fullWidth>Read Article</Button>
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
