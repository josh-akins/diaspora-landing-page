import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
// import HomePage from './pages/Home';
// import OneWellnessHealthcarePlatformHomepage from './pages/one-wellness-healthcare-platform-homepage';
import HomePage from './pages/one-wellness-healthcare-platform-homepage-updated';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/one-wellness-healthcare-platform-homepage" element={<OneWellnessHealthcarePlatformHomepage />} />
        <Route path="/one-wellness-healthcare-platform-homepage-updated" element={<OneWellnessHealthcarePlatformHomepageUpdated />} /> */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;