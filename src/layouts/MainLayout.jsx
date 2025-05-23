import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/one-wellness-healthcare-platform-homepage-updated/components/Header';
import Footer from '../pages/one-wellness-healthcare-platform-homepage-updated/components/Footer';
const MainLayout = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="">
        <Outlet />
      </main>
      <Footer />

    </div>
  );
};

export default MainLayout; 