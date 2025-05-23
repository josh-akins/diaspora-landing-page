import React from 'react';

const RemoteHealthSection = () => {
  return (
    <section className="relative py-16 bg-[#08604C] overflow-hidden min-h-[600px] flex items-center">
      {/* Optional: SVG pattern overlay for background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Replace with your SVG pattern or background image if available */}
        <img src="/images/bg_pattern.png" alt="pattern" className="w-full h-full object-cover opacity-[0.1]" />
        <img src="/images/section_three_img04.png" alt="dots" className="absolute right-[0px] top-0 w-[180px] block" />

      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left side content */}
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0 pr-0 lg:pr-12 text-white">
            {/* Icon */}
            <div className="mb-4">
              <img 
                src="/images/section_three_img02.png" 
                alt="Health Lock Icon" 
                className="w-12 h-12"
                aria-hidden="true"
              />
            </div>
            {/* Headline */}
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              Send health home<br />without stress.
            </h2>
            {/* Subtext */}
            <p className="text-lg text-[#FFFFFF] font-light mb-8 max-w-lg">
              A one-stop solution for your loved ones back home to access affordable healthcare without the worry of payment. Stay informed by tracking your dependent's activities, risk levels, and overall health.
            </p>
            {/* Button */}
            <button className="bg-white text-[#2B7A6B] font-semibold px-8 py-3 rounded-lg shadow hover:bg-gray-100 transition">
              Learn More
            </button>
          </div>

          {/* Right side with masked image */}
          <div className="w-full lg:w-1/2 flex justify-center relative">
            {/* Hexagon mask using SVG clipPath */}
            <svg viewBox="0 0 400 460" width="400" height="460" className="max-w-[400px] max-h-[460px]">
              <defs>
                <clipPath id="hexMask" clipPathUnits="objectBoundingBox">
                  <polygon points="0.5,0 0.97,0.25 0.97,0.75 0.5,1 0.03,0.75 0.03,0.25" />
                </clipPath>
              </defs>
              <image
                href="/images/section_three_img06.png"
                width="400"
                height="460"
              />
            </svg>
            {/* Decorative arrow SVG */}
            <img src="/images/sect_three_img01.png" alt="arrow" className="absolute left-[-200px] bottom-10 w-[130px] hidden lg:block" />
            {/* Decorative dots SVG */}
            <img src="/images/section_three_img03.png" alt="dots" className="absolute left-[70px] bottom-[-70px] w-[180px] opacity-70 block" />
            {/* Vertical text (optional) */}
            <img src="/images/section_three_img05.png" alt="dots" className="absolute right-[90px] top-0 w-[30px] hidden lg:block" />

            {/* <div className="absolute right-[-30px] top-10 rotate-90 text-white text-sm tracking-widest opacity-80">v1.0</div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RemoteHealthSection;