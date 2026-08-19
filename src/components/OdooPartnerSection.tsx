import React from 'react';
import { Award, ShieldCheck, CheckCircle2, ArrowRight, Zap, Star } from 'lucide-react';

interface OdooPartnerProps {
  onOpenDemo: (serviceName?: string) => void;
}

export const OdooPartnerSection: React.FC<OdooPartnerProps> = ({ onOpenDemo }) => {
  return (
    <section id="odoo-partner" className="py-20 relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass-card p-8 sm:p-12 rounded-3xl border border-white/20 relative overflow-hidden max-w-5xl mx-auto shadow-2xl backdrop-blur-xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Partner Badge & Info */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#630000]/40 border border-[#630000] text-xs font-bold text-white uppercase tracking-wider">
                <Award className="w-4 h-4 text-[#e25c5c]" />
                <span>Statut Officiel • Odoo Ready Partner</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Garantie de Conformité et d'Intégration Certifiée Odoo
              </h2>

              <p className="text-neutral-200 text-sm sm:text-base leading-relaxed">
                En tant qu'intégrateur Odoo Partner, HATECH vous garantit un accès direct aux dernières versions de l'éditeur (Odoo 18 Enterprise & Community), un accompagnement par des consultants certifiés et une architecture logicielle conforme aux normes internationales.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs text-neutral-200 p-2.5 rounded-xl bg-black/40 border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-[#e25c5c] shrink-0" />
                  <span>Consultants et Développeurs Certifiés</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-200 p-2.5 rounded-xl bg-black/40 border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-[#e25c5c] shrink-0" />
                  <span>Licences Odoo Officielles & Mises à Jour</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-200 p-2.5 rounded-xl bg-black/40 border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-[#e25c5c] shrink-0" />
                  <span>Maintenance & Support SLAs Réactifs</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-200 p-2.5 rounded-xl bg-black/40 border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-[#e25c5c] shrink-0" />
                  <span>Hébergement Cloud Sécurisé ou On-Premise</span>
                </div>
              </div>
            </div>

            {/* Right Badge Visual */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center text-center p-6 rounded-2xl bg-black/60 border border-white/10 space-y-4">
              <div className="w-20 h-20 rounded-2xl bg-[#630000] p-1 shadow-2xl shadow-[#630000]/60 border-2 border-white/30 flex items-center justify-center">
                <div className="text-white font-black text-2xl tracking-wider">
                  odoo
                </div>
              </div>

              <div>
                <div className="text-base font-black text-white">READY PARTNER</div>
                <div className="text-[11px] text-neutral-400 font-semibold uppercase mt-0.5">
                  Afrique de l'Est • Corne d'Afrique
                </div>
              </div>

              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              <button
                onClick={() => onOpenDemo('Audit Odoo Partner')}
                className="btn-primary w-full py-3 rounded-xl text-xs font-bold uppercase tracking-wider cursor-pointer shadow-lg"
              >
                Planifier un audit Odoo
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
