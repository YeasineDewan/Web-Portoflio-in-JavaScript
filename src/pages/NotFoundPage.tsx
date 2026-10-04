import { Link } from 'react-router-dom';
import { Button } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { PageBackground } from '../components/utils/PageLayout';

export const NotFoundPage = () => (
  <PageBackground>
    <div className="flex min-h-[80vh] items-center justify-center py-16">
      <div className="container-custom text-center">

        {/* 404 number */}
        <motion.div
          className="relative mb-8 inline-block"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="select-none text-[10rem] font-black leading-none text-primary/10 md:text-[14rem]">
            404
          </span>
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 ring-4 ring-primary/20">
              <Icon icon="lucide:file-x" className="text-4xl text-primary" />
            </div>
          </motion.div>
        </motion.div>

        <motion.h1
          className="mb-4 text-4xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Page Not Found
        </motion.h1>

        <motion.p
          className="mx-auto mb-10 max-w-md text-lg text-foreground-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          The page you're looking for doesn't exist or has been moved.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Button as={Link} to="/" color="primary" size="lg" startContent={<Icon icon="lucide:house" />}>
            Go to Homepage
          </Button>
          <Button as={Link} to="/contact" variant="bordered" size="lg" startContent={<Icon icon="lucide:message-square" />}>
            Contact Me
          </Button>
        </motion.div>

      </div>
    </div>
  </PageBackground>
);
