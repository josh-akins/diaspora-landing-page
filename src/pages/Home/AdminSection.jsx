import React from 'react';
import Button from '../../components/ui/Button';

const AdminSection = () => {
  const adminFeatures = [
    {
      id: 1,
      title: "Onboard your team in minutes not days",
      icon: "/images/img_svg_blue_gray_900.svg"
    },
    {
      id: 2,
      title: "Know who is fit for work",
      icon: "/images/img_svg_blue_gray_900.svg"
    },
    {
      id: 3,
      title: "Reduce risk of sick leaves",
      icon: "/images/img_svg_blue_gray_900.svg"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start gap-16">
          <div className="w-full lg:w-1/2">
            <div className="inline-block border border-[#667085a5] rounded-md px-4 py-2 mb-4">
              <span className="uppercase text-[#c2c1cc] font-bold tracking-wider text-sm">
                for employers
              </span>
            </div>
            
            <h2 className="text-[#1a3a4f] text-4xl md:text-5xl font-bold mb-10">
              Administration{" "}
              <span className="bg-gradient-to-r from-[#3da647] to-[#f6921e] text-transparent bg-clip-text">
                made easy
              </span>
            </h2>
            
            <p className="text-[#8b909a] text-xl mb-10 max-w-[648px]">
              Our user-friendly administrative dashboards make it easy for you to manage your teams insurance, with live insights into how your organisation is doing, how employees are feeling, and how you are tracking against your goals.
            </p>
            
            <ul className="space-y-6 mb-8">
              {adminFeatures.map(feature => (
                <li key={feature.id} className="flex items-start">
                  <img src={feature.icon} alt="Check" className="w-6 h-6 mt-1 mr-3" />
                  <span className="text-[#1a3a4f] text-lg font-bold font-['Kalam']">{feature.title}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
              <Button 
                variant="primary" 
                className="rounded-lg h-[57px] w-[139px]"
              >
                Talk to us
              </Button>
            </div>
            
            <div className="flex items-center text-[#228821] text-xl">
              <span className="underline mr-2">View plans</span>
              <img src="/images/img_arrow_1.svg" alt="Arrow" className="mr-1" />
              <img src="/images/img_arrow_1.svg" alt="Arrow" />
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative">
            <div className="bg-[#0f1728] rounded-lg shadow-xl w-[682px] h-[512px] relative overflow-hidden">
              <img 
                src="/images/img_screen_mockup_replace_fill_512x710.png" 
                alt="Admin dashboard" 
                className="absolute top-0 left-[-28px] rounded-lg"
              />
            </div>
            
            <div className="absolute top-[75px] left-[-136px]">
              <div className="bg-white rounded-lg shadow-lg p-4 w-[218px] h-[473px] relative">
                <img 
                  src="/images/img_screen_mockup_replace_fill_455x218.png" 
                  alt="Mobile app" 
                  className="absolute top-[18px] left-[0px]"
                />
                
                <div className="absolute top-[79px] left-[-12px]">
                  <img src="/images/img_buttons.svg" alt="Phone buttons" />
                </div>
                
                <div className="absolute top-[0px] left-[-1px]">
                  <img src="/images/img_device_surround.svg" alt="Phone frame" />
                  <img src="/images/img_highlight_band.svg" alt="Phone highlight" className="absolute top-[1px] left-[1px]" />
                  <img src="/images/img_background.svg" alt="Phone background" className="absolute top-[3px] left-[3px]" />
                  <img src="/images/img_antenna_bands.svg" alt="Phone antenna" className="absolute top-[0px] left-[0px]" />
                  <img src="/images/img_camera.svg" alt="Phone camera" className="absolute top-[14px] left-[140px]" />
                  <img src="/images/img_speaker.svg" alt="Phone speaker" className="absolute top-[17px] left-[106px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminSection;