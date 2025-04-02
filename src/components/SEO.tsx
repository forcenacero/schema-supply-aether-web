
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
}

const SEO: React.FC<SEOProps> = ({
  title = 'Schema Supply | High-End Lifestyle & Design',
  description = 'Schema Supply is a high-end lifestyle and design brand focused on creating timeless, minimalist experiences.',
  image = 'https://lovable.dev/opengraph-image-p98pqg.png',
  url = 'https://www.schema.supply',
  type = 'website',
}) => {
  const siteTitle = title.includes('Schema Supply') ? title : `${title} | Schema Supply`;
  
  return (
    <Helmet>
      {/* Basic metadata */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Canonical link */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;
