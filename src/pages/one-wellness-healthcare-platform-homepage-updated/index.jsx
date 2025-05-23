import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import RemoteHealthSection from './components/RemoteHealthSection';
import InsuranceSection from './components/InsuranceSection';
import SupportSection from './components/SupportSection';
import TeamMotivationSection from './components/TeamMotivationSection';
import AdminSection from './components/AdminSection';
import PlansSection from './components/PlansSection';
import TestimonialsSection from './components/TestimonialsSection';
import StepsSection from './components/StepsSection';
import MobileSection from './components/MobileSection';
import ClosingCTASection from './components/ClosingCTASection';
import HealthInsurance from './components/HealthInsurance';

const OneWellnessHealthcarePlatformHomepageUpdated = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <BenefitsSection />
        <RemoteHealthSection />
        <InsuranceSection />
        <SupportSection />
        <TeamMotivationSection />
        <HealthInsurance />
        <AdminSection />
        <PlansSection />
        <TestimonialsSection />
        <StepsSection />
        <MobileSection />
        <ClosingCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default OneWellnessHealthcarePlatformHomepageUpdated;