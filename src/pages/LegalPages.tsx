import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

type LegalPageProps = {
  title: string;
  introduction: string;
  sections: { title: string; content: string }[];
};

const LegalPage = ({ title, introduction, sections }: LegalPageProps) => (
  <section className="py-12 md:py-16">
    <div className="container-custom max-w-3xl">
      <Link to="/" className="mb-8 inline-flex items-center gap-2 text-sm text-foreground-500 transition-colors hover:text-primary">
        <Icon icon="lucide:arrow-left" />
        Back to home
      </Link>
      <header className="mb-10 border-b border-divider pb-8">
        <h1 className="mb-4 text-4xl font-bold">{title}</h1>
        <p className="text-lg leading-7 text-foreground-500">{introduction}</p>
      </header>
      <div className="space-y-8">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="mb-3 text-xl font-semibold">{section.title}</h2>
            <p className="leading-7 text-foreground-600 dark:text-foreground-400">{section.content}</p>
          </section>
        ))}
      </div>
    </div>
  </section>
);

export const PrivacyPolicyPage = () => (
  <LegalPage
    title="Privacy Policy"
    introduction="This policy explains what happens to information you choose to share through this portfolio."
    sections={[
      {
        title: 'Contact messages',
        content: 'Submitting the contact form opens a draft in your email application addressed to contact@yeasinedewan.com. The message is sent only if you choose to send it. This website does not store contact form messages.'
      },
      {
        title: 'Information to include',
        content: 'The draft contains the name, email address, subject, and message you entered. Please share only information needed to respond; do not include passwords, payment details, or other sensitive data.'
      },
      {
        title: 'Browser preferences',
        content: 'The selected color theme may be saved locally by your browser so the site can remember your display preference. This preference is not used for advertising.'
      },
      {
        title: 'External websites',
        content: 'This portfolio links to third-party websites and services. Their privacy practices are controlled by their own operators, not this site.'
      },
      {
        title: 'Questions',
        content: 'For questions about this policy or a message you have sent, email contact@yeasinedewan.com.'
      }
    ]}
  />
);

export const TermsPage = () => (
  <LegalPage
    title="Terms of Use"
    introduction="These terms apply to your use of this personal portfolio website."
    sections={[
      {
        title: 'Portfolio information',
        content: 'Project descriptions, experience, and service details are provided for general information. Availability, features, and external demos may change over time.'
      },
      {
        title: 'Project links',
        content: 'Repository links, demos, and other external destinations are operated by their respective owners. This site does not control their availability or content.'
      },
      {
        title: 'Services and engagements',
        content: 'Information about services is not a binding offer. Any work will be subject to a separately agreed scope, schedule, and terms.'
      },
      {
        title: 'Acceptable use',
        content: 'Use this site lawfully and do not attempt to disrupt its operation, bypass its security, or misuse its contact form.'
      },
      {
        title: 'Contact',
        content: 'Questions about these terms can be sent to contact@yeasinedewan.com.'
      }
    ]}
  />
);