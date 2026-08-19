import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Phone, Sparkles, Layers, ArrowRight } from 'lucide-react';
import { siteInfo } from '../data/siteData';

interface NavbarProps {
  onOpenDemo: (solutionOrService?: string) => void;
  onOpenBlog?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemo, onOpenBlog }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'apropos', 'transformation', 'solutions', 'odoo', 'secteurs', 'services', 'chiffres', 'temoignages', 'odoo-partner'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'apropos', label: 'À propos' },
    { id: 'solutions', label: 'Solutions' },
    { id: 'services', label: 'Services' },
    { id: 'secteurs', label: 'Secteurs' },
    { id: 'blog', label: 'Blog', isAction: true },
  ];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleNavClick = (item: { id: string; label: string; isAction?: boolean }) => {
    if (item.isAction && onOpenBlog) {
      setMobileMenuOpen(false);
      onOpenBlog();
    } else {
      scrollToSection(item.id);
    }
  };

  return (
    <header
      id="hatech-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-navbar py-3 shadow-lg shadow-black/50'
          : 'bg-black/40 backdrop-blur-md py-4 sm:py-5 border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo HATECH */}
          <a
            id="nav-logo-hatech"
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('hero');
            }}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#630000] via-[#8a0b0b] to-[#400000] p-0.5 shadow-lg shadow-[#630000]/40 border border-white/20 flex items-center justify-center transition-transform group-hover:scale-105">
              <div className="w-full h-full bg-neutral-950/90 rounded-[10px] flex items-center justify-center">
                <span className="font-black text-lg text-white tracking-wider flex items-center">
                  H<span className="text-[#e25c5c]">A</span>
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-tight text-white flex items-center gap-1.5 leading-tight">
                HATECH <span className="text-[11px] font-bold px-1.5 py-0.5 rounded bg-[#630000] text-white uppercase tracking-wider">Odoo Partner</span>
              </span>
              <span className="text-[10px] tracking-widest text-neutral-400 font-semibold uppercase">
                Horn Africa Technology
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-black/40 px-3 py-1.5 rounded-full border border-white/10 shadow-inner backdrop-blur-md">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-item-${item.id}`}
                  onClick={() => handleNavClick(item)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#630000] text-white shadow-md shadow-[#630000]/50'
                      : 'text-neutral-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* CTA [Demander une démo] */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              id="nav-btn-demo"
              onClick={() => onOpenDemo()}
              className="btn-primary px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer"
            >
              <span>Demander une démo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              id="mobile-nav-demo-btn"
              onClick={() => onOpenDemo()}
              className="sm:hidden btn-primary px-3 py-1.5 rounded-lg text-xs font-bold"
            >
              Démo
            </button>
            <button
              id="mobile-nav-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-neutral-900/80 border border-white/15 text-neutral-200"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-black/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl p-6 transition-all duration-300">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item)}
                className={`text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                  activeSection === item.id
                    ? 'bg-[#630000] text-white'
                    : 'text-neutral-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}

            <div className="pt-4 border-t border-white/10 mt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDemo();
                }}
                className="w-full btn-primary py-3 rounded-xl text-xs font-bold text-center uppercase tracking-wider cursor-pointer"
              >
                Demander une Démo Gratuite
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
