import React from 'react';
import { clientPartners } from '../data/siteData';
import { Award, CheckCircle, Shield, Building2 } from 'lucide-react';

export const ClientLogos: React.FC = () => {
  return (
    <section id="clients" className="py-14 border-y border-white/10 bg-black/10 backdrop-blur-sm relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#630000]/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-[11px] font-semibold tracking-wider text-neutral-300 uppercase mb-2">
            <Award className="w-3.5 h-3.5 text-[#e25c5c]" />
            <span>Écosystème & Partenaires Stratégiques</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Ils nous font confiance dans la Corne de l'Afrique et à l'International
          </h2>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4 items-center">
          {clientPartners.map((partner, index) => (
            <div
              key={index}
              id={`partner-card-${index}`}
              className="glass-card p-3.5 sm:p-4 rounded-xl flex flex-col items-center justify-center text-center group hover:border-white/20 transition-all duration-300 h-24"
            >
              <span className="text-xs sm:text-sm font-black tracking-wider text-neutral-200 group-hover:text-white uppercase transition-colors">
                {partner.logoText}
              </span>
              <span className="text-[10px] text-neutral-400 font-medium mt-1 line-clamp-1 group-hover:text-[#e25c5c] transition-colors">
                {partner.category}
              </span>
            </div>
          ))}
        </div>

        {/* Reassurance Banner */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-[#e25c5c]" />
            <span>Intégrateur Certifié Odoo Enterprise</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-[#e25c5c]" />
            <span>Architectures Cloud AWS & Azure Qualifiées</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-[#e25c5c]" />
            <span>Accompagnement Projets Publics & Privés</span>
          </div>
        </div>
      </div>
    </section>
  );
};
