import React from 'react';
import { ArrowUp, Sparkles, MapPin, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-display font-extrabold text-slate-950 text-xl shadow-md">
                A
              </div>
              <div>
                <span className="font-display font-bold text-white text-xl tracking-tight block">
                  ALOLO STUDIO
                </span>
                <span className="text-xs text-slate-400">MUSTAPHA ABDUL-TOFIK</span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm max-w-md leading-relaxed">
              Creative Digital Solutions from Tamale, Ghana. Specializing in high-impact flyer & graphic design, social media video advertisements, and custom business website development.
            </p>

            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 bg-slate-900 px-3 py-1.5 rounded-full border border-slate-800">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>Tamale, Ghana 🇬🇭</span>
              </div>

              <a
                href="https://wa.me/233533580326"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-slate-900 px-3 py-1.5 rounded-full border border-slate-800 hover:border-emerald-500/50 transition-colors"
              >
                <span>WhatsApp: 0533580326</span>
              </a>

              <a
                href="tel:+233203530939"
                className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 bg-slate-900 px-3 py-1.5 rounded-full border border-slate-800 hover:border-cyan-500/50 transition-colors"
              >
                <span>Call: 0203530939</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  About Mustapha
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  Three Core Services
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('portfolio')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  My Work & Portfolio
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('skills')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  Digital Skills Toolkit
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  Request Project / Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider">
              Services Offered
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                <span>Flyer & Graphic Design</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                <span>Social Media Content & Video Ads</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>Business Website Design</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="text-center sm:text-left">
            © 2026 MUSTAPHA ABDUL-TOFIK / ALOLO STUDIO. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/50 flex items-center gap-2 transition-all cursor-pointer"
            id="footer-back-to-top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
          </button>
        </div>

      </div>
    </footer>
  );
};
