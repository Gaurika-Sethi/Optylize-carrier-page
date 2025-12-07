import React from 'react';

// --- Sub-components ---

const Header = () => (
  <header className="flex justify-between items-center py-4 px-8 md:px-16 border-b border-gray-100 max-w-7xl mx-auto">
    {/* Left side: Logo and Nav */}
    <div className="flex items-center space-x-8">
      <h1 className="text-2xl font-bold text-black cursor-pointer">Optylize</h1>
      <nav className="hidden lg:flex space-x-6 text-sm text-gray-700">
        <a href="#" className="hover:text-black">Personal</a>
        <a href="#" className="hover:text-black">Business</a>
        <a href="#" className="hover:text-black">Kids & Teens</a>
        <a href="#" className="hover:text-black">Company</a>
      </nav>
    </div>

  </header>
);

const JobDetails = () => (
  <section className="text-center mt-12 px-4 max-w-4xl mx-auto">
    <h2 className="text-5xl md:text-6xl font-normal text-gray-900 leading-tight">
      Business Development Intern
    </h2>
    
    <div className="text-left max-w-3xl mx-auto mt-6">
      <p className="text-lg md:text-xl text-gray-700 mb-2">
        <span className="font-bold">Position Overview:</span>
      </p>
      <p className="text-base md:text-lg text-gray-700 leading-relaxed">
        The Business Development Intern will support the expansion of our client pipeline by identifying potential leads, conducting outreach, and qualifying prospects for consulting engagements. This role requires strong communication skills, research ability, and a structured approach to lead generation.
      </p>
    </div>
    
    <button className="bg-black text-white font-medium px-8 py-3 rounded-lg mt-10 hover:bg-gray-800 transition duration-150 shadow-lg">
      Apply for this role
    </button>
  </section>
);

const AboutOptylize = () => (
  <section className="mt-8 px-8 py-6 bg-white max-w-4xl mx-auto">
    <h3 className="text-2xl font-bold text-gray-900 mb-6">
      About Optylize
    </h3>
    
    <p className="text-gray-700 leading-relaxed mb-6">
      Optylize combines strategic foresight and technology backbone to help businesses navigate change.
    </p>
    
    <p className="text-gray-700 leading-relaxed mb-6">
      Our 360° Value Approach is tailored to companies deriving ≥50% revenue from legacy business shifting them into agile, tech‑enabled growth paths.
    </p>
    
    <p className="text-gray-700 leading-relaxed mb-6">
      We deliver insights, implementation, and advisory in one integrated model.
    </p>
    
    <p className="text-gray-700 leading-relaxed mb-6">
      We help legacy-focused firms modernize while unlocking growth with precision and speed. We support industry transformation:"Shaping Value Experience".
    </p>
    
    <p className="text-gray-700 leading-relaxed mb-6">
      We listen closely, ask the right questions, and tailor every step to what truly matters for your business. From first insight to final delivery, we focus on what moves the needle — building strategies that are clear, practical, and built to last.
    </p>
    
    <p className="text-gray-700 leading-relaxed">
      At Optylize, we combine cutting-edge technology, bold innovational thinking, and dynamic young energy to redefine strategic advisory.
    </p>
    
    <p className="text-gray-700 leading-relaxed">
      Our approach is built to help businesses unlock growth, optimize investments, and stay ahead in rapidly evolving markets. Unlike traditional models, we blend data-driven insights with agile problem-solving & delivering strategies that are not just theoretical, but actionable and result oriented.
    </p>
  </section>
);

