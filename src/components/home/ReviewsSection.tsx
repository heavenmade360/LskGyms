import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

const reviews = [
  {
    name: "Emily H.",
    text: "I've been a member of ZAMBIA FIT for over a year, and I can't imagine my fitness routine without it. The group classes are my favorite – they're challenging, fun, and led by enthusiastic instructors."
  },
  {
    name: "Alexandra T.",
    text: "Joining ZAMBIA FIT was the best decision I made for my fitness journey. The trainers are so supportive and knowledgeable. The community here is incredible."
  },
  {
    name: "Michael R.",
    text: "The facilities are top-notch and always clean. I really appreciate the 24/7 access option and the variety of equipment available. Best gym in Lusaka by far!"
  }
];

export function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const nextIndex = (currentIndex + 1) % reviews.length;

  return (
    <section className="py-32 md:py-40 max-w-[1400px] mx-auto px-4 md:px-8 w-full overflow-hidden">
      <div className="mb-20 md:mb-24">
        <h3 
          className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-4"
        >
          Reviews
        </h3>
        <h2 
          className="text-5xl md:text-7xl font-heading font-black uppercase tracking-tighter text-brand-dark"
        >
          From You
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Portraits Collage */}
        <div className="relative h-[400px] md:h-[500px] flex items-center justify-center">
          <img 
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=200&auto=format&fit=crop" 
            alt="Reviewer" 
            className="w-28 h-28 sm:w-36 sm:h-36 rounded-full object-cover absolute top-0 left-0 sm:left-10 border-[6px] border-white shadow-2xl z-10 hover:z-30 hover:scale-110 transition-transform duration-300"
          />
          <img 
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop" 
            alt="Reviewer" 
            className="w-40 h-40 sm:w-56 sm:h-56 rounded-full object-cover absolute top-10 right-0 sm:right-10 md:right-20 border-[8px] border-white shadow-2xl z-20 hover:z-30 hover:scale-110 transition-transform duration-300"
          />
          <img 
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop" 
            alt="Reviewer" 
            className="w-32 h-32 sm:w-44 sm:h-44 rounded-full object-cover absolute bottom-10 left-8 sm:left-1/3 border-[6px] border-white shadow-2xl z-10 hover:z-30 hover:scale-110 transition-transform duration-300"
          />
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" 
            alt="Reviewer" 
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover absolute bottom-0 right-4 sm:right-12 border-[6px] border-white shadow-2xl hover:z-30 hover:scale-110 transition-transform duration-300"
          />
        </div>

        {/* Reviews Carousel */}
        <div>
           <div className="flex flex-col md:flex-row gap-8 mb-12 relative min-h-[250px]">
             
             {/* Review Card 1 */}
               <div 
                 key={currentIndex}
                 className="flex-1 bg-white border border-zinc-100 rounded-[40px] p-8 md:p-10 shadow-xl shadow-zinc-200/50 relative z-20"
               >
                 <div className="flex justify-between items-start mb-8">
                    <div className="border border-brand-dark rounded-full px-6 py-2 shadow-sm">
                      <span className="font-semibold text-brand-dark tracking-wide">{reviews[currentIndex].name}</span>
                    </div>
                    <div className="text-brand-green text-5xl font-serif font-black leading-none opacity-50">"</div>
                 </div>
                 <p className="text-zinc-600 text-base md:text-lg leading-relaxed">
                   {reviews[currentIndex].text}
                 </p>
               </div>

             {/* Review Card 2 (Faded/Next) */}
             <div 
               className="flex-1 bg-white border border-zinc-100 rounded-[40px] p-8 md:p-10 shadow-sm opacity-40 hidden md:block scale-95 origin-left absolute -right-32 top-0 bottom-0 w-full z-10 pointer-events-none"
             >
               <div className="flex justify-between items-start mb-8">
                  <div className="border border-zinc-300 rounded-full px-6 py-2">
                    <span className="font-semibold text-zinc-400 tracking-wide">{reviews[nextIndex].name}</span>
                  </div>
                  <div className="text-zinc-300 text-5xl font-serif font-black leading-none">"</div>
               </div>
               <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
                 {reviews[nextIndex].text}
               </p>
             </div>

           </div>

           {/* Navigation */}
           <div 
             className="flex items-center gap-4 px-4 mt-8"
           >
             <button 
               onClick={prevReview}
               className="w-14 h-14 rounded-full bg-brand-dark flex items-center justify-center text-white hover:bg-black hover:scale-105 transition-all shadow-lg hover:shadow-xl"
             >
               <ArrowLeft className="w-6 h-6" />
             </button>
             <button 
               onClick={nextReview}
               className="w-14 h-14 rounded-full border-2 border-zinc-200 bg-white flex items-center justify-center text-brand-dark hover:bg-zinc-50 hover:border-zinc-300 hover:scale-105 transition-all shadow-sm"
             >
               <ArrowRight className="w-6 h-6" />
             </button>
           </div>
        </div>

      </div>
    </section>
  );
}
