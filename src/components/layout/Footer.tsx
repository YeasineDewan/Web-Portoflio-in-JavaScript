import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link, Divider } from '@heroui/react';
import { Icon } from '@iconify/react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: 'GitHub', icon: 'logos:github-icon', url: 'https://github.com/dewanshawon' },
    { name: 'LinkedIn', icon: 'logos:linkedin-icon', url: 'https://bd.linkedin.com/in/md-yeasine-dewan-shawon-073883210' },
    { name: 'Facebook', icon: 'logos:facebook', url: 'https://www.facebook.com/yeasinedewan.shawon.57' }
  ];

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  const serviceLinks = [
    { name: 'Web Development', path: '/services#web-development' },
    { name: 'Security Review', path: '/services#security-review' },
    { name: 'Penetration Testing', path: '/services#penetration-testing' },
    { name: 'Server Setup', path: '/services#server-setup' },
    { name: 'SEO Optimization', path: '/services#seo-optimization' }
  ];

  return (
    <footer className="bg-content1 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="bg-primary p-1 rounded-md">
                <Icon icon="lucide:shield-check" className="text-white text-xl" />
              </div>
              <span className="font-semibold text-lg">Yeasine Dewan</span>
            </div>
            <p className="text-foreground-500 text-sm mt-2">
              Full-stack developer and security-minded engineer building and hardening web applications.
            </p>
            <div className="flex gap-4 mt-4">
              {socialLinks.map((link) => (
                <Link 
                  key={link.name}
                  href={link.url}
                  isExternal
                  className="text-foreground-500 hover:text-primary transition-colors"
                  aria-label={link.name}
                >
                  <Icon icon={link.icon} className="text-2xl" />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    as={RouterLink} 
                    to={link.path}
                    color="foreground"
                    className="text-foreground-500 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    as={RouterLink} 
                    to={link.path}
                    color="foreground"
                    className="text-foreground-500 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Icon icon="lucide:map-pin" className="text-primary" />
                <span className="text-foreground-500">Singair, Manikganj, Bangladesh</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon icon="lucide:mail" className="text-primary" />
                <span className="text-foreground-500">contact@yeasinedewan.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon icon="lucide:phone" className="text-primary" />
                <span className="text-foreground-500">+880 XXXX-XXXXXX</span>
              </li>
            </ul>
          </div>
        </div>

        <Divider className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground-500 text-sm">
            © {currentYear} MD. Yeasine Dewan Shawon. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link as={RouterLink} to="/privacy-policy" color="foreground" className="text-sm text-foreground-500">
              Privacy Policy
            </Link>
            <Link as={RouterLink} to="/terms" color="foreground" className="text-sm text-foreground-500">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};