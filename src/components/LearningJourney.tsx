import React from 'react';
import { LEARNING_JOURNEY } from '../data/portfolioData';
import { GraduationCap, Award, CheckCircle2, Sparkles } from 'lucide-react';

export const LearningJourney: React.FC = () => {
  return (
    <section id="learning" className="py-20 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-bold text-cyan-400 uppercase tracking-widest">
            <GraduationCap className="w-3.5 h-3.5" /> Growth & Education
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            My Learning Journey
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Building practical digital expertise through dedicated ICT training, self-directed research, AI tool experimentation, and real-world project application.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="max-w-4xl mx-auto space-y-8">
          {LEARNING_JOURNEY.map((item, index) => (
            <div
              key={index}
              className="glass-card glass-card-hover p-6 sm:p-8 rounded-3xl border border-slate-800 relative overflow-hidden"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                
                <div className="space-y-3 max-w-2xl">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-extrabold">
                      {item.year}
                    </span>
                    <h3 className="font-display text-xl font-bold text-white">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {item.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs font-medium flex items-center gap-1.5"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{h}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="shrink-0 p-3 rounded-2xl bg-slate-900 border border-slate-800 text-cyan-400 self-start">
                  <Award className="w-6 h-6" />
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
