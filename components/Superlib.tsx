import { useEffect, useState } from 'react';
import { SpinningTriangle } from './SpinningTriangle';
import Toast from './Toast';

export function Superlib() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []); //only runs in the client = indicates it has mounted
  //! these are needed for server-side verification

  return (
    <p
      id="LOGO SUPERLIB"
      className="select-none font-burtons mt-2 text-2xl flex flex-row text-IRON dark:text-PAPER"
    >
      <div onClick={() => Toast('João Marcelo', 'Bem-vind@ à SUPERLIB!')}>
        SUPERLIB
      </div>
      {mounted ? (
        <>
          <p className="md:hidden lg:flex mx-2 text-base text-ORANGE dark:text-EMERALD">
            @
          </p>
          <a
            href="https://jmfant.in"
            target="_blank"
            className="text-base hover:cursor-pointer hover:border-b-2 border-ORANGE dark:border-EMERALD md:hidden lg:flex"
          >
            JMFANT
            <span className="mr-0.5 text-base text-ORANGE dark:text-EMERALD">
              •
            </span>
            IN
          </a>
        </>
      ) : (
        <SpinningTriangle />
      )}
    </p>
  );
}
