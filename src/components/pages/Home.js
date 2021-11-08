import React from 'react';
import '../../App.css';
import AboutSection from '../AboutSection';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Projects from '../Projects';
import Technology from '../Technology';
import Faq from '../Faq';
import Contact from '../Contact';

function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Projects />
      <Technology />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
