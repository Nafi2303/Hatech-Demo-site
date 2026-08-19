import React, { useState } from 'react';
import { testimonialsData } from '../data/siteData';
import { Star, MessageSquareQuote, ChevronLeft, ChevronRight, CheckCircle, Building } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <section id="temoignages" className="py-24 relative overflow-hidden bg-black/15 backdrop-blur-[2px] border-t border-white/10">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-[#630000]/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-4 border border-white/10">
            <MessageSquareQuote className="w-3.5 h-3.5 text-[#e25c5c]" />
            <span>Retours d'Expérience & Témoignages</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 leading-tight">
            La Confiance de nos Clients et Partenaires
          </h2>

          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
            Découvrez comment Horn Africa Tech accompagne la réussite des institutions et des acteurs économiques majeurs de la région.
          </p>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {testimonialsData.map((item, index) => {
            const isHighlighted = index === activeIndex;
            return (
              <div
                key={item.id}
                id={`testimonial-card-${item.id}`}
                onClick={() => setActiveIndex(index)}
                className={`glass-card p-8 rounded-3xl flex flex-col justify-between cursor-pointer transition-all duration-300 ${
                  isHighlighted
                    ? 'border-[#630000]/60 shadow-xl shadow-[#630000]/20 bg-neutral-900/80 transform -translate-y-1'
                    : 'hover:border-white/20'
                }`}
              >
                <div>
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 text-amber-400 mb-5">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Project Tag */}
                  <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#630000]/25 text-[#e25c5c] border border-[#630000]/40 mb-4">
                    {item.projectType}
                  </span>

                  {/* Content Quote */}
                  <p className="text-neutral-200 text-sm sm:text-base leading-relaxed italic mb-6">
                    "{item.content}"
                  </p>
                </div>

                {/* Client Info */}
                <div className="flex items-center gap-3.5 pt-4 border-t border-white/10">
                  <img
                    src={item.avatarUrl}
                    alt={item.clientName}
                    className="w-11 h-11 rounded-full object-cover border-2 border-white/20"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <div className="text-sm font-bold text-white leading-tight">
                      {item.clientName}
                    </div>
                    <div className="text-xs text-neutral-400 font-medium">
                      {item.role}
                    </div>
                    <div className="text-[11px] text-[#e25c5c] font-semibold flex items-center gap-1 mt-0.5">
                      <Building className="w-3 h-3" />
                      <span>{item.company} • {item.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Dots for Mobile / Tablet */}
        <div className="flex justify-center items-center gap-3">
          <button
            onClick={prevTestimonial}
            className="p-2.5 rounded-xl glass-card text-neutral-300 hover:text-white hover:border-white/30 transition-colors"
            aria-label="Précédent"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          
          <div className="flex items-center gap-2">
            {testimonialsData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === activeIndex ? 'w-8 bg-[#630000]' : 'w-2 bg-neutral-700'
                }`}
                aria-label={`Témoignage ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="p-2.5 rounded-xl glass-card text-neutral-300 hover:text-white hover:border-white/30 transition-colors"
            aria-label="Suivant"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
