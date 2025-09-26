//! Æternum Author
//? @/contexts/SlidesContext.tsx
'use client';
import { createContext, ReactNode, useContext } from 'react';
import { useState } from 'react';

type SlideContextData = {
  slide: string;
  setSlide: (param: string) => void;
};

export const SlideContext = createContext({} as SlideContextData);

type SlideContextProviderProps = {
  children: ReactNode;
};

export function SlideContextProvider({ children }: SlideContextProviderProps) {
  const [slide, setSlide] = useState('intro');

  return (
    <SlideContext.Provider
      value={{
        slide,
        setSlide,
      }}
    >
      {children}
    </SlideContext.Provider>
  );
}

export function useSlide() {
  return useContext(SlideContext);
}
