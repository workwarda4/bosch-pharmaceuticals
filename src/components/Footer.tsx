import React from 'react';
import { MapPin, Phone, ArrowUp, Shield } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#top' },
    { name: 'About Us', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Quality & Excellence', href: '#quality' },
    { name: 'Manufacturing', href: '#manufacturing' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    const id = href.replace('#', '');
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-slate-800">
          {/* Brand & Corporate Description */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-blue-800 flex items-center justify-center text-white shadow-xs">
                <span className="font-extrabold text-lg tracking-tighter">B</span>
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 ml-0.5 mb-2"></div>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Bosch Pharmaceuticals
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              A healthcare-focused pharmaceutical organization based in Karachi, Pakistan. Committed to quality manufacturing, formulation integrity, and patient health.
            </p>

            <div className="text-xs text-slate-400 pt-2">
              <span className="text-emerald-400 font-semibold">Core Focus:</span> Committed to Quality Healthcare
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(link.href, e)}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Corporate Headquarters
            </h4>

            <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400 leading-relaxed">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                {COMPANY_INFO.address.plot}, {COMPANY_INFO.address.sector}, {COMPANY_INFO.address.city}, {COMPANY_INFO.address.postalCode}, {COMPANY_INFO.address.country}
              </span>
            </div>

            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-400 pt-2">
              <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
              <div>
                <span className="text-xs text-slate-500 block">Telephone:</span>
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="font-semibold text-white hover:text-blue-300 transition-colors"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright and Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Bosch Pharmaceuticals. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-slate-400">
              Sector 23, Korangi Industrial Area, Karachi, Pakistan
            </span>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors border border-slate-800"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
