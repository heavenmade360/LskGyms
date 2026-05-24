import { ClipboardList, Dumbbell, Moon, Target } from "lucide-react";
import { motion } from 'motion/react';

export function ProcessSection() {
  const steps = [
    { icon: ClipboardList, active: false },
    { icon: Dumbbell, active: true },
    { icon: Moon, active: false },
    { icon: Target, active: false },
  ];

  return (
    <section className="py-32 md:py-40 max-w-[1400px] mx-auto px-4 md:px-8 w-full">
      <div className="grid md:grid-cols-2 gap-8 items-end mb-20 md:mb-32">
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-4">Come to a result</h3>
          <h2 className="text-5xl md:text-7xl font-heading font-black uppercase tracking-tighter text-brand-dark">With Us</h2>
        </motion.div>
        <motion.p 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-zinc-600 text-xl md:text-2xl font-medium max-w-md mb-2 leading-relaxed"
        >
          Ready to take the first step towards a healthier, stronger you?
        </motion.p>
      </div>

      <div className="relative mt-16 md:mt-24 max-w-5xl mx-auto">
        {/* Dashed Line (Desktop) */}
        <div className="absolute top-1/2 left-0 w-full h-[2px] border-t-[3px] border-dashed border-zinc-200 -translate-y-1/2 z-0 hidden md:block"></div>
        
        {/* Dashed Line (Mobile) */}
        <div className="absolute top-0 left-1/2 w-[2px] h-full border-l-[3px] border-dashed border-zinc-200 -translate-x-1/2 z-0 block md:hidden"></div>
        
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-12 sm:gap-8 md:gap-4">
          
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.5, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2, type: "spring", stiffness: 100 }}
                className="flex justify-center"
              >
                <div className={`w-32 h-32 md:w-44 md:h-44 rounded-full flex items-center justify-center transition-all duration-500 hover:scale-105 cursor-pointer ${
                  step.active 
                    ? "bg-brand-dark text-white shadow-2xl shadow-brand-dark/20 border-8 border-white scale-110 md:scale-110" 
                    : "border-[6px] border-white bg-zinc-50 text-zinc-400 hover:text-brand-dark hover:border-zinc-100 shadow-xl"
                }`}>
                  <Icon className="w-12 h-12 md:w-14 md:h-14 stroke-[1.5]" />
                </div>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
