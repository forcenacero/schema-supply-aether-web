
import React, { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { getAllProjects } from '../lib/contentful';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
import SEO from '../components/SEO';

const Projects = () => {
  const { data: projects, isLoading, error } = useQuery({
    queryKey: ['allProjects'],
    queryFn: getAllProjects
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Projects"
        description="Explore Schema Supply's portfolio of high-end design projects focused on creating timeless, minimalist experiences."
        url="https://www.schema.supply/projects"
      />
      <Header />
      <main className="flex-grow pt-24">
        <section className="py-24 bg-schema-white">
          <div className="container-custom">
            <div className="mb-16">
              <h1 className="text-5xl font-light mb-6">Projects</h1>
              <p className="text-schema-darkgray max-w-2xl">
                Our portfolio of work spans across various design disciplines, unified by our commitment to minimalism, functionality, and timeless aesthetics.
              </p>
            </div>
            
            {isLoading ? (
              <Loading />
            ) : error ? (
              <div className="text-center py-8">
                <p className="text-schema-darkgray">Unable to load projects. Please try again later.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                {projects && projects.map((project) => (
                  <div key={project.sys.id} className="group flex flex-col animate-fade-in">
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
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
