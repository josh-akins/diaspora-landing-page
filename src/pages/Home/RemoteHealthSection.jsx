import React from 'react';
import Button from '../../components/ui/Button';

const RemoteHealthSection = () => {
  return (
    <section className="bg-[#075f4c] py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <img 
        src="/images/img_snow_rain_drops_weather_sparkle_pattern.png" 
        alt="Decorative pattern" 
        className="absolute right-[275px] top-[731px] z-10 opacity-50"
      />
      <img 
        src="/images/img_group_8.svg" 
        alt="Decorative element" 
        className="absolute right-[250px] top-[646px] z-10"
      />
      <img 
        src="/images/img_vector_80x80.png" 
        alt="Icon" 
        className="absolute left-[206px] top-[230px] z-10 w-20 h-20"
      />
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
            <h2 className="text-white text-5xl md:text-6xl font-semibold mb-8 max-w-[686px]">
              Send health home without stress.
            </h2>
            
            <p className="text-white text-xl mb-10 max-w-[649px]">
              A one-stop solution for your loved ones back home to access affordable healthcare without the worry of payment. Stay informed by tracking your dependent's activities, risk levels, and overall health.
            </p>
            
            <Button 
              className="bg-white text-black rounded-[10px] px-8 py-6 font-medium text-2xl"
            >
              Learn More
            </Button>
          </div>
          
          <div className="w-full lg:w-1/2 relative">
            <img 
              src="/images/img_vector_794x650.png" 
              alt="Healthcare professionals" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RemoteHealthSection;