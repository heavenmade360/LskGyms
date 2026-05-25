import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How do memberships work?',
    answer: 'We offer flexible membership options including Daily Passes, Monthly memberships, and Yearly commitments. All memberships grant full access to our gym floor, cardio equipment, and locker rooms.'
  },
  {
    question: 'What are the facility rules?',
    answer: 'To ensure a safe and comfortable environment for everyone, we ask members to wipe down equipment after use, re-rack their weights, wear appropriate workout attire (closed-toe shoes required), and be respectful of others space and privacy.'
  },
  {
    question: 'Is there parking available?',
    answer: 'Yes, we offer secure, complimentary on-site parking for all our members and guests at all our locations in Lusaka, Kitwe, and Ndola.'
  },
  {
    question: 'Can I bring a guest?',
    answer: 'Yes, members can bring a guest. The guest will need to purchase a Day Pass at the front desk before entering the workout area.'
  },
  {
    question: 'Do you offer personal training?',
    answer: 'Absolutely. We have a team of certified personal trainers available. You can book individual sessions or packages directly at the reception.'
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-32 md:py-40 bg-zinc-50 border-t border-zinc-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 md:mb-24">
          <h2 
            className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-4"
          >
            Got Questions?
          </h2>
          <h3 
            className="text-4xl sm:text-5xl md:text-6xl font-heading font-black uppercase tracking-tighter text-brand-dark"
          >
            Frequently Asked Questions
          </h3>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-zinc-200 rounded-[2rem] overflow-hidden bg-white transition-colors hover:border-brand-dark/20 shadow-sm hover:shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-8 text-left focus:outline-none"
              >
                <span className="text-xl font-bold font-heading text-brand-dark pr-8">{faq.question}</span>
                <div 
                  className={`flex-shrink-0 w-12 h-12 rounded-full border-[3px] border-zinc-100 flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'rotate-180 bg-brand-orange border-brand-orange text-white' : 'text-zinc-400 bg-white'}`}
                >
                  <ChevronDown className="w-6 h-6" />
                </div>
              </button>
                {openIndex === index && (
                  <div>
                    <div className="p-8 pt-0 text-zinc-600 text-lg leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
