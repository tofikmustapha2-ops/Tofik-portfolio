import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, PhoneCall } from 'lucide-react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Why Work With Me', id: 'why-us' },
    { name: 'Digital Skills', id: 'skills' },
    { name: 'Learning', id: 'learning' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Identity */}
          <button
            onClick={() => handleLinkClick('hero')}
            className="flex items-center gap-3 group text-left focus:outline-none"
            id="nav-logo-button"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-400 to-teal-500 flex items-center justify-center font-display font-extrabold text-slate-950 text-xl shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              A
            </div>
            <div>
              <div className="font-display font-bold text-white text-lg tracking-tight flex items-center gap-1.5">
                ALOLO STUDIO
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              </div>
              <p className="text-xs text-emerald-300/80 font-medium tracking-wide uppercase">
                Mustapha Abdul-Tofik
              </p>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-emerald-950/70 p-1.5 rounded-full border border-emerald-800/80 backdrop-blur-md">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className="px-4 py-2 rounded-full text-xs font-semibold text-slate-300 hover:text-emerald-300 hover:bg-emerald-900/60 transition-all cursor-pointer whitespace-nowrap"
                id={`nav-link-${link.id}`}
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Action CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => handleLinkClick('contact')}
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 text-slate-950 text-xs font-bold tracking-wide flex items-center gap-2 hover:shadow-lg hover:shadow-emerald-500/25 hover:scale-105 active:scale-95 transition-all cursor-pointer"
              id="desktop-cta-button"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Work With Me
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
            aria-label="Toggle Menu"
            id="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/98 border-b border-slate-800 px-4 pt-4 pb-6 mt-2 space-y-2 backdrop-blur-xl animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium text-slate-200 hover:bg-slate-900 hover:text-cyan-400 transition-colors flex items-center justify-between"
              id={`mobile-nav-link-${link.id}`}
            >
              <span>{link.name}</span>
              <span className="text-slate-600 text-xs">→</span>
            </button>
          ))}
          <div className="pt-2">
            <button
              onClick={() => handleLinkClick('contact')}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
              id="mobile-cta-button"
            >
              <PhoneCall className="w-4 h-4" />
              Work With Me
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
