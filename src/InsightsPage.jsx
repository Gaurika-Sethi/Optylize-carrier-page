import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="flex justify-between items-center py-4 px-8 md:px-16 border-b border-gray-100 max-w-7xl mx-auto">
    {/* Left side: Logo and Nav */}
    <div className="flex items-center space-x-8">
      <Link to="/" className="text-2xl font-bold text-black cursor-pointer">Optylize</Link>
    </div>
    
    {/* Right side: Navigation Links */}
    <div className="flex items-center space-x-6">
      <Link to="/" className="text-gray-700 hover:text-black transition-colors font-medium">
        Home
      </Link>
      <Link to="/about" className="text-gray-700 hover:text-black transition-colors font-medium">
        About
      </Link>
      <Link to="/contact" className="text-gray-700 hover:text-black transition-colors font-medium">
        Contact
      </Link>
    </div>
  </header>
);

const AheadOfChangeSection = () => {
  return (
    <section className="bg-white text-black pt-12 md:pt-20 lg:pt-28 pb-6 md:pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-6 text-gray-900">
          Stay ahead of change
        </h1>

        {/* Sub-text/Description */}
        <p className="text-lg sm:text-xl lg:text-2xl font-normal max-w-4xl text-gray-800">
          Explore our research, insights, and examples of real client impact, designed 
          to help you embrace the key forces of change and get to value faster.
        </p>
      </div>
    </section>
  );
};

// Define the data for the content cards (12 cards for 3 rows)
const contentCards = [
  {
    type: "RESEARCH REPORT",
    textColor: "text-white",
  },
  {
    type: "RESEARCH REPORT",
    textColor: "text-white",
  },
  {
    type: "RESEARCH REPORT",
    textColor: "text-white",
  },
  {
    type: "NEWS ARTICLE",
    textColor: "text-black",
  },
  {
    type: "RESEARCH REPORT",
    textColor: "text-white",
  },
  {
    type: "RESEARCH REPORT",
    textColor: "text-white",
  },
  {
    type: "RESEARCH REPORT",
    textColor: "text-white",
  },
  {
    type: "NEWS ARTICLE",
    textColor: "text-black",
  },
  {
    type: "RESEARCH REPORT",
    textColor: "text-white",
  },
  {
    type: "RESEARCH REPORT",
    textColor: "text-white",
  },
  {
    type: "RESEARCH REPORT",
    textColor: "text-white",
  },
  {
    type: "NEWS ARTICLE",
    textColor: "text-black",
  },
];

const Card = ({ type, textColor }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const cardId = `card-${type}-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div 
      className="aspect-[2/3] w-full relative shadow-lg rounded-lg overflow-hidden"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {/* Image Container - Blurs and fades as text comes in */}
      <div 
        className="absolute inset-0 w-full h-full rounded-lg overflow-hidden"
        style={{
          filter: isExpanded ? `blur(${8}px)` : 'blur(0px)',
          opacity: isExpanded ? 0.3 : 1,
          transition: 'filter 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        {/* Image */}
        <img 
          src="https://img.freepik.com/free-photo/businesspeople-having-good-time-meeting_1098-1786.jpg?semt=ais_hybrid&w=740&q=80"
          alt={type}
          className="w-full h-full object-cover"
        />
        
        <div className={`absolute inset-0 p-6 md:p-8 flex flex-col justify-end h-full z-10`}>
          {/* Card Type/Category */}
          <span 
            className={`uppercase text-xs font-semibold tracking-wider mb-2 ${textColor}`}
            style={{
              opacity: isExpanded ? 0.2 : 0.7,
              transition: 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            {type}
          </span>
        </div>
      </div>

      {/* Text Content - Slides in from right */}
      <div 
        id={cardId}
        className="absolute inset-0 w-full h-full bg-white rounded-lg p-6 md:p-8 flex flex-col"
        style={{
          transform: isExpanded ? 'translateX(0%)' : 'translateX(100%)',
          opacity: isExpanded ? 1 : 0,
          transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <div className="flex-1 overflow-y-auto">
          <span className="uppercase text-xs font-semibold tracking-wider mb-4 block text-gray-600">
            {type}
          </span>
          <p className="text-gray-800 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="text-gray-800 text-sm leading-relaxed mt-4">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
        </div>
      </div>

      {/* Toggle Button */}
      <button
        className="rad-content-grid-card__front-toggle absolute inset-0 z-20 w-full h-full opacity-0 cursor-pointer"
        aria-expanded={isExpanded}
        aria-controls={cardId}
        aria-label={`${type}: Expand`}
        onClick={() => setIsExpanded(!isExpanded)}
      />
      
      {/* CTA Cover Link */}
      <a 
        href="#" 
        className="rad-content-grid-card__cta-cover absolute inset-0 z-30"
        aria-label={`${type}: Expand`}
        title=""
        tabIndex={-1}
      />
    </div>
  );
};

const ContentCardSection = () => {
  return (
    <section className="bg-white pt-0 pb-12 md:pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/*
          Responsive Grid:
          - Default (mobile): Single column grid (or stacked)
          - md (medium screens): Two columns
          - lg (large screens): Four columns
        */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 md:gap-x-6 md:gap-y-12 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
          {contentCards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

const InsightsPage = () => {
  return (
    <div className="font-sans min-h-screen bg-white">
      <Header />
      <main>
        <AheadOfChangeSection />
        <ContentCardSection />
      </main>
    </div>
  );
};

export default InsightsPage;

