import React from 'react';
import { ArrowRight, Phone, MessageSquare, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { siteInfo } from '../data/siteData';

interface CtaFinalProps {
  onOpenDemo: () => void;
}

export const CtaFinalSection: React.FC<CtaFinalProps> = ({ onOpenDemo }) => {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="cta-final" className="py-24 relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass-card p-8 sm:p-14 rounded-3xl border border-white/20 relative overflow-hidden text-center max-w-4xl mx-auto shadow-2xl backdrop-blur-2xl">
          
          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#630000]/30 rounded-full blur-[140px] pointer-events-none -z-10" />

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-bold text-neutral-200 uppercase tracking-wider mb-6 border border-white/10">
            <Sparkles className="w-3.5 h-3.5 text-[#e25c5c]" />
            <span>Passez à la Vitesse Supérieure</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-6 leading-tight max-w-2xl mx-auto">
            Prêt à Réinventer la Gestion de votre Entreprise ?
          </h2>

          <p className="text-neutral-200 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Rejoignez les leaders de Djibouti et de la Corne de l'Afrique qui ont modernisé leurs opérations avec <strong>HATECH</strong>. Obtenez une démonstration interactive personnalisée et un plan d'action sous 48 heures.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <button
              onClick={onOpenDemo}
              className="btn-primary w-full sm:w-auto px-9 py-4 rounded-xl text-sm sm:text-base font-bold uppercase tracking-wider flex items-center justify-center gap-3 cursor-pointer shadow-2xl"
            >
              <span>Demander une démo gratuite</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={scrollToContact}
              className="btn-secondary w-full sm:w-auto px-8 py-4 rounded-xl text-sm sm:text-base font-bold flex items-center justify-center gap-2 cursor-pointer"
            >
              <Phone className="w-4 h-4 text-[#e25c5c]" />
              <span>Contacter nos experts</span>
            </button>
          </div>

          {/* Reassurance points */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-300 pt-4 border-t border-white/10">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#e25c5c]" />
              <span>Démo en visio ou dans vos locaux</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#e25c5c]" />
              <span>Sans engagement commercial</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#e25c5c]" />
              <span>Audit préliminaire offert</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
