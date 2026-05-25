import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: "Day Pass",
    price: "ZMW 150",
    period: "per day",
    description: "Perfect for visitors or those wanting to try out our facilities.",
    features: [
      "Access to all gym floors",
      "Free weights & machines",
      "Locker room access",
      "No commitment"
    ]
  },
  {
    name: "Monthly Core",
    price: "ZMW 1,200",
    period: "per month",
    popular: true,
    description: "Our standard membership for consistent, everyday training.",
    features: [
      "Unlimited 24/7 access",
      "Access to all gym floors",
      "Locker room access",
      "Free initial assessment",
      "1 Group class per week"
    ]
  },
  {
    name: "Annual Elite",
    price: "ZMW 12,000",
    period: "per year",
    description: "The ultimate package with full access to premium recovery.",
    features: [
      "Unlimited 24/7 access",
      "Unlimited Group Classes",
      "Sauna & Steam room access",
      "Monthly coaching check-ins",
      "Save ZMW 2,400 annually"
    ]
  }
];

export function Memberships() {
  return (
    <div className="flex flex-col bg-white">
      <div className="bg-brand-gray border-b border-zinc-100 py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 
            className="text-5xl sm:text-7xl font-heading font-black uppercase tracking-tighter text-brand-dark mb-6"
          >
            Membership <span className="text-brand-orange">Plans</span>
          </h1>
          <p 
            className="text-xl text-zinc-600 max-w-2xl mx-auto"
          >
            Flexible membership options for every goal and schedule. No hidden fees.
          </p>
        </div>
      </div>

      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <div 
                key={plan.name}
                className={`relative bg-white shadow-xl border rounded-3xl p-8 flex flex-col transition-transform hover:-translate-y-2 ${
                  plan.popular ? 'border-brand-orange shadow-[0_10px_40px_rgba(255,90,38,0.15)]' : 'border-zinc-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-orange text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                    Most Popular
                  </div>
                )}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold font-heading text-brand-dark uppercase tracking-wider mb-2">{plan.name}</h3>
                  <p className="text-zinc-500 text-sm h-10">{plan.description}</p>
                </div>
                
                <div className="mb-8 flex items-end gap-2">
                  <span className="text-5xl font-black font-heading tracking-tight text-brand-dark">{plan.price}</span>
                  <span className="text-zinc-400 mb-2">{plan.period}</span>
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map(feature => (
                    <li key={feature} className="flex gap-3 text-zinc-700">
                      <Check className="w-5 h-5 text-brand-orange shrink-0" />
                      <span className="text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  to="/contact"
                  className={`w-full py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-all text-center ${
                    plan.popular 
                      ? 'bg-brand-orange hover:bg-orange-600 text-white shadow-lg' 
                      : 'bg-zinc-100 hover:bg-zinc-200 text-brand-dark'
                  }`}
                >
                  Choose {plan.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
