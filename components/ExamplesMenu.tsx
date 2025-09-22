import TXT from '@/lib/strings';
import { SpinningTriangle } from './SpinningTriangle';
import { useState, useEffect } from 'react';
import { IoMdArrowDropup } from 'react-icons/io';
import shapeshifter from 'classnames';
import { useExample } from '@/contexts/ExampleContext';

export function ExamplesMenu() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []); //only runs in the client = indicates it has mounted
  //! these are needed for server-side verification

  const { example, setExample } = useExample();

  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return mounted ? (
    <>
      <a
        id="BOTAO SELECAO COMPONENTE"
        onClick={toggleDropdown}
        className={shapeshifter(
          'fixed z-30 bottom-4 right-4 flex flex-row-reverse cursor-pointer text-lg text-white px-2 pr-4 py-1 border-none rounded-md from-ROSE to-ORANGE bg-gradient-to-br font-burtons border-2 dark:from-CYAN dark:to-EMERALD dark:border-PAPER/50 border-IRON/20 group select-none backdrop-blur-2xl hover:opacity-90',
          {
            'from-INDUSTRY to-MIDDLE dark:from-INDUSTRY dark:to-MIDDLE opacity-80 ':
              isOpen,
          }
        )}
      >
        {TXT('LISTA_DE_EXEMPLOS')}
        <IoMdArrowDropup
          className={shapeshifter(
            'text-2xl mr-2 transition-transform group-hover:-translate-y-1 motion-reduce:transform-none',
            {
              'rotate-180 group-hover:translate-y-1': isOpen,
            }
          )}
        />
      </a>
      {isOpen && (
        <main
          id="TELA INTEIRA EM VOLTA DO MENU"
          className="z-20 absolute w-full h-full bg-ORANGE/20 dark:bg-CYAN/20 backdrop-blur-lg"
          onClick={toggleDropdown}
        >
          <div
            id="MENU"
            className={shapeshifter(
              'absolute rotate-180 md:rotate-0 z-10 top-2/3 md:top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 select-none p-2 w-[80%] md:w-[50%] md:max-w-[300px] max-h-[50vh] border-2 border-b-8 border-t-8 shadow-2xl rounded-b-3xl rounded-t-3xl overflow-y-auto bg-PAPER/80 text-IRON border-ORANGE border-b-ROSE border-t-ROSE backdrop-blur-md dark:bg-IRON/80 dark:text-PAPER dark:border-CYAN dark:border-b-EMERALD dark:border-t-EMERALD group py-8',
              {
                'opacity-100 transition-opacity duration-500': isOpen,
              }
            )}
            onClick={toggleDropdown}
          >
            {/* Your dropdown content here */}
            {options.map((option) => (
              <div
                key={option.id}
                className="py-2 w-full text-center rotate-180 md:rotate-0"
                onClick={() => setExample(option.title)}
              >
                <p
                  className={shapeshifter(
                    'border-b-2  border-ROSE/40 dark:border-EMERALD/40 font-burtons text-xl',
                    {
                      'bg-ORANGE/20 dark:bg-CYAN/20 hover:text-ROSE dark:hover:text-EMERALD hover:bg-whirl_light dark:hover:bg-whirl_dark cursor-pointer':
                        option.title !== example,
                      'bg-MIDDLE/30 dark:bg-MIDDLE/30':
                        option.title === example,
                    }
                  )}
                >
                  {option.title}
                  <img
                    className={shapeshifter(
                      'fixed left-3/4 top-1/2 overflow-visible w-[35px] animate-bounce group-hover:hidden',
                      {
                        'hidden': option.title !== example,
                      }
                    )}
                    src="/images/rpg_pointer.png"
                    alt="rpg cursor"
                  />
                </p>
              </div>
            ))}
          </div>
        </main>
      )}
    </>
  ) : (
    <SpinningTriangle />
  );
}

const options = [
  { id: 0, title: 'intro' },
  { id: 1, title: 'this dropdown' },
];

const todo = [
  { id: 0, title: 'intro' },
  { id: 1, title: 'this dropdown' },
  { id: 2, title: 'TRIANGULAR IMAGES' },
  { id: 3, title: 'FLAME LOADER' },
  { id: 4, title: 'THEME SWITCH' },
  { id: 5, title: 'LANG SWITCH' },
  { id: 6, title: 'MONSTER FLOPPY DISK' },
  { id: 7, title: 'GRADIENT TEXTS' },
];
