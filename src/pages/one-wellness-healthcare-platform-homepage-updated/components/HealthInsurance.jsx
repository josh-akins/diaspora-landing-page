import React from 'react';

const HealthInsurance = () => {
  const benefits = [
    {
      icon: "/images/section_seven_img02.png",
      title: "Smooth Onboarding for Teams",
      description: "Get your employees signed up to access care in under a minute. No paperwork or long forms required."
    },
    {
      icon: "/images/section_seven_img03.png",
      title: "Reduce Risk of Staff Downtime",
      description: "Teams work more productively and feel more engaged in the workplace when they are provided with healthcare designed around them."
    },
    {
      icon: "/images/section_seven_img04.png",
      title: "Save on Health Related Costs",
      description: "As businesses grow, medical cost for employees can be very expensive. Onewellness helps you save money on medical cost for your business and employees"
    },
    {
      icon: "/images/section_seven_img05.png",
      title: "Track Organizational Health",
      description: "Take better control of employee health. Receive broad analytics on your organizational health as an entity with live insights into how your organisation is doing, how employees are feeling, and how you are tracking against your goals."
    },
    {
      icon: "/images/section_seven_img06.png",
      title: "Comprehensive Employee Care",
      description: "Onewellness provides your employees an integrated health system for doctor consultation, medicine delivery, reminders & lifestyle monitoring and is scalable to handle hundreds of employees & their families."
    }
  ];

  return (
    <section className="relative py-20 bg-[#08604C] overflow-hidden min-h-screen">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img src="/images/bg_pattern02.png" alt="pattern" className="w-full h-full object-cover opacity-[0.05]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-16">
          {/* Left Side - Formula */}
          <div className="w-full lg:w-5/12 text-white pt-8">

          <div className="inline-block border border-[#667085a5] rounded-md px-4 py-1 mb-4">
              <span className="uppercase text-[#c2c1cc] font-bold tracking-wider text-xs">
              WE DO HEALTH INSURANCE THE RIGHT WAY
              </span>
            </div>
            
            <div className="text-3xl md:text-5xl font-bold space-y-4">
              <div>Health Insurance +</div>
              <div>Wellness Rewards +</div>
              <div className="flex items-center gap-4">
                <span>=</span>
                <span className="text-[#3DA647] text-2xl md:text-3xl font-bold">Satisfied Workforce</span>
              </div>
            </div>

            {/* Phone Mockup */}
            <div className="relative mt-16 md:mt-40">
            <img src="/images/section_seven_img01.png" alt="App Interface" className="w-full max-w-[500px]" />
            </div>
          </div>

          {/* Right Side - Benefits */}
          <div className="w-full lg:w-7/12">
            <div className="space-y-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-6 text-white border-b border-white/10 pb-8">
                  <div className="flex-shrink-0">
                    <img 
                      src={benefit.icon} 
                      alt={benefit.title} 
                      className={`w-10 h-10 ${index === 4 || index === 3 ? 'scale-150' : ''}`}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-white/80 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthInsurance;
