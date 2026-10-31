# Yeasine Dewan - Professional Portfolio

A modern, security-focused portfolio website for MD. Yeasine Dewan Shawon, showcasing his skills, projects, and services as a cybersecurity-focused full-stack engineer.

## Features

- Modern UI with HeroUI components and Tailwind CSS
- Responsive design for all devices
- Dark/light mode support
- Multi-language support (English/Bangla)
- Project showcase with detailed project pages
- Blog with article filtering
- Contact form with validation
- SEO optimized

## Tech Stack

- React 18
- Vite
- TypeScript
- HeroUI Component Library
- Tailwind CSS v4
- React Router v5
- Framer Motion for animations

## Prerequisites

- Node.js 16+ and npm/yarn
- Git

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/yourusername/yeasine-portfolio.git
cd yeasine-portfolio
```

2. Install dependencies:

```bash
npm install
# or
yarn
```

3. Create a `.env` file based on `.env.example`:

```bash
cp .env.example .env
```

4. Update the environment variables in the `.env` file with your own values.

5. Start the development server:

```bash
npm run dev
# or
yarn dev
```

6. Open your browser and navigate to `http://localhost:5173`

## Building for Production

```bash
npm run build
# or
yarn build
```

The build output will be in the `dist` directory.

## Deployment

This project is optimized for deployment on Vercel:

1. Push your code to a GitHub repository
2. Import the repository in Vercel
3. Configure the environment variables
4. Deploy

## Project Structure

```
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI components
│   ├── data/            # Sample data (projects, blog posts)
│   ├── hooks/           # Custom React hooks
│   ├── pages/           # Page components
│   ├── App.tsx          # Main application component
│   ├── index.css        # Global styles
│   └── main.tsx         # Application entry point
├── .env.example         # Example environment variables
├── index.html           # HTML template
├── package.json         # Project dependencies
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

## Production Hardening Checklist

- [ ] Update all environment variables in production
- [ ] Enable HTTPS
- [ ] Configure proper Content Security Policy (CSP)
- [ ] Set up proper caching headers
- [ ] Enable rate limiting for API routes
- [ ] Implement CSRF protection
- [ ] Set up monitoring and error tracking
- [ ] Configure proper robots.txt and sitemap.xml
- [ ] Test performance with Lighthouse
- [ ] Verify all links and forms work correctly
- [ ] Test on multiple browsers and devices

## License

This project is licensed under the MIT License.
