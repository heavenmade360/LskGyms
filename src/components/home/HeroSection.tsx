import { ArrowDown, Play } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative w-full pt-16 md:pt-12 pb-16 px-4 md:px-12 max-w-[1400px] mx-auto min-h-[90vh] flex flex-col justify-center bg-[#F1F1F1] md:rounded-[40px] mt-24 overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden">
         <div className="w-[1200px] h-[1200px] border-[60px] border-white/60 rotate-45 transform scale-x-[1.5]"></div>
      </div>

      <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between h-full min-h-[500px] md:min-h-[600px] gap-8 md:gap-0 pt-8 md:pt-0">
        
        {/* NO PAIN (Left) */}
        <div className="w-full md:w-1/3 flex flex-col justify-center items-center md:items-start order-1 md:order-1 mt-0 relative z-20">
          <h1 className="text-6xl sm:text-7xl md:text-[100px] lg:text-[140px] xl:text-[160px] font-heading font-black leading-[0.8] text-brand-dark tracking-tighter text-center md:text-left drop-shadow-md">
            NO<br className="hidden md:block" /> PAIN
          </h1>
          <p className="mt-8 text-sm lg:text-base text-zinc-600 max-w-[280px] text-center md:text-left font-medium leading-relaxed">
            We believe that fitness is not just a destination; it's a journey. Our state-of-the-art facility in Lusaka is designed to inspire and empower you to reach your health and wellness goals.
          </p>
          <button className="mt-8 bg-brand-orange hover:bg-orange-600 text-white px-8 py-3.5 rounded-full font-medium transition-all shadow-lg shadow-brand-orange/20 text-sm">
            Explore More
          </button>
          
          <div className="mt-12 bg-white rounded-full p-2 pr-6 flex items-center gap-4 shadow-xl self-center md:self-start">
             <div className="flex -space-x-3">
               <img src="https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=100&auto=format&fit=crop" className="w-10 h-10 rounded-full border-2 border-white object-cover" alt="Coach" />
               <img src="https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=100&auto=format&fit=crop" className="w-10 h-10 rounded-full border-2 border-white object-cover" alt="Coach" />
             </div>
             <div>
               <p className="text-lg font-bold font-heading text-brand-dark leading-none">15</p>
               <p className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold leading-tight">Active<br/>coaches</p>
             </div>
          </div>
        </div>

        {/* Center Image */}
        <div className="w-full md:w-1/3 flex justify-center order-2 md:order-2 relative z-30 h-[300px] sm:h-[400px] md:h-auto">
          {/* Using object-contain and drop shadow to simulate a cut-out effect for any image */}
           <img src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop" 
                className="max-h-[350px] sm:max-h-[450px] md:max-h-[600px] lg:max-h-[800px] w-auto object-cover rounded-3xl md:rounded-none md:object-contain drop-shadow-2xl z-30 relative" 
                alt="Gym Training" />
        </div>

        {/* NO GAIN (Right) */}
        <div className="w-full md:w-1/3 flex flex-col justify-center items-center md:items-end order-3 mt-0 relative z-20">
          <h1 className="text-6xl sm:text-7xl md:text-[100px] lg:text-[140px] xl:text-[160px] font-heading font-black leading-[0.8] text-brand-dark tracking-tighter text-center md:text-right drop-shadow-md">
            NO<br className="hidden md:block"/> GAIN
          </h1>
          
          <div className="mt-8 md:mt-12 relative w-[90%] max-w-[280px] sm:w-64 lg:w-72 rounded-3xl overflow-hidden shadow-2xl group cursor-pointer border-4 border-white">
            <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=400&auto=format&fit=crop" className="w-full h-40 lg:h-48 object-cover group-hover:scale-105 transition-transform duration-700" alt="Video thumbnail" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-brand-dark group-hover:scale-110 transition-transform shadow-xl">
                <Play className="w-5 h-5 ml-1" fill="currentColor" />
              </div>
            </div>
          </div>

          <div className="mt-8 md:mt-0 md:absolute md:bottom-0 md:right-0 flex flex-col items-center gap-3">
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Scroll</span>
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:-translate-y-1 transition-transform cursor-pointer">
              <ArrowDown className="w-5 h-5 text-brand-dark" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
