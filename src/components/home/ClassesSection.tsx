import { ArrowUpRight } from 'lucide-react';

const classes = [
  {
    title: "Personal Training",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=600&auto=format&fit=crop",
    className: "h-[250px] sm:h-[300px] md:h-[400px]",
    containerClass: "md:col-span-3 md:mt-12",
  },
  {
    title: "Outdoor Classes",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&auto=format&fit=crop",
    className: "h-[250px] sm:h-[300px] md:h-[350px]",
    containerClass: "md:col-span-3 md:mt-24",
  },
  {
    title: "Digital Coaching",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=600&auto=format&fit=crop",
    className: "h-[250px] sm:h-[300px] md:h-[300px]",
    containerClass: "md:col-span-3",
  },
  {
    title: "Group Training",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=600&auto=format&fit=crop",
    className: "h-[250px] sm:h-[300px] md:h-[350px]",
    containerClass: "md:col-span-3 md:-mt-12",
  }
];

export function ClassesSection() {
  return (
    <section className="py-24 max-w-[1400px] mx-auto px-4 md:px-8 w-full">
      <div className="mb-12">
        <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-2">Classes Designed</h3>
        <h2 className="text-5xl md:text-6xl font-heading font-black uppercase tracking-tighter text-brand-dark">For You</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        {classes.map((cls, i) => (
          <div key={cls.title} className={`group cursor-pointer ${cls.containerClass}`}>
            <div className={`w-full rounded-[30px] overflow-hidden ${cls.className}`}>
              <img 
                src={cls.image} 
                alt={cls.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="mt-4 flex items-center justify-between px-2">
              <h4 className="text-xl font-semibold text-brand-dark">{cls.title}</h4>
              <div className="w-10 h-10 rounded-full bg-brand-orange flex items-center justify-center text-white group-hover:bg-orange-600 transition-colors shadow-lg shadow-brand-orange/20">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
