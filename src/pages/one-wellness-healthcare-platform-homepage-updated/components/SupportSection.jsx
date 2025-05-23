import React from 'react';
import Button from '../../../components/ui/Button';

const SupportSection = () => {
  const supportFeatures = [
    {
      id: 1,
      title: "Virtual Checkins with care assistants weekly",
      icon: "/images/img_svg_blue_gray_900.svg"
    },
    {
      id: 2,
      title: "Thorough health monitoring",
      icon: "/images/img_svg_blue_gray_900.svg"
    },
    {
      id: 3,
      title: "Health records, reminders and trackers to stay on cours",
      icon: "/images/img_svg_blue_gray_900.svg"
    }
  ];

  return (
    <section className="pt-10 md:pt-20  bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start gap-16">
          <div className="w-full lg:w-1/2">
            <div className="bg-[#f4f4f4] rounded-[20px] w-full h-[auto] relative">
              <img src="/images/section_five_img01.png" alt="Support" className="w-full h-full object-cover" />
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="inline-block border border-[#667085a5] rounded-md px-4 py-1 mb-4">
              <span className="uppercase text-[#c2c1cc] font-bold tracking-wider text-xs">
                personalized health management
              </span>
            </div>
            
            <h2 className="text-[#1a3a4f] text-4xl md:text-5xl font-bold mb-10">
              Dedicated medical{" "}
              <span className="bg-gradient-to-r from-[#3da647] to-[#f6921e] text-transparent bg-clip-text">
                support 24/7
              </span>
            </h2>
            
            <ul className="space-y-6 mb-8">
              {supportFeatures.map(feature => (
                <li key={feature.id} className="flex items-start">
                  <img src={feature.icon} alt="Check" className="w-6 h-6 mt-1 mr-3" />
                  <span className="text-[#1a3a4f] text-lg font-bold font-['Kalam']">{feature.title}</span>
                </li>
              ))}
            </ul>
            
            <p className="text-[#8b909a] text-md mb-10 max-w-[614px]">
              Accountability ensures employees don't fall sick too often. From regular check-ins to health trackers, medication reminders, and up-to-date health records – we nurture your employees to embrace preventive care and fall sick less.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8 w-full lg:w-[500px]">
              <Button 
                variant="primary" 
                className="rounded-lg h-[52px] text-sm w-[139px]"
              >
                Talk to us
              </Button>
              <Button 
                variant="secondary" 
                className="rounded-lg h-[52px] text-sm w-[217px]"
              >
                Refer your employer
              </Button>
            </div>
            
            <div className="flex items-center text-[#228821] cursor-pointer text-md" onClick={() => window.open('https://www.onewellness.ng/plans', '_blank')}>
              <span className="underline mr-2">View plans</span>
              <img src="/images/img_arrow_1.svg" alt="Arrow" className="ml-2 mr-1 w-[20px]" />
              <img src="/images/img_arrow_1.svg" alt="Arrow" className="w-[20px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;