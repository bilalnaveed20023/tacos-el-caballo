import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Board from "@/components/Board";
import Plates from "@/components/Plates";
import Story from "@/components/Story";
import Visit from "@/components/Visit";
import Reviews from "@/components/Reviews";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import StickyBar from "@/components/StickyBar";
import { site } from "@/lib/content";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FoodEstablishment",
  name: site.name,
  servesCuisine: ["Mexican", "Tacos"],
  telephone: site.tel,
  priceRange: "$",
  address: { "@type": "PostalAddress", streetAddress: site.street, addressLocality: "Detroit", addressRegion: "MI", postalCode: site.zip, addressCountry: "US" },
  geo: { "@type": "GeoCoordinates", latitude: site.lat, longitude: site.lng },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "10:00", closes: "21:00" },
  ],
  aggregateRating: { "@type": "AggregateRating", ratingValue: site.rating, reviewCount: site.reviewCount },
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Board />
        <Plates />
        <Story />
        <Visit />
        <Reviews />
        <Gallery />
      </main>
      <Footer />
      <StickyBar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
