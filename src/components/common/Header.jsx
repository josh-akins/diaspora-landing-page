import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img src="/images/img_onewellness_logo_1.svg" alt="OneWellness" className="h-7" />
          </Link>
          <div className="ml-2 text-sm text-[#8b909a]">
            <span>By</span>
            <img src="/images/img_ohnewpng_1.png" alt="OneHealth" className="h-3 ml-1 inline" />
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="#features" className="text-[#211e1d] font-semibold text-lg hover:text-[#3da647]">Features</Link>
          <Link to="#pricing" className="text-[#211e1d] font-semibold text-lg hover:text-[#3da647]">Pricing</Link>
          <Link to="#businesses" className="text-[#211e1d] font-semibold text-lg hover:text-[#3da647]">Businesses</Link>
          <Link to="#hmos" className="text-[#211e1d] font-semibold text-lg hover:text-[#3da647]">HMOs</Link>
          <Link to="#chat" className="text-[#211e1d] font-semibold text-lg hover:text-[#3da647]">Chat With Us</Link>
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button 
            variant="outline" 
            className="border border-[#8b909a] rounded-[10px] text-[#1a3a4f] font-semibold"
          >
            <div className="flex items-center">
              <img src="/images/img_apple_logo.png" alt="Apple" className="w-5 h-5 mr-2" />
              <img src="/images/img_google_play.png" alt="Google Play" className="w-5 h-5 mr-2" />
              <span className="mx-2 text-[#f4f4f4]">|</span>
              <span>Download app</span>
            </div>
          </Button>
          <Button 
            variant="primary" 
            className="rounded-[10px] font-semibold"
          >
            Talk to us
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-[#211e1d]"
          onClick={toggleMobileMenu}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-3">
              <Link to="#features" className="text-[#211e1d] font-semibold py-2 hover:text-[#3da647]">Features</Link>
              <Link to="#pricing" className="text-[#211e1d] font-semibold py-2 hover:text-[#3da647]">Pricing</Link>
              <Link to="#businesses" className="text-[#211e1d] font-semibold py-2 hover:text-[#3da647]">Businesses</Link>
              <Link to="#hmos" className="text-[#211e1d] font-semibold py-2 hover:text-[#3da647]">HMOs</Link>
              <Link to="#chat" className="text-[#211e1d] font-semibold py-2 hover:text-[#3da647]">Chat With Us</Link>
              <div className="flex flex-col space-y-3 pt-3">
                <Button 
                  variant="outline" 
                  className="border border-[#8b909a] rounded-[10px] text-[#1a3a4f] font-semibold"
                >
                  <div className="flex items-center justify-center">
                    <img src="/images/img_apple_logo.png" alt="Apple" className="w-5 h-5 mr-2" />
                    <img src="/images/img_google_play.png" alt="Google Play" className="w-5 h-5 mr-2" />
                    <span className="mx-2 text-[#f4f4f4]">|</span>
                    <span>Download app</span>
                  </div>
                </Button>
                <Button 
                  variant="primary" 
                  className="rounded-[10px] font-semibold"
                >
                  Talk to us
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;