import React, { useState } from 'react';
import { Pill, ArrowRight, Info, Check, Filter } from 'lucide-react';
import { PRODUCT_CATEGORIES, PRODUCTS_DATA, ProductItem } from '../data/companyData';
import { ProductModal } from './ProductModal';

interface ProductsProps {
  onSelectForInquiry?: (productName: string) => void;
}

export const Products: React.FC<ProductsProps> = ({ onSelectForInquiry }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Solutions');
  const [activeModalProduct, setActiveModalProduct] = useState<ProductItem | null>(null);

  const filteredProducts = selectedCategory === 'All Solutions'
    ? PRODUCTS_DATA
    : PRODUCTS_DATA.filter((p) => p.category === selectedCategory);

  const handleInquire = (product: ProductItem) => {
    if (onSelectForInquiry) {
      onSelectForInquiry(`${product.category} - ${product.title}`);
    }
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="products" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-900 mb-2">
            Pharmaceutical Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4 text-balance">
            Our Healthcare & Therapeutic Categories
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Discover our pharmaceutical solution categories designed to address key therapeutic areas. Each category is managed under stringent quality assurance and formulation reliability.
          </p>
        </div>

        {/* Factual Disclaimer Card */}
        <div className="mb-10 p-4 bg-white rounded-xl border border-slate-200/90 shadow-2xs flex items-start gap-3.5 max-w-3xl">
          <Info className="w-5 h-5 text-blue-900 shrink-0 mt-0.5" />
          <div className="text-xs text-slate-600 leading-relaxed">
            <span className="font-semibold text-slate-900 block mb-0.5">Corporate Portfolio Notice:</span>
            In compliance with healthcare communication standards, specific product formulations, batch availability, and specialized therapeutic catalogs are shared directly with authorized medical practitioners, hospitals, and pharmacies upon formal inquiry.
          </div>
        </div>

        {/* Category Filters (Segmented Functional Button Controls) */}
        <div className="flex flex-wrap items-center gap-2 mb-10 p-1.5 bg-slate-200/70 rounded-xl max-w-max">
          {PRODUCT_CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600 ${
                  isActive
                    ? 'bg-blue-900 text-white shadow-xs'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-white/60'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl border border-slate-200/90 p-6 flex flex-col justify-between hover:shadow-md hover:border-blue-300 transition-all duration-200"
            >
              <div>
                {/* Clean Unboxed Metadata with Typographic Separator */}
                <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-3">
                  <span className="text-blue-900 font-semibold">{product.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{product.dosageForm}</span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                  {product.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                  {product.description}
                </p>

                <div className="pt-4 border-t border-slate-100 mb-6">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                    Key Highlights
                  </span>
                  <ul className="space-y-1.5">
                    {product.features.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setActiveModalProduct(product)}
                  className="text-xs font-semibold text-blue-900 hover:text-blue-800 transition-colors"
                >
                  Learn More
                </button>

                <button
                  type="button"
                  onClick={() => handleInquire(product)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-900 hover:bg-blue-800 rounded-lg transition-colors whitespace-nowrap shadow-2xs"
                >
                  <span>Inquire</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Details & Inquiry Modal */}
      <ProductModal
        product={activeModalProduct}
        onClose={() => setActiveModalProduct(null)}
        onInquire={handleInquire}
      />
    </section>
  );
};
