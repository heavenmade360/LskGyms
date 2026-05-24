import { Link } from 'react-router-dom';
import { Dumbbell, Instagram, Facebook, Twitter, MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-red-600 p-2 rounded-lg">
                <Dumbbell className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white uppercase italic">
                Zambia's Fitness
              </span>
            </Link>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Zambia's premier fitness destination. World-class Life Fitness equipment, expert Zambian coaches, sauna & steam rooms, and a community ready to push you further.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-red-600 hover:text-white transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-red-600 hover:text-white transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-red-600 hover:text-white transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-wider mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Programs', 'Memberships', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={`/${item === 'Home' ? '' : item.toLowerCase()}`} className="text-zinc-500 hover:text-red-500 transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-wider mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-red-500 shrink-0" />
                <span className="text-zinc-500 text-sm">Great East Road, Arcades<br/>Lusaka, Zambia</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-red-500 shrink-0" />
                <span className="text-zinc-500 text-sm">+260 97 123 4567</span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-red-500 shrink-0" />
                <span className="text-zinc-500 text-sm">info@zambiasfitness.co.zm</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-wider mb-6">Opening Hours</h3>
            <ul className="space-y-4">
              <li className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                <span className="text-zinc-400">Mon - Fri</span>
                <span className="text-white font-medium">05:00 - 21:00</span>
              </li>
              <li className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                <span className="text-zinc-400">Saturday</span>
                <span className="text-white font-medium">06:00 - 18:00</span>
              </li>
              <li className="flex justify-between items-center text-sm pb-2">
                <span className="text-zinc-400">Sunday</span>
                <span className="text-white font-medium">08:00 - 14:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 text-sm">
            © {new Date().getFullYear()} Zambia's Fitness. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm">
            <a href="#" className="text-zinc-600 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-zinc-600 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
