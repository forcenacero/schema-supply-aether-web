
import React from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext 
} from '@/components/ui/carousel';
import { useLanguage } from '../hooks/useLanguage';

// Define trusted companies with localized names
const trustedCompanies = [
  {
    id: 1,
    name: {
      'en-US': 'Arkitect Studio',
      'es': 'Estudio Arkitect',
      'fr': 'Studio Arkitect'
    },
    logo: 'https://placehold.co/200x80/f1f1f1/333333?text=ARKITECT'
  },
  {
    id: 2,
    name: {
      'en-US': 'Minimal Co.',
      'es': 'Minimal Co.',
      'fr': 'Minimal Co.'
    },
    logo: 'https://placehold.co/200x80/f1f1f1/333333?text=MINIMAL'
  },
  {
    id: 3,
    name: {
      'en-US': 'Atelier Design',
      'es': 'Atelier Diseño',
      'fr': 'Atelier Design'
    },
    logo: 'https://placehold.co/200x80/f1f1f1/333333?text=ATELIER'
  },
  {
    id: 4,
    name: {
      'en-US': 'Nord Furniture',
      'es': 'Muebles Nord',
      'fr': 'Meubles Nord'
    },
    logo: 'https://placehold.co/200x80/f1f1f1/333333?text=NORD'
  },
  {
    id: 5,
    name: {
      'en-US': 'Pure Living',
      'es': 'Pure Living',
      'fr': 'Pure Living'
    },
    logo: 'https://placehold.co/200x80/f1f1f1/333333?text=PURE'
  },
  {
    id: 6,
    name: {
      'en-US': 'Essence Decor',
      'es': 'Essence Decoración',
      'fr': 'Essence Décor'
    },
    logo: 'https://placehold.co/200x80/f1f1f1/333333?text=ESSENCE'
  }
];

const LogoCarousel = () => {
  const { language } = useLanguage();
  
  return (
    <section className="py-16 bg-schema-offwhite border-t border-b border-schema-lightgray">
      <div className="container-custom">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-light mb-3">
            {language === 'en-US' && 'Trusted By'}
            {language === 'es' && 'Confían en Nosotros'}
            {language === 'fr' && 'Ils Nous Font Confiance'}
          </h2>
          <div className="w-20 h-px bg-schema-gray mx-auto"></div>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="mx-auto w-full max-w-5xl"
        >
          <CarouselContent>
            {trustedCompanies.map((company) => (
              <CarouselItem key={company.id} className="md:basis-1/3 lg:basis-1/4">
                <div className="p-4 flex items-center justify-center h-32">
                  <img
                    src={company.logo}
                    alt={company.name[language as keyof typeof company.name] || company.name['en-US']}
                    className="max-h-16 max-w-full grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default LogoCarousel;
