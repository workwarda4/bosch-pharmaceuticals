import React from 'react';
import { ShieldCheck, HeartHandshake, Briefcase, Users, TrendingUp, Award } from 'lucide-react';
import { WHY_CHOOSE_US_ITEMS } from '../data/companyData';

export const WhyChooseUs: React.FC = () => {
  const icons = [
    ShieldCheck,
    HeartHandshake,
    Briefcase,
    Users,
    TrendingUp,
    Award,
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-900 mb-2">
            Institutional Values
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4 text-balance">
            Why Healthcare Partners Trust Bosch Pharmaceuticals
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Our steadfast dedication to healthcare integrity, disciplined production standards, and collaborative customer service distinguishes our presence in Pakistan's pharmaceutical landscape.
          </p>
        </div>

        {/* Feature Cards Grid (6 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {WHY_CHOOSE_US_ITEMS.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={item.title}
                className="group p-7 rounded-2xl bg-slate-50/70 border border-slate-200/90 hover:bg-white hover:border-blue-400 hover:shadow-md transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-100/80 text-blue-900 group-hover:bg-blue-900 group-hover:text-white flex items-center justify-center mb-5 transition-colors duration-200">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2.5">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
