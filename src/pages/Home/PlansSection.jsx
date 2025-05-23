import React from 'react';

const PlansSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-2">
            <img src="/images/img_svg.svg" alt="Icon" className="w-6 h-6 mr-2" />
            <p className="text-[#f6921e] font-bold font-['Kalam']">Health Insurance your employees will use</p>
          </div>
          
          <h2 className="text-[#1a3a4f] text-5xl md:text-6xl font-bold mb-8 max-w-5xl mx-auto">
            Healthcare plan that{" "}
            <span className="bg-gradient-to-r from-[#3da647] to-[#f6921e] text-transparent bg-clip-text">
              actually
            </span>{" "}
            works well for you
          </h2>
          
          <p className="text-[#8b909a] text-xl mb-12 max-w-3xl mx-auto">
            We pay your employee's health care bills so they can save more and spend their salaries on things they love.
          </p>
        </div>
        
        <div className="bg-[#f6921e] rounded-lg py-16 px-8 relative overflow-hidden">
          <div className="flex justify-between items-center">
            <button className="bg-white rounded-full w-[100px] h-[100px] flex items-center justify-center">
              <img src="/images/img_arrow_26.svg" alt="Previous" className="transform rotate-180" />
            </button>
            
            <div className="flex space-x-6 overflow-hidden">
              <img 
                src="/images/img_frame_1618869272.png" 
                alt="Team member 1" 
                className="rounded-[20px] w-[353px] h-[560px] object-cover"
              />
              <img 
                src="/images/img_frame_1618869273.png" 
                alt="Team member 2" 
                className="rounded-[20px] w-[353px] h-[560px] object-cover"
              />
              <img 
                src="/images/img_frame_1618869275.png" 
                alt="Team member 3" 
                className="rounded-[20px] w-[353px] h-[560px] object-cover"
              />
              <img 
                src="/images/img_frame_1618869274.png" 
                alt="Team member 4" 
                className="rounded-[20px] w-[353px] h-[560px] object-cover"
              />
            </div>
            
            <button className="bg-white rounded-full w-[100px] h-[100px] flex items-center justify-center">
              <img src="/images/img_arrow_26.svg" alt="Next" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;