import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { Settings, Maximize, Braces, Layers, Star } from 'lucide-react';

// A simple component for the circular logo/icon
const CenteredIcon = () => (
  <div className="flex flex-col items-center justify-center mb-8">
    {/* Outer dashed circle effect */}
    <div className="border-4 border-dotted border-gray-400 rounded-full w-20 h-20 flex items-center justify-center">
      {/* Inner solid circle/icon (can be replaced with a proper logo SVG) */}
      <div className="bg-black rounded-full w-6 h-6 flex items-center justify-center">
        {/* Simple white dot inside */}
        <div className="w-2 h-2 bg-white rounded-full"></div>
      </div>
    </div>
  </div>
);

const HeroSection = () => {
  return (
    // The main container. The gradient background is simulated here.
    // In a real application, you might use a more complex CSS or background image
    // to achieve the exact subtle light effect.
    <section 
      className="min-h-screen w-full flex items-center justify-center px-4 py-20"
      style={{
        background: 'linear-gradient(to bottom right, #ffffff, #dbeafe, #bfdbfe, #ffffff)'
      }}
    >
      
      {/* Content wrapper */}
      <div className="max-w-4xl w-full text-center">
        
        <CenteredIcon />

        {/* 'WHY WE ARE HERE' label */}
        <div className="mb-10 inline-block px-4 py-1 text-xs font-semibold tracking-widest text-gray-700 uppercase border border-gray-300 rounded-full bg-white">
          WHY WE ARE HERE
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-light leading-tight tracking-tight mb-8" style={{ color: '#111827' }}>
          Enabling enterprises to <br className="hidden sm:inline" />
          reimagine every aspect of <br className="hidden sm:inline" />
          their business
        </h1>

        {/* Sub-text */}
        <p className="text-lg font-normal" style={{ color: '#4b5563' }}>
          Building and orchestrating AI agents for work, service, and process.
        </p>

        {/* Small decorative dot at the bottom (optional) */}
        <div className="mt-12">
            <div className="w-1.5 h-1.5 bg-black rounded-full mx-auto"></div>
        </div>
      </div>
    </section>
  );
};

const KoreAISpeedOfBusiness = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row bg-white rounded-xl shadow-lg">
        {/* Left Column: Text Content */}
        <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            Accelerate growth <br className="hidden sm:inline" />
            at the new speed <br className="hidden sm:inline" />
            of business
          </h1>
          
          {/* First Paragraph */}
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            We work with enterprises to reimagine business with our <strong>AI Agent Platform, AI Solutions for Work, Service and Process, and Agent Marketplace.</strong>
          </p>

          {/* Second Paragraph */}
          <p className="mt-6 text-base text-gray-600 leading-relaxed">
            With Optylize customers get a standardized approach to <strong>developing, deploying, and orchestrating AI agents</strong> across the enterprise with speed, control, and flexibility. We help you keep up with the rapid pace of the AI industry.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex space-x-4">
            <button className="px-6 py-3 text-sm font-semibold text-white bg-gray-900 hover:bg-gray-700 transition-colors duration-200 uppercase tracking-wider border border-transparent rounded-sm">
              View Our Agent Platform
            </button>
            <button className="px-6 py-3 text-sm font-semibold text-gray-900 bg-white hover:bg-gray-50 border border-gray-900 transition-colors duration-200 uppercase tracking-wider rounded-sm">
              Contact Us
            </button>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="lg:w-1/2 relative overflow-hidden rounded-b-xl lg:rounded-r-xl lg:rounded-bl-none bg-gray-200">
          {/* 
            Note: This is a Freepik premium image. Ensure you have proper licensing for production use.
            If the image doesn't load due to hotlinking restrictions, download it and host locally:
            1. Download the image from Freepik
            2. Save it to your project's public folder (create if needed)
            3. Update the src below to point to the local image, e.g., "/teamwork-image.jpg"
          */}
          <img 
            src="https://img.freepik.com/premium-photo/we-are-team-professional-group-successful-office-workers-as-sign-motivation-support-laying-their-hands-top-each-other-creative-environment-teamwork-concept_161422-1911.jpg" 
            alt="We are a team - Professional group of successful office workers laying their hands on top of each other, teamwork concept"
            className="w-full h-full min-h-96 object-cover"
            style={{ pointerEvents: 'none' }}
          />
        </div>
      </div>
    </div>
  );
};

