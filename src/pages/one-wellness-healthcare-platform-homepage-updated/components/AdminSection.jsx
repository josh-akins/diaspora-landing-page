import React from 'react';
import Button from '../../../components/ui/Button';

const AdminSection = () => {
  const adminFeatures = [
    {
      id: 1,
      title: 'Onboard your team in minutes not days',
      icon: '/images/img_svg_blue_gray_900.svg',
    },
    {
      id: 2,
      title: 'Know who is fit for work',
      icon: '/images/img_svg_blue_gray_900.svg',
    },
    {
      id: 3,
      title: 'Reduce risk of sick leaves',
      icon: '/images/img_svg_blue_gray_900.svg',
    },
  ];

  return (
    <section className="md:pt-20 bg-white">
      <div className="container pt-20 mx-auto pl-4 relative">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <div className="inline-block border border-[#667085a5] rounded-md px-4 py-1 mb-4">
              <span className="uppercase text-[#c2c1cc] font-bold tracking-wider text-xs">
                for employers
              </span>
            </div>

            <h2 className="text-[#1a3a4f] text-4xl md:text-5xl font-bold mb-10 w-full lg:w-[400px]">
              Administration{' '}
              <span className="bg-gradient-to-r from-[#3da647] to-[#f6921e] text-transparent bg-clip-text">
                made easy
              </span>
            </h2>

            <p className="text-[#8b909a] text-md mb-10 max-w-[500px]">
              Our user-friendly administrative dashboards make it easy for you to manage your teams
              insurance, with live insights into how your organisation is doing, how employees are
              feeling, and how you are tracking against your goals.
            </p>

            <ul className="space-y-6 mb-8">
              {adminFeatures.map((feature) => (
                <li key={feature.id} className="flex items-start">
                  <img src={feature.icon} alt="Check" className="w-6 h-6 mt-1 mr-3" />
                  <span className="text-[#1a3a4f] text-lg font-bold font-['Kalam']">
                    {feature.title}
                  </span>
                </li>
              ))}
            </ul>

              <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button variant="primary" className="rounded-lg h-[50px] w-[139px] text-sm">
                Talk to us
              </Button>
            </div>

            <div
              className="flex items-center text-[#228821] cursor-pointer text-md"
              onClick={() => window.open('https://app.onewellness.in/admin', '_blank')}
            >
              <span className="underline mr-2">View plans</span>
              <img src="/images/img_arrow_1.svg" alt="Arrow" className="ml-2 mr-1 w-4 h-4" />
              <img src="/images/img_arrow_1.svg" alt="Arrow" className="w-4 h-4" />
            </div>
              </div>
          </div>

          <img
            src="/images/section_eight_img01.png"
            alt="Admin dashboard"
            className="relative lg:absolute lg:top-32 md:right-[-80px] w-full min-h-full lg:min-h-[600px] lg:w-[700px] rounded-lg "
          />
        </div>
      </div>
    </section>
  );
};

export default AdminSection;
