import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import JobPostingPage from './JobPostingPage';
import JobPostingPage2 from './JobPostingPage2';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/job/sales-manager-intern" element={<JobPostingPage />} />
        <Route path="/job/business-development-intern" element={<JobPostingPage2 />} />
      </Routes>
    </Router>
  );
}

