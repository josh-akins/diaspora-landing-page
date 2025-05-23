import React from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import HeroSection from '../../components/common/HeroSection';
import BenefitsSection from './BenefitsSection';
import RemoteHealthSection from './RemoteHealthSection';
import InsuranceSection from './InsuranceSection';
import SupportSection from './SupportSection';
import TeamMotivationSection from './TeamMotivationSection';
import AdminSection from './AdminSection';
import PlansSection from './PlansSection';
import TestimonialsSection from './TestimonialsSection';
import StepsSection from './StepsSection';
import MobileSection from './MobileSection';
import ClosingCTA from './ClosingCTA';

const HomePage = () => {
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

export default HomePage;