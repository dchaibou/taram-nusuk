const ServicesPreview = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center text-text-default mb-8">
        Nos Forfaits Populaires
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Placeholder 1: Omra */}
        <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-primary">
          <h3 className="text-xl font-semibold mb-2 text-primary">
            Forfait Omra Économique
          </h3>
          <p className="text-gray-600 mb-4">
            Voyage de 10 jours, hébergement en catégorie 3 étoiles.
          </p>
          <button className="text-primary hover:underline font-medium">
            Voir les détails
          </button>
        </div>
        {/* Placeholder 2: Hajj */}
        <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-primary">
          <h3 className="text-xl font-semibold mb-2 text-primary">
            Hajj Prestige 2026
          </h3>
          <p className="text-gray-600 mb-4">
            Accompagnement complet, hôtels 5 étoiles à Makkah et Madinah.
          </p>
          <button className="text-primary hover:underline font-medium">
            Voir les détails
          </button>
        </div>
        {/* Placeholder 3: Omra Longue */}
        <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-primary">
          <h3 className="text-xl font-semibold mb-2 text-primary">
            Omra Ramadhan
          </h3>
          <p className="text-gray-600 mb-4">
            Un mois complet de dévotion pendant le mois béni.
          </p>
          <button className="text-primary hover:underline font-medium">
            Voir les détails
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
