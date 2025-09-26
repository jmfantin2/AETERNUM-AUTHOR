//! Æternum Author
//? @/components/presentation/TextSlide.tsx
import { FC, ReactNode } from 'react';

type TextSlideProps = {
  children: ReactNode;
  color?: 'rose' | 'cyan';
};

const TextSlide: FC<TextSlideProps> = ({ children, color = 'rose' }) => (
  <div
    className={`flex items-center justify-center min-h-[60vh] px-16 text-center
      ${color === 'rose' ? 'text-ROSE' : 'text-CYAN'}
      dark:${color === 'rose' ? 'text-ORANGE' : 'text-EMERALD'}
    `}
  >
    <p className="text-2xl font-jubilat leading-relaxed animate-fade-in">
      {children}
    </p>
  </div>
);

export default TextSlide;
