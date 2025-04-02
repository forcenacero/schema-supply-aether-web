
import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from '@/components/ui/carousel';
import { Link } from 'react-router-dom';

// Define services with localized content
const services = [
  {
    id: 1,
    title: {
      'en-US': 'Interior Design',
      'es': 'Diseño de Interiores',
      'fr': 'Design d\'Intérieur'
    },
    subtitle: {
      'en-US': 'Creating thoughtful, harmonious spaces that reflect your lifestyle and aspirations.',
      'es': 'Creando espacios armoniosos que reflejan tu estilo de vida y aspiraciones.',
      'fr': 'Création d\'espaces réfléchis et harmonieux qui reflètent votre style de vie et vos aspirations.'
    },
    subservices: [
      {
        id: 1,
        name: {
          'en-US': 'Residential',
          'es': 'Residencial',
          'fr': 'Résidentiel'
        },
        description: {
          'en-US': 'Transforming homes into personalized sanctuaries.',
          'es': 'Transformando hogares en santuarios personalizados.',
          'fr': 'Transformer les maisons en sanctuaires personnalisés.'
        },
        image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
      },
      {
        id: 2,
        name: {
          'en-US': 'Commercial',
          'es': 'Comercial',
          'fr': 'Commercial'
        },
        description: {
          'en-US': 'Designing functional spaces that enhance brand experience.',
          'es': 'Diseñando espacios funcionales que mejoran la experiencia de marca.',
          'fr': 'Conception d\'espaces fonctionnels qui améliorent l\'expérience de marque.'
        },
        image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
      },
      {
        id: 3,
        name: {
          'en-US': 'Hospitality',
          'es': 'Hospitalidad',
          'fr': 'Hôtellerie'
        },
        description: {
          'en-US': 'Creating memorable environments for guests and visitors.',
          'es': 'Creando ambientes memorables para huéspedes y visitantes.',
          'fr': 'Création d\'environnements mémorables pour les clients et les visiteurs.'
        },
        image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
      }
    ]
  },
  {
    id: 2,
    title: {
      'en-US': 'Furniture Design',
      'es': 'Diseño de Muebles',
      'fr': 'Design de Mobilier'
    },
    subtitle: {
      'en-US': 'Crafting bespoke furniture pieces that blend form and function with meticulous attention to detail.',
      'es': 'Elaborando piezas de mobiliario a medida que combinan forma y función con meticulosa atención al detalle.',
      'fr': 'Création de meubles sur mesure qui allient forme et fonction avec une attention méticuleuse aux détails.'
    },
    subservices: [
      {
        id: 1,
        name: {
          'en-US': 'Custom Pieces',
          'es': 'Piezas Personalizadas',
          'fr': 'Pièces Personnalisées'
        },
        description: {
          'en-US': 'One-of-a-kind furniture designed specifically for your space.',
          'es': 'Muebles únicos diseñados específicamente para tu espacio.',
          'fr': 'Meubles uniques conçus spécifiquement pour votre espace.'
        },
        image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
      },
      {
        id: 2,
        name: {
          'en-US': 'Collections',
          'es': 'Colecciones',
          'fr': 'Collections'
        },
        description: {
          'en-US': 'Curated series of furniture with cohesive design language.',
          'es': 'Series curadas de muebles con lenguaje de diseño cohesivo.',
          'fr': 'Séries organisées de meubles avec un langage de conception cohérent.'
        },
        image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
      },
      {
        id: 3,
        name: {
          'en-US': 'Restoration',
          'es': 'Restauración',
          'fr': 'Restauration'
        },
        description: {
          'en-US': 'Breathing new life into cherished furniture pieces.',
          'es': 'Dando nueva vida a piezas de mobiliario apreciadas.',
          'fr': 'Donner une nouvelle vie à des meubles précieux.'
        },
        image: 'https://images.unsplash.com/photo-1593696954577-ab3d39317b97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
      }
    ]
  },
  {
    id: 3,
    title: {
      'en-US': 'Product Design',
      'es': 'Diseño de Productos',
      'fr': 'Conception de Produits'
    },
    subtitle: {
      'en-US': 'Developing innovative, user-centered products that solve problems with elegance and simplicity.',
      'es': 'Desarrollando productos innovadores centrados en el usuario que resuelven problemas con elegancia y simplicidad.',
      'fr': 'Développement de produits innovants centrés sur l\'utilisateur qui résolvent les problèmes avec élégance et simplicité.'
    },
    subservices: [
      {
        id: 1,
        name: {
          'en-US': 'Lighting',
          'es': 'Iluminación',
          'fr': 'Éclairage'
        },
        description: {
          'en-US': 'Sculptural lighting solutions that transform atmospheres.',
          'es': 'Soluciones de iluminación escultural que transforman atmósferas.',
          'fr': 'Solutions d\'éclairage sculpturales qui transforment les atmosphères.'
        },
        image: 'https://images.unsplash.com/photo-1543248939-ff40856f65d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
      },
      {
        id: 2,
        name: {
          'en-US': 'Homeware',
          'es': 'Artículos para el Hogar',
          'fr': 'Articles Ménagers'
        },
        description: {
          'en-US': 'Everyday objects elevated through thoughtful design.',
          'es': 'Objetos cotidianos elevados a través de un diseño cuidadoso.',
          'fr': 'Objets quotidiens élevés grâce à une conception réfléchie.'
        },
        image: 'https://images.unsplash.com/photo-1526406915894-7bcd65f60845?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
      },
      {
        id: 3,
        name: {
          'en-US': 'Accessories',
          'es': 'Accesorios',
          'fr': 'Accessoires'
        },
        description: {
          'en-US': 'Finishing touches that complete and enhance your space.',
          'es': 'Toques finales que completan y mejoran tu espacio.',
          'fr': 'Touches finales qui complètent et améliorent votre espace.'
        },
        image: 'https://images.unsplash.com/photo-1584589167171-541ce45f1eea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
      }
    ]
  },
  {
    id: 4,
    title: {
      'en-US': 'Spatial Design',
      'es': 'Diseño Espacial',
      'fr': 'Conception Spatiale'
    },
    subtitle: {
      'en-US': 'Creating immersive environments that engage and inspire through a perfect balance of aesthetics and functionality.',
      'es': 'Creando entornos inmersivos que involucran e inspiran a través de un equilibrio perfecto entre estética y funcionalidad.',
      'fr': 'Création d\'environnements immersifs qui engagent et inspirent grâce à un équilibre parfait entre esthétique et fonctionnalité.'
    },
    subservices: [
      {
        id: 1,
        name: {
          'en-US': 'Exhibitions',
          'es': 'Exposiciones',
          'fr': 'Expositions'
        },
        description: {
          'en-US': 'Compelling spatial narratives for museums and galleries.',
          'es': 'Narrativas espaciales convincentes para museos y galerías.',
          'fr': 'Récits spatiaux convaincants pour les musées et les galeries.'
        },
        image: 'https://images.unsplash.com/photo-1594388052859-07106e8d9f62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
      },
      {
        id: 2,
        name: {
          'en-US': 'Retail',
          'es': 'Comercio Minorista',
          'fr': 'Commerce de Détail'
        },
        description: {
          'en-US': 'Innovative store concepts that enhance customer experience.',
          'es': 'Conceptos innovadores de tiendas que mejoran la experiencia del cliente.',
          'fr': 'Concepts de magasins innovants qui améliorent l\'expérience client.'
        },
        image: 'https://images.unsplash.com/photo-1604584884503-e6c8bab921d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
      },
      {
        id: 3,
        name: {
          'en-US': 'Events',
          'es': 'Eventos',
          'fr': 'Événements'
        },
        description: {
          'en-US': 'Temporary installations that create lasting impressions.',
          'es': 'Instalaciones temporales que crean impresiones duraderas.',
          'fr': 'Installations temporaires qui créent des impressions durables.'
        },
        image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
      }
    ]
  },
  {
    id: 5,
    title: {
      'en-US': 'Consulting',
      'es': 'Consultoría',
      'fr': 'Conseil'
    },
    subtitle: {
      'en-US': 'Strategic design guidance that helps brands and spaces reach their full potential and resonate with their audience.',
      'es': 'Orientación estratégica de diseño que ayuda a las marcas y espacios a alcanzar su máximo potencial y resonar con su audiencia.',
      'fr': 'Conseils stratégiques en matière de conception qui aident les marques et les espaces à atteindre leur plein potentiel et à entrer en résonance avec leur public.'
    },
    subservices: [
      {
        id: 1,
        name: {
          'en-US': 'Brand Strategy',
          'es': 'Estrategia de Marca',
          'fr': 'Stratégie de Marque'
        },
        description: {
          'en-US': 'Developing cohesive visual and experiential identities.',
          'es': 'Desarrollando identidades visuales y experienciales cohesivas.',
          'fr': 'Développement d\'identités visuelles et expérientielles cohérentes.'
        },
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
      },
      {
        id: 2,
        name: {
          'en-US': 'Design Audits',
          'es': 'Auditorías de Diseño',
          'fr': 'Audits de Conception'
        },
        description: {
          'en-US': 'Evaluating existing spaces and identifying opportunities.',
          'es': 'Evaluando espacios existentes e identificando oportunidades.',
          'fr': 'Évaluation des espaces existants et identification des opportunités.'
        },
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
      },
      {
        id: 3,
        name: {
          'en-US': 'Creative Direction',
          'es': 'Dirección Creativa',
          'fr': 'Direction Créative'
        },
        description: {
          'en-US': 'Guiding the visual language and aesthetic decisions.',
          'es': 'Guiando el lenguaje visual y las decisiones estéticas.',
          'fr': 'Guider le langage visuel et les décisions esthétiques.'
        },
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
      }
    ]
  }
];

