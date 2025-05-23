import React from 'react';
import Button from '../../../components/ui/Button';

const StepsSection = () => {
  const steps = [
    {
      id: 1,
      title: "Create Account",
      number: "1"
    },
    {
      id: 2,
      title: "Invite Team members",
      number: "2"
    },
    {
      id: 3,
      title: "Access benefits",
      number: "3"
    },
    {
      id: 4,
      title: "Deliver Care",
      number: "4"
    }
  ];

  return (
    <section className="py-16 bg-[#f6fff7]">
      <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="w-full lg:w-1/2">
        <div className="mb-16">
          <p className="text-[#f6921e] font-bold font-['Kalam'] mb-2">How it works</p>
          <h2 className="text-[#1a3a4f] text-3xl md:text-5xl font-bold mb-8 max-w-[400px]">
            It only takes{" "}
            <span className="bg-gradient-to-r from-[#3da647] to-[#f6921e] text-transparent bg-clip-text">
              4 steps
            </span>
          </h2>
          <p className="text-[#8b909a] text-lg max-w-[648px]">
            Get your teams set up to access to quality, personalized healthcare insurance cover with a dedicated care partner for each member.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
          <Button 
            variant="primary" 
            className="rounded-lg h-[57px] w-[139px]"
          >
            Talk to us
          </Button>
          <div className="flex items-center text-[#228821] text-lg pl-4">
            <span className="underline mr-2">View plans</span>
            <img src="/images/img_arrow_1.svg" alt="Arrow" className="ml-2 mr-1 w-4 h-4" />
            <img src="/images/img_arrow_1.svg" alt="Arrow" className='w-4 h-4' />
          </div>
        </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 md:mt-16">
          {steps.map(step => (
            <div 
              key={step.id} 
              className="bg-white rounded-[15px] shadow-md border border-[#d9d9d933] p-5 h-[auto] w-full md:w-auto"
            >
              <div className="bg-[#3da647] rounded-full w-12 h-12 flex items-center justify-center mb-8">
                <span className="text-white text-xl font-bold">{step.number}</span>
              </div>
              <h3 className="text-[#1a3a4f] md:text-xl font-bold">
                {step.title.split(' ').map((word, index) => (
                  <React.Fragment key={index}>
                    {/* {index === 1 && <br />} */}
                    {index === 1 ? (
                      <span className="bg-gradient-to-r from-[#3da647] to-[#f6921e] text-transparent bg-clip-text">
                        {word}
                      </span>
                    ) : index === 2 ? (
                      <span className="bg-gradient-to-r from-[#3da647] to-[#f6921e] text-transparent bg-clip-text">
                        {word}
                      </span>
                    ) : (
                      word
                    )}{' '}
                  </React.Fragment>
                ))}
              </h3>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default StepsSection;