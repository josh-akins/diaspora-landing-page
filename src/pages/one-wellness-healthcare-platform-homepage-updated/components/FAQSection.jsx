import React, { useState, useRef, useEffect } from 'react';

const faqs = [
  {
    question: 'What is OneWellness Diaspora?',
    answer:
      'OneWellness Diaspora helps you care for loved ones back home with services like elderly care, medication sourcing, health monitoring, and insurance.',
  },
  {
    question: 'How can I pay for services',
    answer:
      'You can pay for services using your debit card, bank transfer, or mobile money.',
  },
  {
    question: 'What does the Elderly Care Visit service include?',
    answer:
      'The Elderly Care Visit service includes a comprehensive health checkup, medication review, and lifestyle advice.',
  },
  {
    question: 'Can I monitor my family member\'s health?',
    answer:
      'Yes, you can monitor your family member\'s health by using the OneWellness Diaspora app.',
  },
  {
    question: 'What medications are available for sourcing?',
    answer:
      'We source medications from reputable pharmacies in Nigeria.',
  },
  {
    question: 'Does OneWellness offer health insurance?',
    answer:
      'Yes, we offer health insurance plans for individuals and families.',
  },
  {
    question: 'How do rewards on healthy living work?',
    answer:
      'Rewards on healthy living are based on your health metrics and lifestyle choices.',
  },
  {
    question: 'What is the Fundable Wallet, and how does it work?',
    answer:
      'The Fundable Wallet is a feature that allows you to manage your rewards and savings.',
  },
  {
    question: 'Who is the Dedicated Care Partner, and what do they do?',
    answer:
      'The Dedicated Care Partner is a team of healthcare professionals who are dedicated to providing the best possible care for your loved ones.',
  },
  {
    question: 'How can I get started with OneWellness Diaspora?',
    answer:
      'You can get started with OneWellness Diaspora by signing up on our website or downloading the OneWellness Diaspora app.',
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const contentRefs = useRef([]);

  const handleToggle = (idx) => {
    setOpenIndex(idx === openIndex ? null : idx);
  };

  useEffect(() => {
    // Ensure the open panel is scrolled into view on mobile
    if (openIndex !== null && contentRefs.current[openIndex]) {
      contentRefs.current[openIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [openIndex]);

  return (
    <section id="faq" className="md:py-20 bg-white">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-[#228821] text-4xl md:text-5xl font-bold text-center mb-12">FAQ</h2>
        <div className="divide-y divide-[#E5E7EB]">
          {faqs.map((faq, idx) => {
            const isOpen = idx === openIndex;
            return (
              <div key={idx}>
                <button
                  className={`w-full text-left py-6 flex items-start justify-between focus:outline-none select-none`}
                  onClick={() => handleToggle(idx)}
                  aria-expanded={isOpen}
                >
                  <span className={`block font-semibold text-lg md:text-xl text-[#228821]`}>{faq.question}</span>
                  <span className="ml-4 flex-shrink-0 mt-1">
                    <span
                      className={`inline-block transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-45' : ''}`}
                    >
                      {/* Plus icon (rotates to minus) */}
                      <svg width="24" height="24" fill="none" stroke="#228821" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M12 6v12M6 12h12" strokeLinecap="round" />
                      </svg>
                    </span>
                  </span>
                </button>
                {/* Animated answer panel */}
                <div
                  ref={el => (contentRefs.current[idx] = el)}
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'} pl-0 pr-8`}
                  style={{
                    transitionProperty: 'max-height, opacity',
                  }}
                >
                  <div className={`pt-1 pb-4 pl-0 pr-2 transition-all duration-500 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}
                    style={{ transitionProperty: 'opacity, transform' }}
                  >
                    <span className="block text-gray-500 text-base font-normal">
                      {faq.answer}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 