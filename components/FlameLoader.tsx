//https://codepen.io/z-/pen/JXVpgp
//<h1 style={{color: "red"}}>Hello Style!</h1>
'use client';
import { useEffect, useState } from 'react';

type FlameLoaderProps = {
  mode: 'fullpage' | 'basic';
  greeting?: boolean;
};

import salvete from '@/lib/greetings';

export function FlameLoader({ mode, greeting }: FlameLoaderProps) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate a delay for demonstration purposes
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2718); // Adjust the delay as needed

    return () => {
      clearTimeout(timeout);
    };
  }, []);
  switch (mode) {
    case 'fullpage':
      return (
        loading && (
          <>
            <div className="oxygen bg-PAPER dark:bg-IRON h-[100vh] w-full justify-center items-center pb-20 z-50 absolute">
              <div className="fire">
                <div className="flames">
                  <div className="flame"></div>
                  <div className="flame"></div>
                  <div className="flame"></div>
                </div>
              </div>
              {greeting ? (
                <div className="h-auto w-full text-center fixed bottom-1/3 text-xl md:text-3xl">
                  <p className="font-burtons text-transparent bg-clip-text bg-gradient-to-t from-[#ff7033] to-[#fdc569]">
                    {salvete[0]}
                  </p>
                </div>
              ) : null}
            </div>
          </>
        )
      );
    case 'basic':
    default:
      return (
        <div className="oxygen">
          <div className="fire">
            <div className="flames">
              <div className="flame"></div>
              <div className="flame"></div>
              <div className="flame"></div>
            </div>
          </div>
        </div>
      );
  }
}
