import React, { useState, useEffect, useRef } from 'react';
import Card from '../../../components/common/Card';

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const slideInterval = useRef(null);
  const slideContainerRef = useRef(null);

  const originalTestimonials = [
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

  // Create duplicated array for infinite scroll
  const testimonials = [...originalTestimonials, ...originalTestimonials];

  const startSlideTimer = () => {
    stopSlideTimer();
    slideInterval.current = setInterval(() => {
      moveNext();
    }, 5000); // Longer interval for testimonials to allow reading
  };

  const stopSlideTimer = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
  };

  const moveNext = () => {
    setIsTransitioning(true);
    setCurrentSlide(prev => prev + 1);
  };

  // Calculate slide width based on screen size
  const getSlideWidth = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 576) return 100; // 1 slide
      if (window.innerWidth < 1024) return 50; // 2 slides
      return 33.333; // 3 slides
    }
    return 33.333; // Default to 3 slides
  };

  // Handle the transition end and reset position if needed
  useEffect(() => {
    if (currentSlide >= originalTestimonials.length) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(0);
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [currentSlide]);

  useEffect(() => {
    startSlideTimer();
    return () => stopSlideTimer();
  }, []);

  return (
    <section className="py-16 bg-[#0e6451] text-white relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none z-0" style={{ 
        backgroundImage: 'url(/images/bg_pattern03.png)', 
        backgroundRepeat: 'repeat',
        backgroundPosition: 'center', 
        opacity: 0.05 
      }}>
      </div>

      <div className="container mx-auto px-4">
        <h2 className="text-[#FFFFFF] text-5xl md:text-6xl font-semibold mb-16 text-center">
          Listen to our{" "}
          <span className="bg-gradient-to-r from-[#3da647] to-[#f6921e] text-transparent bg-clip-text">
            Clients
          </span>
        </h2>
        
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              ref={slideContainerRef}
              className={`flex gap-4 md:gap-8 transition-transform duration-700 ${isTransitioning ? 'ease-in-out' : 'duration-0'}`}
              style={{ transform: `translateX(-${currentSlide * getSlideWidth()}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={`${testimonial.id}-${index}`}
                  className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 md:px-2"
                >
                  <Card 
                    backgroundColor="bg-white"
                    shadowEffect={true}
                    rounded="rounded-[20px]"
                    className="h-full flex flex-col"
                  >
                    <div className="flex-1 flex flex-col items-center md:p-6">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name} 
                        className="w-[100px] h-[100px] rounded-full mb-[35px]"
                      />
                      <p className="text-[#66696b] text-center text-sm leading-[30px] mb-6">
                        {testimonial.content}
                      </p>
                      <div className="mt-auto">
                        <h4 className="text-[#1a3a4f] text-md font-bold text-center">{testimonial.name}</h4>
                        <p className="text-[#676a6b] text-base text-center">{testimonial.role}</p>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-12 space-x-4">
            <button 
              onClick={() => setCurrentSlide(prev => prev === 0 ? testimonials.length - 1 : prev - 1)}
              className="bg-white rounded-full w-[50px] h-[50px] md:w-[70px] md:h-[70px] flex items-center justify-center border border-[#8b9b9c] hover:bg-gray-50 transition-colors"
            >
              <img 
                src="/images/img_arrow_26.svg" 
                alt="Previous" 
                className="w-4 h-4 md:w-6 md:h-6"
              />
            </button>
            <button 
              onClick={() => setCurrentSlide(prev => prev === testimonials.length - 1 ? 0 : prev + 1)}
              className="bg-white rounded-full w-[50px] h-[50px] md:w-[70px] md:h-[70px] flex items-center justify-center border border-[#8b9b9c] hover:bg-gray-50 transition-colors"
            >
              <img 
                src="/images/img_arrow_26.svg" 
                alt="Next"
                className="transform rotate-180 w-4 h-4 md:w-6 md:h-6" 
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;