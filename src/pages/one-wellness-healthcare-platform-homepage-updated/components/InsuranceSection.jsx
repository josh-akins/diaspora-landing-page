import React from 'react';
import Button from '../../../components/ui/Button';

const InsuranceSection = () => {
  const benefits = [
    {
      id: 1,
      title: "Talk to doctor anytime 24/7",
      icon: "/images/img_svg_blue_gray_900.svg"
    },
    {
      id: 2,
      title: "Free medications and health tests",
      icon: "/images/img_svg_blue_gray_900.svg"
    },
    {
      id: 3,
      title: "Cover for hospital admissions & emergencies",
      icon: "/images/img_svg_blue_gray_900.svg"
    }
  ];

  return (
    <section className="pt-20 bg-white">
      <div className="container mx-auto px-4">
            <h2 className="text-[#1a3a4f] text-3xl lg:text-5xl font-bold w-full lg:w-[500px] mt-5 mb-7 md:mb-20">
              The best healthcare starts at work.
            </h2>
        <div className="flex flex-col lg:flex-row items-start gap-16">
          <div className="w-full lg:w-1/2">
            
            <div className="inline-block border border-[#667085a5] rounded-md px-4 py-1 mb-4">
              <span className="uppercase text-[#c2c1cc] font-bold text-center md:text-left block md:inline-block tracking-wider text-xs">
                Comprehensive Health Insurance Cover
              </span>
            </div>
            
            <h3 className="text-[#1a3a4f] text-4xl md:text-5xl font-bold mb-10 w-full lg:w-[500px]">
              Insurance Benefits{" "}
              <span className="bg-gradient-to-r from-[#3da647] to-[#f6921e] text-transparent bg-clip-text">
                that come to you
              </span>
            </h3>
            
            <ul className="space-y-6 mb-8">
              {benefits.map(benefit => (
                <li key={benefit.id} className="flex items-start">
                  <img src={benefit.icon} alt="Check" className="w-6 h-6 mt-1 mr-3" />
                  <span className="text-[#1a3a4f] text-lg font-bold font-['Kalam']">{benefit.title}</span>
                </li>
              ))}
            </ul>
            
            <p className="text-[#8b909a] text-md mb-10 max-w-[500px]">
              From doctors to medicines, lab tests to emergencies & accidents – we've got you covered. Instant expert doctors, free hospital admissions, laboratory tests, medications, and a vast healthcare network covering the 36 states in Nigeria.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
              <Button 
                variant="primary" 
                className="rounded-lg h-[50px] text-sm w-[139px]"
              >
                Talk to us
              </Button>
              <Button 
                variant="secondary" 
                className="rounded-lg h-[50px] text-sm w-[217px]"
              >
                Refer your employer
              </Button>
            </div>
            
            <div className="flex items-center text-[#228821] text-lg cursor-pointer" onClick={() => window.open('https://www.onewellness.ng/plans', '_blank')}>
              <span className="underline mr-2">View plans</span>
              <img src="/images/img_arrow_1.svg" alt="Arrow" className="ml-2 mr-1 w-[20px]" />
              <img src="/images/img_arrow_1.svg" alt="Arrow" className="w-[20px]" />
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative">
            <div className="rounded-[40px] w-full h-[auto] relative">
              <div className="relative top-0 left-0 w-full h-full">
                {/* <div className="bg-[#eaeaea] rounded-full w-[506px] h-[452px] absolute top-0 left-0"></div> */}
                <img 
                  src="/images/section_four_img01.png" 
                  alt="Healthcare professional" 
                  className="relative z-10"
                />
                
                {/* Mobile app cards */}
                {/* <div className="absolute grid grid-cols-2 gap-4 top-[747px] left-[1046px] z-20">
                  <div className="bg-[#f4f4f4] rounded-lg shadow-lg p-3 w-[166px] h-[117px]">
                    <img src="/images/img_pill.png" alt="Pill icon" className="w-4 h-4 mb-2" />
                    <h4 className="text-[#2c312e] text-xs font-semibold mb-4">My medicines</h4>
                    <p className="text-[#667085] text-[10px]">2 medications</p>
                  </div>
                  
                  <div className="bg-[#f4f4f4] rounded-lg shadow-lg p-3 w-[166px] h-[117px]">
                    <img src="/images/img_treatment.png" alt="Treatment icon" className="w-4 h-4 mb-2" />
                    <h4 className="text-[#2c312e] text-xs font-semibold mb-1">Pharmacist&lt;br/&gt;recommendation</h4>
                    <p className="text-[#667085] text-[10px]">3 new recommendation</p>
                  </div>
                </div>
                
                <div className="absolute grid grid-cols-2 gap-4 top-[875px] left-[1046px] z-20">
                  <div className="bg-[#f4f4f4] rounded-lg shadow-lg p-3 w-[166px] h-[117px]">
                    <img src="/images/img_chat.png" alt="Chat icon" className="w-4 h-4 mb-2" />
                    <h4 className="text-[#2c312e] text-xs font-semibold mb-4">Follow-ups</h4>
                    <p className="text-[#667085] text-[10px]">1 upcoming checkin</p>
                  </div>
                  
                  <div className="bg-[#f4f4f4] rounded-lg shadow-lg p-3 w-[166px] h-[117px]">
                    <img src="/images/img_moleskine.png" alt="Health records icon" className="w-4 h-4 mb-2" />
                    <h4 className="text-[#2c312e] text-xs font-semibold mb-1">Health&lt;br/&gt;records</h4>
                    <p className="text-[#667085] text-[10px]">1 new record</p>
                  </div>
                </div>
                
                <div className="absolute grid grid-cols-2 gap-4 top-[1004px] left-[1046px] z-20">
                  <div className="bg-[#f4f4f4] rounded-lg shadow-lg p-3 w-[166px] h-[117px]">
                    <img src="/images/img_empty_test_tube.png" alt="Lab results icon" className="w-4 h-4 mb-2" />
                    <h4 className="text-[#2c312e] text-xs font-semibold mb-4">Lab results</h4>
                    <p className="text-[#667085] text-[10px]">1 results</p>
                  </div>
                  
                  <div className="bg-[#f4f4f4] rounded-lg shadow-lg p-3 w-[166px] h-[117px]">
                    <img src="/images/img_medical_insurance.png" alt="Insurance icon" className="w-4 h-4 mb-2" />
                    <h4 className="text-[#2c312e] text-xs font-semibold mb-1">Insurance & hospitals</h4>
                    <p className="text-[#667085] text-[10px]">2 Hospitals, 56 Policies</p>
                  </div>
                </div>
                
                <div className="absolute grid grid-cols-2 gap-4 top-[1132px] left-[1046px] z-20">
                  <div className="bg-[#f4f4f4] rounded-lg shadow-lg p-3 w-[166px] h-[117px]">
                    <img src="/images/img_note.png" alt="Notes icon" className="w-4 h-4 mb-2" />
                    <h4 className="text-[#2c312e] text-xs font-semibold mb-4">Doctor's notes</h4>
                    <p className="text-[#667085] text-[10px]">1 new note</p>
                  </div>
                  
                  <div className="bg-[#f4f4f4] rounded-lg shadow-lg p-3 w-[166px] h-[117px]">
                    <img src="/images/img_view_more.png" alt="See more icon" className="w-4 h-4 mb-2" />
                    <h4 className="text-[#2c312e] text-xs font-semibold mb-4">See more</h4>
                    <p className="text-[#228821] text-xl">↑</p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsuranceSection;