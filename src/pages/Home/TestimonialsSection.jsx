import React from 'react';
import Card from '../../components/common/Card';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Fatima Shuaibu",
      role: "Lead Accountant, Faygo.",
      avatar: "/images/img_ellipse_1828.png",
      content: "With OneWellness , I was able to monitor my mom and dad's medical records from Sweden, especially their risk levels and the times that they needed hospitalization.\nThe best part of using onewellness is that I don't have to worry about getting money to my parents on time to pay for services rendered."
    },
    {
      id: 2,
      name: "Gbenga Adeniji",
      role: "Operations Analyst, Hefty.",
      avatar: "/images/img_ellipse_1830.png",
      content: "With OneWellness, I was able to monitor my mom and dad's medical records from Sweden, especially their risk levels and the times that they needed hospitalization.\nThe best part of using onewellness is that I don't have to worry about getting money to my parents on time to pay for services rendered."
    },
    {
      id: 3,
      name: "Nkechi Akagbogu",
      role: "Finance Lead, Satrin.",
      avatar: "/images/img_ellipse_1829.png",
      content: "With OneWellness I was able to monitor my mom and dad's medical records from Sweden, especially their risk levels and the times that they needed hospitalization.\nThe best part of using onewellness is that I don't have to worry about getting money to my parents on time to pay for services rendered."
    }
  ];

  return (
    <section className="py-16 bg-[#0e6451] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-[#1a3a4f] text-5xl md:text-6xl font-semibold mb-16 text-center">
          Listen to our{" "}
          <span className="bg-gradient-to-r from-[#3da647] to-[#f6921e] text-transparent bg-clip-text">
            Clients
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <Card 
              key={testimonial.id}
              backgroundColor="bg-white"
              shadowEffect={true}
              rounded="rounded-[20px]"
              className="h-[465px] flex flex-col"
            >
              <div className="flex-1 flex flex-col items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-[100px] h-[100px] rounded-full mt-[58px] mb-[46px]"
                />
                <p className="text-[#66696b] text-center text-sm leading-[30px] px-8 mb-6">
                  {testimonial.content}
                </p>
                <div className="mt-auto mb-8">
                  <h4 className="text-[#1a3a4f] text-lg font-bold text-center">{testimonial.name}</h4>
                  <p className="text-[#676a6b] text-base text-center">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center mt-12 space-x-4">
          <button className="bg-white rounded-full w-[90px] h-[90px] flex items-center justify-center border border-[#8b9b9c]">
            <img src="/images/img_arrow_26.svg" alt="Previous" className="transform rotate-180" />
          </button>
          <button className="bg-white rounded-full w-[90px] h-[90px] flex items-center justify-center border border-[#8b9b9c]">
            <img src="/images/img_arrow_26.svg" alt="Next" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;