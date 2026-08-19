import React, { useState } from 'react';
import { solutionsData } from '../data/siteData';
import { SolutionItem } from '../types';
import { 
  Layers, 
  Users, 
  Fingerprint, 
  Ship, 
  Activity, 
  GraduationCap, 
  CreditCard, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  TrendingUp
} from 'lucide-react';

interface SolutionsSectionProps {
  onOpenDemoWithSolution: (solutionName: string) => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({ onOpenDemoWithSolution }) => {
  const [selectedSolution, setSelectedSolution] = useState<SolutionItem>(solutionsData[0]);

  const getSolutionIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers': return <Layers className="w-5 h-5" />;
      case 'Users': return <Users className="w-5 h-5" />;
      case 'Fingerprint': return <Fingerprint className="w-5 h-5" />;
      case 'Ship': return <Ship className="w-5 h-5" />;
      case 'Activity': return <Activity className="w-5 h-5" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5" />;
      case 'CreditCard': return <CreditCard className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="solutions" className="py-24 relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-4 border border-white/10">
            <Sparkles className="w-3.5 h-3.5 text-[#e25c5c]" />
            <span>Nos Solutions Métiers Spécialisées</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 leading-tight">
            Des Progiciels Paramétrés pour votre Secteur d'Activité
          </h2>

          <p className="text-neutral-200 text-base sm:text-lg leading-relaxed">
            7 solutions logicielles complètes, interconnectables et adaptées aux cadres réglementaires et opérationnels de la Corne de l'Afrique.
          </p>
        </div>

        {/* Interactive Solution Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {solutionsData.map((sol) => (
            <button
              key={sol.id}
              onClick={() => setSelectedSolution(sol)}
              className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                selectedSolution.id === sol.id
                  ? 'bg-[#630000] text-white shadow-xl shadow-[#630000]/40 border border-white/20 scale-105'
                  : 'glass-card text-neutral-300 hover:text-white hover:border-white/20'
              }`}
            >
              {getSolutionIcon(sol.icon)}
              <span>{sol.title}</span>
            </button>
          ))}
        </div>

        {/* Highlighted Solution Showcase Card */}
        <div className="glass-card p-6 sm:p-10 rounded-3xl border border-white/20 max-w-5xl mx-auto mb-12 shadow-2xl relative overflow-hidden backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-[#630000]/30 border border-[#630000]/50 text-[#e25c5c]">
                  {getSolutionIcon(selectedSolution.icon)}
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#e25c5c] px-2 py-0.5 rounded bg-white/5 border border-white/10">
                    {selectedSolution.badge}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                    {selectedSolution.title}
                  </h3>
                </div>
              </div>

              <div className="text-sm font-semibold text-neutral-200">
                {selectedSolution.tagline}
              </div>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {selectedSolution.description}
              </p>

              <div className="pt-2">
                <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-3">
                  Fonctionnalités Clés Intégrées
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedSolution.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-neutral-200 p-2.5 rounded-xl bg-black/40 border border-white/5">
                      <CheckCircle2 className="w-4 h-4 text-[#e25c5c] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => onOpenDemoWithSolution(selectedSolution.title)}
                  className="btn-primary w-full sm:w-auto px-7 py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  <span>Demander une démo {selectedSolution.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Impact Metric Visual Card (Right) */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-black/60 border border-white/10 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                  Bénéfice Opérationnel Mesuré
                </span>
                <div className="text-2xl sm:text-3xl font-black text-[#e25c5c] mt-2 mb-1">
                  {selectedSolution.impactMetric}
                </div>
                <p className="text-xs text-neutral-300">
                  Résultats constatés chez nos clients équipés à Djibouti et dans la Corne de l'Afrique.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900/80 border border-white/5 space-y-2 text-xs text-neutral-300">
                <div className="flex items-center justify-between">
                  <span>Temps de déploiement moyen</span>
                  <strong className="text-white">2 à 4 semaines</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span>Formation des équipes</span>
                  <strong className="text-white">100% en présentiel</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span>Support technique</span>
                  <strong className="text-white">24/7 en local</strong>
                </div>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-neutral-400 font-medium">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                <span>Compatible Odoo Community & Enterprise v17/v18</span>
              </div>
            </div>

          </div>
        </div>

        {/* 7 Solutions Mini Grid Overview */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
          {solutionsData.map((sol) => (
            <div
              key={sol.id}
              onClick={() => setSelectedSolution(sol)}
              className={`p-3.5 rounded-2xl border text-center cursor-pointer transition-all ${
                selectedSolution.id === sol.id
                  ? 'bg-[#630000]/30 border-[#630000] shadow-lg shadow-[#630000]/25'
                  : 'bg-black/30 border-white/5 hover:border-white/20'
              }`}
            >
              <div className="flex justify-center text-[#e25c5c] mb-2">
                {getSolutionIcon(sol.icon)}
              </div>
              <div className="text-xs font-bold text-white line-clamp-1">
                {sol.title}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
