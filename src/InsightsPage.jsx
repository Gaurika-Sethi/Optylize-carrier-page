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
    title: "Sovereign AI: From managing risk to accelerating growth",
    textColor: "text-white",
  },
  {
    type: "RESEARCH REPORT",
    title: "Holiday shopping 2025: 'Tis the season for smarter spending and renewed confidence",
    textColor: "text-white",
  },
  {
    type: "RESEARCH REPORT",
    title: "Unlocking the Next Era of Sustainability Leadership",
    textColor: "text-white",
  },
  {
    type: "NEWS ARTICLE",
    title: "Five traits of tech-driven CEOs",
    textColor: "text-black",
  },
  {
    type: "RESEARCH REPORT",
    title: "Sovereign AI: From managing risk to accelerating growth",
    textColor: "text-white",
  },
  {
    type: "RESEARCH REPORT",
    title: "Holiday shopping 2025: 'Tis the season for smarter spending and renewed confidence",
    textColor: "text-white",
  },
  {
    type: "RESEARCH REPORT",
    title: "Unlocking the Next Era of Sustainability Leadership",
    textColor: "text-white",
  },
  {
    type: "NEWS ARTICLE",
    title: "Five traits of tech-driven CEOs",
    textColor: "text-black",
  },
  {
    type: "RESEARCH REPORT",
    title: "Sovereign AI: From managing risk to accelerating growth",
    textColor: "text-white",
  },
  {
    type: "RESEARCH REPORT",
    title: "Holiday shopping 2025: 'Tis the season for smarter spending and renewed confidence",
    textColor: "text-white",
  },
  {
    type: "RESEARCH REPORT",
    title: "Unlocking the Next Era of Sustainability Leadership",
    textColor: "text-white",
  },
  {
    type: "NEWS ARTICLE",
    title: "Five traits of tech-driven CEOs",
    textColor: "text-black",
  },
];

const Card = ({ type, title, textColor }) => (
  <div className="aspect-[2/3] w-full shadow-lg relative rounded-lg overflow-hidden bg-gray-200">
    {/* Placeholder for image */}
    <div className="absolute inset-0 flex items-center justify-center bg-gray-300">
      <span className="text-gray-500 font-medium">image</span>
    </div>
    
    <div className={`p-6 md:p-8 flex flex-col justify-end h-full relative z-10`}>
      {/* Card Type/Category */}
      <span className={`uppercase text-xs font-semibold tracking-wider mb-2 opacity-70 ${textColor}`}>
        {type}
      </span>
      
      {/* Card Title */}
      <h3 className={`text-xl font-bold leading-snug ${textColor}`}>
        {title}
      </h3>
      
      {/* Optional: Add an invisible link overlay for accessibility/clickability */}
      <a href="#" className="absolute inset-0 z-10" aria-label={`Read ${title}`}></a>
    </div>
  </div>
);

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

