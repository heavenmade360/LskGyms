import { ArrowDown, Play } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[100svh] flex flex-col justify-center overflow-hidden">
      {/* Background Image */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop" 
          alt="Gym Training" 
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-brand-dark/70 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </motion.div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8 w-full pt-32 pb-20 flex flex-col md:flex-row items-center justify-between h-full gap-12">
        
        {/* Left Content */}
        <div className="w-full md:w-3/5 flex flex-col justify-center items-center md:items-start text-center md:text-left mt-8 md:mt-0">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-6xl sm:text-7xl md:text-[90px] lg:text-[120px] font-heading font-black leading-[0.85] text-white tracking-tighter drop-shadow-2xl uppercase"
          >
            No Pain<br /> No Gain
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="mt-8 text-base md:text-lg lg:text-xl text-zinc-300 max-w-[500px] font-medium leading-relaxed drop-shadow-md"
          >
            We believe that fitness is not just a destination; it's a journey. Our state-of-the-art facility in Lusaka is designed to inspire and empower you to reach your health and wellness goals.
          </motion.p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6 mt-12 w-full md:w-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <Link 
                to="/memberships"
                className="inline-block w-full sm:w-auto bg-brand-orange hover:bg-orange-600 text-white px-10 py-5 rounded-full font-bold transition-all shadow-2xl shadow-brand-orange/40 text-base md:text-lg tracking-wide hover:-translate-y-1 text-center"
              >
                Start Journey
              </Link>
            </motion.div>

            {/* Video trigger button */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            >
              <Link 
                to="/gallery"
                className="flex items-center justify-center gap-4 cursor-pointer group"
              >
                 <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 group-hover:scale-110 group-hover:bg-white group-hover:text-brand-dark transition-all duration-300 shadow-xl">
                    <Play className="w-6 h-6 ml-1" fill="currentColor" />
                 </div>
                 <span className="font-bold text-white uppercase tracking-widest text-sm whitespace-nowrap">Watch Video</span>
              </Link>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="mt-16 md:mt-24 bg-white/10 backdrop-blur-md rounded-full p-2 pr-8 flex items-center gap-5 shadow-2xl self-center md:self-start border border-white/20"
          >
             <div className="flex -space-x-4">
               <img src="https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=100&auto=format&fit=crop" className="w-14 h-14 rounded-full border-[3px] border-zinc-900 object-cover shadow-sm" alt="Coach" />
               <img src="https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=100&auto=format&fit=crop" className="w-14 h-14 rounded-full border-[3px] border-zinc-900 object-cover shadow-sm" alt="Coach" />
             </div>
             <div>
               <p className="text-2xl font-bold font-heading text-white leading-none">15+</p>
               <p className="text-[11px] text-zinc-300 uppercase tracking-widest font-bold leading-tight mt-1">Active<br/>coaches</p>
             </div>
          </motion.div>
        </div>

        {/* Scroll indicator - absolute positioned */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="absolute bottom-12 right-4 md:right-12 flex flex-col items-center gap-4 z-20 hidden lg:flex"
        >
          <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-300 writing-vertical-rl mb-2" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
          <div 
            onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
            className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center shadow-xl hover:-translate-y-2 transition-transform cursor-pointer border border-white/20 text-white"
          >
            <ArrowDown className="w-6 h-6" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
