import React from 'react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Company Logo */}
          <div className="flex items-center transition-transform duration-200 hover:scale-105">
            <a href="/" className="bg-white p-3 rounded-lg shadow-md">
              <img 
                src="./logo.png" 
                alt="Company Logo" 
                className="h-8 w-auto"
              />
             
            </a>
          </div>

          {/* Copyright Statement */}
          <div className="text-center">
            <p className="text-white/80 text-sm lg:text-base">
              © {new Date().getFullYear()} Your Company Name. All Rights Reserved.
            </p>
          </div>

          {/* Developer Credit */}
          <div className="flex items-center transition-transform duration-200 hover:scale-105">
            <a
              href="https://www.yourwebsite.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-blue-400 transition-colors duration-200"
            >
              <span className="text-sm font-medium">Developed by YourCompany</span>
              {/* Arrow Up Right Icon */}
              <svg 
                className="w-4 h-4 opacity-60 hover:opacity-100 transition-opacity duration-200" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>
          </div>

        </div>
        
        {/* Back to Top Button */}
        <div className="flex justify-center mt-8 pt-6 border-t border-white/20">
          <button
            onClick={scrollToTop}
            className="text-white/60 hover:text-blue-400 text-sm transition-all duration-200 hover:-translate-y-0.5 focus:outline-none"
            aria-label="Back to top"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;