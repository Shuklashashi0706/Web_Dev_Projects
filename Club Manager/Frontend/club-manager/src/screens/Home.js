import React from 'react';
import '../../src/components/Main.css';

import HeroSection from '../components/Home/HeroSection.js';
import Cards from '../components/Cards/Cards'

function Home() {
  return (
    <>
      <HeroSection />
      <Cards/>
    </>
  );
}

export default Home;
