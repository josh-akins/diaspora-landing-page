import React from 'react';
import Button from '../../components/ui/Button';

const ClosingCTA = () => {
  return (
    <section className="py-16 bg-[#fff6ec] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
            <h2 className="text-[#1a3a4f] text-4xl md:text-5xl font-bold mb-8">
              Sign up &<br />
              <span className="bg-gradient-to-r from-[#3da647] to-[#f6921e] text-transparent bg-clip-text">
                get covered today.
              </span>
            </h2>
            
            <Button 
              variant="primary" 
              className="rounded-lg h-[57px] w-[139px]"
            >
              Talk to us
            </Button>
          </div>
          
          <div className="w-full lg:w-1/2 relative">
            <img 
              src="/images/img_group_506x613.png" 
              alt="Decorative element" 
              className="absolute top-0 left-0 z-0"
            />
            <img 
              src="/images/img_frontviewsmileynursesworkremovebgpreview_1.png" 
              alt="Healthcare professional" 
              className="relative z-10 ml-[93px] mt-[85px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClosingCTA;