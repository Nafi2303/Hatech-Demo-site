import React from 'react';
import { X, Calendar, Clock, User, ArrowRight, BookOpen, Sparkles } from 'lucide-react';
import { blogPosts } from '../data/siteData';
import { BlogPost } from '../types';

interface BlogModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectArticleForDemo?: (title: string) => void;
}

export const BlogModal: React.FC<BlogModalProps> = ({ isOpen, onClose, onSelectArticleForDemo }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative glass-card border border-white/20 rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto z-10 shadow-2xl p-6 sm:p-10 backdrop-blur-2xl">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-[11px] font-bold text-[#e25c5c] uppercase tracking-wider mb-2">
              <BookOpen className="w-3.5 h-3.5" />
              <span>HATECH Insights & Actualités</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Blog & Publications Technologiques
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Articles List */}
        <div className="space-y-6">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="p-6 rounded-2xl bg-black/50 border border-white/10 hover:border-white/25 transition-all space-y-3"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-neutral-400">
                <span className="px-2.5 py-0.5 rounded-full bg-[#630000]/60 text-white font-bold text-[10px] uppercase">
                  {post.category}
                </span>
                <div className="flex items-center gap-4 text-[11px]">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                {post.title}
              </h3>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {post.summary}
              </p>

              <div className="flex items-center justify-between pt-2 text-xs">
                <span className="text-neutral-400 flex items-center gap-1.5 font-medium">
                  <User className="w-3.5 h-3.5 text-[#e25c5c]" />
                  {post.author}
                </span>
                <button
                  onClick={() => {
                    onClose();
                    if (onSelectArticleForDemo) onSelectArticleForDemo(post.title);
                  }}
                  className="text-[#e25c5c] hover:text-white font-bold transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>Discuter de cette solution</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Footer */}
        <div className="mt-8 pt-6 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="btn-secondary px-6 py-2.5 rounded-xl text-xs font-bold cursor-pointer"
          >
            Fermer
          </button>
        </div>

      </div>
    </div>
  );
};
