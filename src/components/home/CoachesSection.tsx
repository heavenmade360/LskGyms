import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export function CoachesSection() {
  return (
    <section className="py-32 md:py-40 max-w-[1400px] mx-auto px-4 md:px-8 w-full overflow-hidden">
      <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Image */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative h-[350px] sm:h-[450px] md:h-[600px] w-full bg-zinc-100 rounded-[48px] overflow-hidden shadow-2xl"
        >
          <img 
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200&auto=format&fit=crop" 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" 
            alt="Gym Member" 
          />
          <div className="absolute inset-x-0 bottom-0 min-h-[30%] bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
           {/* Play button overlay */}
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <Link to="/gallery" className="w-16 h-16 bg-brand-orange/90 backdrop-blur rounded-full flex items-center justify-center text-white shadow-xl hover:scale-110 hover:bg-brand-orange transition-all cursor-pointer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                <path d="M8 5V19L19 12L8 5Z" />
              </svg>
            </Link>
          </div>
        </motion.div>

        {/* Text Details */}
        <div className="md:pl-12 lg:pl-16">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-4"
          >
            Are you looking for a mentor?
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-heading font-black uppercase tracking-tighter text-brand-dark mb-8"
          >
            Our Coaches
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-600 text-lg leading-relaxed mb-10 max-w-lg"
          >
            Our team of certified and experienced Zambian trainers is dedicated to helping you achieve your fitness goals. Whether you're looking to build muscle, lose weight, or improve overall health, our trainers will create a personalized plan to guide you every step of the way.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link 
              to="/about"
              className="inline-block bg-brand-orange hover:bg-orange-600 text-white px-10 py-4 rounded-full font-bold transition-all shadow-xl shadow-brand-orange/30 text-sm tracking-wide text-center"
            >
              Explore More
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
