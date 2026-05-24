import { ArrowLeft, ArrowRight } from "lucide-react";

export function ReviewsSection() {
  return (
    <section className="py-24 max-w-[1400px] mx-auto px-4 md:px-8 w-full">
      <div className="mb-16">
        <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-2">Reviews</h3>
        <h2 className="text-5xl md:text-6xl font-heading font-black uppercase tracking-tighter text-brand-dark">From You</h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Portraits Collage */}
        <div className="relative h-[300px] md:h-[400px] flex items-center justify-center">
          <img 
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=200&auto=format&fit=crop" 
            alt="Reviewer" 
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover absolute top-0 left-0 sm:left-10 border-4 border-white shadow-xl"
          />
          <img 
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop" 
            alt="Reviewer" 
            className="w-36 h-36 sm:w-48 sm:h-48 rounded-full object-cover absolute top-10 right-0 sm:right-20 border-4 border-white shadow-xl z-20"
          />
          <img 
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop" 
            alt="Reviewer" 
            className="w-28 h-28 sm:w-36 sm:h-36 rounded-full object-cover absolute bottom-0 left-4 sm:left-1/4 border-4 border-white shadow-xl z-10"
          />
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" 
            alt="Reviewer" 
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover absolute bottom-12 right-4 sm:right-10 border-4 border-white shadow-xl"
          />
        </div>

        {/* Reviews Carousel */}
        <div>
           <div className="flex flex-col md:flex-row gap-6 mb-12">
             
             {/* Review Card 1 */}
             <div className="flex-1 bg-white border border-zinc-200 rounded-[32px] p-8 shadow-sm">
               <div className="flex justify-between items-start mb-6">
                  <div className="border border-brand-dark rounded-full px-6 py-2">
                    <span className="font-semibold text-brand-dark">Emily H.</span>
                  </div>
                  <div className="text-brand-orange text-4xl font-serif font-black leading-none">"</div>
               </div>
               <p className="text-zinc-600 text-sm leading-relaxed">
                 I've been a member of ZAMBIA FIT for over a year, and I can't imagine my fitness routine without it. The group classes are my favorite – they're challenging, fun, and led by enthusiastic instructors.
               </p>
             </div>

             {/* Review Card 2 (Faded/Next) */}
             <div className="flex-1 bg-white border border-zinc-200 rounded-[32px] p-8 shadow-sm opacity-50 hidden md:block">
               <div className="flex justify-between items-start mb-6">
                  <div className="border border-brand-dark rounded-full px-6 py-2">
                    <span className="font-semibold text-brand-dark">Alexandra T.</span>
                  </div>
                  <div className="text-brand-orange/50 text-4xl font-serif font-black leading-none">"</div>
               </div>
               <p className="text-zinc-600 text-sm leading-relaxed">
                 Joining ZAMBIA FIT was the best decision I made for my fitness journey. The trainers are so supportive and knowledgeable. The community here is incredible.
               </p>
             </div>

           </div>

           {/* Navigation */}
           <div className="flex items-center gap-4 px-4">
             <button className="w-12 h-12 rounded-full bg-brand-dark flex items-center justify-center text-white hover:bg-black transition-colors">
               <ArrowLeft className="w-5 h-5" />
             </button>
             <button className="w-12 h-12 rounded-full border border-zinc-300 bg-white flex items-center justify-center text-brand-dark hover:bg-zinc-50 transition-colors">
               <ArrowRight className="w-5 h-5" />
             </button>
           </div>
        </div>

      </div>
    </section>
  );
}
