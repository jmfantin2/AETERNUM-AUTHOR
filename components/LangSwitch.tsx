import { RiEnglishInput } from 'react-icons/ri';
import { GiBrazilFlag } from 'react-icons/gi';
import { useLang } from '@/contexts/LangContext';

export function LangSwitch() {
  const { lang, toggleLang } = useLang();
  return lang.iso === 'PT' ? (
    <GiBrazilFlag
      onClick={toggleLang}
      className="bg-gradient-to-r from-EMERALD text-amber-300 to-sky-600 hover:opacity-90 rounded-md cursor-pointer text-2xl transition-colors ease-in-out ml-4 md:ml-8"
    />
  ) : (
    <RiEnglishInput
      onClick={toggleLang}
      className="text-ROSE hover:text-ORANGE dark:text-CYAN dark:hover:text-EMERALD transition-colors ease-in-out ml-4 md:ml-8 cursor-pointer text-2xl"
    />
  );
}
