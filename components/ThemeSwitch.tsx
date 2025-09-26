import { FaMoon, FaSun } from 'react-icons/fa';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { SpinningTriangle } from './SpinningTriangle';

export function ThemeSwitch() {
  //! these are needed for server-side verification
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  //! useEffect only runs in the client, which means the component will be mounted as soon as it runs
  useEffect(() => setMounted(true), []);

  if (!mounted) return <SpinningTriangle />;

  if (resolvedTheme === 'dark') {
    return (
      <FaMoon
        onClick={() => {
          setTheme('light');
        }}
        className="py-1 text-ROSE hover:text-ORANGE dark:text-CYAN dark:hover:text-EMERALD transition-colors ease-in-out ml-4 md:ml-8 cursor-pointer text-2xl"
      />
    );
  }

  if (resolvedTheme === 'light') {
    return (
      <FaSun
        onClick={() => {
          setTheme('dark');
        }}
        className="text-ROSE hover:text-ORANGE dark:text-CYAN dark:hover:text-EMERALD transition-colors ease-in-out ml-4 md:ml-8 cursor-pointer text-2xl"
      />
    );
  }
}
