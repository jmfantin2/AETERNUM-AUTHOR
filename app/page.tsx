//! Æternum Author
//? @/app/page.tsx
'use client';
import { useState, useEffect } from 'react';
import { SlidesMenu } from '@/components/SlidesMenu';
import { FlameLoader } from '@/components/FlameLoader';
import { Navigator } from '@/components/Navigator';
import { FireFist } from '@/components/FireFist';
import TXT from '@/lib/strings';
import Head from 'next/head';
import Presentation, { Step } from '@/components/presentation/Presentation';
import TextSlide from '@/components/presentation/TextSlide';
import ImageSlide from '@/components/presentation/ImageSlide';
import cn from 'classnames';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 3200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <Head>
        <title>Æ • John Lerina</title>
        <meta name="description" content="Showcase yourself" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={cn(
          'absolute inset-0 z-50 flex items-center justify-center min-h-screen',
          { hidden: !loading }
        )}
      >
        <FlameLoader />
      </div>
      <main className="bg-PAPER h-[100vh] px-4 dark:bg-IRON md:px-20 lg:px-40">
        <SlidesMenu />
        <Navigator />
        <Presentation>
          <Step title="intro">
            <section className="justify-center h-auto mb-16 lg:mb-0 group rounded-lg border p-2 transition-colors text-IRON dark:text-PAPER border-gray-400/30 bg-gray-100/30 dark:border-neutral-700 dark:bg-neutral-800/30">
              <div className="flex flex-col md:flex-row w-full justify-center items-center gap-4 select-none">
                <FireFist mode="hand" size="sm" />
                <p className="mt-4 md:mt-16 text-transparent opacity-70 bg-clip-text bg-gradient-to-r from-ROSE to-ORANGE dark:from-CYAN dark:to-EMERALD font-burtons text-5xl md:text-6xl lg:text-7xl border-b-4 border-ROSE/50 dark:border-CYAN/50">
                  {TXT('FRONTEND_IS_ART')}
                </p>
              </div>
              <p className="opacity-90 text-IRON dark:text-PAPER p-2 md:p-4 md:pt-16 font-jubilat text-lg md:text-xl lg:text-2xl text-justify">
                {TXT('INTRO1')}
              </p>
              <p className="opacity-90 text-IRON dark:text-PAPER p-2 pt-1 md:px-4 font-jubilat text-lg md:text-xl lg:text-2xl text-justify">
                {TXT('INTRO2')}
              </p>
              <p className="opacity-90 text-IRON dark:text-PAPER p-2 pt-1 md:px-4 font-jubilat text-lg md:text-xl lg:text-2xl text-end">
                {TXT('INTRO3')}
              </p>
            </section>
          </Step>
          <Step title="helplit">
            <TextSlide>
              Helplit chapter placeholder – refactor demo here.
            </TextSlide>
          </Step>
          <Step title="arte-das-milhas">
            <TextSlide>
              Arte das Milhas dashboard placeholder – live component.
            </TextSlide>
          </Step>
          <Step title="pucrs">
            <ImageSlide path="rpg_pointer.png" alt="PUCRS visualization" />
          </Step>
        </Presentation>
      </main>
    </>
  );
}
