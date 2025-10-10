import React from 'react';
import { Link } from '@heroui/react';

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  content: string;
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ content }) => {
  const [headings, setHeadings] = React.useState<Heading[]>([]);
  const [activeId, setActiveId] = React.useState<string>('');

  // Extract headings from content
  React.useEffect(() => {
    const extractedHeadings: Heading[] = [];
    const lines = content.split('\n');
    
    lines.forEach((line, index) => {
      if (line.startsWith('# ')) {
        const text = line.substring(2).trim();
        const id = text.toLowerCase().replace(/[^\w]+/g, '-');
        extractedHeadings.push({ id, text, level: 1 });
      } else if (line.startsWith('## ')) {
        const text = line.substring(3).trim();
        const id = text.toLowerCase().replace(/[^\w]+/g, '-');
        extractedHeadings.push({ id, text, level: 2 });
      } else if (line.startsWith('### ')) {
        const text = line.substring(4).trim();
        const id = text.toLowerCase().replace(/[^\w]+/g, '-');
        extractedHeadings.push({ id, text, level: 3 });
      }
    });
    
    setHeadings(extractedHeadings);
  }, [content]);

  // Track active heading based on scroll position
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -80% 0px' }
    );

    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      headings.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [headings]);

  if (headings.length < 3) return null;

  return (
    <div className="toc">
      <h4 className="text-sm font-semibold mb-2">Table of Contents</h4>
      <nav>
        {headings.map((heading) => (
          <Link
            key={heading.id}
            href={`#${heading.id}`}
            className={`toc-link toc-h${heading.level} ${activeId === heading.id ? 'active' : ''}`}
          >
            {heading.text}
          </Link>
        ))}
      </nav>
    </div>
  );
};