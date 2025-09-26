//! Æternum Author
//? @/components/FlameLoader.tsx
'use client';
import { useState, useEffect } from 'react';
import cn from 'classnames';

export function FlameLoader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(false), 2200);
    return () => clearTimeout(timeout); // Cleanup timeout on unmount
  }, []);

  return (
    <div
      className={cn(
        'oxygen bg-PAPER dark:bg-IRON h-[100vh] w-full justify-center items-center pb-20 z-50 fixed transition-opacity duration-1000 ease-in-out',
        {
          'opacity-0': !isVisible,
        }
      )}
    >
      <div className="fire">
        <div className="flames">
          <div className="flame"></div>
          <div className="flame"></div>
          <div className="flame"></div>
        </div>
      </div>
      <div className="h-auto w-full text-center fixed bottom-1/3 text-xl md:text-3xl">
        <p className="pt-4 font-jubilat text-transparent leading-none bg-clip-text bg-gradient-to-t from-[#ff7033] to-[#fdc569]">
          ÆTERNUM AUTHOR
          <br />
          by <span className="font-burtons">john lerina</span>
        </p>
      </div>
    </div>
  );
}
