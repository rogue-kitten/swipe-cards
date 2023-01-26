export default function Light() {
  return (
    <div className="flex min-h-[400px] flex-1 -translate-y-[4rem] rotate-180 flex-col items-center justify-center overflow-hidden bg-black">
      <div className="relative flex w-full flex-1 scale-150 items-center justify-center border">
        <div className="absolute inset-auto right-1/2 h-56 w-[30rem] bg-gradient-conic from-teal-500 via-black to-transparent text-white [--conic-position:from_70deg_at_center_top]"></div>
        <div className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-black to-teal-500 text-white [--conic-position:from_290deg_at_center_top]"></div>
        <div className="absolute top-1/2 h-48 w-full translate-y-12 bg-black blur-2xl">
          sdgdsg
        </div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-teal-500 opacity-50 blur-3xl"></div>
        <div className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-teal-400 blur-2xl"></div>
        <div className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-teal-400 blur-sm"></div>

        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-black"></div>
      </div>
    </div>
  );
}
