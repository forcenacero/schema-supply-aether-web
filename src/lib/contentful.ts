
import { createClient } from 'contentful';
import type { EntryFieldTypes, EntrySkeletonType } from 'contentful';

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

// Define interfaces for Contentful entry types
interface ProjectEntryType extends EntrySkeletonType {
  fields: IProjectFields;
}

interface JournalEntryType extends EntrySkeletonType {
  fields: IJournalEntryFields;
}

// Supported languages
export type SupportedLanguage = 'en-US' | 'es' | 'fr';
export const DEFAULT_LANGUAGE: SupportedLanguage = 'en-US';
export const SUPPORTED_LANGUAGES: SupportedLanguage[] = ['en-US', 'es', 'fr'];

// Temporary placeholder values for development
// In production, these should be replaced with actual environment variables
const SPACE_ID = import.meta.env.VITE_CONTENTFUL_SPACE_ID || 'your_space_id_here';
const ACCESS_TOKEN = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN || 'your_access_token_here';

// Contentful client setup with default values to prevent runtime errors
export const contentfulClient = createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN,
});

// Mock data for development with multi-language support
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

// Mock data with Spanish translations
const mockProjectsEs: IProject[] = [
  {
    contentTypeId: 'project',
    sys: { id: '1' },
    fields: {
      title: 'Diseño de Silla Minimalista',
      slug: 'minimalist-chair',
      category: 'Muebles',
      year: 2023,
      description: 'Un diseño de silla elegante y estilizado enfocado en la simplicidad y comodidad.',
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
      title: 'Concepto de Interior Moderno',
      slug: 'modern-interior',
      category: 'Diseño de Interiores',
      year: 2023,
      description: 'Un espacio de vida contemporáneo que equilibra funcionalidad y estética.',
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
      title: 'Embalaje Ecológico',
      slug: 'eco-packaging',
      category: 'Embalaje',
      year: 2022,
      description: 'Soluciones de embalaje sostenibles diseñadas pensando en el medio ambiente.',
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

// Mock data with French translations
const mockProjectsFr: IProject[] = [
  {
    contentTypeId: 'project',
    sys: { id: '1' },
    fields: {
      title: 'Design de Chaise Minimaliste',
      slug: 'minimalist-chair',
      category: 'Mobilier',
      year: 2023,
      description: 'Un design de chaise élégant et épuré axé sur la simplicité et le confort.',
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
      title: 'Concept d\'Intérieur Moderne',
      slug: 'modern-interior',
      category: 'Design d\'Intérieur',
      year: 2023,
      description: 'Un espace de vie contemporain qui équilibre fonctionnalité et esthétique.',
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
      title: 'Emballage Écologique',
      slug: 'eco-packaging',
      category: 'Emballage',
      year: 2022,
      description: 'Solutions d\'emballage durables conçues en pensant à l\'environnement.',
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

// Mock journal entries with Spanish translations
const mockJournalEntriesEs: IJournalEntry[] = [
  {
    contentTypeId: 'journalEntry',
    sys: { id: '1' },
    fields: {
      title: 'La Importancia del Espacio Negativo',
      slug: 'negative-space',
      category: 'Teoría del Diseño',
      date: '15 de Abril, 2023',
      excerpt: 'Explorando cómo la ausencia de elementos puede fortalecer una composición de diseño.',
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
      title: 'Materiales Sostenibles en el Diseño Moderno',
      slug: 'sustainable-materials',
      category: 'Sostenibilidad',
      date: '22 de Marzo, 2023',
      excerpt: 'Cómo los diseñadores están incorporando materiales ecológicos en proyectos contemporáneos.',
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
      title: 'Tendencias de Tipografía para 2023',
      slug: 'typography-trends',
      category: 'Tipografía',
      date: '8 de Febrero, 2023',
      excerpt: 'Las últimas innovaciones y renacimientos en el diseño e implementación de tipografías.',
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

// Mock journal entries with French translations
const mockJournalEntriesFr: IJournalEntry[] = [
  {
    contentTypeId: 'journalEntry',
    sys: { id: '1' },
    fields: {
      title: 'L\'Importance de l\'Espace Négatif',
      slug: 'negative-space',
      category: 'Théorie du Design',
      date: '15 Avril, 2023',
      excerpt: 'Explorer comment l\'absence d\'éléments peut renforcer une composition de design.',
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
      title: 'Matériaux Durables dans le Design Moderne',
      slug: 'sustainable-materials',
      category: 'Durabilité',
      date: '22 Mars, 2023',
      excerpt: 'Comment les designers intègrent des matériaux écologiques dans des projets contemporains.',
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
      title: 'Tendances Typographiques pour 2023',
      slug: 'typography-trends',
      category: 'Typographie',
      date: '8 Février, 2023',
      excerpt: 'Les dernières innovations et renaissances dans la conception et l\'implémentation de polices de caractères.',
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

// Helper function to get mock data for the correct language
const getMockProjectsByLanguage = (locale: SupportedLanguage = DEFAULT_LANGUAGE): IProject[] => {
  switch (locale) {
    case 'es':
      return mockProjectsEs;
    case 'fr':
      return mockProjectsFr;
    default:
      return mockProjects;
  }
};

const getMockJournalEntriesByLanguage = (locale: SupportedLanguage = DEFAULT_LANGUAGE): IJournalEntry[] => {
  switch (locale) {
    case 'es':
      return mockJournalEntriesEs;
    case 'fr':
      return mockJournalEntriesFr;
    default:
      return mockJournalEntries;
  }
};

// Modified functions to use mock data in development and real data in production with language support
export const getFeaturedProjects = async (locale: SupportedLanguage = DEFAULT_LANGUAGE) => {
  try {
    // Check if we have valid Contentful credentials
    if (SPACE_ID === 'your_space_id_here' || ACCESS_TOKEN === 'your_access_token_here') {
      console.log('Using mock projects data');
      return getMockProjectsByLanguage(locale).filter(project => project.fields.featured);
    }
    
    const response = await contentfulClient.getEntries<ProjectEntryType>({
      content_type: 'project',
      'fields.featured': true,
      limit: 3,
      order: '-sys.createdAt',
      locale: locale
    });
    
    return response.items as unknown as IProject[];
  } catch (error) {
    console.error('Error fetching featured projects:', error);
    console.log('Falling back to mock data');
    return getMockProjectsByLanguage(locale).filter(project => project.fields.featured);
  }
};

export const getAllProjects = async (locale: SupportedLanguage = DEFAULT_LANGUAGE) => {
  try {
    if (SPACE_ID === 'your_space_id_here' || ACCESS_TOKEN === 'your_access_token_here') {
      console.log('Using mock projects data');
      return getMockProjectsByLanguage(locale);
    }
    
    const response = await contentfulClient.getEntries<ProjectEntryType>({
      content_type: 'project',
      order: '-sys.createdAt',
      locale: locale
    });
    
    return response.items as unknown as IProject[];
  } catch (error) {
    console.error('Error fetching all projects:', error);
    console.log('Falling back to mock data');
    return getMockProjectsByLanguage(locale);
  }
};

export const getProjectBySlug = async (slug: string, locale: SupportedLanguage = DEFAULT_LANGUAGE) => {
  try {
    if (SPACE_ID === 'your_space_id_here' || ACCESS_TOKEN === 'your_access_token_here') {
      console.log('Using mock projects data');
      return getMockProjectsByLanguage(locale).find(project => project.fields.slug === slug) || null;
    }
    
    const response = await contentfulClient.getEntries<ProjectEntryType>({
      content_type: 'project',
      'fields.slug': slug,
      limit: 1,
      locale: locale
    });
    
    return (response.items[0] as unknown as IProject) || null;
  } catch (error) {
    console.error(`Error fetching project with slug ${slug}:`, error);
    console.log('Falling back to mock data');
    return getMockProjectsByLanguage(locale).find(project => project.fields.slug === slug) || null;
  }
};

export const getFeaturedJournalEntries = async (locale: SupportedLanguage = DEFAULT_LANGUAGE) => {
  try {
    if (SPACE_ID === 'your_space_id_here' || ACCESS_TOKEN === 'your_access_token_here') {
      console.log('Using mock journal entries data');
      return getMockJournalEntriesByLanguage(locale).filter(entry => entry.fields.featured);
    }
    
    const response = await contentfulClient.getEntries<JournalEntryType>({
      content_type: 'journalEntry',
      'fields.featured': true,
      limit: 3,
      order: '-sys.createdAt',
      locale: locale
    });
    
    return response.items as unknown as IJournalEntry[];
  } catch (error) {
    console.error('Error fetching featured journal entries:', error);
    console.log('Falling back to mock data');
    return getMockJournalEntriesByLanguage(locale).filter(entry => entry.fields.featured);
  }
};

export const getAllJournalEntries = async (locale: SupportedLanguage = DEFAULT_LANGUAGE) => {
  try {
    if (SPACE_ID === 'your_space_id_here' || ACCESS_TOKEN === 'your_access_token_here') {
      console.log('Using mock journal entries data');
      return getMockJournalEntriesByLanguage(locale);
    }
    
    const response = await contentfulClient.getEntries<JournalEntryType>({
      content_type: 'journalEntry',
      order: '-sys.createdAt',
      locale: locale
    });
    
    return response.items as unknown as IJournalEntry[];
  } catch (error) {
    console.error('Error fetching all journal entries:', error);
    console.log('Falling back to mock data');
    return getMockJournalEntriesByLanguage(locale);
  }
};

export const getJournalEntryBySlug = async (slug: string, locale: SupportedLanguage = DEFAULT_LANGUAGE) => {
  try {
    if (SPACE_ID === 'your_space_id_here' || ACCESS_TOKEN === 'your_access_token_here') {
      console.log('Using mock journal entries data');
      return getMockJournalEntriesByLanguage(locale).find(entry => entry.fields.slug === slug) || null;
    }
    
    const response = await contentfulClient.getEntries<JournalEntryType>({
      content_type: 'journalEntry',
      'fields.slug': slug,
      limit: 1,
      locale: locale
    });
    
    return (response.items[0] as unknown as IJournalEntry) || null;
  } catch (error) {
    console.error(`Error fetching journal entry with slug ${slug}:`, error);
    console.log('Falling back to mock data');
    return getMockJournalEntriesByLanguage(locale).find(entry => entry.fields.slug === slug) || null;
  }
};
