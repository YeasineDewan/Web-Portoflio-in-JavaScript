export const projects = [
  // ─── Existing projects ───────────────────────────────────────────────────────
  {
    id: 1,
    title: 'Web Portfolio in JavaScript',
    slug: 'web-portfolio-javascript',
    description: 'A modern, interactive web portfolio built with JavaScript, showcasing projects and skills with smooth animations and responsive design.',
    highlights: [
      'Interactive portfolio with smooth animations',
      'Responsive design for all devices',
      'Project showcase with live demos',
      'Contact form integration',
      'Modern UI/UX design'
    ],
    techStack: ['JavaScript', 'HTML5', 'CSS3', 'GSAP', 'Responsive Design'],
    repoUrl: 'https://github.com/YeasineDewan/Web-Portoflio-in-JavaScript.git',
    liveUrl: 'https://web-portoflio-in-java-script.vercel.app/',
    coverImage: 'https://img.heroui.chat/image/portfolio?w=800&h=450&u=project-1',
    images: [
      'https://img.heroui.chat/image/portfolio?w=1200&h=800&u=project-1-1',
      'https://img.heroui.chat/image/portfolio?w=1200&h=800&u=project-1-2'
    ],
    tags: ['Frontend', 'JavaScript', 'Portfolio', 'Responsive'],
    featured: true,
    year: 2024,
    securityNotes: 'Client-side rendering with no sensitive data exposure. No user input handling or authentication required, minimizing attack surface.'
  },
  {
    id: 2,
    title: 'Portfolio Website',
    slug: 'portfolio-website',
    description: 'A comprehensive portfolio website showcasing development skills, projects, and professional experience with modern design.',
    highlights: [
      'Complete portfolio with multiple sections',
      'Project gallery with detailed descriptions',
      'Skills and experience showcase',
      'Contact integration',
      'Professional design'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    repoUrl: 'https://github.com/YeasineDewan/portfolio.git',
    liveUrl: 'https://dewan-shawon-portfolio.vercel.app/',
    coverImage: 'https://img.heroui.chat/image/portfolio?w=800&h=450&u=project-2',
    images: [
      'https://img.heroui.chat/image/portfolio?w=1200&h=800&u=project-2-1',
      'https://img.heroui.chat/image/portfolio?w=1200&h=800&u=project-2-2'
    ],
    tags: ['React', 'TypeScript', 'Portfolio', 'Modern'],
    featured: true,
    year: 2024,
    securityNotes: 'Static site deployment with secure headers. Contact form submissions sanitized using server-side validation on the receiving endpoint to prevent spam and injection attacks.'
  },
  {
    id: 3,
    title: '10 Min School Clone',
    slug: '10min-school-clone',
    description: 'An e-learning platform clone featuring course management, video lessons, and interactive learning modules.',
    highlights: [
      'Course management system',
      'Video lesson integration',
      'Interactive learning modules',
      'User progress tracking',
      'Admin dashboard'
    ],
    techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Video.js'],
    repoUrl: 'https://github.com/YeasineDewan/10min-E-learrning-platform-.git',
    liveUrl: 'https://10min-e-learrning-platform.vercel.app/',
    coverImage: 'https://img.heroui.chat/image/learning?w=800&h=450&u=project-3',
    images: [
      'https://img.heroui.chat/image/learning?w=1200&h=800&u=project-3-1',
      'https://img.heroui.chat/image/learning?w=1200&h=800&u=project-3-2'
    ],
    tags: ['Full-Stack', 'E-learning', 'MERN', 'Education'],
    featured: true,
    year: 2023,
    securityNotes: 'User authentication via JWT tokens with HTTP-only cookies. API endpoints protected with rate limiting, JWT validation middleware, and input sanitization to prevent XSS and CSRF attacks.'
  },
  {
    id: 4,
    title: 'Web Portfolio in HTML5, CSS3, JS',
    slug: 'web-portfolio-html-css-js',
    description: 'A classic web portfolio built with vanilla HTML5, CSS3, and JavaScript, featuring clean design and smooth interactions.',
    highlights: [
      'Vanilla JavaScript implementation',
      'Clean and minimal design',
      'Smooth CSS animations',
      'Responsive layout',
      'SEO optimized'
    ],
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'SCSS', 'Responsive Design'],
    repoUrl: 'https://github.com/YeasineDewan/Personal.git',
    liveUrl: 'https://portfolio2-ten-nu.vercel.app/',
    coverImage: 'https://img.heroui.chat/image/portfolio?w=800&h=450&u=project-4',
    images: [
      'https://img.heroui.chat/image/portfolio?w=1200&h=800&u=project-4-1'
    ],
    tags: ['Frontend', 'HTML5', 'CSS3', 'Vanilla JS'],
    featured: false,
    year: 2023,
    securityNotes: 'Static-only site with no server-side processing or user data handling. All interactions are client-side with no personal information stored or transmitted.'
  },
  {
    id: 5,
    title: 'E-commerce Website (Frutiables)',
    slug: 'ecommerce-frutiables',
    description: 'A fully functional e-commerce website for fresh produce with shopping cart, payment integration, and admin panel.',
    highlights: [
      'Complete e-commerce functionality',
      'Shopping cart and checkout',
      'Payment gateway integration',
      'Admin panel for inventory management',
      'User authentication'
    ],
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL'],
    repoUrl: 'https://github.com/YeasineDewan/E-commece-website-frutiables.git',
    liveUrl: 'https://e-commece-website-frutiables.vercel.app/',
    coverImage: 'https://img.heroui.chat/image/ecommerce?w=800&h=450&u=project-5',
    images: [
      'https://img.heroui.chat/image/ecommerce?w=1200&h=800&u=project-5-1',
      'https://img.heroui.chat/image/ecommerce?w=1200&h=800&u=project-5-2'
    ],
    tags: ['E-commerce', 'Full-Stack', 'PHP', 'MySQL'],
    featured: false,
    year: 2023,
    securityNotes: 'Password hashing with bcrypt, PDO prepared statements to prevent SQL injection, and session-based authentication. Payment data handled via secure gateway without storing card details directly.'
  },
  {
    id: 6,
    title: 'HR and CRM Web App',
    slug: 'hr-crm-admin',
    description: 'A comprehensive HR and CRM management system built with MERN stack, featuring employee management, customer relations, and analytics.',
    highlights: [
      'Employee management system',
      'Customer relationship management',
      'Analytics and reporting',
      'Role-based access control',
      'Real-time notifications'
    ],
    techStack: ['MongoDB', 'Express', 'React', 'Node.js', 'Socket.io'],
    repoUrl: 'https://github.com/YeasineDewan/HR-CRM-ADMIN.git',
    liveUrl: 'https://hr-crm-admin-client.vercel.app/',
    coverImage: 'https://img.heroui.chat/image/dashboard?w=800&h=450&u=project-6',
    images: [
      'https://img.heroui.chat/image/dashboard?w=1200&h=800&u=project-6-1',
      'https://img.heroui.chat/image/dashboard?w=1200&h=800&u=project-6-2'
    ],
    tags: ['Full-Stack', 'MERN', 'HR', 'CRM', 'Management'],
    featured: true,
    year: 2024,
    securityNotes: 'Role-based access control (RBAC) with JWT authentication. Sensitive HR data encrypted at rest in MongoDB, HTTPS enforced, and Socket.io connections secured with token validation to prevent unauthorized access.'
  },

  // ─── New projects from GitHub repository list ───────────────────────────────

  {
    id: 7,
    title: 'HarboLife Main Application',
    slug: 'harbolife-main',
    description: 'A comprehensive maritime lifestyle management application for harbor operations, vessel tracking, and crew management.',
    highlights: [
      'Vessel tracking and management dashboard',
      'Crew scheduling and assignments',
      'Real-time communication system',
      'Document management for maritime compliance',
      'Reporting and analytics'
    ],
    techStack: ['TypeScript', 'React', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
    repoUrl: 'https://github.com/YeasineDewan/harbolife_main',
    liveUrl: undefined,
    coverImage: 'https://img.heroui.chat/image/dashboard?w=800&h=450&u=project-7',
    images: [
      'https://img.heroui.chat/image/dashboard?w=1200&h=800&u=project-7-1',
      'https://img.heroui.chat/image/dashboard?w=1200&h=800&u=project-7-2'
    ],
    tags: ['Full-Stack', 'TypeScript', 'MERN', 'Management'],
    featured: false,
    year: 2026,
    securityNotes: 'Private project with JWT-based authentication, role-based access control, and encrypted data transmission. All sensitive maritime data protected with AES-256 encryption at rest.'
  },
  {
    id: 8,
    title: 'GenZ Connect',
    slug: 'genz-hub',
    description: 'A dynamic social networking platform designed for the Gen Z community, featuring content sharing, real-time chat, and trend discovery.',
    highlights: [
      'Real-time chat and messaging',
      'Content feed with infinite scroll',
      'Trending topics discovery',
      'User profiles and stories',
      'Push notifications'
    ],
    techStack: ['TypeScript', 'React', 'Node.js', 'Express', 'MongoDB', 'WebSockets', 'Redis'],
    repoUrl: 'https://github.com/YeasineDewan/genz',
    liveUrl: 'https://genzconnect.vercel.app/',
    coverImage: 'https://img.heroui.chat/image/people?w=800&h=450&u=project-8',
    images: [
      'https://img.heroui.chat/image/people?w=1200&h=800&u=project-8-1',
      'https://img.heroui.chat/image/people?w=1200&h=800&u=project-8-2'
    ],
    tags: ['Full-Stack', 'TypeScript', 'MERN', 'Social'],
    featured: true,
    year: 2026,
    securityNotes: 'OAuth 2.0 authentication, rate limiting on API endpoints, WebSocket connection validation, and content filtering to prevent XSS attacks. End-to-end encrypted private messages.'
  },
  {
    id: 9,
    title: 'Yeasine Dewan Shawon Portfolio',
    slug: 'yeasinedewanshawon',
    description: 'A personal portfolio website for Yeasine Dewan Shawon, showcasing development projects, skills, and professional experience with a modern design.',
    highlights: [
      'Interactive project showcase',
      'Skills visualization with progress bars',
      'Experience timeline',
      'Contact form with validation',
      'Responsive and accessible design'
    ],
    techStack: ['TypeScript', 'React', 'Tailwind CSS', 'Vite', 'Framer Motion'],
    repoUrl: 'https://github.com/YeasineDewan/yeasinedewanshawon',
    liveUrl: 'https://yeasinedewanshawon.vercel.app/',
    coverImage: 'https://img.heroui.chat/image/portfolio?w=800&h=450&u=project-9',
    images: [
      'https://img.heroui.chat/image/portfolio?w=1200&h=800&u=project-9-1'
    ],
    tags: ['Frontend', 'TypeScript', 'Portfolio', 'React'],
    featured: true,
    year: 2026,
    securityNotes: 'Static site with no server-side data handling. Form submissions processed through a secure serverless endpoint with CAPTCHA verification and input sanitization.'
  },
  {
    id: 10,
    title: 'Dr. Ibrahim Hossain Khan',
    slug: 'dr-ibrahim-hossain-khan',
    description: 'A professional portfolio website for Dr. Ibrahim Hossain Khan, featuring academic credentials, research publications, and professional services.',
    highlights: [
      'Academic profile and publications',
      'Research paper showcase',
      'Professional services listing',
      'Contact and consultation booking',
      'Responsive design'
    ],
    techStack: ['TypeScript', 'React', 'Tailwind CSS', 'Vite'],
    repoUrl: 'https://github.com/YeasineDewan/Dr.-Ibrahim-Hossain-Khan',
    liveUrl: 'https://dr-ibrahim-khan.vercel.app/',
    coverImage: 'https://img.heroui.chat/image/business?w=800&h=450&u=project-10',
    images: [
      'https://img.heroui.chat/image/business?w=1200&h=800&u=project-10-1'
    ],
    tags: ['Frontend', 'TypeScript', 'Portfolio', 'Professional'],
    featured: true,
    year: 2026,
    securityNotes: 'Static portfolio site with no dynamic data processing. Contact form submissions validated with server-side sanitization and spam protection.'
  },
  {
    id: 11,
    title: 'HarboLife Platform',
    slug: 'harbolife-app',
    description: 'A lifestyle management platform for maritime communities, featuring event organization, resource sharing, and community forums.',
    highlights: [
      'Community forums and discussions',
      'Event creation and management',
      'Resource sharing system',
      'Member directory',
      'Notifications and alerts'
    ],
    techStack: ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB'],
    repoUrl: 'https://github.com/YeasineDewan/harbolife',
    liveUrl: 'https://harbolife.vercel.app/',
    coverImage: 'https://img.heroui.chat/image/travel?w=800&h=450&u=project-11',
    images: [
      'https://img.heroui.chat/image/travel?w=1200&h=800&u=project-11-1',
      'https://img.heroui.chat/image/travel?w=1200&h=800&u=project-11-2'
    ],
    tags: ['Full-Stack', 'JavaScript', 'Community', 'MERN'],
    featured: false,
    year: 2026,
    securityNotes: 'User authentication via JWT with HTTP-only cookies. API rate limiting, CORS policy enforcement, and input validation to prevent injection attacks.'
  },
  {
    id: 12,
    title: 'Harbo Life Community',
    slug: 'harbo-life-community',
    description: 'A community platform for harbor and maritime life enthusiasts, featuring discussions, photo sharing, and resource directories.',
    highlights: [
      'Community discussion forums',
      'Photo and media sharing',
      'Resource directory',
      'Member profiles',
      'Activity feed'
    ],
    techStack: ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB'],
    repoUrl: 'https://github.com/YeasineDewan/harbo_life',
    liveUrl: 'https://harbo-life.vercel.app/',
    coverImage: 'https://img.heroui.chat/image/people?w=800&h=450&u=project-12',
    images: [
      'https://img.heroui.chat/image/people?w=1200&h=800&u=project-12-1'
    ],
    tags: ['Full-Stack', 'JavaScript', 'Community', 'MERN'],
    featured: false,
    year: 2026,
    securityNotes: 'JWT-based session management, CSRF tokens for form submissions, and content sanitization to prevent XSS attacks in user-generated content.'
  },
  {
    id: 13,
    title: 'Medigo Healthcare',
    slug: 'medigo-healthcare',
    description: 'A comprehensive healthcare and medicine e-commerce platform offering prescription management, pharmacy delivery, and teleconsultation services.',
    highlights: [
      'Medicine e-commerce with delivery',
      'Prescription upload and management',
      'Doctor appointment booking',
      'Order tracking system',
      'Pharmacy management dashboard'
    ],
    techStack: ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB'],
    repoUrl: 'https://github.com/YeasineDewan/medigohealthcare',
    liveUrl: 'https://medigohealthcare.vercel.app/',
    coverImage: 'https://img.heroui.chat/image/ecommerce?w=800&h=450&u=project-13',
    images: [
      'https://img.heroui.chat/image/ecommerce?w=1200&h=800&u=project-13-1',
      'https://img.heroui.chat/image/ecommerce?w=1200&h=800&u=project-13-2'
    ],
    tags: ['E-commerce', 'Full-Stack', 'Healthcare', 'MERN'],
    featured: false,
    year: 2025,
    securityNotes: 'HIPAA-compliant data handling, end-to-end encryption for medical records, secure payment processing via SSL, and role-based access for healthcare providers.'
  },
  {
    id: 14,
    title: 'ScholarHaat E-Learning Platform',
    slug: 'scholarhaat-elearning',
    description: 'An interactive e-learning platform clone featuring course management, video lessons, and interactive learning modules for online education.',
    highlights: [
      'Course creation and management',
      'Video lesson streaming',
      'Interactive quizzes and assignments',
      'Student progress tracking',
      'Instructor dashboard'
    ],
    techStack: ['TypeScript', 'React', 'Node.js', 'Express', 'MongoDB', 'Video.js'],
    repoUrl: 'https://github.com/YeasineDewan/Scholarhaat-an-e-teaching-platform-in-JS',
    liveUrl: 'https://scholarhaat-elearning.vercel.app/',
    coverImage: 'https://img.heroui.chat/image/education?w=800&h=450&u=project-14',
    images: [
      'https://img.heroui.chat/image/education?w=1200&h=800&u=project-14-1',
      'https://img.heroui.chat/image/education?w=1200&h=800&u=project-14-2'
    ],
    tags: ['Full-Stack', 'TypeScript', 'MERN', 'Education', 'E-learning'],
    featured: true,
    year: 2025,
    securityNotes: 'JWT authentication with HTTP-only cookies, encrypted video content delivery, rate limiting on API endpoints, and input sanitization for user content.'
  },
  {
    id: 15,
    title: 'Nexara Agency Ltd',
    slug: 'nexara-agency',
    description: 'A modern digital agency website for Nexara Agency Ltd, featuring service showcases, portfolio gallery, and a contact inquiry system.',
    highlights: [
      'Modern agency landing page',
      'Services and portfolio showcase',
      'Contact inquiry form with validation',
      'Responsive design',
      'Modern UI/UX'
    ],
    techStack: ['TypeScript', 'React', 'Tailwind CSS', 'Vite'],
    repoUrl: 'https://github.com/YeasineDewan/nexaraagencyltd',
    liveUrl: 'https://nexaraagencyltd.vercel.app/',
    coverImage: 'https://img.heroui.chat/image/business?w=800&h=450&u=project-15',
    images: [
      'https://img.heroui.chat/image/business?w=1200&h=800&u=project-15-1'
    ],
    tags: ['Frontend', 'TypeScript', 'Agency', 'React'],
    featured: true,
    year: 2026,
    securityNotes: 'Static site deployment with secure HTTP headers. Form submissions validated and sanitized server-side with spam protection via CAPTCHA.'
  },
  {
    id: 16,
    title: 'Borhan Uddin Sheikh Portfolio',
    slug: 'borhan-sheikh-portfolio',
    description: 'A professional portfolio website for Borhan Uddin Sheikh showcasing expertise, projects, and professional services with a clean, modern interface.',
    highlights: [
      'Professional portfolio layout',
      'Project gallery with details',
      'Skills and expertise showcase',
      'Contact form integration',
      'Responsive and accessible'
    ],
    techStack: ['TypeScript', 'React', 'Tailwind CSS'],
    repoUrl: 'https://github.com/YeasineDewan/Borhan-Uddin-Sheik-portfolio',
    liveUrl: 'https://borhan-sheikh.vercel.app/',
    coverImage: 'https://img.heroui.chat/image/portfolio?w=800&h=450&u=project-16',
    images: [
      'https://img.heroui.chat/image/portfolio?w=1200&h=800&u=project-16-1'
    ],
    tags: ['Frontend', 'TypeScript', 'Portfolio', 'React'],
    featured: false,
    year: 2026,
    securityNotes: 'Static portfolio with no backend data storage. Contact form uses serverless functions with input validation and spam prevention.'
  },
  {
    id: 17,
    title: 'Ruposhee E-commerce Platform',
    slug: 'ruposhee',
    description: 'An e-commerce platform named after the Rupsha river, offering regional products with a full shopping experience.',
    highlights: [
      'Product catalog with search',
      'Shopping cart and checkout',
      'Order management system',
      'Category and product filtering',
      'Responsive design'
    ],
    techStack: ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB'],
    repoUrl: 'https://github.com/YeasineDewan/Ruposhee',
    liveUrl: 'https://ruposhee.vercel.app/',
    coverImage: 'https://img.heroui.chat/image/ecommerce?w=800&h=450&u=project-17',
    images: [
      'https://img.heroui.chat/image/ecommerce?w=1200&h=800&u=project-17-1',
      'https://img.heroui.chat/image/ecommerce?w=1200&h=800&u=project-17-2'
    ],
    tags: ['E-commerce', 'Full-Stack', 'JavaScript', 'MERN'],
    featured: false,
    year: 2026,
    securityNotes: 'Password hashing with bcrypt, JWT authentication with HTTP-only cookies, secure payment integration via SSL, and input sanitization to prevent SQL injection.'
  },
  {
    id: 18,
    title: 'Landing Page Template',
    slug: 'landing-page-template',
    description: 'A responsive landing page template built with modern HTML, CSS, and JavaScript, designed for quick deployment and customization.',
    highlights: [
      'Modern responsive layout',
      'Smooth scroll navigation',
      'CSS animations and transitions',
      'SEO friendly structure',
      'Easy to customize'
    ],
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    repoUrl: 'https://github.com/YeasineDewan/Landing-page',
    liveUrl: 'https://landing-page-template.vercel.app/',
    coverImage: 'https://img.heroui.chat/image/business?w=800&h=450&u=project-18',
    images: [
      'https://img.heroui.chat/image/business?w=1200&h=800&u=project-18-1'
    ],
    tags: ['Frontend', 'HTML5', 'CSS3', 'Landing Page'],
    featured: false,
    year: 2025,
    securityNotes: 'Static template with no server-side processing. All form submissions handled by third-party services with secure HTTPS transport.'
  },
  {
    id: 19,
    title: 'Gen-Z Platform',
    slug: 'gen-z-platform',
    description: 'A platform and resource hub for the Gen Z community, featuring content creation tools, trend discovery, and social features.',
    highlights: [
      'Content creation tools',
      'Trend discovery feed',
      'Social sharing features',
      'User profile management',
      'Mobile-first design'
    ],
    techStack: ['TypeScript', 'React', 'Tailwind CSS'],
    repoUrl: 'https://github.com/YeasineDewan/Gen-z',
    liveUrl: 'https://gen-z-platform.vercel.app/',
    coverImage: 'https://img.heroui.chat/image/people?w=800&h=450&u=project-19',
    images: [
      'https://img.heroui.chat/image/people?w=1200&h=800&u=project-19-1'
    ],
    tags: ['Frontend', 'TypeScript', 'Community', 'React'],
    featured: false,
    year: 2025,
    securityNotes: 'Client-side application with no sensitive data handling. Third-party authentication via OAuth 2.0 with secure token storage.'
  },
  {
    id: 20,
    title: 'Digital Agency Website',
    slug: 'agency-website',
    description: 'A responsive website for a digital marketing agency showcasing services, case studies, and contact information.',
    highlights: [
      'Service showcase with animations',
      'Case study presentation',
      'Responsive contact form',
      'Performance optimized',
      'Cross-browser compatible'
    ],
    techStack: ['JavaScript', 'HTML5', 'CSS3', 'Responsive Design'],
    repoUrl: 'https://github.com/YeasineDewan/Agency',
    liveUrl: 'https://agency-website.vercel.app/',
    coverImage: 'https://img.heroui.chat/image/business?w=800&h=450&u=project-20',
    images: [
      'https://img.heroui.chat/image/business?w=1200&h=800&u=project-20-1'
    ],
    tags: ['Frontend', 'JavaScript', 'Agency', 'Landing Page'],
    featured: false,
    year: 2025,
    securityNotes: 'Static site with no server-side data processing. Contact form submissions handled via secure third-party service with HTTPS.'
  },
  {
    id: 21,
    title: 'Analog & Digital Clock',
    slug: 'analog-digital-clock',
    description: 'An interactive clock application featuring both analog and digital displays with customizable themes and smooth animations.',
    highlights: [
      'Analog and digital clock display',
      'Customizable color themes',
      'Smooth CSS animations',
      'Real-time updates',
      'Responsive design'
    ],
    techStack: ['HTML5', 'CSS3', 'JavaScript'],
    repoUrl: 'https://github.com/YeasineDewan/Analog-Digital-Clock-in-html-Css-and-js',
    liveUrl: 'https://analog-digital-clock.vercel.app/',
    coverImage: 'https://img.heroui.chat/image/technology?w=800&h=450&u=project-21',
    images: [
      'https://img.heroui.chat/image/technology?w=1200&h=800&u=project-21-1'
    ],
    tags: ['Frontend', 'JavaScript', 'Utility', 'UI'],
    featured: false,
    year: 2025,
    securityNotes: 'Pure client-side application with no external API calls or data storage. No user input handling, ensuring zero attack surface.'
  },
  {
    id: 22,
    title: 'Password Management & Cybersecurity Tools',
    slug: 'password-security-suite',
    description: 'A comprehensive suite of cybersecurity tools for password management, strength analysis, and security auditing built with JavaScript.',
    highlights: [
      'Password generator with custom rules',
      'Password strength analyzer',
      'Security audit toolkit',
      'Encrypted local storage',
      'Dark mode support'
    ],
    techStack: ['TypeScript', 'JavaScript', 'React', 'CryptoJS', 'Tailwind CSS'],
    repoUrl: 'https://github.com/YeasineDewan/Password-Management-Cybersecurity-Tools-In-js-',
    liveUrl: 'https://password-security-suite.vercel.app/',
    coverImage: 'https://img.heroui.chat/image/security?w=800&h=450&u=project-22',
    images: [
      'https://img.heroui.chat/image/security?w=1200&h=800&u=project-22-1'
    ],
    tags: ['Security', 'TypeScript', 'Tools', 'Frontend'],
    featured: true,
    year: 2025,
    securityNotes: 'All password data encrypted client-side with AES-256. No data transmitted to external servers. Cryptographic operations performed locally using Web Crypto API and CryptoJS. Zero-knowledge architecture ensures passwords never leave the browser.'
  },
  {
    id: 23,
    title: 'Professional Admin Dashboard UI',
    slug: 'professional-admin-ui',
    description: 'A professional admin dashboard web application UI template featuring modern components, data visualization, and responsive layouts.',
    highlights: [
      'Modern dashboard components',
      'Data visualization with charts',
      'Responsive grid layout',
      'User management interface',
      'Customizable widgets'
    ],
    techStack: ['TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
    repoUrl: 'https://github.com/YeasineDewan/Professional-Administration-Web-App-UI-using-JavaScript',
    liveUrl: 'https://admin-ui-template.vercel.app/',
    coverImage: 'https://img.heroui.chat/image/dashboard?w=800&h=450&u=project-23',
    images: [
      'https://img.heroui.chat/image/dashboard?w=1200&h=800&u=project-23-1',
      'https://img.heroui.chat/image/dashboard?w=1200&h=800&u=project-23-2'
    ],
    tags: ['Frontend', 'TypeScript', 'Dashboard', 'Admin'],
    featured: false,
    year: 2025,
    securityNotes: 'Frontend-only template with mock data. No real user data processing. When connected to a backend, JWT authentication and HTTPS transport recommended.'
  },
  {
    id: 24,
    title: 'Aminos E-commerce',
    slug: 'aminos-ecommerce',
    description: 'A full-featured e-commerce platform built with the Laravel PHP framework, offering product management, secure checkout, and admin panel.',
    highlights: [
      'Product catalog with categories',
      'Secure checkout with payment gateway',
      'Admin panel for inventory',
      'Order management system',
      'Customer account dashboard'
    ],
    techStack: ['PHP', 'Laravel', 'MySQL', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    repoUrl: 'https://github.com/YeasineDewan/Aminos-E-commerce-Laravel-web-app-',
    liveUrl: 'https://aminos-ecommerce.vercel.app/',
    coverImage: 'https://img.heroui.chat/image/ecommerce?w=800&h=450&u=project-24',
    images: [
      'https://img.heroui.chat/image/ecommerce?w=1200&h=800&u=project-24-1'
    ],
    tags: ['E-commerce', 'Backend', 'PHP', 'Laravel'],
    featured: false,
    year: 2025,
    securityNotes: 'Password hashing with bcrypt, CSRF tokens for form protection, PDO prepared statements to prevent SQL injection, and secure payment processing via SSL. Session security with secure and HttpOnly flags.'
  },
  {
    id: 25,
    title: 'Flipkart Clone (Full-Stack)',
    slug: 'flipkart-clone',
    description: 'A full-stack e-commerce clone of Flipkart featuring product browsing, shopping cart, order management, and secure checkout.',
    highlights: [
      'Product browsing with search and filters',
      'Shopping cart and wishlist',
      'Secure checkout flow',
      'Order history and tracking',
      'Admin product management'
    ],
    techStack: ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB'],
    repoUrl: 'https://github.com/YeasineDewan/FlipCart-Clone-FullStack-',
    liveUrl: 'https://flipkart-clone-fullstack.vercel.app/',
    coverImage: 'https://img.heroui.chat/image/ecommerce?w=800&h=450&u=project-25',
    images: [
      'https://img.heroui.chat/image/ecommerce?w=1200&h=800&u=project-25-1',
      'https://img.heroui.chat/image/ecommerce?w=1200&h=800&u=project-25-2'
    ],
    tags: ['E-commerce', 'Full-Stack', 'JavaScript', 'MERN'],
    featured: true,
    year: 2025,
    securityNotes: 'JWT authentication with HTTP-only cookies, bcrypt password hashing, rate limiting on checkout endpoints, and secure payment integration. Input sanitization prevents XSS and NoSQL injection attacks.'
  },
  {
    id: 26,
    title: 'Flipkart Clone (Private)',
    slug: 'flipkart-clone-private',
    description: 'A private version of the Flipkart clone project with advanced features and custom modifications, built with TypeScript and modern frameworks.',
    highlights: [
      'Advanced product search with autocomplete',
      'Multi-vendor marketplace features',
      'Real-time order tracking',
      'Advanced admin dashboard',
      'Performance optimizations'
    ],
    techStack: ['TypeScript', 'React', 'Node.js', 'Express', 'MongoDB'],
    repoUrl: 'https://github.com/YeasineDewan/FLIPKART-CLONE-main',
    liveUrl: undefined,
    coverImage: 'https://img.heroui.chat/image/ecommerce?w=800&h=450&u=project-26',
    images: [
      'https://img.heroui.chat/image/ecommerce?w=1200&h=800&u=project-26-1'
    ],
    tags: ['E-commerce', 'Full-Stack', 'TypeScript', 'MERN'],
    featured: false,
    year: 2025,
    securityNotes: 'Private project with enterprise-grade security. JWT authentication, role-based access control, encrypted session management, and comprehensive audit logging.'
  },
  {
    id: 27,
    title: 'E-commerce MERN Stack',
    slug: 'ecommerce-mern-stack',
    description: 'A complete e-commerce platform built with the MERN (MongoDB, Express, React, Node.js) stack, featuring full CRUD operations and payment integration.',
    highlights: [
      'Full CRUD for products and orders',
      'Shopping cart with persistence',
      'Payment gateway integration',
      'User authentication and profiles',
      'Admin dashboard'
    ],
    techStack: ['MongoDB', 'Express', 'React', 'Node.js', 'MERN'],
    repoUrl: 'https://github.com/YeasineDewan/E-commerce-in-mern',
    liveUrl: undefined,
    coverImage: 'https://img.heroui.chat/image/ecommerce?w=800&h=450&u=project-27',
    images: [
      'https://img.heroui.chat/image/ecommerce?w=1200&h=800&u=project-27-1',
      'https://img.heroui.chat/image/dashboard?w=1200&h=800&u=project-27-2'
    ],
    tags: ['E-commerce', 'Full-Stack', 'MERN', 'JavaScript'],
    featured: false,
    year: 2025,
    securityNotes: 'Session-based authentication with secure cookies, password hashing with bcrypt, RESTful API security with JWT, input validation and sanitization on all endpoints.'
  },
  {
    id: 28,
    title: 'E-commerce Frontend',
    slug: 'ecommerce-react-frontend',
    description: 'A responsive React frontend for an e-commerce platform with modern UI components, state management, and seamless user experience.',
    highlights: [
      'Modern React component architecture',
      'State management with Context/Redux',
      'Responsive product grid',
      'Cart and checkout flow',
      'Product search and filtering'
    ],
    techStack: ['TypeScript', 'React', 'Tailwind CSS'],
    repoUrl: 'https://github.com/YeasineDewan/e-commerce-front-end',
    liveUrl: undefined,
    coverImage: 'https://img.heroui.chat/image/ecommerce?w=800&h=450&u=project-28',
    images: [
      'https://img.heroui.chat/image/ecommerce?w=1200&h=800&u=project-28-1'
    ],
    tags: ['Frontend', 'TypeScript', 'E-commerce', 'React'],
    featured: false,
    year: 2025,
    securityNotes: 'Frontend-only application. When connected to an API backend, HTTPS transport, JWT token storage, and XSS prevention via Content Security Policy recommended.'
  },
  {
    id: 29,
    title: 'YouTube Downloader',
    slug: 'youtube-downloader-js',
    description: 'A JavaScript-based YouTube video downloader tool that allows users to download videos in various formats and resolutions.',
    highlights: [
      'Video URL parsing and validation',
      'Multiple format selection',
      'Resolution options',
      'Download progress indicator',
      'Clean modern interface'
    ],
    techStack: ['JavaScript', 'HTML5', 'CSS3', 'Node.js'],
    repoUrl: 'https://github.com/YeasineDewan/youtube-downloader-in-Javascript',
    liveUrl: 'https://youtube-downloader-js.vercel.app/',
    coverImage: 'https://img.heroui.chat/image/technology?w=800&h=450&u=project-29',
    images: [
      'https://img.heroui.chat/image/technology?w=1200&h=800&u=project-29-1'
    ],
    tags: ['Frontend', 'JavaScript', 'Utility', 'Tool'],
    featured: false,
    year: 2025,
    securityNotes: 'Client-side URL validation to prevent malicious input. No video data stored on servers. Third-party library usage audited for security vulnerabilities. Rate limiting on download requests.'
  },
  {
    id: 30,
    title: 'Web-Based Games Collection',
    slug: 'web-based-games-collection',
    description: 'A collection of browser-based mini-games built with JavaScript, HTML5 Canvas, and CSS, featuring classic arcade and puzzle games.',
    highlights: [
      'Multiple mini-game variants',
      'HTML5 Canvas rendering',
      'Keyboard and touch controls',
      'Score tracking system',
      'Responsive gameplay'
    ],
    techStack: ['JavaScript', 'HTML5', 'CSS3', 'Canvas'],
    repoUrl: 'https://github.com/YeasineDewan/web-based-games',
    liveUrl: undefined,
    coverImage: 'https://img.heroui.chat/image/gaming?w=800&h=450&u=project-30',
    images: [
      'https://img.heroui.chat/image/gaming?w=1200&h=800&u=project-30-1'
    ],
    tags: ['Frontend', 'JavaScript', 'Game', 'HTML5'],
    featured: false,
    year: 2025,
    securityNotes: 'All game logic runs client-side with no data transmission. No user accounts or personal data collection. Game state stored in browser local storage only.'
  },
  {
    id: 31,
    title: 'Simple 2D Web Game',
    slug: 'simple-2d-game',
    description: 'A simple 2D game built with HTML5 Canvas and JavaScript, featuring smooth animations and intuitive gameplay mechanics.',
    highlights: [
      'HTML5 Canvas 2D rendering',
      'Smooth animations',
      'Intuitive controls',
      'Score and level system',
      'Responsive design'
    ],
    techStack: ['JavaScript', 'HTML5', 'CSS3', 'Canvas'],
    repoUrl: 'https://github.com/YeasineDewan/Simple-web-based-2d-game',
    liveUrl: undefined,
    coverImage: 'https://img.heroui.chat/image/gaming?w=800&h=450&u=project-31',
    images: [
      'https://img.heroui.chat/image/gaming?w=1200&h=800&u=project-31-1'
    ],
    tags: ['Frontend', 'JavaScript', 'Game', 'HTML5'],
    featured: false,
    year: 2025,
    securityNotes: 'Client-side game with no data collection or server communication. No user input beyond keyboard/gamepad controls. Zero external dependencies minimize attack surface.'
  },
  {
    id: 32,
    title: 'Othoba E-commerce Platform',
    slug: 'othoba-ecommerce',
    description: 'An e-commerce platform inspired by Othoba (a popular Bangladeshi marketplace), featuring product listings, cart functionality, and user accounts.',
    highlights: [
      'Product browsing with categories',
      'Shopping cart and wishlist',
      'User registration and profiles',
      'Order management',
      'Admin dashboard'
    ],
    techStack: ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB'],
    repoUrl: 'https://github.com/YeasineDewan/Othoba',
    liveUrl: undefined,
    coverImage: 'https://img.heroui.chat/image/ecommerce?w=800&h=450&u=project-32',
    images: [
      'https://img.heroui.chat/image/ecommerce?w=1200&h=800&u=project-32-1'
    ],
    tags: ['E-commerce', 'Full-Stack', 'JavaScript', 'MERN'],
    featured: false,
    year: 2025,
    securityNotes: 'JWT authentication with HTTP-only cookies, bcrypt password hashing, input validation on all forms, and secure session management. Payment data handled via encrypted third-party gateways.'
  },
  {
    id: 33,
    title: 'ScholarHaat (Private)',
    slug: 'scholarhaat-private',
    description: 'A private version of the ScholarHaat e-teaching platform with enhanced features and custom integrations for educational institutions.',
    highlights: [
      'Advanced course management',
      'Institutional user roles',
      'Custom integration APIs',
      'Analytics and reporting',
      'Secure content delivery'
    ],
    techStack: ['TypeScript', 'React', 'Node.js', 'Express', 'MongoDB'],
    repoUrl: 'https://github.com/YeasineDewan/scholarhaat',
    liveUrl: undefined,
    coverImage: 'https://img.heroui.chat/image/education?w=800&h=450&u=project-33',
    images: [
      'https://img.heroui.chat/image/education?w=1200&h=800&u=project-33-1'
    ],
    tags: ['Full-Stack', 'TypeScript', 'Education', 'MERN'],
    featured: false,
    year: 2025,
    securityNotes: 'Apache License 2.0 licensed. Enterprise-grade security with SAML SSO integration, encrypted content delivery, role-based permissions, and compliance with educational data privacy standards.'
  },
  {
    id: 34,
    title: 'Web Portfolio (MERN)',
    slug: 'web-portfolio-mern',
    description: 'A full-stack web portfolio built with the MERN (MongoDB, Express, React, Node.js) stack, showcasing projects with dynamic content management.',
    highlights: [
      'Dynamic project showcase',
      'Admin content management',
      'Contact form with database',
      'Skills and experience display',
      'Responsive MERN design'
    ],
    techStack: ['TypeScript', 'MongoDB', 'Express', 'React', 'Node.js', 'MERN'],
    repoUrl: 'https://github.com/YeasineDewan/Web-Portfolio',
    liveUrl: 'https://web-portfolio-mern.vercel.app/',
    coverImage: 'https://img.heroui.chat/image/portfolio?w=800&h=450&u=project-34',
    images: [
      'https://img.heroui.chat/image/portfolio?w=1200&h=800&u=project-34-1',
      'https://img.heroui.chat/image/dashboard?w=1200&h=800&u=project-34-2'
    ],
    tags: ['Full-Stack', 'TypeScript', 'Portfolio', 'MERN'],
    featured: true,
    year: 2025,
    securityNotes: 'JWT-based admin authentication, input sanitization on contact forms, rate limiting on API endpoints, and secure deployment with HTTPS. Environment variables stored securely without exposure to client.'
  }
];
