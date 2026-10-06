export interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
}

export interface ServiceData {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  color: string;
  heroGradient: string;
  features: { title: string; description: string; icon: string }[];
  process: { name: string; description: string; icon: string }[];
  pricing: PricingTier[];
  faqs: { question: string; answer: string }[];
  deliverables: string[];
  techStack: string[];
}

export const servicesData: ServiceData[] = [
  {
    id: 'web-development',
    title: 'Full-Stack Web Development',
    tagline: 'From concept to deployment — fast, secure, scalable.',
    description:
      'End-to-end web application development using modern frameworks. I build performant, accessible, and security-hardened products that scale with your business.',
    icon: 'lucide:code-2',
    color: 'primary',
    heroGradient: 'from-primary-500/20 via-primary-400/5 to-transparent',
    features: [
      { title: 'Modern Frontend', description: 'React, Next.js, TypeScript with pixel-perfect responsive UI.', icon: 'lucide:layout-dashboard' },
      { title: 'Robust Backend', description: 'Node.js, Express, REST & GraphQL APIs built for scale.', icon: 'lucide:server' },
      { title: 'Database Design', description: 'MongoDB, MySQL, PostgreSQL — optimized schemas & queries.', icon: 'lucide:database' },
      { title: 'Security-First', description: 'OWASP best practices baked in from day one.', icon: 'lucide:shield-check' },
      { title: 'Performance', description: 'Core Web Vitals optimized, lazy loading, code splitting.', icon: 'lucide:zap' },
      { title: 'CI/CD & DevOps', description: 'Automated pipelines, Docker, cloud deployment.', icon: 'lucide:git-branch' },
    ],
    process: [
      { name: 'Discovery', description: 'Deep-dive into your requirements, goals, and constraints.', icon: 'lucide:search' },
      { name: 'Architecture', description: 'Tech stack selection, system design, and project roadmap.', icon: 'lucide:layout' },
      { name: 'Development', description: 'Iterative sprints with regular demos and feedback loops.', icon: 'lucide:code-2' },
      { name: 'Testing & QA', description: 'Unit, integration, and end-to-end testing coverage.', icon: 'lucide:check-circle' },
      { name: 'Deployment', description: 'Secure, zero-downtime production deployment.', icon: 'lucide:rocket' },
      { name: 'Maintenance', description: 'Ongoing support, updates, and performance monitoring.', icon: 'lucide:wrench' },
    ],
    pricing: [
      {
        name: 'Starter',
        price: '৳15,000',
        period: 'one-time',
        description: 'Perfect for landing pages and simple web apps.',
        features: [
          'Up to 5 pages',
          'Responsive design',
          'Contact form',
          'Basic SEO setup',
          '1 month support',
          'Source code delivery',
        ],
      },
      {
        name: 'Professional',
        price: '৳45,000',
        period: 'one-time',
        description: 'Full-featured web application for growing businesses.',
        features: [
          'Up to 15 pages',
          'Custom backend & REST API',
          'Database integration',
          'Authentication system',
          'Admin dashboard',
          'Performance optimization',
          '3 months support',
          'Deployment included',
        ],
        highlighted: true,
        badge: 'Most Popular',
      },
      {
        name: 'Enterprise',
        price: '৳1,20,000+',
        period: 'project',
        description: 'Complex platforms, SaaS, and large-scale systems.',
        features: [
          'Unlimited pages & features',
          'Microservices architecture',
          'Advanced security hardening',
          'CI/CD pipeline setup',
          'Load balancing & scaling',
          'Custom integrations',
          '6 months support',
          'Priority response',
        ],
      },
    ],
    faqs: [
      { question: 'How long does a typical project take?', answer: 'A Starter project takes 1–2 weeks. Professional projects typically take 4–8 weeks. Enterprise projects are scoped individually.' },
      { question: 'Do you work with existing codebases?', answer: "Yes. I can audit, refactor, and extend existing projects. I'll start with a code review to understand the current state." },
      { question: 'What technologies do you use?', answer: 'Primarily React, Next.js, TypeScript, Node.js, Express, MongoDB, PostgreSQL, and Tailwind CSS. I adapt to your stack if needed.' },
      { question: 'Is the source code mine after delivery?', answer: 'Absolutely. You receive full ownership of all source code upon final payment.' },
    ],
    deliverables: ['Full source code', 'Deployment guide', 'API documentation', 'Admin credentials', 'Performance report'],
    techStack: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Tailwind CSS', 'Docker'],
  },
  {
    id: 'security-review',
    title: 'Security Review & Hardening',
    tagline: 'Find vulnerabilities before attackers do.',
    description:
      'Comprehensive security audits of your web application and infrastructure. I identify weaknesses, prioritize risks, and implement hardening measures to protect your users and data.',
    icon: 'lucide:shield',
    color: 'success',
    heroGradient: 'from-success-500/20 via-success-400/5 to-transparent',
    features: [
      { title: 'Code Review', description: 'Manual review for injection flaws, auth issues, and logic bugs.', icon: 'lucide:file-search' },
      { title: 'Infrastructure Audit', description: 'Server, cloud config, and network security assessment.', icon: 'lucide:server' },
      { title: 'Auth & Access Review', description: 'JWT, session management, RBAC, and privilege escalation checks.', icon: 'lucide:lock' },
      { title: 'Data Protection', description: 'Encryption at rest/transit, PII handling, and GDPR compliance.', icon: 'lucide:database' },
      { title: 'Dependency Scanning', description: 'CVE scanning of all third-party packages and libraries.', icon: 'lucide:package-search' },
      { title: 'Remediation Report', description: 'Prioritized findings with step-by-step fix guidance.', icon: 'lucide:clipboard-list' },
    ],
    process: [
      { name: 'Scoping', description: 'Define assets, threat model, and review boundaries.', icon: 'lucide:target' },
      { name: 'Reconnaissance', description: 'Passive information gathering and surface mapping.', icon: 'lucide:search' },
      { name: 'Vulnerability Scan', description: 'Automated and manual security testing.', icon: 'lucide:scan' },
      { name: 'Risk Analysis', description: 'CVSS scoring and business impact assessment.', icon: 'lucide:bar-chart' },
      { name: 'Hardening', description: 'Implement fixes and security controls.', icon: 'lucide:shield-check' },
      { name: 'Verification', description: 'Re-test to confirm all issues are resolved.', icon: 'lucide:check-circle-2' },
    ],
    pricing: [
      {
        name: 'Basic Audit',
        price: '৳8,000',
        period: 'one-time',
        description: 'Quick security health check for small apps.',
        features: [
          'OWASP Top 10 check',
          'Dependency CVE scan',
          'Basic auth review',
          'Summary report (PDF)',
          '1 follow-up call',
        ],
      },
      {
        name: 'Full Audit',
        price: '৳25,000',
        period: 'one-time',
        description: 'Thorough audit for production applications.',
        features: [
          'Full code security review',
          'Infrastructure assessment',
          'Auth & session deep-dive',
          'Data protection audit',
          'Detailed findings report',
          'Remediation guidance',
          '2 weeks remediation support',
        ],
        highlighted: true,
        badge: 'Recommended',
      },
      {
        name: 'Ongoing Retainer',
        price: '৳12,000',
        period: 'per month',
        description: 'Continuous security monitoring and quarterly audits.',
        features: [
          'Monthly vulnerability scans',
          'Quarterly full audit',
          'Patch advisory service',
          'Incident response support',
          'Priority communication',
          'Security policy drafting',
        ],
      },
    ],
    faqs: [
      { question: 'Do I need to give you access to my server?', answer: 'For a full audit, read-only access to the codebase and server config is needed. All credentials are handled under NDA.' },
      { question: 'Will the audit affect my live site?', answer: 'No. All testing is done in a staging environment or with non-destructive techniques on production.' },
      { question: 'What format is the report in?', answer: 'You receive a detailed PDF report with executive summary, technical findings, CVSS scores, and step-by-step remediation steps.' },
      { question: 'How long does an audit take?', answer: 'Basic audits take 2–3 days. Full audits take 5–7 business days depending on application size.' },
    ],
    deliverables: ['Security audit report (PDF)', 'CVSS-scored findings', 'Remediation checklist', 'Executive summary', 'Re-test certificate'],
    techStack: ['Burp Suite', 'OWASP ZAP', 'Nmap', 'Trivy', 'Semgrep', 'Nuclei', 'Metasploit'],
  },
  {
    id: 'penetration-testing',
    title: 'Penetration Testing',
    tagline: 'Ethical hacking to expose real-world attack paths.',
    description:
      'Simulated cyberattacks on your web application to uncover exploitable vulnerabilities before malicious actors do. Every test is scoped, documented, and followed by actionable remediation guidance.',
    icon: 'lucide:bug',
    color: 'danger',
    heroGradient: 'from-danger-500/20 via-danger-400/5 to-transparent',
    features: [
      { title: 'Web App Pentest', description: 'Full OWASP-aligned testing of your web application.', icon: 'lucide:globe' },
      { title: 'API Security Testing', description: 'REST/GraphQL endpoint fuzzing and auth bypass attempts.', icon: 'lucide:webhook' },
      { title: 'Injection Attacks', description: 'SQL, NoSQL, XSS, CSRF, SSRF, and command injection.', icon: 'lucide:terminal' },
      { title: 'Auth Bypass', description: 'Session hijacking, token forgery, and privilege escalation.', icon: 'lucide:key' },
      { title: 'Business Logic Flaws', description: 'Testing for logic vulnerabilities unique to your app.', icon: 'lucide:git-merge' },
      { title: 'PoC Documentation', description: 'Proof-of-concept for every confirmed vulnerability.', icon: 'lucide:file-text' },
    ],
    process: [
      { name: 'Scoping & NDA', description: 'Define targets, rules of engagement, and sign NDA.', icon: 'lucide:file-signature' },
      { name: 'Reconnaissance', description: 'OSINT, subdomain enumeration, and attack surface mapping.', icon: 'lucide:search' },
      { name: 'Vuln Analysis', description: 'Identify and catalog potential attack vectors.', icon: 'lucide:list-checks' },
      { name: 'Exploitation', description: 'Controlled exploitation of confirmed vulnerabilities.', icon: 'lucide:bug' },
      { name: 'Post-Exploitation', description: 'Assess impact and lateral movement potential.', icon: 'lucide:network' },
      { name: 'Report & Debrief', description: 'Detailed report with PoC and remediation walkthrough.', icon: 'lucide:presentation' },
    ],
    pricing: [
      {
        name: 'Web App Basic',
        price: '৳12,000',
        period: 'one-time',
        description: 'OWASP Top 10 focused test for small applications.',
        features: [
          'Up to 20 endpoints',
          'OWASP Top 10 coverage',
          'Manual + automated testing',
          'Findings report',
          '1 debrief call',
        ],
      },
      {
        name: 'Full Pentest',
        price: '৳35,000',
        period: 'one-time',
        description: 'Comprehensive black/grey-box penetration test.',
        features: [
          'Unlimited endpoints',
          'Black & grey-box testing',
          'API security testing',
          'Business logic testing',
          'PoC for all findings',
          'Executive + technical report',
          'Remediation support (2 weeks)',
        ],
        highlighted: true,
        badge: 'Most Thorough',
      },
      {
        name: 'Continuous Testing',
        price: '৳20,000',
        period: 'per month',
        description: 'Ongoing pentesting for teams shipping frequently.',
        features: [
          'Monthly pentest cycles',
          'New feature testing',
          'Regression testing',
          'Vulnerability tracking',
          'Slack/email updates',
          'Priority scheduling',
        ],
      },
    ],
    faqs: [
      { question: 'Is penetration testing legal?', answer: 'Yes, when performed with written authorization from the asset owner. I require a signed scope agreement before any testing begins.' },
      { question: 'What is the difference between black-box and grey-box testing?', answer: 'Black-box simulates an external attacker with no prior knowledge. Grey-box provides partial access (e.g., a user account) to test authenticated attack paths.' },
      { question: 'Will you fix the vulnerabilities you find?', answer: 'The Full Pentest package includes 2 weeks of remediation support. I can also quote separately for fixing identified issues.' },
      { question: 'How do you handle sensitive data found during testing?', answer: 'Any sensitive data encountered is immediately reported to you and never stored or exfiltrated. All findings are covered under NDA.' },
    ],
    deliverables: ['Pentest report (PDF)', 'Proof-of-concept files', 'CVSS-scored vulnerability list', 'Remediation roadmap', 'Executive summary'],
    techStack: ['Burp Suite Pro', 'Metasploit', 'SQLMap', 'Nikto', 'FFUF', 'Hydra', 'Wireshark'],
  },
  {
    id: 'server-setup',
    title: 'Server / Hosting Setup & Optimization',
    tagline: 'Rock-solid infrastructure, configured right the first time.',
    description:
      'Secure server provisioning, web server configuration, SSL setup, CDN integration, and performance tuning. I make sure your hosting environment is fast, hardened, and maintainable.',
    icon: 'lucide:server',
    color: 'secondary',
    heroGradient: 'from-secondary-500/20 via-secondary-400/5 to-transparent',
    features: [
      { title: 'Server Provisioning', description: 'VPS/cloud setup on AWS, DigitalOcean, Hetzner, or Vultr.', icon: 'lucide:cloud' },
      { title: 'Web Server Config', description: 'Nginx/Apache with optimized configs and security headers.', icon: 'lucide:settings' },
      { title: 'SSL/TLS Setup', description: "Let's Encrypt or custom cert with auto-renewal.", icon: 'lucide:lock' },
      { title: 'CDN Integration', description: 'Cloudflare setup with caching rules and DDoS protection.', icon: 'lucide:globe' },
      { title: 'Backup & Recovery', description: 'Automated backups with tested restore procedures.', icon: 'lucide:hard-drive' },
      { title: 'Monitoring & Alerts', description: 'Uptime monitoring, log aggregation, and alerting.', icon: 'lucide:activity' },
    ],
    process: [
      { name: 'Requirements', description: 'Understand traffic, stack, and compliance needs.', icon: 'lucide:clipboard' },
      { name: 'Architecture', description: 'Design optimal server topology for your workload.', icon: 'lucide:layout' },
      { name: 'Provisioning', description: 'Spin up and configure servers with IaC where possible.', icon: 'lucide:server' },
      { name: 'Hardening', description: 'Firewall rules, SSH hardening, fail2ban, and more.', icon: 'lucide:shield' },
      { name: 'Perf Tuning', description: 'Caching, compression, and resource optimization.', icon: 'lucide:zap' },
      { name: 'Monitoring', description: 'Alerts, dashboards, and runbook documentation.', icon: 'lucide:bell' },
    ],
    pricing: [
      {
        name: 'Basic Setup',
        price: '৳6,000',
        period: 'one-time',
        description: 'Single server setup for a simple web app.',
        features: [
          '1 VPS configuration',
          'Nginx/Apache setup',
          'SSL certificate',
          'Basic firewall rules',
          'Deployment guide',
        ],
      },
      {
        name: 'Full Stack Setup',
        price: '৳18,000',
        period: 'one-time',
        description: 'Complete production-ready infrastructure.',
        features: [
          'Multi-server architecture',
          'Nginx + app server config',
          'SSL + Cloudflare CDN',
          'Automated backups',
          'Monitoring & alerting',
          'Security hardening',
          '1 month support',
        ],
        highlighted: true,
        badge: 'Best Value',
      },
      {
        name: 'Managed Infra',
        price: '৳8,000',
        period: 'per month',
        description: 'Ongoing server management and optimization.',
        features: [
          'Monthly security patches',
          'Performance monitoring',
          'Backup verification',
          'Incident response',
          'Scaling assistance',
          'Monthly health report',
        ],
      },
    ],
    faqs: [
      { question: 'Which cloud providers do you support?', answer: 'AWS, DigitalOcean, Hetzner, Vultr, Linode, and any VPS provider that gives SSH access.' },
      { question: 'Do you use Infrastructure as Code?', answer: 'Yes. For larger setups I use Ansible or shell scripts to ensure reproducible, documented configurations.' },
      { question: 'Can you migrate my existing server?', answer: 'Yes. I handle zero-downtime migrations including DNS cutover planning and rollback procedures.' },
      { question: 'What if something breaks after setup?', answer: 'All packages include a support period. I also provide a runbook so your team can handle common issues independently.' },
    ],
    deliverables: ['Server configuration files', 'Deployment runbook', 'Monitoring dashboard', 'Backup schedule doc', 'Security hardening checklist'],
    techStack: ['Nginx', 'Apache', 'Docker', 'Cloudflare', "Let's Encrypt", 'Ansible', 'UFW', 'Fail2ban'],
  },
  {
    id: 'seo-optimization',
    title: 'SEO & Technical Performance',
    tagline: 'Rank higher. Load faster. Convert better.',
    description:
      'Technical SEO audits, Core Web Vitals optimization, and structured data implementation to improve your search rankings and user experience.',
    icon: 'lucide:search',
    color: 'warning',
    heroGradient: 'from-warning-500/20 via-warning-400/5 to-transparent',
    features: [
      { title: 'Technical SEO Audit', description: 'Crawlability, indexation, sitemap, and robots.txt review.', icon: 'lucide:search' },
      { title: 'Core Web Vitals', description: 'LCP, FID/INP, and CLS optimization for Google ranking.', icon: 'lucide:gauge' },
      { title: 'Performance Optimization', description: 'Image compression, lazy loading, and bundle splitting.', icon: 'lucide:zap' },
      { title: 'Structured Data', description: 'Schema.org markup for rich snippets and knowledge panels.', icon: 'lucide:code' },
      { title: 'Mobile Optimization', description: 'Mobile-first indexing compliance and UX improvements.', icon: 'lucide:smartphone' },
      { title: 'Analytics Setup', description: 'GA4, Search Console, and conversion tracking.', icon: 'lucide:bar-chart-2' },
    ],
    process: [
      { name: 'Audit', description: 'Full technical SEO and performance baseline audit.', icon: 'lucide:clipboard-list' },
      { name: 'Strategy', description: 'Prioritized optimization roadmap based on impact.', icon: 'lucide:map' },
      { name: 'On-Page Fixes', description: 'Meta tags, headings, internal linking, and content structure.', icon: 'lucide:file-edit' },
      { name: 'Perf Fixes', description: 'Speed optimizations targeting Core Web Vitals.', icon: 'lucide:zap' },
      { name: 'Monitoring', description: 'Search Console, rank tracking, and alert setup.', icon: 'lucide:activity' },
      { name: 'Reporting', description: 'Monthly performance reports with actionable insights.', icon: 'lucide:file-bar-chart' },
    ],
    pricing: [
      {
        name: 'SEO Audit',
        price: '৳5,000',
        period: 'one-time',
        description: 'Comprehensive audit with actionable recommendations.',
        features: [
          'Technical SEO audit',
          'Core Web Vitals report',
          'Competitor analysis',
          'Priority fix list',
          'Audit report (PDF)',
        ],
      },
      {
        name: 'Full Optimization',
        price: '৳15,000',
        period: 'one-time',
        description: 'Audit + implementation of all critical fixes.',
        features: [
          'Everything in Audit',
          'On-page SEO fixes',
          'Performance optimization',
          'Structured data markup',
          'Analytics & Search Console',
          '1 month monitoring',
        ],
        highlighted: true,
        badge: 'Best Results',
      },
      {
        name: 'Monthly SEO',
        price: '৳7,000',
        period: 'per month',
        description: 'Ongoing SEO management and content optimization.',
        features: [
          'Monthly technical audit',
          'Content optimization',
          'Backlink monitoring',
          'Rank tracking',
          'Monthly report',
          'Strategy calls',
        ],
      },
    ],
    faqs: [
      { question: 'How long until I see SEO results?', answer: 'Technical fixes can show results in 4–8 weeks. Significant ranking improvements typically take 3–6 months depending on competition.' },
      { question: 'Do you do keyword research?', answer: 'The Full Optimization package includes keyword gap analysis. Dedicated keyword research and content strategy can be added on.' },
      { question: 'Will you write content for me?', answer: 'I focus on technical SEO. For content writing, I can recommend trusted partners or work alongside your content team.' },
      { question: 'What tools do you use?', answer: 'Google Search Console, Lighthouse, PageSpeed Insights, Screaming Frog, Ahrefs (or free alternatives), and GA4.' },
    ],
    deliverables: ['SEO audit report', 'Core Web Vitals report', 'Structured data files', 'Analytics setup', 'Monthly ranking report'],
    techStack: ['Google Search Console', 'Lighthouse', 'Screaming Frog', 'GA4', 'Ahrefs', 'PageSpeed Insights'],
  },
];

export const getServiceById = (id: string) => servicesData.find((s) => s.id === id);
