
import React, { useRef, useEffect } from 'react';

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    contentRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      
      contentRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);
  
  return (
    <section className="py-24 bg-schema-offwhite" ref={sectionRef}>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div 
            className="opacity-0"
            ref={(el) => (contentRefs.current[0] = el)}
          >
            <h2 className="text-4xl font-light mb-8">Get in Touch</h2>
            <p className="text-schema-darkgray mb-6">
              We're always interested in new projects, collaborations, and conversations. 
              Reach out to discuss your next project or just to say hello.
            </p>
            <div className="space-y-6 mt-10">
              <div>
                <h3 className="text-lg font-medium mb-2">Email</h3>
                <a href="mailto:hello@schema.supply" className="text-schema-gray hover:text-schema-black transition-colors">
                  hello@schema.supply
                </a>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Location</h3>
                <p className="text-schema-gray">
                  London · New York · Tokyo
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Social</h3>
                <div className="flex space-x-6">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-schema-gray hover:text-schema-black transition-colors">
                    Instagram
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-schema-gray hover:text-schema-black transition-colors">
                    Twitter
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-schema-gray hover:text-schema-black transition-colors">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div 
            className="opacity-0"
            ref={(el) => (contentRefs.current[1] = el)}
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-schema-black mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full border-b border-schema-gray bg-transparent py-2 placeholder-schema-gray focus:outline-none focus:border-schema-black transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-schema-black mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full border-b border-schema-gray bg-transparent py-2 placeholder-schema-gray focus:outline-none focus:border-schema-black transition-colors"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-schema-black mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full border-b border-schema-gray bg-transparent py-2 placeholder-schema-gray focus:outline-none focus:border-schema-black transition-colors"
                  placeholder="Subject"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-schema-black mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full border-b border-schema-gray bg-transparent py-2 placeholder-schema-gray focus:outline-none focus:border-schema-black transition-colors resize-none"
                  placeholder="Your message"
                ></textarea>
              </div>
              <div className="pt-4">
                <button
                  type="submit"
                  className="button"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
