import { motion } from 'motion/react';
import { Dumbbell, HeartPulse, PersonStanding, Flame, Users, Activity } from 'lucide-react';

const programs = [
  {
    title: "Weight Training",
    description: "Access Lusaka's most comprehensive free weight and resistance machine area. Perfect for body building, powerlifting, or general strength conditioning.",
    icon: Dumbbell,
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Cardio Fitness",
    description: "An expansive floor of Life Fitness treadmills, ellipticals, stair climbers, and stationary bikes. Build endurance in a climate-controlled environment.",
    icon: HeartPulse,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Personal Training",
    description: "Our 6 certified coaches will build a personalized roadmap for your goals. From form correction to dietary advice, get undivided attention.",
    icon: PersonStanding,
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Group Classes",
    description: "High-energy classes spanning HIIT, Zumba, Aerobics, and Yoga. Train with the community and stay accountable in an immersive environment.",
    icon: Users,
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Recovery: Sauna & Steam",
    description: "Accelerate your recovery and relax your muscles post-workout in our premium sauna and steam rooms, included in premium memberships.",
    icon: Flame,
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Corporate Wellness",
    description: "Tailored programs for corporate teams. Improve employee health, morale, and productivity with bulk membership access and private sessions.",
    icon: Activity,
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=2070&auto=format&fit=crop"
  }
];

export function Programs() {
  return (
    <div className="flex flex-col">
      <div className="bg-zinc-900 border-b border-white/5 py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl sm:text-7xl font-black uppercase tracking-tighter text-white mb-6"
          >
            Our <span className="text-red-500">Programs</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-zinc-400 max-w-2xl mx-auto"
          >
            Everything you need to transform. Expertly designed spaces and sessions tailored to every fitness level.
          </motion.p>
        </div>
      </div>

      <div className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, i) => {
              const Icon = program.icon;
              return (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  key={program.title}
                  className="bg-zinc-900 border border-white/5 rounded-2xl overflow-hidden group hover:border-red-500/30 transition-colors"
                >
                  <div className="h-48 relative overflow-hidden">
                    <img 
                      src={program.image} 
                      alt={program.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
                  </div>
                  <div className="p-8 relative">
                    <div className="absolute -top-10 right-8 w-14 h-14 bg-zinc-950 border border-white/10 rounded-xl flex items-center justify-center text-red-500 shadow-xl group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-white uppercase tracking-wider mb-3">{program.title}</h3>
                    <p className="text-zinc-400 leading-relaxed text-sm">
                      {program.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