const KeyResponsibilities = () => (
  <section className="mt-6 px-8 py-6 bg-white max-w-4xl mx-auto">
    <h3 className="text-2xl font-bold text-gray-900 mb-6">
      Key Responsibilities
    </h3>
    
    <div className="space-y-6 text-gray-700 leading-relaxed">
      <div>
        <h4 className="font-bold text-lg text-gray-900 mb-3">1. Lead Generation & Research</h4>
        <ul className="space-y-2 ml-4">
          <li className="flex items-start">
            <span className="mr-3 text-gray-500">•</span>
            <span>Identify prospective clients across SMBs, agencies, solopreneurs, creators, colleges, and emerging business communities.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-gray-500">•</span>
            <span>Conduct research through LinkedIn, online directories, Google Maps, and relevant industry platforms.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-gray-500">•</span>
            <span>Build targeted lead lists for outreach campaigns.</span>
          </li>
        </ul>
      </div>
      
      <div>
        <h4 className="font-bold text-lg text-gray-900 mb-3">2. Outreach & Initial Contact</h4>
        <ul className="space-y-2 ml-4">
          <li className="flex items-start">
            <span className="mr-3 text-gray-500">•</span>
            <span>Execute cold outreach via email, LinkedIn, and direct messages.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-gray-500">•</span>
            <span>Conduct introductory cold calls where required.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-gray-500">•</span>
            <span>Customize outreach messaging based on sector and client context.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-gray-500">•</span>
            <span>Maintain professionalism and clarity in all client-facing communication.</span>
          </li>
        </ul>
      </div>
      
      <div>
        <h4 className="font-bold text-lg text-gray-900 mb-3">3. Lead Qualification</h4>
        <ul className="space-y-2 ml-4">
          <li className="flex items-start">
            <span className="mr-3 text-gray-500">•</span>
            <span>Understand client needs and assess suitability for strategy, automation, and AI consulting services.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-gray-500">•</span>
            <span>Collect and document relevant information for senior team members.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-gray-500">•</span>
            <span>Schedule and coordinate meetings between qualified leads and the consulting team.</span>
          </li>
        </ul>
      </div>
      
      <div>
        <h4 className="font-bold text-lg text-gray-900 mb-3">4. CRM & Pipeline Management</h4>
        <ul className="space-y-2 ml-4">
          <li className="flex items-start">
            <span className="mr-3 text-gray-500">•</span>
            <span>Update and maintain lead data in the CRM (Google Sheets/Notion).</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-gray-500">•</span>
            <span>Track outreach activities, follow-ups, and conversion status.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-gray-500">•</span>
            <span>Ensure timely follow-ups and adherence to standard operating procedures.</span>
          </li>
        </ul>
      </div>
      
      <div>
        <h4 className="font-bold text-lg text-gray-900 mb-3">5. Market Analysis & Insights</h4>
        <ul className="space-y-2 ml-4">
          <li className="flex items-start">
            <span className="mr-3 text-gray-500">•</span>
            <span>Monitor industry trends in AI, automation, and consulting.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-gray-500">•</span>
            <span>Identify new sectors or opportunities for expansion.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-gray-500">•</span>
            <span>Present weekly insights and suggestions for improving outreach efficiency.</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

const RequiredSkillsQualifications = () => (
  <section className="mt-6 px-8 py-6 bg-white max-w-4xl mx-auto">
    <h3 className="text-2xl font-bold text-gray-900 mb-6">
      Required Skills & Qualifications
    </h3>
    
    <ul className="space-y-3 text-gray-700 leading-relaxed">
      <li className="flex items-start">
        <span className="mr-3 text-gray-500">•</span>
        <span>Strong verbal and written communication skills.</span>
      </li>
      <li className="flex items-start">
        <span className="mr-3 text-gray-500">•</span>
        <span>Proficiency in English; Hindi is an added advantage.</span>
      </li>
      <li className="flex items-start">
        <span className="mr-3 text-gray-500">•</span>
        <span>Basic understanding of business functions, market research, and the consulting landscape.</span>
      </li>
      <li className="flex items-start">
        <span className="mr-3 text-gray-500">•</span>
        <span>Comfort with cold outreach (emails, messages, and introductory calls).</span>
      </li>
      <li className="flex items-start">
        <span className="mr-3 text-gray-500">•</span>
        <span>Ability to work independently and meet defined timelines.</span>
      </li>
      <li className="flex items-start">
        <span className="mr-3 text-gray-500">•</span>
        <span>Strong organizational and documentation skills.</span>
      </li>
      <li className="flex items-start">
        <span className="mr-3 text-gray-500">•</span>
        <span><strong className="font-semibold">Preferred (Not Mandatory):</strong></span>
      </li>
      <li className="flex items-start ml-6">
        <span className="mr-3 text-gray-500">-</span>
        <span>Prior experience in Business Development, Sales, or Marketing.</span>
      </li>
      <li className="flex items-start ml-6">
        <span className="mr-3 text-gray-500">-</span>
        <span>Familiarity with CRM tools or lead management systems.</span>
      </li>
      <li className="flex items-start ml-6">
        <span className="mr-3 text-gray-500">-</span>
        <span>Interest in AI, automation, and emerging business technologies</span>
      </li>
    </ul>
  </section>
);

const CompensationIncentives = () => (
  <section className="mt-6 px-8 py-6 bg-white max-w-4xl mx-auto">
    <h3 className="text-2xl font-bold text-gray-900 mb-6">
      Compensation & Incentives
    </h3>
    
    <ul className="space-y-3 text-gray-700 leading-relaxed">
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
        <span>5%–8% on deals sourced and closed through your leads.</span>
      </li>
      <li className="flex items-start ml-6">
        <span className="mr-3 text-gray-500">-</span>
        <span>Additional bonuses for achieving monthly performance milestones.</span>
      </li>
    </ul>
  </section>
);

const TimeCommitment = () => (
  <section className="mt-6 px-8 py-6 bg-white max-w-4xl mx-auto">
    <h3 className="text-2xl font-bold text-gray-900 mb-6">
      Time Commitment
    </h3>
    
    <ul className="space-y-3 text-gray-700 leading-relaxed">
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

const JobPostingPage2 = () => {
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

export default JobPostingPage2;

