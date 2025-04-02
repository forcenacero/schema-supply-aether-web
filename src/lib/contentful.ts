
import { createClient } from 'contentful';

// Contentful client setup
export const contentfulClient = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID || '',
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN || '',
});

// Project content type interface
export interface IProject {
  sys: {
    id: string;
  };
  fields: {
    title: string;
    slug: string;
    category: string;
    year: number;
    description: string;
    image: {
      fields: {
        file: {
          url: string;
        };
      };
    };
  };
}

// Journal entry content type interface
export interface IJournalEntry {
  sys: {
    id: string;
  };
  fields: {
    title: string;
    slug: string;
    category: string;
    date: string;
    excerpt: string;
    content: string;
    image: {
      fields: {
        file: {
          url: string;
        };
      };
    };
  };
}

// Fetch featured projects
export const getFeaturedProjects = async () => {
  try {
    const response = await contentfulClient.getEntries<IProject>({
      content_type: 'project',
      'fields.featured': true,
      limit: 3,
      order: '-sys.createdAt',
    });
    
    return response.items;
  } catch (error) {
    console.error('Error fetching featured projects:', error);
    return [];
  }
};

// Fetch all projects
export const getAllProjects = async () => {
  try {
    const response = await contentfulClient.getEntries<IProject>({
      content_type: 'project',
      order: '-sys.createdAt',
    });
    
    return response.items;
  } catch (error) {
    console.error('Error fetching all projects:', error);
    return [];
  }
};

// Fetch a single project by slug
export const getProjectBySlug = async (slug: string) => {
  try {
    const response = await contentfulClient.getEntries<IProject>({
      content_type: 'project',
      'fields.slug': slug,
      limit: 1,
    });
    
    return response.items[0];
  } catch (error) {
    console.error(`Error fetching project with slug ${slug}:`, error);
    return null;
  }
};

// Fetch featured journal entries
export const getFeaturedJournalEntries = async () => {
  try {
    const response = await contentfulClient.getEntries<IJournalEntry>({
      content_type: 'journalEntry',
      'fields.featured': true,
      limit: 3,
      order: '-sys.createdAt',
    });
    
    return response.items;
  } catch (error) {
    console.error('Error fetching featured journal entries:', error);
    return [];
  }
};

// Fetch all journal entries
export const getAllJournalEntries = async () => {
  try {
    const response = await contentfulClient.getEntries<IJournalEntry>({
      content_type: 'journalEntry',
      order: '-sys.createdAt',
    });
    
    return response.items;
  } catch (error) {
    console.error('Error fetching all journal entries:', error);
    return [];
  }
};

// Fetch a single journal entry by slug
export const getJournalEntryBySlug = async (slug: string) => {
  try {
    const response = await contentfulClient.getEntries<IJournalEntry>({
      content_type: 'journalEntry',
      'fields.slug': slug,
      limit: 1,
    });
    
    return response.items[0];
  } catch (error) {
    console.error(`Error fetching journal entry with slug ${slug}:`, error);
    return null;
  }
};
