
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getJournalEntryBySlug } from '../lib/contentful';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
import SEO from '../components/SEO';

const JournalDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const { data: entry, isLoading, error } = useQuery({
    queryKey: ['journalEntry', slug],
    queryFn: () => getJournalEntryBySlug(slug || ''),
    enabled: !!slug,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (error) {
    console.error('Error loading journal entry:', error);
    return navigate('/journal');
  }

  return (
    <div className="min-h-screen flex flex-col">
      {entry && (
        <SEO 
          title={entry.fields.title}
          description={entry.fields.excerpt}
          image={entry.fields.image.fields.file.url}
          url={`https://www.schema.supply/journal/${entry.fields.slug}`}
          type="article"
        />
      )}
      <Header />
      <main className="flex-grow pt-24">
        {isLoading ? (
          <Loading />
        ) : !entry ? (
          <div className="container-custom py-24 text-center">
            <h1 className="text-3xl mb-4">Journal entry not found</h1>
            <p className="mb-8">The article you're looking for doesn't exist or has been moved.</p>
            <button onClick={() => navigate('/journal')} className="button">
              Return to Journal
            </button>
          </div>
        ) : (
          <>
            <div className="w-full h-[50vh] relative overflow-hidden">
              <img 
                src={entry.fields.image.fields.file.url} 
                alt={entry.fields.title} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <section className="py-20 bg-schema-white">
              <div className="container-custom max-w-4xl">
                <div className="mb-12">
                  <div className="flex items-center text-sm text-schema-gray mb-4 space-x-4">
                    <span>{entry.fields.category}</span>
                    <span>·</span>
                    <span>{entry.fields.date}</span>
                  </div>
                  <h1 className="text-5xl font-light mb-6">{entry.fields.title}</h1>
                  <p className="text-xl text-schema-darkgray">
                    {entry.fields.excerpt}
                  </p>
                </div>
                
                <div className="prose max-w-none text-schema-darkgray">
                  <p>{entry.fields.content}</p>
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

export default JournalDetail;
