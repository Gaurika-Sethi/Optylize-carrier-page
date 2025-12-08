import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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

  return (
    <nav className="fixed w-full bg-white z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Optylize */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold tracking-tighter">Optylize</Link>
          </div>

          {/* Desktop Menu - Links and Auth Buttons REMOVED per request */}
          <div className="hidden md:flex space-x-8 items-center">
            {/* Empty per user request */}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
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
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
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
  ];

  return (
    <div className="py-16 bg-gray-50">
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

const Values = () => {
  const values = [
    { title: "Get It Done", desc: "Optylizers always push through! We care about results and believe that grit and determination can break through any wall." },
    { title: "Deliver WOW", desc: "We love building great products and turning the complexity of a chaotic world into the simplicity of a beautiful solution." },
    { title: "Dream Team", desc: "We select, coach, and retain the top talent only and give them all the support to achieve greatness." },
    { title: "Never Settle", desc: "Optylize is for those who always strive for excellence, for those who want to become the best in the world at what they do." },
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Discover our values</h2>
          <p className="text-lg text-gray-600 max-w-3xl">
            We believe that any success comes from two things: our people and our culture. 
            Our culture is our DNA, it defines who we are and how we operate.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((val, idx) => (
            <div key={idx} className="bg-gray-50 p-6 rounded-2xl h-full">
              <h3 className="text-xl font-bold mb-3">{val.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Plans</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              {['Standard', 'Plus', 'Premium', 'Metal', 'Ultra'].map(i => <li key={i}><a href="#" className="hover:text-black">{i}</a></li>)}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              {['About us', 'Careers', 'Sustainability', 'Code of Conduct'].map(i => <li key={i}><a href="#" className="hover:text-black">{i}</a></li>)}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Help</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              {['Contact us', 'Help Centre', 'System Status', 'API'].map(i => <li key={i}><a href="#" className="hover:text-black">{i}</a></li>)}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              {['Privacy', 'Terms', 'Complaints', 'Cookies'].map(i => <li key={i}><a href="#" className="hover:text-black">{i}</a></li>)}
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-200 text-center md:text-left">
          <p className="text-xs text-gray-400">© Optylize 2025</p>
        </div>
      </div>
    </footer>
  );
};

// --- Main Component ---

const HomePage = () => {
  return (
    <div className="font-sans text-gray-900 bg-white">
      <Navbar />
      <main>
        <Hero />
        <FeaturedRoles />
        <Values />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;

