//! Æternum Author
//? @/components/presentation/Presentation.tsx
'use client';

import {
  FC,
  ReactElement,
  ReactNode,
  Children,
  cloneElement,
  useState,
  useEffect,
} from 'react';
import { useExample } from '@/contexts/ExampleContext';
import NavButton from './NavButton';
import Step from './Step';

type PresentationProps = {
  children: ReactNode;
};

const Presentation: FC<PresentationProps> = ({ children }) => {
  const { example, setExample } = useExample();
  const steps = Children.toArray(children) as ReactElement[];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const index = steps.findIndex((step) => step.props.title === example);
    if (index !== -1) setCurrent(index);
  }, [example, steps]);

  const goNext = () => {
    if (current < steps.length - 1) {
      const next = current + 1;
      setCurrent(next);
      setExample(steps[next].props.title);
    }
  };

  const goPrev = () => {
    if (current > 0) {
      const prev = current - 1;
      setCurrent(prev);
      setExample(steps[prev].props.title);
    }
  };

  const goFirst = () => {
    setCurrent(0);
    setExample(steps[0].props.title);
  };

  return (
    <div className="relative w-full">
      <div className="fixed top-0 left-0 z-30 w-full flex h-1 bg-IRON/10 dark:bg-PAPER/10">
        {steps.map((_, i) => (
          <div
            key={i}
            className={`flex-1 mx-0.5 transition-colors duration-300 ${
              i < current
                ? 'bg-ROSE dark:bg-CYAN'
                : i === current
                ? 'bg-ORANGE dark:bg-EMERALD'
                : 'bg-MIDDLE/20'
            }`}
          />
        ))}
      </div>
      <div className="min-h-screen flex items-center justify-center animate-fade-in">
        {cloneElement(steps[current], { key: current })}
      </div>
      <NavButton direction="left" onClick={goPrev} disabled={current === 0} />
      {current < steps.length - 1 ? (
        <NavButton direction="right" onClick={goNext} />
      ) : (
        <NavButton direction="redo" onClick={goFirst} />
      )}
    </div>
  );
};

export default Presentation;

export { Step };
