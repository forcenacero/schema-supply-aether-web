
import React, { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { getAllJournalEntries } from '../lib/contentful';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
import SEO from '../components/SEO';

const Journal = () => {
  const { data: entries, isLoading, error } = useQuery({
    queryKey: ['allJournalEntries'],
    queryFn: getAllJournalEntries
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Journal"
        description="Explore Schema Supply's insights, thoughts, and explorations in the world of design, minimalism, and aesthetics."
        url="https://www.schema.supply/journal"
      />
      <Header />
      <main className="flex-grow pt-24">
        <section className="py-24 bg-schema-white">
          <div className="container-custom">
            <div className="mb-16">
              <h1 className="text-5xl font-light mb-6">Journal</h1>
              <p className="text-schema-darkgray max-w-2xl">
                Thoughts, insights, and explorations from our design practice.
              </p>
            </div>
            
            {isLoading ? (
              <Loading />
            ) : error ? (
              <div className="text-center py-8">
                <p className="text-schema-darkgray">Unable to load journal entries. Please try again later.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 mt-12">
                {entries && entries.map((entry) => (
                  <div key={entry.sys.id} className="group flex flex-col animate-fade-in">
                    <Link to={`/journal/${entry.fields.slug}`} className="overflow-hidden">
                      <div className="relative overflow-hidden aspect-[3/2] mb-6">
                        <img 
                          src={entry.fields.image.fields.file.url} 
                          alt={entry.fields.title} 
                          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div className="flex items-center text-sm text-schema-gray mb-2 space-x-4">
                        <span>{entry.fields.category}</span>
                        <span>·</span>
                        <span>{entry.fields.date}</span>
                      </div>
                      <h3 className="text-xl font-medium mb-2 group-hover:text-schema-darkgray transition-colors">{entry.fields.title}</h3>
                      <p className="text-schema-gray">{entry.fields.excerpt}</p>
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

export default Journal;
