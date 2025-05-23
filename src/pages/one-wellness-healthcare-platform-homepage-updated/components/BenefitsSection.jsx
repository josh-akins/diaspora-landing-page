import React from 'react';
import Button from '../../../components/ui/Button';

const BenefitsSection = () => {
  const benefitCards = [
    {
      id: 1,
      title: "Instant & Unlimited Doctor Consultation",
      bgColor: "bg-gray-200",
      innerBgColor: "bg-background-tertiary",
      image: "/images/section_two_img01.png",
      hasChat: true
    },
    {
      id: 2,
      title: "Hospital Admissions & Emergency Care",
      bgColor: "bg-gray-200",
      innerBgColor: "bg-[#b0ffb7]",
      image: "/images/section_two_img02.png",
      hasChat: true
    },
    {
      id: 3,
      title: "Dedicated Care Support",
      bgColor: "bg-gray-200",
      innerBgColor: "bg-[#f0d5b6]",
      image: "/images/section_two_img03.png",
      hasChat: true
    },
    {
      id: 4,
      title: "Quality Medicines & At-home lab tests",
      bgColor: "bg-gray-200",
      innerBgColor: "bg-[#d0ecff]",
      image: "/images/section_two_img04.png",
      hasChat: true
    },
    {
      id: 5,
      title: "Rewards for Healthy Living",
      bgColor: "bg-gray-200",
      image: "/images/section_two_img05.png",
      hasChat: true
    },
    {
      id: 6,
      title: "Health Tools for Preventive Care",
      bgColor: "bg-gray-200",
      innerBgColor: "bg-[#ffe1de]",
      image: "/images/section_two_img06.png",
      hasChat: true
    }
  ];

  return (
    <section id="features" className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="flex justify-center items-center mb-2">
            <img src="/images/img_svg.svg" alt="Icon" className="w-6 h-6 mr-2" />
            <p className="text-secondary font-bold font-['Kalam']">Health Insurance your employees will use</p>
          </div>
          
          <h2 className="text-accent text-4xl sm:text-5xl md:text-6xl font-semibold mb-8 max-w-5xl mx-auto">
            Small thriving teams are <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">4x better</span> with OneWellness
          </h2>
          
          <p className="text-gray-500 text-lg sm:text-xl mb-12 max-w-[650px] mx-auto">
            We pay your employee's health care bills so they can save more and spend their salaries on things they love.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {benefitCards.map((card) => (
            <div key={card.id} className={`${card.bgColor} rounded-[20px] h-auto sm:h-[auto] overflow-hidden`}>
              <div className="p-4 sm:p-4 lg:p-5 h-full flex flex-col">
                {card.hasPhone ? (
                  <div className={`${card.innerBgColor} rounded-[15px] h-[300px] sm:h-[404px] mb-4 relative overflow-hidden`}>
                    <div className="absolute top-[29px] left-0 right-0 flex justify-center sm:justify-start sm:left-[197px] w-auto sm:w-[167px] h-[361px]">
                      <div className="relative">
                        <img src="/images/img_buttons.svg" alt="Phone buttons" className="absolute z-10" />
                        <img src="/images/img_device_surround.svg" alt="Phone frame" className="absolute z-20" />
                        <img src="/images/img_highlight_band.svg" alt="Phone highlight" className="absolute z-30" />
                        <img src="/images/img_background.svg" alt="Phone background" className="absolute z-0" />
                        <img src="/images/img_antenna_bands.svg" alt="Phone antenna" className="absolute z-40" />
                        <img src="/images/img_camera.svg" alt="Phone camera" className="absolute top-[10px] left-[107px] z-50" />
                        <img src="/images/img_speaker.svg" alt="Phone speaker" className="absolute top-[12px] left-[81px] z-50" />
                        
                        <div className="absolute top-[70px] left-[14px] z-50">
                          <img 
                            src="/images/img_screen_mockup_replace_fill.png" 
                            alt="Health app dashboard screen" 
                            className="w-[167px] h-auto"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : card.hasChat ? (
                  <div className={` rounded-[15px] h-[150px] lg:h-[130px] xl:h-[170px] mb-4 relative overflow-hidden`}>
                    {card.image && (
                      <img 
                        src={card.image} 
                        alt={card.title} 
                        className="absolute right-0 top-0 z-10 w-full object-cover"
                      />
                    )}
                    
                    {/* Chat elements */}
                    {/* <div className="absolute top-[56px] left-[20px] sm:left-[63px] z-20">
                      <img src="/images/img_vector.svg" alt="Chat bubble" className="w-[97px] h-[245px]" />
                      <img src="/images/img_vector_blue_a100.svg" alt="Chat bubble highlight" className="absolute top-[-4px] left-[-3px] w-[97px] h-[245px]" />
                      
                      <div className="absolute top-[30px] left-[15px] text-white">
                        <p className="text-[8px] font-bold">Hi Mrs. Aisha,</p>
                        <p className="text-[8px] mt-1 max-w-[219px]">
                          Your hospital ward is ready, please be there by 
                          <span className="text-[#acfbb3] font-bold"> 12pm</span>
                        </p>
                      </div>
                      
                      <div className="absolute top-[76px] left-[-10px]">
                        <div className="bg-[#acfbb3] w-[43px] h-[43px] rounded-full border border-white shadow-lg flex items-center justify-center overflow-hidden">
                          <img 
                            src="/images/img_portraitafricanamericanpractitionernursesmilingcameraworkingillnessexpertise_1.png" 
                            alt="Doctor" 
                            className="w-[39px] h-[43px] object-cover"
                          />
                        </div>
                      </div>
                      
                      <p className="absolute top-[-4px] left-[0px] text-[8px] font-bold text-gray-500">Dr. Ella</p>
                    </div> */}
                    
                    <img 
                      src="/images/img_clip_path_group.svg" 
                      alt="Decorative element" 
                      className="absolute right-[30px] top-[-3px] z-0"
                      aria-hidden="true"
                    />
                  </div>
                ) : (
                  <div className={`${card.innerBgColor || 'bg-white'} rounded-[15px] h-[170px] sm:h-[170px] w-full mb-4 relative overflow-hidden`}>
                    {card.image && (
                      <img 
                        src={card.image} 
                        alt={card.title} 
                        className="absolute right-0 top-0 h-full w-full object-cover"
                      />
                    )}
                  </div>
                )}
                
                <h3 className="text-accent text-md sm:text-xl font-bold mb-2 md:w-[220px]">{card.title}</h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-background-tertiary rounded-[20px] p-4 sm:p-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col sm:flex-row items-center md:items-start w-full md:w-[600px]">
            <img 
              src="/images/img_clip_path_group_black_900.svg" 
              alt="Icon" 
              className="mr-0 sm:mr-4 mb-4 sm:mb-0"
              aria-hidden="true"
            />
            <div>
              <h3 className="text-accent text-2xl sm:text-3xl font-bold mb-2 text-center md:text-left">
                With little over <span className="bg-gradient-to-br from-primary to-secondary text-transparent bg-clip-text">3,000N per staff,</span> Better care has come to you.
              </h3>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full md:w-[auto]">
            <Button 
              variant="primary"
              className="rounded-md px-6 py-2 font-normal text-base w-full sm:w-auto"
            >
              Talk to us
            </Button>
            <Button 
              variant="secondary"
              className="rounded-md px-6 py-2 font-normal text- w-full sm:w-auto"
            >
              View plans
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;