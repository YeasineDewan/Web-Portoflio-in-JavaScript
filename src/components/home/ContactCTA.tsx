import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

export const ContactCTA = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="overflow-hidden">
            <CardBody className="p-0">
              <div className="relative">
                {/* Background with security pattern */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 opacity-90" />
                <div className="absolute inset-0 opacity-10" 
                  style={{ 
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
                  }}
                />
                
                <div className="relative py-16 px-6 md:py-24 md:px-12 text-center">
                  <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                      Ready to build something secure and amazing together?
                    </h2>
                    <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                      Let's discuss how I can help you create secure, high-performance web applications tailored to your specific needs.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                      <Button
                        as={Link}
                        to="/contact"
                        color="default"
                        size="lg"
                        className="bg-white text-primary-600 hover:bg-white/90"
                        startContent={<Icon icon="lucide:message-square" />}
                      >
                        Get in Touch
                      </Button>
                      <Button
                        as={Link}
                        to="/services"
                        variant="flat"
                        size="lg"
                        className="bg-white/20 text-white border-white/30 hover:bg-white/30"
                        startContent={<Icon icon="lucide:info" />}
                      >
                        Learn About My Services
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};