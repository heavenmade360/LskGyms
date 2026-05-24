import { ChevronDown } from "lucide-react";

export function PricingSection() {
  return (
    <section className="py-24 max-w-[1400px] mx-auto px-4 md:px-8 w-full">
      <div className="bg-brand-orange rounded-[40px] p-8 md:p-16 relative overflow-hidden">
        {/* Abstract Background SVG or Shapes */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20 flex items-center justify-center">
          <div className="w-full h-[500px] border-b-[200px] border-l-[200px] border-b-white border-l-transparent rotate-45 transform scale-[2]"></div>
        </div>

        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
          <div className="bg-white rounded-full px-6 py-4 flex items-center gap-12 cursor-pointer shadow-lg w-full md:w-auto mt-4 md:mt-0 order-2 md:order-1">
            <span className="font-semibold text-brand-dark">Personal Training</span>
            <div className="w-8 h-8 bg-brand-dark rounded-full flex items-center justify-center text-white">
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>

          <div className="text-right w-full md:w-auto order-1 md:order-2">
            <h3 className="text-sm md:text-base font-bold uppercase tracking-widest text-white/80 mb-2">Pricing Plan</h3>
            <h2 className="text-5xl md:text-7xl font-heading font-black uppercase tracking-tighter text-white">Join Today</h2>
          </div>
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          
          {/* One Day Pass */}
          <div className="border border-white/40 rounded-[32px] p-8 md:p-10 text-white flex flex-col hover:bg-white/10 transition-colors">
             <div className="w-12 h-12 rounded-full border-2 border-white/50 flex items-center justify-center mb-6">
               <div className="w-8 h-8 rounded-full bg-white/20"></div>
             </div>
             <h3 className="text-2xl font-black font-heading tracking-tight uppercase mb-6">One Day<br/>Pass</h3>
             <h4 className="text-2xl font-bold mb-4">ZMW 150 <span className="text-base font-normal">/Per Day</span></h4>
             <p className="text-white/80 text-sm leading-relaxed mb-8">
               Whether you're visiting Lusaka on business or are just taking your personal fitness one day at a time, we'd like to invite you to experience all that ZAMBIA FIT has to offer. You are always Welcome!
             </p>
          </div>

          {/* Monthly Pass (Active/Featured) */}
          <div className="bg-white rounded-[32px] p-8 md:p-10 text-brand-dark flex flex-col shadow-2xl scale-100 md:scale-105 z-20">
             <div className="w-12 h-12 rounded-full border-2 border-brand-orange flex items-center justify-center mb-6">
               <div className="w-8 h-8 rounded-full bg-brand-orange"></div>
             </div>
             <h3 className="text-2xl font-black font-heading tracking-tight uppercase mb-6">Monthly<br/>Pass</h3>
             <h4 className="text-2xl font-bold mb-4">ZMW 1,200 <span className="text-base font-normal">/Per month</span></h4>
             <p className="text-zinc-600 text-sm leading-relaxed mb-8">
               Our monthly membership helps you to keep your fitness goals on track without a commitment of any kind, while still enjoying all of the amenities that ZAMBIA FIT has to offer.
             </p>
          </div>

          {/* Yearly Pass */}
          <div className="border border-white/40 rounded-[32px] p-8 md:p-10 text-white flex flex-col hover:bg-white/10 transition-colors">
             <div className="w-12 h-12 rounded-full border-2 border-white/50 flex items-center justify-center mb-6">
               <div className="w-8 h-8 rounded-full bg-white/20"></div>
             </div>
             <h3 className="text-2xl font-black font-heading tracking-tight uppercase mb-6">Yearly<br/>Pass</h3>
             <h4 className="text-2xl font-bold mb-4">ZMW 12,000 <span className="text-base font-normal">/Per year</span></h4>
             <p className="text-white/80 text-sm leading-relaxed mb-8">
               With a 1-year commitment, we offer a discounted membership. When you pre-purchase a complete year individual membership you get 2/m Free Extention.
             </p>
          </div>

        </div>

        <div className="relative z-10 mt-12 flex justify-end">
          <button className="bg-white hover:bg-zinc-100 text-brand-dark px-10 py-4 rounded-full font-bold text-sm transition-all shadow-lg">
            Order Now
          </button>
        </div>

      </div>
    </section>
  );
}
