
import React, { useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const About = () => {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
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
    
    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    
    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="About"
        description="Learn about Schema Supply, a design collective founded on the principles of minimalism, functionality, and timeless aesthetics."
        url="https://www.schema.supply/about"
      />
      <Header />
      <main className="flex-grow pt-24">
        <section className="py-24 bg-schema-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
              <div className="md:col-span-5">
                <div 
                  className="aspect-[4/5] overflow-hidden opacity-0"
                  ref={(el) => (sectionRefs.current[0] = el)}
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
                  ref={(el) => (sectionRefs.current[1] = el)}
                >
                  <h1 className="text-5xl font-light mb-8">About Schema Supply</h1>
                  <p className="text-schema-darkgray mb-6">
                    Schema Supply is a design collective founded on the principles of minimalism, functionality, and timeless aesthetics. We operate at the intersection of design, culture, and experience, creating work that elevates the everyday.
                  </p>
                  <p className="text-schema-darkgray mb-6">
                    Our approach is rooted in thoughtful consideration of form, material, and context. We believe that great design should simplify rather than complicate, and that true innovation lies in the subtle details that enhance human experience.
                  </p>
                  <p className="text-schema-darkgray mb-6">
                    Founded in 2018, we have collaborated with clients across various industries, from architecture and interior design to product development and digital experiences. Our diverse portfolio reflects our commitment to pushing boundaries while maintaining a cohesive design philosophy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-24 bg-schema-offwhite">
          <div className="container-custom">
            <div 
              className="text-center mb-16 opacity-0"
              ref={(el) => (sectionRefs.current[2] = el)}
            >
              <h2 className="text-4xl font-light mb-3">Our Approach</h2>
              <p className="text-schema-darkgray max-w-2xl mx-auto">
                We adhere to a set of core principles that guide our design process and aesthetic decisions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div 
                className="opacity-0"
                ref={(el) => (sectionRefs.current[3] = el)}
                style={{ animationDelay: '100ms' }}
              >
                <h3 className="text-xl font-medium mb-4">Minimalism</h3>
                <p className="text-schema-darkgray">
                  We believe in the power of reduction—stripping away the superfluous to reveal the essential. Our designs embrace simplicity without sacrificing depth or functionality.
                </p>
              </div>
              
              <div 
                className="opacity-0"
                ref={(el) => (sectionRefs.current[4] = el)}
                style={{ animationDelay: '200ms' }}
              >
                <h3 className="text-xl font-medium mb-4">Functionality</h3>
                <p className="text-schema-darkgray">
                  Form follows function in all our work. We prioritize usability and purpose, ensuring that our designs not only look beautiful but serve their intended purpose effectively.
                </p>
              </div>
              
              <div 
                className="opacity-0"
                ref={(el) => (sectionRefs.current[5] = el)}
                style={{ animationDelay: '300ms' }}
              >
                <h3 className="text-xl font-medium mb-4">Timelessness</h3>
                <p className="text-schema-darkgray">
                  We create with longevity in mind, eschewing fleeting trends in favor of enduring design principles that will remain relevant and impactful for years to come.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-24 bg-schema-white">
          <div className="container-custom">
            <div 
              className="text-center mb-16 opacity-0"
              ref={(el) => (sectionRefs.current[6] = el)}
            >
              <h2 className="text-4xl font-light mb-3">Our Team</h2>
              <p className="text-schema-darkgray max-w-2xl mx-auto">
                A multidisciplinary collective of designers, thinkers, and makers.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div 
                className="opacity-0"
                ref={(el) => (sectionRefs.current[7] = el)}
                style={{ animationDelay: '100ms' }}
              >
                <div className="aspect-square overflow-hidden mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3" 
                    alt="Team Member" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium mb-1">Alexandra Chen</h3>
                <p className="text-schema-gray mb-4">Founder & Creative Director</p>
                <p className="text-schema-darkgray">
                  With a background in architecture and visual arts, Alexandra leads the creative vision of Schema Supply, drawing inspiration from diverse cultural influences and spatial concepts.
                </p>
              </div>
              
              <div 
                className="opacity-0"
                ref={(el) => (sectionRefs.current[8] = el)}
                style={{ animationDelay: '200ms' }}
              >
                <div className="aspect-square overflow-hidden mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3" 
                    alt="Team Member" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium mb-1">Marcus Sullivan</h3>
                <p className="text-schema-gray mb-4">Design Director</p>
                <p className="text-schema-darkgray">
                  Marcus brings over 15 years of experience in product and spatial design, with a keen eye for detail and a passion for materials and craftsmanship.
                </p>
              </div>
              
              <div 
                className="opacity-0"
                ref={(el) => (sectionRefs.current[9] = el)}
                style={{ animationDelay: '300ms' }}
              >
                <div className="aspect-square overflow-hidden mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3" 
                    alt="Team Member" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium mb-1">Naomi Park</h3>
                <p className="text-schema-gray mb-4">Strategy Lead</p>
                <p className="text-schema-darkgray">
                  With a background in design research and brand strategy, Naomi ensures that our aesthetic decisions are grounded in meaningful insights and aligned with client objectives.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
