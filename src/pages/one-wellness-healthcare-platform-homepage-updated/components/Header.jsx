import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';

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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 lg:px-0 xl:px-6 flex gap-4 md:gap-6 justify-between items-center">
        <div className="flex flex-col items-end">
          <Link to="/" className="flex items-center">
            <img src="/images/img_onewellness_logo_1.svg" alt="OneWellness" className="h-6" />
          </Link>
          <div className="ml-2 text-sm text-gray-500">
            <span>By</span>
            <img src="/images/img_ohnewpng_1.png" alt="OneHealth" className="h-3 ml-1 inline" />
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="#features" className="text-accent font-semibold text-sm hover:text-primary transition-colors duration-200">Features</Link>
          <Link to="#pricing" className="text-accent font-semibold text-sm hover:text-primary transition-colors duration-200">Pricing</Link>
          <Link to="#diaspora" className="text-accent font-semibold text-sm hover:text-primary transition-colors duration-200">Diaspora</Link>
          <Link to="#features" className="text-accent font-semibold text-sm hover:text-primary transition-colors duration-200">Features</Link>
          <Link to="#blog" className="text-accent font-semibold text-sm hover:text-primary transition-colors duration-200">Blog</Link>
          <Link to="#contact" className="text-accent font-semibold text-sm hover:text-primary transition-colors duration-200">Contact Us</Link>
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button 
            variant="outline" 
            className="border border-gray-500 rounded-[8px] text-accent font-light h-[44px]"
          >
            <div className="flex items-center">
              {/* <img src="/images/img_apple_logo.png" alt="Apple" className="w-5 h-5 mr-2" />
              <img src="/images/img_google_play.png" alt="Google Play" className="w-5 h-5 mr-2" />
              <span className="mx-2 text-gray-200">|</span> */}
              <span className='text-sm'>Download app</span>
            </div>
          </Button>
          <Button 
            variant="primary" 
            className="rounded-[8px] font-light text-sm h-[44px] min-w-[120px]"
          >
            Talk to us
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-accent p-2 focus:outline-none focus:ring-2 focus:ring-primary rounded-md"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
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
              <Link 
                to="#features" 
                className="text-accent font-semibold py-2 hover:text-primary transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link 
                to="#pricing" 
                className="text-accent font-semibold py-2 hover:text-primary transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                to="#businesses" 
                className="text-accent font-semibold py-2 hover:text-primary transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Businesses
              </Link>
              <Link 
                to="#hmos" 
                className="text-accent font-semibold py-2 hover:text-primary transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                HMOs
              </Link>
              <Link 
                to="#chat" 
                className="text-accent font-semibold py-2 hover:text-primary transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Chat With Us
              </Link>
              <div className="flex flex-col space-y-3 pt-3">
                <Button 
                  variant="outline" 
                  className="border border-gray-500 rounded-[10px] text-accent font-semibold h-[44px]"
                >
                  <div className="flex items-center justify-center">
                    <img src="/images/img_apple_logo.png" alt="Apple" className="w-5 h-5 mr-2" />
                    <img src="/images/img_google_play.png" alt="Google Play" className="w-5 h-5 mr-2" />
                    <span className="mx-2 text-gray-200">|</span>
                    <span>Download app</span>
                  </div>
                </Button>
                <Button 
                  variant="primary" 
                  className="rounded-[10px] font-semibold h-[44px]"
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