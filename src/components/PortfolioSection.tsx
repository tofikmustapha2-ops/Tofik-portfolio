import React, { useState } from 'react';
import { PORTFOLIO_ITEMS } from '../data/portfolioData';
import { PortfolioItem } from '../types';
import { ProjectModal } from './ProjectModal';
import { Eye, Play, Globe, Image as ImageIcon, Filter, Sparkles } from 'lucide-react';

interface PortfolioSectionProps {
  onRequestService: (serviceType: PortfolioItem['serviceType']) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onRequestService }) => {
  const [activeTab, setActiveTab] = useState<string>('All');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const categories = [
    { label: 'All Projects', value: 'All' },
    { label: 'Graphic Design & Flyers', value: 'Graphic Design' },
    { label: 'Video Ads & Social', value: 'Video & Social Ads' },
    { label: 'Business Websites', value: 'Business Website' },
  ];

  const filteredItems = activeTab === 'All'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === activeTab);

  return (
    <section id="portfolio" className="py-24 relative bg-slate-900/60 border-y border-slate-800/80">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-bold text-cyan-400 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" /> Creative Showcase
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Featured Portfolio & Demo Projects
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Explore sample projects demonstrating expertise in graphic flyer design, engaging video advertisements, and modern business websites.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveTab(cat.value)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === cat.value
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-lg shadow-cyan-500/25 scale-105'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
              id={`portfolio-filter-${cat.value.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <Filter className="w-3.5 h-3.5" />
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Portfolio Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="glass-card glass-card-hover rounded-3xl overflow-hidden border border-slate-800 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                {/* Thumbnail Container */}
                <div className="relative aspect-video sm:aspect-4/3 overflow-hidden bg-slate-950">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors"></div>

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-slate-900/90 backdrop-blur-md text-cyan-400 text-[11px] font-bold border border-slate-800">
                      {item.category}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-amber-400/90 text-slate-950 text-[10px] font-extrabold uppercase tracking-wider shadow">
                      Sample
                    </span>
                  </div>

                  {/* Play Button Icon Overlay for Videos */}
                  {item.category === 'Video & Social Ads' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-cyan-500/90 text-slate-950 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 fill-current ml-0.5" />
                      </div>
                    </div>
                  )}

                  {/* Globe Icon Overlay for Websites */}
                  {item.category === 'Business Website' && (
                    <div className="absolute bottom-3 right-3 p-2 rounded-xl bg-slate-900/90 text-emerald-400 border border-slate-800">
                      <Globe className="w-4 h-4" />
                    </div>
                  )}
                </div>

                {/* Content Details */}
                <div className="p-6 space-y-3">
                  <h3 className="font-display text-lg font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-1">
                    {item.title}
                  </h3>

                  <p className="text-slate-400 text-xs leading-relaxed line-clamp-2">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {item.tags.slice(0, 3).map((tag, i) => (
                      <span key={i} className="text-[10px] px-2.5 py-1 rounded-md bg-slate-800/80 text-slate-300 font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="px-6 pb-6 pt-2">
                <button
                  className="w-full py-2.5 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-cyan-500/50 text-slate-300 group-hover:text-white font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
                  id={`portfolio-view-btn-${item.id}`}
                >
                  <Eye className="w-3.5 h-3.5 text-cyan-400" />
                  <span>View Details & Preview</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Popup Modal */}
      <ProjectModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        onRequestService={onRequestService}
      />

    </section>
  );
};
