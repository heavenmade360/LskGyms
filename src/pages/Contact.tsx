import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';

export function Contact() {
  return (
    <div className="flex flex-col">
      <div className="bg-zinc-900 border-b border-white/5 py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl sm:text-7xl font-black uppercase tracking-tighter text-white mb-6"
          >
            Get in <span className="text-red-500">Touch</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-zinc-400 max-w-2xl mx-auto"
          >
            Ready to start your transformation? Drop by our facility, call us, or send a message.
          </motion.p>
        </div>
      </div>

      <div className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Info and Details */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-black uppercase tracking-tighter text-white mb-6">Visit Our Facility</h2>
                <p className="text-zinc-400">Your first trial session is on us — no commitment required. Walk into either branch for a free facility tour.</p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-zinc-900 border border-white/10 rounded-xl flex items-center justify-center text-red-500 shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold uppercase tracking-wider mb-2">Location</h3>
                    <p className="text-zinc-400 leading-relaxed text-sm">
                      Zambia's Fitness Gym<br/>
                      Plot 1234, Great East Road<br/>
                      Arcades Area, Lusaka, Zambia
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-zinc-900 border border-white/10 rounded-xl flex items-center justify-center text-red-500 shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold uppercase tracking-wider mb-2">Phone</h3>
                    <p className="text-zinc-400 leading-relaxed text-sm">
                      +260 97 123 4567 (MTN)<br/>
                      +260 96 765 4321 (Airtel/WhatsApp)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-zinc-900 border border-white/10 rounded-xl flex items-center justify-center text-red-500 shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold uppercase tracking-wider mb-2">Email</h3>
                    <p className="text-zinc-400 leading-relaxed text-sm">
                      info@zambiasfitness.co.zm
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-zinc-900 border border-white/10 rounded-xl flex items-center justify-center text-red-500 shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold uppercase tracking-wider mb-2">Hours</h3>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between w-48 border-b border-white/5 pb-1">
                        <span className="text-zinc-400">Mon - Fri:</span>
                        <span className="text-white">05:00 - 21:00</span>
                      </div>
                      <div className="flex justify-between w-48 border-b border-white/5 py-1">
                        <span className="text-zinc-400">Saturday:</span>
                        <span className="text-white">06:00 - 18:00</span>
                      </div>
                      <div className="flex justify-between w-48 pt-1">
                        <span className="text-zinc-400">Sunday:</span>
                        <span className="text-white">08:00 - 14:00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-zinc-900 border border-white/10 rounded-3xl p-8 lg:p-12">
              <h3 className="text-2xl font-black uppercase tracking-wider text-white mb-8">Send a Message</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">First Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">How can we help?</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors resize-none"
                    placeholder="I'm interested in personal training..."
                  />
                </div>

                <button 
                  className="w-full bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-sm transition-all flex items-center justify-center gap-2 group"
                >
                  Send Message
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
