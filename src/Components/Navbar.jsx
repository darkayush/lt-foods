import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, ExternalLink } from 'lucide-react';

const ProfessionalNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [activePage, setActivePage] = useState(window.location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const slugify = (text) =>
    text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '')
      .replace(/--+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');

  const menuSections = [
    {
      id: 'corporate-overview',
      title: 'Corporate Overview',
      type: 'internal',
      items: [
        { name: 'Executive Summary' },
        { name: 'About Us' },
        { name: 'Our Geographical Presence' },
        { name: 'Leadership Message' },
        { name: 'Our Product Portfolio' },
        { name: 'Our Strategy' },
        { name: 'Risk Management' },
        { name: 'Stakeholder Engagement' },
        { name: 'Materiality Assessment' },
        { name: 'Value Creation Model' },
        { name: 'Our Financials' },
        { name: 'Our ESG Goals and Targets' },
        { name: 'Financial Capital' },
        { name: 'Manufactured Capital' },
        { name: 'Intellectual Capital' },
        { name: 'Natural Capital' },
        { name: 'Human Capital' },
        { name: 'Social and Relationship Capital' },
        { name: 'Board of Directors' },
        { name: 'Senior Management Personnel' },
        { name: 'Profile of Advisors' },
        { name: 'Corporate Information' },
      ]
    },
    {
      id: 'statutory-reports',
      title: 'Statutory Reports',
      type: 'pdf',
      items: [
        { name: 'Management Discussion and Analysis', href: '/PDFs/Management_Discussion_and_Analysis.pdf' },
        { name: 'Board\'s Report', href: '/PDFs/Boards_Report.pdf' },
        { name: 'Corporate Governance Report', href: '/PDFs/Corporate_Governance_Report.pdf' },
        { name: 'Business Responsibility and Sustainability Report', href: '/PDFs/Business_Responsibility.pdf' },
      ]
    },
    {
      id: 'financial-statements',
      title: 'Financial Statements',
      type: 'pdf',
      items: [
        { name: 'Standalone Financial Statements', href: '/PDFs/Standalone.pdf' },
        { name: 'Consolidated Financial Statements', href: '/PDFs/Consolidated.pdf' },
      ]
    }
  ];

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setExpandedSection(null);
    }
  };

  const toggleSection = (sectionId) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  const handleLinkClick = (path) => {
    setActivePage(path);
    setIsOpen(false);
    setExpandedSection(null);
  };

  return (
    <div className="font-sans">
      {/* Navigation Bar */}
      <nav
        className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
          scrolled ? 'shadow-md' : ''
        }`}
        style={{ backgroundColor: 'white' }}
      >
        <div className="flex justify-between items-center px-6 lg:px-16 py-4 max-w-screen-2xl mx-auto">
          {/* Logo */}
          <div className="logo">
            <a href="/" className="block" onClick={() => handleLinkClick('/')}>
                <img src="./logo.png" alt="Company Logo" className="w-50" />
            </a>
          </div>

          {/* Menu Toggle Button */}
          <button
            className="relative px-6 py-2.5 font-semibold text-sm tracking-wider transition-all duration-300 focus:outline-none text-gray-800 hover:text-gray-600"
            onClick={handleMenuToggle}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <span className="relative flex items-center gap-2">
              {isOpen ? (
                <>
                  <X className="w-5 h-5" />
                  <span>CLOSE</span>
                </>
              ) : (
                <>
                  <Menu className="w-5 h-5" />
                  <span>MENU</span>
                </>
              )}
            </span>
          </button>
        </div>
      </nav>

      {/* Menu Overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-full z-40 transition-all duration-500 ease-out bg-white ${
          isOpen  
            ? 'opacity-100 visible'  
            : 'opacity-0 invisible pointer-events-none'
        }`}
        style={{
          transform: isOpen ? 'translateY(0)' : 'translateY(-2%)',
        }}
      >
        <div className="w-full h-full flex flex-col pt-24 pb-8 px-6 lg:px-16">
          <div className="max-w-screen-2xl mx-auto w-full h-full flex flex-col">
            {/* Menu Sections - Horizontal Layout */}
            <div className="flex-1 flex items-start justify-center pt-8">
              <div className="w-full max-w-7xl">
                {/* Section Headers */}
                <div className="flex justify-center gap-16 mb-12 border-b border-gray-200 pb-4">
                  {menuSections.map((section, idx) => (
                    <button
                      key={section.id}
                      className={`relative px-4 py-3 text-lg font-medium tracking-tight transition-all duration-300 ${
                        expandedSection === section.id 
                          ? 'text-gray-900' 
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                      onClick={() => toggleSection(section.id)}
                      style={{
                        animation: isOpen ? `fadeIn 0.5s ease-out ${idx * 0.1}s both` : 'none'
                      }}
                    >
                      <span className="flex items-center gap-2">
                        {section.title}
                        <ChevronDown
                          className={`w-5 h-5 transition-transform duration-300 ${
                            expandedSection === section.id ? 'rotate-180' : ''
                          }`}
                        />
                      </span>
                      {expandedSection === section.id && (
                        <div 
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900"
                          style={{
                            animation: 'expandWidth 0.3s ease-out both'
                          }}
                        />
                      )}
                    </button>
                  ))}
                </div>

                {/* Section Items Container */}
                <div className="relative min-h-[400px]">
                  {menuSections.map((section) => (
                    <div
                      key={section.id}
                      className={`absolute inset-0 transition-all duration-500 ${
                        expandedSection === section.id
                          ? 'opacity-100 visible'
                          : 'opacity-0 invisible pointer-events-none'
                      }`}
                    >
                      <div className="max-h-[450px] overflow-y-auto px-2">
                        <div className={`grid gap-1 ${
                          section.items.length > 10 
                            ? 'grid-cols-3' 
                            : 'grid-cols-2'
                        }`}>
                          {section.items.map((item, index) => {
                            const itemPath = section.type === 'internal' ? `/${slugify(item.name)}` : item.href;
                            const isActive = section.type === 'internal' && activePage === itemPath;
                            
                            return (
                              <div
                                key={`${section.id}-${index}`}
                                style={{
                                  animation: expandedSection === section.id
                                    ? `fadeInUp 0.4s ease-out ${index * 0.03}s both`
                                    : 'none'
                                }}
                              >
                                {section.type === 'internal' ? (
                                  <a
                                    href={itemPath}
                                    className={`block py-2.5 px-4 rounded transition-all duration-200 ${
                                      isActive 
                                        ? 'bg-gray-100 text-gray-900 font-medium'
                                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                                    }`}
                                    onClick={() => handleLinkClick(itemPath)}
                                  >
                                    <span className="text-sm">
                                      {item.name}
                                    </span>
                                  </a>
                                ) : (
                                  <a
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center justify-between py-2.5 px-4 rounded hover:bg-gray-50 transition-all duration-200"
                                  >
                                    <span className="text-sm text-gray-700 group-hover:text-gray-900">
                                      {item.name}
                                    </span>
                                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors duration-200" />
                                  </a>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div 
              className="mt-auto pt-6 border-t border-gray-200"
              style={{
                animation: isOpen ? 'fadeIn 0.6s ease-out 0.4s both' : 'none'
              }}
            >
              <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
                <div className="text-center lg:text-left">
                  <p className="text-gray-600 text-sm">
                    Visit the official company website: {' '}
                    <a 
                      href="https://www.yourcompany.com" 
                      className="text-gray-900 font-medium hover:underline transition-all duration-300"
                    >
                      www.yourcompany.com
                    </a>
                  </p>
                </div>
                
                <div className="flex gap-6">
                  {['LinkedIn', 'Twitter', 'Facebook', 'Instagram'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="text-gray-600 text-sm font-medium hover:text-gray-900 transition-colors duration-300"
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes expandWidth {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        /* Custom scrollbar */
        .overflow-y-auto::-webkit-scrollbar {
          width: 6px;
        }

        .overflow-y-auto::-webkit-scrollbar-track {
          background: #f7f7f7;
        }

        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: #d1d5db;
          border-radius: 3px;
        }

        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: #9ca3af;
        }
      `}</style>
    </div>
  );
};

export default ProfessionalNavbar;