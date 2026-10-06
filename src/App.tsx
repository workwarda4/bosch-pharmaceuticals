/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Products } from './components/Products';
import { Quality } from './components/Quality';
import { Manufacturing } from './components/Manufacturing';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [inquirySubject, setInquirySubject] = useState<string>('');

  const handleSelectForInquiry = (productName: string) => {
    setInquirySubject(productName);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      {/* 1. Sticky Navigation Bar */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero
          onExploreProducts={() => {}}
          onContactUs={() => {}}
        />

        {/* 3. About Bosch Pharmaceuticals */}
        <About />

        {/* 4. Products & Therapeutic Portfolios */}
        <Products onSelectForInquiry={handleSelectForInquiry} />

        {/* 5. Quality Assurance & Standards */}
        <Quality />

        {/* 6. Pharmaceutical Manufacturing */}
        <Manufacturing />

        {/* 7. Why Choose Us / Institutional Values */}
        <WhyChooseUs />

        {/* 8. Verified Contact & Embedded Map */}
        <Contact prefillSubject={inquirySubject} />
      </main>

      {/* 9. Corporate Dark Blue Footer */}
      <Footer />
    </div>
  );
}
