import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const links = [
  { name: 'Home', path: '/' },
  { name: 'Membership', path: '/memberships' },
  { name: 'About', path: '/about' },
  { name: 'Blog', path: '/blog' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-zinc-100">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 md:h-24 items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2 group">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-brand-orange">
                <path d="M16 0L32 16L16 32L0 16L16 0Z" fill="currentColor"/>
                <path d="M16 8L24 16L16 24L8 16L16 8Z" fill="white"/>
              </svg>
              <span className="text-2xl font-heading font-black tracking-tighter text-brand-dark uppercase">
                ZAMBIA FIT
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-brand-orange ${
                  location.pathname === link.path ? 'text-brand-orange' : 'text-zinc-500'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/contact"
              className="bg-brand-dark hover:bg-black text-white px-7 py-3 rounded-full font-medium text-sm transition-all"
            >
              Contact Us
            </Link>
            <div className="w-12 h-12 rounded-full bg-brand-orange flex items-center justify-center text-white cursor-pointer hover:bg-orange-600 transition-colors">
              <User className="w-5 h-5" />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-900 transition-colors"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-zinc-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-3 rounded-md text-base font-medium ${
                    location.pathname === link.path
                      ? 'bg-brand-orange/10 text-brand-orange'
                      : 'text-zinc-600 hover:bg-zinc-50 hover:text-brand-dark'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 rounded-md text-base font-medium text-brand-dark hover:bg-zinc-50"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
