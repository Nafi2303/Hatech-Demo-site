import React from 'react';
import { hatechStats } from '../data/siteData';
import { Award, TrendingUp, Sparkles, CheckCircle2 } from 'lucide-react';

export const StatsSection: React.FC = () => {
  return (
    <section id="chiffres" className="py-20 relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-4 border border-white/10">
            <TrendingUp className="w-3.5 h-3.5 text-[#e25c5c]" />
            <span>Chiffres Clés & Réalisations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            L'Impact HATECH en Quelques Chiffres
          </h2>
        </div>

        {/* 4 Big Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hatechStats.map((stat, idx) => (
            <div
              key={idx}
              id={`stat-card-${idx}`}
              className="glass-card p-6 sm:p-8 rounded-3xl border border-white/15 text-center flex flex-col items-center justify-center relative overflow-hidden group hover:border-white/30 transition-all"
            >
              <div className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-2 group-hover:text-[#e25c5c] transition-colors">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-neutral-200 mb-1">
                {stat.label}
              </div>
              <div className="text-[11px] font-semibold text-[#e25c5c] mb-2 uppercase tracking-wider">
                {stat.sublabel}
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
