import React from 'react';
import { siteInfo } from '../data/siteData';
import { Mail, Phone, MapPin, ArrowUp, ShieldCheck, CheckCircle2, Globe, Sparkles, Layers } from 'lucide-react';

interface FooterProps {
  onOpenDemo: () => void;
  onOpenBlog?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDemo, onOpenBlog }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black/75 backdrop-blur-md border-t border-white/10 relative overflow-hidden text-neutral-400 text-xs">
      {/* Subtle top brand accent line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#630000] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          
          {/* Brand Info (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#630000] to-[#850d0d] p-0.5 border border-white/20 flex items-center justify-center">
                <div className="w-full h-full bg-neutral-950 rounded-[10px] flex items-center justify-center text-white font-black text-lg">
                  H<span className="text-[#e25c5c]">A</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold text-white tracking-tight leading-tight">
                  HATECH <span className="text-[#e25c5c]">• Horn Africa Tech</span>
                </span>
                <span className="text-[10px] tracking-wider text-neutral-400 font-medium uppercase">
                  Odoo Ready Partner • Djibouti
                </span>
              </div>
            </div>

            <p className="text-neutral-300 text-xs leading-relaxed max-w-sm">
              Partenaire certifié Odoo ERP et leader de la transformation digitale dans la Corne de l'Afrique. Nous concevons les architectures logicielles et Cloud des entreprises performantes.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="px-2.5 py-1 rounded-md bg-[#630000]/30 border border-[#630000]/60 text-[10px] font-bold text-white uppercase">
                Odoo Ready Partner
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-bold text-neutral-300">
                AWS Cloud
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-bold text-neutral-300">
                Djibouti • Maroc • Canada
              </span>
            </div>
          </div>

          {/* Solutions & Progiciels */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Nos Solutions
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">Odoo ERP Enterprise</a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">RH & Paie Automatisée</a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">Biométrie & Pointage</a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">Transit & Douane Portuaire</a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">Santé & Cliniques</a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">Éducation & Smart Campus</a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">Fintech & Mobile Money</a>
              </li>
            </ul>
          </div>

          {/* Secteurs & Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Secteurs & Services
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#secteurs" className="hover:text-white transition-colors">Logistique & Ports</a>
              </li>
              <li>
                <a href="#secteurs" className="hover:text-white transition-colors">Éducation & Universités</a>
              </li>
              <li>
                <a href="#secteurs" className="hover:text-white transition-colors">Santé & Hôpitaux</a>
              </li>
              <li>
                <a href="#secteurs" className="hover:text-white transition-colors">Commerce & Distribution</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Cloud AWS & Azure</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Développement Logiciel</a>
              </li>
              <li>
                {onOpenBlog ? (
                  <button onClick={onOpenBlog} className="text-[#e25c5c] hover:underline font-bold">
                    Blog & Publications
                  </button>
                ) : (
                  <a href="#blog" className="hover:text-white transition-colors">Blog</a>
                )}
              </li>
            </ul>
          </div>

          {/* Siège & Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Siège Opérationnel
            </h4>
            <div className="space-y-2.5 text-neutral-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#e25c5c] shrink-0 mt-0.5" />
                <span>Boulevard Cheikh Osman, Centre HATECH, Djibouti</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#e25c5c] shrink-0" />
                <a href="tel:+25321354480" className="hover:text-white">+253 21 35 44 80</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#e25c5c] shrink-0" />
                <a href="mailto:contact@hornafricatech.com" className="hover:text-white">contact@hornafricatech.com</a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenDemo}
                className="w-full btn-primary py-2.5 rounded-xl text-xs font-bold text-center uppercase tracking-wider cursor-pointer"
              >
                Demander une Démo
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-neutral-400 text-[11px] text-center sm:text-left">
            © {new Date().getFullYear()} Horn Africa Technology (HATECH). Tous droits réservés. Odoo Ready Partner Certifié.
          </p>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-semibold cursor-pointer"
              aria-label="Retour en haut"
            >
              <span>Haut de page</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
