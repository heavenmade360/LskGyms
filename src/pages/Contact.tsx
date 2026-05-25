import { MapPin, Phone, Mail, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import React, { useState } from 'react';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset after 3 seconds
      setTimeout(() => setIsSuccess(false), 3000);
    }, 1000);
  };

  return (
    <div className="flex flex-col bg-white">
      <div className="bg-brand-gray border-b border-zinc-100 py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 
            className="text-5xl sm:text-7xl font-heading font-black uppercase tracking-tighter text-brand-dark mb-6"
          >
            Get in <span className="text-brand-green">Touch</span>
          </h1>
          <p 
            className="text-xl text-zinc-600 max-w-2xl mx-auto"
          >
            Ready to start your transformation? Drop by our facility, call us, or send a message.
          </p>
        </div>
      </div>

      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Info and Details */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-heading font-black uppercase tracking-tighter text-brand-dark mb-6">Visit Our Facility</h2>
                <p className="text-zinc-600">Your first trial session is on us — no commitment required. Walk into either branch for a free facility tour.</p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-zinc-50 border border-zinc-200 rounded-xl flex items-center justify-center text-brand-green shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-brand-dark font-bold font-heading uppercase tracking-wider mb-2">Location</h3>
                    <p className="text-zinc-600 leading-relaxed text-sm">
                      Zambia's Fitness Gym<br/>
                      Plot 1234, Great East Road<br/>
                      Arcades Area, Lusaka, Zambia
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-zinc-50 border border-zinc-200 rounded-xl flex items-center justify-center text-brand-green shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-brand-dark font-bold font-heading uppercase tracking-wider mb-2">Phone</h3>
                    <p className="text-zinc-600 leading-relaxed text-sm">
                      +260 765 978 078
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-zinc-50 border border-zinc-200 rounded-xl flex items-center justify-center text-brand-green shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-brand-dark font-bold font-heading uppercase tracking-wider mb-2">Email</h3>
                    <p className="text-zinc-600 leading-relaxed text-sm">
                      info@zambiasfitness.co.zm
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-zinc-50 border border-zinc-200 rounded-xl flex items-center justify-center text-brand-green shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-brand-dark font-bold font-heading uppercase tracking-wider mb-2">Hours</h3>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between w-48 border-b border-zinc-100 pb-1">
                        <span className="text-zinc-500">Mon - Fri:</span>
                        <span className="text-zinc-800 font-medium">05:00 - 21:00</span>
                      </div>
                      <div className="flex justify-between w-48 border-b border-zinc-100 py-1">
                        <span className="text-zinc-500">Saturday:</span>
                        <span className="text-zinc-800 font-medium">06:00 - 18:00</span>
                      </div>
                      <div className="flex justify-between w-48 pt-1">
                        <span className="text-zinc-500">Sunday:</span>
                        <span className="text-zinc-800 font-medium">08:00 - 14:00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-brand-gray border border-zinc-200 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
                {isSuccess && (
                  <div 
                    className="absolute inset-0 bg-white/90 backdrop-blur-sm z-20 flex flex-col items-center justify-center text-center p-8"
                  >
                    <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
                    <h4 className="text-2xl font-bold font-heading text-brand-dark mb-2">Message Sent!</h4>
                    <p className="text-zinc-600">We'll get back to you as soon as possible.</p>
                  </div>
                )}

              <h3 className="text-2xl font-black font-heading uppercase tracking-wider text-brand-dark mb-8">Send a Message</h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">First Name</label>
                    <input 
                      type="text" 
                      required
                      className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 text-brand-dark focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Last Name</label>
                    <input 
                      type="text" 
                      required
                      className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 text-brand-dark focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Email Address</label>
                  <input 
                    type="email" 
                    required
                    className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 text-brand-dark focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">How can we help?</label>
                  <textarea 
                    rows={4}
                    required
                    className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 text-brand-dark focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-colors resize-none"
                    placeholder="I'm interested in personal training..."
                  />
                </div>

                <button 
                  disabled={isSubmitting}
                  type="submit"
                  className="w-full bg-brand-green hover:bg-brand-green-dark text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-sm transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  {!isSubmitting && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                </button>
              </form>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
