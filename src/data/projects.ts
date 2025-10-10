export const projects = [
  {
    id: 1,
    title: 'Secure Web App Starter',
    slug: 'secure-web-app-starter',
    description: 'A comprehensive starter template for secure web applications using Next.js and MongoDB with authentication, RBAC, CSP, and rate limiting.',
    highlights: [
      'Built-in authentication system with JWT and secure HTTP-only cookies',
      'Role-based access control (RBAC) for fine-grained permissions',
      'Content Security Policy (CSP) implementation',
      'Rate limiting to prevent brute force attacks',
      'Input validation and sanitization',
      'CSRF protection'
    ],
    techStack: ['Next.js', 'MongoDB', 'TypeScript', 'Tailwind CSS', 'NextAuth.js'],
    repoUrl: 'https://github.com/dewanshawon/secure-web-app-starter',
    liveUrl: 'https://secure-web-app-starter.vercel.app',
    coverImage: 'https://img.heroui.chat/image/dashboard?w=800&h=450&u=project-1',
    images: [
      'https://img.heroui.chat/image/dashboard?w=1200&h=800&u=project-1-1',
      'https://img.heroui.chat/image/dashboard?w=1200&h=800&u=project-1-2',
      'https://img.heroui.chat/image/dashboard?w=1200&h=800&u=project-1-3'
    ],
    tags: ['Full-Stack', 'Security', 'Next.js', 'MongoDB', 'Authentication'],
    featured: true,
    year: 2024,
    securityNotes: 'This starter template implements security best practices including secure authentication, CSRF protection, input validation, rate limiting, and proper content security policies. It also includes secure password hashing, secure session management, and protection against common web vulnerabilities.'
  },
  {
    id: 2,
    title: 'CDN-Optimized Landing Page',
    slug: 'cdn-optimized-landing-page',
    description: 'A high-performance landing page template with Lighthouse score 95+, optimized images, and CDN configuration.',
    highlights: [
      'Lighthouse performance score of 95+',
      'Optimized image loading with WebP format and lazy loading',
      'CDN configuration for global content delivery',
      'Core Web Vitals optimization',
      'Responsive design for all devices',
      'SEO-friendly structure'
    ],
    techStack: ['React', 'Vite', 'Tailwind CSS', 'Cloudflare CDN'],
    repoUrl: 'https://github.com/dewanshawon/cdn-optimized-landing',
    liveUrl: 'https://cdn-optimized-landing.vercel.app',
    coverImage: 'https://img.heroui.chat/image/landing?w=800&h=450&u=project-2',
    images: [
      'https://img.heroui.chat/image/landing?w=1200&h=800&u=project-2-1',
      'https://img.heroui.chat/image/landing?w=1200&h=800&u=project-2-2',
      'https://img.heroui.chat/image/landing?w=1200&h=800&u=project-2-3'
    ],
    tags: ['Frontend', 'Performance', 'React', 'CDN', 'SEO'],
    featured: true,
    year: 2023,
    securityNotes: 'This landing page implements security headers, subresource integrity for external resources, and proper CORS configuration. It also uses HTTPS-only resources and implements CSP to prevent XSS attacks.'
  },
  {
    id: 3,
    title: 'Vulnerability Management Dashboard',
    slug: 'vulnerability-management-dashboard',
    description: 'A comprehensive dashboard for tracking security vulnerabilities, risk scoring, and generating reports.',
    highlights: [
      'Real-time vulnerability tracking and management',
      'Risk scoring based on CVSS',
      'Detailed reporting and analytics',
      'Integration with scanning tools',
      'Remediation workflow management',
      'User role-based access control'
    ],
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Chart.js'],
    repoUrl: 'https://github.com/dewanshawon/vulnerability-dashboard',
    liveUrl: 'https://vulnerability-dashboard.vercel.app',
    coverImage: 'https://img.heroui.chat/image/dashboard?w=800&h=450&u=project-3',
    images: [
      'https://img.heroui.chat/image/dashboard?w=1200&h=800&u=project-3-1',
      'https://img.heroui.chat/image/dashboard?w=1200&h=800&u=project-3-2',
      'https://img.heroui.chat/image/dashboard?w=1200&h=800&u=project-3-3'
    ],
    tags: ['Full-Stack', 'Security', 'React', 'Node.js', 'Dashboard'],
    featured: true,
    year: 2024,
    securityNotes: 'This dashboard implements secure authentication with MFA, role-based access control, encrypted storage of sensitive data, audit logging, and secure API endpoints with proper rate limiting and input validation.'
  },
  {
    id: 4,
    title: 'E-commerce Security Audit Tool',
    slug: 'ecommerce-security-audit',
    description: 'A specialized tool for auditing e-commerce websites for security vulnerabilities and compliance issues.',
    highlights: [
      'Automated security scanning for e-commerce platforms',
      'PCI DSS compliance checking',
      'Payment gateway security verification',
      'Customer data protection assessment',
      'Detailed reporting with remediation steps',
      'Scheduled scanning and monitoring'
    ],
    techStack: ['Python', 'React', 'PostgreSQL', 'Docker'],
    repoUrl: 'https://github.com/dewanshawon/ecommerce-security-audit',
    liveUrl: 'https://ecommerce-security-audit.vercel.app',
    coverImage: 'https://img.heroui.chat/image/dashboard?w=800&h=450&u=project-4',
    images: [
      'https://img.heroui.chat/image/dashboard?w=1200&h=800&u=project-4-1',
      'https://img.heroui.chat/image/dashboard?w=1200&h=800&u=project-4-2'
    ],
    tags: ['Security', 'E-commerce', 'Audit', 'Compliance', 'Python'],
    featured: false,
    year: 2023,
    securityNotes: 'This tool is designed with security in mind, implementing secure API access, encrypted storage of scan results, and secure credential management. It also includes protection against common web vulnerabilities and secure report generation.'
  },
  {
    id: 5,
    title: 'Secure File Sharing Platform',
    slug: 'secure-file-sharing',
    description: 'An end-to-end encrypted file sharing platform with secure access controls and expiring links.',
    highlights: [
      'End-to-end encryption for all files',
      'Secure access controls with expiring links',
      'Two-factor authentication for sensitive operations',
      'Audit logging of all file access',
      'Secure deletion of expired content',
      'Zero-knowledge architecture'
    ],
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'AWS S3'],
    repoUrl: 'https://github.com/dewanshawon/secure-file-sharing',
    liveUrl: 'https://secure-file-sharing.vercel.app',
    coverImage: 'https://img.heroui.chat/image/dashboard?w=800&h=450&u=project-5',
    images: [
      'https://img.heroui.chat/image/dashboard?w=1200&h=800&u=project-5-1',
      'https://img.heroui.chat/image/dashboard?w=1200&h=800&u=project-5-2'
    ],
    tags: ['Full-Stack', 'Security', 'Encryption', 'React', 'Node.js'],
    featured: false,
    year: 2023,
    securityNotes: 'This platform implements client-side encryption, secure key management, secure file storage with AWS S3, access control lists, and secure sharing mechanisms. It also includes protection against common web vulnerabilities and secure deletion of expired content.'
  },
  {
    id: 6,
    title: 'Performance Monitoring Dashboard',
    slug: 'performance-monitoring',
    description: 'A real-time performance monitoring dashboard for web applications with alerts and historical data analysis.',
    highlights: [
      'Real-time performance metrics monitoring',
      'Core Web Vitals tracking',
      'Custom alert configuration',
      'Historical data analysis and trends',
      'Integration with popular monitoring tools',
      'Customizable dashboards'
    ],
    techStack: ['React', 'Node.js', 'Express', 'InfluxDB', 'Chart.js'],
    repoUrl: 'https://github.com/dewanshawon/performance-monitoring',
    liveUrl: 'https://performance-monitoring.vercel.app',
    coverImage: 'https://img.heroui.chat/image/dashboard?w=800&h=450&u=project-6',
    images: [
      'https://img.heroui.chat/image/dashboard?w=1200&h=800&u=project-6-1',
      'https://img.heroui.chat/image/dashboard?w=1200&h=800&u=project-6-2'
    ],
    tags: ['Full-Stack', 'Performance', 'Monitoring', 'React', 'Node.js'],
    featured: false,
    year: 2022,
    securityNotes: 'This dashboard implements secure authentication, role-based access control, secure API endpoints, and protection against common web vulnerabilities. It also includes secure storage of monitoring data and secure alert configuration.'
  }
];
