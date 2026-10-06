import React from 'react';
import { ArrowRight, MapPin, CheckCircle2 } from 'lucide-react';
import { IMAGES } from '../assets/images';
import { COMPANY_INFO } from '../data/companyData';

interface HeroProps {
  onExploreProducts?: () => void;
  onContactUs?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProducts, onContactUs }) => {
  const handleScroll = (id: string, callback?: () => void) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    if (callback) {
      callback();
    }
  };

  return (
    <section id="top" className="relative min-h-[640px] lg:min-h-[720px] flex items-center bg-slate-950 text-white overflow-hidden">
      {/* Background Image with Measured Contrast Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.hero}
          alt="Bosch Pharmaceuticals Research & Laboratory Facility"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        {/* Deep blue and charcoal pharmaceutical overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-blue-950/70" />
        <div className="absolute inset-0 bg-radial-at-t from-blue-900/20 via-transparent to-black/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="max-w-3xl">
          {/* Subtle Location & Focus Kicker (Unboxed plain metadata with separator) */}
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-300 mb-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>Karachi, Pakistan</span>
            </span>
            <span aria-hidden="true" className="text-slate-500">·</span>
            <span>Korangi Industrial Area</span>
            <span aria-hidden="true" className="text-slate-500">·</span>
            <span className="text-emerald-400">Pharmaceutical Manufacturer</span>
          </div>

          {/* Primary Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6 text-balance">
            {COMPANY_INFO.tagline}
          </h1>

          {/* Supporting Text */}
          <p className="text-lg sm:text-xl text-slate-200 leading-relaxed font-normal mb-10 max-w-2xl">
            {COMPANY_INFO.subheadline}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
            <button
              type="button"
              onClick={() => handleScroll('products', onExploreProducts)}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors shadow-md hover:shadow-lg whitespace-nowrap focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              <span>Explore Our Products</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => handleScroll('contact', onContactUs)}
              className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg backdrop-blur-xs transition-colors whitespace-nowrap focus:outline-hidden focus-visible:ring-2 focus-visible:ring-white"
            >
              Contact Us
            </button>
          </div>

          {/* Trust Guiding Attributes - Clean horizontal line with indicators */}
          <div className="pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-medium text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Uncompromising Quality Standards</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Reliable Formulation Safety</span>
            </div>
            <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Patient-Centric Care</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
