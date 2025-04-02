
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeaturedProjects from '../components/FeaturedProjects';
import About from '../components/About';
import Journal from '../components/Journal';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO />
      <Header />
      <main>
        <Hero />
        <FeaturedProjects />
        <About />
        <Journal />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
