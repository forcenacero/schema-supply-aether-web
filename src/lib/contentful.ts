
import { createClient } from 'contentful';
import type { EntryFieldTypes } from 'contentful';

// Define content type interfaces that satisfy Contentful's requirements
export interface IProjectFields {
  title: EntryFieldTypes.Text;
  slug: EntryFieldTypes.Text;
  category: EntryFieldTypes.Text;
  year: EntryFieldTypes.Integer;
  description: EntryFieldTypes.Text;
  featured: EntryFieldTypes.Boolean;
  image: EntryFieldTypes.AssetLink;
}

export interface IProject {
  contentTypeId: string;
  sys: {
    id: string;
  };
  fields: {
    title: string;
    slug: string;
    category: string;
    year: number;
    description: string;
    featured?: boolean;
    image: {
      fields: {
        file: {
          url: string;
        };
      };
    };
  };
}

export interface IJournalEntryFields {
  title: EntryFieldTypes.Text;
  slug: EntryFieldTypes.Text;
  category: EntryFieldTypes.Text;
  date: EntryFieldTypes.Text;
  excerpt: EntryFieldTypes.Text;
  content: EntryFieldTypes.Text;
  featured: EntryFieldTypes.Boolean;
  image: EntryFieldTypes.AssetLink;
}

export interface IJournalEntry {
  contentTypeId: string;
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
    featured?: boolean;
    image: {
      fields: {
        file: {
          url: string;
        };
      };
    };
  };
}

// Temporary placeholder values for development
// In production, these should be replaced with actual environment variables
const SPACE_ID = import.meta.env.VITE_CONTENTFUL_SPACE_ID || 'your_space_id_here';
const ACCESS_TOKEN = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN || 'your_access_token_here';

// Contentful client setup with default values to prevent runtime errors
export const contentfulClient = createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN,
});

// Mock data for development
const mockProjects: IProject[] = [
  {
    contentTypeId: 'project',
    sys: { id: '1' },
    fields: {
      title: 'Minimalist Chair Design',
      slug: 'minimalist-chair',
      category: 'Furniture',
      year: 2023,
      description: 'A sleek and elegant chair design focused on simplicity and comfort.',
      featured: true,
      image: {
        fields: {
          file: {
            url: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
          }
        }
      }
    }
  },
  {
    contentTypeId: 'project',
    sys: { id: '2' },
    fields: {
      title: 'Modern Interior Concept',
      slug: 'modern-interior',
      category: 'Interior Design',
      year: 2023,
      description: 'A contemporary living space that balances functionality and aesthetics.',
      featured: true,
      image: {
        fields: {
          file: {
            url: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
          }
        }
      }
    }
  },
  {
    contentTypeId: 'project',
    sys: { id: '3' },
    fields: {
      title: 'Eco-friendly Packaging',
      slug: 'eco-packaging',
      category: 'Packaging',
      year: 2022,
      description: 'Sustainable packaging solutions designed with the environment in mind.',
      featured: true,
      image: {
        fields: {
          file: {
            url: 'https://images.unsplash.com/photo-1612965607446-25e1332775ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
          }
        }
      }
    }
  }
];

const mockJournalEntries: IJournalEntry[] = [
  {
    contentTypeId: 'journalEntry',
    sys: { id: '1' },
    fields: {
      title: 'The Importance of Negative Space',
      slug: 'negative-space',
      category: 'Design Theory',
      date: 'April 15, 2023',
      excerpt: 'Exploring how the absence of elements can strengthen a design composition.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio.',
      featured: true,
      image: {
        fields: {
          file: {
            url: 'https://images.unsplash.com/photo-1562619425-c307bb83bc42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
          }
        }
      }
    }
  },
  {
    contentTypeId: 'journalEntry',
    sys: { id: '2' },
    fields: {
      title: 'Sustainable Materials in Modern Design',
      slug: 'sustainable-materials',
      category: 'Sustainability',
      date: 'March 22, 2023',
      excerpt: 'How designers are incorporating eco-friendly materials into contemporary projects.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio.',
      featured: true,
      image: {
        fields: {
          file: {
            url: 'https://images.unsplash.com/photo-1545005118-915c3aad0018?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
          }
        }
      }
    }
  },
  {
    contentTypeId: 'journalEntry',
    sys: { id: '3' },
    fields: {
      title: 'Typography Trends for 2023',
      slug: 'typography-trends',
      category: 'Typography',
      date: 'February 8, 2023',
      excerpt: 'The latest innovations and revivals in typeface design and implementation.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio.',
      featured: true,
      image: {
        fields: {
          file: {
            url: 'https://images.unsplash.com/photo-1577983157451-a242d0edeeb4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
          }
        }
      }
    }
  }
];

