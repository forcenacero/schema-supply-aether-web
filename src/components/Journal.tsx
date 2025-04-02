
import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface JournalEntry {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
}

const journalEntries: JournalEntry[] = [
  {
    id: 1,
    title: "The Evolution of Minimalist Design",
    excerpt: "Exploring how minimalist design principles have evolved over the decades and their impact on contemporary aesthetics.",
    category: "Design Theory",
    date: "May 12, 2023",
    image: "https://images.unsplash.com/photo-1493934558415-9d19f0b2b4d2?q=80&w=2054&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: 2,
    title: "Material Study: The Versatility of Concrete",
    excerpt: "An in-depth look at how concrete continues to shape modern architecture and interior design.",
    category: "Materials",
    date: "April 28, 2023",
    image: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: 3,
    title: "Finding Harmony in Contrast",
    excerpt: "How the juxtaposition of opposing elements creates visual interest and balance in design.",
    category: "Design Principles",
    date: "March 15, 2023",
    image: "https://images.unsplash.com/photo-1482245294234-b3f2f8d5f1a4?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3"
  }
];

const Journal = () => {
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
        <div 
          className="mb-16 opacity-0"
          ref={(el) => (contentRefs.current[0] = el)}
        >
          <h2 className="text-4xl font-light mb-3">Journal</h2>
          <p className="text-schema-darkgray max-w-xl">
            Thoughts, insights, and explorations from our design practice.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {journalEntries.map((entry, index) => (
            <div 
              key={entry.id} 
              className="group flex flex-col opacity-0" 
              ref={(el) => (contentRefs.current[index + 1] = el)}
              style={{ animationDelay: `${(index + 1) * 150}ms` }}
            >
              <Link to={`/journal/${entry.id}`} className="overflow-hidden">
                <div className="relative overflow-hidden aspect-[3/2] mb-6">
                  <img 
                    src={entry.image} 
                    alt={entry.title} 
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center text-sm text-schema-gray mb-2 space-x-4">
                  <span>{entry.category}</span>
                  <span>·</span>
                  <span>{entry.date}</span>
                </div>
                <h3 className="text-xl font-medium mb-2 group-hover:text-schema-darkgray transition-colors">{entry.title}</h3>
                <p className="text-schema-gray">{entry.excerpt}</p>
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
      </div>
    </section>
  );
};

export default Journal;
