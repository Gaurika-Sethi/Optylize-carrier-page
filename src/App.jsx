import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import ContactPage from './ContactPage';
import AboutUsPage from './AboutUsPage';
import JobPostingPage from './JobPostingPage';
import JobPostingPage2 from './JobPostingPage2';
import JobPostingPage3 from './JobPostingPage3';
import JobPostingPage4 from './JobPostingPage4';
import JobPostingPage5 from './JobPostingPage5';
import JobPostingPage6 from './JobPostingPage6';
import JobPostingPage7 from './JobPostingPage7';
import JobPostingPage8 from './JobPostingPage8';
import JobPostingPage9 from './JobPostingPage9';
// import TestApp from './TestApp'; // Uncomment to test if React is rendering

export default function App() {
  // Uncomment the line below to test if React is rendering
  // return <TestApp />;
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/job/sales-manager-intern" element={<JobPostingPage />} />
        <Route path="/job/business-development-intern" element={<JobPostingPage2 />} />
        <Route path="/job/agentic-ai-research-intern" element={<JobPostingPage3 />} />
        <Route path="/job/product-engineering-intern" element={<JobPostingPage4 />} />
        <Route path="/job/UI/UX-designer-intern" element={<JobPostingPage5 />} />
        <Route path="/job/GTM-sales-intern" element={<JobPostingPage6 />} />
        <Route path="/job/product-marketing-intern" element={<JobPostingPage7 />} />
        <Route path="/job/strategy-research-intern" element={<JobPostingPage8 />} />
        <Route path="/job/GTM-manager-intern" element={<JobPostingPage9 />} />       
      </Routes>
    </Router>
  );
}

