'use client';

import { createContext, useContext, ReactNode } from 'react';
import { Locale, getTranslation } from '../lib/i18n';
import { useLanguage } from '../hooks/useLanguage';

interface LanguageContextType {
  locale: Locale;
  changeLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const { locale, changeLocale } = useLanguage();
  
  const t = (key: string) => getTranslation(locale, key);

  return (
    <LanguageContext.Provider value={{ locale, changeLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within LanguageProvider');
  }
  return context;
}