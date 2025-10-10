export const blogPosts = [
  {
    id: 1,
    title: 'Hardening a Next.js App: Headers, CSP, and Rate Limiting',
    slug: 'hardening-nextjs-app-headers-csp-rate-limiting',
    excerpt: 'Learn how to implement security headers, Content Security Policy, and rate limiting in your Next.js applications to protect against common web vulnerabilities.',
    content: `
# Hardening a Next.js App: Headers, CSP, and Rate Limiting

In today's web landscape, security is not optional—it's essential. As developers, we need to implement robust security measures to protect our applications and users from various threats. In this article, I'll walk you through implementing three critical security features in your Next.js applications: security headers, Content Security Policy (CSP), and rate limiting.

## Security Headers

Security headers are HTTP response headers that your application can use to increase the security of your web application. They can help mitigate common web vulnerabilities like XSS, clickjacking, and other code injection attacks.

### Implementation in Next.js

Next.js makes it easy to add security headers through the \`next.config.js\` file:

\`\`\`javascript
// next.config.js
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  }
];

module.exports = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
};
\`\`\`

## Content Security Policy (CSP)

Content Security Policy is an added layer of security that helps detect and mitigate certain types of attacks, including Cross-Site Scripting (XSS) and data injection attacks.

### Implementing CSP in Next.js

You can implement CSP in Next.js by creating a custom Document component:

\`\`\`javascript
// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    const cspPolicy = \`
      default-src 'self';
      script-src 'self' 'unsafe-eval' 'unsafe-inline';
      style-src 'self' 'unsafe-inline';
      img-src 'self' data:;
      font-src 'self';
      connect-src 'self';
      frame-src 'self';
    \`.replace(/\\s{2,}/g, ' ').trim();

    return (
      <Html>
        <Head>
          <meta httpEquiv="Content-Security-Policy" content={cspPolicy} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
\`\`\`

## Rate Limiting

Rate limiting is a strategy to limit network traffic. It puts a cap on how many requests a user can make in a given timeframe. This helps prevent brute-force attacks, DDoS attacks, and other forms of abuse.

### Implementing Rate Limiting in Next.js API Routes

You can implement rate limiting in Next.js API routes using libraries like \`express-rate-limit\` and \`next-connect\`:

\`\`\`javascript
// pages/api/example.js
import nc from 'next-connect';
import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: { error: 'Too many requests, please try again later.' },
});

const handler = nc({
  onError: (err, req, res) => {
    console.error(err.stack);
    res.status(500).end('Something broke!');
  },
  onNoMatch: (req, res) => {
    res.status(404).end('Page is not found');
  },
})
  .use(limiter)
  .get((req, res) => {
    res.send({ message: 'Hello World!' });
  });

export default handler;
\`\`\`

## Conclusion

Implementing security headers, Content Security Policy, and rate limiting in your Next.js applications is a crucial step in protecting your application and users from common web vulnerabilities. These measures, when combined with other security best practices, create a robust defense against various types of attacks.

Remember, security is not a one-time implementation but an ongoing process. Regularly review and update your security measures to stay protected against emerging threats.
    `,
    coverImage: 'https://img.heroui.chat/image/dashboard?w=800&h=450&u=blog-1',
    tags: ['Security', 'Next.js', 'Web Development'],
    publishedAt: '2024-03-15',
    status: 'published',
    readingTime: 8
  },
  {
    id: 2,
    title: 'From Dev to Lead: Building and Securing Web Apps at Wave 3 Limited',
    slug: 'from-dev-to-lead-building-securing-web-apps',
    excerpt: 'My journey from a developer to a lead role, focusing on building secure web applications and leading a team at Wave 3 Limited.',
    content: `
# From Dev to Lead: Building and Securing Web Apps at Wave 3 Limited

My journey from being a developer to taking on a lead role at Wave 3 Limited has been filled with valuable lessons, challenges, and growth opportunities. In this article, I'll share my experience transitioning to a leadership position while maintaining a strong focus on security in web application development.

## The Beginning: Developer Foundations

When I first joined Wave 3 Limited, I was primarily focused on frontend development using React and Next.js. My responsibilities included implementing UI components, integrating APIs, and ensuring responsive design across devices. While I had a basic understanding of security concepts, it wasn't my primary focus at that time.

As I gained experience, I started taking on more complex tasks that required a deeper understanding of the entire application stack. This naturally led me to explore backend development with Node.js and Express, as well as database design and implementation with MongoDB and PostgreSQL.

## The Security Awakening

A significant turning point in my career came when our team encountered a security incident. Although relatively minor, it highlighted the importance of security in every aspect of web development. This experience sparked my interest in cybersecurity, particularly in the context of web applications.

I began educating myself on common web vulnerabilities, security best practices, and defensive coding techniques. I took courses on penetration testing, secure coding, and vulnerability management. This knowledge not only improved my own development practices but also allowed me to contribute more meaningfully to the security posture of our applications.

## The Transition to Leadership

As my technical skills and security knowledge grew, I started taking on more responsibilities within the team. I began leading code reviews with a focus on both functionality and security, mentoring junior developers, and contributing to architectural decisions.

The transition to a formal leadership role came when Wave 3 Limited decided to launch a new project that required a strong security focus. Based on my demonstrated interest and knowledge in this area, I was offered the role of Lead Web Developer with a specific mandate to ensure security was built into the development process from the ground up.

## Building a Security-First Development Culture

As a lead, one of my primary goals was to foster a security-first mindset within the team. Here are some of the approaches I implemented:

### 1. Security Training and Awareness

I organized regular security training sessions for the team, covering topics such as:
- OWASP Top 10 vulnerabilities
- Secure coding practices
- Authentication and authorization best practices
- Data protection and encryption

### 2. Integrating Security into the Development Lifecycle

We implemented security checkpoints at various stages of the development process:
- Security requirements gathering during planning
- Threat modeling during design
- Security-focused code reviews
- Regular automated and manual security testing
- Pre-deployment security verification

### 3. Establishing Security Standards and Guidelines

I worked with the team to create a set of security standards and guidelines tailored to our technology stack and business requirements. These included:
- Authentication and authorization requirements
- Input validation and output encoding rules
- Secure API design principles
- Database security guidelines
- Error handling and logging standards

## Challenges and Lessons Learned

The journey from developer to security-focused lead wasn't without challenges. Here are some key lessons I learned along the way:

### 1. Balancing Security with Productivity

One of the biggest challenges was finding the right balance between implementing robust security measures and maintaining development velocity. I learned that security doesn't have to impede productivity if it's integrated thoughtfully into the development process.

### 2. Communication is Key

Technical security concepts can be complex and sometimes intimidating. I found that clear, jargon-free communication about security requirements and their rationale was essential for team buy-in.

### 3. Continuous Learning is Non-Negotiable

The security landscape is constantly evolving, with new vulnerabilities and attack vectors emerging regularly. Committing to continuous learning and staying updated on security trends became a critical aspect of my role.

### 4. Empowering the Team

Rather than positioning myself as the sole security gatekeeper, I found it more effective to empower team members with the knowledge and tools to make security-conscious decisions in their daily work.

## Looking Forward

As I continue in my role as Lead Web Developer at Wave 3 Limited, I'm excited about further refining our security practices and exploring emerging security technologies and methodologies. My goal is to continue building web applications that are not only functional and user-friendly but also resilient against the evolving threat landscape.

For developers aspiring to grow in their careers, I encourage you to find your area of passion—whether it's security, performance, accessibility, or another aspect of web development—and dive deep into it. Specialized knowledge combined with broad technical skills creates unique value that can open doors to leadership opportunities.

Remember that leadership in technology isn't just about technical expertise; it's equally about communication, empathy, and the ability to guide and inspire your team toward shared goals.
    `,
    coverImage: 'https://img.heroui.chat/image/dashboard?w=800&h=450&u=blog-2',
    tags: ['Career', 'Leadership', 'Security', 'Web Development'],
    publishedAt: '2024-04-02',
    status: 'published',
    readingTime: 10
  },
  {
    id: 3,
    title: 'Implementing Secure Authentication in React Applications',
    slug: 'implementing-secure-authentication-react',
    excerpt: 'A comprehensive guide to implementing secure authentication in React applications, covering best practices, common vulnerabilities, and practical examples.',
    content: `
# Implementing Secure Authentication in React Applications

Authentication is a critical component of most web applications. When implemented correctly, it ensures that only authorized users can access protected resources. However, poorly implemented authentication can lead to serious security vulnerabilities. In this article, I'll cover best practices for implementing secure authentication in React applications.

## Understanding Authentication Fundamentals

Before diving into implementation details, it's important to understand some fundamental concepts:

### Authentication vs. Authorization

- **Authentication**: Verifies the identity of a user (Are you who you claim to be?)
- **Authorization**: Determines what an authenticated user is allowed to do (Are you allowed to access this resource?)

### Authentication Methods

- **Token-based authentication**: Uses tokens (like JWT) to authenticate requests
- **Session-based authentication**: Uses server-side sessions and cookies
- **OAuth/OpenID Connect**: Delegates authentication to a trusted third party

## Common Authentication Vulnerabilities

Being aware of common vulnerabilities is the first step in preventing them:

1. **Insecure storage of credentials**: Storing passwords in plaintext or using weak hashing algorithms
2. **Cross-Site Request Forgery (CSRF)**: Tricking authenticated users into performing unwanted actions
3. **Cross-Site Scripting (XSS)**: Injecting malicious scripts that can steal authentication tokens
4. **Insufficient session expiration**: Allowing sessions to remain valid for too long
5. **Weak password policies**: Accepting passwords that are easy to guess or brute-force

## Implementing Secure Authentication in React

Let's look at how to implement secure authentication in a React application:

### 1. Use HTTPS

Always use HTTPS to encrypt data in transit. This prevents credentials and tokens from being intercepted.

### 2. Implement Token-Based Authentication with JWT

JSON Web Tokens (JWT) are a popular choice for token-based authentication in React applications.

Here's a basic implementation using React Context API:

\`\`\`jsx
// AuthContext.js
import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Check if user is already logged in (token in localStorage)
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      // Verify token validity (e.g., not expired)
      verifyToken(token)
        .then(userData => {
          setCurrentUser(userData);
        })
        .catch(err => {
          // Token invalid or expired
          localStorage.removeItem('authToken');
          setError(err.message);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  const login = async (email, password) => {
    try {
      setLoading(true);
      // Call API to authenticate user
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      
      // Store token in localStorage (consider using HttpOnly cookies instead)
      localStorage.setItem('authToken', data.token);
      
      // Set user data in context
      setCurrentUser(data.user);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setCurrentUser(null);
  };

  const verifyToken = async (token) => {
    // Call API to verify token and get user data
    const response = await fetch('/api/auth/verify', {
      headers: { Authorization: \`Bearer \${token}\` },
    });

    if (!response.ok) {
      throw new Error('Invalid token');
    }

    return response.json();
  };

  return (
    <AuthContext.Provider
      value={{ currentUser, loading, error, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
\`\`\`

### 3. Secure Token Storage

While the example above uses localStorage for simplicity, it's vulnerable to XSS attacks. Consider these more secure alternatives:

- **HttpOnly cookies**: Cannot be accessed by JavaScript, providing protection against XSS
- **Memory storage**: Store tokens in memory (React state) instead of localStorage or sessionStorage

### 4. Implement Protected Routes

Create a higher-order component or route component to protect routes that require authentication:

\`\`\`jsx
// ProtectedRoute.js
import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { currentUser, loading } = useContext(AuthContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        currentUser ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default ProtectedRoute;
\`\`\`

### 5. Implement Proper Error Handling

Provide clear error messages to users without revealing sensitive information:

\`\`\`jsx
// Login.js
import React, { useState, useContext } from 'react';
import { AuthContext } from './AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, error, loading } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      
      {error && <div className="error">{error}</div>}
      
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      
      <button type="submit" disabled={loading}>
        {loading ? 'Logging in...' : 'Login'}
      </button>
    </form>
  );
};

export default Login;
\`\`\`

### 6. Implement Token Refresh

JWTs typically have a short expiration time for security reasons. Implement a token refresh mechanism to maintain the user's session:

\`\`\`javascript
// Add to AuthContext.js
const refreshToken = async () => {
  try {
    const refreshToken = localStorage.getItem('refreshToken');
    if (!refreshToken) throw new Error('No refresh token');

    const response = await fetch('/api/auth/refresh', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ refreshToken }),
    });

    if (!response.ok) throw new Error('Failed to refresh token');

    const data = await response.json();
    localStorage.setItem('authToken', data.token);
    return data.token;
  } catch (err) {
    logout();
    throw err;
  }
};
\`\`\`

### 7. Implement CSRF Protection

If you're using cookies for authentication, implement CSRF protection:

1. Use the SameSite cookie attribute
2. Implement CSRF tokens for sensitive operations

### 8. Implement Rate Limiting

Protect your authentication endpoints from brute force attacks by implementing rate limiting:

\`\`\`javascript
// Server-side code (Node.js/Express example)
const rateLimit = require('express-rate-limit');

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 attempts per window per IP
  message: 'Too many login attempts, please try again after 15 minutes',
});

app.post('/api/auth/login', loginLimiter, (req, res) => {
  // Login logic
});
\`\`\`

## Best Practices for Secure Authentication

1. **Never store passwords in plaintext**: Always hash passwords using strong algorithms like bcrypt or Argon2
2. **Implement multi-factor authentication (MFA)** for additional security
3. **Use short-lived access tokens** with refresh tokens for longer sessions
4. **Implement proper password policies**: Require strong passwords and check against common password lists
5. **Log authentication events** for security monitoring and auditing
6. **Implement account lockout** after multiple failed login attempts
7. **Use secure headers** like Strict-Transport-Security, Content-Security-Policy, etc.
8. **Validate and sanitize all user inputs** to prevent injection attacks

## Conclusion

Implementing secure authentication in React applications requires careful consideration of various security aspects. By following the best practices outlined in this article, you can create a robust authentication system that protects your users' data and your application from common security threats.

Remember that security is an ongoing process, not a one-time implementation. Regularly review and update your authentication mechanisms to address new vulnerabilities and security best practices.
    `,
    coverImage: 'https://img.heroui.chat/image/dashboard?w=800&h=450&u=blog-3',
    tags: ['React', 'Security', 'Authentication', 'Web Development'],
    publishedAt: '2024-02-18',
    status: 'published',
    readingTime: 12
  },
  {
    id: 4,
    title: 'Optimizing Web Performance: Strategies for Modern Applications',
    slug: 'optimizing-web-performance-strategies',
    excerpt: 'Learn effective strategies to optimize web performance, improve Core Web Vitals, and enhance user experience in modern web applications.',
    content: `
# Optimizing Web Performance: Strategies for Modern Applications

Web performance optimization is crucial for providing a good user experience, improving conversion rates, and enhancing SEO rankings. In this article, I'll share practical strategies for optimizing the performance of modern web applications.

## Understanding Performance Metrics

Before diving into optimization strategies, it's important to understand key performance metrics:

### Core Web Vitals

1. **Largest Contentful Paint (LCP)**: Measures loading performance. To provide a good user experience, LCP should occur within 2.5 seconds of when the page first starts loading.

2. **First Input Delay (FID)**: Measures interactivity. Pages should have a FID of less than 100 milliseconds.

3. **Cumulative Layout Shift (CLS)**: Measures visual stability. Pages should maintain a CLS of less than 0.1.

### Other Important Metrics

- **Time to First Byte (TTFB)**: How quickly the server responds
- **First Contentful Paint (FCP)**: When the first content is painted
- **Total Blocking Time (TBT)**: Sum of all time periods between FCP and Time to Interactive
- **Time to Interactive (TTI)**: When the page becomes fully interactive

## Performance Optimization Strategies

Let's explore practical strategies to optimize these metrics:

### 1. Optimize Asset Delivery

#### Minimize and Compress Resources

Reduce the size of your CSS, JavaScript, and HTML files:

\`\`\`javascript
// webpack.config.js example
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  // ...
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
      new CssMinimizerPlugin(),
    ],
  },
};
\`\`\`

#### Implement Code Splitting

Split your JavaScript bundles to load only what's needed:

\`\`\`javascript
// React example with dynamic imports
import React, { lazy, Suspense } from 'react';

const HeavyComponent = lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <HeavyComponent />
      </Suspense>
    </div>
  );
}
\`\`\`

#### Use Tree Shaking

Eliminate dead code:

\`\`\`javascript
// Use ES modules syntax for better tree shaking
import { useEffect } from 'react';
// Instead of: import React from 'react';
\`\`\`

### 2. Optimize Images

Images often account for most of the downloaded bytes on a webpage.

#### Use Modern Image Formats

Convert images to WebP or AVIF formats:

\`\`\`html
<picture>
  <source srcset="image.avif" type="image/avif">
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="Description" width="800" height="600">
</picture>
\`\`\`

#### Implement Responsive Images

Serve different image sizes based on device:

\`\`\`html
<img 
  srcset="image-320w.jpg 320w, image-480w.jpg 480w, image-800w.jpg 800w" 
  sizes="(max-width: 320px) 280px, (max-width: 480px) 440px, 800px" 
  src="image-800w.jpg" 
  alt="Description"
>
\`\`\`

#### Use Image CDNs

Leverage image CDNs for automatic optimization:

\`\`\`jsx
// Example with Next.js Image component
import Image from 'next/image';

function MyImage() {
  return (
    <Image
      src="/profile.jpg"
      alt="Profile"
      width={500}
      height={500}
      placeholder="blur"
      priority
    />
  );
}
\`\`\`

#### Lazy Load Images

Only load images when they're about to enter the viewport:

\`\`\`html
<img 
  src="image.jpg" 
  loading="lazy" 
  alt="Description"
>
\`\`\`

### 3. Optimize JavaScript Execution

#### Defer Non-Critical JavaScript

Defer JavaScript that isn't needed for the initial render:

\`\`\`html
<script src="non-critical.js" defer></script>
\`\`\`

#### Use Web Workers for CPU-Intensive Tasks

Move heavy computations off the main thread:

\`\`\`javascript
// main.js
const worker = new Worker('worker.js');

worker.onmessage = function(e) {
  console.log('Result from worker:', e.data);
};

worker.postMessage({ data: complexData });

// worker.js
self.onmessage = function(e) {
  const result = performComplexCalculation(e.data);
  self.postMessage(result);
};
\`\`\`

#### Optimize Event Handlers

Use event delegation and debounce/throttle for performance-intensive events:

\`\`\`javascript
// Debounce example
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Usage
const handleScroll = debounce(() => {
  // Handle scroll event
}, 100);

window.addEventListener('scroll', handleScroll);
\`\`\`

### 4. Optimize CSS Delivery

#### Critical CSS

Inline critical CSS and defer non-critical CSS:

\`\`\`html
<head>
  <!-- Inline critical CSS -->
  <style>
    /* Critical styles needed for above-the-fold content */
    .header { /* ... */ }
    .hero { /* ... */ }
  </style>
  
  <!-- Defer non-critical CSS -->
  <link 
    rel="preload" 
    href="styles.css" 
    as="style" 
    onload="this.onload=null;this.rel='stylesheet'"
  >
  <noscript>
    <link rel="stylesheet" href="styles.css">
  </noscript>
</head>
\`\`\`

#### Reduce Unused CSS

Remove unused CSS with tools like PurgeCSS:

\`\`\`javascript
// postcss.config.js with PurgeCSS
module.exports = {
  plugins: [
    require('autoprefixer'),
    require('@fullhuman/postcss-purgecss')({
      content: ['./src/**/*.html', './src/**/*.js'],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
    })
  ]
}
\`\`\`

### 5. Implement Caching Strategies

#### Browser Caching

Set appropriate cache headers:

\`\`\`
// Example Cache-Control headers
Cache-Control: public, max-age=31536000, immutable  // For versioned static assets
Cache-Control: no-cache  // For HTML documents
\`\`\`

#### Service Workers for Offline Access

Implement service workers for caching and offline functionality:

\`\`\`javascript
// register-service-worker.js
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('SW registered:', registration);
      })
      .catch(error => {
        console.log('SW registration failed:', error);
      });
  });
}

// service-worker.js
const CACHE_NAME = 'my-site-cache-v1';
const urlsToCache = [
  '/',
  '/styles/main.css',
  '/scripts/main.js',
  '/images/logo.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
\`\`\`

### 6. Optimize Server Response Time

#### Implement CDN

Use a Content Delivery Network to serve assets from locations closer to users:

\`\`\`javascript
// Example CDN configuration in Next.js
// next.config.js
module.exports = {
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://cdn.example.com' : '',
}
\`\`\`

#### Server-Side Rendering (SSR) or Static Site Generation (SSG)

Pre-render pages to improve TTFB:

\`\`\`javascript
// Next.js SSG example
export async function getStaticProps() {
  const data = await fetchData();
  
  return {
    props: {
      data,
    },
    revalidate: 60, // Regenerate page every 60 seconds
  };
}
\`\`\`

#### API Response Optimization

Optimize API responses with pagination, filtering, and compression:

\`\`\`javascript
// Express.js example with compression
const express = require('express');
const compression = require('compression');
const app = express();

// Enable compression
app.use(compression());

app.get('/api/products', (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const offset = (page - 1) * limit;
  
  // Get paginated data
  const products = getProducts(limit, offset);
  
  res.json({
    data: products,
    pagination: {
      page,
      limit,
      total: getTotalProducts()
    }
  });
});
\`\`\`

### 7. Prevent Layout Shifts

#### Set Explicit Dimensions for Media

Always specify width and height for images and videos:

\`\`\`html
<img src="image.jpg" width="800" height="600" alt="Description">
\`\`\`

#### Reserve Space for Dynamic Content

Use skeleton screens or fixed-size containers:

\`\`\`css
.placeholder {
  height: 200px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
\`\`\`

#### Avoid Inserting Content Above Existing Content

Add new elements at the bottom of the page when possible.

### 8. Implement Performance Monitoring

#### Use Lighthouse and PageSpeed Insights

Regularly test your site with these tools to identify issues.

#### Implement Real User Monitoring (RUM)

Collect performance data from actual users:

\`\`\`javascript
// Example using web-vitals library
import {getCLS, getFID, getLCP} from 'web-vitals';

function sendToAnalytics({name, delta, id}) {
  // Send metrics to your analytics service
  console.log({name, delta, id});
}

getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getLCP(sendToAnalytics);
\`\`\`

## Conclusion

Optimizing web performance is an ongoing process that requires attention to multiple aspects of your application. By implementing these strategies, you can significantly improve your application's performance metrics, providing a better user experience and potentially improving business metrics like conversion rates and user engagement.

Remember that performance optimization should be part of your development workflow from the beginning, not just an afterthought. Regularly test your application's performance and make improvements based on real user data and changing best practices.
    `,
    coverImage: 'https://img.heroui.chat/image/dashboard?w=800&h=450&u=blog-4',
    tags: ['Performance', 'Web Development', 'Optimization'],
    publishedAt: '2024-01-25',
    status: 'published',
    readingTime: 15
  },
  {
    id: 5,
    title: 'Understanding OWASP Top 10: A Guide for Web Developers',
    slug: 'understanding-owasp-top-10',
    excerpt: 'A comprehensive guide to the OWASP Top 10 web application security risks and how to mitigate them in your web applications.',
    content: `
# Understanding OWASP Top 10: A Guide for Web Developers

The Open Web Application Security Project (OWASP) Top 10 is a standard awareness document that represents the most critical security risks to web applications. As web developers, understanding these risks and knowing how to mitigate them is essential for building secure applications. In this article, I'll break down each of the OWASP Top 10 risks and provide practical mitigation strategies.

## 1. Broken Access Control

Access control enforces policy such that users cannot act outside of their intended permissions.

### Common Vulnerabilities:
- Bypassing access control checks by modifying URLs or HTML
- Allowing primary key to be changed to another user's record
- Elevation of privilege (acting as a user without being logged in)
- Metadata manipulation (tampering with JWT tokens, cookies)

### Mitigation Strategies:
- Implement server-side access controls
- Deny access by default
- Implement role-based access control
- Log access control failures and alert administrators
- Rate limit API and controller access

**Example Implementation (Node.js/Express):**

\`\`\`javascript
// Middleware for role-based access control
function requireRole(role) {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    
    if (req.user.role !== role) {
      // Log access control failure
      console.log(\`Access control failure: User \${req.user.id} attempted to access resource requiring \${role} role\`);
      return res.status(403).json({ error: 'Forbidden' });
    }
    
    next();
  };
}

// Usage
app.get('/admin/users', requireRole('admin'), (req, res) => {
  // Only admins can access this endpoint
  res.json({ users: [] });
});
\`\`\`

## 2. Cryptographic Failures

Previously known as "Sensitive Data Exposure," this category refers to failures related to cryptography (or lack thereof) that often lead to exposure of sensitive data.

### Common Vulnerabilities:
- Transmitting sensitive data in clear text
- Using weak cryptographic algorithms
- Using default or weak keys
- Not enforcing encryption

### Mitigation Strategies:
- Classify data processed, stored, or transmitted by your application
- Apply controls based on classification
- Don't store sensitive data unnecessarily
- Encrypt all sensitive data at rest and in transit
- Use strong, up-to-date cryptographic algorithms and protocols
- Use strong password hashing with appropriate work factors

**Example Implementation (Node.js with bcrypt):**

\`\`\`javascript
const bcrypt = require('bcrypt');

// Hashing a password before storing it
async function hashPassword(password) {
  const saltRounds = 12; // Higher is more secure but slower
  return await bcrypt.hash(password, saltRounds);
}

// Verifying a password
async function verifyPassword(password, hashedPassword) {
  return await bcrypt.compare(password, hashedPassword);
}

// Usage
async function registerUser(email, password) {
  const hashedPassword = await hashPassword(password);
  // Store email and hashedPassword in database
}

async function loginUser(email, password) {
  // Retrieve user from database
  const user = await getUserByEmail(email);
  
  if (!user) {
    return { success: false, message: 'Invalid email or password' };
  }
  
  const passwordValid = await verifyPassword(password, user.hashedPassword);
  
  if (!passwordValid) {
    return { success: false, message: 'Invalid email or password' };
  }
  
  // Generate and return JWT or session
  return { success: true, user };
}
\`\`\`

## 3. Injection

Injection flaws, such as SQL, NoSQL, OS, and LDAP injection, occur when untrusted data is sent to an interpreter as part of a command or query.

### Common Vulnerabilities:
- User-supplied data is not validated, filtered, or sanitized
- Dynamic queries or non-parameterized calls without context-aware escaping
- Hostile data used within ORM search parameters

### Mitigation Strategies:
- Use a safe API that avoids the use of the interpreter entirely
- Use parameterized queries or prepared statements
- Use ORMs correctly
- Validate all user input using whitelisting
- Escape special characters using the syntax for that interpreter

**Example Implementation (Node.js with Sequelize ORM):**

\`\`\`javascript
const { Op } = require('sequelize');
const User = require('./models/user');

// Bad example - vulnerable to SQL injection
async function findUsersBad(searchTerm) {
  // DON'T DO THIS
  const users = await sequelize.query(
    \`SELECT * FROM Users WHERE name LIKE '%\${searchTerm}%'\`
  );
  return users;
}

// Good example - using ORM with parameterized queries
async function findUsersGood(searchTerm) {
  const users = await User.findAll({
    where: {
      name: {
        [Op.like]: \`%\${searchTerm}%\`
      }
    }
  });
  return users;
}

// Even better - input validation before query
async function findUsersBest(searchTerm) {
  // Validate input
  if (!/^[a-zA-Z0-9\\s]+$/.test(searchTerm)) {
    throw new Error('Invalid search term');
  }
  
  const users = await User.findAll({
    where: {
      name: {
        [Op.like]: \`%\${searchTerm}%\`
      }
    }
  });
  return users;
}
\`\`\`

## 4. Insecure Design

This is a broad category focused on risks related to design and architectural flaws. It calls for more use of threat modeling, secure design patterns, and reference architectures.

### Common Vulnerabilities:
- Lack of business risk profiling
- Missing or ineffective security controls
- Insecure use of third-party services
- Lack of proper security requirements

### Mitigation Strategies:
- Establish and use a secure development lifecycle
- Use threat modeling for critical authentication, access control, business logic, and key flows
- Integrate security language and controls into user stories
- Write unit and integration tests to validate security controls
- Segment application tiers on network and security levels
- Limit resource consumption by user or service

**Example Implementation (Threat Modeling):**

\`\`\`javascript
// This is more of a process than code, but here's a simple example
// of implementing rate limiting as a security control

const rateLimit = require('express-rate-limit');

// Create a rate limiter for login attempts
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 attempts per window per IP
  message: 'Too many login attempts, please try again after 15 minutes',
  standardHeaders: true,
  legacyHeaders: false,
});

// Apply rate limiter to login route
app.post('/api/login', loginLimiter, (req, res) => {
  // Login logic
});

// Create a general API rate limiter
const apiLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 100, // 100 requests per minute per IP
  message: 'Too many requests, please try again later',
  standardHeaders: true,
  legacyHeaders: false,
});

// Apply to all API routes
app.use('/api/', apiLimiter);
\`\`\`

## 5. Security Misconfiguration

Security misconfiguration is the most commonly seen issue, often resulting from insecure default configurations, incomplete or ad hoc configurations, open cloud storage, misconfigured HTTP headers, and verbose error messages.

### Common Vulnerabilities:
- Unnecessary features enabled or installed
- Default accounts and passwords unchanged
- Error handling revealing stack traces or sensitive information
- Running outdated or vulnerable software
- Security settings in application servers not set to secure values

### Mitigation Strategies:
- Use a repeatable hardening process for environments
- Use a minimal platform without unnecessary features
- Review and update configurations for all security notes, updates, and patches
- Use a segmented architecture with effective separation
- Send security directives to clients (e.g., Security Headers)
- Automate verification of configurations and settings

**Example Implementation (Express.js with Helmet):**

\`\`\`javascript
const express = require('express');
const helmet = require('helmet');
const app = express();

// Use Helmet to set various HTTP security headers
app.use(helmet());

// Custom CSP policy
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'", 'trusted-cdn.com'],
      styleSrc: ["'self'", "'unsafe-inline'", 'trusted-cdn.com'],
      imgSrc: ["'self'", 'data:', 'trusted-cdn.com'],
      connectSrc: ["'self'", 'api.example.com'],
      fontSrc: ["'self'", 'trusted-cdn.com'],
      objectSrc: ["'none'"],
      mediaSrc: ["'self'"],
      frameSrc: ["'none'"],
    },
  })
);

// Custom error handler to prevent leaking stack traces
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Something went wrong',
    // Don't include error details in production
    ...(process.env.NODE_ENV === 'development' && { details: err.message }),
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
\`\`\`

## 6. Vulnerable and Outdated Components

Components such as libraries, frameworks, and other software modules run with the same privileges as the application. If a vulnerable component is exploited, it can facilitate serious data loss or server takeover.

### Common Vulnerabilities:
- Not knowing versions of all components you use
- Software being unsupported or out of date
- Not scanning for vulnerabilities regularly
- Not fixing or upgrading the underlying platform, frameworks, and dependencies
- Incompatible libraries

### Mitigation Strategies:
- Remove unused dependencies and unnecessary features
- Continuously inventory versions of both client-side and server-side components
- Monitor sources like CVE and NVD for vulnerabilities
- Use software composition analysis tools
- Subscribe to email alerts for security vulnerabilities
- Only obtain components from official sources over secure links

**Example Implementation (npm audit and automated dependency updates):**

\`\`\`json
// package.json
{
  "scripts": {
    "audit": "npm audit",
    "audit:fix": "npm audit fix",
    "prestart": "npm audit",
    "start": "node server.js"
  },
  "dependencies": {
    "express": "^4.17.1"
  },
  "devDependencies": {
    "npm-check-updates": "^11.8.5"
  }
}
\`\`\`

\`\`\`javascript
// Example GitHub workflow for automated dependency updates
// .github/workflows/dependency-updates.yml
name: Dependency Updates

on:
  schedule:
    - cron: '0 0 * * 0'  # Run weekly on Sunday at midnight
  workflow_dispatch:  # Allow manual trigger

jobs:
  update-dependencies:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '16'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Check for updates
        run: npx npm-check-updates -u
        
      - name: Install updated dependencies
        run: npm install
        
      - name: Run tests
        run: npm test
        
      - name: Create Pull Request
        uses: peter-evans/create-pull-request@v3
        with:
          title: 'chore: update dependencies'
          body: 'Automated dependency updates'
          branch: 'dependency-updates'
\`\`\`

## 7. Identification and Authentication Failures

Authentication-related attacks compromise user identity, authentication, and session management.

### Common Vulnerabilities:
- Permitting automated attacks like credential stuffing
- Permitting brute force attacks
- Permitting weak or default passwords
- Using ineffective credential recovery processes
- Using plain text or weakly hashed passwords
- Missing or ineffective multi-factor authentication
- Exposing session identifiers in URLs

### Mitigation Strategies:
- Implement multi-factor authentication
- Implement server-side checks against credential stuffing
- Implement weak-password checks
- Align password length, complexity, and rotation policies with NIST guidelines
- Limit or increasingly delay failed login attempts
- Use a server-side, secure, built-in session manager

**Example Implementation (Node.js with Express and Passport.js):**

\`\`\`javascript
const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const rateLimit = require('express-rate-limit');
const User = require('./models/user');

const app = express();

// Configure session management
app.use(require('express-session')({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
    httpOnly: true, // Prevent JavaScript access to cookies
    maxAge: 1000 * 60 * 60 * 2 // 2 hours
  }
}));

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Configure local strategy
passport.use(new LocalStrategy(
  { usernameField: 'email' },
  async (email, password, done) => {
    try {
      const user = await User.findOne({ email });
      
      if (!user) {
        return done(null, false, { message: 'Invalid email or password' });
      }
      
      const isMatch = await bcrypt.compare(password, user.password);
      
      if (!isMatch) {
        return done(null, false, { message: 'Invalid email or password' });
      }
      
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  }
));

// Serialize/deserialize user
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

// Rate limiting for login attempts
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 attempts per window per IP
  message: 'Too many login attempts, please try again after 15 minutes'
});

// Login route with rate limiting
app.post('/login', loginLimiter, (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return next(err);
    }
    
    if (!user) {
      return res.status(401).json({ message: info.message });
    }
    
    req.login(user, (err) => {
      if (err) {
        return next(err);
      }
      
      return res.json({ message: 'Login successful', user: { id: user.id, email: user.email } });
    });
  })(req, res, next);
});

// Logout route
app.post('/logout', (req, res) => {
  req.logout();
  res.json({ message: 'Logout successful' });
});

// Protected route example
app.get('/profile', (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  
  res.json({ user: req.user });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
\`\`\`

## 8. Software and Data Integrity Failures

This category focuses on making assumptions related to software updates, critical data, and CI/CD pipelines without verifying integrity.

### Common Vulnerabilities:
- Using plugins, libraries, or modules from untrusted sources
- Insecure CI/CD pipeline without sufficient security controls
- Auto-update functionality without integrity verification
- Using unsigned or unverified serialized data

### Mitigation Strategies:
- Use digital signatures to verify software or data is from the expected source
- Use dependency confusion tools to detect potential dependency issues
- Ensure libraries and dependencies are from trusted repositories
- Implement a review process for code and configuration changes
- Ensure your CI/CD pipeline has proper segregation and configuration

**Example Implementation (Subresource Integrity for CDN resources):**

\`\`\`html
<!-- Using SRI for CDN resources -->
<link 
  rel="stylesheet" 
  href="https://cdn.example.com/bootstrap.min.css" 
  integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" 
  crossorigin="anonymous"
>

<script 
  src="https://cdn.example.com/jquery.min.js" 
  integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" 
  crossorigin="anonymous"
></script>
\`\`\`

\`\`\`javascript
// Example of verifying JWT signature
const jwt = require('jsonwebtoken');

function verifyToken(token) {
  try {
    // Verify the token using the secret key
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return { valid: true, data: decoded };
  } catch (err) {
    return { valid: false, error: err.message };
  }
}

// Usage
app.get('/api/protected', (req, res) => {
  const authHeader = req.headers.authorization;
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  
  const token = authHeader.split(' ')[1];
  const verification = verifyToken(token);
  
  if (!verification.valid) {
    return res.status(401).json({ error: 'Invalid token' });
  }
  
  // Token is valid, proceed with the request
  res.json({ data: 'Protected data', user: verification.data });
});
\`\`\`

## 9. Security Logging and Monitoring Failures

Insufficient logging and monitoring, coupled with missing or ineffective integration with incident response, allows attackers to further attack systems, maintain persistence, and tamper with or extract data without being detected.

### Common Vulnerabilities:
- Auditable events not being logged
- Logs not being generated, monitored, or acted upon
- Alerts not being triggered for suspicious activities
- Logs only stored locally
- Ineffective monitoring and alerting configuration

### Mitigation Strategies:
- Implement logging for all login, access control, and server-side input validation failures
- Ensure logs are in a format that can be easily consumed by centralized log management solutions
- Establish effective monitoring and alerting
- Create or adopt an incident response and recovery plan

**Example Implementation (Winston logger with centralized logging):**

\`\`\`javascript
const winston = require('winston');
const { createLogger, format, transports } = winston;
const { combine, timestamp, printf, colorize, json } = format;

// Define log format
const logFormat = printf(({ level, message, timestamp, ...metadata }) => {
  return `${timestamp} [\${level}]: \${message} \${
    Object.keys(metadata).length ? JSON.stringify(metadata) : ''
  }`;
});

// Create logger
const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: combine(
    timestamp(),
    json()
  ),
  defaultMeta: { service: 'user-service' },
  transports: [
    // Write logs to console
    new transports.Console({
      format: combine(
        colorize(),
        timestamp(),
        logFormat
      )
    }),
    // Write logs to file
    new transports.File({ filename: 'error.log', level: 'error' }),
    new transports.File({ filename: 'combined.log' }),
    // Send logs to centralized logging service (e.g., ELK stack)
    // new winston.transports.Http({
    //   host: 'logging-service.example.com',
    //   port: 8080,
    //   path: '/logs',
    //   ssl: true
    // })
  ]
});

// Example usage in Express middleware
function loggerMiddleware(req, res, next) {
  // Log request details
  logger.info('Incoming request', {
    method: req.method,
    url: req.url,
    ip: req.ip,
    userId: req.user ? req.user.id : 'anonymous'
  });
  
  // Track response time
  const start = Date.now();
  
  // Log response details
  res.on('finish', () => {
    const duration = Date.now() - start;
    logger.info('Response sent', {
      method: req.method,
      url: req.url,
      statusCode: res.statusCode,
      duration: \`\${duration}ms\`
    });
    
    // Log security-relevant events
    if (res.statusCode === 401 || res.statusCode === 403) {
      logger.warn('Access control failure', {
        method: req.method,
        url: req.url,
        statusCode: res.statusCode,
        ip: req.ip,
        userId: req.user ? req.user.id : 'anonymous'
      });
    }
    
    if (res.statusCode >= 500) {
      logger.error('Server error', {
        method: req.method,
        url: req.url,
        statusCode: res.statusCode,
        ip: req.ip,
        userId: req.user ? req.user.id : 'anonymous'
      });
    }
  });
  
  next();
}

// Apply middleware to Express app
app.use(loggerMiddleware);

// Example of logging security events
app.post('/login', (req, res) => {
  // ... authentication logic
  
  if (authenticationFailed) {
    logger.warn('Failed login attempt', {
      email: req.body.email,
      ip: req.ip,
      reason: 'Invalid credentials'
    });
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  
  logger.info('Successful login', {
    userId: user.id,
    email: user.email,
    ip: req.ip
  });
  
  // ... rest of login logic
});
\`\`\`

## 10. Server-Side Request Forgery (SSRF)

SSRF flaws occur when a web application fetches a remote resource without validating the user-supplied URL.

### Common Vulnerabilities:
- Accepting URLs or partial URLs from untrusted sources
- Passing user-supplied URLs to remote resource fetching functions
- Not validating or sanitizing user input before using it for server-side requests

### Mitigation Strategies:
- Sanitize and validate all client-supplied input data
- Enforce URL schema, port, and destination with a positive allow list
- Do not send raw responses to clients
- Disable HTTP redirections
- Be aware of URL consistency to prevent attacks like DNS rebinding

**Example Implementation (Node.js URL validation):**

\`\`\`javascript
const { URL } = require('url');
const axios = require('axios');

// Allowlist of domains and ports
const ALLOWED_DOMAINS = ['api.trusted-service.com', 'cdn.trusted-service.com'];
const ALLOWED_PORTS = [80, 443];
const ALLOWED_PROTOCOLS = ['https:'];

// Validate URL against allowlist
function isUrlAllowed(urlString) {
  try {
    const url = new URL(urlString);
    
    return (
      ALLOWED_DOMAINS.includes(url.hostname) &&
      (url.port === '' || ALLOWED_PORTS.includes(parseInt(url.port, 10))) &&
      ALLOWED_PROTOCOLS.includes(url.protocol)
    );
  } catch (err) {
    return false;
  }
}

// Fetch remote resource with validation
async function fetchResource(urlString) {
  if (!isUrlAllowed(urlString)) {
    throw new Error('URL not allowed');
  }
  
  try {
    const response = await axios.get(urlString, {
      maxRedirects: 0, // Disable redirects
      timeout: 5000,   // Set timeout
      validateStatus: status => status === 200 // Only accept 200 OK
    });
    
    return response.data;
  } catch (err) {
    throw new Error(\`Failed to fetch resource: \${err.message}\`);
  }
}

// Example usage in Express route
app.get('/proxy', async (req, res) => {
  const { url } = req.query;
  
  if (!url) {
    return res.status(400).json({ error: 'URL parameter is required' });
  }
  
  try {
    const data = await fetchResource(url);
    
    // Process the data before sending to client
    // Don't return raw responses
    const processedData = processData(data);
    
    res.json({ data: processedData });
  } catch (err) {
    logger.error('SSRF attempt or error', {
      url,
      ip: req.ip,
      error: err.message,
      userId: req.user ? req.user.id : 'anonymous'
    });
    
    res.status(400).json({ error: 'Invalid or disallowed URL' });
  }
});

function processData(data) {
  // Process and sanitize the data before sending to client
  // This will depend on what the data is and how it will be used
  return {
    // Return only the specific fields needed, not the entire response
    title: data.title,
    summary: data.summary,
    // etc.
  };
}
\`\`\`

## Conclusion

The OWASP Top 10 provides a valuable framework for understanding and addressing the most critical web application security risks. By implementing the mitigation strategies outlined in this article, you can significantly improve the security posture of your web applications.

Remember that security is not a one-time effort but an ongoing process. Stay informed about emerging threats and vulnerabilities, regularly update your dependencies, and continuously test and improve your security controls.

As web developers, we have a responsibility to build applications that not only meet functional requirements but also protect our users' data and privacy. By taking security seriously and incorporating it into every stage of the development lifecycle, we can create more resilient and trustworthy web applications.
    `,
    coverImage: 'https://img.heroui.chat/image/dashboard?w=800&h=450&u=blog-5',
    tags: ['Security', 'OWASP', 'Web Development'],
    publishedAt: '2023-12-10',
    status: 'draft',
    readingTime: 20
  }
];
