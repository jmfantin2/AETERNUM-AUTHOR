//! Æternum Author
//? @/components/presentation/NavButton.tsx
import { FC } from 'react';
import { FaChevronLeft, FaChevronRight, FaRedo } from 'react-icons/fa';

type NavButtonProps = {
  direction: 'left' | 'right' | 'redo';
  onClick: () => void;
  disabled?: boolean;
};

const NavButton: FC<NavButtonProps> = ({ direction, onClick, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`
      fixed bottom-8 z-30
      ${direction === 'left' ? 'left-8' : 'right-8'}
      bg-ROSE/80 hover:bg-ROSE
      disabled:opacity-30 disabled:hover:bg-ROSE/80
      text-PAPER rounded-full p-2
      transition-all duration-300 ease-in-out
      shadow-lg hover:shadow-xl
      focus:outline-none focus:ring-2 focus:ring-ROSE/50
      dark:bg-CYAN/80 dark:hover:bg-CYAN dark:disabled:hover:bg-CYAN/80 dark:focus:ring-CYAN/50
    `}
  >
    {direction === 'left' ? (
      <FaChevronLeft size={24} />
    ) : direction === 'right' ? (
      <FaChevronRight size={24} />
    ) : (
      <FaRedo size={24} />
    )}
  </button>
);

export default NavButton;