// Sample leaders data - all names replaced with XYZ as requested
const leaders = [
  { id: 1, name: 'XYZ', title: 'CEO & Founder', bio: 'Leading innovation in AI technology.', linkedinUrl: '#' },
  { id: 2, name: 'XYZ', title: 'CTO', bio: 'Expert in enterprise AI solutions.', linkedinUrl: '#' },
  { id: 3, name: 'XYZ', title: 'VP of Engineering', bio: 'Building scalable AI platforms.', linkedinUrl: '#' },
  { id: 4, name: 'XYZ', title: 'VP of Product', bio: 'Driving product strategy and vision.', linkedinUrl: '#' },
];

// Helper component for a single leader card
const LeaderCard = ({ name, title, bio, linkedinUrl }) => {
  return (
    <div className="flex flex-col">
      {/* Image Container with Blue Background - replaced with div saying "image" */}
      <div className="bg-blue-100 rounded-lg overflow-hidden h-72 lg:h-80 xl:h-96 flex items-center justify-center">
        <div className="text-gray-500 text-lg font-medium">image</div>
      </div>

      {/* Text Content */}
      <div className="pt-4">
        <h3 className="text-xl font-bold text-gray-800">{name}</h3>
        <p className="text-lg font-semibold text-gray-700 mt-1">{title}</p>
        
        {/* Bio and LinkedIn */}
        <p className="text-gray-600 mt-3 mb-2">{bio}</p>
        
        {/* LinkedIn Icon Link */}
        <a 
          href={linkedinUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-500 hover:text-blue-700 transition duration-300 inline-block"
          aria-label={`LinkedIn profile for ${name}`}
        >
          <FaLinkedin size={24} /> 
        </a>
      </div>
    </div>
  );
};

// Main Component for the Leadership Section
const LeadershipTeam = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-sm tracking-widest font-bold uppercase text-gray-500 mb-2">
            THE • OPTYLIZE LEADERS
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Deep experience in innovation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl">
            Optylize is one of the fastest growing AI companies globally. Our leaders pride themselves on delivering at speed, at scale, and with accuracy, and have done it before.
          </p>
        </div>

        {/* Leader Cards Grid */}
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-16 lg:grid-cols-4 lg:gap-x-12">
          {leaders.map((leader) => (
            <LeaderCard 
              key={leader.id}
              name={leader.name}
              title={leader.title}
              bio={leader.bio}
              linkedinUrl={leader.linkedinUrl}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

const FeatureCard = ({ title, description, icon: IconComponent }) => (
  <div className="bg-white p-6 md:p-8 rounded-lg border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-lg">
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      {/* Icon with light gray background and border */}
      <div className="p-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-600">
        <IconComponent className="w-6 h-6" />
      </div>
    </div>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const KoreAIEnterpriseSection = () => {
  const features = [
    {
      title: 'Speed',
      description:
        'The speed you can build AI is amplified by our enterprise AI solutions, pre-built solutions, and AI-Agent Marketplace.',
      icon: Settings, // Used for the first icon, similar to the image
    },
    {
      title: 'Control',
      description:
        'The power of our standardized platform gives your enterprise-wide observability and crucially, the control you need for success.',
      icon: Maximize, // A fitting icon for control/observability
    },
    {
      title: 'Flexibility',
      description:
        'An agnostic design approach that puts you in control of your models, data, applications, and hosting not to mention your future.',
      icon: Braces, // Matches the braces icon in the image
    },
    {
      title: 'Depth',
      description:
        'Deep technological capabilities that adapt every interaction, workflow, and behavior to your enterprise\'s unique needs.',
      icon: Layers, // Represents depth/layers
    },
    {
      title: 'Experience',
      description:
        'We are an AI-first company that has grown up with enterprise customers as partners when building our AI platform and solutions.',
      icon: Star, // Represents a positive experience
    },
  ];

  return (
    <section className="bg-gray-50 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Text and Button (Spans 1/3) */}
          <div className="lg:col-span-1 flex flex-col justify-start">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Optylize understands the enterprise
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              It's not lost on us that customers have a wealth of options when it comes to deploying AI agents. Here is how Optylize will deliver for your enterprise:
            </p>
            <button className="self-start bg-gray-900 text-white text-sm font-semibold py-3 px-6 rounded-md hover:bg-gray-700 transition duration-300 uppercase tracking-wider shadow-md">
              Understand More &rarr;
            </button>
          </div>
          
          {/* Right two columns for the top row of cards (Spans 2/3) */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            <FeatureCard 
              title={features[0].title}
              description={features[0].description}
              icon={features[0].icon}
            />
            <FeatureCard 
              title={features[1].title}
              description={features[1].description}
              icon={features[1].icon}
            />
          </div>

          {/* Bottom Row of Cards (Spans 3/3) */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Start the bottom row from the left, aligning with the intro text */}
            {features.slice(2).map((feature) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const EnterpriseHiringSection = () => {
  return (
    // The main container for the section
    <section className="flex flex-col lg:flex-row items-center justify-between p-8 md:p-12 lg:p-20 bg-white">
      
      {/* --- Left Content Area --- */}
      <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-12">
        
        {/* 'WE ARE HIRING' Tag */}
        <p className="text-sm font-semibold text-gray-600 tracking-wider mb-4 border-l-2 border-black pl-2">
          WE ARE HIRING
        </p>
        
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
          Join our team, we're building the future of enterprise.
        </h1>
        
        {/* Description Paragraph 1 */}
        <p className="text-base text-gray-700 mb-6 max-w-lg">
          Be a part of a company that is reimagining the future of business, 
          building AI agents that are effective and successful at large enterprises.
        </p>
        
        {/* Description Paragraph 2 */}
        <p className="text-base text-gray-700 mb-10 max-w-lg">
          Some of the world's best brains in AI have already joined Optylize, 
          contributing to a rapid work environment where there is always 
          opportunity to think, innovate, accelerate, and solve complex 
          and exciting problems.
        </p>
        
        {/* Explore Jobs Button */}
        <div className="w-fit border-2 border-black p-1"> {/* A border div to simulate the white border around the button */}
          <button className="bg-black text-white font-semibold py-3 px-8 text-sm uppercase tracking-widest hover:bg-gray-800 transition duration-300">
            EXPLORE JOBS
          </button>
        </div>
      </div>

      {/* --- Right Image Area --- */}
      <div className="lg:w-1/2 w-full">
        <div className="relative overflow-hidden rounded-lg shadow-2xl">
          <img
            src="https://png.pngtree.com/thumb_back/fh260/background/20221007/pngtree-professional-asian-showcasing-analytical-report-during-collaborative-work-with-team-members-in-contemporary-office-setting-photo-image_48854396.jpg"
            alt="Professional Asian showcasing analytical report during collaborative work with team members in contemporary office setting"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

const KoreAIStrip = () => {
  return (
    // 1. Main container: Adjusted height, full width strip, centered content
    <section className="w-full py-16 bg-cover bg-center" style={{ 
      background: 'linear-gradient(to bottom right, #ffffff, #dbeafe, #bfdbfe, #ffffff)',
      height: '300px', // Set a specific height for the strip effect
    }}>
      
      {/* 2. Inner content: Constrained width, centered, and aligned to the top/middle */}
      <div className="flex w-[80%] max-w-6xl mx-auto h-full space-x-8 items-center">
        
        {/* --- Card 1: Start using an AI agent today --- */}
        <div className="flex-1 p-8 bg-white/70 backdrop-blur-sm rounded-lg shadow-lg border border-gray-200/50 h-[200px]">
          <div className="flex flex-col h-full justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Start using an AI agent today
              </h2>
              <p className="text-sm text-gray-600">
                Browse and deploy our pre-built templates
              </p>
            </div>
            
            <div className="mt-6">
              <button
                className="px-6 py-2 text-xs font-medium tracking-widest text-white uppercase bg-black hover:bg-gray-800 transition duration-300"
              >
                MARKETPLACE.
              </button>
            </div>
          </div>
        </div>

        {/* --- Card 2: Reimagine your business --- */}
        <div 
          className="flex-1 p-8 bg-white/70 backdrop-blur-sm rounded-lg h-[200px]"
          style={{
            // Custom dashed border effect
            border: '2px dashed #000000',
            borderStyle: 'dashed',
            borderRadius: '0.5rem', // Smaller border radius
          }}
        >
          <div className="flex flex-col h-full justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Reimagine your business
              </h2>
              <p className="text-sm text-gray-600">
                Find out how Optylize can help you today.
              </p>
            </div>
            
            <div className="mt-6">
              <button
                className="px-6 py-2 text-xs font-medium tracking-widest text-gray-800 uppercase border-2 border-gray-800 hover:bg-gray-100 transition duration-300"
              >
                TALK TO AN EXPERT
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutUsPage = () => {
  return (
    <div className="font-sans min-h-screen w-full">
      <HeroSection />
      <KoreAISpeedOfBusiness />
      <LeadershipTeam />
      <KoreAIEnterpriseSection />
      <EnterpriseHiringSection />
      <KoreAIStrip />
    </div>
  );
};

export default AboutUsPage;
