import React from 'react';
import HeroSection from '@/components/HeroSection';
import AttackTypesSection from '@/components/AttackTypesSection';
import PhishingDemo from '@/components/PhishingDemo';
import PreventionTips from '@/components/PreventionTips';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AttackTypesSection />
      <div id="demo">
        <PhishingDemo />
      </div>
      <div id="tips">
        <PreventionTips />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
