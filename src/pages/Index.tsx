import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ContactSection } from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <>
      <Helmet>
        {/* Titel & Meta Description */}
        <title>Barbershop Augsburg | Mr. Clipper Barber</title>
        <meta
          name="description"
          content="Besuche unseren Premium Barbershop Mr. Clipper Barber in Augsburg für erstklassige Haarschnitte, Bartpflege und individuelle Styles. Jetzt Termin buchen!"
        />
        <meta
          name="keywords"
          content="Barbershop, Herrenfriseur, Haarschnitt, Bartpflege, Rasur, Augsburg, Mr. Clipper Barber"
        />
        <link rel="canonical" href="https://mr-clipper.de" />

        {/* Open Graph */}
        <meta property="og:title" content="Mr. Clipper Barber | Premium Barbershop Augsburg" />
        <meta
          property="og:description"
          content="Erstklassige Haarschnitte und Bartpflege für den modernen Gentleman in Augsburg."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mr-clipper.de" />
        <meta property="og:image" content="https://mr-clipper.de/images/og-image.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mr. Clipper Barber | Premium Barbershop Augsburg" />
        <meta
          name="twitter:description"
          content="Erleben Sie erstklassige Haarschnitte und Bartpflege für den modernen Gentleman."
        />
        <meta name="twitter:image" content="https://mr-clipper.de/images/og-image.png" />

        {/* Schema.org LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Barbershop",
            "name": "Mr. Clipper Barber",
            "image": "https://mr-clipper.de/images/logo.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Ulmer Str. 4",
              "addressLocality": "Augsburg",
              "postalCode": "86154",
              "addressCountry": "DE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "48.3705",
              "longitude": "10.8978"
            },
            "url": "https://mr-clipper.de",
            "telephone": "+49 821 20980306",
            "openingHours": "Mo-Fr 09:00-19:00, Sa 09:00-17:00",
            "priceRange": "€€",
            "servesCuisine": "Barbershop Services",
            "sameAs": [
              "https://www.facebook.com/mrclipper",
              "https://www.instagram.com/mrclipper"
            ]
          })}
        </script>
      </Helmet>

      {/* Navigation */}
      <Navigation />

      <main>
        <HeroSection />
        <ServicesSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
};

export default Index;

