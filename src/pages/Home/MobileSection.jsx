import React from 'react';
import Button from '../../components/ui/Button';

const MobileSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-[#f6921e] font-bold font-['Kalam'] mb-2">Download App</p>
          <h2 className="text-[#1a3a4f] text-5xl md:text-6xl font-bold mb-8">
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
        
        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-full bg-[#1a3a4f] opacity-10 z-0"></div>
          
          <div className="relative z-10 flex justify-center overflow-x-auto py-8">
            <div className="flex space-x-4">
              {/* Mobile app screenshots */}
              {[1, 2, 3, 4, 5, 6, 7].map((index) => (
                <div key={index} className="relative min-w-[235px]">
                  <div className="relative">
                    <img src="/images/img_buttons.svg" alt="Phone buttons" className="absolute z-10" />
                    <img src="/images/img_device_surround.svg" alt="Phone frame" className="absolute z-20" />
                    <img src="/images/img_highlight_band.svg" alt="Phone highlight" className="absolute z-30" />
                    <img src="/images/img_background.svg" alt="Phone background" className="absolute z-0" />
                    <img src="/images/img_antenna_bands.svg" alt="Phone antenna" className="absolute z-40" />
                    <img src="/images/img_camera.svg" alt="Phone camera" className="absolute top-[15px] left-[151px] z-50" />
                    <img src="/images/img_speaker.svg" alt="Phone speaker" className="absolute top-[18px] left-[114px] z-50" />
                    
                    {/* Different app screens based on index */}
                    {index === 1 && (
                      <div className="absolute top-[70px] left-[14px] z-50 bg-white rounded-lg p-4 w-[210px] h-[400px]">
                        <h4 className="text-[#2c312e] text-xs font-semibold">Doctor's note on Asthma</h4>
                        <div className="flex items-center mt-2">
                          <img src="/images/img_female_care_partner_avi.svg" alt="Doctor" className="w-2 h-2 mr-1" />
                          <span className="text-[#667085] text-[8px]">Note by Dr. Clement</span>
                        </div>
                      </div>
                    )}
                    
                    {index === 2 && (
                      <div className="absolute top-[70px] left-[14px] z-50 bg-white rounded-lg p-4 w-[210px] h-[400px]">
                        <div className="bg-[#f9fafb] rounded-md p-3 mb-4">
                          <p className="text-[#667085] text-[10px]">Risk profile</p>
                          <p className="text-[#82ee8f] text-sm">Low risk</p>
                        </div>
                      </div>
                    )}
                    
                    {index === 3 && (
                      <div className="absolute top-[70px] left-[14px] z-50 bg-white rounded-lg p-4 w-[210px] h-[400px]">
                        <div className="flex justify-between">
                          <div>
                            <p className="text-[#2c312e] text-xs font-semibold">My medicines</p>
                            <p className="text-[#667085] text-[10px]">2 medications</p>
                          </div>
                          <img src="/images/img_pill.png" alt="Pill icon" className="w-4 h-4" />
                        </div>
                      </div>
                    )}
                    
                    {index === 4 && (
                      <div className="absolute top-[70px] left-[14px] z-50 bg-[#228821] rounded-lg p-4 w-[210px] h-[400px]">
                        <div className="bg-white rounded-md p-2 mb-4">
                          <div className="flex items-center">
                            <img src="/images/img_group_238040.svg" alt="Doctor icon" className="w-6 h-6 mr-2" />
                            <span className="text-[#228821] text-xs">Consult Doctor</span>
                          </div>
                        </div>
                        <p className="text-white text-xs">Your doctor is waiting for you</p>
                      </div>
                    )}
                    
                    {index === 5 && (
                      <div className="absolute top-[70px] left-[14px] z-50 bg-white rounded-lg p-4 w-[210px] h-[400px]">
                        <div className="flex justify-between">
                          <div>
                            <p className="text-[#2c312e] text-xs font-semibold">Lab results</p>
                            <p className="text-[#667085] text-[10px]">1 results</p>
                          </div>
                          <img src="/images/img_empty_test_tube.png" alt="Lab icon" className="w-4 h-4" />
                        </div>
                      </div>
                    )}
                    
                    {index === 6 && (
                      <div className="absolute top-[70px] left-[14px] z-50 bg-white rounded-lg p-4 w-[210px] h-[400px]">
                        <div className="flex items-center mb-4">
                          <img src="/images/img_group_237974.png" alt="User avatar" className="w-6 h-6 mr-3" />
                          <p className="text-[#2c312e] text-xs">Jenni (Care assistant)</p>
                        </div>
                        <div className="bg-[#f4f4f4] rounded-t-md rounded-r-md p-3 max-w-[150px] mb-4">
                          <p className="text-[9px] text-[#667085]">Send an image of your rash so I can take a look at it</p>
                        </div>
                      </div>
                    )}
                    
                    {index === 7 && (
                      <div className="absolute top-[70px] left-[14px] z-50 bg-white rounded-lg p-4 w-[210px] h-[400px]">
                        <div className="flex justify-between">
                          <div>
                            <p className="text-[#2c312e] text-xs font-semibold">Health records</p>
                            <p className="text-[#667085] text-[10px]">1 new record</p>
                          </div>
                          <img src="/images/img_moleskine.png" alt="Records icon" className="w-4 h-4" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-[50px] bg-gradient-to-t from-[#0c4e11] to-transparent z-20 flex items-center justify-center">
            <div className="text-white text-lg font-semibold tracking-wider uppercase">
              HEALTHIER - HAPPIER TEAMS 💯
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileSection;