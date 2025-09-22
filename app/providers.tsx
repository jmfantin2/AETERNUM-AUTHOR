'use client';

import { LangContextProvider } from '@/contexts/LangContext';
import { ExampleContextProvider } from '@/contexts/ExampleContext';
import { ThemeProvider } from 'next-themes';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LangContextProvider>
      <ExampleContextProvider>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </ExampleContextProvider>
    </LangContextProvider>
  );
}
