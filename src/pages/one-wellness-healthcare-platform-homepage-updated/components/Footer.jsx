import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#FDE9D9] pt-12 pb-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 md:gap-0">
          {/* Left: Logo and subtext */}
          <div className="md:w-1/3 flex flex-col mb-8 md:mb-0">
          <img src="/images/img_logo.svg" alt="OneWellness" className="block mr-auto h-8 mb-4" />
            {/* <div className="flex items-center mb-2">
              <span className="text-2xl font-bold text-[#F6921E] mr-1">One</span>
              <span className="text-2xl font-bold text-[#228821]">wellness</span>
            </div>
            <span className="text-xs text-[#228821] font-semibold mb-3">by @oneHealth</span> */}
            <p className="text-[#6B7280] text-base max-w-xs mt-2">
              We have a lot of exciting benefits for you and your dependants.
            </p>
          </div>

          {/* Center: Navigation columns */}
          <div className="flex-1 flex flex-col sm:flex-row justify-between gap-8 md:gap-0">
            <div className="flex flex-col space-y-3 min-w-[120px]">
              <Link to="/" className="font-medium text-black hover:text-[#228821]">Home</Link>
              <Link to="/services" className="font-medium text-black hover:text-[#228821]">Services</Link>
              <Link to="/benefits" className="font-medium text-black hover:text-[#228821]">Benefits</Link>
              <Link to="/pricing" className="font-medium text-black hover:text-[#228821]">Pricing</Link>
              <Link to="/testimonials" className="font-medium text-black hover:text-[#228821]">Testimonials</Link>
            </div>
            <div className="flex flex-col space-y-3 min-w-[140px] mt-8 sm:mt-0">
              <Link to="/privacy-policy" className="font-medium text-black hover:text-[#228821]">Privacy Policy</Link>
              <Link to="/terms-of-service" className="font-medium text-black hover:text-[#228821]">Terms of Service</Link>
              <Link to="/support" className="font-medium text-black hover:text-[#228821]">Support</Link>
              <Link to="/faq" className="font-medium text-black hover:text-[#228821]">FAQ</Link>
            </div>
            <div className="flex flex-col space-y-2 min-w-[200px] mt-8 sm:mt-0">
              <span className="font-medium text-black">09017558180</span>
              <span className="text-black">onewellness@onehealthng.com</span>
              <span className="text-black">56, Opebi Rd, Opebi 100281,<br />Ikeja, Lagos, Nigeria.</span>
              <div className="flex space-x-3 mt-2">
                <a href="https://twitter.com/onewellness" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-8 h-8 rounded bg-black">
                  <svg fill="white" viewBox="0 0 24 24" width="18" height="18"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 0 0-8.38 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.117 2.823 5.254a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.058 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z"/></svg>
                </a>
                <a href="https://instagram.com/onewellness" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-8 h-8 rounded bg-black">
                  <svg fill="white" viewBox="0 0 24 24" width="18" height="18"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.069 1.646.069 4.85s-.011 3.584-.069 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.011-4.85-.069c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.13 4.602.402 3.635 1.37 2.668 2.337 2.396 3.51 2.338 4.788 2.279 6.068 2.267 6.477 2.267 12c0 5.523.012 5.932.071 7.212.058 1.278.33 2.451 1.297 3.418.967.967 2.14 1.239 3.418 1.297C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.278-.058 2.451-.33 3.418-1.297.967-.967 1.239-2.14 1.297-3.418.059-1.28.071-1.689.071-7.212 0-5.523-.012-5.932-.071-7.212-.058-1.278-.33-2.451-1.297-3.418C19.399.402 18.226.13 16.948.072 15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
                </a>
                <a href="https://linkedin.com/company/onewellness" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-8 h-8 rounded bg-black">
                  <svg fill="white" viewBox="0 0 24 24" width="18" height="18"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.845-1.563 3.042 0 3.604 2.003 3.604 4.605v5.591z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Divider */}
        <div className="border-t border-[#E5E7EB] mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-[#6B7280]">
          <span>© 2024 OneHealth NG. All rights reserved</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;