import React, { useState } from 'react';
import { featuresServicesData } from '../data/siteData';
import { ServiceItem } from '../types';
import { 
  Cloud, 
  Code2, 
  CreditCard, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  Server,
  Cpu
} from 'lucide-react';

interface FeaturesServicesProps {
  onOpenDemoForService: (serviceTitle: string) => void;
}

export const FeaturesServicesSection: React.FC<FeaturesServicesProps> = ({ onOpenDemoForService }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cloud': return <Cloud className="w-6 h-6" />;
      case 'Code2': return <Code2 className="w-6 h-6" />;
      case 'CreditCard': return <CreditCard className="w-6 h-6" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6" />;
      default: return <Sparkles className="w-6 h-6" />;
    }
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-4 border border-white/10">
            <Cpu className="w-3.5 h-3.5 text-[#e25c5c]" />
            <span>Pôles d'Ingénierie & Services IT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 leading-tight">
            Services & Capacités Techniques Avancées
          </h2>

          <p className="text-neutral-200 text-base sm:text-lg leading-relaxed">
            Du Cloud souverain au développement d'applications mobiles, nous bâtissons l'infrastructure technologique de votre succès.
          </p>
        </div>

        {/* 4 Core Feature Cards Grid (Cloud, Dev, Fintech, Infra) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {featuresServicesData.map((srv, index) => (
            <div
              key={srv.id}
              id={`service-feature-card-${index}`}
              className="glass-card glass-card-hover p-6 sm:p-8 rounded-3xl border border-white/15 relative overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3.5 rounded-2xl bg-[#630000]/30 border border-[#630000]/50 text-[#e25c5c] group-hover:scale-105 transition-transform">
                    {getServiceIcon(srv.iconName)}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-300 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                    {srv.badge}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  {srv.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-300 mb-5 leading-relaxed">
                  {srv.fullDesc}
                </p>

                {/* Key Points */}
                <div className="space-y-2 mb-6">
                  {srv.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-neutral-200">
                      <CheckCircle2 className="w-4 h-4 text-[#e25c5c] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2 mb-6">
                  {srv.technologies.map((t, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-lg bg-black/40 border border-white/10 text-[11px] text-neutral-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onOpenDemoForService(srv.title)}
                className="btn-primary w-full py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>Consulter nos ingénieurs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
