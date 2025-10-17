import React from 'react';
import { Card, CardBody, Input, Textarea, Button, Checkbox, Divider } from '@heroui/react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { addToast } from '@heroui/react';

export const ContactForm = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    consent: false
  });
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submissionStatus, setSubmissionStatus] = React.useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleCheckboxChange = (isSelected: boolean) => {
    setFormData(prev => ({ ...prev, consent: isSelected }));
    
    if (errors.consent) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors.consent;
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 20) {
      newErrors.message = 'Message should be at least 20 characters';
    }
    
    if (!formData.consent) {
      newErrors.consent = 'You must agree to the privacy policy';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Replace with your actual Formspree form ID
      const formspreeUrl = 'https://formspree.io/f/your_form_id';
      
      const response = await fetch(formspreeUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to send message');
      }
      
      setSubmissionStatus('success');
      addToast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon.",
        color: "success",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        consent: false
      });
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmissionStatus('error');
      addToast({
        title: "Error",
        description: "Failed to send your message. Please try again later.",
        color: "danger",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full">
      <CardBody className="p-6">
        <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
        
        {submissionStatus === 'success' ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-success-100 dark:bg-success-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon icon="lucide:check" className="text-success-600 dark:text-success-400 text-2xl" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Message Sent Successfully!</h4>
            <p className="text-foreground-500 mb-6">
              Thank you for reaching out. I'll get back to you as soon as possible.
            </p>
            <Button 
              color="primary" 
              variant="flat"
              onPress={() => setSubmissionStatus('idle')}
            >
              Send Another Message
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Your Name"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                isRequired
                isInvalid={!!errors.name}
                errorMessage={errors.name}
                startContent={<Icon icon="lucide:user" className="text-default-400" />}
              />
              
              <Input
                label="Email Address"
                name="email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                isRequired
                isInvalid={!!errors.email}
                errorMessage={errors.email}
                startContent={<Icon icon="lucide:mail" className="text-default-400" />}
              />
            </div>
            
            <Input
              label="Subject"
              name="subject"
              placeholder="What's this about?"
              value={formData.subject}
              onChange={handleChange}
              isRequired
              isInvalid={!!errors.subject}
              errorMessage={errors.subject}
              startContent={<Icon icon="lucide:file-text" className="text-default-400" />}
            />
            
            <Textarea
              label="Message"
              name="message"
              placeholder="Your message here..."
              value={formData.message}
              onChange={handleChange}
              isRequired
              minRows={4}
              isInvalid={!!errors.message}
              errorMessage={errors.message}
            />
            
            <Checkbox
              isSelected={formData.consent}
              onValueChange={handleCheckboxChange}
              isInvalid={!!errors.consent}
            >
              <span className="text-sm">
                I agree to the <Link to="/privacy-policy" className="text-primary">privacy policy</Link> and consent to being contacted regarding my message.
              </span>
            </Checkbox>
            {errors.consent && <p className="text-danger text-xs mt-1">{errors.consent}</p>}
            
            <Button
              type="submit"
              color="primary"
              fullWidth
              size="lg"
              isLoading={isSubmitting}
              startContent={!isSubmitting && <Icon icon="lucide:send" />}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        )}
        
        <Divider className="my-8" />
        
        <div className="space-y-4">
          <h4 className="text-lg font-medium">Other Ways to Reach Me</h4>
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
              <Icon icon="lucide:mail" className="text-primary-600 dark:text-primary-400" />
            </div>
            <div>
              <p className="text-sm text-foreground-500">Email</p>
              <p className="font-medium">yeasinedewanshawon@gmail.com</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-secondary-100 dark:bg-secondary-900/30 flex items-center justify-center">
              <Icon icon="lucide:phone" className="text-secondary-600 dark:text-secondary-400" />
            </div>
            <div>
              <p className="text-sm text-foreground-500">Phone</p>
              <p className="font-medium">+880 0179-3244543</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-success-100 dark:bg-success-900/30 flex items-center justify-center">
              <Icon icon="lucide:map-pin" className="text-success-600 dark:text-success-400" />
            </div>
            <div>
              <p className="text-sm text-foreground-500">Location</p>
              <p className="font-medium">Singair, Manikganj, Bangladesh</p>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
