import React, { useState } from 'react';
import { siteInfo } from '../data/siteData';
import { Building, MapPin, Mail, Phone, Globe, Shield, Target, Users, Cpu, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface AboutSectionProps {
  onOpenQuote: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenQuote }) => {
  const [activeTab, setActiveTab] = useState<'mission' | 'presence' | 'valeurs'>('mission');

  return (
    <section id="apropos" className="py-24 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#630000]/15 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-4 border border-white/10">
            <Building className="w-3.5 h-3.5 text-[#e25c5c]" />
            <span>À Propos de HATECH</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 leading-tight">
            Pionniers de la Révolution Numérique dans la Corne de l'Afrique
          </h2>
          
          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
            Fondée avec la conviction que la technologie est le moteur du développement économique, <strong className="text-white">Horn Africa Technology (HATECH)</strong> déploie des solutions informatiques de pointe adaptées aux réalités régionales et aux exigences internationales.
          </p>
        </div>

        {/* 3 Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          <div className="glass-card glass-card-hover p-8 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#630000]/30 border border-[#630000]/50 flex items-center justify-center text-[#e25c5c] mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Souveraineté & Open-Source
              </h3>
              <p className="text-neutral-300 text-sm leading-relaxed mb-4">
                Nous favorisons les technologies ouvertes comme <strong>Odoo, Python et Linux</strong> pour libérer nos clients des coûts exorbitants de licences propriétaires et garantir leur indépendance numérique.
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-medium text-neutral-400">
              <CheckCircle2 className="w-4 h-4 text-[#e25c5c]" />
              <span>Contrôle total des données & code source</span>
            </div>
          </div>

          <div className="glass-card glass-card-hover p-8 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white mb-6">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Présence Internationale & Locale
              </h3>
              <p className="text-neutral-300 text-sm leading-relaxed mb-4">
                Une synergie tripartite unique entre notre <strong>siège opérationnel à Djibouti</strong>, notre <strong>centre R&D d'excellence au Maroc</strong> et notre <strong>pôle partenariats au Canada</strong>.
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-medium text-neutral-400">
              <CheckCircle2 className="w-4 h-4 text-white" />
              <span>Proximité terrain & expertise mondiale</span>
            </div>
          </div>

          <div className="glass-card glass-card-hover p-8 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#630000]/30 border border-[#630000]/50 flex items-center justify-center text-[#e25c5c] mb-6">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Impact & Résilience
              </h3>
              <p className="text-neutral-300 text-sm leading-relaxed mb-4">
                Conception d'infrastructures haut débit résilientes même dans les environnements complexes, formation continue des ingénieurs locaux et digitalisation durable des services publics.
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-medium text-neutral-400">
              <CheckCircle2 className="w-4 h-4 text-[#e25c5c]" />
              <span>Transfert de compétences & durabilité</span>
            </div>
          </div>

        </div>

        {/* Global Hubs Box */}
        <div className="glass-card p-6 sm:p-10 rounded-3xl border border-white/10 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-8 pb-8 border-b border-white/10">
            <div>
              <span className="text-xs font-bold text-[#e25c5c] uppercase tracking-wider">Implantation Stratégique</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                Nos 3 Pôles d'Excellence Géographique
              </h3>
              <p className="text-neutral-400 text-sm mt-2 max-w-2xl">
                Une organisation agile permettant de délivrer des projets complexes avec un support 24/7 et des standards de sécurité internationaux.
              </p>
            </div>

            <button
              onClick={onOpenQuote}
              className="btn-primary px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer shrink-0"
            >
              <span>Discuter avec un consultant</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {siteInfo.offices.map((office, idx) => (
              <div
                key={idx}
                id={`office-card-${idx}`}
                className={`p-6 rounded-2xl border transition-all ${
                  office.isHQ
                    ? 'bg-[#630000]/15 border-[#630000]/50 shadow-lg shadow-[#630000]/20'
                    : 'bg-neutral-900/60 border-white/10'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-white">{office.city}</span>
                    <span className="text-xs text-neutral-400 font-medium">({office.country})</span>
                  </div>
                  {office.isHQ && (
                    <span className="px-2 py-0.5 rounded-full bg-[#630000] text-white text-[10px] font-bold uppercase tracking-wider">
                      Siège Social
                    </span>
                  )}
                </div>

                <div className="text-xs text-[#e25c5c] font-semibold mb-4">
                  {office.status}
                </div>

                <div className="space-y-2.5 text-xs text-neutral-300">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                    <span>{office.address}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-neutral-400 shrink-0" />
                    <a href={`mailto:${office.email}`} className="hover:text-white transition-colors">
                      {office.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-neutral-400 shrink-0" />
                    <span>{office.phone}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
