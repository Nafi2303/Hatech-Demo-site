import React, { useState, useEffect } from 'react';
import { X, Check, ArrowRight, ArrowLeft, Send, Sparkles, ShieldCheck, Calculator, Clock, Building } from 'lucide-react';
import { QuoteFormData } from '../types';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, initialService }) => {
  const [step, setStep] = useState<number>(1);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState<QuoteFormData>({
    service: initialService || 'Intégration & Personnalisation Odoo ERP',
    organizationType: 'PME / Entreprise Privée',
    timeline: '1 à 3 mois',
    budgetRange: 'Standard',
    name: '',
    email: '',
    phone: '',
    company: '',
    details: ''
  });

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  if (!isOpen) return null;

  const servicesList = [
    'Odoo ERP Enterprise (Ventes, Stocks, Compta)',
    'RH & Paie Automatisée (Conforme CNSS)',
    'Biométrie & Contrôle d\'Accès Connecté',
    'Transit & Douane Maritime (Corridor Portuaire)',
    'Santé & Dossier Médical Informatisé',
    'Éducation & Gestion Scolaire / Campus',
    'Fintech & Intégration Mobile Money (D-Money/Waafi)',
    'Cloud Computing & Migration AWS/Azure',
    'Développement Logiciel & Mobile Sur-Mesure',
    'Infrastructure Réseau & Cybersécurité'
  ];

  const orgTypes = [
    'PME / Entreprise Privée',
    'Grande Entreprise / Groupe',
    'Institution Publique / Ministère',
    'Startup / Fintech / E-commerce',
    'ONG / Organisation Internationale'
  ];

  const timelines = [
    'Urgent (< 1 mois)',
    '1 à 3 mois',
    '3 à 6 mois',
    'Phase exploratoire / Cadrage'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="glass-card max-w-2xl w-full p-6 sm:p-10 rounded-3xl border border-white/20 relative shadow-2xl overflow-y-auto max-h-[92vh]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-neutral-900 border border-white/10 text-neutral-400 hover:text-white transition-colors"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-[#630000] text-white flex items-center justify-center mx-auto mb-6 shadow-xl shadow-[#630000]/40">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-extrabold text-white mb-2">
              Demande de Devis Enregistrée !
            </h3>
            <p className="text-neutral-300 text-sm leading-relaxed max-w-md mx-auto mb-6">
              Merci <strong className="text-white">{formData.name}</strong>. Nos ingénieurs d'affaires et consultants à Djibouti étudient votre dossier pour le projet :
              <br />
              <span className="text-[#e25c5c] font-semibold">{formData.service}</span>.
              <br />
              Un devis technique détaillé vous sera transmis sous <strong>24 à 48 heures</strong>.
            </p>

            <div className="glass-card p-4 rounded-xl max-w-md mx-auto mb-8 text-left text-xs text-neutral-300 space-y-1.5">
              <div><strong>Email :</strong> {formData.email}</div>
              <div><strong>Téléphone :</strong> {formData.phone}</div>
              <div><strong>Organisation :</strong> {formData.company || 'Non spécifié'}</div>
              <div><strong>Délai visé :</strong> {formData.timeline}</div>
            </div>

            <button
              onClick={handleReset}
              className="btn-primary px-8 py-3 rounded-xl text-xs font-bold uppercase tracking-wider cursor-pointer"
            >
              Fermer et retourner au site
            </button>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-pill text-[11px] font-semibold text-[#e25c5c] uppercase tracking-wider mb-2">
                <Calculator className="w-3.5 h-3.5" />
                <span>Simulateur & Demande de Devis</span>
              </div>
              <h3 className="text-2xl font-extrabold text-white tracking-tight">
                Estimer votre Projet Technologique
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                Étape {step} sur 3 • Sans engagement et réponse sous 24h
              </p>
            </div>

            {/* Stepper Progress Bar */}
            <div className="grid grid-cols-3 gap-2 mb-8">
              <div className={`h-1.5 rounded-full transition-all ${step >= 1 ? 'bg-[#630000]' : 'bg-neutral-800'}`} />
              <div className={`h-1.5 rounded-full transition-all ${step >= 2 ? 'bg-[#630000]' : 'bg-neutral-800'}`} />
              <div className={`h-1.5 rounded-full transition-all ${step >= 3 ? 'bg-[#630000]' : 'bg-neutral-800'}`} />
            </div>

            {/* Step 1: Solution & Type */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-3">
                    1. Choisissez le domaine d'intervention principal *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {servicesList.map((srv, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setFormData({ ...formData, service: srv })}
                        className={`p-3.5 rounded-xl text-left text-xs font-semibold border transition-all cursor-pointer ${
                          formData.service === srv
                            ? 'bg-[#630000]/25 border-[#630000] text-white shadow-md shadow-[#630000]/30'
                            : 'bg-neutral-900/60 border-white/10 text-neutral-300 hover:border-white/20'
                        }`}
                      >
                        {srv}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-3">
                    2. Type de votre organisation *
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {orgTypes.map((org, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setFormData({ ...formData, organizationType: org })}
                        className={`px-3.5 py-2 rounded-xl text-xs font-medium border transition-all cursor-pointer ${
                          formData.organizationType === org
                            ? 'bg-[#630000] border-[#630000] text-white'
                            : 'bg-neutral-900/60 border-white/10 text-neutral-400 hover:text-white'
                        }`}
                      >
                        {org}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="btn-primary px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer"
                  >
                    <span>Continuer (Étape 2)</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Timeline & Requirements */}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-3">
                    Délai de réalisation souhaité *
                  </label>
                  <div className="grid grid-cols-2 gap-2.5">
                    {timelines.map((time, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setFormData({ ...formData, timeline: time })}
                        className={`p-3 rounded-xl text-xs font-medium border transition-all cursor-pointer text-center ${
                          formData.timeline === time
                            ? 'bg-[#630000] border-[#630000] text-white'
                            : 'bg-neutral-900/60 border-white/10 text-neutral-300 hover:border-white/20'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                    Précisions ou besoins spécifiques (Optionnel)
                  </label>
                  <textarea
                    rows={4}
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    placeholder="Ex: Nombre d'utilisateurs ERP, modules prioritaires (Stocks, Ventes, Paie), volume de données à migrer, localisation..."
                    className="w-full bg-neutral-900/80 border border-white/15 rounded-xl p-3 text-xs text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#630000]"
                  />
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="btn-secondary-dark px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Retour</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="btn-primary px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer"
                  >
                    <span>Continuer vers vos coordonnées</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Contact Info & Submission */}
            {step === 3 && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ex: Abdourahman Ali"
                      className="w-full bg-neutral-900/80 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#630000]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                      Entreprise / Organisation *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Ex: Société Maritime & Transit"
                      className="w-full bg-neutral-900/80 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#630000]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                      Adresse Email Professionnelle *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="nom@entreprise.com"
                      className="w-full bg-neutral-900/80 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#630000]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                      Numéro de Téléphone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+253 77 ... / +212 ..."
                      className="w-full bg-neutral-900/80 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#630000]"
                    />
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-neutral-900/70 border border-white/10 text-[11px] text-neutral-400 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#e25c5c] shrink-0" />
                  <span>Vos données sont strictement confidentielles et ne seront jamais partagées à des tiers.</span>
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="btn-secondary-dark px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Retour</span>
                  </button>

                  <button
                    type="submit"
                    className="btn-primary px-7 py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Envoyer la demande de devis</span>
                  </button>
                </div>
              </form>
            )}

          </div>
        )}

      </div>
    </div>
  );
};
