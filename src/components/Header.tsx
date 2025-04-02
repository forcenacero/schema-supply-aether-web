
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-schema-white shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="text-schema-black text-2xl font-light z-50">
          schema.supply
        </Link>
        
        <button 
          className="lg:hidden z-50" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-schema-black" />
          ) : (
            <Menu className="h-6 w-6 text-schema-black" />
          )}
        </button>
        
        <nav className="hidden lg:flex items-center space-x-8">
          <Link to="/about" className="text-schema-black hover:text-schema-gray link-underline">
            About
          </Link>
          <Link to="/services" className="text-schema-black hover:text-schema-gray link-underline">
            Services
          </Link>
          <Link to="/projects" className="text-schema-black hover:text-schema-gray link-underline">
            Projects
          </Link>
          <Link to="/journal" className="text-schema-black hover:text-schema-gray link-underline">
            Journal
          </Link>
          <Link to="/contact" className="text-schema-black hover:text-schema-gray link-underline">
            Contact
          </Link>
          <LanguageSwitcher />
        </nav>
        
        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-schema-white flex flex-col justify-center items-center transition-all duration-300 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}>
          <nav className="flex flex-col items-center space-y-8">
            <Link 
              to="/" 
              className="text-4xl text-schema-black hover:text-schema-gray transition-colors"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-4xl text-schema-black hover:text-schema-gray transition-colors"
              onClick={closeMenu}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className="text-4xl text-schema-black hover:text-schema-gray transition-colors"
              onClick={closeMenu}
            >
              Services
            </Link>
            <Link 
              to="/projects" 
              className="text-4xl text-schema-black hover:text-schema-gray transition-colors"
              onClick={closeMenu}
            >
              Projects
            </Link>
            <Link 
              to="/journal" 
              className="text-4xl text-schema-black hover:text-schema-gray transition-colors"
              onClick={closeMenu}
            >
              Journal
            </Link>
            <Link 
              to="/contact" 
              className="text-4xl text-schema-black hover:text-schema-gray transition-colors"
              onClick={closeMenu}
            >
              Contact
            </Link>
            <div className="mt-4">
              <LanguageSwitcher />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
