import React from 'react';
import { Card, CardBody, Input, Textarea, Button, Checkbox, Divider } from '@heroui/react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { addToast } from '@heroui/react';
import { motion, useReducedMotion } from 'framer-motion';
import { stagger, fadeUp } from '../utils/PageLayout';

const contactInfo = [
  { icon: 'lucide:mail',    label: 'Email',    value: 'contact@yeasinedewan.com', href: 'mailto:contact@yeasinedewan.com', color: 'primary' },
  { icon: 'lucide:phone',   label: 'Phone',    value: '+880 0179-3244543',         href: 'https://wa.me/8801793244543',    color: 'secondary' },
  { icon: 'lucide:map-pin', label: 'Location', value: 'Singair, Manikganj, Bangladesh', href: undefined,                 color: 'success' },
];

export const ContactForm = () => {
  const reduce = useReducedMotion();
  const [formData, setFormData] = React.useState({ name: '', email: '', subject: '', message: '', consent: false });
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [status, setStatus] = React.useState<'idle' | 'draft'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => { const n = { ...prev }; delete n[name]; return n; });
  };

  const handleCheckbox = (v: boolean) => {
    setFormData(prev => ({ ...prev, consent: v }));
    if (errors.consent) setErrors(prev => { const n = { ...prev }; delete n.consent; return n; });
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!formData.name.trim()) e.name = 'Name is required';
    if (!formData.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = 'Please enter a valid email';
    if (!formData.subject.trim()) e.subject = 'Subject is required';
    if (!formData.message.trim()) e.message = 'Message is required';
    else if (formData.message.length < 20) e.message = 'Message should be at least 20 characters';
    if (!formData.consent) e.consent = 'You must agree to the privacy policy';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const body = [`Name: ${formData.name.trim()}`, `Email: ${formData.email.trim()}`, '', formData.message.trim()].join('\n');
    window.location.href = `mailto:contact@yeasinedewan.com?subject=${encodeURIComponent(formData.subject.trim())}&body=${encodeURIComponent(body)}`;
    setStatus('draft');
    setFormData({ name: '', email: '', subject: '', message: '', consent: false });
    addToast({ title: 'Email draft ready', description: 'Review and send your message from your email app.', color: 'success' });
  };

  return (
    <Card className="w-full border border-content3/50 shadow-xl">
      <CardBody className="p-6 md:p-8">
        {status === 'draft' ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
          >
            <motion.div
              className="w-20 h-20 bg-success-100 dark:bg-success-900/30 rounded-full flex items-center justify-center mx-auto mb-5"
              animate={reduce ? undefined : { scale: [1, 1.1, 1] }}
              transition={{ duration: 0.5 }}
            >
              <Icon icon="lucide:check" className="text-success-600 dark:text-success-400 text-3xl" />
            </motion.div>
            <h4 className="text-2xl font-bold mb-2">Email Draft Opened!</h4>
            <p className="text-foreground-500 mb-7 max-w-sm mx-auto">
              Review the message in your email app and send it when you're ready.
            </p>
            <Button color="primary" variant="flat" onPress={() => setStatus('idle')} startContent={<Icon icon="lucide:edit" />}>
              Compose Another Message
            </Button>
          </motion.div>
        ) : (
          <motion.div
            variants={reduce ? undefined : stagger(0.08)}
            initial={reduce ? undefined : 'hidden'}
            animate="show"
          >
            <motion.h3 variants={reduce ? undefined : fadeUp} className="text-2xl font-bold mb-6">
              Send Me a Message
            </motion.h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <motion.div variants={reduce ? undefined : fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Input
                  id="name" label="Your Name" name="name" autoComplete="name"
                  placeholder="John Doe" value={formData.name} onChange={handleChange}
                  isRequired isInvalid={!!errors.name} errorMessage={errors.name}
                  startContent={<Icon icon="lucide:user" className="text-default-400" />}
                />
                <Input
                  id="email" label="Email Address" name="email" type="email" autoComplete="email"
                  placeholder="john@example.com" value={formData.email} onChange={handleChange}
                  isRequired isInvalid={!!errors.email} errorMessage={errors.email}
                  startContent={<Icon icon="lucide:mail" className="text-default-400" />}
                />
              </motion.div>

              <motion.div variants={reduce ? undefined : fadeUp}>
                <Input
                  id="subject" label="Subject" name="subject" autoComplete="off"
                  placeholder="What's this about?" value={formData.subject} onChange={handleChange}
                  isRequired isInvalid={!!errors.subject} errorMessage={errors.subject}
                  startContent={<Icon icon="lucide:file-text" className="text-default-400" />}
                />
              </motion.div>

              <motion.div variants={reduce ? undefined : fadeUp}>
                <Textarea
                  id="message" label="Message" name="message" autoComplete="off"
                  placeholder="Your message here..." value={formData.message} onChange={handleChange}
                  isRequired minRows={5} isInvalid={!!errors.message} errorMessage={errors.message}
                />
              </motion.div>

              <motion.div variants={reduce ? undefined : fadeUp}>
                <Checkbox id="consent" name="consent" isSelected={formData.consent} onValueChange={handleCheckbox} isInvalid={!!errors.consent}>
                  <span className="text-sm">
                    I agree to the <Link to="/privacy-policy" className="text-primary hover:underline">privacy policy</Link> and consent to being contacted.
                  </span>
                </Checkbox>
                {errors.consent && <p className="text-danger text-xs mt-1">{errors.consent}</p>}
              </motion.div>

              <motion.div variants={reduce ? undefined : fadeUp}>
                <Button
                  type="submit" color="primary" fullWidth size="lg"
                  className="shimmer font-semibold shadow-lg shadow-primary/25"
                  startContent={<Icon icon="lucide:send" />}
                >
                  Send Message
                </Button>
              </motion.div>
            </form>
          </motion.div>
        )}

        <Divider className="my-8" />

        <motion.div
          variants={reduce ? undefined : stagger(0.1)}
          initial={reduce ? undefined : 'hidden'}
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.h4 variants={reduce ? undefined : fadeUp} className="text-lg font-semibold mb-5">
            Other Ways to Reach Me
          </motion.h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {contactInfo.map((info) => (
              <motion.div
                key={info.label}
                variants={reduce ? undefined : fadeUp}
                whileHover={reduce ? undefined : { y: -3, transition: { duration: 0.2 } }}
                className="flex items-center gap-3 p-4 rounded-xl border border-content3/50 bg-content2/50 hover:border-primary/30 hover:shadow-md transition-all duration-300"
              >
                <div className={`w-10 h-10 rounded-xl bg-${info.color}-100 dark:bg-${info.color}-900/30 flex items-center justify-center shrink-0`}>
                  <Icon icon={info.icon} className={`text-${info.color}-600 dark:text-${info.color}-400`} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-foreground-500">{info.label}</p>
                  {info.href ? (
                    <a href={info.href} className="text-sm font-medium hover:text-primary transition-colors truncate block">
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium truncate">{info.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </CardBody>
    </Card>
  );
};
