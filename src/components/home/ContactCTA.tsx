import { Link } from 'react-router-dom';
import { Button } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion, useReducedMotion } from 'framer-motion';
import { Section } from '../utils/PageLayout';

export const ContactCTA = () => {
  const reduce = useReducedMotion();

  return (
    <Section>
      <div className="container-custom">
        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl"
        >
          {/* Animated gradient background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600"
            animate={reduce ? undefined : {
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            style={{ backgroundSize: '200% 200%' }}
          />

          {/* Noise overlay */}
          <div className="noise-overlay" />

          {/* Floating orbs inside CTA */}
          {!reduce && (
            <>
              <motion.div
                className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-white/10 blur-3xl"
                animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
                transition={{ duration: 8, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-secondary-400/20 blur-3xl"
                animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
              />
            </>
          )}

          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

          <div className="relative py-16 px-6 md:py-24 md:px-12 text-center">
            <motion.div
              initial={reduce ? undefined : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              {/* Badge */}
              <motion.span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 text-white text-xs font-semibold uppercase tracking-widest mb-6"
                animate={reduce ? undefined : { opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                Available for Work
              </motion.span>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Ready to build something{' '}
                <span className="relative inline-block">
                  secure & amazing
                  <motion.span
                    className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-white/50"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    style={{ transformOrigin: 'left' }}
                  />
                </span>
                {' '}together?
              </h2>

              <p className="text-white/85 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                Let's discuss how I can help you create secure, high-performance web applications tailored to your specific needs.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <motion.div
                  whileHover={reduce ? undefined : { scale: 1.05 }}
                  whileTap={reduce ? undefined : { scale: 0.97 }}
                >
                  <Button
                    as={Link}
                    to="/contact"
                    size="lg"
                    className="bg-white text-primary-600 font-semibold hover:bg-white/90 shadow-xl"
                    startContent={<Icon icon="lucide:message-square" />}
                  >
                    Get in Touch
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={reduce ? undefined : { scale: 1.05 }}
                  whileTap={reduce ? undefined : { scale: 0.97 }}
                >
                  <Button
                    as={Link}
                    to="/services"
                    size="lg"
                    className="bg-white/15 text-white border border-white/30 hover:bg-white/25 font-semibold backdrop-blur-sm"
                    startContent={<Icon icon="lucide:info" />}
                  >
                    Learn About My Services
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
