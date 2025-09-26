//https://codepen.io/z-/pen/JXVpgp
//<h1 style={{color: "red"}}>Hello Style!</h1>
'use client';
import { useEffect, useState } from 'react';

export function FlameLoader() {
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
          <div className="h-auto w-full text-center fixed bottom-1/3 text-xl md:text-3xl">
            <p className="pt-4 font-jubilat text-transparent leading-none bg-clip-text bg-gradient-to-t from-[#ff7033] to-[#fdc569]">
              ÆTERNUM AUTHOR
              <br />
              by <span className="font-burtons">john lerina</span>
            </p>
          </div>
        </div>
      </>
    )
  );
}
