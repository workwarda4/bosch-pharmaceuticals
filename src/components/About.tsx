import React from 'react';
import { ShieldCheck, HeartPulse, Sparkles, Award, Repeat, FileCheck2, MapPin } from 'lucide-react';
import { IMAGES } from '../assets/images';
import { COMPANY_INFO } from '../data/companyData';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: ShieldCheck,
      title: "Quality",
      description: "Rigorous attention to chemical purity, formulation stability, and uncompromising specifications in every batch."
    },
    {
      icon: HeartPulse,
      title: "Patient Well-Being",
      description: "Dedicated to enhancing health outcomes by ensuring therapeutic treatments are safe, reliable, and accessible."
    },
    {
      icon: Award,
      title: "Pharmaceutical Excellence",
      description: "Adherence to disciplined pharmaceutical methodologies, controlled processes, and scientific precision."
    },
    {
      icon: FileCheck2,
      title: "Professional Standards",
      description: "Upholding high ethical responsibility, strict operating hygiene, and thorough technical oversight."
    },
    {
      icon: Repeat,
      title: "Continuous Improvement",
      description: "Regular refinement of operational procedures, quality controls, and packaging safeguards."
    },
    {
      icon: Sparkles,
      title: "Reliability",
      description: "Consistent delivery of dependable healthcare solutions that healthcare professionals and patients can rely on."
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-900 mb-2">
            About Bosch Pharmaceuticals
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4 text-balance">
            Delivering Healthcare Solutions with Integrity & Reliability
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Based in Karachi, Pakistan, Bosch Pharmaceuticals is a healthcare-focused pharmaceutical organization dedicated to formulating and delivering dependable medical products. We place therapeutic quality and patient trust at the core of everything we do.
          </p>
        </div>

        {/* Narrative & Image Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          <div className="lg:col-span-6 space-y-6 text-slate-600 leading-relaxed text-sm sm:text-base">
            <p>
              In modern healthcare, consistency and dependable medicine formulation are critical. At Bosch Pharmaceuticals, our operations in the Korangi Industrial Area of Karachi are shaped by a deep commitment to patient well-being and pharmaceutical excellence.
            </p>
            <p>
              Every stage of our process—from incoming material inspection to controlled formulation, packaging, and dispatch—is structured around professional standards and continuous quality vigilance. We believe reliable healthcare begins with disciplined science and honest stewardship.
            </p>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
              <MapPin className="w-5 h-5 text-blue-900 shrink-0 mt-0.5" />
              <div className="text-xs text-slate-700 leading-normal">
                <span className="font-semibold text-slate-900 block mb-0.5">Corporate Operations:</span>
                {COMPANY_INFO.address.full}
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md">
              <img
                src={IMAGES.about}
                alt="Bosch Pharmaceuticals Corporate and Research Environment"
                className="w-full h-auto aspect-4/3 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-6">
                <div className="text-white text-xs font-medium">
                  <span className="font-semibold block text-sm">Healthcare Commitment</span>
                  Operating with disciplined pharmaceutical standards in Karachi, Pakistan.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Pillars Grid */}
        <div>
          <div className="mb-8">
            <h3 className="text-xl font-bold text-slate-900">
              Our Core Commitments
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Guiding principles that steer our pharmaceutical operations every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="p-6 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-blue-300 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-100/70 text-blue-900 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
