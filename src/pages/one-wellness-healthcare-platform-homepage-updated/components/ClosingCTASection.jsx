import React from 'react';
import Button from '../../../components/ui/Button';
import { useNavigate } from 'react-router-dom';

const ClosingCTA = () => {
  const navigate = useNavigate();
  
  return (
    <section className="pt-4 pb-4 relative overflow-hidden">
      {/* <img src="/images/bg_pattern02.png" alt="Background" className='absolute top-0 left-0 w-full h-full z-0 opacity-[0.05]' /> */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row relative items-center overflow-hidden bg-[#fff6ec] rounded-[15px] pl-8 pb-0 pt-8 md:py-8 w-full mx-auto md:w-[900px] h-auto md:h-[320px]">
          <div className="w-auto mb-10 lg:mb-0">
            <h2 className="text-[#1a3a4f] text-4xl md:text-4xl font-bold mb-8 w-full md:w-[350px]">
              Sign up &<br />
              <span className="text-[#1a3a4f] bg-clip-text">
                get the best for your loved ones.
              </span>
            </h2>
            
            <Button 
              variant="primary" 
            onClick={() => navigate('/signup')}
              className="rounded-lg text-sm h-[50px] w-[139px]"
            >
              Get Started
            </Button>
          </div>
          
          <div className="w-full">
            {/* <img 
              src="/images/img_group_506x613.png" 
              alt="Decorative element" 
              className="absolute top-0 left-0 z-0"
            /> */}
            <img 
              src="/images/CTAImg01.png" 
              alt="Healthcare professional" 
              className="relative lg:absolute right-0 bottom-0 z-10 w-[470px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClosingCTA;