import { motion } from 'motion/react';
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
    <div className="flex flex-col">
      <div className="bg-zinc-900 border-b border-white/5 py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl sm:text-7xl font-black uppercase tracking-tighter text-white mb-6"
          >
            Membership <span className="text-red-500">Plans</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-zinc-400 max-w-2xl mx-auto"
          >
            Flexible membership options for every goal and schedule. No hidden fees.
          </motion.p>
        </div>
      </div>

      <div className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                key={plan.name}
                className={`relative bg-zinc-900 border rounded-3xl p-8 flex flex-col ${
                  plan.popular ? 'border-red-500 shadow-[0_0_30px_rgba(220,38,38,0.15)]' : 'border-white/10'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                    Most Popular
                  </div>
                )}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white uppercase tracking-wider mb-2">{plan.name}</h3>
                  <p className="text-zinc-400 text-sm h-10">{plan.description}</p>
                </div>
                
                <div className="mb-8 flex items-end gap-2">
                  <span className="text-5xl font-black text-white">{plan.price}</span>
                  <span className="text-zinc-500 mb-2">{plan.period}</span>
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map(feature => (
                    <li key={feature} className="flex gap-3 text-zinc-300">
                      <Check className="w-5 h-5 text-red-500 shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  to="/contact"
                  className={`w-full py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-all text-center ${
                    plan.popular 
                      ? 'bg-red-600 hover:bg-red-700 text-white shadow-lg' 
                      : 'bg-zinc-800 hover:bg-zinc-700 text-white'
                  }`}
                >
                  Choose {plan.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
