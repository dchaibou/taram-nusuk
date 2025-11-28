import HeroSection from "@/components/home/HeroSection";
import ServicesPreview from "@/components/home/ServicesPreview";

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Section 1: Bannière principale (Hero) */}
      <HeroSection />

      {/* Section 2: Aperçu des services */}
      <ServicesPreview />

      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Bienvenue chez Taram Nusuk
        </h2>
        <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto">
          Le modèle de base pour votre agence de Hajj et Omra. Personnalisez
          rapidement cette page avec vos forfaits exclusifs, galeries
          inspirantes et informations de contact.
        </p>
      </section>
    </div>
  );
}
