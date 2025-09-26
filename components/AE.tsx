//! Æternum Author
//? @/components/AE.tsx
export function AE() {
  return (
    <p
      id="LOGO"
      className="select-none font-burtons mt-2 text-2xl flex flex-row text-IRON dark:text-PAPER"
    >
      <section className="font-jubilat gap-1 flex items-center">
        <span>Æ</span>
        <span className="ml-0.5 font-burtons pt-1 text-base text-ORANGE dark:text-EMERALD">
          •
        </span>
        <a href="https://linkedin.com/in/jmfantin" target="_blank">
          <span className="font-burtons text-lg flex items-center hover:cursor-pointer hover:text-ORANGE dark:hover:text-EMERALD hover:underline underline-offset-2 transition-all ease-in-out">
            john lerina
          </span>
        </a>
      </section>
    </p>
  );
}
