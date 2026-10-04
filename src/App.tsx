import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { useTheme } from '@heroui/use-theme';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Navbar } from './components/layout/Navbar';
import { SubHeader } from './components/layout/SubHeader';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/utils/ScrollToTop';
import { ScrollToTopButton } from './components/utils/ScrollToTopButton';

const HomePage = React.lazy(() => import('./pages/HomePage').then(({ HomePage }) => ({ default: HomePage })));
const AboutPage = React.lazy(() => import('./pages/AboutPage').then(({ AboutPage }) => ({ default: AboutPage })));
const SkillsPage = React.lazy(() => import('./pages/SkillsPage').then(({ SkillsPage }) => ({ default: SkillsPage })));
const ExperiencePage = React.lazy(() => import('./pages/ExperiencePage').then(({ ExperiencePage }) => ({ default: ExperiencePage })));
const ProjectsPage = React.lazy(() => import('./pages/ProjectsPage').then(({ ProjectsPage }) => ({ default: ProjectsPage })));
const ProjectDetailPage = React.lazy(() => import('./pages/ProjectDetailPage').then(({ ProjectDetailPage }) => ({ default: ProjectDetailPage })));
const BlogPage = React.lazy(() => import('./pages/BlogPage').then(({ BlogPage }) => ({ default: BlogPage })));
const BlogPostPage = React.lazy(() => import('./pages/BlogPostPage').then(({ BlogPostPage }) => ({ default: BlogPostPage })));
const CertificationsPage = React.lazy(() => import('./pages/CertificationsPage').then(({ CertificationsPage }) => ({ default: CertificationsPage })));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage').then(({ ServicesPage }) => ({ default: ServicesPage })));
const ContactPage = React.lazy(() => import('./pages/ContactPage').then(({ ContactPage }) => ({ default: ContactPage })));
const HireMePage = React.lazy(() => import('./pages/HireMePage').then(({ HireMePage }) => ({ default: HireMePage })));
const PrivacyPolicyPage = React.lazy(() => import('./pages/LegalPages').then(({ PrivacyPolicyPage }) => ({ default: PrivacyPolicyPage })));
const TermsPage = React.lazy(() => import('./pages/LegalPages').then(({ TermsPage }) => ({ default: TermsPage })));
const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage').then(({ NotFoundPage }) => ({ default: NotFoundPage })));

function App() {
  const { theme } = useTheme();
  const location = useLocation();
  const reduceMotion = useReducedMotion();
  
  React.useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <div className="site-shell relative isolate min-h-screen bg-transparent text-foreground">
      <div className="site-background" aria-hidden="true" />
      <div className="relative z-10 flex min-h-screen flex-col">
        <header className="sticky top-0 z-40 w-full px-3 pt-3 sm:px-5">
          <div className="w-full rounded-2xl border border-[#cac3c5] bg-[#eae7e8] backdrop-blur-xl shadow-md overflow-hidden dark:border-white/10 dark:bg-[#141414]">
            <SubHeader />
            <Navbar />
          </div>
        </header>
        <main className="flex-grow">
          <ScrollToTop />
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={location.pathname}
              initial={reduceMotion ? false : { opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -4 }}
              transition={{ duration: reduceMotion ? 0 : 0.32, ease: [0.22, 1, 0.36, 1] }}
            >
              <React.Suspense
                fallback={(
                  <div role="status" className="container-custom flex min-h-[40vh] items-center justify-center">
                    <span className="sr-only">Loading page</span>
                    <span aria-hidden="true" className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-r-transparent" />
                  </div>
                )}
              >
                <Switch location={location}>
                  <Route exact path="/" component={HomePage} />
                  <Route path="/about" component={AboutPage} />
                  <Route path="/skills" component={SkillsPage} />
                  <Route path="/experience" component={ExperiencePage} />
                  <Route exact path="/projects" component={ProjectsPage} />
                  <Route path="/projects/:slug" component={ProjectDetailPage} />
                  <Route exact path="/blog" component={BlogPage} />
                  <Route path="/blog/:slug" component={BlogPostPage} />
                  <Route path="/certifications" component={CertificationsPage} />
                  <Route path="/services" component={ServicesPage} />
                  <Route path="/contact" component={ContactPage} />
                  <Route path="/hire-me" component={HireMePage} />
                  <Route path="/privacy-policy" component={PrivacyPolicyPage} />
                  <Route path="/terms" component={TermsPage} />
                  <Route component={NotFoundPage} />
                </Switch>
              </React.Suspense>
            </motion.div>
          </AnimatePresence>
          <ScrollToTopButton />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;