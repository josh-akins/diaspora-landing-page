import React from 'react';
import Button from '../ui/Button';

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-[254px] left-[91px] w-[252px] h-[252px] rounded-full bg-[#228821] opacity-80 blur-[50px] z-0"></div>
      <div className="absolute top-[797px] right-[359px] w-[279px] h-[359px] rounded-full bg-[#f6921e] opacity-80 blur-[50px] z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left side with image */}
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0 relative">
            <div className="relative">
              <div className="bg-[#fef5ec] rounded-lg w-[590px] h-[609px] absolute top-[311px] left-[159px] z-0"></div>
              <img 
                src="/images/img_teamyoungafricanpeopleindoorswithhandgesture.png" 
                alt="Team of professionals" 
                className="relative z-10 rounded-[13px] max-w-full h-auto"
              />
              <img 
                src="/images/img_group.png" 
                alt="Decorative element" 
                className="absolute top-[215px] left-[158px] z-20"
              />
            </div>
          </div>
          
          {/* Right side with content */}
          <div className="w-full lg:w-1/2 lg:pl-16">
            <h1 className="text-[#1a3a4f] text-5xl md:text-6xl lg:text-[100px] font-extrabold leading-tight mb-6">
              A better way to care for your team.
            </h1>
            <p className="text-[#8b909a] text-lg md:text-xl lg:text-2xl mb-10 max-w-[696px]">
              A complete employee care stack with an in-house care team, providing comprehensive health insurance, dedicated care and unique wellness rewards system to enable your employees do their best work.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                variant="primary" 
                className="rounded-[10px] h-[62px] w-[196px] flex items-center justify-center"
              >
                Talk to us
              </Button>
              <Button 
                variant="secondary" 
                className="rounded-[8px] h-[61px] w-[217px] border border-[#3da647] flex items-center justify-center"
              >
                Refer your employer
              </Button>
            </div>
            <div className="mt-8">
              <Button 
                variant="outline" 
                className="rounded-[10px] h-[62px] w-[268px] border border-[#8b909a]"
              >
                <div className="flex items-center">
                  <img src="/images/img_apple_logo.png" alt="Apple" className="w-5 h-5 mr-2" />
                  <img src="/images/img_google_play.png" alt="Google Play" className="w-5 h-5 mr-2" />
                  <span className="mx-2 text-[#f4f4f4]">|</span>
                  <span className="text-[#1a3a4f] font-semibold">Download app</span>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;