
import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
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
    <section className="py-24 bg-schema-white" ref={sectionRef}>
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div 
              className="aspect-[4/5] overflow-hidden opacity-0"
              ref={(el) => (contentRefs.current[0] = el)}
            >
              <img 
                src="https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3" 
                alt="About Schema Supply" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="md:col-span-7 flex flex-col justify-center">
            <div 
              className="opacity-0"
              ref={(el) => (contentRefs.current[1] = el)}
            >
              <h2 className="text-4xl font-light mb-8">About Schema Supply</h2>
              <p className="text-schema-darkgray mb-6">
                Schema Supply is a design collective founded on the principles of minimalism, functionality, and timeless aesthetics. We operate at the intersection of design, culture, and experience, creating work that elevates the everyday.
              </p>
              <p className="text-schema-darkgray mb-10">
                Our approach is rooted in thoughtful consideration of form, material, and context. We believe that great design should simplify rather than complicate, and that true innovation lies in the subtle details that enhance human experience.
              </p>
              <Link to="/about" className="button">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
