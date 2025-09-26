//! Æternum Author
//? @/contexts/ExamplesContext.tsx
'use client';
import { createContext, ReactNode, useContext } from 'react';
import { useState } from 'react';

type ExampleContextData = {
  example: string;
  setExample: (param: string) => void;
};

export const ExampleContext = createContext({} as ExampleContextData);

type ExampleContextProviderProps = {
  children: ReactNode;
};

export function ExampleContextProvider({
  children,
}: ExampleContextProviderProps) {
  const [example, setExample] = useState('intro');

  return (
    <ExampleContext.Provider
      value={{
        example,
        setExample,
      }}
    >
      {children}
    </ExampleContext.Provider>
  );
}

export function useExample() {
  return useContext(ExampleContext);
}
