'use client';

import { createContext, ReactNode, useContext } from 'react';
import { useState } from 'react';

type Lang = {
  iso: string;
  n: number;
};

type LangContextData = {
  lang: Lang;
  toggleLang: () => void;
};

export const LangContext = createContext({} as LangContextData);

type LangContextProviderProps = {
  children: ReactNode;
};

export function LangContextProvider({ children }: LangContextProviderProps) {
  const initialLang = { iso: 'PT', n: 0 };

  const [lang, setLang] = useState(initialLang);

  function toggleLang() {
    if (lang.iso === 'PT') {
      setLang({ iso: 'EN', n: 1 });
    } else {
      setLang({ iso: 'PT', n: 0 });
    }
  }

  return (
    <LangContext.Provider
      value={{
        lang,
        toggleLang,
      }}
    >
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
