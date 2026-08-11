import React from 'react';
import { SKILLS_LIST } from '../data/portfolioData';
import { 
  Palette, FileImage, Image as ImageIcon, Layout, 
  Video, Bot, Terminal, PenTool, 
  Globe, Code, ShieldCheck, Monitor, 
  Mail, Presentation, Table, Keyboard, Sparkles 
} from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'Palette': return <Palette className="w-4 h-4 text-cyan-400" />;
      case 'FileImage': return <FileImage className="w-4 h-4 text-cyan-400" />;
      case 'Image': return <ImageIcon className="w-4 h-4 text-cyan-400" />;
      case 'Layout': return <Layout className="w-4 h-4 text-cyan-400" />;
      case 'Video': return <Video className="w-4 h-4 text-purple-400" />;
      case 'Bot': return <Bot className="w-4 h-4 text-purple-400" />;
      case 'Terminal': return <Terminal className="w-4 h-4 text-purple-400" />;
      case 'PenTool': return <PenTool className="w-4 h-4 text-purple-400" />;
      case 'Globe': return <Globe className="w-4 h-4 text-emerald-400" />;
      case 'Code': return <Code className="w-4 h-4 text-emerald-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-4 h-4 text-emerald-400" />;
      case 'Monitor': return <Monitor className="w-4 h-4 text-emerald-400" />;
      case 'Mail': return <Mail className="w-4 h-4 text-amber-400" />;
      case 'Presentation': return <Presentation className="w-4 h-4 text-amber-400" />;
      case 'Table': return <Table className="w-4 h-4 text-amber-400" />;
      case 'Keyboard': return <Keyboard className="w-4 h-4 text-amber-400" />;
      default: return <Sparkles className="w-4 h-4 text-cyan-400" />;
    }
  };

  const categories = [
    { name: 'Design & Visuals', color: 'from-cyan-500/20 to-blue-500/20 border-cyan-500/30' },
    { name: 'Video & AI', color: 'from-purple-500/20 to-pink-500/20 border-purple-500/30' },
    { name: 'Web & Tech', color: 'from-emerald-500/20 to-teal-500/20 border-emerald-500/30' },
    { name: 'Productivity & Office', color: 'from-amber-500/20 to-orange-500/20 border-amber-500/30' },
  ];

  return (
    <section id="skills" className="py-20 relative bg-slate-900/50 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-bold text-cyan-400 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" /> Technical Capabilities
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            My Digital Skills & Toolkit
          </h2>
          <p className="text-slate-400 text-base">
            Comprehensive ICT, AI, creative software, and office productivity skills developed through structured student learning and practical service delivery.
          </p>
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat) => {
            const categorySkills = SKILLS_LIST.filter((s) => s.category === cat.name);

            return (
              <div
                key={cat.name}
                className="glass-card p-6 rounded-3xl border border-slate-800 space-y-4"
              >
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <h3 className="font-display text-lg font-bold text-white flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
                    {cat.name}
                  </h3>
                  <span className="text-xs text-slate-500 font-medium">
                    {categorySkills.length} Skills
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {categorySkills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-slate-700 transition-colors"
                    >
                      <div className="p-2 rounded-lg bg-slate-900 shrink-0">
                        {getSkillIcon(skill.iconName)}
                      </div>
                      <span className="text-xs font-semibold text-slate-200">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
