import React from 'react';
import { ArrowRight, Eye, MapPin, Sparkles, CheckCircle2, Shield } from 'lucide-react';
import { profileImg } from '../data/portfolioData';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Emerald & Cyan Glow Backdrops */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-emerald-500/20 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-teal-500/15 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Location & Brand Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-800/80 text-xs font-semibold text-emerald-200 backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>Based in Tamale, Ghana 🇬🇭</span>
              <span className="text-emerald-700">|</span>
              <span className="text-emerald-400 font-bold">ALOLO STUDIO</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08]">
                ALOLO <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-emerald-300 to-cyan-300">
                  STUDIO
                </span>
              </h1>
              <p className="text-2xl sm:text-3xl font-bold text-amber-300/90 font-display tracking-tight">
                Mustapha Abdul-Tofik
              </p>
              <div className="inline-block px-4 py-1.5 rounded-xl bg-emerald-900/60 border border-emerald-500/40 text-emerald-200 font-bold text-sm sm:text-base tracking-wide">
                Digital Creator & Creative Technology Specialist
              </div>
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-xl text-slate-200 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              I help businesses and brands stand out with professional graphic designs, engaging video commercials, and high-converting modern websites in Tamale, Ghana.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
              <button
                onClick={() => onNavigate('portfolio')}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-amber-400 via-emerald-400 to-teal-400 text-slate-950 font-extrabold text-base tracking-wide flex items-center justify-center gap-2 hover:shadow-2xl hover:shadow-emerald-400/40 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                id="hero-btn-view-work"
              >
                <Eye className="w-5 h-5" />
                <span>Explore My Portfolio</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-900/90 border-2 border-emerald-400/80 hover:border-amber-400 text-emerald-100 hover:text-white font-extrabold text-base tracking-wide flex items-center justify-center gap-2 hover:bg-emerald-950 transition-all cursor-pointer shadow-lg"
                id="hero-btn-work-with-me"
              >
                <Sparkles className="w-5 h-5 text-amber-300" />
                <span>Get In Touch</span>
              </button>
            </div>

            {/* Key Trust Highlights */}
            <div className="pt-6 border-t border-emerald-900/60 grid grid-cols-3 gap-4 text-left max-w-lg mx-auto lg:mx-0">
              <div className="space-y-1">
                <div className="text-2xl font-extrabold text-white font-display">3 Core</div>
                <div className="text-xs text-emerald-300/70 font-medium">Digital Services</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-extrabold text-emerald-400 font-display">100%</div>
                <div className="text-xs text-emerald-300/70 font-medium">Mobile Friendly</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-extrabold text-teal-300 font-display">Tamale</div>
                <div className="text-xs text-emerald-300/70 font-medium">Northern Ghana</div>
              </div>
            </div>

          </div>

          {/* Right Image/Portrait Card */}
          <div className="lg:col-span-5 relative">
            
            {/* Prominent "ALOLO STUDIO" Watermark Text directly behind the picture container */}
            <div className="absolute -top-16 sm:-top-24 left-1/2 -translate-x-1/2 w-[130%] text-center pointer-events-none select-none z-0">
              <span className="font-display text-6xl sm:text-7xl lg:text-8xl font-black tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-b from-amber-400/45 via-emerald-400/25 to-transparent drop-shadow-lg">
                ALOLO STUDIO
              </span>
            </div>

            <div className="relative mx-auto max-w-md lg:max-w-none z-10">
              
              {/* Decorative Gold & Emerald Frame Glow */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-amber-400 via-emerald-400 to-cyan-400 opacity-60 blur-xl animate-pulse"></div>
              
              <div className="relative rounded-3xl bg-slate-950/95 border-2 border-emerald-500/80 p-3.5 shadow-2xl overflow-hidden backdrop-blur-md">
                
                {/* Watermark directly inside picture frame background behind image */}
                <div className="absolute inset-0 flex flex-col items-center justify-center font-display font-black text-5xl sm:text-6xl tracking-widest text-amber-400/30 uppercase pointer-events-none z-0 select-none leading-none">
                  <span>ALOLO</span>
                  <span className="text-emerald-400/30">STUDIO</span>
                </div>

                <div className="relative rounded-2xl overflow-hidden aspect-square bg-slate-900 z-10 border-2 border-amber-400/60 shadow-inner">
                  <img
                    src={profileImg}
                    alt="Alolo Studio Creator - Mustapha Abdul-Tofik"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 relative z-10"
                    loading="eager"
                  />
                  {/* Subtle gradient at bottom only to contrast floating badge */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent pointer-events-none z-20"></div>
                  
                  {/* Floating Badge */}
                  <div className="absolute bottom-4 left-4 right-4 bg-slate-950/95 backdrop-blur-md p-3.5 rounded-2xl border border-amber-400/60 flex items-center justify-between z-30 shadow-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center font-bold">
                        <Shield className="w-5 h-5 text-amber-400" />
                      </div>
                      <div>
                        <h4 className="text-sm font-black text-white font-display tracking-wide">ALOLO STUDIO</h4>
                        <p className="text-[11px] text-emerald-300 font-bold">Verified Creative Provider</p>
                      </div>
                    </div>
                    <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                  </div>
                </div>
              </div>

              {/* Decorative Accent Badges */}
              <div className="absolute -bottom-6 -right-6 bg-slate-950 border-2 border-emerald-400 p-3.5 rounded-2xl shadow-2xl backdrop-blur-md hidden sm:flex items-center gap-2 z-30">
                <span className="w-3.5 h-3.5 rounded-full bg-amber-400 animate-pulse"></span>
                <span className="text-xs font-black text-white tracking-wider uppercase font-display">ALOLO STUDIO GHANA 🇬🇭</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
