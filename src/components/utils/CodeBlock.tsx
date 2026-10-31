import React from 'react';
import { Card } from '@heroui/react';
import { Icon } from '@iconify/react';

interface CodeBlockProps {
  code: string;
  language?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'code' }) => {
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <Card className="relative mb-6 mt-4 overflow-hidden">
      <div className="flex justify-between items-center bg-content3 px-4 py-2">
        <span className="text-xs font-medium">{language}</span>
        <button 
          onClick={copyToClipboard}
          className="flex items-center gap-1 text-xs hover:text-primary transition-colors"
          aria-label="Copy code"
        >
          {copied ? (
            <>
              <Icon icon="lucide:check" className="text-success" />
              <span className="text-success">Copied!</span>
            </>
          ) : (
            <>
              <Icon icon="lucide:copy" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <pre className="bg-content3 p-4 overflow-x-auto">
        <code className="text-sm font-mono whitespace-pre-wrap">{code}</code>
      </pre>
    </Card>
  );
};