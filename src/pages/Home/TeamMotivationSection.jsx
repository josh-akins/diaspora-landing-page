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
            <div className="inline-block border border-[#667085a5] rounded-md px-4 py-2 mb-4">
              <span className="uppercase text-[#c2c1cc] font-bold tracking-wider text-sm">
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
            
            <p className="text-[#8b909a] text-xl mb-10 max-w-[648px]">
              We give weekly wellness rewards to boost healthy habits, treatment adherence and healthy activities. Redeem for rewards like airtime, free meals, movie tickets, gym subscriptions, and more.
            </p>
            
            <div className="flex items-center text-[#228821] text-xl">
              <span className="underline mr-2">View plans</span>
              <img src="/images/img_arrow_1.svg" alt="Arrow" className="mr-1" />
              <img src="/images/img_arrow_1.svg" alt="Arrow" />
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="bg-[#f4f4f4] rounded-[40px] w-full h-[729px] relative">
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="bg-[#eaeaea] rounded-full w-[506px] h-[452px] absolute top-0 left-0"></div>
                
                {/* Rewards visualization */}
                <div className="absolute top-[48px] left-[54px] flex space-x-4">
                  <div className="bg-[#1eb482] rounded-full w-[120px] h-[120px] border-[10px] border-white overflow-hidden">
                    <img src="/images/img_headshot1png.png" alt="Team member 1" className="w-[100px] h-[100px] object-cover mt-[10px] ml-[10px]" />
                  </div>
                  <div className="bg-[#ed7b2a] rounded-full w-[120px] h-[120px] border-[10px] border-white overflow-hidden">
                    <img src="/images/img_headshot2png.png" alt="Team member 2" className="w-[100px] h-[100px] object-cover mt-[10px] ml-[10px]" />
                  </div>
                  <div className="bg-[#05aaff] rounded-full w-[121px] h-[121px] border-[10px] border-white overflow-hidden relative">
                    <div className="bg-[#fff6ec] rounded-full w-[121px] h-[121px] border-[12px] border-white shadow-lg overflow-hidden absolute top-0 left-0">
                      <img src="/images/img_portraitafricanamericanpractitionernursesmilingcameraworkingillnessexpertise_1_121x121.png" alt="Team member 3" className="w-[121px] h-[121px] object-cover" />
                    </div>
                  </div>
                </div>
                
                <img src="/images/img_divunderlineanimationcontainer.svg" alt="Underline" className="absolute top-[182px] left-[54px]" />
                
                {/* Reward stars */}
                <div className="absolute top-[286px] left-[321px] bg-[#fadd4a] w-[118px] h-[124px] border-2 border-[#d6a42f] rotate-12"></div>
                <div className="absolute top-[606px] left-[522px] bg-[#ee7037] w-[207px] h-[154px] border-2 border-[#ff8555] rotate-12"></div>
                
                {/* Reward bubbles */}
                <div className="absolute top-[217px] left-[354px] bg-[#85afff] rounded-[42px] shadow-md px-6 py-4 rotate-3">
                  <div className="border border-white rounded-[37px] p-3">
                    <p className="text-white text-4xl font-bold">Gym subs</p>
                  </div>
                </div>
                
                <div className="absolute top-[292px] left-[406px] bg-[#85afff] rounded-[53px] shadow-md px-6 py-4 rotate-6">
                  <div className="border border-white rounded-[47px] p-3">
                    <p className="text-white text-4xl font-bold">Airtime</p>
                  </div>
                </div>
                
                <div className="absolute top-[398px] left-[311px] bg-[#85afff] rounded-[58px] shadow-md px-6 py-4 rotate-3">
                  <div className="border border-white rounded-[52px] p-3">
                    <p className="text-white text-4xl font-bold">Meals</p>
                  </div>
                </div>
                
                <div className="absolute top-[534px] left-[289px] bg-[#ff8080] rounded-[63px] shadow-md px-6 py-4 rotate-3">
                  <div className="border border-white rounded-[57px] p-3">
                    <p className="text-white text-4xl font-bold">Movie ticket</p>
                  </div>
                </div>
                
                <div className="absolute top-[471px] left-[506px] bg-[#85afff] rounded-[46px] shadow-md px-6 py-4 rotate-3">
                  <div className="border border-white rounded-[32px] p-3">
                    <p className="text-white text-4xl font-bold">Vouchers</p>
                  </div>
                </div>
                
                <div className="absolute top-[115px] left-[393px] bg-[#85afff] rounded-[62px] shadow-md px-6 py-4 rotate-3">
                  <div className="border border-white rounded-[56px] p-3">
                    <p className="text-white text-4xl font-bold">Data</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMotivationSection;