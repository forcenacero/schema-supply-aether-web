
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../hooks/useLanguage';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
}

const SEO: React.FC<SEOProps> = ({
  title = 'Upcofly | High-End Lifestyle & Design',
  description = 'Upcofly is a high-end lifestyle and design brand focused on creating timeless, minimalist experiences.',
  image = 'https://lovable.dev/opengraph-image-p98pqg.png',
  url = 'https://www.upcofly.com',
  type = 'website',
}) => {
  const { language } = useLanguage();
  const siteTitle = title.includes('Upcofly') ? title : `${title} | Upcofly`;
  
  return (
    <Helmet>
      {/* Basic metadata */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      
      {/* Language metadata */}
      <html lang={language.split('-')[0]} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content={language} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Canonical link */}
      <link rel="canonical" href={url} />
      
      {/* Hreflang links for language alternates */}
      <link rel="alternate" hrefLang="x-default" href={url} />
      <link rel="alternate" hrefLang="en" href={`${url}?lang=en-US`} />
      <link rel="alternate" hrefLang="es" href={`${url}?lang=es`} />
      <link rel="alternate" hrefLang="fr" href={`${url}?lang=fr`} />
    </Helmet>
  );
};

export default SEO;
