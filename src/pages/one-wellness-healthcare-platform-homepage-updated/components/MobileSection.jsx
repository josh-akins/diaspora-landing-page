import React from 'react';
import Button from '../../../components/ui/Button';

const MobileSection = () => {
  return (
    <section className="pt-16 md:pb-[500px] bg-white">
      <div className="px-0 mx-auto">
        <div className="text-center mb-8">
          <p className="text-[#f6921e] font-bold font-['Kalam'] mb-2">Download App</p>
          <h2 className="text-[#1a3a4f] text-3xl md:text-6xl font-bold mb-8">
            Healthcare{" "}
            <span className="bg-gradient-to-r from-[#3da647] to-[#f6921e] text-transparent bg-clip-text">
              in your pocket
            </span>
          </h2>
          
          <div className="flex justify-center mb-12">
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
        <div className='relative pb-10 md:pb-0'>
          <img src="/images/mobile_sect_img.png" alt="Mobile" className='w-full absolute top-0 left-0' />
          {/* <div className='absolute bottom-0 left-0 right-0 h-[50px] bg-gradient-to-t from-[#0c4e11] to-transparent z-20 flex items-center justify-center'>
            <div className="text-white text-lg font-semibold tracking-wider uppercase">
              HEALTHIER - HAPPIER TEAMS 💯
            </div>
          </div> */}
        </div>
        
        {/* <div className="relative">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 z-0"></div>
          
          <div className="relative z-10 flex justify-center overflow-x-auto py-8">
          <img src="/images/mobile_sect_img.png" alt="Mobile" className='w-full' />
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-[50px] bg-gradient-to-t from-[#0c4e11] to-transparent z-20 flex items-center justify-center">
            <div className="text-white text-lg font-semibold tracking-wider uppercase">
              HEALTHIER - HAPPIER TEAMS 💯
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default MobileSection;