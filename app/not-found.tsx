export default function Custom404() {
  return (
    <>
      <img
        className="absolute border-black border-2 w-full h-full opacity-10"
        src="/tv-static.gif"
        alt="404"
      />
      <div className="flex h-[100vh] w-full items-center justify-center bg-gradient-to-br from-MIDDLE to-INDUSTRY text-5xl font-burtons z-auto">
        404
        <span className="text-2xl pt-2">
          <br />
          not found
        </span>
      </div>
    </>
  );
}
