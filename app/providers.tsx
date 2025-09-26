'use client';

import { LangContextProvider } from '@/contexts/LangContext';
import { SlideContextProvider } from '@/contexts/SlideContext';
import { ThemeProvider } from 'next-themes';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LangContextProvider>
      <SlideContextProvider>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </SlideContextProvider>
    </LangContextProvider>
  );
}
