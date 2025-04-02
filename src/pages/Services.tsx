
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Services from '../components/Services';
import SEO from '../components/SEO';
import { useLanguage } from '../hooks/useLanguage';

const ServicesPage = () => {
  const { language } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title={
          language === 'en-US' ? 'Services' : 
          language === 'es' ? 'Servicios' : 
          'Services'
        }
        description={
          language === 'en-US' ? 'Explore Schema Supply\'s range of high-end design services including interior design, furniture design, and spatial design.' : 
          language === 'es' ? 'Explore la gama de servicios de diseño de alta gama de Schema Supply, incluyendo diseño de interiores, diseño de muebles y diseño espacial.' : 
          'Explorez la gamme de services de design haut de gamme de Schema Supply, notamment le design d\'intérieur, le design de mobilier et le design spatial.'
        }
        url="https://www.schema.supply/services"
      />
      <Header />
      <main className="flex-grow pt-24">
        <section className="py-24 bg-schema-white">
          <div className="container-custom">
            <div className="mb-16 max-w-3xl">
              <h1 className="text-5xl font-light mb-6">
                {language === 'en-US' && 'Our Services'}
                {language === 'es' && 'Nuestros Servicios'}
                {language === 'fr' && 'Nos Services'}
              </h1>
              <p className="text-schema-darkgray text-xl">
                {language === 'en-US' && 'We create meaningful design solutions that blend aesthetics with functionality, tailored to your specific needs and vision.'}
                {language === 'es' && 'Creamos soluciones de diseño significativas que combinan estética con funcionalidad, adaptadas a tus necesidades y visión específicas.'}
                {language === 'fr' && 'Nous créons des solutions de design significatives qui allient esthétique et fonctionnalité, adaptées à vos besoins et à votre vision spécifiques.'}
              </p>
            </div>
          </div>
        </section>
        
        <Services />
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