// Modified functions to use mock data in development and real data in production
export const getFeaturedProjects = async () => {
  try {
    // Check if we have valid Contentful credentials
    if (SPACE_ID === 'your_space_id_here' || ACCESS_TOKEN === 'your_access_token_here') {
      console.log('Using mock projects data');
      return mockProjects.filter(project => project.fields.featured);
    }
    
    const response = await contentfulClient.getEntries<IProjectFields>({
      content_type: 'project',
      'fields.featured': true,
      limit: 3,
      order: '-sys.createdAt',
    });
    
    return response.items as unknown as IProject[];
  } catch (error) {
    console.error('Error fetching featured projects:', error);
    console.log('Falling back to mock data');
    return mockProjects.filter(project => project.fields.featured);
  }
};

export const getAllProjects = async () => {
  try {
    if (SPACE_ID === 'your_space_id_here' || ACCESS_TOKEN === 'your_access_token_here') {
      console.log('Using mock projects data');
      return mockProjects;
    }
    
    const response = await contentfulClient.getEntries<IProjectFields>({
      content_type: 'project',
      order: '-sys.createdAt',
    });
    
    return response.items as unknown as IProject[];
  } catch (error) {
    console.error('Error fetching all projects:', error);
    console.log('Falling back to mock data');
    return mockProjects;
  }
};

export const getProjectBySlug = async (slug: string) => {
  try {
    if (SPACE_ID === 'your_space_id_here' || ACCESS_TOKEN === 'your_access_token_here') {
      console.log('Using mock projects data');
      return mockProjects.find(project => project.fields.slug === slug) || null;
    }
    
    const response = await contentfulClient.getEntries<IProjectFields>({
      content_type: 'project',
      'fields.slug': slug,
      limit: 1,
    });
    
    return (response.items[0] as unknown as IProject) || null;
  } catch (error) {
    console.error(`Error fetching project with slug ${slug}:`, error);
    console.log('Falling back to mock data');
    return mockProjects.find(project => project.fields.slug === slug) || null;
  }
};

export const getFeaturedJournalEntries = async () => {
  try {
    if (SPACE_ID === 'your_space_id_here' || ACCESS_TOKEN === 'your_access_token_here') {
      console.log('Using mock journal entries data');
      return mockJournalEntries.filter(entry => entry.fields.featured);
    }
    
    const response = await contentfulClient.getEntries<IJournalEntryFields>({
      content_type: 'journalEntry',
      'fields.featured': true,
      limit: 3,
      order: '-sys.createdAt',
    });
    
    return response.items as unknown as IJournalEntry[];
  } catch (error) {
    console.error('Error fetching featured journal entries:', error);
    console.log('Falling back to mock data');
    return mockJournalEntries.filter(entry => entry.fields.featured);
  }
};

export const getAllJournalEntries = async () => {
  try {
    if (SPACE_ID === 'your_space_id_here' || ACCESS_TOKEN === 'your_access_token_here') {
      console.log('Using mock journal entries data');
      return mockJournalEntries;
    }
    
    const response = await contentfulClient.getEntries<IJournalEntryFields>({
      content_type: 'journalEntry',
      order: '-sys.createdAt',
    });
    
    return response.items as unknown as IJournalEntry[];
  } catch (error) {
    console.error('Error fetching all journal entries:', error);
    console.log('Falling back to mock data');
    return mockJournalEntries;
  }
};

export const getJournalEntryBySlug = async (slug: string) => {
  try {
    if (SPACE_ID === 'your_space_id_here' || ACCESS_TOKEN === 'your_access_token_here') {
      console.log('Using mock journal entries data');
      return mockJournalEntries.find(entry => entry.fields.slug === slug) || null;
    }
    
    const response = await contentfulClient.getEntries<IJournalEntryFields>({
      content_type: 'journalEntry',
      'fields.slug': slug,
      limit: 1,
    });
    
    return (response.items[0] as unknown as IJournalEntry) || null;
  } catch (error) {
    console.error(`Error fetching journal entry with slug ${slug}:`, error);
    console.log('Falling back to mock data');
    return mockJournalEntries.find(entry => entry.fields.slug === slug) || null;
  }
};
