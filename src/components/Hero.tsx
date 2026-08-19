import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Sparkles, Database, Cloud, ShieldCheck, Play, Layers, TrendingUp, Users, Activity, BarChart3 } from 'lucide-react';
import { siteInfo } from '../data/siteData';

interface HeroProps {
  onOpenDemo: () => void;
  onExploreSolutions: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemo, onExploreSolutions }) => {
  const [activeTab, setActiveTab] = useState<'sales' | 'inventory' | 'payroll'>('sales');

  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 flex flex-col justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Top Centered Section */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-14">
          
          {/* Badge "Odoo Ready Partner" */}
          <div 
            id="hero-odoo-badge"
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-pill text-xs font-bold text-neutral-200 mb-6 border border-white/20 shadow-xl"
          >
            <span className="flex h-2.5 w-2.5 rounded-full bg-[#e25c5c] animate-ping" />
            <span className="text-[#e25c5c] font-black uppercase tracking-wider">Odoo Ready Partner</span>
            <span className="text-neutral-400">|</span>
            <span className="tracking-wide">Transformation Digitale & Cloud en Afrique de l'Est</span>
          </div>

          {/* Grand Titre HATECH */}
          <h1 
            id="hero-grand-titre"
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12] mb-6"
          >
            HATECH : Propulsez votre Entreprise vers l'Excellence Numérique
          </h1>

          {/* Texte Descriptif */}
          <p 
            id="hero-texte"
            className="text-base sm:text-lg lg:text-xl text-neutral-200 font-normal leading-relaxed max-w-3xl mb-10"
          >
            Intégrateur officiel d'<strong>Odoo ERP</strong>, architectures Cloud souveraines et solutions métiers sur-mesure (Transit, RH & Paie, Biométrie, Santé, Éducation, Fintech) pour entreprises et institutions à Djibouti et dans la Corne de l'Afrique.
          </p>

          {/* CTAs */}
          <div id="hero-cta-buttons" className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button
              id="hero-btn-demo"
              onClick={onOpenDemo}
              className="btn-primary w-full sm:w-auto px-8 py-4 rounded-xl text-sm sm:text-base font-bold uppercase tracking-wider flex items-center justify-center gap-3 cursor-pointer shadow-2xl"
            >
              <span>Demander une démo</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              id="hero-btn-solutions"
              onClick={onExploreSolutions}
              className="btn-secondary w-full sm:w-auto px-7 py-4 rounded-xl text-sm sm:text-base font-bold flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Découvrir nos solutions</span>
            </button>
          </div>
        </div>

        {/* Dashboard / Animation 3D Visual Section */}
        <div className="relative max-w-5xl mx-auto">
          {/* Glass Card Container for the 3D-styled interactive mock ERP Dashboard */}
          <div className="glass-card rounded-3xl p-5 sm:p-8 border border-white/20 shadow-2xl relative overflow-hidden backdrop-blur-xl group">
            
            {/* Window header */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-white/10 mb-6">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-xs font-bold text-neutral-300 ml-2 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#e25c5c]" />
                  HATECH Odoo Enterprise Cloud v18 • Dashboard Direction
                </span>
              </div>

              {/* Interactive Tabs within Dashboard */}
              <div className="flex items-center gap-1.5 bg-black/50 p-1 rounded-xl border border-white/10 text-xs">
                <button
                  onClick={() => setActiveTab('sales')}
                  className={`px-3 py-1 rounded-lg font-semibold transition-all cursor-pointer ${
                    activeTab === 'sales' ? 'bg-[#630000] text-white shadow' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  Ventes & Facturation
                </button>
                <button
                  onClick={() => setActiveTab('inventory')}
                  className={`px-3 py-1 rounded-lg font-semibold transition-all cursor-pointer ${
                    activeTab === 'inventory' ? 'bg-[#630000] text-white shadow' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  Stocks & Transit
                </button>
                <button
                  onClick={() => setActiveTab('payroll')}
                  className={`px-3 py-1 rounded-lg font-semibold transition-all cursor-pointer ${
                    activeTab === 'payroll' ? 'bg-[#630000] text-white shadow' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  RH & Pointage
                </button>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="p-4 rounded-2xl bg-black/40 border border-white/10">
                <div className="flex items-center justify-between text-xs text-neutral-400 mb-1">
                  <span>Chiffre d'Affaires Mensuel</span>
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="text-2xl font-black text-white">42,850,000 DJF</div>
                <div className="text-[11px] text-emerald-400 mt-1 font-semibold flex items-center gap-1">
                  <span>▲ +18.4%</span>
                  <span className="text-neutral-400">vs mois dernier (Automatisé)</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-black/40 border border-white/10">
                <div className="flex items-center justify-between text-xs text-neutral-400 mb-1">
                  <span>Dossiers Traités sans Erreur</span>
                  <Activity className="w-4 h-4 text-[#e25c5c]" />
                </div>
                <div className="text-2xl font-black text-white">99.8%</div>
                <div className="text-[11px] text-neutral-300 mt-1">
                  1,240 factures & débours Odoo validés
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-black/40 border border-white/10">
                <div className="flex items-center justify-between text-xs text-neutral-400 mb-1">
                  <span>Pointages Biométriques RH</span>
                  <Users className="w-4 h-4 text-blue-400" />
                </div>
                <div className="text-2xl font-black text-white">100% Temps Réel</div>
                <div className="text-[11px] text-neutral-300 mt-1">
                  Synchronisation directe avec la paie
                </div>
              </div>
            </div>

            {/* Visual Simulated Activity Stream */}
            <div className="p-4 rounded-2xl bg-black/50 border border-white/10">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-white flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  Flux Opérationnel en Direct
                </span>
                <span className="text-[10px] text-neutral-400 uppercase tracking-wider font-semibold">
                  Serveurs Cloud Djibouti & AWS
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-white">Conteneur #DJ-9821</div>
                    <div className="text-[10px] text-neutral-400">Dédouanement Odoo validé</div>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-bold">
                    Livré
                  </span>
                </div>

                <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-white">Pointage Biométrique</div>
                    <div className="text-[10px] text-neutral-400">Site Portuaire • 07:58</div>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 text-[10px] font-bold">
                    Enregistré
                  </span>
                </div>

                <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-white">Rapprochement D-Money</div>
                    <div className="text-[10px] text-neutral-400">Facture Client #FAC-449</div>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-[#630000]/60 text-white text-[10px] font-bold">
                    Lettré
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Reassurance footer */}
            <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-neutral-300">
              <div className="flex items-center gap-2 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#e25c5c]" />
                <span>Disponible sur Ordinateur, Tablette et Mobile iOS/Android</span>
              </div>
              <button
                onClick={onOpenDemo}
                className="text-xs font-bold text-white hover:text-[#e25c5c] transition-colors flex items-center gap-1 cursor-pointer"
              >
                <span>Tester la plateforme interactive</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
