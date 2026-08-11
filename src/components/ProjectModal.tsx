import React from 'react';
import { X, ExternalLink, Play, CheckCircle, Wrench, FileText, Globe, Sparkles } from 'lucide-react';
import { PortfolioItem } from '../types';

interface ProjectModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
  onRequestService: (serviceType: PortfolioItem['serviceType']) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ item, onClose, onRequestService }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/50">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-wider">
              {item.category}
            </span>
            <span className="text-xs text-amber-400 font-bold bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/20">
              {item.isSample ? 'Sample Project' : 'Client Project'}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto">
          
          {/* Main Visual Display */}
          <div className="relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 flex items-center justify-center min-h-[260px] max-h-[460px]">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-contain max-h-[440px]"
              referrerPolicy="no-referrer"
            />

            {/* If Video Category - Video Play Overlay */}
            {item.category === 'Video & Social Ads' && (
              <div className="absolute inset-0 bg-slate-950/60 flex flex-col items-center justify-center gap-3 p-4 text-center">
                <div className="w-16 h-16 rounded-full bg-cyan-500 text-slate-950 flex items-center justify-center shadow-xl shadow-cyan-500/40 animate-bounce">
                  <Play className="w-8 h-8 fill-current ml-1" />
                </div>
                <p className="text-white font-bold text-sm">
                  Interactive Video Ad Preview ({item.videoDuration})
                </p>
                <p className="text-xs text-slate-300 max-w-sm">
                  Simulated promotional reel created with AI video tools, motion graphics, and audio timing.
                </p>
              </div>
            )}

            {/* If Website Category - Live Preview Banner */}
            {item.category === 'Business Website' && (
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-3.5 rounded-2xl border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs text-white font-bold">Mobile & Desktop Responsive Demo Site</span>
                </div>
                {item.demoUrl && (
                  <a
                    href={item.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 text-xs font-bold flex items-center gap-1.5 hover:bg-emerald-500 hover:text-slate-950 transition-colors"
                  >
                    Live Demo <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Details Breakdown */}
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold text-white font-display">{item.title}</h3>
              <p className="text-xs text-cyan-400 font-semibold mt-1">
                Client / Brand: {item.clientName || 'Local Business (Demo)'}
              </p>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed">{item.description}</p>

            {item.details && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-800">
                <div className="space-y-2 bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                  <h4 className="text-xs font-bold text-white uppercase flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-cyan-400" /> Project Deliverables
                  </h4>
                  <ul className="space-y-1">
                    {item.details.deliverables.map((del, i) => (
                      <li key={i} className="text-xs text-slate-300 flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2 bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                  <h4 className="text-xs font-bold text-white uppercase flex items-center gap-1.5">
                    <Wrench className="w-4 h-4 text-purple-400" /> Tools & Skills Used
                  </h4>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.details.toolsUsed.map((tool, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 text-xs font-medium">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {item.tags.map((tag, i) => (
                <span key={i} className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs">
                  #{tag}
                </span>
              ))}
            </div>

          </div>

        </div>

        {/* Modal Footer CTA */}
        <div className="p-6 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400 text-center sm:text-left">
            Need a similar {item.serviceType.toLowerCase()} for your business?
          </p>
          <button
            onClick={() => {
              onClose();
              onRequestService(item.serviceType);
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            Request Similar Project
          </button>
        </div>

      </div>

    </div>
  );
};
