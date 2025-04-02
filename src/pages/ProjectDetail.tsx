
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getProjectBySlug } from '../lib/contentful';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
import SEO from '../components/SEO';

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const { data: project, isLoading, error } = useQuery({
    queryKey: ['project', slug],
    queryFn: () => getProjectBySlug(slug || ''),
    enabled: !!slug,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (error) {
    console.error('Error loading project:', error);
    return navigate('/projects');
  }

  return (
    <div className="min-h-screen flex flex-col">
      {project && (
        <SEO 
          title={project.fields.title}
          description={project.fields.description}
          image={project.fields.image.fields.file.url}
          url={`https://www.schema.supply/projects/${project.fields.slug}`}
          type="article"
        />
      )}
      <Header />
      <main className="flex-grow pt-24">
        {isLoading ? (
          <Loading />
        ) : !project ? (
          <div className="container-custom py-24 text-center">
            <h1 className="text-3xl mb-4">Project not found</h1>
            <p className="mb-8">The project you're looking for doesn't exist or has been moved.</p>
            <button onClick={() => navigate('/projects')} className="button">
              Return to Projects
            </button>
          </div>
        ) : (
          <>
            <div className="w-full h-[70vh] relative overflow-hidden">
              <img 
                src={project.fields.image.fields.file.url} 
                alt={project.fields.title} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <section className="py-20 bg-schema-white">
              <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                  <div className="md:col-span-8">
                    <h1 className="text-5xl font-light mb-6">{project.fields.title}</h1>
                    <p className="text-xl text-schema-darkgray mb-12">
                      {project.fields.description}
                    </p>
                    
                    {/* This would render rich text from Contentful if available */}
                    <div className="prose max-w-none">
                      <p className="text-schema-darkgray">
                        {project.fields.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="md:col-span-4">
                    <div className="sticky top-32 bg-schema-offwhite p-8">
                      <h3 className="text-xl font-medium mb-6">Project Details</h3>
                      
                      <div className="mb-6">
                        <h4 className="text-sm text-schema-gray mb-1">Category</h4>
                        <p>{project.fields.category}</p>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-sm text-schema-gray mb-1">Year</h4>
                        <p>{project.fields.year}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
