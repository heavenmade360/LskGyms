import { ChevronDown } from "lucide-react";
import { Link } from 'react-router-dom';

export function PricingSection() {
  return (
    <section className="py-32 md:py-40 max-w-[1400px] mx-auto px-4 md:px-8 w-full">
      <div 
        className="bg-brand-green rounded-[48px] p-8 sm:p-12 md:p-20 relative overflow-hidden shadow-2xl shadow-brand-green/20"
      >
        {/* Abstract Background SVG or Shapes */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20 flex items-center justify-center">
          <div className="w-full h-[500px] border-b-[200px] border-l-[200px] border-b-white border-l-transparent rotate-45 transform scale-[2]"></div>
        </div>

        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center mb-20 gap-8">
          <div 
            className="bg-white rounded-full px-8 py-5 flex items-center gap-16 cursor-pointer shadow-xl w-full md:w-auto mt-4 md:mt-0 order-2 md:order-1 hover:scale-105 transition-transform"
          >
            <span className="font-semibold text-brand-dark tracking-wide">Personal Training</span>
            <div className="w-10 h-10 bg-brand-dark rounded-full flex items-center justify-center text-white">
              <ChevronDown className="w-5 h-5" />
            </div>
          </div>

          <div 
            className="text-right w-full md:w-auto order-1 md:order-2"
          >
            <h3 className="text-sm md:text-base font-bold uppercase tracking-widest text-white/80 mb-3">Pricing Plan</h3>
            <h2 className="text-5xl md:text-7xl font-heading font-black uppercase tracking-tighter text-white">Join Today</h2>
          </div>
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* One Day Pass */}
          <div 
            className="border-2 border-white/30 rounded-[40px] p-10 md:p-12 text-white flex flex-col hover:bg-white/10 transition-colors backdrop-blur-sm"
          >
             <div className="w-14 h-14 rounded-full border-2 border-white/50 flex items-center justify-center mb-8">
               <div className="w-10 h-10 rounded-full bg-white/20"></div>
             </div>
             <h3 className="text-3xl font-black font-heading tracking-tight uppercase mb-8 leading-none">One Day<br/>Pass</h3>
             <h4 className="text-3xl font-bold mb-6">ZMW 150 <span className="text-base font-normal tracking-wide text-white/80">/day</span></h4>
             <p className="text-white/80 text-sm md:text-base leading-relaxed mb-4">
               Whether you're visiting Lusaka on business or are just taking your personal fitness one day at a time, we'd like to invite you to experience all that APEX ATHLETICS has to offer. You are always Welcome!
             </p>
          </div>

          {/* Monthly Pass (Active/Featured) */}
          <div 
            className="bg-white rounded-[40px] p-10 md:p-12 text-brand-dark flex flex-col shadow-2xl scale-100 md:scale-110 z-20"
          >
             <div className="w-14 h-14 rounded-full border-2 border-brand-green flex items-center justify-center mb-8">
               <div className="w-10 h-10 rounded-full bg-brand-green shadow-inner"></div>
             </div>
             <h3 className="text-3xl font-black font-heading tracking-tight uppercase mb-8 leading-none">Monthly<br/>Pass</h3>
             <h4 className="text-3xl font-bold mb-6">ZMW 1,200 <span className="text-base font-normal text-zinc-500 tracking-wide">/month</span></h4>
             <p className="text-zinc-600 text-sm md:text-base leading-relaxed mb-4">
               Our monthly membership helps you to keep your fitness goals on track without a commitment of any kind, while still enjoying all of the amenities that APEX ATHLETICS has to offer.
             </p>
          </div>

          {/* Yearly Pass */}
          <div 
            className="border-2 border-white/30 rounded-[40px] p-10 md:p-12 text-white flex flex-col hover:bg-white/10 transition-colors backdrop-blur-sm"
          >
             <div className="w-14 h-14 rounded-full border-2 border-white/50 flex items-center justify-center mb-8">
               <div className="w-10 h-10 rounded-full bg-white/20"></div>
             </div>
             <h3 className="text-3xl font-black font-heading tracking-tight uppercase mb-8 leading-none">Yearly<br/>Pass</h3>
             <h4 className="text-3xl font-bold mb-6">ZMW 12,000 <span className="text-base font-normal tracking-wide text-white/80">/year</span></h4>
             <p className="text-white/80 text-sm md:text-base leading-relaxed mb-4">
               With a 1-year commitment, we offer a discounted membership. When you pre-purchase a complete year individual membership you get 2/m Free Extention.
             </p>
          </div>

        </div>

        <div className="relative z-10 mt-16 flex justify-end">
          <div>
            <Link 
              to="/memberships"
              className="inline-block bg-white hover:bg-zinc-50 text-brand-dark px-12 py-5 rounded-full font-bold transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 tracking-wide text-center"
            >
              Order Now
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
