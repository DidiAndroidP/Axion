import React from 'react';
import Navbar from '../organisms/Navbar';
import Footer from '../organisms/Footer';

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950 transition-colors duration-500">
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;