import React from 'react';
import { Link } from 'react-router-dom';

const handleApplyClick = () => {
  window.open(
    "https://docs.google.com/forms/d/e/1FAIpQLScCHJh9EhMuhskSsZKTQ4YSF7IzvdAXvtyTJaJlHBSgX2rgrg/viewform",
    "_blank"
    );
};

const Header = () => (
  <header className="flex justify-between items-center py-4 px-8 md:px-16 border-b border-gray-100 max-w-7xl mx-auto">
    {/* Left side: Logo and Nav */}
    <div className="flex items-center space-x-8">
      <Link to="/" className="text-2xl font-bold text-black cursor-pointer">Optylize</Link>
    </div>

  </header>
);

const JobDetails = () => (
  <section className="text-center mt-12 max-w-5xl mx-auto">
    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
        Product Marketing Intern
    </h2>
    
    <div className="text-left max-w-3xl mx-auto mt-4">
      <p className="text-lg md:text-xl text-gray-700 mb-2 leading-6 md:leading-7">
        <span className="font-bold">Position Overview:</span>
      </p>
      <p className="text-base md:text-lg text-gray-700 leading-6 md:leading-7">
      The Product Marketing Intern is central to defining how Optylize Consulting's tech SaaS products are perceived and adopted by the market. This role focuses on translating product features into clear, benefitdriven messaging and supporting launch activities.
      </p>
    </div>
    
    <button
    onClick={handleApplyClick} 
    className="bg-black text-white font-medium px-8 py-3 rounded-lg mt-10 hover:bg-gray-800 transition duration-150 shadow-lg">
      Apply for this role
    </button>
  </section>
);

const AboutOptylize = () => (
  <section className="mt-8 bg-white max-w-5xl mx-auto">
    <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 mb-4">
      About Optylize
    </h3>
    
    <p className="text-gray-700 leading-6 md:leading-7 mb-4 text-base md:text-lg">
      Optylize combines strategic foresight and technology backbone to help businesses navigate change.
      Our 360° Value Approach is tailored to companies deriving ≥50% revenue from legacy business shifting them into agile, tech‑enabled growth paths.
      We deliver insights, implementation, and advisory in one integrated model.
      We help legacy-focused firms modernize while unlocking growth with precision and speed. We support industry transformation:"Shaping Value Experience".
      We listen closely, ask the right questions, and tailor every step to what truly matters for your business. From first insight to final delivery, we focus on what moves the needle — building strategies that are clear, practical, and built to last.
      At Optylize, we combine cutting-edge technology, bold innovational thinking, and dynamic young energy to redefine strategic advisory.
      Our approach is built to help businesses unlock growth, optimize investments, and stay ahead in rapidly evolving markets. Unlike traditional models, we blend data-driven insights with agile problem-solving & delivering strategies that are not just theoretical, but actionable and result oriented.
    </p>
  </section>
);

