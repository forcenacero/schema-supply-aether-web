
import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { SupportedLanguage } from '../lib/contentful';

const languages = [
  { code: 'en-US', label: 'English' },
  { code: 'es', label: 'Español' },
  { code: 'fr', label: 'Français' }
];

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (lang: SupportedLanguage) => {
    setLanguage(lang);
    // Reload the current page to refresh content with the new language
    window.location.reload();
  };

  return (
    <div className="relative group">
      <button 
        className="flex items-center space-x-1 text-schema-black hover:text-schema-gray transition-colors"
        aria-label="Change language"
      >
        <Globe className="h-5 w-5" />
        <span className="hidden md:inline text-sm">{languages.find(l => l.code === language)?.label}</span>
      </button>
      
      <div className="absolute right-0 mt-2 w-40 z-50 bg-white shadow-lg border border-schema-lightgray rounded-md py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
        {languages.map((lang) => (
          <button
            key={lang.code}
            className={`block w-full text-left px-4 py-2 text-sm hover:bg-schema-offwhite transition-colors ${
              language === lang.code ? 'font-medium bg-schema-offwhite' : ''
            }`}
            onClick={() => handleLanguageChange(lang.code as SupportedLanguage)}
          >
            {lang.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
