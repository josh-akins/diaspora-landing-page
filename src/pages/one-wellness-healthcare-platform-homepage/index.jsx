import React from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import HeroSection from '../../components/common/HeroSection';
import BenefitsSection from '../Home/BenefitsSection';
import RemoteHealthSection from '../Home/RemoteHealthSection';
import InsuranceSection from '../Home/InsuranceSection';
import SupportSection from '../Home/SupportSection';
import TeamMotivationSection from '../Home/TeamMotivationSection';
import AdminSection from '../Home/AdminSection';
import PlansSection from '../Home/PlansSection';
import TestimonialsSection from '../Home/TestimonialsSection';
import StepsSection from '../Home/StepsSection';
import MobileSection from '../Home/MobileSection';
import ClosingCTA from '../Home/ClosingCTA';

const OneWellnessHealthcarePlatformHomepage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <BenefitsSection />
        <RemoteHealthSection />
        <InsuranceSection />
        <SupportSection />
        <TeamMotivationSection />
        <AdminSection />
        <PlansSection />
        <TestimonialsSection />
        <StepsSection />
        <MobileSection />
        <ClosingCTA />
      </main>
      <Footer />
    </div>
  );
};

export default OneWellnessHealthcarePlatformHomepage;