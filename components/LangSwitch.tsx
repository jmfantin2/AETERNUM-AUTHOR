import { LiaFlagUsaSolid } from 'react-icons/lia';
import { GiBrazilFlag } from 'react-icons/gi';
import { useLang } from '@/contexts/LangContext';

export function LangSwitch() {
  const { lang, toggleLang } = useLang();
  return lang.iso === 'PT' ? (
    <GiBrazilFlag
      onClick={toggleLang}
      className="bg-gradient-to-r  from-EMERALD text-amber-300 via-sky-600 to-EMERALD hover:opacity-90  px-1 max-h-8 rounded-md cursor-pointer text-4xl transition-colors ease-in-out ml-4 md:ml-8"
    />
  ) : (
    <LiaFlagUsaSolid
      onClick={toggleLang}
      className="bg-gradient-to-br text-ROSE  dark:text-CYAN cursor-pointer text-4xl dark:hover:text-sky-600 transition-colors ease-in-out ml-4 md:ml-8"
    />
  );
}
