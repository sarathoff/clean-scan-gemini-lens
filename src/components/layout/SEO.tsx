
import React from 'react';
import { Helmet } from 'react-helmet';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
}

const SEO = ({ 
  title = "Under the Label - Ingredient Analysis with AI",
  description = "Analyze product ingredients with AI to make healthier choices. Scan or type ingredients to get detailed analysis about what's in your products.",
  canonical = "https://underthelabel.com"
}: SEOProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@underthelabel_app" />
      <meta name="twitter:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />

      {/* Google Site Verification - Already in index.html */}
      <meta name="google-site-verification" content="vujiyRfPDE0HVhb2SyrABOCcVXa1jKxku1hZwX7iB1k" />
    </Helmet>
  );
};

export default SEO;
