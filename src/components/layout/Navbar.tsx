import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const links = [
  { name: 'Home', path: '/' },
  { name: 'Membership', path: '/memberships' },
  { name: 'About', path: '/about' },
  { name: 'Gallery', path: '/gallery' },
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
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-brand-green">
                <path d="M16 0L32 16L16 32L0 16L16 0Z" fill="currentColor"/>
                <path d="M16 8L24 16L16 24L8 16L16 8Z" fill="white"/>
              </svg>
              <span className="text-2xl font-heading font-black tracking-tighter text-brand-dark uppercase">
                APEX ATHLETICS
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-brand-green ${
                  location.pathname === link.path ? 'text-brand-green' : 'text-zinc-500'
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
        {isOpen && (
          <div
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
                      ? 'bg-brand-green/10 text-brand-green'
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
          </div>
        )}
    </nav>
  );
}
