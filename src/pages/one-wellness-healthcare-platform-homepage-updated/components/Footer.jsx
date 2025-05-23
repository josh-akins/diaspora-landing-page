import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-5 md:mb-0">
            <img src="/images/img_logo.svg" alt="OneWellness" className="h-8 mb-4" />
          </div>
          
          <div className="flex flex-wrap gap-8">
            <div className="w-full sm:w-auto">
              <nav className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
                <Link to="#features" className="text-sm text-[#667085] hover:text-[#3da647]">Features</Link>
                <Link to="#pricing" className="text-sm text-[#667085] hover:text-[#3da647]">Pricing</Link>
                <Link to="#businesses" className="text-sm text-[#667085] hover:text-[#3da647]">Businesses</Link>
                <Link to="#hmos" className="text-sm text-[#667085] hover:text-[#3da647]">HMOs</Link>
                <Link to="#chat" className="text-sm text-[#667085] hover:text-[#3da647]">Chat With Us</Link>
                <Link to="#download" className="text-sm text-[#667085] hover:text-[#3da647]">Download App</Link>
              </nav>
            </div>
            
          </div>
            <div className="w-full sm:w-auto mt-6 sm:mt-0">
              <h3 className="text-[#228821] font-extrabold mb-4">Contact us</h3>
              <div className="space-y-2 text-[#667085]">
                <p>09017558180</p>
                <p className="text-[#228821] font-light">onewellness@onehealthng.com</p>
                <p>56, Opebi Rd, Opebi<br />100281, Ikeja, Lagos,<br />Nigeria.</p>
                <div className="flex space-x-4 mt-4">
                  <a href="https://twitter.com/onewellness" target="_blank" rel="noopener noreferrer" className="bg-[#3da647] rounded-lg p-2">
                    <img src="/images/img_twitter.svg" alt="Twitter" className="h-6 w-6 pt-1" />
                  </a>
                  <a href="https://instagram.com/onewellness" target="_blank" rel="noopener noreferrer" className="bg-[#3da647] rounded-lg p-2">
                    <img src="/images/img_instagram.png" alt="Instagram" className="h-7 w-7" />
                  </a>
                  <a href="https://linkedin.com/company/onewellness" target="_blank" rel="noopener noreferrer" className="bg-[#3da647] rounded-lg p-2">
                    <img src="/images/img_linkedin.svg" alt="LinkedIn" className="h-7 w-7" />
                  </a>
                </div>
              </div>
            </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between text-sm text-[#667085]">
          <p>Copyright © OneHealth NG. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-[#3da647]">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-[#3da647]">Terms of service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;