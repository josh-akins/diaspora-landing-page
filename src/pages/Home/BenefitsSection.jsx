import React from 'react';


const BenefitsSection = () => {
  const benefitCards = [
    {
      id: 1,
      title: "Instant & Unlimited Doctor Consultation",
      bgColor: "bg-[#f4f4f4]",
      innerBgColor: "bg-[#fff6ec]",
      image: "/images/img_caregiver_mockup_3.png"
    },
    {
      id: 2,
      title: "Hospital Admissions & Emergency Care",
      bgColor: "bg-[#f4f4f4]",
      innerBgColor: "bg-[#b0ffb7]",
      image: "/images/img_manwearingfacemaskmediumshot_1.png"
    },
    {
      id: 3,
      title: "Dedicated Care Support",
      bgColor: "bg-[#f4f4f4]",
      innerBgColor: "bg-[#f0d5b6]",
      image: "/images/img_mediumshotnursetalkingphone_1.png",
      hasChat: true
    },
    {
      id: 4,
      title: "Quality Medicines & At-home lab tests",
      bgColor: "bg-[#f4f4f4]",
      innerBgColor: "bg-[#d0ecff]",
      image: "/images/img_medicaltreatment.png",
      hasChat: true
    },
    {
      id: 5,
      title: "Rewards for Healthy Living",
      bgColor: "bg-[#f4f4f4]",
      image: "/images/img_rectangle_5755.png"
    },
    {
      id: 6,
      title: "Health Tools for Preventive Care",
      bgColor: "bg-[#f4f4f4]",
      innerBgColor: "bg-[#ffe1de]",
      hasPhone: true
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="flex justify-center items-center mb-2">
            <img src="/images/img_svg.svg" alt="Icon" className="w-6 h-6 mr-2" />
            <p className="text-[#f6921e] font-bold font-['Kalam']">Health Insurance your employees will use</p>
          </div>
          
          <h2 className="text-[#1a3a4f] text-5xl md:text-6xl font-bold mb-8 max-w-5xl mx-auto">
            Small thriving teams are <br/>
            <span className="bg-gradient-to-r from-[#3da647] to-[#f6921e] text-transparent bg-clip-text">4x better</span> with OneWellness
          </h2>
          
          <p className="text-[#8b909a] text-xl mb-12 max-w-3xl mx-auto">
            We pay your employee's health care bills so they can save more and spend their salaries on things they love.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefitCards.map((card) => (
            <div key={card.id} className={`${card.bgColor} rounded-[20px] h-[465px] overflow-hidden`}>
              <div className="p-8 h-full flex flex-col">
                {card.hasPhone ? (
                  <div className={`${card.innerBgColor} rounded-[15px] h-[404px] mb-4 relative overflow-hidden`}>
                    <div className="absolute top-[29px] left-[197px] w-[167px] h-[361px]">
                      <div className="relative">
                        <img src="/images/img_buttons.svg" alt="Phone buttons" className="absolute z-10" />
                        <img src="/images/img_device_surround.svg" alt="Phone frame" className="absolute z-20" />
                        <img src="/images/img_highlight_band.svg" alt="Phone highlight" className="absolute z-30" />
                        <img src="/images/img_background.svg" alt="Phone background" className="absolute z-0" />
                        <img src="/images/img_antenna_bands.svg" alt="Phone antenna" className="absolute z-40" />
                        <img src="/images/img_camera.svg" alt="Phone camera" className="absolute top-[10px] left-[107px] z-50" />
                        <img src="/images/img_speaker.svg" alt="Phone speaker" className="absolute top-[12px] left-[81px] z-50" />
                        
                        <div className="absolute top-[70px] left-[14px] z-50">
                          <img src="/images/img_screen_mockup_replace_fill.png" alt="Screen" className="w-[167px]" />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : card.hasChat ? (
                  <div className={`${card.innerBgColor} rounded-[15px] h-[404px] mb-4 relative overflow-hidden`}>
                    {card.image && (
                      <img 
                        src={card.image} 
                        alt={card.title} 
                        className="absolute right-0 top-0 z-10"
                      />
                    )}
                    
                    {/* Chat elements */}
                    <div className="absolute top-[56px] left-[63px] z-20">
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
                          <img src="/images/img_portraitafricanamericanpractitionernursesmilingcameraworkingillnessexpertise_1.png" alt="Doctor" className="w-[39px] h-[43px]" />
                        </div>
                      </div>
                      
                      <p className="absolute top-[-4px] left-[0px] text-[8px] font-bold text-[#8b909a]">Dr. Ella</p>
                    </div>
                    
                    <img src="/images/img_clip_path_group.svg" alt="Decorative element" className="absolute right-[30px] top-[-3px] z-0" />
                  </div>
                ) : (
                  <div className={`${card.innerBgColor} rounded-[15px] h-[404px] mb-4 relative overflow-hidden`}>
                    {card.image && (
                      <img 
                        src={card.image} 
                        alt={card.title} 
                        className="absolute right-0 top-0"
                      />
                    )}
                  </div>
                )}
                
                <h3 className="text-[#1a3a4f] text-2xl font-bold">{card.title}</h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-[#fff6ec] rounded-[20px] p-8 flex justify-between items-center">
          <div className="flex items-center">
            <img src="/images/img_clip_path_group_black_900.svg" alt="Icon" className="mr-4" />
            <div>
              <h3 className="text-[#1a3a4f] text-3xl font-bold mb-2">
                With little over <span className="bg-gradient-to-br from-[#3da647] to-[#f6921e] text-transparent bg-clip-text">3,000N per staff,</span> Better care has come to you.
              </h3>
            </div>
          </div>
          
          <div className="flex space-x-4">
            <button className="bg-[#3da647] text-white rounded-lg px-6 py-3 font-semibold">
              Talk to us
            </button>
            <button className="bg-[#e6ffe8] text-[#3da647] rounded-lg px-6 py-3 font-semibold">
              View plans
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;