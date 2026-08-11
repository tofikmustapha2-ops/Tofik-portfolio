import React from 'react';
import { Palette, Video, Globe, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { SERVICES_DATA } from '../data/portfolioData';
import { ServiceType } from '../types';

interface ServicesSectionProps {
  onSelectService: (serviceName: ServiceType) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Palette':
        return <Palette className="w-7 h-7 text-cyan-400" />;
      case 'Video':
        return <Video className="w-7 h-7 text-purple-400" />;
      case 'Globe':
        return <Globe className="w-7 h-7 text-emerald-400" />;
      default:
        return <Sparkles className="w-7 h-7 text-cyan-400" />;
    }
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-bold text-cyan-400 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" /> Core Offerings
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Three Key Services Built for Business Growth
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            High-value creative digital solutions designed specifically to help local Ghanaian enterprises, shops, and entrepreneurs stand out.
          </p>
        </div>

        {/* THREE SERVICES CARDS GRID ONLY */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, idx) => (
            <div
              key={service.id}
              className="glass-card glass-card-hover rounded-3xl p-8 flex flex-col justify-between relative group border border-slate-800 hover:border-slate-700"
            >
              {/* Service Number Tag */}
              <div className="absolute top-6 right-6 text-xs font-mono font-extrabold text-slate-600 group-hover:text-cyan-400 transition-colors">
                0{idx + 1}
              </div>

              <div className="space-y-6">
                {/* Icon Container */}
                <div className={`w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                  {getIcon(service.iconName)}
                </div>

                {/* Title & Short Description */}
                <div>
                  <h3 className="font-display text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Inclusions List */}
                <div className="space-y-2.5 pt-4 border-t border-slate-800/80">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    What's Included:
                  </p>
                  <ul className="space-y-2">
                    {service.inclusions.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Get Started Button */}
              <div className="pt-8 mt-6 border-t border-slate-800/60">
                <button
                  onClick={() => onSelectService(service.title)}
                  className="w-full py-3.5 px-5 rounded-2xl bg-slate-900 border border-slate-700/80 text-white font-bold text-xs tracking-wide flex items-center justify-center gap-2 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 hover:text-slate-950 hover:border-transparent transition-all cursor-pointer shadow-md"
                  id={`service-cta-${idx}`}
                >
                  <span>Request This Service</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
