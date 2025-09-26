//! Æternum Author
//? @/components/FireFist.tsx
import Image from 'next/image';
import shapeshifter from 'classnames';

type FireFistProps = {
  mode: 'full' | 'hand';
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
};

export function FireFist({ mode, size }: FireFistProps) {
  return (
    <div
      className={shapeshifter(
        'bg-gradient-to-br rotate-45 from-transparent via-transparent to-ROSE/50 dark:from-transparent dark:via-transparent dark:to-CYAN/50 overflow-y-hidden ',
        {
          'w-12 h-12 md:h-24 md:w-24': size === 'xs',
          'w-24 h-24 md:h-36 md:w-36': size === 'sm',
          'w-36 h-36 md:h-48 md:w-48': size === 'md',
          'w-48 h-48 md:h-72 md:w-72': size === 'lg',
          'w-72 h-72 md:h-96 md:w-96': size === 'xl',
        }
      )}
    >
      <Image
        alt=""
        src={mode === 'full' ? '/alchemist.webp' : '/fire_fist.png'}
        layout="fill"
      />
    </div>
  );
}
