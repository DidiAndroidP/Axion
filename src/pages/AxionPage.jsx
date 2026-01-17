import React from 'react';
import MainLayout from '../components/template/MainLayout';
import Hero from '../components/organisms/Hero';
import AboutUs from '../components/organisms/AboutUs';
import Services from '../components/organisms/Services';
import Products from '../components/organisms/Products';
import Benefits from '../components/organisms/Benefits';
import FinalCTA from '../components/organisms/FinalCTA';

const AxionPage = () => {
  return (
    <MainLayout>
      <Hero />
      <AboutUs />
      <Services />
      <Products />
      <Benefits />
      <FinalCTA />
    </MainLayout>
  );
};

export default AxionPage;