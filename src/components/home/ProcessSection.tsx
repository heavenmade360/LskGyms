import { ClipboardList, Dumbbell, Moon, Target } from "lucide-react";

export function ProcessSection() {
  return (
    <section className="py-24 max-w-[1400px] mx-auto px-4 md:px-8 w-full">
      <div className="grid md:grid-cols-2 gap-8 items-end mb-16">
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-2">Come to a result</h3>
          <h2 className="text-5xl md:text-6xl font-heading font-black uppercase tracking-tighter text-brand-dark">With Us</h2>
        </div>
        <p className="text-zinc-600 text-lg md:text-xl font-medium max-w-sm mb-2">
          Ready to take the first step towards a healthier, stronger you?
        </p>
      </div>

      <div className="relative mt-16 md:mt-24 max-w-5xl mx-auto">
        {/* Dashed Line (Desktop) */}
        <div className="absolute top-1/2 left-0 w-full h-[2px] border-t-2 border-dashed border-zinc-300 -translate-y-1/2 z-0 hidden md:block"></div>
        
        {/* Dashed Line (Mobile) */}
        <div className="absolute top-0 left-1/2 w-[2px] h-full border-l-2 border-dashed border-zinc-300 -translate-x-1/2 z-0 block md:hidden"></div>
        
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-12 sm:gap-8 md:gap-4">
          
          {/* Step 1 */}
          <div className="flex justify-center">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border border-zinc-200 bg-white flex items-center justify-center text-brand-dark shadow-sm">
              <ClipboardList className="w-10 h-10 stroke-[1.5]" />
            </div>
          </div>

          {/* Step 2 (Active) */}
          <div className="flex justify-center">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-brand-dark flex items-center justify-center text-white shadow-xl scale-110">
              <Dumbbell className="w-10 h-10 stroke-[1.5]" />
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex justify-center">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border border-zinc-200 bg-white flex items-center justify-center text-brand-dark shadow-sm">
              <Moon className="w-10 h-10 stroke-[1.5]" />
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex justify-center">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border border-zinc-200 bg-white flex items-center justify-center text-brand-dark shadow-sm">
              <Target className="w-10 h-10 stroke-[1.5]" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
