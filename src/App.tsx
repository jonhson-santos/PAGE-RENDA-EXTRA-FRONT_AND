import React from 'react';
import Hero from './components/Hero';
import PainSection from './components/PainSection';
import PromiseSection from './components/PromiseSection';
import ProductSection from './components/ProductSection';
import DreamSection from './components/DreamSection';
import ObjectionSection from './components/ObjectionSection';
import TestimonialsSection from './components/TestimonialsSection';
import GuaranteeSection from './components/GuaranteeSection';
import OfferSection from './components/OfferSection';
import FinalCTA from './components/FinalCTA';

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Hero />
      <PainSection />
      <PromiseSection />
      <ProductSection />
      <DreamSection />
      <ObjectionSection />
      <TestimonialsSection />
      <GuaranteeSection />
      <OfferSection />
      <FinalCTA />
    </div>
  );
}

export default App;