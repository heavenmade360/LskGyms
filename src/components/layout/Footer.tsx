import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1A1A1A] pt-16 pb-8 rounded-t-[40px] mt-16 md:mt-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-brand-orange">
                <path d="M16 0L32 16L16 32L0 16L16 0Z" fill="currentColor"/>
                <path d="M16 8L24 16L16 24L8 16L16 8Z" fill="black"/>
              </svg>
              <span className="text-2xl font-heading font-black tracking-tighter text-white uppercase">
                ZAMBIA FIT
              </span>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Plot 1234, Great East Road<br/>
              Arcades Area, Lusaka, Zambia<br/>
              info@zambiasfitness.co.zm
            </p>
          </div>

          {/* Menu */}
          <div>
            <h3 className="text-white font-semibold mb-6">Menu</h3>
            <ul className="space-y-3">
              {['Home', 'Membership', 'About', 'Gallery'].map((item) => (
                <li key={item}>
                  <Link to={`/${item === 'Home' ? '' : item === 'Membership' ? 'memberships' : item.toLowerCase()}`} className="text-zinc-400 hover:text-brand-orange transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/contact" className="text-zinc-400 hover:text-brand-orange transition-colors text-sm">Contact Us</Link></li>
              <li><Link to="/terms" className="text-zinc-400 hover:text-brand-orange transition-colors text-sm">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-zinc-400 hover:text-brand-orange transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link to="/about#faq" className="text-zinc-400 hover:text-brand-orange transition-colors text-sm">FAQ</Link></li>
            </ul>
          </div>

          {/* Operational Hours */}
          <div>
            <h3 className="text-white font-semibold mb-6">Operational</h3>
            <ul className="space-y-3 mb-6 block">
              <li className="text-zinc-400 text-sm">Every day: 5:00 – 21:00</li>
              <li className="text-zinc-400 text-sm">Sat – Sun: 6:00 – 18:00</li>
            </ul>
            <h3 className="text-white font-semibold mb-3">Questions?</h3>
            <p className="text-zinc-400 text-sm">+260 765 978 078</p>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
          </div>
          
          <p className="text-zinc-500 text-xs">
            Copyright © ZAMBIA FIT. All Rights Reserved.
          </p>

          <button onClick={scrollToTop} className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand-dark hover:bg-brand-orange hover:text-white transition-colors">
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