interface ServiceProps {
  service: typeof services[0];
}

const ServiceSection: React.FC<ServiceProps> = ({ service }) => {
  const { language } = useLanguage();
  
  return (
    <section className="py-20 border-b border-schema-lightgray">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              {service.title[language as keyof typeof service.title] || service.title['en-US']}
            </h2>
            <p className="text-lg md:text-xl text-schema-darkgray mb-8">
              {service.subtitle[language as keyof typeof service.subtitle] || service.subtitle['en-US']}
            </p>
            <Link to="/contact" className="button">
              {language === 'en-US' && 'Get in Touch'}
              {language === 'es' && 'Contáctanos'}
              {language === 'fr' && 'Contactez-nous'}
            </Link>
          </div>
          
          <div className="animate-fade-in animate-delay-200">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {service.subservices.map((subservice) => (
                  <CarouselItem key={subservice.id} className="md:basis-1/2 lg:basis-1/2">
                    <div className="bg-schema-offwhite p-1">
                      <div className="aspect-[4/3] overflow-hidden">
                        <img 
                          src={subservice.image} 
                          alt={subservice.name[language as keyof typeof subservice.name] || subservice.name['en-US']} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-medium mb-2">
                          {subservice.name[language as keyof typeof subservice.name] || subservice.name['en-US']}
                        </h3>
                        <p className="text-schema-darkgray">
                          {subservice.description[language as keyof typeof subservice.description] || subservice.description['en-US']}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="hidden md:block">
                <CarouselPrevious />
                <CarouselNext />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <div className="bg-schema-white">
      {services.map((service) => (
        <ServiceSection key={service.id} service={service} />
      ))}
    </div>
  );
};

export default Services;
