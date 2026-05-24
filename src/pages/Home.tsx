import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronRight, Activity, Flame, Users } from 'lucide-react';

export function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
            alt="Gym interior with dark moody lighting" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 border border-red-500/20 text-red-500 mb-6">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-wider">Premium Fitness in Lusaka & The Copperbelt</span>
            </div>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-white mb-6 leading-[0.9]">
              Train Hard.<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">Live Strong.</span><br/>
              Start Today.
            </h1>
            <p className="text-lg sm:text-xl text-zinc-300 mb-10 max-w-xl font-light">
              Zambia's Fitness Gym is Lusaka's premier fitness destination. World-class equipment, expert coaches, and a community that pushes you further every day.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link 
                to="/memberships"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-all shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_35px_rgba(220,38,38,0.6)] flex items-center gap-2 group"
              >
                Join the Gym
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/about"
                className="bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-all border border-white/10 flex items-center gap-2"
              >
                View Facilities
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="border-y border-white/5 bg-zinc-950/50 backdrop-blur-sm relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-red-600/10 text-red-500">
                <Activity className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-white font-bold uppercase tracking-wide mb-1">1,200 SQM Space</h3>
                <p className="text-zinc-400 text-sm">Massive facility packed with Life Fitness equipment.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-red-600/10 text-red-500">
                <Flame className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-white font-bold uppercase tracking-wide mb-1">Sauna & Steam</h3>
                <p className="text-zinc-400 text-sm">Premium recovery facilities available for all members.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-red-600/10 text-red-500">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-white font-bold uppercase tracking-wide mb-1">Expert Coaches</h3>
                <p className="text-zinc-400 text-sm">6 certified trainers ready to build your personal plan.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-24 relative overflow-hidden bg-zinc-900">
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-zinc-950 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-red-600/20 to-transparent blur-2xl rounded-[3rem] z-0" />
              <img 
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop" 
                alt="Gym Equipment" 
                className="relative z-10 rounded-2xl shadow-2xl border border-white/10"
              />
              <div className="absolute -bottom-6 -right-6 bg-zinc-950 p-6 rounded-2xl border border-white/10 shadow-xl z-20">
                <p className="text-4xl font-black text-red-500 mb-1">10+</p>
                <p className="text-sm text-zinc-400 uppercase tracking-widest font-bold">Years Trusted</p>
              </div>
            </div>

            <div>
              <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter text-white mb-6">
                Lusaka's Most <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">Complete</span> Gym
              </h2>
              <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                Zambia's Fitness Gym operates across multiple premium facilities from Lusaka to Ndola — clean, spacious, and fully air-conditioned — equipped with the premium Life Fitness range, one of Zambia's most trusted fitness brands for over 10 years.
              </p>

              <ul className="space-y-4 mb-10">
                {[
                  "Life Fitness Equipment",
                  "Group Fitness Classes",
                  "Personal Training",
                  "Children's Play Room",
                ].map((item, i) => (
                  <motion.li 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    key={item} 
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-6 h-6 text-red-500" />
                    <span className="text-white font-medium text-lg">{item}</span>
                  </motion.li>
                ))}
              </ul>

              <Link 
                to="/about"
                className="inline-flex items-center gap-2 text-red-500 font-bold uppercase tracking-widest text-sm hover:text-red-400 transition-colors"
              >
                Learn more about us
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative bg-red-600">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-color-burn" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter text-white mb-6">
            Start Your Transformation
          </h2>
          <p className="text-red-100 text-xl font-medium mb-10 max-w-2xl mx-auto">
            Your first trial session is on us — no commitment required. 
            Walk into our Lusaka, Kitwe, or Ndola branches for a free facility tour today.
          </p>
          <Link 
            to="/memberships"
            className="bg-zinc-950 hover:bg-black text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-sm transition-all shadow-xl hover:-translate-y-1 inline-block"
          >
            Claim Your Free Trial
          </Link>
        </div>
      </section>
    </div>
  );
}
