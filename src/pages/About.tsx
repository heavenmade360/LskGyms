import { Target, Trophy, Clock, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FAQSection } from '../components/about/FAQSection';

export function About() {
  return (
    <div className="flex flex-col">
      <div className="bg-brand-gray border-b border-zinc-100 py-32 md:py-40 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-brand-green/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center md:text-left">
          <h1 
            className="text-6xl sm:text-7xl md:text-8xl font-heading font-black uppercase tracking-tighter text-brand-dark mb-6 md:mb-8"
          >
            About <span className="text-brand-green">Us</span>
          </h1>
          <p 
            className="text-xl md:text-2xl text-zinc-600 max-w-3xl leading-relaxed mx-auto md:mx-0"
          >
            More than just a gym. We are Lusaka's ultimate fitness community built on hard work, expert guidance, and world-class facilities.
          </p>
        </div>
      </div>

      <div className="py-32 md:py-40 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32 md:mb-40">
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-black uppercase tracking-tighter text-brand-dark mb-8">Our Story</h2>
              <div className="space-y-6 text-zinc-600 text-lg leading-loose">
                <p>
                  Established with a vision to revolutionize fitness in Zambia, Apex Athletics has grown to become the most trusted name in health and wellness in Lusaka. For over 10 years, we have been helping individuals from all walks of life achieve their physical and mental goals.
                </p>
                <p>
                  We believe that fitness should be accessible, effective, and community-driven. That's why we've invested in massive, fully air-conditioned spaces across Lusaka, Kitwe, and Ndola, outfitted with the best Life Fitness machinery. 
                </p>
                <p>
                  Whether you are a seasoned athlete or stepping into a gym for the first time, our space is designed for you. With inclusive amenities ranging from professional saunas to a dedicated children's playroom, we remove every barrier between you and your progress.
                </p>
              </div>
            </div>
            <div 
               className="grid grid-cols-2 gap-6"
            >
              <img src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop" alt="Gym" className="rounded-3xl h-[300px] md:h-[400px] object-cover w-full shadow-2xl" />
              <img src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop" alt="Gym Weights" className="rounded-3xl h-[300px] md:h-[400px] object-cover w-full mt-12 shadow-2xl" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              { icon: Target, title: "Our Mission", desc: "To provide individuals with an unmatched fitness environment where ambition meets expert guidance, empowering every member across the nation to live stronger." },
              { icon: Trophy, title: "Elite Equipment", desc: "We exclusively use Life Fitness equipment, globally recognized for its biomechanics, durability, and smooth performance." },
              { icon: Clock, title: "Flexible access", desc: "Open 7 days a week with extended weekday hours to ensure your schedule never stands in the way of your workout." }
            ].map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={i}
                  className="bg-brand-gray border-[3px] border-white p-10 md:p-12 rounded-[40px] shadow-xl hover:-translate-y-2 transition-transform duration-300"
                >
                  <div className="w-16 h-16 bg-brand-green text-white rounded-2xl flex items-center justify-center shadow-lg shadow-brand-green/30 mb-8">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black font-heading text-brand-dark uppercase tracking-wide mb-4 leading-none">{feature.title}</h3>
                  <p className="text-zinc-600 leading-relaxed">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <FAQSection />

      <div className="bg-brand-dark py-32 md:py-40 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 
            className="text-4xl md:text-6xl font-heading font-black uppercase tracking-tighter text-white mb-6"
          >
            Ready to see it yourself?
          </h2>
          <p 
            className="text-zinc-300 text-xl leading-relaxed mb-12 max-w-2xl mx-auto"
          >
            We invite you to tour our facility. Come see the equipment, meet the team, and feel the atmosphere.
          </p>
          <div>
            <Link to="/contact" className="inline-flex items-center gap-3 bg-brand-green hover:bg-brand-green-dark text-white px-10 py-5 rounded-full font-bold transition-all shadow-xl hover:shadow-2xl hover:scale-105 tracking-wide group">
              <Phone className="w-5 h-5 group-hover:animate-bounce" />
              Contact Us Today
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
