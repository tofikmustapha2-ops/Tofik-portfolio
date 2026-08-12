import React from 'react';
import { UserCheck, BookOpen, Cpu, Sparkles, MapPin, Award } from 'lucide-react';
import { profileImg } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 relative bg-slate-900/50 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Decorative Feature Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-8 rounded-3xl border border-emerald-500/30 relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl"></div>
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-amber-300 text-xs font-extrabold mb-4">
                <UserCheck className="w-4 h-4 text-amber-400" />
                <span>Honest & Dedicated Service</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white font-display leading-snug">
                Building practical digital skills to solve real business challenges.
              </h3>

              <p className="text-slate-200 text-sm sm:text-base leading-relaxed mt-4">
                "I believe every business in Tamale deserves clear, professional visual marketing and a modern mobile presence that builds trust with clients."
              </p>

              <div className="mt-6 pt-6 border-t border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={profileImg}
                    alt="Mustapha Abdul-Tofik"
                    className="w-12 h-12 rounded-full object-cover border-2 border-amber-400 shadow-md"
                    loading="eager"
                  />
                  <div>
                    <h4 className="text-white font-black text-sm sm:text-base">Mustapha Abdul-Tofik</h4>
                    <p className="text-xs text-emerald-300 font-bold">Founder, Alolo Studio</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 border border-emerald-500/30 rounded-xl text-xs font-extrabold text-emerald-300 shadow">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" /> Tamale, GH
                </div>
              </div>
            </div>

            {/* Pillar Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800/80">
                <BookOpen className="w-6 h-6 text-cyan-400 mb-2" />
                <h4 className="text-sm font-bold text-white">Continuous Learner</h4>
                <p className="text-xs text-slate-400 mt-1">Mastering new AI, ICT & design tools constantly.</p>
              </div>

              <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800/80">
                <Cpu className="w-6 h-6 text-purple-400 mb-2" />
                <h4 className="text-sm font-bold text-white">AI-Driven Speed</h4>
                <p className="text-xs text-slate-400 mt-1">Utilizing modern AI tools for faster delivery.</p>
              </div>
            </div>
          </div>

          {/* Right Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4" /> About Mustapha Abdul-Tofik
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                A Driven Digital Skills Student & Creative Technology Specialist
              </h2>
            </div>

            <p className="text-slate-300 text-base leading-relaxed">
              I am a dedicated digital skills student based in <strong>Tamale, Ghana</strong>, passionate about creative technology and digital problem-solving. Through structured ICT and digital skills training, I have developed strong practical capabilities in graphic design, flyer creation, office productivity suites (PowerPoint, Excel, Google Workspace), video content creation, web technologies, and AI prompt engineering.
            </p>

            <p className="text-slate-300 text-base leading-relaxed">
              Rather than making exaggerated claims, I take pride in being a diligent, honest creator who continuously learns and applies the latest tools. Under my brand <strong>Alolo Studio</strong>, I leverage these skills to help local small businesses, shops, organizations, and entrepreneurs present their products and services with confidence.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Award className="w-3.5 h-3.5" />
                </div>
                <p className="text-sm text-slate-300">
                  <strong className="text-white">Practical & Action-Oriented:</strong> Focused on deliverables that generate real customer interest for your business.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Award className="w-3.5 h-3.5" />
                </div>
                <p className="text-sm text-slate-300">
                  <strong className="text-white">Focused on 3 Core Services:</strong> Dedicated expertise in Graphic Flyers, Social Media Video Ads, and Business Websites.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
