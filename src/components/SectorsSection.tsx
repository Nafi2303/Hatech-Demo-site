import React, { useState } from 'react';
import { sectorsData } from '../data/siteData';
import { SectorItem } from '../types';
import { 
  Truck, 
  BookOpen, 
  HeartPulse, 
  ShoppingBag, 
  Landmark, 
  CheckCircle2, 
  ArrowRight, 
  Building2,
  Sparkles
} from 'lucide-react';

interface SectorsSectionProps {
  onOpenDemoForSector: (sectorName: string) => void;
}

export const SectorsSection: React.FC<SectorsSectionProps> = ({ onOpenDemoForSector }) => {
  const [activeSector, setActiveSector] = useState<SectorItem>(sectorsData[0]);

  const getSectorIcon = (iconName: string) => {
    switch (iconName) {
      case 'Truck': return <Truck className="w-5 h-5" />;
      case 'BookOpen': return <BookOpen className="w-5 h-5" />;
      case 'HeartPulse': return <HeartPulse className="w-5 h-5" />;
      case 'ShoppingBag': return <ShoppingBag className="w-5 h-5" />;
      case 'Landmark': return <Landmark className="w-5 h-5" />;
      default: return <Building2 className="w-5 h-5" />;
    }
  };

  return (
    <section id="secteurs" className="py-24 relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-4 border border-white/10">
            <Building2 className="w-3.5 h-3.5 text-[#e25c5c]" />
            <span>Secteurs d'Activité Clés</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 leading-tight">
            Une Expertise Sectorielle Approfondie
          </h2>

          <p className="text-neutral-200 text-base sm:text-lg leading-relaxed">
            Nous comprenons les défis uniques de chaque industrie pour concevoir des systèmes parfaitement alignés avec vos objectifs métiers.
          </p>
        </div>

        {/* 5 Sectors Nav Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
          {sectorsData.map((sec) => (
            <button
              key={sec.id}
              onClick={() => setActiveSector(sec)}
              className={`p-4 rounded-2xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-2.5 ${
                activeSector.id === sec.id
                  ? 'bg-[#630000] border-[#630000] text-white shadow-xl shadow-[#630000]/40 scale-105'
                  : 'glass-card text-neutral-300 hover:text-white hover:border-white/20'
              }`}
            >
              <div className={activeSector.id === sec.id ? 'text-white' : 'text-[#e25c5c]'}>
                {getSectorIcon(sec.icon)}
              </div>
              <div className="text-xs font-bold leading-tight">
                {sec.title}
              </div>
            </button>
          ))}
        </div>

        {/* Active Sector Detailed Card */}
        <div className="glass-card p-6 sm:p-10 rounded-3xl border border-white/20 max-w-5xl mx-auto shadow-2xl relative backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-[#630000]/30 border border-[#630000]/50 text-[#e25c5c]">
                  {getSectorIcon(activeSector.icon)}
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#e25c5c] px-2 py-0.5 rounded bg-white/5 border border-white/10">
                    {activeSector.badge}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                    {activeSector.title}
                  </h3>
                </div>
              </div>

              <div className="text-xs sm:text-sm font-semibold text-neutral-200">
                {activeSector.subtitle}
              </div>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {activeSector.description}
              </p>

              <div className="pt-2">
                <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2.5">
                  Modules Déployés pour ce Secteur
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeSector.keyModules.map((mod, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-xl bg-black/50 border border-white/10 text-xs font-semibold text-white">
                      ✦ {mod}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onOpenDemoForSector(`Secteur : ${activeSector.title}`)}
                  className="btn-primary px-7 py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-lg"
                >
                  <span>Demander une solution pour {activeSector.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Case Study Box (Right) */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-black/60 border border-white/10 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-[11px] font-bold text-[#e25c5c] uppercase tracking-wider">
                  Retour d'Expérience Régional
                </span>
                <h4 className="text-base font-bold text-white mt-1 mb-2">
                  Cas d'Usage Réel
                </h4>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  {activeSector.caseStudy}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 text-xs text-neutral-200 space-y-1.5">
                <div className="font-bold text-white">Avantages Constatés :</div>
                <div>• Visibilité intégrale et tableaux de bord en temps réel</div>
                <div>• Réduction massive des erreurs de manipulation</div>
                <div>• Équipe locale dédiée pour l'assistance continue</div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
