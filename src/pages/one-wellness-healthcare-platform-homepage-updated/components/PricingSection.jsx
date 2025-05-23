import React from 'react';
import { Link } from 'react-router-dom';

const plans = [
  {
    price: '$200',
    name: 'Mama & Papa 360',
    badges: [
      { label: '6 Months', color: 'bg-[#FFE6C7] text-[#F6921E]' },
      { label: '12 Months', color: 'bg-[#F4F4F4] text-[#0A4B35]' },
    ],
    description: 'A comprehensive health insurance plan designed to meet the unique needs of elderly individuals aged 65 to 85.',
    features: [
      'Monthly home visits by healthcare professionals',
      'Unlimited 24/7 doctor consultations',
      '₦10,000 Wallet Cashback on 3-month subscription',
      'Dedicated Care Partner',
      'Refillable wallets for chronic medications',
      'First Aid & Primary Care during visits',
      'Up to 10% discount on medications',
      'Virtual wellness checks',
      'WhatsApp group with doctors & family',
      'Personalized treatment plan',
      'Hospitals, ambulance & emergency coverage',
      'Surgery, chronic conditions, cancer care, dental & optical coverage',
    ],
    button: 'Get Started',
    highlight: true,
  },
  {
    price: '$60',
    name: 'Mama Papa Health Visit',
    badges: [
      { label: '2 Months Trial', color: 'bg-[#FFE6C7] text-[#F6921E]' },
    ],
    description: 'A premium healthcare plan tailored for proactive, personalized health management—perfect for families and diaspora sponsors dedicated to ensuring the well-being of their loved ones.',
    features: [
      { text: 'Everything in Mama and Papa 360 for a month', included: true },
      { text: 'Excluding Surgery, chronic conditions, cancer care, dental & optical coverage', included: false },
    ],
    button: 'Get Started',
    highlight: false,
  },
];

const checkIcon = (
  <svg className="inline-block w-5 h-5 mr-2 text-[#228821]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
  </svg>
);
const xIcon = (
  <svg className="inline-block w-5 h-5 mr-2 text-[#F6921E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 px-2 bg-[#FFE9CF]">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-[#000000] text-3xl md:text-6xl font-light mb-4 leading-tight">
          Care for the Golden<br />Years, Simplified
        </h2>
        <p className="text-[#1a3a4f] text-md md:text-lg mb-2">
          Convenient and Compassionate Care for Seniors, Anytime, Anywhere.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
        {/* Plan 1 */}
        <div className="bg-[#FFF9F2] rounded-2xl flex-1 px-4 md:px-8 py-8 max-w-xl ml-auto flex flex-col mb-4 md:mb-0">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[#013B00] text-4xl font-bold mr-2">$200</span>
            <div className="flex gap-2 ml-2">
              <span className="px-3 py-2 rounded-full text-nowrap text-xs font-normal bg-[#F6921E] text-[#FFFFFF]">6 Months</span>
              <span className="px-3 py-2 rounded-full text-nowrap text-xs font-normal text-[#0A4B35] border border-[#F6921E]">12 Months</span>
            </div>
          </div>
          <div className="text-[#000000] text-xl font-normal mb-2 mt-6">Mama & Papa 360</div>
          <div className="text-gray-600 mb-6 text-base">
            A comprehensive health insurance plan designed to meet the unique needs of elderly individuals aged 65 to 85.
          </div>
          <ul className="mb-6 text-left space-y-3">
            {plans[0].features.map((feature, idx) => (
              <li key={idx} className="flex items-start text-[#2C312E] text-base">
                {checkIcon}
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <Link
            to="/choose-plan"
            className="bg-[#228821] text-white px-6 py-3 rounded-lg font-normal text-sm text-base shadow hover:bg-[#176b1b] transition w-fit"
          >
            Get Started
          </Link>
        </div>
        {/* Plan 2 */}
        <div className="bg-[#FFF9F2] rounded-2xl flex-1 px-4 md:px-8 py-8 max-w-xl mr-auto flex flex-col">
          <div className="flex items-center justify-between mb-2 w-full">
            <span className="text-[#013B00] text-4xl font-bold mr-2">$60</span>
            <div className="flex justify-between gap-2 ml-2">
              <span className="px-3 py-2 rounded-full text-xs font-normal bg-[#F6921E] text-[#FFFFFF]">2 Months Trial</span>
            </div>
          </div>
          <div className="text-[#000000] text-xl font-normal mb-2 mt-6">Mama Papa Health Visit</div>
          <div className="text-gray-600 mb-6 text-base">
            A premium healthcare plan tailored for proactive, personalized health management—perfect for families and diaspora sponsors dedicated to ensuring the well-being of their loved ones.
          </div>
          <ul className="mb-6 text-left space-y-3">
            <li className="flex items-start text-[#2C312E] text-base">
              {checkIcon}
              <span>Everything in Mama and Papa 360 for a month</span>
            </li>
            <li className="flex items-start text-[#2C312E] text-base">
              {xIcon}
              <span>Excluding Surgery, chronic conditions, cancer care, dental & optical coverage</span>
            </li>
          </ul>
          <Link
            to="/choose-plan"
            className="bg-[#228821] text-white px-6 py-3 rounded-lg font-normal text-sm text-base shadow hover:bg-[#176b1b] transition w-fit"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PricingSection; 