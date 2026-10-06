import React from 'react';
import { X, Check, ArrowRight, ShieldCheck, Pill, Sparkles } from 'lucide-react';
import { ProductItem } from '../data/companyData';

interface ProductModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onInquire: (product: ProductItem) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, onInquire }) => {
  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-product-title"
      >
        {/* Header */}
        <div className="bg-slate-900 text-white p-6 relative">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="text-xs font-semibold text-blue-300 uppercase tracking-wider mb-1">
            {product.category}
          </div>
          <h3 id="modal-product-title" className="text-xl sm:text-2xl font-bold tracking-tight text-white">
            {product.title}
          </h3>
          <div className="text-xs text-slate-300 mt-1 flex items-center gap-2">
            <Pill className="w-3.5 h-3.5 text-emerald-400" />
            <span>Category: {product.dosageForm}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5 max-h-[75vh] overflow-y-auto">
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              Portfolio Overview
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="p-3.5 bg-blue-50/70 rounded-xl border border-blue-100 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-blue-800 shrink-0 mt-0.5" />
            <div className="text-xs text-blue-900 leading-relaxed">
              <span className="font-semibold block">Quality Assurance Note:</span>
              Manufactured under strict in-house quality protocols. Specific active pharmaceutical ingredients and therapeutic indications are supplied upon formal medical inquiry.
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
              Key Quality Specifications
            </h4>
            <ul className="space-y-2.5">
              {product.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-100 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
          >
            Close
          </button>

          <button
            type="button"
            onClick={() => {
              onInquire(product);
              onClose();
            }}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-900 hover:bg-blue-800 rounded-lg transition-colors shadow-xs"
          >
            <span>Inquire About This Portfolio</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
