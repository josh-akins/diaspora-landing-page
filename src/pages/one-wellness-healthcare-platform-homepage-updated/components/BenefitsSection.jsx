import React from 'react';
import { Link } from 'react-router-dom';

const BenefitsSection = () => {
  const services = [
    {
      id: 1,
      icon: "/images/service01.png",
      title: "Elderly Care Visits",
      description: "Personalized Visits to Keep Mama and Papa Healthy and Happy",
      iconBg: "bg-white"
    },
    {
      id: 2,
      icon: "/images/service02.png",
      title: "Medication sourcing and support",
      description: "Reliable Access to Essential Medications, Anytime They Need It",
      iconBg: "bg-white"
    },
    {
      id: 3,
      icon: "/images/service03.png",
      title: "Health Monitoring Dashboard",
      description: "Stay Updated on Their Wellbeing with Real-Time Health Insights",
      iconBg: "bg-white"
    },
    {
      id: 4,
      icon: "/images/service04.png",
      title: "Health insurance coverage for mama and papa",
      description: "Comprehensive Health Coverage for Peace of Mind",
      iconBg: "bg-white"
    },
    {
      id: 5,
      icon: "/images/service05.png",
      title: "Reward on healthy living",
      description: "Inspiring Wellness with Every Healthy Choice",
      iconBg: "bg-white"
    },
    {
      id: 6,
      icon: "/images/service06.png",
      title: "Fundable wallet for refills and request",
      description: "Easy, Secure Payments for Medicines and More",
      iconBg: "bg-white"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-[#0A4B35] text-3xl md:text-5xl font-bold mb-6">
          Our Services
        </h1>
        
        <p className="text-gray-600 text-lg mb-12 max-w-[800px]">
          We provide a seamless healthcare support system designed for your loved ones back home. Our services include
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-gray-50 rounded-2xl p-6">
              <div className="mb-6">
                <img 
                  src={service.icon}
                  alt={service.title}
                  className="w-12 h-12"
                />
              </div>

              <h3 className="text-[#0A4B35] text-xl font-semibold mb-3 w-[260px]">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-4 w-[300px]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;