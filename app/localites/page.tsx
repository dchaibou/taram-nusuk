import LocalityCard from "@/components/localities/LocalityCard";
import { localitiesData } from "@/data/localitiesData";

/**
 * Page d'informations pratiques sur les villes saintes (Makkah, Madinah).
 */
export default function LocalitesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-text-default mb-3">
          Les Lieux Saints du Hajj et de l&apos;Omra
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
          Découvrez les informations essentielles sur La Mecque (Makkah) et
          Médine (Madinah), les destinations sacrées de votre pèlerinage.
        </p>
      </header>

      {/* Affichage des Localités */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {localitiesData.map((locality) => (
          <LocalityCard key={locality.id} locality={locality} />
        ))}
      </section>

      {/* Invitation à la préparation */}
      <div className="text-center mt-16 p-8 bg-primary/10 rounded-xl">
        <h2 className="text-2xl font-bold text-primary mb-2">
          Préparez votre voyage
        </h2>
        <p className="text-lg text-gray-700">
          Chaque forfait inclut un guide détaillé de ces localités.
          Contactez-nous pour en savoir plus sur les visites (Ziyarates)
          incluses.
        </p>
      </div>
    </div>
  );
}
