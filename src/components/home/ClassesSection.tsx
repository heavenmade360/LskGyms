import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const classes = [
  {
    title: "Personal Training",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=600&auto=format&fit=crop",
    className: "h-[300px] sm:h-[350px] md:h-[450px]",
    containerClass: "md:col-span-3 md:mt-16",
  },
  {
    title: "Outdoor Classes",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&auto=format&fit=crop",
    className: "h-[300px] sm:h-[350px] md:h-[400px]",
    containerClass: "md:col-span-3 md:mt-32",
  },
  {
    title: "Digital Coaching",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=600&auto=format&fit=crop",
    className: "h-[300px] sm:h-[350px] md:h-[350px]",
    containerClass: "md:col-span-3",
  },
  {
    title: "Group Training",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=600&auto=format&fit=crop",
    className: "h-[300px] sm:h-[350px] md:h-[400px]",
    containerClass: "md:col-span-3 md:-mt-16",
  }
];

export function ClassesSection() {
  return (
    <section className="py-32 md:py-40 max-w-[1400px] mx-auto px-4 md:px-8 w-full">
      <div className="mb-16 md:mb-24">
        <h3 
          className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-4"
        >
          Classes Designed
        </h3>
        <h2 
          className="text-5xl md:text-7xl font-heading font-black uppercase tracking-tighter text-brand-dark"
        >
          For You
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 items-start">
        {classes.map((cls, i) => (
          <div 
            key={cls.title} 
            className={`block group cursor-pointer ${cls.containerClass}`}
          >
            <Link to="/programs" className="block w-full h-full">
              <div className={`w-full rounded-[40px] overflow-hidden ${cls.className} shadow-xl shadow-zinc-200/50 relative border-4 border-white`}>
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img 
                src={cls.image} 
                alt={cls.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out relative z-0"
              />
            </div>
            <div className="mt-8 flex items-center justify-between px-2">
              <h4 className="text-xl md:text-2xl font-bold font-heading text-brand-dark tracking-tight">{cls.title}</h4>
              <div className="w-12 h-12 rounded-full bg-brand-green flex items-center justify-center text-white group-hover:bg-brand-green-dark group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg shadow-brand-green/30">
                <ArrowUpRight className="w-6 h-6" />
              </div>
            </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
