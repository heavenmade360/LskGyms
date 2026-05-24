export function CoachesSection() {
  return (
    <section className="py-24 max-w-[1400px] mx-auto px-4 md:px-8 w-full">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        
        {/* Images */}
        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] w-full">
          {/* Orange Background Block with single coach */}
          <div className="absolute left-0 bottom-0 w-2/3 h-5/6 bg-brand-orange rounded-[40px] overflow-hidden flex items-end justify-center shadow-xl">
             <img 
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=400&auto=format&fit=crop" 
              className="w-full h-full object-cover mix-blend-overlay opacity-80" 
              alt="Coach silhouette" 
             />
             {/* Play button overlay */}
             <div className="absolute inset-0 flex flex-col justify-center items-center">
                <div className="w-14 h-14 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-brand-dark shadow-xl hover:scale-110 transition-transform cursor-pointer">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 5V19L19 12L8 5Z" />
                  </svg>
                </div>
             </div>
          </div>
          
          {/* Gray Background Block with couple/coaches */}
          <div className="absolute right-0 top-0 w-2/3 h-5/6 bg-[#EBEBEB] rounded-[40px] overflow-hidden border-4 border-white shadow-2xl z-10">
             <img 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=600&auto=format&fit=crop" 
              className="w-full h-full object-cover" 
              alt="Coaches" 
             />
          </div>
        </div>

        {/* Text Details */}
        <div className="md:pl-12">
          <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-2">Are you looking for a mentor?</h3>
          <h2 className="text-5xl md:text-6xl font-heading font-black uppercase tracking-tighter text-brand-dark mb-8">Coaches</h2>
          <p className="text-zinc-600 text-base leading-relaxed mb-8 max-w-md">
            Our team of certified and experienced Zambian trainers is dedicated to helping you achieve your fitness goals. Whether you're looking to build muscle, lose weight, or improve overall health, our trainers will create a personalized plan to guide you every step of the way.
          </p>
          <button className="bg-brand-orange hover:bg-orange-600 text-white px-8 py-3.5 rounded-full font-medium transition-all shadow-lg shadow-brand-orange/20 text-sm">
            Explore More
          </button>
        </div>

      </div>
    </section>
  );
}
