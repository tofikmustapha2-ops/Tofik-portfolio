import React from 'react';
import { WHY_WORK_WITH_ME } from '../data/portfolioData';
import { Sparkles, Target, Tag, Smartphone, Cpu, TrendingUp, MapPin, CheckCircle2 } from 'lucide-react';

export const WhyWorkWithMe: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-cyan-400" />;
      case 'Target':
        return <Target className="w-6 h-6 text-blue-400" />;
      case 'Tag':
        return <Tag className="w-6 h-6 text-emerald-400" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-purple-400" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-pink-400" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-amber-400" />;
      case 'MapPin':
        return <MapPin className="w-6 h-6 text-rose-400" />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="why-us" className="py-24 relative overflow-hidden">
      
      {/* Glow Effects */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-bold text-cyan-400 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" /> Client Value
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Why Work With Mustapha & Alolo Studio?
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Practical digital expertise paired with local understanding to give small businesses and entrepreneurs a strong competitive advantage.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_WORK_WITH_ME.map((reason, i) => (
            <div
              key={i}
              className="glass-card glass-card-hover p-7 rounded-3xl border border-slate-800 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center shadow-md">
                  {getIcon(reason.iconName)}
                </div>

                <h3 className="font-display text-xl font-bold text-white">
                  {reason.title}
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center gap-2 text-xs font-semibold text-cyan-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Alolo Studio Guarantee</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
