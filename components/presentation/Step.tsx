//! Æternum Author
//? @/components/presentation/Step.tsx
import { FC, ReactNode } from 'react';

type StepProps = {
  title: string;
  children: ReactNode;
};

const Step: FC<StepProps> = ({ children }) => <>{children}</>;

export default Step;
