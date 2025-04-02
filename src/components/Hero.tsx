
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        const translateY = scrolled * 0.3;
        heroRef.current.style.transform = `translateY(${translateY}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <section className="relative h-screen overflow-hidden bg-schema-black text-schema-white">
      <div 
        ref={heroRef}
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1604079628040-94301bb21b91?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3')] bg-cover bg-center opacity-60"
      ></div>
      
      <div className="relative container-custom h-full flex flex-col justify-center">
        <div className="max-w-3xl">
          <h1 className="animate-fade-in text-5xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight mb-6">
            Redefining spaces through minimalist design
          </h1>
          <p className="animate-fade-in animate-delay-200 text-xl md:text-2xl font-light mb-8 max-w-xl">
            Schema Supply creates immersive experiences that blend aesthetics with functionality.
          </p>
          <div className="animate-fade-in animate-delay-300 flex flex-col sm:flex-row gap-4">
            <Link to="/projects" className="button border-schema-white text-schema-white hover:bg-schema-white hover:text-schema-black">
              Explore Our Work
            </Link>
            <Link to="/about" className="button bg-transparent border-schema-white text-schema-white hover:bg-schema-white hover:text-schema-black">
              About Us
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-0 right-0 flex justify-center animate-fade-in animate-delay-500">
        <div className="w-6 h-10 border-2 border-schema-white rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-schema-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
