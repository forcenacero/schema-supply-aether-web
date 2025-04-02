
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Contact"
        description="Get in touch with Schema Supply for collaborations, inquiries, or to discuss your project needs."
        url="https://www.schema.supply/contact"
      />
      <Header />
      <main className="flex-grow pt-24">
        <section className="py-24 bg-schema-white">
          <div className="container-custom max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h1 className="text-5xl font-light mb-8">Contact</h1>
                <p className="text-schema-darkgray mb-12">
                  We're always open to new collaborations, partnerships, or simply discussing ideas. Get in touch and let's create something together.
                </p>
                
                <div className="mb-8">
                  <h3 className="text-xl font-medium mb-3">Email</h3>
                  <a href="mailto:hello@schema.supply" className="text-schema-darkgray hover:text-schema-black transition-colors">
                    hello@schema.supply
                  </a>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-medium mb-3">Visit</h3>
                  <address className="text-schema-darkgray not-italic">
                    Schema Supply Studio<br />
                    123 Design Avenue<br />
                    New York, NY 10001
                  </address>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium mb-3">Follow</h3>
                  <div className="flex space-x-6">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-schema-darkgray hover:text-schema-black transition-colors">
                      Instagram
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-schema-darkgray hover:text-schema-black transition-colors">
                      Twitter
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-schema-darkgray hover:text-schema-black transition-colors">
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
              
              <div>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-schema-darkgray mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full p-3 border border-schema-lightgray focus:outline-none focus:ring-1 focus:ring-schema-black"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-schema-darkgray mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full p-3 border border-schema-lightgray focus:outline-none focus:ring-1 focus:ring-schema-black"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-schema-darkgray mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full p-3 border border-schema-lightgray focus:outline-none focus:ring-1 focus:ring-schema-black"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-schema-darkgray mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="w-full p-3 border border-schema-lightgray focus:outline-none focus:ring-1 focus:ring-schema-black"
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full py-3 bg-schema-black text-schema-white hover:bg-schema-darkgray transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
