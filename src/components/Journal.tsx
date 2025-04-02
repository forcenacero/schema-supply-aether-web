
import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getFeaturedJournalEntries, IJournalEntry } from '../lib/contentful';
import Loading from './Loading';

const Journal = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const { data: journalEntries, isLoading, error } = useQuery({
    queryKey: ['featuredJournalEntries'],
    queryFn: getFeaturedJournalEntries
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
  }, [journalEntries]);
  
  if (error) {
    console.error('Error loading featured journal entries:', error);
  }
  
  return (
    <section className="py-24 bg-schema-white" ref={sectionRef}>
      <div className="container-custom">
        <div 
          className="mb-16 opacity-0"
          ref={(el) => (contentRefs.current[0] = el)}
        >
          <h2 className="text-4xl font-light mb-3">Journal</h2>
          <p className="text-schema-darkgray max-w-xl">
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
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {journalEntries && journalEntries.map((entry, index) => (
                <div 
                  key={entry.sys.id} 
                  className="group flex flex-col opacity-0" 
                  ref={(el) => (contentRefs.current[index + 1] = el)}
                  style={{ animationDelay: `${(index + 1) * 150}ms` }}
                >
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
            
            <div 
              className="mt-16 text-center opacity-0"
              ref={(el) => (contentRefs.current[4] = el)}
            >
              <Link to="/journal" className="button">
                View All Journal Entries
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Journal;
