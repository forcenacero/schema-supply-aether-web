
import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { SupportedLanguage, DEFAULT_LANGUAGE } from '../lib/contentful';
import { useQueryClient } from '@tanstack/react-query';

interface LanguageContextType {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: DEFAULT_LANGUAGE,
  setLanguage: () => {}
});

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const queryClient = useQueryClient();
  
  const [language, setLanguageState] = useState<SupportedLanguage>(() => {
    // Try to get saved language from localStorage
    const savedLanguage = localStorage.getItem('upcofly-language') as SupportedLanguage;
    // Check browser language
    const browserLanguage = navigator.language.split('-')[0];
    
    if (savedLanguage && ['en-US', 'es', 'fr'].includes(savedLanguage)) {
      return savedLanguage;
    } else if (browserLanguage === 'es') {
      return 'es';
    } else if (browserLanguage === 'fr') {
      return 'fr';
    }
    
    return DEFAULT_LANGUAGE;
  });

  const setLanguage = (newLanguage: SupportedLanguage) => {
    setLanguageState(newLanguage);
    // Invalidate queries to refetch data in new language
    queryClient.invalidateQueries();
  };

  // Save language preference to localStorage
  useEffect(() => {
    localStorage.setItem('upcofly-language', language);
    // Set HTML lang attribute for SEO
    document.documentElement.lang = language.split('-')[0];
    
    // Add hreflang link elements to head
    const updateHreflangTags = () => {
      // Remove any existing hreflang tags
      document.querySelectorAll('link[rel="alternate"][hrefLang]').forEach(el => el.remove());
      
      // Add new hreflang tags
      const path = window.location.pathname;
      const addHreflangTag = (lang: string, fullLang: string) => {
        const link = document.createElement('link');
        link.rel = 'alternate';
        link.hrefLang = lang;
        link.href = `${window.location.origin}${path}?lang=${fullLang}`;
        document.head.appendChild(link);
      };
      
      addHreflangTag('x-default', 'en-US');
      addHreflangTag('en', 'en-US');
      addHreflangTag('es', 'es');
      addHreflangTag('fr', 'fr');
    };
    
    updateHreflangTags();
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
