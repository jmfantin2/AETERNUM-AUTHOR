'use client';

import { ThemeSwitch } from './ThemeSwitch';
import { LangSwitch } from './LangSwitch';
import { AE } from './AE';

export function Navigator() {
  return (
    <nav className="flex flex-row z-10 w-full items-center justify-between font-mono text-sm lg:flex py-4 md:py-10">
      <AE />

      <ul id="SWITCH TEMA E IDIOMA" className="flex items-center">
        <li>
          <ThemeSwitch />
        </li>
        <li>
          <LangSwitch />
        </li>
      </ul>
    </nav>
  );
}
