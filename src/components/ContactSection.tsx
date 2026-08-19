import React, { useState } from 'react';
import { siteInfo } from '../data/siteData';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle, Clock, Globe } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Renseignement Projet',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-black/20 backdrop-blur-[2px] border-t border-white/10">
      {/* Glow effect */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#630000]/20 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-4 border border-white/10">
            <Mail className="w-3.5 h-3.5 text-[#e25c5c]" />
            <span>Contact & Prise de Rendez-vous</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 leading-tight">
            Prêt à Transformer votre Entreprise ?
          </h2>

          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
            Contactez notre équipe basée à Djibouti pour échanger sur vos projets de transformation digitale, d'intégration Odoo ou de Cloud.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct info & Offices */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary HQ Box */}
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-[#630000]/50 shadow-xl shadow-[#630000]/15 relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-[#630000] text-white text-[10px] font-bold uppercase tracking-wider">
                  Siège Social • Djibouti
                </span>
                <span className="text-xs text-neutral-400 font-medium flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#e25c5c]" /> Dim - Jeu : 8h00 - 17h00
                </span>
              </div>

              <h3 className="text-xl font-extrabold text-white mb-2">
                Horn Africa Technology (HATECH)
              </h3>
              <p className="text-xs text-neutral-300 mb-6">
                Boulevard Cheikh Osman, Centre d'Affaires HATECH, Djibouti Ville
              </p>

              <div className="space-y-3.5 text-xs text-neutral-200 border-t border-white/10 pt-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-neutral-900 text-[#e25c5c]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-neutral-400">Ligne Directe & WhatsApp</div>
                    <a href="tel:+25321354480" className="font-bold text-white hover:text-[#e25c5c] transition-colors">
                      +253 21 35 44 80 / +253 77 82 10 90
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-neutral-900 text-[#e25c5c]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-neutral-400">Courriel Général</div>
                    <a href="mailto:contact@hornafricatech.com" className="font-bold text-white hover:text-[#e25c5c] transition-colors">
                      contact@hornafricatech.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] text-neutral-400">Réponse garantie sous 24h</span>
                <a
                  href="https://wa.me/25377821090"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary py-1.5 px-3 rounded-lg text-[11px] font-bold inline-flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3 h-3 text-black" />
                  <span>WhatsApp Direct</span>
                </a>
              </div>
            </div>

            {/* Other Offices */}
            <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-[#e25c5c]" />
                <span>Nos Pôles R&D & Internationaux</span>
              </h4>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-neutral-900/60 border border-white/5">
                  <div className="font-bold text-white mb-0.5">Casablanca (Maroc)</div>
                  <div className="text-[11px] text-[#e25c5c] mb-1">Pôle R&D & Logiciel</div>
                  <div className="text-[10px] text-neutral-400">+212 522 88 90 12</div>
                </div>

                <div className="p-3 rounded-xl bg-neutral-900/60 border border-white/5">
                  <div className="font-bold text-white mb-0.5">Montréal (Canada)</div>
                  <div className="text-[11px] text-[#e25c5c] mb-1">Architecture Cloud</div>
                  <div className="text-[10px] text-neutral-400">+1 514 620 4490</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-10 rounded-3xl border border-white/10 relative">
              
              {formSent ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-[#630000] text-white flex items-center justify-center mx-auto mb-4 shadow-xl shadow-[#630000]/40">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Transmis avec Succès !</h3>
                  <p className="text-neutral-300 text-sm max-w-md mx-auto mb-6">
                    Merci <strong className="text-white">{formData.name}</strong>. Un conseiller Horn Africa Tech vous recontactera à l'adresse <strong>{formData.email}</strong> dans les plus brefs délais.
                  </p>
                  <button
                    onClick={() => {
                      setFormSent(false);
                      setFormData({ name: '', email: '', phone: '', subject: 'Renseignement Projet', message: '' });
                    }}
                    className="btn-secondary-dark px-6 py-2.5 rounded-xl text-xs font-bold"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-xl font-bold text-white mb-1">
                    Envoyez-nous un Message Direct
                  </h3>
                  <p className="text-xs text-neutral-400 mb-6">
                    Remplissez ce formulaire et notre équipe technique traitera votre demande immédiatement.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                        Votre Nom & Prénom *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ex: Mohamed Ahmed"
                        className="w-full bg-neutral-900/80 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#630000]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                        Votre Email Professionnel *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="m.ahmed@entreprise.dj"
                        className="w-full bg-neutral-900/80 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#630000]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                        Numéro de Téléphone
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+253 77 ..."
                        className="w-full bg-neutral-900/80 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#630000]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                        Objet de votre demande *
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full bg-neutral-900/80 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#630000]"
                      >
                        <option value="Intégration ERP Odoo">Intégration ERP Odoo</option>
                        <option value="Migration & Architecture Cloud">Migration & Architecture Cloud</option>
                        <option value="Développement Logiciel sur-mesure">Développement Logiciel sur-mesure</option>
                        <option value="Cybersécurité & Réseaux">Cybersécurité & Réseaux</option>
                        <option value="Intelligence Artificielle & RPA">Intelligence Artificielle & RPA</option>
                        <option value="Partenariat ou Autre">Partenariat ou Autre</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                      Détails de votre message ou projet *
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Expliquez-nous brièvement votre besoin, vos objectifs et vos contraintes..."
                      className="w-full bg-neutral-900/80 border border-white/15 rounded-xl p-3.5 text-xs text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#630000]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="btn-primary w-full py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Envoyer le Message</span>
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
