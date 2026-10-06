import React from 'react';
import { ShieldCheck, CheckCircle2, FlaskConical, ClipboardCheck, Microscope, Sparkles } from 'lucide-react';
import { IMAGES } from '../assets/images';
import { QUALITY_PILLARS } from '../data/companyData';

export const Quality: React.FC = () => {
  const qualityProtocols = [
    {
      icon: FlaskConical,
      title: "Analytical Testing",
      desc: "Comprehensive laboratory testing of raw components and finished products to confirm purity and therapeutic potency."
    },
    {
      icon: Microscope,
      title: "Batch Uniformity",
      desc: "Continuous physical and chemical profiling to ensure consistent weight, disintegration, and stability across every unit."
    },
    {
      icon: ClipboardCheck,
      title: "Documented Traceability",
      desc: "Full batch records and material auditing from procurement to finished product distribution."
    },
    {
      icon: ShieldCheck,
      title: "Stringent Hygiene & Controls",
      desc: "Monitored environmental cleanliness, sanitization routines, and controlled cleanroom air parameters."
    }
  ];

  return (
    <section id="quality" className="py-20 lg:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-900 mb-2">
            Quality Assurance & Excellence
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4 text-balance">
            Uncompromising Standards for Patient Safety
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            At Bosch Pharmaceuticals, product quality is not merely a stage in production—it is the governing principle of our entire enterprise. Every pharmaceutical process is engineered for safety, consistency, and professional reliability.
          </p>
        </div>

        {/* Hero Visual & Quality Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          {/* Quality Visual with Subdued Border */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md">
              <img
                src={IMAGES.quality}
                alt="Bosch Pharmaceuticals Quality Control Laboratory Testing"
                className="w-full h-auto aspect-4/3 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent flex items-end p-6">
                <div className="text-white text-xs font-medium">
                  <span className="font-semibold block text-sm">Quality Control Laboratory</span>
                  Rigorous analytical sampling, purity verification, and strict operating protocols.
                </div>
              </div>
            </div>
          </div>

          {/* Core Quality Values */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 leading-snug">
              Built on Discipline, Verified by Science
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Our quality assurance framework oversees raw material quarantine, formulation parameters, in-process testing, and secure packaging release. We maintain rigorous standards to ensure healthcare providers and patients receive trustworthy medicinal solutions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {QUALITY_PILLARS.slice(0, 4).map((item) => (
                <div key={item.title} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="flex items-center gap-2 mb-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="text-sm font-bold text-slate-900">{item.title}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quality Protocols Grid */}
        <div className="pt-10 border-t border-slate-100">
          <div className="max-w-2xl mb-8">
            <h3 className="text-xl font-bold text-slate-900">
              Our Quality Oversight System
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Key operational safeguards embedded throughout our pharmaceutical workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualityProtocols.map((protocol) => {
              const Icon = protocol.icon;
              return (
                <div
                  key={protocol.title}
                  className="p-5 rounded-xl border border-slate-200/80 bg-slate-50/50 hover:bg-slate-50 transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-900 flex items-center justify-center mb-3">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1.5">
                    {protocol.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {protocol.desc}
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
