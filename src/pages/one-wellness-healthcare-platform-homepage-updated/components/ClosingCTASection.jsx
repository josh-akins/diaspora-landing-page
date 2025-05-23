import React from 'react';
import Button from '../../../components/ui/Button';

const ClosingCTA = () => {
  return (
    <section className="pt-40 pb-24 relative overflow-hidden">
      <img src="/images/bg_pattern02.png" alt="Background" className='absolute top-0 left-0 w-full h-full z-0 opacity-[0.05]' />
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center bg-[#fff6ec] rounded-[15px] p-8 w-full mx-auto md:w-[900px] h-auto md:h-[300px]">
          <div className="w-auto mb-10 lg:mb-0">
            <h2 className="text-[#1a3a4f] text-4xl md:text-4xl font-bold mb-8 w-full md:w-[350px]">
              Sign up &<br />
              <span className="bg-gradient-to-r from-[#3da647] to-[#f6921e] text-transparent bg-clip-text">
                get covered today.
              </span>
            </h2>
            
            <Button 
              variant="primary" 
              className="rounded-lg text-sm h-[50px] w-[139px]"
            >
              Talk to us
            </Button>
          </div>
          
          <div className="w-full relative">
            {/* <img 
              src="/images/img_group_506x613.png" 
              alt="Decorative element" 
              className="absolute top-0 left-0 z-0"
            /> */}
            <img 
              src="/images/CTA_img01.png" 
              alt="Healthcare professional" 
              className="relative z-10 bottom-0 w-full translate-y-[3px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClosingCTA;