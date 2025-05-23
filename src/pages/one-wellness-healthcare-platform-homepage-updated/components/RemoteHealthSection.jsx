import React from 'react';

const RemoteHealthSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-[#0A4B35] text-3xl md:text-5xl font-bold mb-4">
            Simplified Healthcare,
            <br />
            Endless Benefits
          </h2>
          <p className="text-gray-600 text-lg">
            Designed to support you and your family with affordable, accessible care.
          </p>
        </div>

        {/* Content Blocks */}
        <div className="space-y-20">
          {/* First Block - Peace of Mind */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="/images/simplified01.png"
                  alt="Elderly person using tablet with caregiver"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 lg:pl-8">
              <h3 className="text-[#0A4B35] text-3xl font-bold mb-4">Peace of Mind</h3>
              <p className="text-gray-600 text-lg">
                Know that your loved ones are cared for, no matter where you are.
              </p>
            </div>
          </div>

          {/* Second Block - Cost-Effective Solutions */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="w-full lg:w-1/2">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="/images/simplified02.png"
                  alt="Healthcare professional using smartphone"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 lg:pr-8">
              <h3 className="text-[#0A4B35] text-3xl font-bold mb-4">Cost-Effective Solutions</h3>
              <p className="text-gray-600 text-lg">
                Save on healthcare expenses without compromising quality.
              </p>
            </div>
          </div>

          {/* Third Block - Peace of Mind */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="/images/simplified03.png"
                  alt="Elderly person using tablet with caregiver"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 lg:pl-8">
              <h3 className="text-[#0A4B35] text-3xl font-bold mb-4">Transparency & Control</h3>
              <p className="text-gray-600 text-lg">
                Stay updated on your dependent's health and payment history.
              </p>
            </div>
          </div>

          {/* Fourth Block - Cost-Effective Solutions */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="w-full lg:w-1/2">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="/images/simplified04.png"
                  alt="Healthcare professional using smartphone"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 lg:pr-8">
              <h3 className="text-[#0A4B35] text-3xl font-bold mb-4">Personalized Care</h3>
              <p className="text-gray-600 text-lg">
                Tailored health recommendations based on your dependent's needs.
              </p>
            </div>
          </div>

          {/* Fifth Block - Peace of Mind */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="/images/simplified05.png"
                  alt="Elderly person using tablet with caregiver"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 lg:pl-8">
              <h3 className="text-[#0A4B35] text-3xl font-bold mb-4">Time-Saving</h3>
              <p className="text-gray-600 text-lg">
                Manage everything remotely, from payments to health tracking.
              </p>
            </div>
          </div>

          {/* Sixth Block - Cost-Effective Solutions */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="w-full lg:w-1/2">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="/images/simplified06.png"
                  alt="Healthcare professional using smartphone"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 lg:pr-8">
              <h3 className="text-[#0A4B35] text-3xl font-bold mb-4">Dedicated Care partner</h3>
              <p className="text-gray-600 text-lg">
                A Trusted Partner in Care, Every Step of the Way
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RemoteHealthSection;
