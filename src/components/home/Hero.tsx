import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Tooltip } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 to-secondary-50/20 dark:from-primary-900/10 dark:to-secondary-900/5 -z-10" />
      
      {/* Enhanced security pattern background with animated particles */}
      <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
        }}
      />
      
      {/* Floating animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-primary-500/10 dark:bg-primary-400/5 animate-pulse-subtle"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`
            }}
          />
        ))}
      </div>

      <div className="container-custom relative">
        {/* Enhanced grid layout with improved animations */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Content - 3 columns */}
          <div className="lg:col-span-3 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400">
                <Icon icon="lucide:shield-check" className="text-sm" />
                Security-Focused Developer
              </span>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              I build <span className="gradient-text">secure, high-performance</span> web apps.
            </motion.h1>

            <motion.p 
              className="text-lg md:text-xl text-foreground-600 dark:text-foreground-400 max-w-2xl text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Full-stack developer and cybersecurity engineer with 2.3+ years of experience building and hardening web applications.
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4 pt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button
                as={Link}
                to="/projects"
                color="primary"
                size="lg"
                startContent={<Icon icon="lucide:layout-grid" />}
              >
                View Projects
              </Button>
              <Button
                as={Link}
                to="/contact"
                color="primary"
                variant="bordered"
                size="lg"
                startContent={<Icon icon="lucide:message-square" />}
              >
                Hire Me
              </Button>
              <Tooltip content="Download Resume (PDF)">
                <Button
                  as="a"
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="default"
                  variant="flat"
                  size="lg"
                  isIconOnly
                >
                  <Icon icon="lucide:download" className="text-xl" />
                </Button>
              </Tooltip>
            </motion.div>

            {/* Enhanced skill badges */}
            <motion.div 
              className="flex items-center gap-2 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center">
                  <Icon icon="lucide:code" className="text-primary-600 dark:text-primary-400" />
                </div>
                <div className="w-8 h-8 rounded-full bg-secondary-100 dark:bg-secondary-900/50 flex items-center justify-center">
                  <Icon icon="lucide:shield" className="text-secondary-600 dark:text-secondary-400" />
                </div>
                <div className="w-8 h-8 rounded-full bg-success-100 dark:bg-success-900/50 flex items-center justify-center">
                  <Icon icon="lucide:zap" className="text-success-600 dark:text-success-400" />
                </div>
              </div>
              <span className="text-sm text-foreground-500">Development • Security • Performance</span>
            </motion.div>
          </div>

          {/* Enhanced image section with animated security elements */}
          <motion.div 
            className="lg:col-span-2 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              {/* Main image with security-themed overlay */}
              <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-primary-600 to-secondary-600 p-1">
                <div className="relative rounded-xl overflow-hidden aspect-[4/5] md:aspect-[3/4]">
                  <img 
                    src="https://img.heroui.chat/image/avatar?w=600&h=800&u=yeasine-1" 
                    alt="Yeasine Dewan" 
                    className="w-full h-full object-cover"
                  />
                  {/* Security overlay pattern */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent mix-blend-overlay opacity-40"></div>
                  
                  {/* Animated security scan effect */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 border-t-2 border-primary-400/30 animate-scan"></div>
                  </div>
                </div>
              </div>
              
              {/* Enhanced floating security badge */}
              <motion.div 
                className="absolute -bottom-4 -left-4 bg-content1 shadow-lg rounded-lg p-3 flex items-center gap-2 border border-content3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                  <Icon icon="lucide:shield-check" className="text-primary-600 dark:text-primary-400 text-xl" />
                </div>
                <div>
                  <p className="text-xs text-foreground-500">Security-Focused</p>
                  <p className="text-sm font-medium">Full-Stack Engineer</p>
                </div>
              </motion.div>
              
              {/* Enhanced floating experience badge */}
              <motion.div 
                className="absolute -top-4 -right-4 bg-content1 shadow-lg rounded-lg p-3 flex items-center gap-2 border border-content3"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="w-10 h-10 rounded-full bg-secondary-100 dark:bg-secondary-900/30 flex items-center justify-center">
                  <Icon icon="lucide:briefcase" className="text-secondary-600 dark:text-secondary-400 text-xl" />
                </div>
                <div>
                  <p className="text-xs text-foreground-500">Experience</p>
                  <p className="text-sm font-medium">2.3+ Years</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};