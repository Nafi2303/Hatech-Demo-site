import React, { useState } from 'react';
import { 
  Boxes, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Database, 
  FileSpreadsheet, 
  Zap, 
  TrendingUp, 
  RefreshCw, 
  ShieldCheck,
  BarChart2
} from 'lucide-react';

interface OdooSectionProps {
  onOpenDemo: (serviceName?: string) => void;
}

export const OdooSection: React.FC<OdooSectionProps> = ({ onOpenDemo }) => {
  const [activeModule, setActiveModule] = useState<'ventes' | 'stocks' | 'compta'>('ventes');

  return (
    <section id="odoo" className="py-24 relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-bold text-[#e25c5c] uppercase tracking-wider mb-4 border border-[#630000]/40">
            <Boxes className="w-3.5 h-3.5" />
            <span>Spécialiste Odoo ERP en Afrique de l'Est</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4 leading-tight">
            "Votre entreprise mérite mieux que des fichiers Excel"
          </h2>

          <p className="text-neutral-200 text-base sm:text-lg leading-relaxed">
            Centralisez l'ensemble de votre organisation dans une plateforme unique, rapide et accessible partout sur PC et mobile. Fini les doublons, les erreurs de formules et les documents perdus.
          </p>
        </div>

        {/* Big Interactive Odoo ERP Showcase */}
        <div className="glass-card p-6 sm:p-10 rounded-3xl border border-white/20 shadow-2xl max-w-5xl mx-auto relative overflow-hidden backdrop-blur-2xl mb-12">
          
          {/* Top Bar with Odoo Branding */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10 mb-6">
            <div className="flex items-center gap-3">
              <div className="px-3 py-1 rounded-xl bg-[#630000] text-white font-black text-xs uppercase tracking-wider">
                odoo
              </div>
              <span className="text-sm font-bold text-white">
                Système Intégré de Gestion Commerciale & Financière
              </span>
            </div>

            {/* Module Switcher */}
            <div className="flex gap-2">
              <button
                onClick={() => setActiveModule('ventes')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeModule === 'ventes' ? 'bg-[#630000] text-white shadow' : 'bg-black/40 text-neutral-400 hover:text-white'
                }`}
              >
                Ventes & Devis
              </button>
              <button
                onClick={() => setActiveModule('stocks')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeModule === 'stocks' ? 'bg-[#630000] text-white shadow' : 'bg-black/40 text-neutral-400 hover:text-white'
                }`}
              >
                Stocks & Entrepôts
              </button>
              <button
                onClick={() => setActiveModule('compta')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeModule === 'compta' ? 'bg-[#630000] text-white shadow' : 'bg-black/40 text-neutral-400 hover:text-white'
                }`}
              >
                Comptabilité & Bilan
              </button>
            </div>
          </div>

          {/* Module Dynamic Visual Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Screen Display (Left) */}
            <div className="lg:col-span-7 bg-black/60 p-5 rounded-2xl border border-white/10 space-y-4">
              
              {activeModule === 'ventes' && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs pb-2 border-b border-white/10">
                    <span className="font-bold text-white">Pipeline Commercial Odoo (CRM)</span>
                    <span className="text-emerald-400 font-semibold">Taux de conversion : 68%</span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center text-xs">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                      <div className="text-[10px] text-neutral-400">Prospects</div>
                      <div className="font-bold text-white mt-0.5">14 Nouveaux</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                      <div className="text-[10px] text-neutral-400">Devis Envoyés</div>
                      <div className="font-bold text-amber-300 mt-0.5">8 En attente</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-[#630000]/30 border border-[#630000]/50">
                      <div className="text-[10px] text-neutral-300">Gagnés & Facturés</div>
                      <div className="font-bold text-emerald-400 mt-0.5">23 Validés</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-neutral-900/90 text-xs space-y-2">
                    <div className="flex items-center justify-between text-neutral-300">
                      <span>Devis #SO-2026-089 (Société Portuaire)</span>
                      <strong className="text-white">8,450,000 DJF</strong>
                    </div>
                    <div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-[#630000] h-full w-[85%]" />
                    </div>
                    <div className="text-[10px] text-emerald-400 flex items-center gap-1 font-medium">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Signature électronique validée • Facture générée automatiquement</span>
                    </div>
                  </div>
                </div>
              )}

              {activeModule === 'stocks' && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs pb-2 border-b border-white/10">
                    <span className="font-bold text-white">Inventaire & Traçabilité Multi-Dépôts</span>
                    <span className="text-blue-400 font-semibold">100% à jour</span>
                  </div>

                  <div className="p-3 rounded-xl bg-neutral-900/90 text-xs space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-300">Entrepôt Principal (Zone Franche)</span>
                      <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-bold">Optimal</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-300">Dépôt Secondaire (Port de Djibouti)</span>
                      <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[10px] font-bold">Réapprovisionnement</span>
                    </div>
                  </div>

                  <div className="text-[11px] text-neutral-300 bg-white/5 p-2.5 rounded-xl flex items-center gap-2">
                    <Zap className="w-4 h-4 text-[#e25c5c]" />
                    <span>Scan code-barres mobile & alertes automatiques de rupture de stock.</span>
                  </div>
                </div>
              )}

              {activeModule === 'compta' && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs pb-2 border-b border-white/10">
                    <span className="font-bold text-white">Comptabilité Générale & Bilan Instantané</span>
                    <span className="text-emerald-400 font-semibold">Rapprochement OK</span>
                  </div>

                  <div className="p-3 rounded-xl bg-neutral-900/90 text-xs space-y-2">
                    <div className="flex items-center justify-between text-neutral-300">
                      <span>Rapprochement Bancaire (Banque / D-Money)</span>
                      <strong className="text-emerald-400">100% lettré</strong>
                    </div>
                    <div className="flex items-center justify-between text-neutral-300">
                      <span>Déclarations TVA & CNSS</span>
                      <strong className="text-white">Conformes aux normes</strong>
                    </div>
                  </div>

                  <div className="text-[11px] text-neutral-300 bg-white/5 p-2.5 rounded-xl flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                    <span>Compte de résultat & Bilan financier édités en un seul clic.</span>
                  </div>
                </div>
              )}

            </div>

            {/* Content & Value Proposition (Right) */}
            <div className="lg:col-span-5 space-y-4">
              <h3 className="text-2xl font-black text-white leading-tight">
                Passez à la Vitesse Supérieure avec HATECH
              </h3>

              <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-200">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#e25c5c] shrink-0 mt-0.5" />
                  <span>Migration sécurisée de vos fichiers Excel existants vers Odoo.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#e25c5c] shrink-0 mt-0.5" />
                  <span>Personnalisation complète selon vos spécificités métiers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#e25c5c] shrink-0 mt-0.5" />
                  <span>Formation complète de vos équipes à Djibouti et support local.</span>
                </li>
              </ul>

              <div className="pt-3">
                <button
                  onClick={() => onOpenDemo('Intégration Odoo ERP')}
                  className="btn-primary w-full py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-xl"
                >
                  <span>Demander une démo Odoo Personnalisée</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
