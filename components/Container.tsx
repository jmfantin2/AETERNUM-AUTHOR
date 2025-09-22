type ContainerProps = {
  mode: string;
  children: React.ReactNode;
};

export function Container({ mode, children }: ContainerProps) {
  switch (mode) {
    case 'center':
      return (
        <main className="flex bg-PAPER text-IRON dark:text-PAPER h-[100vh] dark:bg-IRON px-20 items-center justify-center">
          {children}
        </main>
      );
    default:
      return (
        <main className="flex bg-PAPER text-IRON dark:text-PAPER h-[100vh] px-4 dark:bg-IRON md:px-20">
          {children}
        </main>
      );
  }
  return (
    <main className="flex bg-PAPER text-IRON dark:text-PAPER h-[100vh] px-4 dark:bg-IRON md:px-20 lg:px-40 items-center justify-center">
      {children}
    </main>
  );
}
