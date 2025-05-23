import React from 'react';
import Button from '../../components/ui/Button';

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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start gap-16">
          <div className="w-full lg:w-1/2">
            <div className="bg-[#f4f4f4] rounded-[20px] w-full h-[729px] relative">
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="bg-[#eaeaea] rounded-full w-[497px] h-[452px] absolute top-0 left-[232px]"></div>
                
                {/* Chat interface */}
                <div className="absolute top-[169px] left-[78px] bg-white rounded-lg shadow-lg w-[590px] h-[377px] p-6">
                  <div className="flex items-center mb-4">
                    <img src="/images/img_group_237974.png" alt="User avatar" className="w-6 h-6 mr-3" />
                    <div>
                      <p className="text-[#2c312e] text-xs font-normal">Jenni (Care assistant)</p>
                      <p className="text-[#228821] text-[6px] text-center">Online</p>
                    </div>
                  </div>
                  
                  <div className="bg-[#f4f4f4] rounded-t-md rounded-r-md p-3 max-w-[199px] mb-4">
                    <p className="text-[9px] text-[#667085]">Send an image of your rash so I can take a look at it</p>
                    <p className="text-[7px] text-[#c2c1cc] mt-2">TODAY. 9:30PM</p>
                  </div>
                  
                  <div className="flex justify-end mb-4">
                    <p className="text-[#2c312e] text-xs mr-2">You</p>
                  </div>
                  
                  <div className="flex justify-end mb-4">
                    <div className="bg-white rounded-l-md rounded-b-md p-3 max-w-[199px] border">
                      <div className="grid grid-cols-2 gap-2 mb-2">
                        <img src="/images/img_rectangle_5661.png" alt="Rash image 1" className="rounded-md" />
                        <img src="/images/img_rectangle_5661.png" alt="Rash image 2" className="rounded-md" />
                      </div>
                      <p className="text-[9px] text-[#667085]">Here are the images of my rashes</p>
                      <div className="flex justify-end items-center mt-2">
                        <p className="text-[7px] text-[#c2c1cc] mr-2">TODAY. 9:30PM</p>
                        <img src="/images/img_done.svg" alt="Read" className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start mb-4">
                    <img src="/images/img_group_237974.png" alt="User avatar" className="w-6 h-6 mr-3 mt-1" />
                    <div>
                      <p className="text-[#2c312e] text-xs mb-1">Jenni (Care assistant)</p>
                      <div className="bg-[#f4f4f4] rounded-t-md rounded-r-md p-3 max-w-[199px]">
                        <p className="text-[9px] text-[#667085]">You have an eczema. I am looking at your health records and I can see you are allergic to hydroquinone. I'll prepare a treatment plan for you shortly.</p>
                        <p className="text-[7px] text-[#c2c1cc] mt-2">TODAY. 9:30PM</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-center mb-4">
                    <div className="bg-white rounded-md px-3 py-1">
                      <p className="text-[9px] text-[#667085]">Today</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-end mb-4">
                    <p className="text-[#2c312e] text-xs mr-2">You</p>
                  </div>
                  
                  <div className="flex justify-end mb-4">
                    <div className="bg-white rounded-l-md rounded-b-md p-3 max-w-[199px] border">
                      <p className="text-[9px] text-[#667085]">Sounds great. Thanks</p>
                      <div className="flex justify-end items-center mt-2">
                        <p className="text-[7px] text-[#c2c1cc] mr-2">TODAY. 9:30PM</p>
                        <img src="/images/img_doneall.svg" alt="Read" className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Mobile device frame */}
                <img 
                  src="/images/img_iphone_mockup.png" 
                  alt="iPhone mockup" 
                  className="absolute top-[152px] left-[57px] z-10"
                />
                
                {/* Risk profile card */}
                <div className="absolute top-[212px] left-[380px] bg-[#f9fafb] rounded-md shadow-lg p-4 w-[312px] h-[105px]">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-[#667085] text-xs mb-1">Risk profile</p>
                      <p className="text-[#82ee8f] text-lg">Low risk</p>
                      <p className="text-[#c6c6c6] text-[9px] font-light">Updated 5 March, 2022</p>
                    </div>
                    <div className="flex items-center">
                      <img src="/images/img_alertcircle.svg" alt="Alert" className="w-[10px] h-[10px] mr-2" />
                      <p className="text-[#228821] text-[9px] mr-2">VIEW HISTORY</p>
                      <img src="/images/img_vector_138.svg" alt="Arrow" className="w-[7px] h-[3px]" />
                    </div>
                  </div>
                  <img src="/images/img_heart_rate_1.png" alt="Heart rate" className="absolute top-[11px] right-[11px] w-[71px] h-[93px]" />
                  <img src="/images/img_progress_bars.svg" alt="Progress" className="absolute top-[82px] right-[23px]" />
                </div>
                
                {/* Appointment card */}
                <div className="absolute top-[614px] left-[380px] bg-gradient-to-br from-[#0e740d] to-[#44605b] rounded-md shadow-lg p-4 w-[310px] h-[72px] flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="bg-[#228821] rounded-full p-2 mr-3">
                      <img src="/images/img_hospital_building.svg" alt="Hospital" className="w-[14px] h-[14px]" />
                    </div>
                    <div>
                      <p className="text-white/75 text-[10px]">Upcoming appointment</p>
                      <p className="text-white text-xs">First Check-in</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-white text-[10px]">06:30AM</p>
                    <p className="text-[#f6921e] text-[9px]">2h 10mins</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="inline-block border border-[#667085a5] rounded-md px-4 py-2 mb-4">
              <span className="uppercase text-[#c2c1cc] font-bold tracking-wider text-sm">
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
            
            <p className="text-[#8b909a] text-xl mb-10 max-w-[614px]">
              Accountability ensures employees don't fall sick too often. From regular check-ins to health trackers, medication reminders, and up-to-date health records – we nurture your employees to embrace preventive care and fall sick less.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
              <Button 
                variant="primary" 
                className="rounded-lg h-[57px] w-[139px]"
              >
                Talk to us
              </Button>
              <Button 
                variant="secondary" 
                className="rounded-lg h-[57px] w-[217px]"
              >
                Refer your employer
              </Button>
            </div>
            
            <div className="flex items-center text-[#228821] text-xl">
              <span className="underline mr-2">View plans</span>
              <img src="/images/img_arrow_1.svg" alt="Arrow" className="mr-1" />
              <img src="/images/img_arrow_1.svg" alt="Arrow" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;