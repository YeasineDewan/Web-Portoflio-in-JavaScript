import React from 'react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from '@heroui/react';
import { Icon } from '@iconify/react';

export const LanguageSwitcher = () => {
  const [selectedLanguage, setSelectedLanguage] = React.useState('en');
  
  const languages = [
    { key: 'en', name: 'English', flag: 'twemoji:flag-united-kingdom' },
    { key: 'bn', name: 'বাংলা', flag: 'twemoji:flag-bangladesh' }
  ];
  
  const handleLanguageChange = (key: string) => {
    setSelectedLanguage(key);
    // In a real app, this would update the app's language context
  };
  
  const selectedLang = languages.find(lang => lang.key === selectedLanguage);
  
  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Button 
          variant="light" 
          className="min-w-0"
          startContent={<Icon icon={selectedLang?.flag || ''} className="text-lg" />}
          endContent={<Icon icon="lucide:chevron-down" className="text-sm opacity-70" />}
        >
          {selectedLang?.key.toUpperCase()}
        </Button>
      </DropdownTrigger>
      <DropdownMenu 
        aria-label="Language selection" 
        variant="flat" 
        selectionMode="single" 
        selectedKeys={[selectedLanguage]}
        onSelectionChange={(keys) => {
          const selected = Array.from(keys)[0] as string;
          if (selected) handleLanguageChange(selected);
        }}
      >
        {languages.map((lang) => (
          <DropdownItem 
            key={lang.key} 
            startContent={<Icon icon={lang.flag} className="text-lg" />}
          >
            {lang.name}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};