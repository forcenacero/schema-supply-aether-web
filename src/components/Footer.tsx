
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-schema-white py-16 border-t border-schema-lightgray">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-lg font-medium mb-6">schema.supply</h3>
            <p className="text-schema-darkgray max-w-xs">
              A high-end lifestyle and design brand focused on creating timeless, minimalist experiences.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-6">Navigation</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-schema-darkgray hover:text-schema-black transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-schema-darkgray hover:text-schema-black transition-colors">About</Link></li>
              <li><Link to="/services" className="text-schema-darkgray hover:text-schema-black transition-colors">Services</Link></li>
              <li><Link to="/projects" className="text-schema-darkgray hover:text-schema-black transition-colors">Projects</Link></li>
              <li><Link to="/journal" className="text-schema-darkgray hover:text-schema-black transition-colors">Journal</Link></li>
              <li><Link to="/contact" className="text-schema-darkgray hover:text-schema-black transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-6">Connect</h3>
            <ul className="space-y-3">
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-schema-darkgray hover:text-schema-black transition-colors">Instagram</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-schema-darkgray hover:text-schema-black transition-colors">Twitter</a></li>
              <li><a href="mailto:hello@schema.supply" className="text-schema-darkgray hover:text-schema-black transition-colors">hello@schema.supply</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-schema-lightgray flex flex-col md:flex-row justify-between items-center text-schema-gray text-sm">
          <p>&copy; {currentYear} Schema Supply. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-6">
            <Link to="/privacy" className="hover:text-schema-black transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-schema-black transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
