import React, { useState } from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Fatima Shuaibu",
      role: "Lead Accountant, Faygo.",
      image: "/images/testimonial_img01.png",
      content: "With OneWellness Remit, I can monitor my mom and dad's medical records from Sweden, including their risk levels and any times they needed hospitalization. The best part? I no longer have to worry about sending money to my parents on time to cover their medical expenses—it's all taken care of seamlessly."
    },
    {
      id: 2,
      name: "Gbenga Adeniji",
      role: "Operations Analyst, Hefty.",
      image: "/images/testimonial_img01.png",
      content: "OneWellness has transformed how I manage my parents' healthcare from abroad. The platform's comprehensive monitoring and automatic payment systems give me complete peace of mind, knowing they're well taken care of without any financial delays."
    },
    {
      id: 3,
      name: "Nkechi Akagbogu",
      role: "Finance Lead, Satrin.",
      image: "/images/testimonial_img01.png",
      content: "The seamless integration of healthcare monitoring and payment systems has made it so much easier to ensure my parents receive timely medical care. OneWellness truly understands the challenges of managing family healthcare from a distance."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-[#FDF8F3]">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <p className="text-gray-600 text-lg mb-4">See what our customers are saying</p>
            <h2 className="text-[#0A4B35] text-3xl md:text-5xl font-bold">
              Don't Take Our<br />
              Word for It
            </h2>
          </div>

          {/* Testimonial Content */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Testimonial Text */}
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <blockquote className="text-gray-600 text-xl leading-relaxed mb-8">
                  {testimonials[currentIndex].content}
                </blockquote>
                
                <div className="mb-8">
                  <h4 className="text-[#0A4B35] text-xl font-bold">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-gray-600">
                    {testimonials[currentIndex].role}
                  </p>
                </div>

                {/* Navigation Buttons */}
                <div className="flex gap-4">
                  <button
                    onClick={handlePrevious}
                    className="p-3 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M15 19l-7-7 7-7" stroke="#0A4B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-3 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors"
                    aria-label="Next testimonial"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M9 5l7 7-7 7" stroke="#0A4B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Testimonial Image */}
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;