import React from 'react';
import { Factory, Wind, ShieldAlert, Cpu, ArrowUpRight } from 'lucide-react';
import { IMAGES } from '../assets/images';
import { MANUFACTURING_STEPS } from '../data/companyData';

export const Manufacturing: React.FC = () => {
  return (
    <section id="manufacturing" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-900 mb-2">
            Pharmaceutical Manufacturing
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4 text-balance">
            Disciplined Manufacturing & Controlled Environments
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Located in the Korangi Industrial Area of Karachi, our pharmaceutical manufacturing operations are structured around precision formulating, cleanroom discipline, and strict contamination safeguards.
          </p>
        </div>

        {/* Narrative & Visual Feature */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          <div className="lg:col-span-6 space-y-6 text-slate-600 leading-relaxed text-sm sm:text-base">
            <p>
              Dependable pharmaceuticals demand an environment of uncompromising cleanliness and technical vigilance. Every formulation batch is prepared under regulated atmospheric parameters with air filtration, precise humidity monitoring, and sterile surfaces.
            </p>
            <p>
              Our manufacturing protocols focus on repeatable precision: minimizing human variability through defined standard operating procedures, routine equipment calibration, and vigilant environmental monitoring.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-slate-200">
                <Wind className="w-5 h-5 text-blue-900 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                    Controlled Atmospheric Cleanrooms
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Continuous environmental monitoring maintains clean air quality and optimal temperature conditions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-slate-200">
                <ShieldAlert className="w-5 h-5 text-blue-900 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                    Contamination Prevention
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Gowning protocols, air locks, and strict segregation prevent cross-contamination during handling.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md">
              <img
                src={IMAGES.manufacturing}
                alt="Pharmaceutical Manufacturing Cleanroom and Automated Packaging"
                className="w-full h-auto aspect-4/3 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent flex items-end p-6">
                <div className="text-white text-xs font-medium">
                  <span className="font-semibold block text-sm">Manufacturing Operations</span>
                  Systematic pharmaceutical processing under strict environmental and quality controls.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Manufacturing Flow Steps */}
        <div>
          <div className="mb-8">
            <h3 className="text-xl font-bold text-slate-900">
              Our Process Methodology
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              From raw material intake to final batch release, our four-step operating discipline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {MANUFACTURING_STEPS.map((step) => (
              <div
                key={step.step}
                className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between hover:border-blue-300 transition-colors"
              >
                <div>
                  <div className="text-2xl font-extrabold text-blue-900 font-mono tracking-tight mb-3">
                    {step.step}
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
