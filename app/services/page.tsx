import PackageCard from "@/components/packages/PackageCard";
import { packagesData } from "@/data/packagesData";

/**
 * Page d'affichage de tous les forfaits Hajj et Omra
 */
export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Titre et Description */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-text-default mb-3">
          Nos Forfaits Hajj et Omra
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Découvrez la sélection de nos voyages organisés. Que vous recherchiez
          une expérience économique ou un séjour de luxe, nous avons le forfait
          adapté à vos besoins.
        </p>
      </header>

      {/* Filtres (Placeholder pour le futur) */}
      <section className="mb-10 p-4 bg-gray-50 rounded-lg border border-gray-200 text-center text-gray-500">
        [Zone de Filtres : Type (Hajj/Omra), Durée, Prix, Étoiles (À implémenter
        plus tard)]
      </section>

      {/* Grille des Forfaits */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {packagesData.map((pkg) => (
          <PackageCard key={pkg.id} pkg={pkg} />
        ))}
      </section>

      {/* Message si aucun forfait n'est trouvé (pour le futur) */}
      {packagesData.length === 0 && (
        <p className="text-center text-lg text-gray-500 mt-12">
          Aucun forfait n&apos;est actuellement disponible. Veuillez revenir plus
          tard !
        </p>
      )}
    </div>
  );
}
