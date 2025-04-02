
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getFeaturedProjects, IProject } from '../lib/contentful';
import Loading from './Loading';

const FeaturedProjects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const { data: projects, isLoading, error } = useQuery({
    queryKey: ['featuredProjects'],
    queryFn: getFeaturedProjects
  });
  
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
  }, [projects]);
  
  if (error) {
    console.error('Error loading featured projects:', error);
  }
  
  return (
    <section className="py-24 bg-schema-offwhite" ref={sectionRef}>
      <div className="container-custom">
        <div className="mb-16 opacity-0" ref={(el) => (projectRefs.current[0] = el)}>
          <h2 className="text-4xl font-light mb-3">Featured Projects</h2>
          <p className="text-schema-darkgray max-w-xl">
            A curated selection of our most notable work across various design disciplines.
          </p>
        </div>
        
        {isLoading ? (
          <Loading />
        ) : error ? (
          <div className="text-center py-8">
            <p className="text-schema-darkgray">Unable to load projects. Please try again later.</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects && projects.map((project, index) => (
                <div 
                  key={project.sys.id} 
                  className="group flex flex-col opacity-0" 
                  ref={(el) => (projectRefs.current[index + 1] = el)}
                  style={{ animationDelay: `${(index + 1) * 150}ms` }}
                >
                  <Link to={`/projects/${project.fields.slug}`} className="overflow-hidden">
                    <div className="relative overflow-hidden aspect-[4/5]">
                      <img 
                        src={project.fields.image.fields.file.url} 
                        alt={project.fields.title} 
                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="pt-6">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-xl font-medium">{project.fields.title}</h3>
                        <span className="text-schema-gray">{project.fields.year}</span>
                      </div>
                      <p className="text-schema-darkgray text-sm mb-2">{project.fields.category}</p>
                      <p className="text-schema-gray">{project.fields.description}</p>
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
          </>
        )}
      </div>
    </section>
  );
};

export default FeaturedProjects;
