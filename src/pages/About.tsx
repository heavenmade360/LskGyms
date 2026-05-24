import { motion } from 'motion/react';
import { Target, Trophy, Clock, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export function About() {
  return (
    <div className="flex flex-col">
      <div className="bg-zinc-900 border-b border-white/5 py-24 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-red-600/5 blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl sm:text-7xl font-black uppercase tracking-tighter text-white mb-6"
          >
            About <span className="text-red-500">Us</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-zinc-400 max-w-2xl"
          >
            More than just a gym. We are Lusaka's ultimate fitness community built on hard work, expert guidance, and world-class facilities.
          </motion.p>
        </div>
      </div>

      <div className="py-24 bg-zinc-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-3xl font-black uppercase tracking-tighter text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-zinc-400 text-lg leading-relaxed">
                <p>
                  Established with a vision to revolutionize fitness in Zambia, Zambia's Fitness Gym has grown to become the most trusted name in health and wellness in Lusaka. For over 10 years, we have been helping individuals from all walks of life achieve their physical and mental goals.
                </p>
                <p>
                  We believe that fitness should be accessible, effective, and community-driven. That's why we've invested in massive, fully air-conditioned spaces across Lusaka, Kitwe, and Ndola, outfitted with the best Life Fitness machinery. 
                </p>
                <p>
                  Whether you are a seasoned athlete or stepping into a gym for the first time, our space is designed for you. With inclusive amenities ranging from professional saunas to a dedicated children's playroom, we remove every barrier between you and your progress.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop" alt="Gym" className="rounded-xl h-64 object-cover w-full" />
              <img src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop" alt="Gym Weights" className="rounded-xl h-64 object-cover w-full mt-8" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-zinc-900 border border-white/5 p-8 rounded-2xl">
              <div className="w-14 h-14 bg-red-600/10 rounded-xl flex items-center justify-center text-red-500 mb-6">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-3">Our Mission</h3>
              <p className="text-zinc-400">To provide Zambians with an unmatched fitness environment where ambition meets expert guidance, empowering every member across the nation to live stronger.</p>
            </div>
            <div className="bg-zinc-900 border border-white/5 p-8 rounded-2xl">
              <div className="w-14 h-14 bg-red-600/10 rounded-xl flex items-center justify-center text-red-500 mb-6">
                <Trophy className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-3">Elite Equipment</h3>
              <p className="text-zinc-400">We exclusively use Life Fitness equipment, globally recognized for its biomechanics, durability, and smooth performance.</p>
            </div>
            <div className="bg-zinc-900 border border-white/5 p-8 rounded-2xl">
              <div className="w-14 h-14 bg-red-600/10 rounded-xl flex items-center justify-center text-red-500 mb-6">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-3">Flexible access</h3>
              <p className="text-zinc-400">Open 7 days a week with extended weekday hours to ensure your schedule never stands in the way of your workout.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-zinc-900 py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tighter text-white mb-6">Ready to see it yourself?</h2>
          <p className="text-zinc-400 text-lg mb-8">We invite you to tour our facility. Come see the equipment, meet the team, and feel the atmosphere.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-all">
            <Phone className="w-5 h-5" />
            Contact Us Today
          </Link>
        </div>
      </div>
    </div>
  );
}