const KeyResponsibilities = () => (
  <section className="mt-6 bg-white max-w-5xl mx-auto">
    <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 mb-4">
      Key Responsibilities
    </h3>
    
    <div className="space-y-5 text-gray-700 leading-6 md:leading-7 text-base md:text-lg">
      <div>
        <h4 className="font-bold text-lg text-gray-900 mb-2.5 tracking-tight">1. Messaging & Positioning</h4>
        <ul className="space-y-2 ml-4">
          <li className="flex items-start">
            <span className="mr-3 text-gray-500">•</span>
            <span> Develop compelling value propositions and messaging frameworks for new and existing SaaS features. Conduct competitive analysis to identify market differentiation.</span>
            </li>
        </ul>
      </div>
      
      <div>
        <h4 className="font-bold text-lg text-gray-900 mb-2.5 tracking-tight">2. Content Creation</h4>
        <ul className="space-y-2 ml-4">
          <li className="flex items-start">
            <span className="mr-3 text-gray-500">•</span>
            <span>Create marketing collateral, including product sheets, website landing page copy, and demonstration scripts.</span>
          </li>
        </ul>
      </div>
      
      <div>
        <h4 className="font-bold text-lg text-gray-900 mb-2.5 tracking-tight">3. Launch Support</h4>
        <ul className="space-y-2 ml-4">
          <li className="flex items-start">
            <span className="mr-3 text-gray-500">•</span>
            <span>Assist in planning and executing Go-to-Market (GTM) launches for product updates.</span>
          </li>
        </ul>
      </div>
      
      <div>
        <h4 className="font-bold text-lg text-gray-900 mb-2.5 tracking-tight">4. Feedback Loop</h4>
        <ul className="space-y-2 ml-4">
          <li className="flex items-start">
            <span className="mr-3 text-gray-500">•</span>
            <span> Gather internal and external feedback to inform product strategy and marketing efforts.</span>
          </li>
        </ul>
      </div>
      
      <div>
        <h4 className="font-bold text-lg text-gray-900 mb-2.5 tracking-tight">5. Enablement</h4>
        <ul className="space-y-2 ml-4">
          <li className="flex items-start">
            <span className="mr-3 text-gray-500">•</span>
            <span>Own the development of basic sales enablement materials for the product team.</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

const RequiredSkillsQualifications = () => (
  <section className="mt-6 bg-white max-w-5xl mx-auto">
    <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 mb-4">
      Required Skills & Qualifications
    </h3>
    
    <ul className="space-y-2.5 text-gray-700 leading-6 md:leading-7 text-base md:text-lg">
      <li className="flex items-start">
        <span className="mr-3 text-gray-500">•</span>
        <span>Education: Currently pursuing a degree in Marketing, Communications, Business, or a related field.</span>
      </li>
      <li className="flex items-start">
        <span className="mr-3 text-gray-500">•</span>
        <span>Writing Skills: Excellent writing skills with an emphasis on persuasive, benefit-focused communication. Strong portfolio of writing samples is a plus.</span>
      </li>
      <li className="flex items-start">
        <span className="mr-3 text-gray-500">•</span>
        <span>Domain Knowledge: Strong understanding of marketing fundamentals and the technology/SaaS
        landscape.</span>
      </li>
      <li className="flex items-start">
        <span className="mr-3 text-gray-500">•</span>
        <span>Work Style: Ability to quickly learn and articulate complex technical features into simple, clear
        customer benefits.</span>
      </li>
    </ul>
  </section>
);

const CompensationIncentives = () => (
  <section className="mt-6 bg-white max-w-5xl mx-auto">
    <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 mb-4">
      Compensation & Incentives
    </h3>
    
    <ul className="space-y-2.5 text-gray-700 leading-6 md:leading-7 text-base md:text-lg">
      <li className="flex items-start">
        <span className="mr-3 text-gray-500">•</span>
        <span><strong className="font-semibold">Stipend:</strong> Unpaid</span>
      </li>
      <li className="flex items-start">
        <span className="mr-3 text-gray-500">•</span>
        <span><strong className="font-semibold">Commission:</strong></span>
      </li>
      <li className="flex items-start ml-6">
        <span className="mr-3 text-gray-500">-</span>
        <span>5%–8% on deals sourced and closed through successful marketing campaigns and lead
        generation efforts you support.</span>
      </li>
      <li className="flex items-start ml-6">
        <span className="mr-3 text-gray-500">-</span>
        <span>Additional bonuses for achieving monthly performance milestones.</span>
      </li>
    </ul>
  </section>
);

const TimeCommitment = () => (
  <section className="mt-6 mb-6 bg-white max-w-5xl mx-auto">
    <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 mb-4">
      Time Commitment
    </h3>
    
    <ul className="space-y-2.5 text-gray-700 leading-6 md:leading-7 text-base md:text-lg">
      <li className="flex items-start">
        <span className="mr-3 text-gray-500">•</span>
        <span>1.5 to 2 hours per day.</span>
      </li>
      <li className="flex items-start">
        <span className="mr-3 text-gray-500">•</span>
        <span>Flexible work schedule with weekly review meetings.</span>
      </li>
    </ul>
  </section>
);

// --- Main Component ---

const JobPostingPage7 = () => {
  return (
    <div className="font-sans min-h-screen bg-white">
      <Header />
      <main>
        <JobDetails />
        <div className="mt-12 border-t border-gray-200">
          <AboutOptylize />
          <KeyResponsibilities />
          <RequiredSkillsQualifications />
          <CompensationIncentives />
          <TimeCommitment />
        </div>
      </main>
    </div>
  );
};

export default JobPostingPage7;