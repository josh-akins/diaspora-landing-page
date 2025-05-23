import React from 'react';

const TeamMotivationSection = () => {
  const motivationFeatures = [
    {
      id: 1,
      title: "Redeem rewards for staying well and fit",
      icon: "/images/img_svg_blue_gray_900.svg"
    },
    {
      id: 2,
      title: "Experience employee palliatives",
      icon: "/images/img_svg_blue_gray_900.svg"
    },
    {
      id: 3,
      title: "Gamified approach to encourage healthy behaviours",
      icon: "/images/img_svg_blue_gray_900.svg"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start gap-16">
          <div className="w-full lg:w-1/2">
            <div className="inline-block border border-[#667085a5] rounded-md px-4 py-1 mb-4">
              <span className="uppercase text-[#c2c1cc] font-bold tracking-wider text-xs">
                coming soon
              </span>
            </div>
            
            <h2 className="text-[#1a3a4f] text-4xl md:text-5xl font-bold mb-10">
              Motivating teams{" "}
              <span className="bg-gradient-to-r from-[#3da647] to-[#f6921e] text-transparent bg-clip-text">
                with rewards & gifts
              </span>
            </h2>
            
            <ul className="space-y-6 mb-8">
              {motivationFeatures.map(feature => (
                <li key={feature.id} className="flex items-start">
                  <img src={feature.icon} alt="Check" className="w-6 h-6 mt-1 mr-3" />
                  <span className="text-[#1a3a4f] text-lg font-bold font-['Kalam']">{feature.title}</span>
                </li>
              ))}
            </ul>
            
            <p className="text-[#8b909a] text-md mb-10 max-w-[648px]">
              We give weekly wellness rewards to boost healthy habits, treatment adherence and healthy activities. Redeem for rewards like airtime, free meals, movie tickets, gym subscriptions, and more.
            </p>
            
            <div className="flex items-center text-[#228821] cursor-pointer text-md" onClick={() => window.open('https://www.onewellness.ng/plans', '_blank')}>
              <span className="underline mr-2">View plans</span>
              <img src="/images/img_arrow_1.svg" alt="Arrow" className="ml-2 mr-1 w-[20px]" />
              <img src="/images/img_arrow_1.svg" alt="Arrow" className="w-[20px]" />
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="bg-[#f4f4f4] rounded-[40px] w-full h-[auto] relative">
            <img src="/images/section_six_img01.png" alt="Team Motivation" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMotivationSection;