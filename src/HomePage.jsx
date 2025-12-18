import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  FiZap, 
  FiHeart, 
  FiUsers, 
  FiAperture,
  FiDollarSign,
  FiMonitor,
  FiGlobe,
  FiCoffee,
  FiBookOpen
} from 'react-icons/fi';
import TalkToUsButton from './TalkToUsButton';
// --- Icons (SVG replacements for external libraries) ---

const MapPinIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const MenuIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const XIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="fixed w-full bg-white z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Optylize */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold tracking-tighter">Optylize</Link>
          </div>

          {/* Desktop Menu - Talk to us button */}
          <div className="hidden md:flex space-x-8 items-center">
            <TalkToUsButton onClick={() => navigate('/contact')} />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <TalkToUsButton onClick={() => navigate('/contact')} />
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-500">
              {isOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 absolute w-full top-16 left-0">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <p className="text-gray-400 text-sm p-2">Navigation links removed.</p>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <div className="pt-32 pb-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
        Delivering value through Data, Innovation & Strategy deriving best Strategy & AI Practices
      </h1>
    </div>
  );
};


const FeaturedRoles = () => {
  const roles = [
    { title: 'Sales Manager Intern (India Sales)', loc: 'Remote', path: '/job/sales-manager-intern' },
    { title: 'Business Development Intern', loc: 'Remote', path: '/job/business-development-intern' },
    { title: 'Agentic AI Research Intern', loc: 'Remote', path: '/job/agentic-ai-research-intern' },
    { title: 'Product Engineering Intern', loc: 'Remote', path: '/job/product-engineering-intern' },
    { title: 'UI/UX Designer Intern', loc: 'Remote', path: '/job/UI/UX-designer-intern' },
    { title: 'GTM (Go-to-Market) Sales Intern', loc: 'Remote', path: '/job/GTM-sales-intern' },
    { title: 'Product Marketing Intern', loc: 'Remote', path: '/job/product-marketing-intern' },
    { title: 'Strategy Research Intern (AI/ML & DL Frontier)', loc: 'Remote', path: '/job/strategy-research-intern' },
    { title: 'GTM Manager Intern', loc: 'Remote', path: '/job/GTM-manager-intern' },
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Featured roles</h2>
        </div>
        
        <div className="grid grid-cols-1 gap-4">
          {roles.map((role, idx) => (
            <Link key={idx} to={role.path} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer group block">
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{role.title}</h3>
              <div className="mt-4 flex items-center text-gray-500 text-sm">
                <MapPinIcon className="mr-1 w-4 h-4" />
                <span className="mr-4">{role.loc}</span>
                <span className="bg-gray-100 px-2 py-0.5 rounded text-xs font-medium text-gray-600">Remote</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

const OurValuesSection = () => {
  const values = [
    {
      icon: <FiAperture className="w-6 h-6 text-gray-800" />,
      title: 'Innovation First',
      description: 'We push boundaries and challenge the status quo to create products that that matter.',
    },
    {
      icon: <FiUsers className="w-6 h-6 text-gray-800" />,
      title: 'Collaboration',
      description: 'Great things are built together. We value diverse perspectives and open dialogue.',
    },
    {
      icon: <FiZap className="w-6 h-6 text-gray-800" />,
      title: 'Move Fast',
      description: 'We ship quickly, learn from feedback, and iterate towards excellence.',
    },
    {
      icon: <FiHeart className="w-6 h-6 text-gray-800" />,
      title: 'Care Deeply',
      description: 'We care about our craft, our users, and each other. Quality is non-negotiable.',
    },
  ];

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Our Values</h2>
          <p className="mt-2 text-xl text-gray-600">
            The principles that guide how we work, build, and grow together.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
          {values.map((value) => (
            // Card Container
            <div
              key={value.title}
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transition duration-300 hover:shadow-xl"
            >
              {/* Icon Container (The small circle/square around the icon) */}
              <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-lg mb-4">
                {value.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mt-2">
                {value.title}
              </h3>
              <p className="mt-2 text-base text-gray-600">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const BenefitsAndPerksSection = () => {
  const perks = [
    {
      icon: <FiDollarSign className="w-6 h-6 text-gray-800" />,
      title: 'Competitive Salary',
      description: 'Top of market compensation',
    },
    {
      icon: <FiMonitor className="w-6 h-6 text-gray-800" />,
      title: 'Remote First',
      description: 'Work from anywhere',
    },
    {
      icon: <FiGlobe className="w-6 h-6 text-gray-800" />,
      title: 'Flexible Hours',
      description: 'Balance work and life',
    },
    {
      icon: <FiCoffee className="w-6 h-6 text-gray-800" />,
      title: 'Unlimited PTO',
      description: 'Rest when you need it',
    },
    {
      icon: <FiHeart className="w-6 h-6 text-gray-800" />,
      title: 'Health Coverage',
      description: 'Full medical, dental, vision',
    },
    {
      icon: <FiBookOpen className="w-6 h-6 text-gray-800" />,
      title: 'Learning Budget',
      description: '$2,000 annual stipend',
    },
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Benefits & Perks</h2>
          <p className="mt-2 text-xl text-gray-600">
            We take care of our team so they can focus on doing their best work.
          </p>
        </div>

        {/* Perks Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {perks.map((perk) => (
            // Card Container
            <div
              key={perk.title}
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transition duration-300 hover:shadow-xl"
            >
              {/* Icon Container (Light gray background for the icon) */}
              <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-lg mb-4">
                {perk.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mt-2">
                {perk.title}
              </h3>
              <p className="mt-2 text-base text-gray-600">
                {perk.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const HomePage = () => {
  return (
    <div className="font-sans text-gray-900 bg-white">
      <Navbar />
      <main>
        <Hero />
        <FeaturedRoles />
        <OurValuesSection />
        <BenefitsAndPerksSection />
      </main>
    </div>
  );
};

export default HomePage;

