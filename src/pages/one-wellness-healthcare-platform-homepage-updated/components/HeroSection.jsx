import React from 'react';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden hero_section">
      {/* Background elements */}
      {/* <div className="absolute top-[254px] left-0 md:left-[91px] w-[200px] md:w-[252px] h-[200px] md:h-[252px] rounded-full bg-primary-dark opacity-80 blur-[50px] z-0"></div>
      <div className="absolute top-[797px] right-0 md:right-[359px] w-[200px] md:w-[279px] h-[280px] md:h-[359px] rounded-full bg-secondary opacity-80 blur-[50px] z-0"></div> */}
      
      <div className="container mx-auto px-4 md:py-10 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left side with image - displays below content on mobile */}
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0 relative order-2 lg:order-1">
            <div className="relative mt-20 md:mt-0">
              <img 
                src="/images/hero_image.png" 
                alt="Team of African professionals collaborating" 
                className="relative z-10 rounded-[13px] max-w-full h-auto object-cover"
              />
              {/* <div 
                className="bg-background-tertiary rounded-lg w-full md:w-[590px] h-[550px] md:h-[609px] absolute top-0 md:top-[311px] left-0 md:left-[159px] z-0"
                aria-hidden="true"
              ></div>
              <img 
                src="/images/img_teamyoungafricanpeopleindoorswithhandgesture.png" 
                alt="Team of African professionals collaborating" 
                className="relative z-10 rounded-[13px] max-w-full h-auto object-cover"
              />
              <img 
                src="/images/img_group.png" 
                alt="Decorative element" 
                className="absolute top-[100px] md:top-[215px] left-[50px] md:left-[158px] z-20 w-[150px] md:w-auto"
                aria-hidden="true"
              /> */}
            </div>
          </div>
          
          {/* Right side with content */}
          <div className="w-full lg:w-1/2 lg:pl-16 order-1 lg:order-2">
            <h1 className="text-accent text-4xl sm:text-5xl md:text-6xl lg:text-[60px] xl:text-[75px] font-extrabold leading-tight mb-6">
              A better way to care for your team.
            </h1>
            <p className="text-gray-500 text-base sm:text-md md:text-lg lg:text-xl mb-10 max-w-[696px]">
              A complete employee care stack with an in-house care team, providing comprehensive health insurance, dedicated care and unique wellness rewards system to enable your employees do their best work.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                variant="primary" 
                className="rounded-[10px] h-[54px] md:h-[54px] md:w-[196px] flex items-center justify-center text-base md:text-md"
              >
                Talk to us
              </Button>
              <Button 
                variant="secondary" 
                className="rounded-[8px] h-[54px] md:h-[54px] md:w-[217px] border border-primary flex items-center justify-center text-base md:text-md"
              >
                Refer your employer
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-4 md:mt-8">
              <Button 
                variant="outline" 
                className="rounded-[10px] h-[54px] md:h-[54px] md:w-[268px] border border-gray-500"
              >
                <div className="flex items-center">
                  <img src="/images/img_apple_logo.png" alt="Apple" className="w-5 h-5 mr-2" />
                  <img src="/images/img_google_play.png" alt="Google Play" className="w-5 h-5 mr-2" />
                  <span className="mx-2 text-gray-200">|</span>
                  <span className="text-accent font-semibold">Download app</span>
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