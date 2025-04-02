
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

interface Project {
  id: number;
  title: string;
  category: string;
  year: number;
  image: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Monochrome Living",
    category: "Interior Design",
    year: 2023,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3",
    description: "Minimalist residential space focused on texture and form."
  },
  {
    id: 2,
    title: "Geometric Harmony",
    category: "Product Design",
    year: 2023,
    image: "https://images.unsplash.com/photo-1581349485608-9469926a8e5e?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3",
    description: "Conceptual product line exploring the intersection of form and function."
  },
  {
    id: 3,
    title: "Urban Contrast",
    category: "Architecture",
    year: 2022,
    image: "https://images.unsplash.com/photo-1600607687644-c7171b48f904?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3",
    description: "Modern architectural concept embracing light and shadow."
  }
];

const FeaturedProjects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  
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
    
    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      
      projectRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);
  
  return (
    <section className="py-24 bg-schema-offwhite" ref={sectionRef}>
      <div className="container-custom">
        <div className="mb-16 opacity-0" ref={(el) => (projectRefs.current[0] = el)}>
          <h2 className="text-4xl font-light mb-3">Featured Projects</h2>
          <p className="text-schema-darkgray max-w-xl">
            A curated selection of our most notable work across various design disciplines.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="group flex flex-col opacity-0" 
              ref={(el) => (projectRefs.current[index + 1] = el)}
              style={{ animationDelay: `${(index + 1) * 150}ms` }}
            >
              <Link to={`/projects/${project.id}`} className="overflow-hidden">
                <div className="relative overflow-hidden aspect-[4/5]">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="pt-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-medium">{project.title}</h3>
                    <span className="text-schema-gray">{project.year}</span>
                  </div>
                  <p className="text-schema-darkgray text-sm mb-2">{project.category}</p>
                  <p className="text-schema-gray">{project.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center opacity-0" ref={(el) => (projectRefs.current[4] = el)}>
          <Link to="/projects" className="button">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
