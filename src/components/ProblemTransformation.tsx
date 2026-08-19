import React from 'react';
import { transformationPoints } from '../data/siteData';
import { 
  FileSpreadsheet, 
  AlertTriangle, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Zap,
  TrendingUp
} from 'lucide-react';

interface ProblemTransformationProps {
  onOpenDemo: () => void;
}

export const ProblemTransformation: React.FC<ProblemTransformationProps> = ({ onOpenDemo }) => {
  const getProblemIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileSpreadsheet': return <FileSpreadsheet className="w-6 h-6 text-amber-400" />;
      case 'AlertTriangle': return <AlertTriangle className="w-6 h-6 text-red-400" />;
      case 'Layers': return <Layers className="w-6 h-6 text-orange-400" />;
      default: return <FileSpreadsheet className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <section id="transformation" className="py-24 relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-4 border border-white/10">
            <Zap className="w-3.5 h-3.5 text-[#e25c5c]" />
            <span>Du Chaos Opérationnel à la Maîtrise Numérique</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 leading-tight">
            Les Freins de votre Croissance vs. La Puissance HATECH
          </h2>

          <p className="text-neutral-200 text-base sm:text-lg leading-relaxed">
            La plupart des entreprises perdent jusqu'à 30% de leur temps dans des tâches manuelles non synchronisées. Voici comment nous transformons votre quotidien.
          </p>
        </div>

        {/* 3 Transformation Comparisons */}
        <div className="space-y-6 max-w-5xl mx-auto mb-14">
          {transformationPoints.map((item, index) => (
            <div
              key={item.id}
              id={`transfo-card-${index}`}
              className="glass-card p-6 sm:p-8 rounded-3xl border border-white/15 relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-6 items-center hover:border-white/25 transition-all"
            >
              {/* Problem (Left) */}
              <div className="lg:col-span-5 p-5 rounded-2xl bg-red-950/20 border border-red-500/20">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-xl bg-red-500/10 border border-red-500/30 shrink-0">
                    {getProblemIcon(item.problemIcon)}
                  </div>
                  <span className="text-[11px] font-bold text-red-300 uppercase tracking-wider">
                    Avant • Le Problème
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-1.5">
                  {item.problemTitle}
                </h3>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  {item.problemDesc}
                </p>
              </div>

              {/* Transformation Indicator (Center) */}
              <div className="lg:col-span-2 flex justify-center items-center py-2 lg:py-0">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#630000] border-2 border-white/20 text-white shadow-xl shadow-[#630000]/50 rotate-90 lg:rotate-0">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>

              {/* Solution HATECH (Right) */}
              <div className="lg:col-span-5 p-5 rounded-2xl bg-[#630000]/25 border border-[#630000]/50 shadow-inner">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-xl bg-[#630000]/40 border border-[#630000]/60 shrink-0 text-[#e25c5c]">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold text-[#e25c5c] uppercase tracking-wider">
                    Avec HATECH • Transformation
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-1.5">
                  {item.solutionTitle}
                </h3>
                <p className="text-xs text-neutral-200 leading-relaxed">
                  {item.solutionDesc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <div className="text-base font-bold text-white mb-1">
              Passez à l'action dès aujourd'hui
            </div>
            <div className="text-xs text-neutral-300">
              Nos consultants analysent vos flux de travail et vous proposent un plan de transformation sous 48h.
            </div>
          </div>
          <button
            onClick={onOpenDemo}
            className="btn-primary px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer shrink-0"
          >
            <span>Lancer la transformation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
