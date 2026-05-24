import { motion } from 'motion/react';
import { Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const galleryItems = [
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop',
    className: 'md:col-span-2 md:row-span-2',
    alt: 'Gym exterior and tracks'
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop',
    className: 'md:col-span-1 md:row-span-2',
    alt: 'Heavy lifting'
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop',
    className: 'md:col-span-1 md:row-span-1',
    alt: 'Personal training'
  },
  {
    type: 'video',
    src: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=800&auto=format&fit=crop',
    className: 'md:col-span-2 md:row-span-1',
    alt: 'Workout montage thumbnail'
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=800&auto=format&fit=crop',
    className: 'md:col-span-1 md:row-span-1',
    alt: 'Cardio section'
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop',
    className: 'md:col-span-1 md:row-span-1',
    alt: 'Coaches'
  }
];

export function Gallery() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-gray pt-24 md:pt-32 pb-24 relative">
      <div className="absolute right-0 top-0 w-1/2 h-full bg-brand-orange/5 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Header */}
        <div className="text-center md:text-left mb-16 md:mb-24">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-4"
          >
            Inside ZAMBIA FIT
          </motion.h3>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="text-5xl sm:text-7xl md:text-8xl font-heading font-black uppercase tracking-tighter text-brand-dark mb-6 md:mb-8"
          >
            Our <span className="text-brand-orange">Gallery</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl text-zinc-600 max-w-3xl leading-relaxed mx-auto md:mx-0"
          >
            Take a visual tour of our world-class facilities, energetic classes, and the community that makes us the premier fitness destination in Lusaka.
          </motion.p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[300px] gap-6 md:gap-8">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: 'easeOut' }}
              className={`relative rounded-[32px] md:rounded-[40px] overflow-hidden group border-[6px] border-white shadow-2xl ${item.className || 'md:col-span-1 md:row-span-1'}`}
            >
              <img 
                src={item.src} 
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
              
              {item.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-20 h-20 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/50 shadow-2xl group-hover:bg-white group-hover:text-brand-dark transition-all duration-500 group-hover:scale-110">
                    <Play className="w-8 h-8 ml-2" fill="currentColor" />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
        
        {/* Load More Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 flex justify-center"
        >
          <Link 
            to="/contact"
            className="inline-block bg-white hover:bg-zinc-50 text-brand-dark px-12 py-5 rounded-full font-bold transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 tracking-wide text-center"
          >
            Visit Us for More
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
